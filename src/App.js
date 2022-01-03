import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Loader from "./Loader";
import Home from './Components/Routes/Home';
import About from "./Components/Routes/About"
import Feature from "./Components/Routes/Feature"
import Contact from "./Components/Routes/Contact"
import Bookstore from "./Components/Routes/Bookstore"
import ServiceProvider from "./Components/Routes/ServiceProvider"
import ProfessorRating from "./Components/Routes/ProfessorRating"
import ProfessorDetails from "./Components/SubComponents/ProfessorRatting/ProfessorDetails";
import SubjectRating from "./Components/Routes/SubjectRating"
import SubjectDetails from "./Components/SubComponents/SubjectRatting/SubjectDetails";
import Classroom from "./Components/Routes/Classroom"
import ClassroomDetail from "./Components/SubComponents/Classroom/ClassroomDetail";
import JoinClass from "./Components/SubComponents/Classroom/JoinClass"
import MyBackpack from "./Components/Routes/MyBackpack"
import Navbar from "./Components/SubComponents/Navbar"
import SiteFooter from "./Components/SubComponents/Footer";
import SignUp from "./Components/Routes/SignUp";
import BookSale from "./Components/SubComponents/BookStore/BookSale";
import BookRequest from "./Components/SubComponents/BookStore/BookRequest";
import ServiceSale from "./Components/SubComponents/ServiceProvider/ServiceSale";
import ServiceRequest from "./Components/SubComponents/ServiceProvider/ServiceRequest";
import PostBookAd from "./Components/SubComponents/BookStore/PostBookAd";
import PostServiceAd from "./Components/SubComponents/ServiceProvider/PostServiceAd";
import ProfessorRateMe from "./Components/SubComponents/ProfessorRatting/ProfessorRateMe";
import SubjectRateMe from "./Components/SubComponents/SubjectRatting/SubjectRateMe";
import ClassSession from "./Components/SubComponents/Classroom/ClassSession";
import Layout from "antd/lib/layout/layout";
import Auth from "./Components/Auth/Auth";
import { ProtectedRoute } from "./Components/ProtectedRoutes";
import ProfessorAllRatting from "./Components/SubComponents/ProfessorRatting/ProfessorAllRatting";
import SubjectAllRatting from "./Components/SubComponents/SubjectRatting/SubjectAllRatting";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: Auth.isLoggedIn(),
      loading: true
    }

  }

  LoginStatusChange =()=>{
    this.setState({
      isLoggedIn:Auth.isLoggedIn()
    })
  }


  componentDidMount() {
      this.setState({
        loading: false
      })
  }




  render() {
    // const { Header, Footer, Sider, Content } = Layout;
    return (
      <>
        {
          this.state.loading ?
            <Loader />
            :
            <><Navbar isLoggedIn={this.state.isLoggedIn} LoginStatusChange={this.LoginStatusChange}/>
              <Switch>
                <Route exact path="/" render={props => (<Home onChange={this.LoginStatusChange} />)} />
                <Route exact path="/About" component={About} />
                <Route exact path="/#feature" component={Feature} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/SignUp" component={SignUp} />
                <ProtectedRoute exact path="/Bookstore" component={Bookstore} />
                <ProtectedRoute exact path="/Bookstore/Sale/:BookCategory/:BookId" component={BookSale} />
                <ProtectedRoute exact path="/Bookstore/Request/:BookCategory/:BookId" component={BookRequest} />
                <ProtectedRoute exact path="/Bookstore/Post" component={PostBookAd} />
                <ProtectedRoute exact path="/ServiceProvider" component={ServiceProvider} />
                <ProtectedRoute exact path="/ServiceProvider/Sale/:ServiceCategory/:ServiceId" component={ServiceSale} />
                <ProtectedRoute exact path="/ServiceProvider/Request/:ServiceCategory/:ServiceId" component={ServiceRequest} />
                <ProtectedRoute exact path="/ServiceProvider/Post" component={PostServiceAd} />
                <ProtectedRoute exact path="/ProfessorRating" component={ProfessorRating} />
                <ProtectedRoute exact path="/ProfessorRating/RateMe/:majorid/:professorID" component={ProfessorRateMe} />
                <ProtectedRoute exact path="/ProfessorRating/:ProfessorId" component={ProfessorDetails} />
                <ProtectedRoute exact path="/ProfessorRating/Comments/:ProfessorID" component={ProfessorAllRatting} />
                <ProtectedRoute exact path="/SubjectRating/Comments/:SubjectID" component={SubjectAllRatting} />
                <ProtectedRoute exact path="/SubjectRating" component={SubjectRating} />
                <ProtectedRoute exact path="/SubjectRating/RateMe/:majorID/:subjectID" component={SubjectRateMe} />
                <ProtectedRoute exact path="/SubjectRating/:SubjectId" component={SubjectDetails} />
                <ProtectedRoute exact path="/Classroom" component={Classroom} />
                <ProtectedRoute exact path="/Classroom/Join" component={JoinClass} />
                <ProtectedRoute exact path="/Classroom/LiveSession" component={ClassSession} />
                <ProtectedRoute exact path="/Classroom/:id" component={ClassroomDetail} />
                <ProtectedRoute exact path="/MyBackpack" component={MyBackpack} />
                <Redirect to="/" />
              </Switch>
              <SiteFooter />
            </>
        }
      </>
    );
  }
}

export default App;
