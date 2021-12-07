import React from "react";
import axios from "axios";
import sunglasses_emoji from "../../../Assets/img/sunglasses_emoji.png";
import Relieved_Emoji from "../../../Assets/img/Relieved_Emoji.png";
import Neutral_Emoji from "../../../Assets/img/Neutral_Emoji.png";
import confounded_face from "../../../Assets/img/confounded-face.png";
import Expressionless_Face from "../../../Assets/img/Expressionless_Face.png";
import SecondNavbar from "../SecondNavbar";
import GetData from "../../Api/GetData";
import SearchableSelect from "../../atoms/SearchableSelect";
import Account from "../../Api/Account";
import { Select, message } from "antd";

class ProfessorRateMe extends React.Component {
  constructor() {
    super();
    this.state = {
      Country: "",
      University: "",
      College: "",
      Major: "",
      Subject: "",
      Grade: "",
      YearTaken: "",
      rating: "",
      Attandance: "",
      Project: "",
      Homework: "",
      curve: "",
      countryID: "Select Country",
      countries: [],
      univID: "Select University",
      universities: [],
      collegeID: "Select College",
      colleges: [],
      majorID: "Select Major",
      majors: [],
      countryError: false,
      univError: false,
      collgeError: false,
      majorError: false,
      Inspirational: true,
      GroupProjects: false,
      GetReadytoRead1: false,
      GetReadytoRead2: false,
      ExamForm: "",
      Message: "",
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      var a = document.getElementsByClassName("chkbox");
      var counter = 0;
      for (var count = 0; count < a.length; count++) {
        if (a[count].checked === true) {
          counter++;
        }
      }

      if (counter > 3) {
        document.getElementById("chkbox").innerHTML = "***Select upto Three***";
        return false;
      }
      if (counter < 4) {
        document.getElementById("chkbox").innerHTML = "";
        return false;
      }
    } else {
      this.setState({ [name]: value });
    }
  }
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

