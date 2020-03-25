import React, {Component} from 'react';
import GoogleTakeout from "./GoogleTakeout";
import UploadComponent from "./UploadComponent";

class LocationHistoryPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>CoronaTrace - Upload Location History</h1>
                <GoogleTakeout/>
                <UploadComponent/>
            </div>
        );
    }
}

export default LocationHistoryPage;