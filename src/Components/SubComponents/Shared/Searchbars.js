import React from 'react';
import { NavLink } from "react-router-dom"

const Searchbars = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="MaxWidth">
                    <div className="row">
                        <div className="col-9 mx-auto mt-3">
                            <div className="row">
                                <div className="col-12 col-md-3 feild px-1 mt-3 mt-md-0">
                                    <input type="text" id="locationField" className="p-2 w-100 FS-14" placeholder="Select Area" />
                                </div>
                                <div className="col-12 col-md-6 feild px-1 mt-3 mt-md-0">
                                    <input type="text" id="SearchField" className="p-2 w-100 FS-14" placeholder="Search" />
                                </div>
                                <div className="col-12 col-md-3 px-1 mt-3 mt-md-0">
                                    <NavLink className="nav-link m-0 p-0" to={"/" + props.from + "/Post"} >
                                        <button
                                            className="Round_edge button filled_btn widthMaxContent px-3 py-2 mx-2"
                                            type="button">
                                            {props.ButtonValue}
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Searchbars;