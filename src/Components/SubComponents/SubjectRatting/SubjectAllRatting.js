import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SecondNavbar from "../SecondNavbar";
import HelpfullRating from "../Shared/HelpfullRating";
import GetData from "../../Api/GetData";
import { Spin } from "antd";

export default function SubjectAllRatting() {
  const { SubjectID } = useParams();
  const [subjectComments, setSubjectComments] = useState([]);
  const [Loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await GetData.SubjectAllComments(SubjectID);
    setSubjectComments(data);
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
                <h3 className="mb-0 text-center">Subject Comments</h3>
                {subjectComments !== null ? (
                  subjectComments.map((each) => {
                    console.log("each", each);
                    return (
                      <HelpfullRating
                        commentID={each.subjectCommentID}
                        profID={each.user.userID}
                        Name={each.user.name}
                        yearTaken={each.year}
                        rating={each.rating}
                        Feedback={each.comment}
                        Subject={each.subjectt.subjectCode}
                        Grade={each.grade}
                        Like={each.like}
                        Dislike={each.dislike}
                        Block={each.spamReported}
                        Reply={each.numberOfReplies}
                        Replies={[]}
                        Tags={[
                          { Exams: each.exams },
                          { Project: each.projects },
                          { HomeWork: each.homework },
                          { Again: each.again },
                        ]}
                        LikedUser={[]}
                        DisLikedUser={[]}
                        BlockedUsers={[]}
                      />
                    );
                  })
                ) : (
                  <p>Data not found yet</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
