// Import necessary dependencies and components
import './App.css';
import Header from "./MyComponents/Header"; // Header component for displaying the app's header
import { Todos } from "./MyComponents/Todos"; // Todos component to list all todos
import { Footer } from "./MyComponents/Footer"; // Footer component for the bottom section
import { AddTodo } from "./MyComponents/AddTodo"; // AddTodo component for adding new todos
import { About } from "./MyComponents/About"; // About component for the about page
import React, { useState, useEffect } from 'react'; // React hooks for managing state and side effects
import {
  BrowserRouter as Router, // Router for enabling navigation between pages
  Routes, // Routes to define different paths
  Route // Route to specify components for each path
} from "react-router-dom";

function App() {
  let initTodo;

  // Check if there are any todos saved in local storage
  if (localStorage.getItem("todos") === null) {
    initTodo = []; // If no todos are found, initialize with an empty array
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos")); // Parse the saved todos from local storage
  }

  // State to manage the list of todos
  const [todos, setTodos] = useState(initTodo);

  // Effect to save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to delete a todo
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo); // Log the todo being deleted
    // Filter out the todo to be deleted and update the state
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos)); // Update local storage
  };

  // Function to add a new todo
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc); // Log the details of the new todo
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1; // Generate a unique serial number
    const myTodo = {
      sno: sno, // Unique identifier
      title: title, // Title of the todo
      desc: desc, // Description of the todo
    };
    setTodos([...todos, myTodo]); // Update the state with the new todo
  };

  return (
    <> 
      {/* Router to manage navigation between components */}
      <Router>
        {/* Header component with title and no search bar */}
        <Header title="My Todos List" searchBar={false} /> 
        <Routes>
          {/* Default path renders the AddTodo and Todos components */}
          <Route 
            path="/" 
            element={
              <>
                {/* Component for adding a new todo */}
                <AddTodo addTodo={addTodo} />
                {/* Component to display the list of todos */}
                <Todos todos={todos} onDelete={onDelete} />
              </>
            } 
          /> 
          {/* About page route */}
          <Route path="/about" element={<About />} />
        </Routes> 
        {/* Footer component */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
