import { IoEllipsisVertical } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";
import PercentButton from "./PercentButton";

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <PercentButton />
      <GrAdd />
      <IoEllipsisVertical className="fs-4" />
      
    </div> );}