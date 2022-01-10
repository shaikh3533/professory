import React from 'react';
import { NavLink } from "react-router-dom"

const ServiceForSale = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 px-2 maxWidth py-3">
            <NavLink className="nav-link m-0 p-0" to={ "/ServiceProvider/Sale/" + props.Category + "/"+ props.Id} >
                <div className="bordr">
                    <img className="d-bock mx-auto" src={props.Img} width="100%" height="100%" alt="" />
                    <div className="row m-0 mt-1">
                        <div className="col-4 pl-1 pr-1">
                            <p className="text-left mb-1 FS_22 Bold Black">{props.Price}</p>
                        </div>
                        <div className="col-8 pr-1 pl-1">
                            <p className="text-right my-1 FS_13 Black">{props.Date}</p>
                        </div>
                        <div className="col-10 pl-1 pr-1">
                            <p className="text-left FS_15 mb-1 Black">{props.Name}</p>
                        </div>
                        <div className="col-2 pr-1 pl-1">
                            <img className="d-block ml-auto" src={props.icon} alt="" />
                        </div>
                    </div>
                </div></NavLink>
        </div>
    );
}

export default ServiceForSale;