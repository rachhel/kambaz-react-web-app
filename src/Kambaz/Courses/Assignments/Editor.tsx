import { Form, Button, Row, Col } from "react-bootstrap";
import "../../styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";


export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const assignment = assignments.find((a: any) => a._id === aid);

  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || "");
  const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
  const [availableFrom, setAvailableFrom] = useState(
    assignment?.availableDate || ""
  );

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const createNewAssignmentForCourse = async () => {
    if (!cid) return;

    const newAssignment = {
      _id: aid || uuidv4(),
      title,
      description,
      points,
      dueDate,
      availableDate: availableFrom,
      course: cid,
      modules: [],
    };

    if (aid && assignment) {
      await saveAssignment(newAssignment);
    } else {
      const assignment = await coursesClient.createAssignmentForCourse(
        cid,
        newAssignment
      );
      dispatch(addAssignment(assignment));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments/`);
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        {/* Assignment Name */}
        <Form.Group id="wd-name">
          <Form.Label><b>Assignment Name</b></Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2"
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mt-3" id="wd-description">
          <Form.Label><b>Description</b></Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-3"
          />
        </Form.Group>

        {/* Points */}
        <Form.Group as={Row} className="mt-4" id="wd-points">
          <Form.Label column sm={3}><b>Points</b></Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="mb-4"
            />
          </Col>
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group as={Row} className="mt-3" id="wd-group">
          <Form.Label column sm={3}><b>Assignment Group</b></Form.Label>
          <Col sm={9}>
            <Form.Control as="select" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Control>
          </Col>
        </Form.Group>

        {/* Grade Display */}
        <Form.Group as={Row} className="mt-3" id="wd-display-grade-as">
          <Form.Label column sm={3}><b>Display Grade as</b></Form.Label>
          <Col sm={9}>
            <Form.Control as="select" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
            </Form.Control>
          </Col>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group as={Row} className="mt-3" id="wd-submission-type">
          <Form.Label column sm={3}><b>Submission Type</b></Form.Label>
          <Col sm={9}>
            <Form.Control as="select" defaultValue="Online">
              <option value="Online">Online</option>
            </Form.Control>
            <br />
            <b>Online Entry Options</b>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </Col>
        </Form.Group>

        {/* Assign To */}
        <Form.Group as={Row} className="mt-4" id="wd-assign-to">
          <Form.Label column sm={3}><b>Assign to</b></Form.Label>
          <Col sm={9}>
            <div className="fake-multiselect">
              <Button variant="secondary" className="multiselect-tag">
                Everyone X
              </Button>
            </div>

            <b>Due</b>
            <Form.Control
              type="date"
              className="mb-2"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <Row>
              <Col sm={6}>
                <Form.Label><b>Available From</b></Form.Label>
                <Form.Control
                  type="date"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                  id="wd-available-from"
                />
              </Col>
              <Col sm={6}>
                <Form.Label><b>Until</b></Form.Label>
                <Form.Control
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  id="wd-available-until"
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>

        <hr />

        {/* Buttons */}
        <Row>
          <Col className="text-end">
            <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
              <Button variant="secondary" className="me-2">Cancel</Button>
            </Link>
            <Button variant="danger" onClick={createNewAssignmentForCourse}>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
