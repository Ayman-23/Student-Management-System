import { useState, createContext} from "react";

export const StudentContext = createContext();

const StudentProvider = (props) => {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const valueObject = {
    studentName,
    setStudentName,
    studentList,
    setStudentList,
    editableStudent,
    setEditableStudent,
    isEditable,
    setIsEditable,
    selectedIndex,
    setSelectedIndex,
  };

  return (
    <StudentContext.Provider value={valueObject}>{props.children}</StudentContext.Provider>
  );
};

export default StudentProvider;
