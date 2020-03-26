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
                    <ListGroup.Item>'<b>Location History</b>' should be pre-selected</ListGroup.Item>
                    <ListGroup.Item>Click '<b>Next Step</b>'</ListGroup.Item>
                    <ListGroup.Item>Under '<b>Delivery Method</b>,' select '<b>Send download link via email</b>'</ListGroup.Item>
                    <ListGroup.Item>Select '<b>Create export</b>'</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default HowToGuide;