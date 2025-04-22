import { useParams } from "react-router";
import { FormControl, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

import { addModule, editModule, updateModule, deleteModule, setModules }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();


  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };
  const addModuleHandler = async () => {
    const newModule = await coursesClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };
 

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  
  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };
 
 

  const fetchModulesForCourse = async () => {
    const modules = await coursesClient.findModulesForCourse(cid!);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);
 


  return (
    <div className="wd-modules">
      
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} 
        addModule={addModuleHandler} />
      <ListGroup className="rounded-0" id="wd-modules">
         {modules.length === 0 ? (
          <p>No modules found for this course.</p>
        ) : ( 
          modules.map((module: any) => (
            <ListGroup.Item key={module.id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> 
                {!module.editing && module.name}
      { module.editing && (
        <FormControl className="w-50 d-inline-block"
        onChange={(e) =>
          dispatch(
            updateModule({ ...module, name: e.target.value })
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveModule({ ...module, editing: false });
          }
        }}
        defaultValue={module.name} />
    )}
 {!module.editing && module.name}
       {module.editing && (
         <input onChange={(e) =>
                  updateModuleHandler({ ...module, name: e.target.value }) }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateModuleHandler({ ...module, editing: false });
                  }
                }}
                value={module.name}/>
        )}

      <ModuleControlButtons moduleId={module._id}
               deleteModule={(moduleId) => deleteModuleHandler(moduleId)}

                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
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
