import { useParams, Link } from "react-router-dom";
import { FormControl, ListGroup, Button, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GreenCheckmark from "./greenCheck";
import GreenNotebook from "./GreenNotebook";
import { deleteAssignment, setAssignments } from "./reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";


export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  // ✅ Fetch assignments from backend
  useEffect(() => {
    const fetchAssignments = async () => {
      if (!cid) return;
      const data = await coursesClient.findAssignmentsForCourse(cid);
      dispatch(setAssignments(data));
    };
    fetchAssignments();
  }, [cid]);

  const courseAssignments = assignments.filter(
    (assignment: any) =>
      assignment.course === cid &&
      (assignment.title ?? "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteThisAssignment = async (assignmentId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (!confirmDelete) return;

    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div className="wd-assignments">
      {/* ✅ Top Bar */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <InputGroup style={{ maxWidth: "250px" }}>
          <FormControl
            placeholder="Search for Assignment"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <div className="d-flex">
          <Button variant="light" className="border me-2">
            + Group
          </Button>
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments/${crypto.randomUUID()}`}
            className="text-decoration-none"
          >
            <Button variant="danger" className="text-white">
              + Assignment
            </Button>
          </Link>
        </div>
      </div>

      {/* ✅ Assignment List */}
      <ListGroup className="rounded-0" id="wd-assignments">
        {courseAssignments.length === 0 ? (
          <p>No assignments found for this course.</p>
        ) : (
          courseAssignments.map((assignment: any) => (
            <ListGroup.Item
              key={assignment._id}
              className="d-flex align-items-center position-relative border-bottom"
            >
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                className="wd-assignment-link text-decoration-none text-dark w-100 d-flex align-items-center"
              >
                {/* Left Border */}
                <div className="position-absolute start-0 top-0 h-100 border-start border-4 border-success"></div>

                {/* Left-side icons */}
                <div className="d-flex align-items-center me-5">
                  <GreenNotebook className="fs-4 text-success" />
                </div>

                {/* Assignment Content */}
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{assignment.title}</strong>
                    <div className="d-flex align-items-center">
                      <GreenCheckmark />
                    </div>
                  </div>
                  <span className="text-danger">{assignment.status}</span>
                  <span className="ms-1">| {assignment.dueDate} |</span>
                  <div className="text-muted">
                    <strong>Due:</strong> {assignment.points} pts
                  </div>
                </div>
              </Link>

              {/* Trash icon on the right */}
              <Button
                variant="outline-danger"
                size="sm"
                className="ms-3"
                onClick={() => deleteThisAssignment(assignment._id)}
              >
                🗑️
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </div>
  );
}

