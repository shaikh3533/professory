import React from "react"
import SecondNavbar from "../SecondNavbar"
import { NavLink } from 'react-router-dom';

const JoinClass = () => {


    return (
        <>
            <SecondNavbar />
            <div className="container-fluid Background">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-11 col-lg-6 mx-auto">
                        <div className="row mt-5">
                            <div className="col-12 col-md-6 px-0 Round_edge">
                                <div className="JoinClassromBG Corner_edge-md">
                                    <p className="pBottom FS_16 Bold text-white text-center px-5" >Now you can learn together through Professory Classroom Feature</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 JoinClass">
                                <div className="Center h-100">
                                    <div className="row">

                                        <input
                                            type="text"
                                            name="fullName"
                                            // value={this.state.fullName}
                                            // onChange={this.handleChange}
                                            className="py-2 FS_20 px-4 mb-3 h-auto form-control"
                                            placeholder="Full Name" />
                                        <ul class="col-10 mx-auto combineButton RadioToButton d-inline-flex px-0 mb-3">
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="For Sale"
                                                    name="Type"
                                                    value="For Sale"
                                                // onClick={this.handleChange} 
                                                />
                                                <label htmlFor="For Sale" className="py-2 mb-0 Bold text-center">For Sale</label>
                                            </li>
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="Requested"
                                                    name="Type"
                                                    value="Requested"
                                                // onClick={this.handleChange}
                                                />
                                                <label htmlFor="Requested" className="py-2 mb-0 Bold text-center">Requested</label>
                                            </li>
                                        </ul>
                                        <NavLink to="/Classroom/LiveSession" className="w-100">
                                            <button className="button Round_edge filled_btn w-100 py-2 px-5" type="button">Join</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default JoinClass