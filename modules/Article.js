import React from 'react'
import Comments from './Comments'
import Actions from './Actions'

export default React.createClass({

  getDefaultProps(){
    return {
      author_name: "Batman",
      author_img: "http://static1.comicvine.com/uploads/original/11111/111119341/5379448-7147771488-Batma.jpg",
      text: "I am the BAT MAN...",
      date: "December 8th"
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
