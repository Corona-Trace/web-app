import React, {Component} from 'react';
import {Row, Container} from "react-bootstrap";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css';
import {ProgressBar} from "react-bootstrap";

const DATE_FILTER = 1577854800000; // 01/01/2020

class UploadComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta);
    };


    handleSubmit = (files, allFiles) => {
        var reader = new FileReader();
        reader.readAsText(files[0]['file']);
        reader.onloadstart = function(e) {
            console.log('Loading has started');
        };
        reader.onloadend = function(e) {
            console.log('Loading has finished');
        };
        reader.onload = function (e) {
            var data = JSON.parse(reader['result']);
            var filteredData = {'locations': []};
            for (var i = 0; i < data['locations'].length; i++) {
                var record = data['locations'][i];
                var dateAsMillis = parseInt(record['timestampMs']);
                if (dateAsMillis >= DATE_FILTER) {
                    filteredData['locations'].push(record);
                }
            }
        };
        reader.onprogress = function (e) {
            var now = (e.loaded * 100 / e.total);
            console.log(now);

            // NEED HELP HERE
        }
    };


    render() {
        return (
            <div>
                <Container>
                    <h1>Upload to CoronaTrace</h1>
                    <ProgressBar animated now={0}/>
                    <br/>

                    <div>
                        <Dropzone
                            inputContent={'Drag and Drop Your .zip File Here'}
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