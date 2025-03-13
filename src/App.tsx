import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Labs from "./Labs";
import Kambaz from "./Kambaz";
import store from "./Kambaz/store";
import { Provider } from "react-redux";
import AssignmentEditor from "./Kambaz/Courses/Assignments/Editor";


export default function App() {
 return (
  <HashRouter>
    <Provider store={store}>

   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kambaz"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kambaz/*" element={<Kambaz />} />
     <Route path="/Kambaz/Courses/:cid/Assignments/Editor" element={<AssignmentEditor />} />

    </Routes>
   </div>
   </Provider>

  </HashRouter>

);}
