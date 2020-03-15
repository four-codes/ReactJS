import React, {Fragment, Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

 class About extends Component {
  render() {
    return (
      <Fragment>
      <Jumbotron variant="info">
          <h1>Hello, J2J.IO</h1>
          <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
          </p>
          <p>
              <Button variant="primary">Learn more</Button>
          </p>
      </Jumbotron>
  </Fragment>
    )
  }
}

export default About;