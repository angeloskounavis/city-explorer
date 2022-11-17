import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component{
  render() {
return(
  <header>
    <Navbar bg= "dark" expand= "lg">
      <h1>
        City Explorer
      </h1>
      <p>Enter a location below to learn more about the city</p>
    </Navbar>
  </header>
)
  }
}

export default Header;
