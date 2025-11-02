import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogindata((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        {
          ...logindata,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5174";
        }, 1000);

      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setLogindata({
      ...logindata,
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
              <input type="email" class="form-control" id="floatingemail" placeholder="name@example.com" name="email" value={logindata.email} onChange={handleOnChange} />
              <label htmlFor="floatingemail">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={logindata.password} onChange={handleOnChange} />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Login</button>
          </div>
        </div>
      </form>
      <span className="d-flex justify-content-center">
        Don't have an account? <Link to={"/Signup"}>Signup</Link>
      </span>
      <ToastContainer />
    </div>
  );
}