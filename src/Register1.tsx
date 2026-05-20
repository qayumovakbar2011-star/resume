import { connect } from "react-redux";
import { useAddUserMutation } from "./utils/query";
import { action } from "./utils/reducer";
import { useNavigate } from "react-router-dom";

const Register1 = (props: any) => {

    const [addUser]: any = useAddUserMutation();
    const navigate = useNavigate();

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
                <h3 className="text-center mb-4 fw-bold">✨ Register</h3>

                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                        type="text"
                        onChange={(e) => props.getName(e.target.value)}
                        className="form-control input-custom"
                        placeholder="UserName ..."
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        onChange={(e) => props.getPhone(e.target.value)}
                        className="form-control input-custom"
                        placeholder="+998..."
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        onChange={(e) => props.getPassword(e.target.value)}
                        className="form-control input-custom"
                        placeholder="••••••"
                    />
                </div>

                <button
                    onClick={() => {
                        addUser(props.user);
                        navigate("/");
                    }}
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

export default connect((state: any) => { return { ...state.loyiha } }, action)(Register1);