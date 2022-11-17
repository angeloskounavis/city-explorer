import React from 'react'
import { Col, Row } from 'react-bootstrap'

class Footer extends React.Component{
  render() {
    return(
      <footer>
        <Row>
          <Col md= {4}>
            <h4>
              &copy; created by Angelos Kounavis;
            </h4>

          </Col> 
          <Col md= {{ span: 3, offset: 5 }}>
            <small>
              <a href= "https://locationiq.com">
                search by location
              </a>
            </small>

          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer;
