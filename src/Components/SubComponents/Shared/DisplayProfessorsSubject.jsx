import React from "react"
import { NavLink } from "react-router-dom"
import Star from "../../../Assets/img/Stars.png"

const DisplayProfessorsSubject = (props) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-4">
                <NavLink className="nav-link m-0 p-0" to={props.from + props.Id} >
                    <div className="card mx-1 text-center p-3">
                        <img src={props.Img} alt="" className="d-block mx-auto w-100" />
                        <div className="row mb-2">
                            <div className="col-12 p-0 mx-0 my-auto mx-auto">
                                {/* <p className="Bold mb-0 FS_16 Black" style={{ fontSize: "100%" }}> {props.Name}
                                    <span className="d-inline-block">
                                        <img src={Star} alt="" className="mb-2 p-1" />
                                        <span className="Bold FS_16" style={{ color: "yellow" }}>{props.Rating}</span>
                                    </span>
                                </p> */}
                                <p className="Bold mb-0 FS_16 Black" style={{ fontSize: "100%" }}>{props.Name}</p>
                                <p className="mb-0"> 
                                    <img src={Star} alt="" className="mb-2 p-1" />
                                    <span className="Bold FS_16" style={{ color: "yellow" }}>{props.Rating}</span>
                                </p>
                            </div>
                            <div className="col-12 col-lg-4 p-0 m-0 text-lg-left">
                            </div>
                        </div>
                        {/* <p className="mb-0 Black FS_12">{props.SchoolName} | {props.CollegeName}</p> */}
                        <p className="Black FS_12">{props.Major}</p>
                    </div></NavLink>
            </div>
        </>
    );
}

export default DisplayProfessorsSubject;