import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
const AbsentList = (props) => {
  const {studentList}= useContext(StudentContext)
  return (
    <div className="AbsentStudents">
      <h2>Absent Students</h2>
      <ul>
        {studentList
          .filter((student) => student.isPresent === false)
          .map((item) => (
            <li>
              <span>{item.name}</span>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => props.togglePresent(item.id)}
              >
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AbsentList;
