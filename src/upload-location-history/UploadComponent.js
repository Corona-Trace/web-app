import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
// import Dropzone from 'react-dropzone';
import {Form} from 'react-bootstrap';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css';
import { FileSaver, saveAs } from 'file-saver';




// import DropzoneComponent from 'react-dropzone-component';

// var componentConfig = {
//     iconFiletypes: ['.jpg', '.png', '.gif', '.zip'],
//     postUrl: 'no-url'
// };
//
//
//
// var eventHandlers = { addedfile: (file) => console.log(file) };
// var djsConfig = { autoProcessQueue: false, addRemoveLinks: true};


class UploadComponent extends Component {
    constructor(props) {
        super(props);
    }

    getUploadParams = () => {

    };

    handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta);
    };

    handleSubmit = (files, allFiles) => {
        var reader = new FileReader();
        reader.readAsText(files[0]['file']);
        reader.onload = function(e) {
            console.log(reader['result']);
        }
    };


    render() {
        return (
            <div>
                <Container>
                    <h1>Upload to CoronaTrace</h1>
                    <div>
                        <Dropzone
                            onChangeStatus={this.handleChangeStatus}
                            onSubmit={this.handleSubmit}
                            styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                        />
                    </div>


                </Container>
            </div>
        );
    }
}


export default UploadComponent;