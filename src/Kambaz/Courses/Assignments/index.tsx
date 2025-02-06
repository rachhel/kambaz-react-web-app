import { FaPlus, FaSearch } from "react-icons/fa";
import { ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import RightButton from "./RightButtons";
import GreenCheckmark from "./greenCheck";
import GreenNotebook from "./GreenNotebook";
import { Link } from "react-router";


export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">

      <div className="d-flex justify-content-between align-items-center mb-3">
        
        <InputGroup className="w-50">
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <FormControl placeholder="Search for Assignments" id="wd-search-assignment" />
        </InputGroup>

        <div>
          <Button variant="secondary" className="me-2">
            <FaPlus /> Group
          </Button>
          <Button variant="danger">
            <FaPlus /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray"> 
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <RightButton />
      </div>
      
      <ListGroup className="wd-lessons rounded-0">
        
      <ListGroup.Item className="d-flex align-items-center position-relative border-bottom">
  {/* Clickable Link Wrapping Entire Box */}
  <a 
    href="#Kambaz/Courses/1234/Assignments/123"
    className="wd-assignment-link text-decoration-none text-dark w-100 d-flex align-items-center"
  >
    {/* Left Border */}
    <div className="position-absolute start-0 top-0 h-100 border-start border-4 border-success"></div>

    {/* Left-side icons (Grip + Document Icon) */}
    <div className="d-flex align-items-center me-5">
      <GreenNotebook className="fs-4 text-success" /> 
    </div> 

    {/* Assignment Content */}
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center">
        <strong>A1</strong>

        {/* Right-side icons (Checkmark + Menu Dots) */}
        <div className="d-flex align-items-center">
          <GreenCheckmark />
        </div>
      </div>

      <span className="text-danger">Multiple Modules</span>
      <span className="ms-1">| Not available until May 6 at 12:00am |</span>

      <div className="text-muted">
        <strong>Due</strong> May 13 at 11:59pm | 100 pts
      </div>
    </div>
  </a>
</ListGroup.Item>


<ListGroup.Item className="d-flex align-items-center position-relative border-bottom">
  {/* Clickable Link Wrapping Entire Box */}
  <a 
    href="#Kambaz/Courses/1234/Assignments/123"
    className="wd-assignment-link text-decoration-none text-dark w-100 d-flex align-items-center"
  >
    {/* Left Border */}
    <div className="position-absolute start-0 top-0 h-100 border-start border-4 border-success"></div>

    {/* Left-side icons (Grip + Document Icon) */}
    <div className="d-flex align-items-center me-5">
      <GreenNotebook className="fs-4 text-success" /> 
    </div> 

    {/* Assignment Content */}
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center">
        <strong>A2</strong>

        {/* Right-side icons (Checkmark + Menu Dots) */}
        <div className="d-flex align-items-center">
          <GreenCheckmark />
        </div>
      </div>

      <span className="text-danger">Multiple Modules</span>
      <span className="ms-1">| Not available until May 13 at 12:00am |</span>

      <div className="text-muted">
        <strong>Due</strong> May 20 at 11:59pm | 100 pts
      </div>
    </div>
  </a>
</ListGroup.Item>

        
<ListGroup.Item className="d-flex align-items-center position-relative border-bottom">
  {/* Clickable Link Wrapping Entire Box */}
  <a 
    href="#Kambaz/Courses/1234/Assignments/123"
    className="wd-assignment-link text-decoration-none text-dark w-100 d-flex align-items-center"
  >
    {/* Left Border */}
    <div className="position-absolute start-0 top-0 h-100 border-start border-4 border-success"></div>

    {/* Left-side icons (Grip + Document Icon) */}
    <div className="d-flex align-items-center me-5">
      <GreenNotebook className="fs-4 text-success" /> 
    </div> 

    {/* Assignment Content */}
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center">
        <strong>A3</strong>

        {/* Right-side icons (Checkmark + Menu Dots) */}
        <div className="d-flex align-items-center">
          <GreenCheckmark />
        </div>
      </div>

      <span className="text-danger">Multiple Modules</span>
      <span className="ms-1">| Not available until May 20 at 12:00am |</span>

      <div className="text-muted">
        <strong>Due</strong> May 27 at 11:59pm | 100 pts
      </div>
    </div>
  </a>
</ListGroup.Item>
         
  </ListGroup>
  </ListGroup.Item>
            
</ListGroup>

</div>
  );
}
