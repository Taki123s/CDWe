import React, { Component } from "react";
import axios from "axios";

class MovieComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [], // Initialize comments state
      rendered: 0, // Initialize rendered state
      enableRender: 0, // Initialize enableRender state
      newComment: '', // Initialize newComment state to store the content of the new comment
    };
  }

  componentDidMount() {
    // Fetch initial comments data
    this.fetchComments();
  }

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
    const { newComment, comments } = this.state;

    // Update the state to include the new comment
    this.setState(prevState => ({
      comments: [{ id: comments.length + 1, content: newComment }, ...prevState.comments], // Assuming the structure of comments
      newComment: '' // Clear the input field after submission
    }));
  };

  // Function to remove a comment
  removeComment = idComment => {
    // Make an AJAX call to remove the comment
    // Replace the URL with your endpoint
    fetch('remove-comment-endpoint', {
      method: 'POST',
      body: JSON.stringify({ idComment: idComment }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.isSuccess) {
          // Reload comments after successful removal
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
