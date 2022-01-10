import React from "react";
import axios from "axios";
import BecomeMember from "../../Assets/img/signupDivImg1.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Select, message } from "antd";
import SearchableSelect from "../atoms/SearchableSelect";
import Loader from "../../Loader";
import Account from "../Api/Account";
import GetData from "../Api/GetData";
import Modall from "../atoms/Modall";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      countryID: "Select Country",
      countries: [],
      univID: "Select University",
      universities: [],
      collegeID: "Select College",
      colleges: [],
      majorID: "Select Major",
      majors: [],
      isSocial: false,
      update: false,
      count: 0,
      emailError: false,
      countryError: false,
      univError: false,
      collgeError: false,
      majorError: false,
      otpModal: false,
      otpError: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    GetData.Countries(this.Set);
  }

  Set = (name, data) => {
    // console.log(name, data)
    this.setState({
      [name]: data,
      update: true,
    });
  };

  onChange = (e, name) => {
    this.setState({
      [name]: e,
    });

    if (name === "countryID") {
      GetData.Universities(e, this.Set);
      this.setState({
        univID: "Select University",
        collegeID: "Select College",
        majorID: "Select Major",
        countryError: false,
      });
    } else if (name === "univID") {
      GetData.Colleges(e, this.Set);
      this.setState({
        collegeID: "Select College",
        majorID: "Select Major",
        univError: false,
      });
    } else if (name === "collegeID") {
      GetData.Majors(e, this.Set);
      this.setState({
        collegeError: false,
        majorID: "Select Major",
      });
    } else {
      this.setState({ majorError: false });
    }
  };

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    // if ([name] === "email" && value.includes("@") && value.includes(".")) {
    //   this.checkEmail(value);
    // }
    const regex = new RegExp("/^[a-z0-9\_\.\-]{2,20}\@[a-z0-9\_\-]{2,20}\.[a-z]{2,9}$/")

    if (name === "email" && regex.test(value)) {
      this.checkEmail(value)
    }
  }

  updatePhone(value) {
    this.setState({
      phone: value,
      count: 1,
    });
  }

  checkEmail = (email1) => {
    axios
      .post("user/checkEmail", { email: email1 })
      .then((response) => {
        // console.log(response);
        if (
          response.data.success &&
          response.data.message !== "Not Found" &&
          email1 !== ""
        ) {
          document.getElementById("error").innerHTML = response.data.message;
          this.setState({ emailError: true });
        } else {
          document.getElementById("error").innerHTML = "";
          this.setState({ emailError: false });
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.emailError) {
      if (this.state.phone !== "") {
        if (this.state.countryID !== "Select Country") {
          if (this.state.univID !== "Select University") {
            if (this.state.collegeID !== "Select College") {
              if (this.state.majorID !== "Select Major") {
                const res = Account.SignUpApi(this.state);
                res.then((value) => {
                  console.table("bbb", value);
                  if (value.data.success) {
                    this.setState({ otpModal: true });
                  } else {
                    message.error(value.data.message);
                  }
                });
              } else {
                this.setState({ majorError: true });
              }
            } else {
              this.setState({ collegeError: true });
            }
          } else {
            this.setState({ univError: true });
          }
        } else {
          this.setState({ countryError: true });
        }
      } else {
        this.setState({ count: 1 });
      }
    }
  }

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
        email: this.state.email,
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
        email: this.state.email,
      })
      .then((res) => {
        if (res.data.success) {
          message.success("sent");
        }
      });
  };

  render() {
    return this.state.update ? (
      <div className="container-fluid SignUp my-5 BackgroundImg">
        <div className="row py-5">
          <div className="MaxWidth pb-5">
            <div className="col-12 col-md-10 px-0 mx-auto divShadow">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 bgBlue">
                  <div className="h-100 d-flex">
                    <div className="my-auto mx-auto d-block">
                      <div className="p-3">
                        <img
                          src={BecomeMember}
                          className="mx-auto d-block w-25"
                          alt="Become a member"
                        />
                        <p className="text-center text-white FS_20 Bold my-3">
                          Become a Member Now
                        </p>
                        <p className="text-center text-white FS_14">
                          What is Lorem Ipsum Lorem text of the printing and type
                          has been the industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 bg-white">
                  <form className=" my-5" onSubmit={this.handleSubmit}>
                    <h3
                      className="p-4 text-center"
                      style={{ color: "rgb(38, 38, 38)" }}
                    >
                      Sign Up
                    </h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mx-auto"
                        name="full_name"
                        required
                        value={this.state.full_name}
                        placeholder="Full Name"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="full_name">Full Name</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control mx-auto"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                      />
                      <label htmlFor="email">Email</label>
                      <p id="error" className="alert-danger p-0 m-0"></p>
                    </div>

                    <PhoneInput
                      value={this.state.phone}
                      placeholder="Enter phone"
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      containerClass="mb-3"
                      country={"kw"}
                      // onChange={phone => this.setState({ phone })}
                      onChange={this.updatePhone}
                      isValid={(inputNumber, value, country) => {
                        const newStr = inputNumber.replace(
                          value.dialCode,
                          ""
                        );
                        if (value.dialCode === "") {
                          return "Select Country Code";
                        } else if (newStr === "" && this.state.count) {
                          return "Phone number required";
                        } else {
                          return true;
                        }
                      }}
                    />
                    <div className="form-group" id="custom-select ">
                      <select
                        id="gender"
                        name="gender"
                        required
                        className={`form-control mx-auto `}
                        value={this.state.gender}
                        onChange={this.handleChange}
                      >
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <label
                        className={` ${this.state.gender !== "" ? "Valued" : "d-none"
                          }`}
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                        rows="4"
                        placeholder="Password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <SearchableSelect
                      name="countryID"
                      value={this.state.countryID}
                      function={this.onChange}
                      list={this.state.countries}
                      objName="countryName"
                      label="Country"
                      Error={this.state.countryError}
                    />
                    <SearchableSelect
                      name="univID"
                      value={this.state.univID}
                      function={this.onChange}
                      list={this.state.universities}
                      objName="univName"
                      label="University"
                      Error={this.state.univError}
                    />
                    <SearchableSelect
                      name="collegeID"
                      value={this.state.collegeID}
                      function={this.onChange}
                      list={this.state.colleges}
                      objName="collegeName"
                      label="College"
                      Error={this.state.collegeError}
                    />
                    <SearchableSelect
                      name="majorID"
                      value={this.state.majorID}
                      function={this.onChange}
                      list={this.state.majors}
                      objName="majorName"
                      label="Major"
                      Error={this.state.majorError}
                    />
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn w-100 mx-auto py-3 button filled_btn"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <Modall
                    openModel={this.state.otpModal}
                    closable={false}
                    value={this.state.otp}
                    reciver='Email'
                    otpChange={this.otpChange}
                    error={this.state.otpError}
                    ResendCode={this.ResendCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}

export default SignUp;
