import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Register";
import Register1 from "./Register1";
import Home from "./Home";
import Surovnoma from "./Surovnoma";
import Resume from "./Resume";
import Resume1 from "./Resume1";

const App = () => {

    const navigate = useNavigate();

    function goHome() {
        navigate("/home");
    }

    return (
        <div>
            <div
                className="navbar navbar-expand-lg px-4 py-3 shadow-lg"
                style={{
                    background: "linear-gradient(90deg, #141e30, #243b55)",
                    borderRadius: "15px",
                    margin: "10px"
                }}
            >

                <h3
                    onClick={goHome}
                    className="text-white fw-bold m-0"
                    style={{ cursor: "pointer", letterSpacing: "1px" }}
                >
                    🚀 LOGO
                </h3>

                <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                    <ul className="navbar-nav gap-3 text-center">

                        <li onClick={() => navigate("/")} className="nav-item">
                            <span className="nav-link text-white fw-semibold nav-hover">
                                SignIn
                            </span>
                        </li>

                        <li onClick={() => navigate("/register")} className="nav-item">
                            <span className="nav-link text-white fw-semibold nav-hover">
                                SignUp
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/register" element={<Register1 />} />
                <Route path="/home" element={<Home />} />
                <Route path="/surovnoma" element={<Surovnoma />} />
                <Route path="/check-resume" element={<Resume />} />
                <Route path="/check-resume1/:id" element={<Resume1 />} />
            </Routes>
        </div>
    )
}

export default App;