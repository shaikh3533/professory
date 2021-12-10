import axios from "axios";
import { message } from "antd";

class PostData {
    constructor() {
        this.result = [];
    }
    BookAdd = (data, mthd) => {
      const res = async () => {
        const resp = await axios
          .post("user/BookStore/add", data)
          .catch(function (error) {
            console.log(error);
          });
        this.result = resp;
        console.log(resp);
        return resp;
      };
      return res();
    };
    ServiceAdd = (data, mthd) => {
      const res = async () => {
        const resp = await axios
          .post("user/ServiceProvider/add", data)
          .catch(function (error) {
            console.log(error);
          });
        this.result = resp;
        console.log(resp);
        return resp;
      };
      return res();
    };
    RattingAdd = (data, mthd) => {
      const res = async () => {
        const resp = await axios
          .post("professors/comments/addComment", {
            subjectID: JSON.stringify(data.subjectID),
            profID: data.profID,
            year: data.year,
            grade: data.name,
            rating: data.ratting,
            hardness: data.hardRating,
            exams: data.ExamForm,
            project: data.Project,
            homework: data.Homework,
            attendence: data.Attandance,
            curve: data.curve,
            again: data.again,
            style: data.TeachingStyle,
            comment: data.Description,
            tags: data.selectedTags,
          })
          .catch(function (error) {
            console.log(error);
          });
        this.result = resp;
        console.log(resp);
        return resp;
      };
      return res();
    };
    SubjectRattingAdd = (data, mthd) => {
      const res = async () => {
        const resp = await axios
          .post("subjects/addComment", {
            subjectID: data.subjectID,
            year: data.year,
            grade: data.name,
            rating: data.ratting,
            hardness: data.hardRating,
            exams: data.ExamForm,
            project: data.Project,
            homework: data.Homework,
            again: data.again,
            comment: data.Description,
            tags: data.selectedTags,
          })
          .catch(function (error) {
            console.log(error);
          });
        this.result = resp;
        console.log(resp);
        return resp;
      };
      return res();
    };
    LikeComment = (data, mthd) => {
        const res = async () => {
            const resp = await axios.post('professors/comments/like', {
                commentID:data
            })
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            console.log(resp)
            return resp;

        }
        return res();
    }

    UnLikeComment = (data, mthd) => {
        const res = async () => {
            const resp = await axios.post('professors/comments/dislike', {
                commentID:data
            })
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            console.log(resp)
            return resp;

        }
        return res();
    }
    
    BlockComment = (data, mthd) => {
        const res = async () => {
            const resp = await axios.post('professors/comments/report', {
                commentID:data
            })
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            console.log(resp)
            return resp;

        }
        return res();
    }

    AddProf = (data, mthd) => {
        const res = async () => {
            const resp = await axios.post('professors/submit', {
                majorID:JSON.stringify(data.majorID),
                arName:data.nameAr,
                name:data.profName
            })
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            console.log(resp)
            return resp;

        }
        return res();
    }
    

}
export default new PostData();
