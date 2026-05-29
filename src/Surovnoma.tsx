import { connect } from "react-redux";
import { action } from "./utils/reducer";
import { Drawer } from 'vaul';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUser1Mutation } from "./utils/query";

const Surovnoma = (props: any) => {

    const [addUser1]: any = useAddUser1Mutation();

    const [type, setType] = useState("");
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const navigate = useNavigate();

    function goCheckResume() {
        navigate("/check-resume");
    }

    return (
        <div
            className="min-vh-100 d-flex justify-content-center align-items-center m-2 rounded"
            style={{
                background: "linear-gradient(135deg, #1d2671, #c33764)"
            }}
        >
            <div
                className="p-4 p-md-5 rounded-4 shadow-lg mt-3 mb-2"
                style={{
                    width: "100%",
                    maxWidth: "900px",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff"
                }}
            >
                <h3 className="text-center mb-4 fw-bold">✨ General</h3>
                <hr />

                <div className="row g-3">

                    <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input onChange={(e) => props.getFullName(e.target.value)} value={props.resume.fullName} type="text" className="form-control custom-input" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input onChange={(e) => props.getEmail(e.target.value)} value={props.resume.email} type="text" className="form-control custom-input" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Mobile Number</label>
                        <input onChange={(e) => props.getPhone1(e.target.value)} value={props.resume.phone} type="text" className="form-control custom-input" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Website</label>
                        <input onChange={(e) => props.getLinkedin(e.target.value)} value={props.resume.linkedIn} type="text" className="form-control custom-input" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">GitHub</label>
                        <input onChange={(e) => props.getGithup(e.target.value)} value={props.resume.gitHup} type="text" className="form-control custom-input" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Portfolio</label>
                        <input onChange={(e) => props.getPortfolio(e.target.value)} value={props.resume.portfolio} type="text" className="form-control custom-input" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Address</label>
                        <input onChange={(e) => props.getAdress(e.target.value)} value={props.resume.addres} type="text" className="form-control custom-input" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Job Title</label>
                        <input onChange={(e) => props.getJobtitle(e.target.value)} value={props.resume.jobTitle} type="text" className="form-control custom-input" />
                    </div>

                    <div>
                        <label className="form-label">Aboute YourSelf</label>
                        <textarea onChange={(e) => props.getSummary(e.target.value)} value={props.resume.summary} rows={3} className="form-control custom-input"></textarea>
                    </div>

                    <div className="col-12 mt-4 d-flex flex-wrap gap-3 justify-content-center">





                        <Drawer.Root>
                            <div className="d-flex gap-2 flex-wrap">

                                {
                                    props.resume.experiences.map((itm: any, i: number) => (
                                        <div key={i} className="border w-25 rounded text-center">
                                            <h5 className="mt-2">{itm.company}</h5>
                                            <p className="mt-2">exp {i + 1}</p>
                                        </div>
                                    ))
                                }

                                <Drawer.Trigger asChild>
                                    <button
                                        onClick={() => setType("exp")}
                                        className="add-new-btn mb-5 mt-5"
                                    >
                                        ➕ Experience
                                    </button>
                                </Drawer.Trigger>

                                {
                                    props.resume.project.map((itm: any, i: number) => (
                                        <div key={i} className="border w-25 rounded text-center">
                                            <h5 className="mt-2">{itm.projectName}</h5>
                                            <p className="mt-2">pro {i + 1}</p>
                                        </div>
                                    ))
                                }

                                <Drawer.Trigger asChild>
                                    <button
                                        onClick={() => setType("project")}
                                        className="add-new-btn mb-5"
                                    >
                                        🚀 Project
                                    </button>
                                </Drawer.Trigger>

                                {
                                    props.resume.education.map((itm: any, i: number) => (
                                        <div key={i} className="border w-25 rounded text-center">
                                            <h5 className="mt-2">{itm.institution}</h5>
                                            <p className="mt-2">edu {i + 1}</p>
                                        </div>
                                    ))
                                }

                                <Drawer.Trigger asChild>
                                    <button
                                        onClick={() => setType("edu")}
                                        className="add-new-btn mb-5"
                                    >
                                        🎓 Education
                                    </button>
                                </Drawer.Trigger>

                                {
                                    props.resume.skills.map((itm: any, i: number) => (
                                        <div key={i} className="border w-25 rounded text-center">
                                            <h5 className="mt-2">{itm.category}</h5>
                                            <p className="mt-2">skills {i + 1}</p>
                                        </div>
                                    ))
                                }

                                <Drawer.Trigger asChild>
                                    <button
                                        onClick={() => setType("skill")}
                                        className="add-new-btn mb-5"
                                    >
                                        💡 Skills
                                    </button>
                                </Drawer.Trigger>

                                {
                                    props.resume.languages.map((itm: any, i: number) => (
                                        <div key={i} className="border w-25 rounded text-center">
                                            <h5 className="mt-2">{itm.language}</h5>
                                            <p className="mt-2">lang {i + 1}</p>
                                        </div>
                                    ))
                                }

                                <Drawer.Trigger asChild>
                                    <button
                                        onClick={() => setType("lang")}
                                        className="add-new-btn mb-5"
                                    >
                                        🌍 Languages
                                    </button>
                                </Drawer.Trigger>

                            </div>

                            <Drawer.Portal>
                                <Drawer.Overlay
                                    style={{
                                        position: "fixed",
                                        inset: 0,
                                        background: "rgba(0,0,0,0.5)",
                                    }}
                                />

                                <Drawer.Content
                                    style={{
                                        position: "fixed",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "100vh",
                                        background: "linear-gradient(135deg, #1d2671, #c33764)",
                                        borderTopLeftRadius: "20px",
                                        borderTopRightRadius: "20px",
                                        padding: "20px",
                                        overflowY: "auto",
                                        zIndex: 1000
                                    }}
                                >


                                    <Drawer.Title className="text-white text-center fw-bold">
                                        Resume Section
                                    </Drawer.Title>

                                    <Drawer.Description className="text-white text-center mb-3">
                                        Fill the form below
                                    </Drawer.Description>


                                    <h4 className="text-white text-center mb-3 fw-bold">
                                        {type === "exp" && "💼 Experience"}
                                        {type === "project" && "🚀 Project"}
                                        {type === "edu" && "🎓 Education"}
                                        {type === "skill" && "💡 Skills"}
                                        {type === "lang" && "🌍 Languages"}
                                    </h4>



                                    <div className="container text-white">

                                        {type === "exp" && (
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label className="form-label">Company Name</label>
                                                    <input onChange={(e) => props.getExpCompany(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Role</label>
                                                    <input onChange={(e) => props.getExpRole(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Location</label>
                                                    <input onChange={(e) => props.getExpLocation(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Start Date</label>
                                                    <input onChange={(e) => props.getExpStartDate(e.target.value)} type="date" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="d-flex justify-content-between">
                                                        <label className="form-label">End Date</label>
                                                        <div className="d-flex gap-2">
                                                            <label className="form-label">hali tugatmagan bo'lsangiz bu yerni bosing</label>
                                                            <input
                                                                type="checkbox"
                                                                checked={checked}
                                                                onChange={(e) => setChecked(e.target.checked)}
                                                            />
                                                        </div>
                                                    </div>

                                                    {!checked && (
                                                        <input
                                                            onChange={(e) => props.getExpEndDate(e.target.value)}
                                                            type="date"
                                                            className="form-control custom-input"
                                                        />
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Description</label>
                                                    <textarea onChange={(e) => props.getExpDescription(e.target.value)} rows={3} className="form-control custom-input"></textarea>
                                                </div>

                                                <Drawer.Close asChild>
                                                    <div className="col-12 mt-3">
                                                        <button onClick={() => {props.addExperience()
                                                            setChecked(false)
                                                        }} className="btn w-100 save-btn fw-bold py-2">
                                                            💾 Save Experience
                                                        </button>
                                                    </div>
                                                </Drawer.Close>
                                            </div>
                                        )}

                                        {type === "project" && (
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Project Name</label>
                                                    <input onChange={(e) => props.getProjectName(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Deployment Link</label>
                                                    <input onChange={(e) => props.getLiveLink(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Repository Link</label>
                                                    <input onChange={(e) => props.getRepoLink(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Description</label>
                                                    <textarea
                                                        rows={3}
                                                        className="form-control custom-input"
                                                        placeholder="Project haqida qisqacha yoz..."
                                                        onChange={(e) => props.getProjectDescription(e.target.value)}
                                                    ></textarea>
                                                </div>

                                                <Drawer.Close asChild>
                                                    <div className="col-12 mt-3">
                                                        <button onClick={() => props.addProject()} className="btn w-100 project-save-btn fw-bold py-2">
                                                            🚀 Save Project
                                                        </button>
                                                    </div>
                                                </Drawer.Close>
                                            </div>
                                        )}

                                        {type === "edu" && (
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Institution Name</label>
                                                    <input onChange={(e) => props.getInstitution(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Degree</label>
                                                    <input onChange={(e) => props.getDegree(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Field Of Study</label>
                                                    <input onChange={(e) => props.getFieldOfStudy(e.target.value)} type="text" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Start Date</label>
                                                    <input onChange={(e) => props.getEduStartDate(e.target.value)} type="date" className="form-control custom-input" />
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="d-flex justify-content-between">
                                                        <label className="form-label">End Date</label>
                                                        <div className="d-flex gap-2">
                                                            <label className="form-label">hali tugatmagan bo'lsangiz bu yerni bosing</label>
                                                            <input
                                                                type="checkbox"
                                                                checked={checked1}
                                                                onChange={(e) => setChecked1(e.target.checked)}
                                                            />
                                                        </div>
                                                    </div>
                                                    {!checked1 && (
                                                        <input
                                                            onChange={(e) => props.getEduEndDate(e.target.value)}
                                                            type="date"
                                                            className="form-control custom-input"
                                                        />
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Description</label>
                                                    <textarea
                                                        rows={3}
                                                        className="form-control custom-input"
                                                        placeholder="Ta’lim haqida qisqacha yoz..."
                                                        onChange={(e) => props.getEduDescription(e.target.value)}
                                                    ></textarea>
                                                </div>

                                                <Drawer.Close asChild>
                                                    <div className="col-12 mt-3">
                                                        <button onClick={() => {props.addEducation()
                                                            setChecked1(false)
                                                        }} className="btn w-100 edu-save-btn fw-bold py-2">
                                                            🎓 Save Education
                                                        </button>
                                                    </div>
                                                </Drawer.Close>
                                            </div>
                                        )}

                                        {type === "skill" && (
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Skill Category</label>
                                                    <input
                                                        type="text"
                                                        className="form-control custom-input"
                                                        placeholder="Masalan: Frontend, Backend..."
                                                        onChange={(e) => props.getCategory(e.target.value)}
                                                    />
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Skill List</label>
                                                    <input
                                                        type="text"
                                                        className="form-control custom-input"
                                                        placeholder="Masalan: HTML, CSS, React..."
                                                        onChange={(e) => props.getSkillList(e.target.value)}
                                                    />
                                                </div>

                                                <Drawer.Close asChild>
                                                    <div className="col-12 mt-3">
                                                        <button onClick={() => props.addSkills()} className="btn w-100 skill-save-btn fw-bold py-2">
                                                            💾 Save Skills
                                                        </button>
                                                    </div>
                                                </Drawer.Close>
                                            </div>
                                        )}

                                        {type === "lang" && (
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Language</label>
                                                    <input
                                                        type="text"
                                                        className="form-control custom-input"
                                                        placeholder="Masalan: English, Russian..."
                                                        onChange={(e) => props.getLanguage(e.target.value)}
                                                    />
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Level</label>
                                                    <select onChange={(e) => props.getLevel(e.target.value)} className="form-select custom-input">
                                                        <option>Beginner</option>
                                                        <option>Intermediate</option>
                                                        <option>Advanced</option>
                                                        <option>Native</option>
                                                    </select>
                                                </div>

                                                <Drawer.Close asChild>
                                                    <div className="col-12 mt-3">
                                                        <button onClick={() => props.addLanguages()} className="btn w-100 lang-save-btn fw-bold py-2">
                                                            🌍 Save Language
                                                        </button>
                                                    </div>
                                                </Drawer.Close>
                                            </div>
                                        )}

                                    </div>
                                </Drawer.Content>
                            </Drawer.Portal>
                        </Drawer.Root>





                    </div>

                </div>

                <div className="d-flex gap-2">
                    <button onClick={() => addUser1({...props.resume, userId:localStorage.getItem("userId")}) && navigate("/home")} className="btn w-50 save-btn fw-bold py-2 mt-3">save</button>
                    <button className="btn btn-glow w-50 fw-bold py-2 mt-3" onClick={goCheckResume}>Check Resume</button>
                </div>

            </div>

            <style>
                {`
        .custom-input {
          background: rgba(255,255,255,0.15);
          border: none;
          color: #fff;
          border-radius: 12px;
          padding: 10px;
        }

        .custom-input::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .custom-input:focus {
          background: rgba(255,255,255,0.25);
          box-shadow: 0 0 10px rgba(255,255,255,0.3);
          color: #fff;
        }

        .custom-btn {
          border-radius: 12px;
          transition: 0.3s;
        }

        .custom-btn:hover {
          background: #000;
          color: #fff;
          transform: scale(1.03);
        }
      `}
            </style>
        </div>
    );
};

export default connect((state: any) => { return { resume: state.loyiha.resume } }, action)(Surovnoma);