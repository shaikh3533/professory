import React from "react"
import SecondNavbar from "../SubComponents/SecondNavbar"
import SelectionBar from "../SubComponents/Shared/SelectionBar"
import DisplayProfessorsSubject from "../SubComponents/Shared/DisplayProfessorsSubject"
import SubjectsData from "../SubComponents/SubjectRatting/SubjectsData"
import GetData from '../Api/GetData';
import SubjectImg from "../../Assets/img/subject.png"

class SubjectRating extends React.Component {
    constructor() {
        super();
        this.state = {
            DataofSubjects: [],
            visible: 8,
            univID: "Select University",
            collegeID: "Select College",
            majorID: "Select Major",

        }
        this.LoadMore = this.LoadMore.bind(this)
        this.ShowLess = this.ShowLess.bind(this)
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
        if (name == "majorID") {
            const res = GetData.MajorSubjects(value)
            res.then(value => {
                this.setState({ DataofSubjects: value.data.data.docs });
            })
        }

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

    render() {

        const RenderingSubjects = this.state.DataofSubjects.slice(0, this.state.visible).map(Subject => {
            return <DisplayProfessorsSubject key={Subject.subjectID} from="/SubjectRating/" Img={SubjectImg} Id={Subject.subjectID} Name={Subject.subjectName} Rating={Subject.Rating} Major={Subject.majorID} />
        })
        return (
            <>
                <SecondNavbar />
                <SelectionBar handleChange={this.handleChange} buttonValue="+Add" />
                {this.state.majorID === "Select Major" ? <h1 className="d-flex justify-content-center align-items-center h-75">Please Select University,College & Major  First</h1> :
                    <div className="container-fluid">
                        <div className="MaxWidth">
                            <div className="row mx-0 mb-5">
                                <div className="row col-11 col-md-10 mx-auto">
                                    {RenderingSubjects}
                                </div>
                                {this.state.visible < this.state.DataofSubjects.length ?
                                    <div className="col-12 text-center mb-5" onClick={this.LoadMore}>
                                        <p className="Bold" style={{ cursor: "pointer" }}>load More</p>
                                    </div> :
                                    <div className="col-12 text-center mb-5" onClick={this.ShowLess}>
                                        <p className="Bold" style={{ cursor: "pointer" }}>Show Less</p>
                                    </div>}
                            </div>
                        </div>
                    </div>}
            </>
        )
    }
}

export default SubjectRating