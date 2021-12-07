import React from 'react';
import UploadComponent from '../Shared/UploadComponent';
import SecondNavbar from '../SecondNavbar';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import GetData from '../../Api/GetData';
import SearchableSelect from '../../atoms/SearchableSelect'
import PostData from '../../Api/PostData';

class PostServiceAd extends React.Component {
    constructor() {
        super();
        this.state = {
            Type: "Basic",
            ServiceName: "",
            Publisher: "",
            Packages: "",
            Country: "",
            University: "",
            CollegeName: "",
            SubjectName: "",
            ContactType: "",
            Price: "",
            Message: "",
            countryID: "Select Country",
            countries: [],
            countryError: false,
            univID: "Select University",
            universities: [],
            univError: false,
            collegeID: "Select College",
            colleges: [],
            collgeError: false,
            majorID: "Select Major",
            majors: [],
            majorError: false,
            subjectID: "Select Subject",
            subjects: [],
            subjectError: false,
            phone: "",
            phoneError: false,
            count: 0,
            InputImages: [],
            imageError: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.updatePhone = this.updatePhone.bind(this);
    }

    componentDidMount() {
        GetData.Countries(this.Set);
    }

    Set = (name, data) => {
        // console.log(name, data)
        this.setState({
            [name]: data,
            update: true
        });
    }

    onChange = (e, name) => {
        
        this.setState({
            [name]: e
        });
        if (name === "countryID") {
            GetData.Universities(e, this.Set);
            this.setState({
                univID: "Select University",
                collegeID: "Select College",
                majorID: "Select Major",
                subjectID: "Select Subject",
                countryError: false
            });
        }
        else if (name === "univID") {
            GetData.Colleges(e, this.Set);
            this.setState({
                collegeID: "Select College",
                majorID: "Select Major",
                subjectID: "Select Subject",
                univError: false
            });
        }
        else if (name === "collegeID") {
            GetData.Majors(e, this.Set);
            this.setState({
                collegeError: false,
                majorID: "Select Major",
                subjectID: "Select Subject"
            });
        }
        else if (name === "majorID") {
            GetData.Subjects(e, this.Set);
            this.setState({
                majorError: false,
                subjectID: "Select Subject"
            });
        }
        
        else {
            this.setState({ subjectError: false });
        }
    
    }

    updatePhone(value) {

        this.setState({
            phone: value,
            count: 1
        })

    }


    handleSubmit = (e) => {
        e.preventDefault()
        // if (!this.state.emailError) {
        if (this.state.phone !== "") {
            if (this.state.countryID !== "Select Country") {
                if (this.state.univID !== "Select University") {
                    if (this.state.collegeID !== "Select College") {
                        if (this.state.majorID !== "Select Major") {
                            if (this.state.subjectID !== "Select Subject") {
                                 if (this.state.InputImages.length > 0) {

                            var formData = new FormData();
                            formData.append("bookName", this.state.BookName);
                            formData.append("bookType", this.state.Type);
                            formData.append("authorName", this.state.AutherName);
                            formData.append("bookCondition", this.state.BookCondition);
                            formData.append("countryID", this.state.countryID); //Api key not available 
                            formData.append("univID", this.state.univID);       //Api key not available 
                            formData.append("collegeID", this.state.collegeID); //Api key not available 
                            formData.append("majorID", this.state.majorID);     //Api key not available 
                            formData.append("SubjectName", this.state.subjectID);
                            formData.append("email", this.state.Email);         //Api key not available
                            formData.append("price", this.state.Price);
                            formData.append("description", this.state.Message);
                            formData.append("featured", this.state.Featured);   //Api key not available      
                            

                            const res = PostData.ServiceAdd(formData)
                            res.then(value => {
                                console.table('bbb', value)
                                // if (value.data.success) {
                                //     this.setState({ otpModal: true });
                                // }
                                // else {
                                //     message.error(value.data.message)
                                // }
                            })
                        }
                        else {
                            this.setState({ subjectError: true });
                        }
                    }
                        else {
                            this.setState({ majorError: true });
                        }
                    }
                    else {
                        this.setState({ collegeError: true });
                    }
                }
                else {
                    this.setState({ univError: true });
                }
            }
            else {
                this.setState({ countryError: true });
            }
        }
        else {
            this.setState({ count: 1 });
        } 
    }
        else {
            this.setState({ imageError: true });
        }
    }
    // }

    imageUpload = (images) => {
        this.setState({
            InputImages: [],
            imageError: false
        })
        images.map(image => {
            this.state.InputImages.push(image)
        })
        console.log(this.state.InputImages)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <SecondNavbar />
                <div className="container-fluid mb-6 p-4">
                    <div className="col-11 mx-auto mb-5">
                        <div className="col-12 col-md-10 col-lg-8 mx-auto ">
                            <form className="row text-center form my-5 postAdd" onSubmit={this.handleSubmit}>
                                <div className="col-12 px-0">
                                    <ul class="col-12 col-md-8 mx-auto combineButton RadioToButton d-inline-flex px-0 mb-4">
                                        <li className="w-50">
                                            <input
                                                type="radio"
                                                id="For Sale"
                                                name="Type"
                                                value="For Sale"
                                                onClick={this.handleChange}/>
                                            <label htmlFor="For Sale" className="py-2 mb-0 Bold">For Sale</label>
                                        </li>
                                        <li className="w-50">
                                            <input
                                                type="radio"
                                                id="Requested"
                                                name="Type"
                                                value="Requested"
                                                onClick={this.handleChange} />
                                            <label htmlFor="Requested" className="py-2 mb-0 Bold">Requested</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6 mb-4 px-1 form-group">
                                    <input
                                        type="text"
                                        name="ServiceName"
                                        id="ServiceName"
                                        value={this.state.ServiceName}
                                        onChange={this.handleChange}
                                        className="ml-auto form-control Round25"
                                        placeholder="Service Name" 
                                        required
                                        />
                                    <label htmlFor="ServiceName">Service Name</label>
                                </div>
                                <div className="col-12 col-sm-6 mb-4 px-1 form-group">
                                    <input
                                        type="text"
                                        id="Publisher"
                                        name="Publisher"
                                        value={this.state.Publisher}
                                        onChange={this.handleChange}
                                        className="mr-auto form-control Round25"
                                        placeholder="Publisher" 
                                        required
                                        />
                                    <label htmlFor="Publisher">Publisher</label>
                                </div>

                                {this.state.Type == "For Sale" ? <>
                                    <div className="col-12">
                                        <h4 className="mb-4 text-center">Package Type</h4>
                                    </div>
                                    <div className="col-12 mx-auto px-0">
                                        <ul class="Tags RadioToButton row px-0">
                                            <li className="col-4 col-sm-3 col-md-4 col-lg-3 mx-auto px-1">
                                                <input type="radio"
                                                    id="Basic"
                                                    name="Packages"
                                                    value="Basic"
                                                    defaultChecked
                                                    onClick={this.handleChange} />
                                                <label className="w-100 py-2" htmlFor="Basic">Basic</label>
                                            </li>
                                            <li className="col-4 col-sm-3 col-md-4 col-lg-3 mx-auto px-1">
                                                <input
                                                    type="radio"
                                                    id="Standard"
                                                    name="Packages"
                                                    value="Standard"
                                                    onClick={this.handleChange} />
                                                <label className="w-100 py-2" htmlFor="Standard">Standard</label>
                                            </li>
                                            <li className="col-4 col-sm-3 col-md-4 col-lg-3 mx-auto px-1">
                                                <input type="radio"
                                                    id="Primium"
                                                    name="Packages"
                                                    value="Primium"
                                                    onClick={this.handleChange} />
                                                <label className="w-100 py-2" htmlFor="Primium">Primium</label>
                                            </li>
                                        </ul>
                                    </div>
                                </> : null}
                                <div className="col-12 px-0">
                                    <div className="row mx-auto px-0 text-left">
                                        <div className="col-12 col-sm-6 form-group px-1 mb-4">

                                        <SearchableSelect name="countryID"
                                        value={this.state.countryID}
                                        function={this.onChange}
                                        list={this.state.countries}
                                        objName='countryName'
                                        label="Country"
                                        Error={this.state.countryError} />
                                        </div>
                                        <div className="col-12 col-sm-6 form-group px-1 mb-4">
                                            <SearchableSelect name="univID"
                                        value={this.state.univID}
                                        function={this.onChange}
                                        list={this.state.universities}
                                        objName='univName'
                                        label="University"
                                        Error={this.state.univError} />
                                        </div>
                                        <div className="col-12 col-sm-6 form-group px-1 mb-4">

                                        <SearchableSelect name="collegeID"
                                        value={this.state.collegeID}
                                        function={this.onChange}
                                        list={this.state.colleges}
                                        objName='collegeName'
                                        label="College"
                                        Error={this.state.collegeError} />
                                        </div>
                                        <div className="col-12 col-sm-6 form-group px-1 mb-4">
                                        <SearchableSelect name="majorID"
                                        value={this.state.majorID}
                                        function={this.onChange}
                                        list={this.state.majors}
                                        objName='majorName'
                                        label="Major"
                                        Error={this.state.majorError} />
                                        </div>
                                        <div className="col-12 col-sm-6 form-group px-1 mb-4">
                                        <SearchableSelect name="subjectID"
                                        value={this.state.subjectID}
                                        function={this.onChange}
                                        list={this.state.subjects}
                                        objName='subjectName'
                                        label="Subject"
                                        Error={this.state.subjectError} />
                                        </div>
                                    
                                
                                <div className="col-12 col-sm-6 mb-4 px-1 form-group">
                                    <select
                                        name="ContactType"
                                        id="Contact Type"
                                        value={this.state.ContactType}
                                        onChange={this.handleChange}
                                        className="form-control py-1 Round25"
                                        required >
                                        <option value=""></option>
                                        <option value="Phone">Phone</option>
                                        <option value="Email">Email</option>
                                    </select>
                                    <label className={`${this.state.ContactType !== "" ? "Valued" : ""}`} htmlFor="Contact Type">Contact Type</label>
                                </div>
                                <div className="col-12 col-sm-6 mb-4 px-1 form-group">
                                    {this.state.ContactType === "Email" ? <>
                                        <input
                                            id="Email"
                                            type="email"
                                            name="Price"
                                            value={this.state.Email}
                                            onChange={this.handleChange}
                                            className="form-control Round25"
                                            placeholder="Email" 
                                            required
                                            />
                                        <label htmlFor="Email">Email</label></>

                                        : <PhoneInput
                                            value={this.state.phone}
                                            name="phone"
                                            containerClass="mb-0 mr-auto"
                                            inputClass="Round25"
                                            country={'kw'}
                                            // onChange={phone => this.setState({ phone })}
                                            onChange={this.updatePhone} isValid={(inputNumber, value, country) => {
                                                const newStr = inputNumber.replace(value.dialCode, '');
                                                if (value.dialCode == "") {
                                                    return 'Select Country Code';
                                                }
                                                else if (newStr == "" && this.state.count) {
                                                    return 'Phone number required'
                                                }
                                                else {
                                                    return true;
                                                }
                                            }}
                                        // onChange={updatePhone}
                                        />}
                                       
                                </div>

                                <div className="col-12 col-sm-6 mb-4 px-1 form-group">
                                    <input
                                        type="number"
                                        id="Price"
                                        name="Price"
                                        required
                                        value={this.state.Price}
                                        onChange={this.handleChange}
                                        className="ml-auto Round25 form-control"
                                        placeholder="Price" required/>
                                    <label htmlFor="Price">Price</label>
                                </div>
                                <div className="col-12 col-sm-6 px-0 mx-auto text-center">
                                    <ul className="col-12 mx-auto combineButton RadioToButton mx-auto d-flex px-0 mb-4"> {/* d-inline-flex */}
                                        <li className="w-50">
                                            <input
                                                type="radio"
                                                id="Featured"
                                                name="Featured"
                                                value="Yes"
                                                defaultChecked
                                                onClick={this.handleChange} />
                                            <label htmlFor="Featured" className="py-2 mb-0 Bold">Featured</label>
                                        </li>
                                        <li className="w-50">
                                            <input
                                                type="radio"
                                                id="Non-Featured"
                                                name="Featured"
                                                value="No"
                                                onClick={this.handleChange} />
                                            <label htmlFor="Non-Featured" className="py-2 mb-0 Bold">Non-Featured</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12  mx-auto px-0">
                                    <textarea
                                        id="Description"
                                        name="Message"
                                        placeholder="Your Message"
                                        value={this.state.Message}
                                        onChange={this.handleChange}
                                        rows="5"
                                        className="pl-3"
                                        required 
                                        ></textarea>
                                    {/* Sample line to check all feild
<p>I have {this.state.Type} {this.state.BookName} Book written by {this.state.AutherName} in {this.state.BookCondition} condition for {this.state.SchoolName} of {this.state.SubjectName}. its price is {this.state.Price}. Anyone want to buy contact me on {this.state.PhoneNumber} or my message is {this.state.Message}  </p>
*/}  
</div>   
</div> {/* Row Div */}

                                </div>
                                <div className="col-12 my-4 Uploading">

                                    {this.state.Type == "For Sale" ? <UploadComponent imageUpload={this.imageUpload} /> : null}
                                        {console.log(this.state.imageError)}
                                    {this.state.imageError ? <div style={{ color: "red", fontSize: "12px" }}>images are Required</div> : null}
                                </div>
                                <div class="col-12 col-md-3 form-group mx-auto mb-4">
                                    <button
                                        className="Round_edge w-100 button filled_btn py-2 text-center mx-2"
                                        type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PostServiceAd;