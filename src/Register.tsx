import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "./utils/reducer";
import { useGetUsersQuery } from "./utils/query";
import { useState } from "react";

const Register = () => {

    const navigate = useNavigate();
    const { data}: any = useGetUsersQuery("/users");

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    function goRegister() {
        navigate("/register");
    }

    function login() {

        const a = data.find((itm:any)=>{
            return itm.phone === phone && itm.password === password
        })
        
        localStorage.setItem("userId", a.id)

        setPhone("");
        setPassword("");
        navigate("/home")
    }

    return (
        <div
            className="min-vh-100 d-flex justify-content-center align-items-center m-2 rounded"
            style={{
                background: "linear-gradient(135deg, #1d2671, #c33764)"
            }}
        >
            <div
                className="p-4"
                style={{
                    width: "320px",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    background: "rgba(255,255,255,0.1)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    color: "white"
                }}
            >
                <h3 className="text-center mb-4 fw-bold">🔐 Sign in</h3>

                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        placeholder="+998..."
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={login}
                    className="btn w-100 fw-bold mb-3"
                    style={{
                        background: "linear-gradient(45deg,#00c6ff,#0072ff)",
                        border: "none",
                        borderRadius: "10px"
                    }}
                >
                    🚀 Sign In
                </button>

                <p className="text-center">or</p>

                <button
                    onClick={goRegister}
                    className="btn w-100 fw-bold"
                    style={{
                        background: "linear-gradient(45deg,#ff512f,#dd2476)",
                        border: "none",
                        borderRadius: "10px"
                    }}
                >
                    ✨ Sign Up
                </button>
            </div>
        </div>
    );
};

export default connect((state: any) => { return { ...state.loyiha } }, action)(Register);