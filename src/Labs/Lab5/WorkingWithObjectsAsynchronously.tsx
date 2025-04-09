import  { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import * as client from "./Client";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});

  // Fetch assignment on load
  const fetchAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
  };

  // Update assignment title
  const updateTitle = async (title: string) => {
    const updated = await client.updateTitle(title);
    setAssignment(updated);
  };

  // Run once on component mount
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>

      {/* Title input */}
      <FormControl
        className="mb-2"
        value={assignment.title || ""}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      {/* Description textarea */}
      <FormControl
        as="textarea"
        rows={3}
        className="mb-2"
        value={assignment.description || ""}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />

      {/* Due date */}
      <FormControl
        type="date"
        className="mb-2"
        value={assignment.due || ""}
        onChange={(e) =>
          setAssignment({ ...assignment, due: e.target.value })
        }
      />

      {/* Completed checkbox */}
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-completed"
          checked={assignment.completed || false}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-completed">
          Completed
        </label>
      </div>

      {/* Update button */}
      <button
        className="btn btn-primary me-2"
        onClick={() => updateTitle(assignment.title)}
      >
        Update Title
      </button>

      <pre className="mt-3 bg-light p-2">
        {JSON.stringify(assignment, null, 2)}
      </pre>
      <hr />
    </div>
  );
}
