import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooLeanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import { useState } from "react";


export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  const [counter, setCounter] = useState(0);

  return (
    <div id="wd-passing">
      <h2>Lab 4</h2>
      <PassingFunctions theFunction={sayHello} />
      <ClickEvent />
      <Counter />
      <PassingDataOnEvent />
      <EventObject />
      <StringStateVariables />
      <ReduxExamples />
      <ArrayStateVariable />
      <BooleanStateVariables />
      <ChildStateComponent counter={counter} setCounter={setCounter} />
      <DateStateVariable />
      <ObjectStateVariable />
      <ParentStateComponent />

      <ReduxExamples/>

    </div>
  );
}
