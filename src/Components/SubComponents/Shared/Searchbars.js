import React from 'react';
import { NavLink } from "react-router-dom"

const Searchbars = (props) => {
    return (
        <>
            <div className="container-fluid bg-Searchbar">
                <div className="MaxWidth">
                    <div className="row">
                        <div className="col-10 mx-auto my-3 px-lg-0 px-md-4">
                            <div className="row">
                                <div className="col-12 col-md-3  px-1 mt-3 mt-md-0">
                                    <input type="text" id="locationField" className="p-2 w-100 FS-14" placeholder="Select Area" />
                                </div>
                                <div className="col-12 col-md-6  px-1 mt-3 mt-md-0">
                                    <input type="text" id="SearchField" className="p-3 w-100 FS-14" placeholder="Search" />
                                </div>
                                <div className="col-12 col-md-3 px-1 mt-3 mt-md-0">
                                    <NavLink className="nav-link m-0 p-0" to={"/" + props.from + "/Post"} >
                                        <button
                                            className="btn filled_btn  searchBtn px-3 py-2 mx-2"
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