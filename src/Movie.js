
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




class Movie extends React.Component{

render(){
  return (
      <div>
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{this.props.movie.title}</Card.Title>
        <Card.Img variant = "top" src = {this.props.movie.image_url}/>
        <Card.Text>
          Released on {this.props.movie.released_on} 
        </Card.Text>
        <Card.Text>
          Overview {this.props.movie.overview} 
        </Card.Text>
        <Card.Text>
          Rated {this.props.movie.average_votes} rated with {this.props.movie.total_votes} Votes
        </Card.Text>
        <Card.Text>
          Movies ranking{this.props.movie.popularity} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
} 

export default Movie;
