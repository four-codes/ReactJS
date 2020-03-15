import React, {Fragment, Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';

import { Row, Col, Card, Container } from 'react-bootstrap';

 class About extends Component {

  // constructor(){
  //   super ()
  //   this.state = {
  //     users: [],
  //     loding: false
  //   };
  // }

  // componentDidMount(){
  //   axios.get('https://api.github.com/users').then(res => console.log(res.data));
  // }

  // async componentDidMount(){
  //    const _data = await axios.get('https://api.github.com/users')
  //  console.log(_data.headers);
  // }

  state = {
    users: [],
    loding: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }

  render() {

    const { users } = this.state;

    return (
            <Fragment>
                <Container>
                    <Row>
                        {
                            users.map((res, key) => (
                                <Col md={4} key={key}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={res.avatar_url} />
                                        <Card.Body>
                                            <Card.Title>{res.id}</Card.Title>      
                                            <Card.Text>{res.login}</Card.Text>
                                            {/* <Button  variant="primary">{res.html_url}</Button> */}
                                            <a href={res.html_url}>GITHUB</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

            </Fragment>
    )
  }
}

export default About;