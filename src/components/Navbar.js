import { Link } from "react-router-dom";
import React from "react";
import Logo from "../assets/Logo.svg";
import {toast} from "react-hot-toast";

const Navbar=(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
              <Link to="/">
                <img src={Logo} alt="logo" width={160} height={32} loading="lazy"></img>
              </Link>

             <nav>
                <ul className="flex gap-x-6 text-richblack-100">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>

                </ul>
             </nav> 

             <div className="flex items-center gap-x-4 text-richblack-100">
                 {
                    !isLoggedIn &&
                    <Link to="/Login">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log In</button>
                    </Link>
                 }

                 {
                    !isLoggedIn &&
                    <Link to="/Signup">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign Up</button>
                    </Link>
                 }

                 {
                    isLoggedIn &&
                    <Link to="/">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                            
                        }}
                        >Log Out</button>
                    </Link>
                 }

                 {
                    isLoggedIn &&
                    <Link to="/Dashboard">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
                    </Link>
                 }
             </div>
        </div>
    );
}
export default Navbar;