import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import CardGroup from 'react-bootstrap/CardGroup'
import Movie from './Movie'

class Movies extends React.Component{
  render() {
    return(
      <div>
        <CardGroup style = {{width: '18rem'}}>
          <h3>
            Here is your Movies
          </h3>
          {this.props.movies.length && this.props.movies.map((movie, index) => 
          (<Movie 
          key = {index}
          movie = {movie}
          />
          )
          )}
          
        </CardGroup>
      </div>
    )
  }
}

export default Movies;
