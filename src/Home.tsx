import { connect } from "react-redux";
import { action } from "./utils/reducer";
import { useNavigate } from "react-router-dom";
import { useGetPropsQuery } from "./utils/query";

const Home = (props: any) => {

    const navigate = useNavigate();
    const { data } = useGetPropsQuery("");

    const phoneUser = data?.find(
        (itm: any) => String(itm.phone) === String(props.user.phone)
    );

    function goSurovnoma() {
        navigate("/surovnoma");
    }

    return (
        <div className="min-vh-100 m-2 rounded"
            style={{ background: "linear-gradient(135deg, #1d2671, #c33764)" }}
        >

            <div className="d-flex gap-3 flex-wrap">
                <button
                    style={{ height: "150px", width: "150px", fontSize: "50px" }}
                    className="btn btn-danger m-2"
                    onClick={goSurovnoma}
                >
                    +
                </button>

                {phoneUser && (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mt-3">
                        <div className="card luxury-card border-0 text-white h-100">
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <h5 className="fw-bold text-center m-0">
                                    {phoneUser.fullName}
                                </h5>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default connect((state: any) => { return { user: state.loyiha.user } }, action)(Home);