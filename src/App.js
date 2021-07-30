import { BrowserRouter as Router, Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Student from "./pages/Student";
function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path="/" component={Student} />
          <Route path="/add" component={AddStudent} />
          <Route path="/student/edit/:id" component={EditStudent} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
