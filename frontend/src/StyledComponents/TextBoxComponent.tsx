import { Component } from 'react'; // let's also import Component
import { Col, Container, Row } from 'react-bootstrap';

interface TextBoxComponentProps {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;

}

export class TextBoxComponent extends Component<TextBoxComponentProps> {

  render() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.content}</p>
                    </Col>
                    <Col>
                    </Col>

                </Row>
            </Container>
        </>
    )
  }
}