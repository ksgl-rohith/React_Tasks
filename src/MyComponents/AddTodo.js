// Import necessary dependencies from React
import React, { useState } from 'react';

// AddTodo component for adding new todos
export const AddTodo = ({ addTodo }) => {
    // State to manage the title and description inputs
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // Function to handle form submission
    const submit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Validate that title and description are not empty
        if (!title || !desc) {
            alert("Title or Description cannot be blank"); // Show alert if validation fails
        }
        else {
            // Call the addTodo function passed as a prop with the title and description
            addTodo(title, desc);
            // Reset the title and description inputs
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3"> {/* Container for styling and spacing */}
            <h3>Add a Todo</h3> {/* Heading for the form */}
            <form onSubmit={submit}> {/* Form element with submit handler */}
                <div className="mb-3"> {/* Input group for the title */}
                    <label htmlFor="title" className="form-label">Todo Title</label> {/* Label for title input */}
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} // Update state on input change
                        className="form-control" 
                        id="title" 
                        aria-describedby="emailHelp" 
                    />
                </div>
                <div className="mb-3"> {/* Input group for the description */}
                    <label htmlFor="desc" className="form-label">Todo Description</label> {/* Label for description input */}
                    <input 
                        type="text" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} // Update state on input change
                        className="form-control" 
                        id="desc" 
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button> {/* Submit button */}
            </form>
        </div>
    )
}
