import React, { use } from "react";
import register from "../../assets/lotties/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    createUser(email, password)
    .then((result) => {
        console.log(result.user);
        
    }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={register}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-5xl font-bold">Register now!</h2>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
