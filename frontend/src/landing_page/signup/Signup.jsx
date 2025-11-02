import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const [signupdata, setSignupdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignupdata((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/signup",
        {
          ...signupdata,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = `${process.env.DASHBOARD}`;
        }, 1000);

      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setSignupdata({
      ...signupdata,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (

    <div className="container" >
      <form onSubmit={handleSubmit}>
        <div className="row mx-5 p-5 d-flex justify-content-center">
          <div className="col-6 text-center">
            <span className="fs-1">Welcome to Zerodha</span>
            <div className="form-floating mb-3 mt-5">
              <input type="text" class="form-control" id="floatingfirstname" placeholder="First Name" name="firstName" value={signupdata.firstName} onChange={handleOnChange} />
              <label htmlFor="floatingfirstname">First Name</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" id="floatinglastname" placeholder="Last Name" name="lastName" value={signupdata.lastName} onChange={handleOnChange} />
              <label htmlFor="floatinglastname">Last Name</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input type="email" class="form-control" id="floatingemail" placeholder="name@example.com" name="email" value={signupdata.email} onChange={handleOnChange} />
              <label htmlFor="floatingemail">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={signupdata.password} onChange={handleOnChange} />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Signup</button>
          </div>
        </div>
        <span className="d-flex justify-content-center">
          Already have an account? <Link to={"/Login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>

  );
}

export default Signup;