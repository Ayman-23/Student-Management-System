import { useContext } from "react";
import { useState } from "react";
import AbsentList from "./AbsentList";
import AllStudentList from "./AllStudentList";
import PresentList from "./PresentList";
import { StudentContext } from "../context/StudentContext";


const StudentSection = () => {
  const {studentList, setStudentList} = useContext(StudentContext)
  const togglePresent = (id) => {
    const student = studentList.find((student) => student.id === id);
    student.isPresent = !student.isPresent;
    setStudentList([...studentList]);
  };

  return (
    <div className="Student-Section">
      <AllStudentList/>

      <PresentList
        togglePresent={togglePresent}
      />
      <AbsentList
        togglePresent={togglePresent}
      />
    </div>
  );
};

export default StudentSection;
