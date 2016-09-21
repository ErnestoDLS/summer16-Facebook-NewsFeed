import React from 'react'

export default React.createClass({
  componentWillMount(){
    this.setState({ liked: false });
    this.setState({ commented: false });
    this.setState({ shared: false });
  },
  onHandleClickLike(e){
    this.setState({ liked: this.state.liked ? false: true})
  },
  onHandleClickComment(e){
    this.setState({ commented: this.state.commented ? false: true})
  },

  onHandleClickShare(e){
    this.setState({shared: this.state.shared ? false: true})
  },

  render() {
    return (
      <div>
        <h2 className={this.state.liked ? "like__article--clicked" : "like__article"} onClick={this.onHandleClickLike}>Like</h2>
        <h2 className={this.state.commented ? "comment__article--clicked" : "comment__article"} onClick={this.onHandleClickComment}>Comment</h2>
        <h2 className={this.state.shared ? "share__article--clicked" : "share__article"} onClick={this.onHandleClickShare}><i className="fa fa-share" aria-hidden="true"></i>Share</h2>
      </div>
    )
  }
})
