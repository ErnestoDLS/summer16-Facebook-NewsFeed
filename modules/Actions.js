import React from 'react'

export default React.createClass({
  componentWillMount(){
    this.setState({ liked: false });
    this.setState({ commented: false });
  },
  onHandleClickLike(e){
    this.setState({ liked: this.state.liked ? false: true})
    e.preventDefault();
  },
  onHandleClickComment(e){
    this.setState({ commented: this.state.commented ? false: true})
    e.preventDefault();
  },

  render() {
    return (
      <div>
        <h2 className={this.stated.liked ? "like_article--clicked" : "like_article"} onClick={this.onHandleClickLike}>Like</h2>
        <h2 className={this.state.commented ? "comment_article--clicked" : "comment_article"} onClick={this.onHandleClickComment}></h2>
      </div>
    )
  }
})
