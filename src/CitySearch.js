import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Alert} from 'react-bootstrap'

class CitySearch extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.displayLatLon();
  }

  render(){
    return(
        <Form onSubmit= {this.handleSubmit}>
          <Form.Group controlId = "cityName">
            <Form.Label> Where would you like to go?

            </Form.Label>
            <Form.Control onChange= {this.props.updateCity} type = "text" placeholder = "Enter your city"/>

          </Form.Group>
          {this.props.hasError &&
          <>
          <Alert variant = "danger">
            <strong className = "mr-auto"> ERROR {""}

            </strong>
            {this.props.errorMessage}, Try another city
          </Alert>
          </>
          }
<Button variant = "primary" type = "submit">Explore City</Button>
        </Form>

    )
}
}

export default CitySearch;
