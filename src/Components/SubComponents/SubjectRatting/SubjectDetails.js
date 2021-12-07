import React from 'react';
import { useParams } from "react-router-dom"
import SubjectsData from "./SubjectsData"
import SecondNavbar from "../SecondNavbar"
import Profile from '../Shared/ProfilingSubjectProfessor';
import User from "../../../Assets/img/user.png";
import HelpfullRating from '../Shared/HelpfullRating';

const SubjectDetails = () => {
    const { SubjectId } = useParams();
    const RenderSpecificSubject = SubjectsData.map(Subject => {
        if (Subject.id == SubjectId) {
            return <Profile
                Key={Subject.id}
                Id={Subject.id}
                Img={Subject.Img}
                Name={Subject.Name}
                Ratting={Subject.Rating}
                Grade="B+"
                from="Subject"
                tag1="Get Ready to Read"
                tag2="Inspirational"
                tag3="Get Ready to Read" />
        }
        return (null);
    })



    return (
        <>
            <SecondNavbar />
            <div className="container-fluid">
                <div className="MaxWidth">
                    <div className="row">
                        <div className="row col-11 col-md-10 mx-auto my-5 px-0">
                            <div className="col-12 col-lg-4 px-0 mt-3">
                                {RenderSpecificSubject}
                            </div>
                            <div className="col-12 col-lg-8 mt-3 pt-5 pt-lg-0">
                                <h3 className="mb-0 text-center">Most HelpFull Rating</h3>

                                <HelpfullRating
                                    User={User} Name="Username" yearTaken="2019"
                                    Tags={["Project: Does not give", "Teaching Style: On Board", "Attendance: Takes", "Curve: Does not give", "Exam: From Book", "Homework: Does not Give"]}
                                    Feedback="Lorem Ipsum is simply dummy text of the printing and typesetting industr of the printing and typesetting industry."
                                    Subject="CHE205" Grade="B" Like={0} Dislike={0} Share={0} Block={0} />

                                <HelpfullRating
                                    User={User} Name="Username" yearTaken="2019"
                                    Tags={["Project: Does not give", "Teaching Style: On Board", "Attendance: Takes", "Curve: Does not give", "Exam: From Book", "Homework: Does not Give"]}
                                    Feedback="Lorem Ipsum is simply dummy text of the printing and typesetting industr of the printing and typesetting industry."
                                    Subject="CHE205" Grade="B" Like={0} Dislike={0} Share={0} Block={0} />

                                <HelpfullRating
                                    User={User} Name="Username" yearTaken="2019"
                                    Tags={["Project: Does not give", "Teaching Style: On Board", "Attendance: Takes", "Curve: Does not give", "Exam: From Book", "Homework: Does not Give"]}
                                    Feedback="Lorem Ipsum is simply dummy text of the printing and typesetting industr of the printing and typesetting industry."
                                    Subject="CHE205" Grade="B" Like={0} Dislike={0} Share={0} Block={0} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubjectDetails;