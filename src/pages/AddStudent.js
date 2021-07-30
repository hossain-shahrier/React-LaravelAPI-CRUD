import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/api/add", student);

    setStudent({
      name: "",
      email: "",
      phone: "",
      course: "",
    });
  };
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>
                Add student
                <NavLink to="/" className="btn btn-primary btn-sm float-end">
                  Back
                </NavLink>
              </h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  onSubmit(e);
                }}
              >
                <div className="form-group mb-3">
                  <label>Student name</label>
                  <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="form-control"
                  ></input>
                </div>

                <div className="form-group mb-3">
                  <label>Student email</label>
                  <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group mb-3">
                  <label>Student phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={student.phone}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group mb-3">
                  <label>Student course</label>
                  <input
                    type="text"
                    name="course"
                    value={student.course}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary">
                    Save student
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
