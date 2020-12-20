import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from "./components/NavBar.js"
import ExercisesList from "./components/ExercisesList.js";
import EditExercise from "./components/EditExercise.js";
import CreateExercise from "./components/CreateExercise.js";
import CreateUser from "./components/CreateUser.js";


function App() {
  return (
    <Router>
      <div className="container">
         <Navbar /> 
        <br/>
      
        <Route path="/exercise" exact component={ExercisesList} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/user" component={CreateUser} />  
        
         
      </div>
    </Router>
  );
}

export default App;
