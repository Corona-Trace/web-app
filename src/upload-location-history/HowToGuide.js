import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";


class HowToGuide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>How To Guide</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item>'Location History' should be pre-selected</ListGroup.Item>
                    <ListGroup.Item>Click 'Next Step'</ListGroup.Item>
                    <ListGroup.Item>Under 'Delivery Method,' select 'Send download link via email'</ListGroup.Item>
                    <ListGroup.Item>Select 'Create export'</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default HowToGuide;