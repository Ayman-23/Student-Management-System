import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
const PresentList = (props) => {
  const {studentList} = useContext(StudentContext)
  return (
    <div className="PresentStudents">
      <h2>Present Students</h2>
      <ul>
        {studentList
          .filter((student) => student.isPresent === true)
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

export default PresentList;
