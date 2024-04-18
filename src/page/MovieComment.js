import React, { Component } from 'react';

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
    // Sample comments data
    const sampleComments = {
      comments: [
        {
          id: 1,
          accountComment: {
            avatar: "https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg",
            fullName: "John Doe"
          },
          diffTime: "2 hours ago",
          content: "Phim hay quá điiii",
          userComment: 1,
          availableReply: true,
          showReplyForm: false // Add showReplyForm property to each comment
        },
        {
          id: 2,
          accountComment: {
            avatar: "https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg",
            fullName: "Jane Doe"
          },
          diffTime: "1 day ago",
          content: "Không bao giờ xem lại lần 2 >.<",
          userComment: 2,
          availableReply: false,
          showReplyForm: false // Add showReplyForm property to each comment
        }
      ],
      rendered: 2,
      enableRender: 3
    };

    // Update state with sample comments data
    this.setState({
      comments: sampleComments.comments,
      rendered: sampleComments.rendered,
      enableRender: sampleComments.enableRender
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
    
    // Create a new comment object
    const newCommentObject = {
        id: comments.length + 1, // Generate a unique ID for the new comment
        accountComment: {
            avatar: "https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg",
            fullName: "New User" // Change the name/avatar as needed
        },
        diffTime: "Just now", // Assuming the comment was just submitted
        content: newComment,
        userComment: 1, // Assuming the user ID is 1
        availableReply: false, // Assuming replies are not available immediately after posting
        showReplyForm: false // Initially set to false to hide the reply form
    };
    
    // Update the state to include the new comment
    this.setState(prevState => ({
        comments: [newCommentObject, ...prevState.comments], // Add the new comment at the beginning of the array
        newComment: '' // Clear the input field after submission
    }));
  };

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

  // Function to handle input change for reply comment
  handleReplyInputChange = (event, id) => {
    const { value } = event.target;
    this.setState(prevState => ({
      comments: prevState.comments.map(comment =>
        comment.id === id ? { ...comment, replyContent: value } : comment
      )
    }));
  };

  // Function to handle submission of reply comment
  handleSubmitReply = (event, id) => {
    event.preventDefault();
    // Handle submission of reply comment here
    // You can access the reply content using this.state.comments.find(comment => comment.id === id).replyContent
    const { comments } = this.state;
    const updatedComments = comments.map(comment => {
        if (comment.id === id) {
            // Update the comment to show the reply content and hide the reply form
            return { ...comment, replyContent: comment.replyContent, showReplyForm: false };
        } else {
            return comment;
        }
    });
    this.setState({ comments: updatedComments });
  };

  showMore = (type, parentId) => {
    // Make an AJAX call to fetch more comments
    // Replace the URL with your endpoint
    fetch('fetch-more-comments-endpoint', {
      method: 'POST',
      body: JSON.stringify({ type: type, parentId: parentId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Update comments with fetched data
        this.setState(prevState => ({
          comments: prevState.comments.concat(data.comments),
          rendered: data.rendered,
          enableRender: data.enableRender
        }));
      })
      .catch(error => console.error('Error fetching more comments:', error));
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
          <button type="submit" className="btn btn-primary">Gửi</button>
        </form>

        <div id="commentBase">
          {comments.map(comment => (
            <div className="anime__review__item root0" key={comment.id}>
              {/* Render comment details */}
              <div className="anime__review__item__pic">
                <img src={comment.accountComment.avatar} alt="" />
              </div>
              <div className="anime__review__item__text commentDisplay">
                <h6>
                  {comment.accountComment.fullName} <span>- {comment.diffTime}</span>
                </h6>
                <p>{comment.content}</p>
              </div>

              <div className="replyBase">
                <button
                  className="setValue btn btn-outline-info"
                  onClick={() => this.showForm(comment.id, comment.accountComment.id)}>
                  Reply
                </button>
                {/* Render reply form */}
                {comment.showReplyForm && (
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Trả lời bình luận"
                                value={comment.replyContent || ''}
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
