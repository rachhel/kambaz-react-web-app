import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux"
import ToDo from "../ReduxExamples/todos/TodoList"

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <ToDo />
      
    </div>
  );
};
