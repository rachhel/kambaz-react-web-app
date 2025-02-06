import { LuNotebookPen } from "react-icons/lu";
import { BsGripVertical } from "react-icons/bs";

interface GreenNotebookProps {
  className?: string; // ✅ Accept className as an optional prop
}

export default function GreenNotebook({ className = "" }: GreenNotebookProps) {
  return (
    <span className={`me-1 position-relative ${className}`}>
      <BsGripVertical className="me-3 fs-5 text-muted" />
      <LuNotebookPen style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
    </span>
  );
}