import React from 'react';
import { NavLink } from "react-router-dom"

const Classroom = (props) => {
    return (
        <NavLink to={"/Classroom/" + props.id}>
            <div className="btm_shadow row mx-0 mb-3 p-3">
                <div className="col-12 col-sm-8 text-center text-sm-left p-0 order-1">
                    <p className="mb-1 Bold Black">{props.ClassroomName}</p>
                </div>
                <div className="col-6 col-sm-4 col text-right p-0 order-4 order-sm-2">
                    <p className="mb-1 Black">{props.Code}</p>
                </div>
                <NavLink to="/MyBackpack" className="col-12 p-0 ThemeColor order-2 order-md-3">
                    <div className="text-center text-sm-left p-0">
                        <p class="card-text FS_11 Bold">{props.UniversityName}</p>
                    </div>
                </NavLink>
                <div className="col-6 col-md-12 text-left p-0 order-3">
                    <p class="mb-0 FS_10 Bold Black">{props.AdminName}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default Classroom;