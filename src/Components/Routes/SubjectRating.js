import React from "react"
import SecondNavbar from "../SubComponents/SecondNavbar"
import SelectionBar from "../SubComponents/Shared/SelectionBar"
import DisplayProfessorsSubject from "../SubComponents/Shared/DisplayProfessorsSubject"
import SubjectsData from "../SubComponents/SubjectRatting/SubjectsData"
import GetData from '../Api/GetData';

class SubjectRating extends React.Component {
    constructor() {
        super();
        this.state = {
            DataofSubjects: SubjectsData,
            visible: 8,
            univID: "Select University",
            collegeID: "Select College",
            majorID: "Select Major",
            Data: []
        }
        this.LoadMore = this.LoadMore.bind(this)
        this.ShowLess = this.ShowLess.bind(this)
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });

        if (name == "collegeID") {
            const res = GetData.MajorSubjects(value)
            res.then(value => {
            this.setState({ Data: value.data.data });
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
            return <DisplayProfessorsSubject Key={Subject.id} from="/SubjectRating/" Img={Subject.Img} Id={Subject.id} Name={Subject.Name} Rating={Subject.Rating} SchoolName={Subject.SchoolName} CollegeName={Subject.CollegeName} Major={Subject.Major} />
        })
        return (
            <>
                <SecondNavbar />
                <SelectionBar handleChange={this.handleChange} buttonValue="+Add" />
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
                </div>
            </>
        )
    }
}

export default SubjectRating