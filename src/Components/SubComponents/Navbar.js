import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../Assets/img/logo1.png"
import profile from "../../Assets/img/Profile.png"
import msg from "../../Assets/img/messages.png"
import notification from "../../Assets/img/Notification.png"
import Auth from "../Auth/Auth"

class Navbar extends React.Component {
    constructor() {
        super();
    }
    handleChange = () => {
        localStorage.clear();
        Auth.logout()
        this.props.LoginStatusChange()
    }
    render() {
        return (
            <>

                <div className="container-fluid bgBlue">
                    <div className="MaxWidth">
                        <div className="row">
                            <div className="col-11 col-md-10 mx-auto ">
                                <nav className="navbar navbar-expand-md navbar-light px-0">
                                    <NavLink className="navbar-brand custom_color" to="/"><img className="Logo" src={Logo} alt="Logo" /> <span className="logoText"> Professory</span></NavLink>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <NavLink className="nav-link text-white" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link custom_color" href="/#Feature">Feature</a>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link custom_color" to="/Contact">Contact Us</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link custom_color" to="/About">About Us</NavLink>
                                            </li>
                                            <div className="m_view">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link custom_color px-1 px-lg-3" to="/BookStore" >BookStore</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link custom_color px-1 px-lg-3" to="/ServiceProvider">ServiceProvider</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link custom_color px-1 px-lg-3" to="/ProfessorRating">Professor Rating</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link custom_color px-1 px-lg-3" to="/SubjectRating">Subject Rating</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link custom_color px-1 px-lg-3" to="/Classroom">Classroom</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link custom_color px-1 px-lg-3" to="/MyBackpack">MyBackpack</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <div className="d-inline-flex float-left smallImg my-3">
                                                        <div className="px-1">
                                                            <img className="ml-auto" src={notification} alt="Profile" />
                                                        </div>
                                                        <div className="px-1">
                                                            <img className="ml-auto" src={msg} alt="msg" />
                                                        </div>
                                                        <div className="px-1">
                                                            <img className="ml-auto" src={profile} alt="notification" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </ul>
                                        {!this.props.isLoggedIn ?
                                            <NavLink to="/Signup">
                                                <button
                                                    className="button filled_btn px-3 mx-2"
                                                    type="button"
                                                >
                                                    Sign Up
                                                </button>  </NavLink> :
                                            <button
                                                className="button filled_btn px-3 mx-2"
                                                type="button"
                                                onClick={this.handleChange}
                                            >
                                                Log Out
                                            </button>}
                                        <button
                                            className="Round_edge py-1 empty_btn button"
                                            type="button"
                                            style={{ display: this.props.isLoggedIn ? "none" : null }}
                                        >en
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Navbar