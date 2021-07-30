import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Student = () => {
  const [students, setStudent] = useState({
    student: [],
    loading: true,
  });
  const handleClick = async (id) => {
    const res = await axios.post(
      `http://localhost:8000/api/student/delete/${id}`,
      students
    );
    setStudent({ student: res.data.students });
  };
  useEffect(async () => {
    const res = await axios.get("http://localhost:8000/api/students");

    if (res.data.status === 200) {
      try {
        setStudent({
          student: res.data.students,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  var student_table = "";
  if (students.loading) {
    student_table = (
      <tr>
        <td colSpan="7">
          <h2>Loading...</h2>{" "}
        </td>
      </tr>
    );
  } else {
    student_table = students.student.map((student) => {
      return (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.phone}</td>
          <td>{student.course}</td>
          <td>
            <NavLink
              to={`/student/edit/${student.id}`}
              className="btn btn-success btn-sm"
            >
              Edit
            </NavLink>
          </td>
          <td>
            <button
              onClick={() => {
                handleClick(student.id);
              }}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Student data
                <NavLink to="/add" className="btn btn-primary btn-sm float-end">
                  Add student
                </NavLink>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-border table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{student_table}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
