import React from "react"
import SecondNavbar from "../SubComponents/SecondNavbar"
import SelectionBar from "../SubComponents/Shared/SelectionBar"
import DisplayProfessorsSubject from "../SubComponents/Shared/DisplayProfessorsSubject"
import GetData from '../Api/GetData';
import PostData from '../Api/PostData';
import kuwaitProfessorImg from "../../Assets/img/KuwaitProfessor.png"
import ProfessorImg from "../../Assets/img/Professor.png"
import Model from "../atoms/Model";
import SearchableSelect from "../atoms/SearchableSelect";
import { message } from 'antd'
import Modall from "../atoms/Modall";
import Account from "../Api/Account";
class ProfessorRating extends React.Component {
    constructor() {
        super();
        this.state = {
            DataofProfessors: [],
            visible: 8,
            univID: "Select University",
            collegeID: "Select College",
            majorID: "Select Major",
            showVolunteerModel: false,
            showAddModel: false,
            user: JSON.parse(localStorage.getItem('User')),
            countryID: localStorage.getItem('countryID'),
            universities: [],
            univError: false,
            colleges: [],
            collegeError: false,
            majors: [],
            majorError: false,
            profName: '',
            nameAr: '',
            count: 0,
            otp: "",
            otpError: "",
        }
        this.LoadMore = this.LoadMore.bind(this)
        this.ShowLess = this.ShowLess.bind(this)
    }


    componentDidMount() {
        GetData.Universities(this.state.countryID, this.Set)
    }

    Set = (name, data) => {
        // console.log(name, data)
        this.setState({
            [name]: data,
            update: true
        });
    }

    onChange = (value, name) => {
        this.handleChange(name, value)
    }

    handleChange = (name, value) => {
        console.log({ name, value })
        this.setState({ [name]: value }, () => {
            if (name === "univID") {
                GetData.Colleges(value, this.Set);
                this.setState({
                    collegeID: "Select College",
                    majorID: "Select Major",
                    univError: false
                });
            }
            else if (name === "collegeID") {
                GetData.Majors(value, this.Set);
                const res = GetData.CollegeProfessors(value)
                res.then(value => {

                    this.setState({
                        DataofProfessors: value.data.data.docs,
                        university: value.data.data.universityName, college: value.data.data.collegeName,
                        collegeError: false,
                        majorID: "Select Major"
                    });
                })
            }

            else if (name === "majorID") {
                const res = GetData.MajorProfessors(value)
                res.then(value => {
                    console.log({ value })
                    this.setState({ DataofProfessors: value.data.data.docs, count: 0 });
                })
            }
        });

    }

    LoadMore() {
        this.setState((old) => {
            return { visible: old.visible + 4 }
        })
    }
    ShowLess() {
        this.setState(() => {
            return { visible: 8 }
        })
    }

    AddProf = () => {
        const { major, profName, nameAr } = this.state
        if (major !== 'Select Major' && profName !== '' && nameAr !== '') {
            const res = PostData.AddProf(this.state)
            res.then(value => {
                console.table('Prof', value)
                if (value.data.success) {
                    this.setState({ showAddModel: false });
                    message.success(value.data.message)
                }
                else {
                    message.error(value.data.message)
                }
            })
        }
        else this.setState({ count: 1 })
    }

    volunteer = () => {

        if (this.state.user.accountStatus !== 1) {
            const res = Account.PhoneCode()
            res.then(responce => {
                if (responce.data.success) {
                    this.setState({
                        showVolunteerModel: false,
                        showPhoneModel: true
                    })

                }
                else {
                    message.error(responce.data.message)
                }
            })
        }
        else if (this.state.user.accountStatus === 1 && this.state.user.permissionPost === "NotRequested") {
            this.AskPermission()
        }

    }

