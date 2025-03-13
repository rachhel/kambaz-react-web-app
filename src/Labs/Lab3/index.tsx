import VariablesAndConstants from "./VariablesAndConstants";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import Spreading from "./Spreading";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";





export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  console.log("Hello World!");
  return (
    <div>
      <h2>Lab 3</h2>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />

      <VariablesAndConstants />
      <AddingAndRemovingToFromArrays />
      <ArrayIndexAndLength />
      <ArrowFunctions />
      <BooleanVariables />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <Destructing />
      <DestructingImports />
      <FilterFunction />
      <FindFunction />
      <FindIndex />
      <ForLoops />
      <FunctionDestructing />
      <House />
      <IfElse />
      <ImpliedReturn />
      <JsonStringify />
      <LegacyFunctions />
      <MapFunction />
      <Spreading />
      <Styles /> 
      <TemplateLiterals />
      <TernaryOperator />
      <VariableTypes />
      <TodoItem />
      <TodoList />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>

      <hr />

    </div>
  );
}
