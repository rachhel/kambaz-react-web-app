import { useParams, Link } from "react-router-dom";
import { FormControl, ListGroup, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import GreenCheckmark from "./greenCheck";
import GreenNotebook from "./GreenNotebook";

export default function Assignments() {
  const { cid } = useParams(); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const courseAssignments = assignments.filter(
    (assignment: any) =>
      assignment.course === cid &&
      assignment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wd-assignments">
      {/* ✅ Top Bar with Search, Group, and Assignment Buttons */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        {/* ✅ Search for Assignment */}
        <InputGroup style={{ maxWidth: "250px" }}>
          <FormControl
            placeholder="Search for Assignment"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        {/* ✅ Buttons for Group & Assignment */}
        <div className="d-flex">
          <Button variant="light" className="border me-2">
            + Group
          </Button>
          {/* ✅ Dynamically generate a new assignment ID */}
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

      {/* ✅ List of Assignments (Preserved UI) */}
      <ListGroup className="rounded-0" id="wd-assignments">
        {courseAssignments.length === 0 ? (
          <p>No assignments found for this course.</p>
        ) : (
          courseAssignments.map((assignment: any) => (
            <ListGroup.Item key={assignment.id} className="d-flex align-items-center position-relative border-bottom">
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments/${assignment.id}`} // ✅ Existing assignments link correctly
                className="wd-assignment-link text-decoration-none text-dark w-100 d-flex align-items-center"
              >
                {/* Left Border */}
                <div className="position-absolute start-0 top-0 h-100 border-start border-4 border-success"></div>

                {/* Left-side icons (Grip + Notebook Icon) */}
                <div className="d-flex align-items-center me-5">
                  <GreenNotebook className="fs-4 text-success" /> 
                </div> 

                {/* Assignment Content */}
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{assignment.name}</strong>
                    {/* Right-side icons (Checkmark) */}
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
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </div>
  );
}
