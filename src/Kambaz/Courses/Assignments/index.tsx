import { useParams, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../Database";
import GreenCheckmark from "./greenCheck";
import GreenNotebook from "./GreenNotebook";

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from URL
  console.log("Course ID from URL:", cid);

  // 🔍 Filter assignments by course ID
  const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);
  console.log("Filtered Assignments:", assignments);

  return (
    <div>
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        {assignments.length === 0 ? (
          <p>No assignments found for this course.</p>
        ) : (
          assignments.map((assignment: any) => (
            <ListGroup.Item key={assignment.id} className="d-flex align-items-center position-relative border-bottom">
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments/${assignment.id}`}
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
