import React from "react";
import GooglePlay from "../../Assets/img/GooglePlay.png";
import AppStore from "../../Assets/img/AppStore.png";
import Google from "../../Assets/img/google.png";
import Twitter from "../../Assets/img/Twitter.png";
import Android from "../../Assets/img/Android.png";
import Iphone from "../../Assets/img/Iphone.png";
import { NavLink, Redirect } from "react-router-dom";
import Slider from "../SubComponents/Shared/Slider";
import auth from "../Auth/Auth";
import axios from "axios";
import Auth from "../Auth/Auth";
import Model from "../atoms/Model";
import Account from "../Api/Account";
import { message } from "antd";
import Modall from "../atoms/Modall";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            forgotEmail: "",
            otpError: "",
            otp: "",
            loggedIn: false,
            showFrgtModel: false,
            showOtpModall: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        console.log(this.props);
        // const element = document.getElementById("inputForm")
        // element.scrollIntoView()
    };

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }
    closeModal = (name, value) => {
        this.setState({
            [name]: value,
        });
    };

    handleSubmit(event) {
        // auth.login()
        // console.log(auth.isAuthenticated())
        axios
            .post("user/login", {
                email: this.state.email,
                password: this.state.password,
                ProviderType: "website",
                fCMToken:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTA2OTYsImlhdCI6MTYwMjQwODI5NX0.WlwJWiGOHEkADrk97v_QDjRfW4CIHQQQSR5r_c_p7-I",
            })
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    localStorage.setItem("ProfessoryloggedIn", "true");
                    localStorage.setItem("x-auth-token", res.data.data.token);
                    localStorage.setItem("countryID", res.data.data.user.countryID);
                    localStorage.setItem("User", JSON.stringify(res.data.data.user));
                    axios.defaults.headers = {
                        "x-auth-token": res.data.data.token,
                        "Content-Type": "application/json",
                    };

                    Auth.login();
                    this.props.onChange();
                }
                let LoggedInStatus = res.data.success;
                this.setState({
                    loggedIn: LoggedInStatus,
                });
            })

            .catch(function (error) {
                alert(error);
            });
    }
    emailSubmit = () => {
        if (this.state.forgotEmail !== null) {
            const res = Account.ForgotPassword(this.state.forgotEmail);
            res.then((response) => {
                if (response.data.success) {
                    this.setState({
                        showFrgtModel: false,
                        showOtpModall: true,
                    });
                } else {
                    message.error(response.data.message);
                }
            });
        } else {
        }
    };
    otpChange = (otp) => {
        this.setState({
            otp: otp,
            otpError: "",
        });

        if (otp.length > 3) {
            this.VerifyCode(otp);
        }
    };

    VerifyCode = (otp) => {
        axios
            .put("Email/verify", {
                email: this.state.forgotEmail,
                hash: otp,
            })
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    this.setState({ otpModel: false });
                } else if (res.data.success === false) {
                    message.error(res.data.message);
                    this.setState({ otpError: res.data.message });
                }
            });
    };
    ResendCode = () => {
        axios
            .post("user/resendActivate", {
                email: this.state.forgotEmail,
            })
            .then((res) => {
                if (res.data.success) {
                    message.success("sent");
                }
            });
    };
    render() {
        if (localStorage.getItem("ProfessoryloggedIn")) {
            return <Redirect to="/BookStore" />;
        }
        return (
            <>
                <div className="container-fluid upper_Div">
                    <div className="MaxWidth">
                        <div className="mb-5">
                            <div className="row">
                                <div className="row col-11 col-md-10 mx-auto mb-5">
                                    <div className="col-12 col-md-5 Para py-5 px-0 my-md-auto d-block">
                                        <div className="d-block mr-auto" style={{ maxWidth: "500px" }}>
                                            <h1 className="Black">Professory App</h1>
                                            <p className="Black" >What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                            <img src={GooglePlay} alt="Play Store" id="img1" loading="Lazy" />
                                            <img src={AppStore} alt="App Store" id="img2" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ml-auto px-0 px-md-3">
                                        <form className="loginForm form px-3 px-md-5 py-2 mr-lg-5 mb-0 mt-5 TopRoundEdge ShadowBordr " style={{ maxWidth: "400px" }} id="inputForm">
                                            <p className="py-4 FS_24 mb-0 text-center" style={{ color: "rgb(38, 38, 38)" }}>Log in</p>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    autoFocus
                                                    id="phone"
                                                    className="form-control mx-auto "
                                                    placeholder="Phone Number, Username, or Email"
                                                    value={this.state.email}
                                                    name="email"
                                                    autoComplete={false}
                                                    onChange={this.handleChange}
                                                />
                                                <label htmlFor="phone" >Phone, Username, or Email</label>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="form-control mx-auto"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    name="password"
                                                    autoComplete={false}
                                                    onChange={this.handleChange}
                                                />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    onClick={this.handleSubmit}
                                                    type="button"
                                                    className="form-control mx-auto button filled_btn">
                                                    Log In
                                                </button>
                                            </div>
                                            <div className="form-group my-3">
                                                <div className="strike mx-auto">
                                                    <h6><span className="px-2">OR</span></h6>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row mx-auto a">
                                                    <div className="col-6 pl-0 pr-1 mb-3">
                                                        <div className="mr-auto bordr">
                                                            <div className="row text-center shadow mx-auto p-2">
                                                                <div className="col-12 col-md-3 p-0 my-auto">
                                                                    <img
                                                                        className="pr-0"
                                                                        src={Google}
                                                                        alt="Google"
                                                                    />
                                                                </div>
                                                                <div className="col-12 col-md-9 p-0 my-auto">
                                                                    <h6 className="FS_10 LightGray mb-0">
                                                                        {" "}
                                                                        Login with Google
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pr-0 pl-1 mb-3 shadow">
                                                        <div className="mr-auto bordr">
                                                            <div className="row text-center mx-auto p-2">
                                                                <div className="col-12 col-md-3 p-0 my-auto">
                                                                    <img
                                                                        className="pr-0 py-1"
                                                                        src={Twitter}
                                                                        alt="Twitter"
                                                                    />
                                                                </div>
                                                                <div className="col-12 col-md-9 p-0 my-auto">
                                                                    <h6 className="FS_10 LightGray mb-0">
                                                                        {" "}
                                                                        Login with Twitter
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mx-auto">
                                                        <p
                                                            onClick={() =>
                                                                this.setState({
                                                                    showFrgtModel: true,
                                                                })
                                                            }
                                                            className="mb-0"
                                                            style={{ color: "rgb(70, 116, 122)" }}
                                                        >
                                                            Forget Password?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div
                                            className="LoginFooter mr-lg-5 p-3 btmRoundEdge"
                                            style={{ maxWidth: "400px" }}
                                        >
                                            <p className="mb-0" style={{ color: "white" }}>
                                                Don't have a account?{" "}
                                                <NavLink to="/SignUp">
                                                    <strong style={{ color: "white" }}>SignUp</strong>
                                                </NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="LowerDiv mt-5">
                            <div className="row ">
                                <div className="row col-11 mx-auto pr-0 mt-5">
                                    <div className="Right_to_center">
                                        <p className="FS_24 mb-0 Black">Our Features</p>
                                    </div>
                                    <Slider />
                                    <div className="mr-2 Mobile">
                                        <img src={Android} id="Android" alt="Android Display" />
                                        <img src={Iphone} id="Iphone" alt="Iphone Display" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Model
                        openModel={this.state.showFrgtModel}
                        closable={true}
                        handleChange={this.closeModal}
                        name="showFrgtModel"
                    >
                        <form
                            className="loginForm form mx-auto px-3 px-md-5 py-2 mr-lg-5 mb-0 mt-5 TopRoundEdge ShadowBordr "
                            style={{ maxWidth: "400px" }}
                            id="inputForm"
                        >
                            <p
                                className="py-4 FS_24 mb-0 text-center"
                                style={{ color: "rgb(38, 38, 38)" }}
                            >
                                Forgot Password?
                            </p>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="forgotEmail"
                                    className="form-control mx-auto "
                                    placeholder="Enter your Phone number or Email"
                                    value={this.state.forgotEmail}
                                    name="forgotEmail"
                                    required
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="forgotEmail">
                                    Enter your Phone number or Email
                                </label>
                            </div>
                        </form>
                        <div
                            className="LoginFooter mx-auto mr-lg-5 p-3 btmRoundEdge"
                            style={{ maxWidth: "400px" }}
                        >
                            <p
                                className="mb-0"
                                style={{ color: "white" }}
                                onClick={this.emailSubmit}
                            >
                                Submit
                            </p>
                        </div>
                    </Model>
                    <Modall
                        openModel={this.state.showOtpModall}
                        name="showOtpModall"
                        closable={false}
                        handleChange={this.closeModal}
                        value={this.state.otp}
                        reciver="Email"
                        error={this.state.otpError}
                        ResendCode={this.ResendCode}
                        otpChange={this.otpChange}
                    />
                </div>
            </>
        );
    }
}
export default Home;

