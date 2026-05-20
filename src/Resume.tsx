import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

const Resume = (props: any) => {

    const data = props.resume;
    const navigate = useNavigate();
    const resumeRef = useRef(null);

    function goSurovnoma() {
        navigate("/surovnoma");
    }

    function downloadPDF() {
        const element: any = resumeRef.current;

        const opt: any = {
            margin: 0.5,
            filename: "resume.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
        };

        html2pdf().set(opt).from(element).save();
    }

    return (
        <div style={{ background: "#f4f4f4", padding: "40px" }}>
            <div className="d-flex justify-content-between">
                <button className="btn btn-none" onClick={goSurovnoma}>← Go back</button>
            <button className="btn btn-success m-3" onClick={downloadPDF}>
                ⬇ Download PDF
            </button>
            </div>
            <div
                ref={resumeRef}
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    background: "#fff",
                    padding: "40px",
                    border: "2px solid #000",
                    fontFamily: "Arial, sans-serif"
                }}
            >

                <h1 style={{ marginBottom: "5px" }}>{data.fullName}</h1>
                <h4 style={{ color: "#555", marginBottom: "10px" }}>{data.jobTitle}</h4>

                <div style={{ fontSize: "14px", color: "#555" }}>
                    <span>{data.adress}</span> |
                    <span className="ms-2">{data.phone}</span> |
                    <span className="ms-2">{data.email}</span>
                </div>

                <div style={{ fontSize: "14px", marginTop: "5px" }}>
                    <span>{data.linkedIn}</span> |
                    <span className="ms-2">{data.gitHup}</span> |
                    <span className="ms-2">{data.portfolio}</span>
                </div>

                <p style={{ marginTop: "15px", color: "#555", fontSize: "14px" }}>
                    {data.summary}
                </p>

                <h5 style={styles.sectionTitle}>EXPERIENCE</h5>

                {data.experiences.map((exp: any, index: number) => (
                    <div key={index} style={{ marginBottom: "15px" }}>
                        <div style={styles.rowBetween}>
                            <h6 style={styles.bold}>{exp.company}</h6>
                            <span style={styles.date}>
                                {exp.startDate} - {exp.endDate}
                            </span>
                        </div>
                        <p style={{ margin: 0 }}>{exp.role}</p>
                        <small style={{ color: "#666" }}>{exp.location}</small>
                        <p style={{ fontSize: "14px" }}>{exp.description}</p>
                    </div>
                ))}

                <h5 style={styles.sectionTitle}>PROJECTS</h5>

                {data.project.map((pro: any, index: number) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <h6 style={styles.bold}>{pro.projectName}</h6>
                        <span style={{ fontSize: "14px", color: "#007bff" }}>
                            {pro.liveLink} | {pro.repoLink}
                        </span>
                        <p style={{ fontSize: "14px" }}>{pro.description}</p>
                    </div>
                ))}

                <h5 style={styles.sectionTitle}>EDUCATION</h5>

                {data.education.map((edu: any, index: number) => (
                    <div key={index}>
                        <div style={styles.rowBetween}>
                            <h6 style={styles.bold}>{edu.institution}</h6>
                            <span style={styles.date}>
                                {edu.startDate} - {edu.endDate}
                            </span>
                        </div>
                        <p style={{ fontSize: "14px" }}>
                            {edu.degree} - {edu.fieldOfStudy}
                        </p>
                    </div>
                ))}

                <h5 style={styles.sectionTitle}>SKILLS</h5>

                {data.skills.map((s: any, index: number) => (
                    <p key={index} style={{ fontSize: "14px" }}>
                        <strong>{s.category}:</strong> {s.skillList}
                    </p>
                ))}

                <h5 style={styles.sectionTitle}>LANGUAGES</h5>

                <ul style={{ fontSize: "14px", paddingLeft: "20px" }}>
                    {data.languages.map((l: any, index: number) => (
                        <li key={index}>
                            {l.language} - {l.level}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

const styles: any = {
    sectionTitle: {
        borderBottom: "2px solid #000",
        marginTop: "25px",
        marginBottom: "10px",
        fontWeight: "bold"
    },
    rowBetween: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bold: {
        margin: 0,
        fontWeight: "bold"
    },
    date: {
        fontSize: "12px",
        color: "#555"
    }
};

export default connect((state: any) => ({
    resume: state.loyiha.resume
}))(Resume);