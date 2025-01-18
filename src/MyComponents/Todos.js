// Import necessary dependencies
import React from 'react';
import { TodoItem } from "./TodoItem"; // Import the TodoItem component for individual todo items
import './Todos.css'; // Import custom CSS for styling the Todos component

// Define the Todos component
export const Todos = (props) => {
    // Inline style object for the container div
    let myStyle = {
        minHeight: "70vh", // Minimum height of the container
        margin: "40px auto" // Center the container with margin
    };

    return (
        // Main container for the Todos component
        <div className="container" style={myStyle}>
            {/* Header for the Todos list */}
            <h3 className="my-3">Todos List</h3>

            {/* Conditional rendering: Display a message if there are no todos */}
            {props.todos.length === 0 ? "No Todos to display" :  
                // Map through the todos array and render a TodoItem for each todo
                props.todos.map((todo) => {
                    console.log(todo.sno); // Log the serial number of each todo for debugging
                    return (
                        // Render the TodoItem component with todo details and onDelete handler
                        <TodoItem 
                            todo={todo} 
                            key={todo.sno} // Use unique key for efficient rendering
                            onDelete={props.onDelete} // Pass the onDelete function to the TodoItem
                        />   
                    );
                })
            } 
        </div>
    );
};