// const Home = () => {
//     const InitialState = {
//         email: "",
//         password: "",
//         ProviderType: "website",
//         fCMToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTA2OTYsImlhdCI6MTYwMjQwODI5NX0.WlwJWiGOHEkADrk97v_QDjRfW4CIHQQQSR5r_c_p7-I"
//     }

//     const [formData, setFormData] = useState(InitialState);

//     const { email, password, ProviderType, fCMToken } = formData;

//     const handleChange = (event) => {
//         const { name, value } = event.target
//         setFormData({
//             ...formData,
//             [name]: value
//         })
//     }

//     const handleSubmit = () => {
//         axios.post('http://professoryapp.com/rest/api/user/login', formData)
//             .then(function (response) {
//                 console.log(response);
//                 if (response.data.success) {
//                     <Route>
//                         <Redirect to="/MyBackpack" />
//                     </Route>
//                 }
//                 else {
//                     <Route>
//                         <Redirect to="/Bookstore" />
//                     </Route>
//                 }
//             })
//             // .then(response => {
//             //     console.log(response.success)
//             //     // if(data.success){
//             //     //     // this.props.history.push("/");
//             //     //     alert('Successfully Login');
//             //   }
//             // })

//             .catch(function (error) {
//                 alert(error);
//             });
//     }
//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row BackgroundImg upper_Div">
//                     <div className="row col-11 mx-auto">
//                         <div className="col-12 col-md-5 Para py-5 px-0 my-md-auto d-block">
//                             <h1 style={{ color: "white" }}>Professory App</h1>
//                             <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry
//                             Lorem Ipsum has been the industry's standard dummy text ever since</p>
//                             <img src={GooglePlay} alt="Play Store" id="img1" />
//                             <img src={AppStore} alt="App Store" id="img2" />
//                         </div>
//                         <div className="col-12 col-md-6 ml-auto px-0 px-md-3">
//                             <form className="loginForm px-3 px-md-5 py-2 mr-lg-5 mb-0 mt-5">
//                                 <div class="form-group text-center">
//                                     <h1 className="py-4" style={{ color: "rgb(38, 38, 38)" }}>Professory</h1>
//                                     <input
//                                         type="text"
//                                         className="form-control mx-auto"
//                                         placeholder="Phone Number, Username, or Email"
//                                         value={email}
//                                         name="email"
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <input
//                                         type="password"
//                                         className="form-control mx-auto"
//                                         placeholder="Password"
//                                         value={password}
//                                         name="password"
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <button
//                                         onClick={handleSubmit}
//                                         type="button"
//                                         className="form-control mx-auto button filled_btn">
//                                         Log In
//                                     </button>
//                                 </div>
//                                 <div className="form-group my-3">
//                                     <div className="strike mx-auto">
//                                         <h6><span className="px-2">OR</span></h6>
//                                     </div>
//                                 </div>
//                                 <div className="form-group">

