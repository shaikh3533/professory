import axios from "axios";
import { message } from "antd";

class GetData {
    constructor() {
        this.result = [];
        this.collegeProfessorResult = [];
    }

    Countries(mthd) {
        axios.get("countries/get").then((res) => {
            // console.log(res)
            if (res.data.success) {
                mthd("countries", res.data.data.rows);
                // this.setState({
                //     countries: res.data.data.rows,
                //     update: true
                // });
            } else {
                message.error(res.data.message);
            }
        });
    }
    Grades(mthd) {
        axios.get("subjects/grades?lang=eng").then((res) => {
            // console.log(res)
            if (res.data.success) {
                mthd("grades", res.data.data.rows);
            } else {
                message.error(res.data.message);
            }
        });
    }
    SubjectTags(mthd) {
        axios.get("subjects/tags").then((res) => {
            if (res.data.success) {
                mthd("tags", res.data.data.rows);
            } else {
                message.error(res.data.message);
            }
        });
    }
    async ProfessorMajorDetails(ProfessorId) {
        const response = await axios.get(`professors/detail?id=${ProfessorId}`);
        if (response.data.success) return response.data.data;
        else message.error(response.data.message);
    }
    async ProfessorsComments(professorID) {
        const response = await axios.get(
            `professors/comments/get?id=${professorID}`
        );

        if (response.data.success) return response.data.data.docs;
        else message.error(response.data.message);
    }

    Universities(countryID, mthd) {
        axios.get(`univeristeries/get?id=${countryID}`).then((res) => {
            // console.log(res)
            if (res.data.success) {
                mthd("universities", res.data.data.docs);
            } else {
                message.error(res.data.message);
            }
        });
    }

    Colleges(univID, mthd) {
        axios.get(`colleges/get?id=${univID}`).then((res) => {
            // console.log(res)
            if (res.data.success) {
                mthd("colleges", res.data.data.docs);
            } else {
                message.error(res.data.message);
            }
        });
    }

    Majors(collegeID, mthd) {
        axios.get(`majors/get?id=${collegeID}`).then((res) => {
            if (res.data.success) {
                mthd("majors", res.data.data.docs);
            } else {
                message.error(res.data.message);
            }
        });
    }
    async BookAllDetail(BookID) {
        const response = await axios.get(`user/BookStore/detail?bookID=${BookID}`);
        if (response.data.success) return response.data.data;
        else message.error(response.data.message);
    }
    async ServiceSaleProvider(ServiceID) {
        const response = await axios.get(`user/ServiceProvider/detail?serviceID=${ServiceID}`);
        if (response.data.success) return response.data.data;
        else message.error(response.data.message);
    }

    Subjects(majorID, mthd) {
        axios.get(`subjects/get?id=${majorID}`).then((res) => {
            // console.log(res)
            if (res.data.success) {
                mthd("subjects", res.data.data.docs);
            } else {
                message.error(res.data.message);
            }
        });
    }
    YearTaken(mthd) {
        axios.get("subjects/year/list").then((res) => {
            if (res.data.success) {
                mthd("years", res.data.data.rows);
            } else {
                message.error(res.data.message);
            }
        });
    }
    HardLevels(mthd) {
        axios.get("subjects/hardLevel").then((res) => {
            if (res.data.success) {
                mthd("hardlevels", res.data.data.rows);
            } else {
                message.error(res.data.message);
            }
        });
    }
    Rating(mthd) {
        axios.get("subjects/rating").then((res) => {
            if (res.data.success) {
                mthd("rating", res.data.data.rows);
            } else {
                message.error(res.data.message);
            }
        });
    }
    ExamForm(mthd) {
        axios.get("subjects/examFrom").then((res) => {
            if (res.data.success) {
                mthd("examform", res.data.data.rows);
            } else {
                message.error(res.data.message);
            }
        });
    }
    TeachingStyle(mthd) {
        axios.get("professors/teaching/style").then((res) => {
            if (res.data.success) {
                mthd("teachingstyle", res.data.data.rows);
            } else {
                message.error(res.data.message);
            }
        });
    }

    BookListing = (data) => {
        const res = async () => {
            const resp = await axios
                .get("/user/BookStore/bookStore?bookType=Used Books")
                // .then((response) => {
                //     if (response) {
                //         this.result = response;
                //     }
                // })
                //     console.log(this.result)
                .catch(function (error) {
                    console.log(error);
                });

            this.result = resp;
            return resp;
        };
        return res();
    };


    CollegeProfessors = (data) => {
        const res = async () => {
            const resp = await axios
                .get(`/professors/getProfessorByCollege?id=${data}`)
                .catch(function (error) {
                    console.log(error);
                })
            return resp;
        };
        return res();
    };

    MajorProfessors = (data) => {
        const res = async () => {
            const resp = await axios.get(`/professors/get?id=${data}`)
                .catch(function (error) {
                    console.log(error);
                });

            return resp;
        }
        return res();
    }

    MajorSubjects = (data) => {
        const res = async () => {
            const resp = await axios
                .get(`subjects/get?id=${data}`)
                .catch(function (error) {
                    console.log(error);
                });

            return resp;
        };
        return res();
    };

    async SubjectMajorDetails(SubjectId) {
        const response = await axios.get(`subjects/detail?id=${SubjectId}`);
        if (response.data.success) return response.data.data;
        else message.error(response.data.message);
    }


    async SubjectAllComments(SubjectId) {
        const response = await axios.get(`subjects/comments/get?id=${SubjectId}`);
        console.log(response)
        if (response.data.success) return response.data.data.docs;
        else message.error(response.data.message);
    }
}


export default new GetData()