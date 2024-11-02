// app/screens/login/page.tsx
"use client";

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[linear-gradient(0deg,#093D56_35%,#1B78A5)] overflow-hidden shadow-lg">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
                {/* Left Section */}
                <div className="relative h-[450px] w-[450px] bg-white p-10 text-white flex flex-col justify-start items-start overflow-hidden">
                    <div className="absolute w-[29rem] h-[29rem] bg-[linear-gradient(0deg,#093D56_70%,#1B78A5)] rounded-full top-[-150px] left-[-80px] opacity-90 shadow-2xl"></div>
                    <div className="absolute w-[15rem] h-[15rem] bg-[linear-gradient(0deg,#093D56_70%,#1B78A5)] rounded-full bottom-[-20px] left-[-60px] opacity-80 shadow-md"></div> {/* Adjusted bottom to -50px */}
                    
                    <h2 className="text-4xl font-bold mb-4 z-10">Welcome!</h2>
                    <p className="text-2xl mb-6 z-10">Let’s Get You Started</p>
                    <p className="z-10 mb-5 text-[17px]">Access your personalized dashboard and <br/>manage everything with ease.</p>
                </div>

                {/* Right Section */}
                <div className="w-1/2 p-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Sign In</h2>
                    <p className="text-gray-600 mb-6 text-lg text-center">We’ve been waiting for you! Log in to continue.</p>

                    {[{ type: "email", placeholder: "example@gmail.com", icon: <FaUser className="text-gray-400 mr-2" />, value: email, setValue: setEmail }, { type: "password", placeholder: "********", icon: <FaLock className="text-gray-400 mr-2" />, value: password, setValue: setPassword },].map(({ type, placeholder, icon, value, setValue }) => (
                        <div key={type} className="flex items-center mb-4 border-b border-gray-300 py-2">
                            {icon}
                            <input
                                type={type}
                                placeholder={placeholder}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="bg-transparent w-full focus:outline-none text-black"
                            />
                        </div>
                    ))}

                    <div className="flex items-center justify-between mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="form-checkbox text-blue-600 w-5 h-5"
                            />
                            <span className="ml-2 text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button className="w-full py-2 bg-[linear-gradient(0deg,#093D56_70%,#1B78A5)] text-white rounded-lg hover:bg-blue-700 focus:outline-none text-lg">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
