import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import HowToGuide from "./HowToGuide";

class GoogleTakeout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: ''
        }
    }

    handleAccountDownloadButtonClick = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            var url = 'https://accounts.google.com/ServiceLogin?service=mail&passive=true&Email=' + this.state.userEmail + '&continue=https://takeout.google.com/settings/takeout/custom/location_history?hl=en&gl=US&expflags';
            window.open(url);
        }

    };

    handleEmailChange = (event) => {
        this.setState({
            userEmail: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h1>Google Takeout</h1>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Form onSubmit={this.handleAccountDownloadButtonClick} id={'email-form'}>
                                <Form.Group controlId="formBasicEmail">
                                    <h3>Email address</h3>
                                    <Form.Control type="email" placeholder="your@email.com" onChange={this.handleEmailChange}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Text className="text-muted">
                                        We'll never see your Google Info.
                                    </Form.Text>
                                    <br/>
                                    <Button size="sm" variant="primary" type="submit">
                                        Go to Google to download your DOWNLOAD YOUR LOCATION HISTORY
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <HowToGuide/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )

    }
}

export default GoogleTakeout;