//                                     <div className="row mx-auto a">
//                                         <div className="col-6 pl-0 pr-1 mb-3">
//                                             <div className="mr-auto bordr">
//                                                 <div className="row text-center mx-auto p-2">
//                                                     <div className="col-12 col-md-3 p-0 my-auto">
//                                                         <img className="pr-0" src={Google} alt="Google" />
//                                                     </div>
//                                                     <div className="col-12 col-md-9 p-0 my-auto">
//                                                         <h6 className="FS_10 LightGray mb-0"> Login with Google</h6>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-6 pr-0 pl-1 mb-3">
//                                             <div className="mr-auto bordr">
//                                                 <div className="row text-center mx-auto p-2">
//                                                     <div className="col-12 col-md-3 p-0 my-auto">
//                                                         <img className="pr-0 py-1" src={Twitter} alt="Twitter" />
//                                                     </div>
//                                                     <div className="col-12 col-md-9 p-0 my-auto">
//                                                         <h6 className="FS_10 LightGray mb-0"> Login with Twitter</h6>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mx-auto">
//                                             <p className="mb-0" style={{ color: "rgb(70, 116, 122)" }}>Forget Password?</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                             <div className="LoginFooter mr-lg-5 p-3">
//                                 <p className="mb-0" style={{ color: "white" }}>Don't have a account? <NavLink to="/SignUp"><strong style={{ color: "white" }}>SignUp</strong></NavLink></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row LowerDiv">
//                     <div className="row col-11 mx-auto pr-0">
//                         <div className="Right_to_center">
//                             <h3>Our Features</h3>
//                         </div>
//                         <Slider />
//                         <div className="mr-2 Mobile">
//                             <img src={Iphone} id="Iphone" alt="Iphone Display" />
//                             <img src={Android} id="Android" alt="Android Display" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home

// for changing variable in function
// this.loggedIn = this.loggedIn.bind(this)
// lgo=false;
// loggedIn(){
//     console.log("Good")
// }
