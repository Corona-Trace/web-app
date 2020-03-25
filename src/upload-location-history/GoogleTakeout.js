import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import HowToGuide from "./HowToGuide";

class GoogleTakeout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h1>Google Takeout</h1>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <h3>Email address</h3>
                                    <Form.Control type="email" placeholder="your_email@gmail.com" />
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