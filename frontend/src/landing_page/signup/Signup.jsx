import { useState } from "react";

function Signup() {
    const [signupdata, setSignupdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    function handlesignupclick(e) {
        setSignupdata({
            firstName:e.target.firstName,
            lastName:e.target.lastName,
            email:e.target.email,
            password:e.target.password
        });
        
    }

    return (
        <form onClick={handlesignupclick}>
        <div className="container mt-3 p-5" >
            <div className="row mx-5 p-5 d-flex justify-content-center">
                    <div className="col-6 text-center">
                        <span className="fs-1">Welcome to Zerodha</span>
                        <div className="form-floating mb-3 mt-5">
                            <input type="email" class="form-control" id="floatingInput" placeholder="First Name" name="firstName" value={signupdata.firstName} />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Last Name"  name="lastName"  value={signupdata.lastName} />
                            <label htmlFor="floatingPassword">Last Name</label>
                        </div>
                        <div className="form-floating mb-3 mt-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  name="email"  value={signupdata.email} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"  name="password"  value={signupdata.password} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button type="button" class="btn btn-primary mt-3">Signup</button>
                    </div>
            </div>
        </div>
    </form>
    );
}

export default Signup;