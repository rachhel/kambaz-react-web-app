import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface AssignmentType {
  _id: string;
  title: string;
  course: string;
  dueDate: string;
  availableDate?: string;
  points: number;
  description?: string;
  modules?: string[];
}

interface AssignmentsState {
  assignments: AssignmentType[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: assignment._id || uuidv4(),        
        title: assignment.title,
        course: assignment.course,
        dueDate: assignment.dueDate,
        availableDate: assignment.availableDate,
        points: assignment.points,
        description: assignment.description,
        modules: assignment.modules ?? [],
      };
      console.log("Adding assignment:", newAssignment);
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
      console.log("Updating assignment:", assignment);
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
