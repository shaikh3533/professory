import React from 'react';
import { NavLink } from "react-router-dom"

const ServiceForRequest = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 p-3">
            <NavLink className="nav-link m-0 p-0" to={"/ServiceProvider/Request/" + props.Category + "/" + props.Id} >
                <div className="bordr px-3 py-2">
                    <div className="row m-0">
                        <div className="col-7 pl-1 pr-1">
                            <h6 className="text-left my-1 Black">{props.Name}</h6>
                        </div>
                        <div className="col-5 pr-1 pl-1">
                            <p className="text-right  my-1 FS_12 Black">{props.Date}</p>
                        </div>
                        <div className="col-10 pl-1 pr-1">
                            <p className="text-left mb-1 LightGray">{props.Description}</p>
                        </div>
                        <div className="col-2 pr-1 pl-1">
                            <img className="d-block ml-auto" src={props.icon} alt="" />
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default ServiceForRequest;