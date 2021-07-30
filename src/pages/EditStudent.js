import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  let { id } = useParams();

  useEffect(async () => {
    const res = await axios.get(`http://localhost:8000/api/student/edit/${id}`);
    console.log(res.data.message);
    if (res.data.status === 200) {
      setStudent({
        name: res.data.student.name,
        email: res.data.student.email,
        phone: res.data.student.phone,
        course: res.data.student.course,
      });
    } else {
      <h1>Sorry, can't be edited now</h1>;
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8000/api/student/edit/${id}`, student);
    try {
      setStudent({
        name: "",
        email: "",
        phone: "",
        course: "",
      });
    } catch (e) {
      console.log(e);
    }
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
                Edit student
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
                  <button type="submit" className="btn btn-primary btn-sm">
                    Edit
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

export default EditStudent;
