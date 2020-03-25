import React, {Component} from 'react';
import Container from "react-bootstrap/esm/Container";

class UploadComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Upload to CoronaTrace</h1>
                </Container>
            </div>
        );
    }
}


export default UploadComponent;