import React from 'react'

export default React.createClass({
  render() {
    return (
      <article className="comments__article">
        <div className="comments__detail--wrapper">
          <img className="comments__avatar" src={this.props.author__img}/>
            <h2 className="comments__name">{this.props.author_name}</h2>
            <h3 className="comments__date">{this.props.date}</h3>
        </div>
        <div className="text--wrapper">
          <p className="comments__text">
            {this.props.text}
          </p>
        </div>
      </article>
    )
  }
});
