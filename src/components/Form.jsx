import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useState } from "react";
const Form = () => {
  const valueObject = useContext(StudentContext)
  const [studentName, setStudentName] = useState("");

  const addStudent = (event) => {
    event.preventDefault();
    if (valueObject.studentName) {
      const newStudent = {
        id: Date.now(),
        name: valueObject.studentName,
      };
      valueObject.setStudentList([...valueObject.studentList, newStudent]);
      valueObject.setStudentName("");
    } else {
      alert("Please Enter a Valid Student Name");
    }
  };

  const updateHandler = (event) => {
    event.preventDefault();
    valueObject.editableStudent.name =
      valueObject.studentName || valueObject.editableStudent.name;
    valueObject.setStudentName("");
    valueObject.setIsEditable(false);
    valueObject.setEditableStudent(null);
    valueObject.studentList[valueObject.selectedIndex].name = valueObject.editableStudent.name;
    valueObject.setStudentList([...valueObject.studentList]);
    valueObject.setSelectedIndex(-1);
  };

  return (
    <form>
      <input
        placeholder="Please Enter The Student Name"
        type="text"
        name="StudentName"
        id=""
        value={valueObject.studentName}
        onChange={(event) => valueObject.setStudentName(event.target.value)}
      />{" "}
      <br />
      <div>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={(event) =>
            valueObject.isEditable === true ? updateHandler(event) : addStudent(event)
          }
        >
          {valueObject.isEditable === true ? "Update Student" : "Add Student"}
        </button>
      </div>
    </form>
  );
};

export default Form;
