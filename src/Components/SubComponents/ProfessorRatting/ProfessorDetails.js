import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SecondNavbar from "../SecondNavbar";
import Profile from "../Shared/ProfilingSubjectProfessor";
import User from "../../../Assets/img/user.png";
import HelpfullRating from "../Shared/HelpfullRating";
import GetData from "../../Api/GetData";
import DubaiProfessorImg from "../../../Assets/img/Professor.png";
import { message, Spin } from "antd";
import { NavLink } from "react-router-dom";

const ProfessorDetails = () => {
  const { ProfessorId } = useParams();
  const [professoryData, setProfessoryData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await GetData.ProfessorMajorDetails(ProfessorId);

    setProfessoryData(data);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {console.log(professoryData)}
      <SecondNavbar />
      <div className="container-fluid">
        <div className="MaxWidth">
          <div className="row">
            {Loading ? (
              <Spin />
            ) : (
              <div className=" row col-11 col-md-10 mx-auto my-5 px-0 ">
                <div className="col-12 col-lg-4 px-0 mt-3">
                  {professoryData && (
                    <Profile
                      ProfessorID={professoryData.profID}
                      professorID={professoryData.profID}
                      majorid={professoryData.majorID}
                      Id={professoryData.majorID}
                      Img={DubaiProfessorImg}
                      Name={professoryData.profName}
                      Ratting={professoryData.Rating}
                      Grade="B+"
                      from="Professor"
                      Tags={professoryData.bestTags}
                    />
                    
                  )}
                </div>
                <div className="space-between col-12 col-lg-8 mt-3 pt-5 pt-lg-0">
                  <h3 className="mb-0 text-center">Most HelpFull Rating</h3>
                  {professoryData.helpFull &&
                    ((
                      <HelpfullRating
                        ProfessorID={professoryData.profID}
                        Name={professoryData.helpFull.user.name}
                        yearTaken={professoryData.helpFull.year}
                        rating={professoryData.helpFull.rating}
                        Feedback={professoryData.helpFull.comment}
                        Subject={professoryData.helpFull.subject}
                        Grade={professoryData.helpFull.grade}
                        Like={professoryData.helpFull.like}
                        Dislike={professoryData.helpFull.dislike}
                        Block={professoryData.helpFull.spamReported}
                        Reply={professoryData.helpFull.numberOfReplies}
                        Tags={[
                          { Attandace: professoryData.helpFull.attendence },
                          { Exams: professoryData.helpFull.exams },
                          { Project: professoryData.helpFull.projects },
                          { HomeWork: professoryData.helpFull.homework },
                          { "Teaching Style": professoryData.helpFull.style },
                          { Curve: professoryData.helpFull.curve },
                        ]}
                      />
                    ),
                    (
                      <div className="my-3 professor-ratingloadmore">
                        <NavLink
                          to={`/ProfessorRating/Comments/${professoryData.profID}`}
                        >
                          <button>Load More</button>
                        </NavLink>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessorDetails;
