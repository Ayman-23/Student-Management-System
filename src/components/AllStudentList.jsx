import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useState } from "react";
const AllStudentList = () => {
  const valueObject = useContext(StudentContext)
  const [isEditable, setIsEditable] = useState(false);
  const deleteHandler = (id) => {
    const newStudentList = valueObject.studentList.filter(
      (student) => student.id !== id
    );
    valueObject.setStudentList(newStudentList);
  };

  const editHandler = (id, index) => {
    const tobeEditedStudent = valueObject.studentList.find(
      (student) => student.id === id
    );
    valueObject.setIsEditable(true);
    valueObject.setEditableStudent(tobeEditedStudent);
    valueObject.setStudentName(tobeEditedStudent.name);
    valueObject.setSelectedIndex(index);
  };

  const presentHandler = (id) => {
    const student = valueObject.studentList.find((student) => student.id === id);
    if (student.isPresent === undefined) {
      student.isPresent = true;
      valueObject.setStudentList([...valueObject.studentList]);
    } else if (student.isPresent === true) {
      alert("The Student is already in the Present List");
    } else if (student.isPresent === false) {
      alert("The Student is Already in the Absent List");
    }
  };

  const absentHandler = (id) => {
    const student = valueObject.studentList.find((student) => student.id === id);
    if (student.isPresent === undefined) {
      student.isPresent = false;
      valueObject.setStudentList([...valueObject.studentList]);
    } else if (student.isPresent === false) {
      alert("The Student is Already on The Absent List");
    } else if (student.isPresent === true) {
      alert("The Student is Already on The Present List");
    }
  };

  return (
    <div className="All Students">
      <h2>All Students</h2>
      <ul class="list-group">
        {valueObject.studentList.map((student,index) => (
          <li class="list-group-item">
            <span>{student.name}</span>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => editHandler(student.id, index)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => deleteHandler(student.id)}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => presentHandler(student.id)}
              >
                Present
              </button>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => absentHandler(student.id)}
              >
                Absent
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudentList;
