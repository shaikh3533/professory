import React from 'react';
import GetData from '../../Api/GetData';
import SearchableSelect from "../../atoms/SearchableSelect"

class SelectionBar extends React.Component {
    constructor() {
        super();
        this.state = {
            University: "",
            College: "",
            Major: "",
            Search: "",
            countryID: localStorage.getItem('countryID'),
            universities:[],
            univID:"Select University",
            univError:false,
            collegeID: "Select College",
            colleges: [],
            collgeError: false,
            majorID: "Select Major",
            majors: [],
            majorError: false
        }
        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        GetData.Universities(this.state.countryID, this.Set)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value

        }
        )
    }

    onChange = (e, name) => {
        this.setState({
            [name]: e
        });
        this.props.handleChange(name, e)

        if (name === "univID") {
            GetData.Colleges(e, this.Set);
            this.setState({
                collegeID: "Select College",
                majorID: "Select Major",
                univError: false
            });
        }
        else if (name === "collegeID") {
            GetData.Majors(e, this.Set);
            this.setState({
                collegeError: false,
                majorID: "Select Major"
            });
        }
        else {
            this.setState({ majorError: false });
        }
    }


    Set = (name, data) => {
        // console.log(name, data)
        this.setState({
            [name]: data,
            update: true
        });
    }


    render(props) {
        return (
            <>
                <div className="container-fluid mt-4">
                    <div className="MaxWidth">
                        <div className="row mx-0">
                            <div className="row col-11 col-md-10 mx-auto">
                                <div className="row col-12 col-lg-6 ml-auto form px-2">
                                    <div className="col-12 col-md-4 pl-1">
                                        <div className="form-group pb-3 mb-0 h-100 RoundFeild">

                                        <SearchableSelect name="univID"
                                                    value={this.state.univID}
                                                    function={this.onChange}
                                                    list={this.state.universities}
                                                    objName='univName'
                                                    label="University"
                                                    Error={this.state.univError}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 pl-1">
                                        <div className="form-group pb-3 mb-0 h-100 RoundFeild">
                                        <SearchableSelect name="collegeID"
                                                    value={this.state.collegeID}
                                                    function={this.onChange}
                                                    list={this.state.colleges}
                                                    objName='collegeName'
                                                    label="College"
                                                    Error={this.state.collegeError} />        
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 pl-1">
                                        <div className="form-group pb-3 mb-0 h-100 RoundFeild">
                                        <SearchableSelect name="majorID"
                                                    value={this.state.majorID}
                                                    function={this.onChange}
                                                    list={this.state.majors}
                                                    objName='majorName'
                                                    label="Major"
                                                    Error={this.state.majorError} />
                                        </div>
                                    </div>
                                </div>
                                {this.props.buttonValue === "+Add" ?
                                    <div className="row col-12 col-lg-5 mr-auto px-2 px-lg-0">
                                        <div className="col-12 col-md-8 feild px-1 pb-3 mt-0 mb-3">
                                            <input
                                                type="text"
                                                id="SearchField"
                                                name="Search"
                                                value={this.state.Search}
                                                onChange={this.handleChange}
                                                className="p-2 w-100 h-100 FS-14 form-control"
                                                placeholder="Search" />
                                        </div>
                                        <div className="col-12 col-md-4 px-1 pb-3 mt-0">
                                            <button
                                                className="Round_edge button filled_btn widthMaxContent px-3 py-2 mx-2"
                                                onClick={this.props.handleAdd}
                                                type="button">
                                                +Add
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <div className="row col-12 col-lg-6 mr-auto px-2 px-lg-0">
                                        <div className="col-12 col-md-5 feild pl-1 px-md-1 pb-3 mt-0">
                                            <input
                                                type="text"
                                                id="SearchField"
                                                name="Search"
                                                value={this.state.Search}
                                                onChange={this.handleChange}
                                                className="p-2 w-100 h-100 FS-14"
                                                placeholder="Search" />
                                        </div>
                                        <div className="row col-12 col-md-7 mx-0 px-0">
                                            <div className="col-12 col-sm-5 col-lg-6 px-1 pb-3 mt-0 mb-3">
                                                <button
                                                    className="Round_edge button filled_btn widthMaxContent px-3 py-2 mr-2"
                                                    type="button">
                                                    {this.props.buttonValue}
                                                </button>
                                            </div>
                                            <div className="col-12 col-sm-6 px-1 pb-3 mt-0">
                                                <button
                                                    className="Round_edge button widthMaxContent px-3 py-2 mx-lg-3"
                                                    type="button">
                                                    Join Private Classroom
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default SelectionBar