    handleAdd = (e) => {
        if (e.target.type === 'button') {
            if (this.state.user.permissionPost === 'Requested') {
                this.setState({
                    showAddModel: true
                })
            }
            else if (this.state.user.permissionPost !== 'Requested') {
                this.setState({
                    showVolunteerModel: true
                })
            }
        }
        else if (e.target.type === 'text') {
            if (e.target.name === "nameAr") {
                this.setState({
                    nameAr: e.target.value.replace(/[^\u0621-\u064A\s]/ig, ''),
                })
            }
            else {
                this.setState({
                    [e.target.name]: e.target.value
                })
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
        const res = Account.SendCode(otp)
        res.then(responce => {
            if (responce.data.success) {
                this.setState({
                    showPhoneModel: false,
                })
                this.AskPermission()
            }
            else {
                message.error(responce.data.message);
                this.setState({ otpError: responce.data.message });
            }
        })
    };

    ResendCode = () => {
        const res = Account.PhoneCode()
        res.then(responce => {
            if (!responce.data.success) {
                message.error(responce.data.message)
            }
        })
    };

    AskPermission = () => {
        const res = Account.AskPermission()
        res.then(responce => {
            if (responce.data.success) {
                this.setState({
                    showVolunteerModel: false,
                    showPhoneModel: false,
                    showAddModel: true,
                })
                message.success('You are now the volunteer, Thank you')
            }
            else {
                message.error(responce.data.message)
            }
        })
    }


    render() {

        const RenderingProfessors = this.state.DataofProfessors.slice(0, this.state.visible).map(Professor => {

            return <DisplayProfessorsSubject key={Professor.profID} from="/ProfessorRating/" Img={kuwaitProfessorImg} Id={Professor.profID} Name={Professor.profName} Rating={Professor.Rating} SchoolName={this.state.university} CollegeName={this.state.college} Major={Professor.majort.majorName} />

        })


        return (
            <>

                <SecondNavbar />
                <SelectionBar handleChange={this.handleChange} handleAdd={this.handleAdd} buttonValue="+Add" />
                {this.state.collegeID === "Select College" ? <h1 className="d-flex justify-content-center align-items-center h-75">Please Select University & College First</h1> :
                    <div className="container-fluid">

                        <div className="row mx-0 mb-5">
                            <div className="row col-11 col-md-10 mx-auto">

                                {RenderingProfessors}
                            </div>
                            {this.state.visible < this.state.DataofProfessors.length ?
                                <div className="col-12 text-center mb-5" onClick={this.LoadMore}>
                                    <p className="Bold" style={{ cursor: "pointer" }}>load More</p>
                                </div> :
                                <div className="col-12 text-center mb-5" onClick={this.ShowLess}>
                                    <p className="Bold" style={{ cursor: "pointer" }}>Show Less</p>
                                </div>}
                        </div>
                    </div>}
                <Model openModel={this.state.showAddModel} closable={true} handleChange={this.handleChange} name='showAddModel'>
                    <div className="p-3 form">
                        <div className="form-group pb-3 mb-0 h-100 RoundFeild">
                            <SearchableSelect name="univID"
                                value={this.state.univID}
                                function={this.onChange}
                                list={this.state.universities}
                                objName='univName'
                                label="University"
                                Error={this.state.univError} />
                        </div>
                        <div className="form-group pb-3 mb-0 h-100 RoundFeild">
                            <SearchableSelect name="collegeID"
                                value={this.state.collegeID}
                                function={this.onChange}
                                list={this.state.colleges}
                                objName='collegeName'
                                label="College"
                                Error={this.state.collegeError} />
                        </div>
                        <div className="form-group pb-3 mb-0 h-100 RoundFeild">
                            <SearchableSelect name="majorID"
                                value={this.state.majorID}
                                function={this.onChange}
                                list={this.state.majors}
                                objName='majorName'
                                label="Major"
                                Error={this.state.majorError} />
                            {(this.state.majorID == 'Select Major' && this.state.count) ? <p className="Errored text-center">Major is Required</p> : null}
                        </div>
                        <div className="feild px-1 pb-3 mt-0 mb-3">
                            <input
                                type="text"
                                name="profName"
                                value={this.state.profName}
                                onChange={this.handleAdd}
                                className="p-2 w-100 h-100 FS-14 form-control Round25"
                                placeholder="Profesor Name" />
                        </div>
                        {(this.state.profName === '' && this.state.count) ? <p className="Errored text-center">Professor Name is Required</p> : null}
                        <div className="feild px-1 pb-3 mt-0">
                            <input
                                type="text"
                                name="nameAr"
                                value={this.state.nameAr}
                                onChange={this.handleAdd}
                                dir="rtl"
                                className="p-2 w-100 h-100 FS-14 form-control Round25"
                                placeholder="اسم الأستاذ" />
                        </div>
                        {(this.state.nameAr === '' && this.state.count) ? <p className="Errored text-center">Professor Name in Arabic is Required</p> : null}
                        <div className="px-1 pb-3 mt-0">
                            <button
                                className="Round_edge button filled_btn widthMaxContent px-3 py-2 mx-auto d-block"
                                onClick={this.AddProf}
                                type="button">
                                Add Professor
                            </button>
                        </div>
                    </div>
                </Model>
                <Model openModel={this.state.showVolunteerModel} closable={true} handleChange={this.handleChange} name='showVolunteerModel'>
                    <div className="text-center p-3" width='50px'>
                    <img src={ProfessorImg} alt="professor" />
                    <p className="my-5">if you would like to volunteer adding data in the app, Please click the volunteer button. We will contact you to guide you </p>
                    <div class="d-grid gap-2 col-12">
                        <button class="btn btn-primary w-100 rounded-pill valunter-button" onClick={this.volunteer} type="button">volunteer</button>
                    </div>
                </div>
                </Model>

                <Modall openModel={this.state.showPhoneModel}
                    name="showPhoneModel"
                    closable={true}
                    value={this.state.otp}
                    handleChange={this.handleChange}
                    otpChange={this.otpChange}
                    error={this.state.otpError}
                    reciver='Phone Number'
                    ResendCode={this.ResendCode} />
                {/* <Model openModel={this.state.showPhoneModel} closable={true} handleChange={this.handleChange} name='showPhoneModel'>
                <p>Phone Verification</p>
                </Model> */}
            </>
        )
    }
}

export default ProfessorRating