import React from 'react';
import { NavLink } from "react-router-dom"

const ServiceForRequest = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 px-3 MaxWidth">
            <NavLink className="nav-link m-0 p-0" to={"/ServiceProvider/Request/" + props.Category + "/" + props.Id} >
                <div className="bordr px-1 py-2 my-md-2 my-sm-2">
                    <div className="row m-0 bgBlue">
                        <div className="col-7 pl-1 pr-1">
                            <h6 className="text-left text-white m-2 FS_15">{props.Name}</h6>
                        </div>
                        <div className="col-5 pr-1 pl-1">
                            <p className="text-right text-white  m-2 FS_12 FS_12">{props.Date}</p>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-10 pl-1 pr-1">
                            <p className="text-left mb-1 LightGray">{props.Description}</p>
                            <p className="text-left mb-1 LightGray">{props.Description}</p>
                        </div>
                        <div className="col-2 pr-1 pl-1 h-100 py-auto">
                            <img className="d-block mt-3" src={props.icon} alt="" />
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default ServiceForRequest;