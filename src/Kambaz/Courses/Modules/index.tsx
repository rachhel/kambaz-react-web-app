import { useParams } from "react-router";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../Database";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams(); 
  console.log("Course ID from URL:", cid);

  // const modules = db.modules.filter((module: any) => module.course === cid);
  const modules = db.modules;
  console.log("Filtered Modules:", modules);

  return (
    <div>
      
      <ModulesControls />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
         {modules.length === 0 ? (
          <p>No modules found for this course.</p>
        ) : ( 
          modules.map((module: any) => (
            <ListGroup.Item key={module.id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item key={lesson.id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))
         )}
      </ListGroup>
    </div>
  );
}
