import React from 'react';
import { NavLink } from "react-router-dom";
import Aplus from "../../../Assets/img/APlus.svg"
import Star from "../../../Assets/img/5Star.svg"
import sad from "../../../Assets/img/sad.svg"
const Profile = (props) => {
    return (
        <>
            <div className="row ShadowBordr Round25 text-center py-3">
                <div className="col-12 px-0">
                    <img src={props.Img} alt="" className="d-block mx-auto" width="55%"/>
                </div>
                <div className="col-12">
                    <h3>{props.Name}</h3>
                </div>

                {/* {props.from == "Subject" ? <>
                    <div className="col-12 col-lg-6 mt-3">
                        <div className="progress" data-percentage={props.Grade} >
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value h-100 w-100 d-flex text-center">
                                <h3 className="mb-0 Montserrat">{props.Grade}</h3>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="Bold Montserrat">Average Grade</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <div className="progress" data-percentage={props.Ratting}>
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value h-100 w-100 d-flex text-center">
                                <h3 className="mb-0 Montserrat">{props.Ratting}</h3>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="Bold Montserrat">Overall Rating</p>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <NavLink className="nav-link m-0 p-0 widthMaxContent mx-auto" to={"/" + props.from + "Rating/RateMe"} >
                            <button
                                type="button"
                                className="px-5 py-1 mx-auto button filled_btn FS_16 mt-1" style={{ borderRadius: "7px" }}>
                                Rate Me
                            </button>
                        </NavLink>
                    </div>
                </> :
                    <> */}
                <div className="row w-100">
                    <div className="col px-xl-3 px-lg-1 px-sm-3 px-1 Rating">
                        <div className="Edge btm_shadow">
                            <div className="p-2">
                                <p>Average Grade</p>
                                <img src={Aplus} alt="" />
                            </div>
                            <div>
                                <NavLink className="nav-link m-0 p-0 mx-auto" to={`/ProfessorRating/RateMe/${props.majorid}/${props.professorID}`} >
                                    <button className="btmEdge w-100 border-0 filled_btn d-block bottom-0" >Rate Me</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {props.from !== "Subject" ? <>
                        <div className="col px-xl-3 px-lg-1 px-sm-3 px-1 Rating">
                            <div className="Edge btm_shadow ">
                                <div className="p-2 overallRating ">
                                    <p>Overall Rating</p>
                                    <div className="position-realitive backStar ">
                                    {/* <img src={Star} alt="" /> */}
                                    <p className="overallrating-value">{props.totalRating}</p></div>
                                </div>
                                <div>
                                    <NavLink 
                                     to={`/ProfessorRating/Comments/${props.ProfessorID}`}
                                    >
                                
                                    <button className="btmEdge w-100 border-0 filled_btn d-block bottom-0" >view Ratting</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </> :
                        <></>
                    }
                    <div className="col px-xl-3 px-lg-1 px-sm-3 px-1 Rating">
                        <div className="Edge btm_shadow">
                            <div className="p-2">
                                <p>Hardness Level</p>
                                <img src={sad} alt="" />
                            </div>
                            <div>
                                <button className="btmEdge w-100 border-0 filled_btn d-block bottom-0" >Share</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3 px-0">
                    <p className="FS_20 mb-0">Top 3 tags or this {props.from}</p>
                </div>
                <div className="ratingbesttags row btn-group col-12 mx-auto px-3">
                    {console.log(props.Tags)}
                   { props.Tags.length===0?<h4 className="my-4">No Tags</h4>: props.Tags.map((each)=>{

                       return <div className="widthMaxContent  mx-auto px-0 mt-3">
                       <button type="button" className=" p-2 FS_12 Round_edge vhTo50 empty_btn button py-2">{each}</button>
                   </div>
                   })}
                </div>
            </div>
        </>
    );
}

export default Profile;