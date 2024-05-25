import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

class MovieComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      rendered: 0,
      enableRender: 0,
      newComment: "",
      replyContent: {},
      userId: null,
    };
  }

  componentDidMount() {
    // Fetch initial comments data
    this.fetchComments();
    this.setUserIdFromToken();
  }

  setUserIdFromToken = () => {
    const token = Cookies.get("jwt_token");
    console.log("ko sao", token);

    if (token) {
      try {
        console.log("decodedToken")

        const decodedToken = jwtDecode(token);
        this.setState({ userId: decodedToken.userId });
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  };

  fetchComments = () => {
    // Make an AJAX call to fetch comments
    axios.get(`http://localhost:8080/api/comments`)
      .then(response => {
        this.setState({
          comments: response.data,
          rendered: response.data.rendered,
          enableRender: response.data.enableRender
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  // Function to handle input change for new comment
  handleInputChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  // Function to handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { newComment, userId } = this.state;
    const { movieId } = this.props; // Access movieId from props
    const currentDate = new Date().toISOString();
    const newCommentData = {
      parentId: null,
      content: newComment,
      commentAt: currentDate,
      updateAt: currentDate,
      deleteAt: null,
      status: 1,
      movieId: movieId,
      userCommentId: userId,
      userReplyId: userId,
      chapterId: 1,
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
    const { userId } = this.state;
    const reply = this.state.replyContent[commentId];
    const { movieId } = this.props; // Access movieId from props
    const currentDate = new Date().toISOString();
    const replyData = {
      parentId: commentId,
      content: reply,
      commentAt: currentDate,
      updateAt: currentDate,
      deleteAt: null,
      status: 1,
      movieId: movieId,
      userCommentId: userId,
      userReplyId: userId,
      chapterId: 1,
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
      .catch(error => console.error('Error removing comment:', error));
  };

  // Function to show reply form
  showForm = (idComment, userReply) => {
    // Show/hide form logic
    const { comments } = this.state;
    const updatedComments = comments.map(comment => {
      if (comment.id === idComment) {
        return { ...comment, showReplyForm: true };
      } else {
        return comment;
      }
    });
    this.setState({ comments: updatedComments });
  };

  render() {
    const { comments, enableRender, newComment } = this.state;

    return (
      <div className="anime__details__review">
        <div className="section-title">
          <h5>Bình luận</h5>
        </div>

        {/* Comment form */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Thêm bình luận mới"
              value={newComment}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" >Gửi</button>
        </form>

        <div id="commentBase">
          {comments.map(comment => (
            <div className="anime__review__item root0" key={comment.id}>
              {/* Render comment details */}
              <div className="anime__review__item__pic">
                <img src={comment.userComment.avatarPicture} alt="" />
              </div>
              <div className="anime__review__item__text commentDisplay">
                <h6>
                  {comment.userComment.fullName} <span>- {comment.commentAt}</span>
                </h6>
                <p>{comment.content}</p>
              </div>

              <div className="replyBase">
                <button
                  className="setValue btn btn-outline-info"
                  onClick={() => this.showForm(comment.id, comment.userComment.id)}>
                  Reply
                </button>
                {/* Render reply form */}
                {comment.showReplyForm && (
                  <form onSubmit={this.handleSubmitReply}>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Trả lời bình luận"
                        // value={comment.replyContent || ''}
                        onChange={(event) => this.handleReplyInputChange(event, comment.id)}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Gửi</button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Render 'Xem thêm' button */}
        {enableRender > 0 && (
          <button
            className="btn btn-outline-success"
            onClick={() => this.showMore('root0')}
            value={this.state.rendered}>
            Xem thêm 5 bình luận tiếp theo, còn {this.state.enableRender} khả dụng
          </button>
        )}
      </div>
    );
  }
}

export default MovieComment;
