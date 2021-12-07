import React from "react"
import SecondNavbar from "../SubComponents/SecondNavbar"
import SelectionBar from "../SubComponents/Shared/SelectionBar"
import DisplayProfessorsSubject from "../SubComponents/Shared/DisplayProfessorsSubject"
import GetData from '../Api/GetData';
import kuwaitProfessorImg from "../../Assets/img/KuwaitProfessor.png"



class ProfessorRating extends React.Component {
    constructor() {
        super();
        this.state = {
            DataofProfessors: [],
            visible: 8,
            univID: "Select University",
            collegeID: "Select College",
            majorID: "Select Major"
        }
        this.LoadMore = this.LoadMore.bind(this)
        this.ShowLess = this.ShowLess.bind(this)
    }



    handleChange = (name, value) => {
        this.setState({ [name]: value });
        if (name == "collegeID") {
            const res = GetData.CollegeProfessors(value)
            res.then(value => {
                
            this.setState({ DataofProfessors: value.data.data.docs,
            university: value.data.data.universityName,college: value.data.data.collegeName });
            })
        }

        if (name === "majorID") {
            const res = GetData.MajorProfessors(value)
            res.then(value => {
                console.log({value})
            this.setState({ DataofProfessors: value.data.data.docs});    
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

        const RenderingProfessors = this.state.DataofProfessors.slice(0, this.state.visible).map(Professor => {
            
            return <DisplayProfessorsSubject Key={Professor.profID} from="/ProfessorRating/" Img={kuwaitProfessorImg} Id={Professor.profID} Name={Professor.profName} Rating={Professor.Rating} SchoolName={this.state.university} CollegeName={this.state.college} Major={Professor.majort.majorName} />
            
        })

        
        return (
            <>
            
                <SecondNavbar />
                <SelectionBar handleChange={this.handleChange} buttonValue="+Add" />
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
                </div> }
            </>
        )
    }
}

export default ProfessorRating