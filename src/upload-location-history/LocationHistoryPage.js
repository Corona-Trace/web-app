import React, {Component} from 'react';
import GoogleTakeout from "./GoogleTakeout";
import UploadComponent from "./UploadComponent";
import {Container, Row} from 'react-bootstrap'

class LocationHistoryPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 className={'main-header'}>CoronaTrace - Upload Location History</h1>
                    <hr/>
                    <GoogleTakeout/>
                    <hr/>
                    <UploadComponent/>
                </Container>
            </div>
        );
    }
}

export default LocationHistoryPage;