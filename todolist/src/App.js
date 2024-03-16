import { Fragment } from "react";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import DeleteItem from "./components/DeleteItem";

function App() {
  return (
    <div>
        <h1>To Do List</h1>
        <div id="todo">
          <AddItem/>
          <EditItem/>
          <DeleteItem/>
        </div>
    </div>


  )
}

export default App;
