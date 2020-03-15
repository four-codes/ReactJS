import React , { Fragment, Component } from "react"
import Alert from 'react-bootstrap/Alert'


class Redirect extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

            <Alert variant="danger">
            <Alert.Heading>Hey, nice to see you, you are in Troble!!!!</Alert.Heading>
            <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
            </p>
            </Alert>    
        );
    }
};

export default Redirect;