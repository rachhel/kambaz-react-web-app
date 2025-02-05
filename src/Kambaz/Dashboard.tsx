import { Link } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";



export default function Dashboard() {
  return (
    <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses">
    <Row xs={1} md={4} className="g-4">
    <Col className="wd-dashboard-course"> {/* ✅ Each card inside a column */}
    <Card>
      <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>

  <Col className="wd-dashboard-course">
    <Card>
      <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS5678 Node JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Backend Development with Node.js</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>
      
  <Col className="wd-dashboard-course"> {/* ✅ Each card inside a column */}
    <Card>
      <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>

  <Col className="wd-dashboard-course">
    <Card>
      <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS5678 Node JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Backend Development with Node.js</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>
  <Col className="wd-dashboard-course"> {/* ✅ Each card inside a column */}
    <Card>
      <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>

  <Col className="wd-dashboard-course">
    <Card>
      <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS5678 Node JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Backend Development with Node.js</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>
  <Col className="wd-dashboard-course"> {/* ✅ Each card inside a column */}
    <Card>
      <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>

  <Col className="wd-dashboard-course">
    <Card>
      <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="src/images/reactjs.webp" width="250px" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title">CS5678 Node JS</Card.Title>
          <Card.Text className="wd-dashboard-course-description">Backend Development with Node.js</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
  </Col>
  </Row>
</div></div>

);}

