import React, { Fragment, Component } from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {content:[{
            id: 1,
            title: 'What is Linux?',
            body: "Linux is an" +
            "operating system that evolved from a " +
            "kernel created by Linus Torvalds when he was a student."
        },{
            id: 2,
            title: 'Linux Terminology',
            body: "Linux is an operating system that evolved from a kernel created by Linus Torvalds when he was a student."
        },{
            id: 3,
            title: 'Linux Terminology',
            body: "Linux is an operating system that evolved from a kernel created by Linus Torvalds when he was a student."
        }
    ]
    }
}
    render() {
        const { content } = this.state;

        return (
            
            <Fragment>
                <Container>
                    <Row>
                        {
                        content.map((res, key) => (
                            <Col md={4} key={key}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{res.title}</Card.Title>
                                    <Card.Text>
                                        {res.body}
                                    </Card.Text>
                                    <Button variant="primary">linux</Button>
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
