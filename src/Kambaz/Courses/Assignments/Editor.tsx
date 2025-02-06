import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Edit Assignment</h2>

      <Form>
      <Row className="mb-3 gap-3">
  <Col md={12}>
    <Form.Label>Assignment Name</Form.Label>
    <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
  </Col>

  <Col md={12}>
    <Form.Label>Description</Form.Label>
    <div
      className="form-control p-2"
      contentEditable={true}
      style={{ minHeight: "80px" }}
    >
    The assignment is <span style={{ color: "red" }}>available online</span>.
<br></br>   Submit a link to the landing page of your Web application running on Netlify. 
<p>The landing page should include the following:</p>

<ul>
  <li>Your full name and section</li>
  <li>Links to each of the lab assignments</li>
  <li>Link to the Kambaz application</li>
  <li>Links to all relevant source code repositories</li>
</ul>
<p> The Kambaz application should include a link to navigate back to the landing page.</p>
    </div>
  </Col>
  </Row>
  <Row className="mb-3">
  <Col md={3} className="text-md-end">
    <Form.Label>Points</Form.Label>
  </Col>
  <Col md={9}>
    <Form.Control type="number" defaultValue={100} />
  </Col>
</Row>
        <Row className="mb-3">
          <Col md={3} className="text-md-end">
            <Form.Label>Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select>
              <option>ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-md-end">
            <Form.Label>Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select>
              <option>Percentage</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-md-end">
            <Form.Label>Submission Type</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border p-3 rounded">
              <Form.Select>
                <option>Online</option>
              </Form.Select>

              <Form.Group className="mt-3">
                <Form.Label>Online Entry Options</Form.Label>
                <div>
                  <Form.Check type="checkbox" label="Text Entry" />
                  <Form.Check type="checkbox" label="Website URL" defaultChecked />
                  <Form.Check type="checkbox" label="Media Recordings" />
                  <Form.Check type="checkbox" label="Student Annotation" />
                  <Form.Check type="checkbox" label="File Uploads" />
                </div>
              </Form.Group>
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-md-end">
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border p-3 rounded">
              <Row className="align-items-center">
                <Col md={3}>
                  <Form.Label>Assign To</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control type="text" defaultValue="Everyone" />
                </Col>
              </Row>

              <Row className="mt-3 align-items-center">
                <Col md={3}>
                  <Form.Label>Due</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control type="datetime-local" defaultValue="2025-05-13T23:59" />
                </Col>
              </Row>

              <Row className="mt-3 align-items-center">
                <Col md={3}>
                  <Form.Label>Available from</Form.Label>
                </Col>
                <Col md={4}>
                  <Form.Control type="datetime-local" defaultValue="2025-05-06T12:00" />
                </Col>
                <Col md={1} className="text-center">
                  <Form.Label>Until</Form.Label>
                </Col>
                <Col md={4}>
                  <Form.Control type="datetime-local" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}
