import React from "react"
import { NavLink } from "react-router-dom"

const SiteFooter = () => {
    return (
        <>
            <footer className="copyright pt-3">
                <div className="row">
                    <div className="row col-11 mx-auto">
                        <div className="col-12 col-md-4 mb-3 mb-md-0 px-1">
                            <div className="copyright-menu">
                                <ul className="text-center text-lg-left">
                                    <li>
                                        <NavLink to="/" className="FS_13">Terms {"&"} Condition</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="FS_13">Privacy Policy</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="FS_13">FAQs</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 ml-lg-auto px-1 mx-auto ">
                            <p className="text-center">Copyright © {new Date().getFullYear()} Professory</p>
                        </div>
                        <div className="col-12 col-md-4 px-1 mx-auto ">
                        
                            <p className="text-center text-lg-right">Design {"&"} Developed by BizzClan</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SiteFooter