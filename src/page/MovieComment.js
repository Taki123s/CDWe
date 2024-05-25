import React, { Component } from "react";
import axios from "axios";
import userDefaultImage from "../img/user_default.png";
import { DeleteFilled } from '@ant-design/icons';

class MovieComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      rendered: 0,
      enableRender: 0,
      newComment: "",
      replyContent: {},
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    axios
      .get(`http://localhost:8080/comment`)
      .then((response) => {
        this.setState(
          {
            comments: response.data,
            rendered: response.data.length,
            enableRender: response.data.length > 5 ? response.data.length - 5 : 0,
          },
          () => {
            this.fetchUserDetailsForComments();
          }
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  fetchUserDetailsForComments = () => {
    const { comments } = this.state;
    const commentPromises = comments.map((comment) => {
      return axios
        .get(`http://localhost:8080/account/view/${comment.userCommentId}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error("Error fetching user details:", error);
          return null;
        });
    });

    Promise.all(commentPromises).then((userDetails) => {
      const updatedComments = comments.map((comment, index) => {
        return {
          ...comment,
          userComment: userDetails[index],
        };
      });
      this.setState({ comments: updatedComments });
    });
  };

  handleInputChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newComment } = this.state;
    const currentDate = new Date().toISOString();
    const newCommentData = {
      parentId: null,
      content: newComment,
      commentAt: currentDate,
      updateAt: currentDate,
      deleteAt: null,
      status: 1,
      movieId: 2, // Replace with the actual movie ID
      userCommentId: 5, // Replace with the actual user ID
      userReplyId: 5, // Replace with the actual user ID
      chapterId: 1, // Replace with the actual chapter ID
    };

    axios
      .post("http://localhost:8080/comment/create", newCommentData)
      .then((response) => {
        if (response.data.isSuccess) {
          this.fetchComments();
          this.setState({ newComment: "" });
        }
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  handleReplyInputChange = (event, commentId) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      replyContent: {
        ...prevState.replyContent,
        [commentId]: value,
      },
    }));
  };

  handleSubmitReply = (event, commentId) => {
    event.preventDefault();
    const reply = this.state.replyContent[commentId];
    const currentDate = new Date().toISOString();
    const replyData = {
      parentId: commentId,
      content: reply,
      commentAt: currentDate,
      updateAt: currentDate,
      deleteAt: null,
      status: 1,
      movieId: 2, // Replace with the actual movie ID
      userCommentId: 5, // Replace with the actual user ID
      userReplyId: 5, // Replace with the actual user ID
      chapterId: 1, // Replace with the actual chapter ID
    };

    axios
      .post("http://localhost:8080/comment/create", replyData)
      .then((response) => {
        if (response.data.isSuccess) {
          this.fetchComments();
          this.setState((prevState) => ({
            replyContent: {
              ...prevState.replyContent,
              [commentId]: "",
            },
          }));
        }
      })
      .catch((error) => {
        console.error("Error posting reply:", error);
      });
  };

  removeComment = (idComment) => {
    axios
      .post("http://localhost:8080/comment/remove", { idComment })
      .then((response) => {
        if (response.data.isSuccess) {
          this.fetchComments();
        }
      })
      .catch((error) => console.error("Error removing comment:", error));
  };

  showForm = (idComment) => {
    const updatedComments = this.state.comments.map((comment) => {
      if (comment.id === idComment) {
        return { ...comment, showReplyForm: !comment.showReplyForm };
      }
      return comment;
    });
    this.setState({ comments: updatedComments });
  };

  render() {
    const { comments, enableRender, newComment, replyContent } = this.state;
    return (
      <div className="anime__details__review">
        <div className="row row-no-gutters">
          <div className="section-title col-xs-6 comment-tile">
            <h5>Bình luận</h5>
          </div>
          <div className="section-title col-xs-6">
            <h5>Top View</h5>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
              className="form-control new-comment"
              rows="3"
              placeholder="Thêm bình luận mới"
              value={newComment}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-send-comment">
            Gửi
          </button>
        </form>

        <div id="commentBase">
          {comments.slice(0, 5).map((comment) => (
            <div className="anime__review__item root0" key={comment.id}>
              <div className="anime__review__item__pic">
                <img
                  src={comment.userComment?.avatarPicture || userDefaultImage}
                  alt="User Avatar"
                />
              </div>
              <div className="anime__review__item__text commentDisplay">
                <h6>
                  {comment.userComment?.fullName || "Anonymous"}{" "}
                  <span>- {comment.commentAt}</span>
                </h6>
                <p>{comment.content}</p>
                <button
                  onClick={() => this.removeComment(comment.id)}
                  className="btn btn-delete-comment"
                >
                  <DeleteFilled />
                </button>
              </div>

              <div className="replyBase">
                <button
                  className="setValue btn btn-outline-info"
                  onClick={() => this.showForm(comment.id)}
                >
                  Reply
                </button>
                {comment.showReplyForm && (
                  <form
                    onSubmit={(event) =>
                      this.handleSubmitReply(event, comment.id)
                    }
                  >
                    <div className="form-group">
                      <textarea
                        className="form-control new-comment"
                        rows="3"
                        placeholder="Trả lời bình luận"
                        value={replyContent[comment.id] || ""}
                        onChange={(event) =>
                          this.handleReplyInputChange(event, comment.id)
                        }
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-send-comment"
                    >
                      Gửi
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>

        {enableRender > 0 && (
          <button
            className="btn btn-outline-success"
            onClick={() => this.showMore("root0")}
            value={this.state.rendered}
          >
            Xem thêm
          </button>
        )}
      </div>
    );
  }
}

export default MovieComment;
