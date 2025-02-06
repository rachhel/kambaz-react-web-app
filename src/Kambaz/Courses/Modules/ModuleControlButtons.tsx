import { IoEllipsisVertical } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";


import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <GrAdd />
      <IoEllipsisVertical className="fs-4" />
      
    </div> );}