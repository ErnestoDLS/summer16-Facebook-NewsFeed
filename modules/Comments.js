import React from 'react'
import Comment from './Comment'
import Actions from './Actions'

export default React.createClass({
  getDefaultProps(){
    return {
      comments: [
        {
          author_name: "Joker",
          author_img: "http://vignette3.wikia.nocookie.net/villains/images/8/88/ComicJoker1.jpg/revision/latest?cb=20140128081048",
          text: "20 minutes ago",
          date: "Wanna play a game Bats???"
        },{
          author_name: "Robin",
          author_img: "http://i1260.photobucket.com/albums/ii574/Henchman4Hire3/Robin21_zps49201ff1.jpg",
          text: "OH! I want to play Joker!",
          date: "5 minutes ago"
        },{
          author_name: "Mr. Freeze",
          author_img: "http://vignette1.wikia.nocookie.net/batman/images/0/0d/Mr._Freeze_-_New_52.jpg/revision/latest?cb=20120523170930",
          text: "I think we should all chill tonight. Get it guys? Because my name is Freeze lolz.",
          date: "2 minutes ago"
        }
      ]
    }
  },

  render() {
    return (
      <div>
        {this.props.comments.map(function(comment, i){
          return <Comment key={i} author_name={comment.author_name} author_img={comment.author_img} text={comment.text} date={comment.date}/>;
        })}
      </div>
    )
  }
})
