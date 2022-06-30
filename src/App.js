import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StudentSection from "./components/StudentSection";

function App() {

  return (
    <div className="App">
      <div class="bg-success p-2 text-dark bg-opacity-25">
        <h1>Student Management System</h1>
      </div>

      <Form/>

      <StudentSection />
    
    </div>
  );
}

export default App;
