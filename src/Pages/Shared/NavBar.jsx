import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
    .then(() => {
        console.log("Successfully signout user");
        
    }).catch((error) => {
console.log(error);

    })
  }
  const link = (
    <>
      <NavLink to={"/"}>Home</NavLink>

      {/* for applicant. check rols as well */}
      {
        user && <NavLink to={"/my-applications"}>My Application</NavLink>
      }

      {/* for requiter. check rols as well */}
      {
        
        user && <>
        <NavLink to={"/add-job"}>Add job</NavLink>
        <NavLink to={"/my-posted-jobs"}>My Posted jobs</NavLink>
        </>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{link}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <button onClick={handleSignOut} className="btn">Sign Out</button>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
