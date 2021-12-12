import axios from 'axios';
import { Component } from 'react'; // let's also import Component
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

interface AddReceipeProps {

}

export class AddReceipe extends Component<AddReceipeProps> {

  addReceipe = async (event: any) => {
    event.preventDefault();
   
    const loginFormData = new FormData();
    loginFormData.append("healthiness", event.target.healthiness.value)
    loginFormData.append("difficulty", event.target.difficulty.value)
    loginFormData.append("numberOfMeals", event.target.numberOfMeals.value)

    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:5000/ReceipeAddition",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }


  render() {
    return (
      <>
        <Container>
          <br />
          <Form onSubmit={this.addReceipe}>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                <Form.Label>How Healthy do you want your meals to be?</Form.Label>
                <Form.Select aria-label="Select Healthiness" name="healthiness">
                    <option >Select level of healthiness</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Fice</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    Cheat week is a thing right?
                  </Form.Text>
                </Col>
                <Col>
                  <Form.Label>How difficulty do you want your meals to be?</Form.Label>
                  <Form.Select aria-label="Select Difficulty" name="difficulty">
                  <option >Select level of difficulty</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Fice</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    Tasty food don't have to be difficult to make
                  </Form.Text>

                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Meals</Form.Label>
              <Form.Control type="number" name="numberOfMeals"/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </Container>
      </>
    )
  }
}