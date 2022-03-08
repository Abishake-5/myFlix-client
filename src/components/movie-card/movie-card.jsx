import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './movie-card.scss'

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
         return (
  
           <div onClick={() => onMovieClick(movie)} 
              className="movie-card">
                <Card>
                    <Card.Img variant="top" src={movie.ImagePath} />
                    <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
                    </Card.Body>
                </Card>
              </div>

            )
    }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};