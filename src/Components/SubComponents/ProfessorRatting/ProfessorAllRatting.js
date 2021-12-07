import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SecondNavbar from "../SecondNavbar";
import HelpfullRating from "../Shared/HelpfullRating";
import GetData from "../../Api/GetData";
import { Spin } from "antd";

export default function ProfessorRatting() {
  const [professorComments, setProfesserComments] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { ProfessorID } = useParams();
  const getData = async () => {
    const data = await GetData.ProfessorsComments(ProfessorID);
    setProfesserComments(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SecondNavbar />
      <div className="container-fluid">
        <div className="MaxWidth">
          <div className="row ">
            {Loading ? (
              <Spin />
            ) : (
              <div className="col-12 col-lg-8  mx-auto mt-3 pt-5 pt-lg-0 space-between">
                <h3 className="mb-0 text-center">Professor Comments</h3>
                {professorComments.map((each) => {
                  console.log('each',each)
                    return (
                      <HelpfullRating
                        commentID={each.commentID}
                        profID={each.profID}
                        Name={each.user.name}
                        yearTaken={each.year}
                        rating={each.rating}
                        Feedback={each.comment}
                        Subject={each.subject}
                        Grade={each.grade}
                        Like={each.like}
                        Dislike={each.dislike}
                        Block={each.spamReported}
                        Reply={each.numberOfReplies}
                        Replies={each.Reply}
                        Tags={[
                          { Attandace: each.attendence },
                          { Exams: each.exams },
                          { Project: each.projects },
                          { HomeWork: each.homework },
                          { "Teaching Style": each.style },
                          { Curve: each.curve },
                        ]}
                        LikedUser={each.userlikedcomments}
                        DisLikedUser={each.userdislikecomments}
                        BlockedUsers={each.usercommentspams}
                      />
                    );
                  })}
               
              </div>
             
            )}
          </div>
        </div>
      </div>
    </>
  );
}
