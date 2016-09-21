import React from 'react'
import Comments from './Comments'
import Actions from './Actions'

export default React.createClass({

  getDefaultProps(){
    return {
      author_name: "Batman",
      author__img: "./images/batman.jpg",
      text: "Bored, Poison Ivy doesn't answer..... #TBH",
      date: "1hr - San Antonio, TX "
    }
  },

  render() {
    return (
        <article className="main__article">
          <div className="detail--wrapper">
            <img className="author__avatar" src={this.props.author__img}/>
              <h2 className="author__name">{this.props.author_name}</h2>
              <h3 className="author__date">{this.props.date}</h3>
              <p className="author__text">{this.props.text}</p>
            </div>
          <div className="article__actions">
            <Actions/>
          </div>
          <div>
            <Comments/>
          </div>
        </article>
    )
    }
  })