  render() {
    return (
      <>
        <SecondNavbar />
        <div className="container-fluid RateMe">
          <div className="MaxWidth">
            <div className="row mt-4">
              <div className="col-11 col-md-10 mx-auto">
                <div className="row col-12 col-md-8 col-lg-6 mx-auto ShadowBordr Round25 p-4">
                  <div className="col-12 text-center ">
                    <h5>Rate Me</h5>
                  </div>
                  <div className="row col-12  mx-auto form px-0">
                    <div className="col-12 col-md-6 form-group px-1 mb-2">
                      <SearchableSelect
                        name="countryID"
                        value={this.state.countryID}
                        function={this.onChange}
                        list={this.state.countries}
                        objName="countryName"
                        label="Country"
                        Error={this.state.countryError}
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group px-1 mb-2">
                      <SearchableSelect
                        name="univID"
                        value={this.state.univID}
                        function={this.onChange}
                        list={this.state.universities}
                        objName="univName"
                        label="University"
                        Error={this.state.univError}
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group px-1 mb-2">
                      <SearchableSelect
                        name="collegeID"
                        value={this.state.collegeID}
                        function={this.onChange}
                        list={this.state.colleges}
                        objName="collegeName"
                        label="College"
                        Error={this.state.collegeError}
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group px-1 mb-2">
                      <SearchableSelect
                        name="majorID"
                        value={this.state.majorID}
                        function={this.onChange}
                        list={this.state.majors}
                        objName="majorName"
                        label="Major"
                        Error={this.state.majorError}
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group px-1 mb-2">
                      <select
                        name="Subject"
                        id="Subject"
                        value={this.state.Subject}
                        onChange={this.handleChange}
                        className="form-control py-1 Round25"
                      >
                        <option value=""></option>
                        <option value="Subject1">Subject1</option>
                        <option value="Subject2">Subject2</option>
                        <option value="Subject3">Subject3</option>
                        <option value="Subject4">Subject4</option>
                        <option value="Subject5">Subject5</option>
                      </select>
                      <label
                        htmlFor="Subject"
                        className={`${
                          this.state.Subject !== "" ? "Valued" : ""
                        }`}
                      >
                        Select Subject or code
                      </label>
                    </div>

                    <div className="col-12 col-md-6 form-group px-1 mb-2 my-md-0">
                      <select
                        name="Grade"
                        id="Grade"
                        value={this.state.Grade}
                        onChange={this.handleChange}
                        className="form-control py-1 Round25"
                      >
                        <option value=""></option>
                        <option value="Grade1">Grade1</option>
                        <option value="Grade2">Grade2</option>
                        <option value="Grade3">Grade3</option>
                        <option value="Grade4">Grade4</option>
                        <option value="Grade5">Grade5</option>
                      </select>
                      <label
                        htmlFor="Grade"
                        className={`${this.state.Grade !== "" ? "Valued" : ""}`}
                      >
                        Select Grade
                      </label>
                    </div>
                    <div className="col-12 col-md-6 mx-auto form-group px-1 mb-2 my-md-0">
                      <select
                        name="YearTaken"
                        id="Year Taken"
                        value={this.state.YearTaken}
                        onChange={this.handleChange}
                        className="form-control py-1 Round25"
                      >
                        <option value=""></option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                      </select>
                      <label
                        htmlFor="Year Taken"
                        className={` ${
                          this.state.YearTaken !== "" ? "Valued" : ""
                        }`}
                      >
                        Year Taken
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-center mt-3">
                    <p className="FS_16 mb-0">Hardness level</p>
                  </div>
                  <div className="col-12 rating-wrapper mt-3 px-0">
                    <label className="rating-label mx-auto">
                      <div className="ratingItemList mx-auto p-0 d-flex">
                        <input
                          className="d-none rating rating-1"
                          id="rating-1-2"
                          type="radio"
                          value="Very Poor"
                          onClick={this.handleChange}
                          name="rating"
                        />
                        <label className="rating rating-1" htmlFor="rating-1-2">
                          <i>
                            {" "}
                            <img
                              className="mb-3"
                              src={sunglasses_emoji}
                              alt=""
                              height="36px"
                            />{" "}
                          </i>
                          <p className="Bold Black FS_10"> Very Poor</p>
                        </label>
                        <input
                          className="d-none rating rating-2"
                          id="rating-2-2"
                          type="radio"
                          value="Poor"
                          onClick={this.handleChange}
                          name="rating"
                        />
                        <label className="rating rating-2" htmlFor="rating-2-2">
                          <i>
                            {" "}
                            <img
                              className="mb-3"
                              src={Relieved_Emoji}
                              alt=""
                              height="36px"
                            />{" "}
                          </i>
                          <p className="Bold Black FS_10"> Poor</p>
                        </label>
                        <input
                          className="d-none rating rating-3"
                          id="rating-3-2"
                          type="radio"
                          value="Good"
                          onClick={this.handleChange}
                          name="rating"
                        />
                        <label className="rating rating-3" htmlFor="rating-3-2">
                          <i>
                            {" "}
                            <img
                              className="mb-3"
                              src={Neutral_Emoji}
                              alt=""
                              height="36px"
                            />{" "}
                          </i>
                          <p className="Bold Black FS_10"> Good</p>
                        </label>
                        <input
                          className="d-none rating rating-4"
                          id="rating-4-2"
                          type="radio"
                          value="Very Good"
                          onClick={this.handleChange}
                          name="rating"
                        />
                        <label className="rating rating-4" htmlFor="rating-4-2">
                          <i>
                            {" "}
                            <img
                              className="mb-3"
                              src={confounded_face}
                              alt=""
                              height="36px"
                            />{" "}
                          </i>
                          <p className="Bold Black FS_10"> Very Good</p>
                        </label>
                        <input
                          className="d-none rating rating-5"
                          id="rating-5-2"
                          type="radio"
                          value="One of a Kind"
                          onClick={this.handleChange}
                          name="rating"
                        />
                        <label className="rating rating-5" htmlFor="rating-5-2">
                          <i>
                            {" "}
                            <img
                              className="mb-3"
                              src={Expressionless_Face}
                              alt=""
                              height="36px"
                            />{" "}
                          </i>
                          <p className="Bold Black FS_10"> One of a Kind</p>
                        </label>
                      </div>
                    </label>
                  </div>
                  <div className="row col-12 px-0 mt-3">
                    <div className="col-12 col-sm-6 text-center borderRight">
                      <h5>Homework</h5>
                      <ul class="w-100 combineButton RadioToButton d-inline-flex px-0 my-1">
                        <li className="w-50">
                          <input
                            type="radio"
                            id="GivesHomeWork"
                            name="Homework"
                            value="Yes"
                            onClick={this.handleChange}
                          />
                          <label
                            htmlFor="GivesHomeWork"
                            className="py-1 mb-0 Bold FS_12"
                          >
                            Yes
                          </label>
                        </li>
                        <li className="w-50">
                          <input
                            type="radio"
                            id="Don't Gives Homework"
                            name="Homework"
                            value="No"
                            onClick={this.handleChange}
                          />
                          <label
                            htmlFor="Don't Gives Homework"
                            className="py-1 mb-0 Bold FS_12"
                          >
                            No
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                      <h5>Project</h5>
                      <ul class="w-100 combineButton RadioToButton d-inline-flex px-0 my-1">
                        <li className="w-50">
                          <input
                            type="radio"
                            id="Gives Project"
                            name="Project"
                            value="Yes"
                            onClick={this.handleChange}
                          />
                          <label
                            htmlFor="Gives Project"
                            className="py-1 mb-0 Bold FS_12"
                          >
                            Yes
                          </label>
                        </li>
                        <li className="w-50">
                          <input
                            type="radio"
                            id="Don't Give Project"
                            name="Project"
                            value="No"
                            onClick={this.handleChange}
                          />
                          <label
                            htmlFor="Don't Give Project"
                            className="py-1 mb-0 Bold FS_12"
                          >
                            No
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 mt-3 text-center px-0 RadioToButton Tags">
                    <p className="FS_16 mt-3">
                      Select up to three tags that best describe your subject
                    </p>
                    <p className="m-0" style={{ color: "red" }} id="chkbox"></p>
                    <div className="form-check-inline col-5 col-sm-3 mx-auto px-1">
                      <input
                        type="checkbox"
                        id="Inspirational"
                        className="chkbox"
                        name="Inspirational"
                        checked={this.state.Inspirational}
                        onClick={this.handleChange}
                      />
                      <label
                        className="mb-0 w-100 py-2 FS_10"
                        htmlFor="Inspirational"
                      >
                        Inspirational
                      </label>
                    </div>
                    <div className="form-check-inline col-5 col-sm-3 mx-auto mt-3 px-1">
                      <input
                        type="checkbox"
                        id="Group Projects"
                        className="chkbox"
                        name="GroupProjects"
                        checked={this.state.GroupProjects}
                        onChange={this.handleChange}
                      />
                      <label
                        className="mb-0 w-100 py-2 FS_10"
                        htmlFor="Group Projects"
                      >
                        Group Projects
                      </label>
                    </div>
                    <div className="form-check-inline col-5 col-sm-3 mx-auto mt-3 px-1">
                      <input
                        type="checkbox"
                        id="Get Ready to Read"
                        className="chkbox"
                        checked={this.state.GetReadytoRead1}
                        name="GetReadytoRead1"
                        onChange={this.handleChange}
                      />
                      <label
                        className="mb-0 w-100 py-2 FS_10"
                        htmlFor="Get Ready to Read"
                      >
                        Get Ready to Read
                      </label>
                    </div>
                    <div className="form-check-inline col-5 col-sm-3 mx-auto mt-3 px-1">
                      <input
                        type="checkbox"
                        id="Get Ready to Read 2"
                        name="GetReadytoRead2"
                        className="chkbox"
                        checked={this.state.GetReadytoRead2}
                        onChange={this.handleChange}
                      />
                      <label
                        className="mb-0 w-100 py-2 FS_10"
                        htmlFor="Get Ready to Read 2"
                      >
                        Get Ready to Read
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mt-3 text-center px-0 RadioToButton Tags">
                    <p className="FS_16 mb-0">Exam Form</p>
                    <ul class="row Tags RadioToButton px-0">
                      <li className="mx-auto px-1 mt-3">
                        <input
                          type="radio"
                          id="Books"
                          name="ExamForm"
                          value="Books"
                          onClick={this.handleChange}
                        />
                        <label
                          className="w-100 py-1 px-3 FS_10"
                          htmlFor="Books"
                        >
                          Books
                        </label>
                      </li>
                      <li className="mx-auto px-1 mt-3">
                        <input
                          type="radio"
                          id="Notes"
                          name="ExamForm"
                          value="Notes"
                          onClick={this.handleChange}
                        />
                        <label
                          className="w-100 py-1 px-3 FS_10"
                          htmlFor="Notes"
                        >
                          Notes
                        </label>
                      </li>
                      <li className="mx-auto px-1 mt-3">
                        <input
                          type="radio"
                          id="Notes&Books"
                          name="ExamForm"
                          value="Notes&Books"
                          onClick={this.handleChange}
                        />
                        <label
                          className="w-100 py-1 px-3 FS_10"
                          htmlFor="Notes&Books"
                        >
                          Notes&Books
                        </label>
                      </li>
                      <li className="mx-auto px-1 mt-3">
                        <input
                          type="radio"
                          id="PastExams"
                          name="ExamForm"
                          value="PastExams"
                          onClick={this.handleChange}
                        />
                        <label
                          className="w-100 py-1 px-3 FS_10"
                          htmlFor="PastExams"
                        >
                          Past Exams
                        </label>
                      </li>
                      <li className="mx-auto px-1 mt-3">
                        <input
                          type="radio"
                          id="Imposible"
                          name="ExamForm"
                          value="Imposible"
                          onClick={this.handleChange}
                        />
                        <label
                          className="w-100 py-1 px-3 FS_10"
                          htmlFor="Imposible"
                        >
                          Imposible
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12  text-center px-0 RadioToButton Tags">
                    <p className="FS_16 ">Would you take this Subject again?</p>
                    <p className="m-0" style={{ color: "red" }} id="chkbox"></p>
                    <div className="row">
                      <div className="ml-auto">
                        <input
                          type="radio"
                          id="Yes"
                          name="ExamForm"
                          value="Yes"
                          onClick={this.handleChange}
                        />
                        <label
                          className="yes-no-radiobtn py-1 px-3 FS_10"
                          htmlFor="Yes"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="mr-auto mx-2">
                        {" "}
                        <input
                          type="radio"
                          id="No"
                          name="ExamForm"
                          value="No"
                          onClick={this.handleChange}
                        />
                        <label
                          className="yes-no-radiobtn py-1 px-3 FS_10"
                          htmlFor="No"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <textarea
                      id="Description"
                      name="Description"
                      placeholder="Share Your experience with Subject&#10;NameX here.."
                      rows="5"
                      className="my-3 p-3"
                    ></textarea>
                  </div>
                  <div class="col-12 form-group mx-auto mb-4 px-0">
                    <button
                      className="Round_edge w-100 button filled_btn py-2"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfessorRateMe;
