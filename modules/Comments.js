import React from 'react'
import Comment from './Comment'
import Actions from './Actions'

export default React.createClass({
  getDefaultProps(){
    return {
      comments: [
        {
          author_name: "Joker",
          author__img: "../images/thejoker.jpg",
          text: "20 mins ago",
          date: "Wanna play a game Bats???"
        },{
          author_name: "Robin",
          author__img: "../images/robin.jpg",
          date: "OH! I want to play Joker!",
          text: "5 mins ago"
        },{
          author_name: "Mr. Freeze",
          author__img: "../images/mrfreeze.png",
          date: "I think we should all chill tonight. Get it guys? Because my name is Freeze lolz.",
          text: "2 mins ago"
        }
      ]
    }
  },

  render() {
    return (
      <div>
        {this.props.comments.map(function(comment, i){
          return <Comment key={i} author_name={comment.author_name} author__img={comment.author__img} text={comment.text} date={comment.date}/>;
        })}
      </div>
      
    )
  }
})
