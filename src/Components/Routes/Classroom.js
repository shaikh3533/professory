import React from 'react';
import SecondNavbar from '../SubComponents/SecondNavbar';
import SelectionBar from "../SubComponents/Shared/SelectionBar"
import ClassroomData from "../SubComponents/Classroom/ClassroomData"
import ClassroomDisplay from "../SubComponents/Classroom/ClassroomDisplay"

class Classroom extends React.Component {
  constructor() {
    super();
    this.state = {
      DataofClassrooms: ClassroomData,
      visible: 9
    }
    this.LoadMore = this.LoadMore.bind(this)
    this.ShowLess = this.ShowLess.bind(this)
  }

  LoadMore() {
    this.setState((old) => {
      return { visible: old.visible + 3 }
    })
  }
  ShowLess() {
    this.setState(() => {
      return { visible: 9 }
    })
  }

  render() {
    const RenderingClassrooms = this.state.DataofClassrooms.slice(0, this.state.visible).map(Classroom => {
      return (
        <div className="col-12 col-sm-6 col-lg-4 px-2">
          <ClassroomDisplay
            Key={Classroom.id}
            id={Classroom.id}
            ClassroomName={Classroom.ClassroomName}
            Code={Classroom.Code}
            UniversityName={Classroom.UniversityName}
            AdminName={Classroom.AdminName} />
        </div>)
    })
    return (
      <>
        <SecondNavbar />
        <SelectionBar buttonValue="+Add Classroom" />
        <div className="container-fluid">
          <div className="MaxWidth">
            <div className="row">
              <div className="row col-11 col-md-10 mx-auto px-0">
                <div className="col-12 col-md-7 col-lg-9 px-0 order-2 order-md-1">
                  <div className="row">
                    {RenderingClassrooms}
                    {this.state.visible < this.state.DataofClassrooms.length ?
                      <div className="col-12 text-center mb-5" onClick={this.LoadMore}>
                        <p className="Bold" style={{ cursor: "pointer" }}>load More</p>
                      </div> :
                      <div className="col-12 text-center mb-5" onClick={this.ShowLess}>
                        <p className="Bold" style={{ cursor: "pointer" }}>Show Less</p>
                      </div>}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-3 pr-0 mx-auto order-1 order-md-2 mb-4">
                  <div class="card">
                    <div class="mb-1 px-4 py-3" style={{ backgroundColor: "rgb(122, 172, 179)" }}>
                      <h5 className="mb-0" style={{ color: "white" }}>My Classroom</h5>
                    </div>
                    <div class="card-body p-3">
                      <ClassroomDisplay
                        ClassroomName="Classroom Name"
                        Code="Public"
                        UniversityName="American University of Middle East"
                        AdminName="Admin Name"
                      />
                      <ClassroomDisplay
                        ClassroomName="Classroom Name"
                        Code="c4sd5"
                        UniversityName="American University of Middle East"
                        AdminName="Admin Name"
                      />
                      <ClassroomDisplay
                        ClassroomName="Classroom Name"
                        Code="Public"
                        UniversityName="American University of Middle East"
                        AdminName="Admin Name"
                      />
                    </div>
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

export default Classroom;