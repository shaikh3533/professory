import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ServiceProvider from "../../../Assets/img/ServiceProvider.png"
import BookStore from "../../../Assets/img/BookStore.png"
import SubjectRating from "../../../Assets/img/SubjectRating.png"
import ProfessorRating from "../../../Assets/img/ProfessorRating.png"
import Classroom from "../../../Assets/img/Classroom.png"
import Backpack from "../../../Assets/img/Backpack.png"
import SliderItem from "./SliderItem"
import { HashLink } from "react-router-hash-link"


class Slider extends React.Component {
    render() {
        return (
            <OwlCarousel className="owl-theme" loop margin={10} nav responsive={{
                0: {
                    items: 1,
                    nav: true
                },
                500: {
                    items: 2,
                    nav: true
                },
                750: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true,
                }
            }
            }>  <HashLink to="/MyBackpack#anno" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                <SliderItem
                    img={ProfessorRating}
                    link="ProfessorRating"
                    href="#lession1"
                    title="Professor Rating"
                    text="What is Lorem Ipsum Lorem text of the printing and type has been the industry"
                    
                /></HashLink>
                <SliderItem
                    img={SubjectRating}
                    link="SubjectRating"
                    title="Subject Rating"
                    text="What is Lorem Ipsum Lorem text of the printing and type has been the industry"
                />
                <SliderItem
                    img={BookStore}
                    link="Bookstore"
                    title="Book Store"
                    text="What is Lorem Ipsum Lorem text of the printing and type has been the industry"
                /> 
                <SliderItem
                    img={ServiceProvider}
                    link="ServiceProvider"
                    title="Service Provider"
                    text="What is Lorem Ipsum Lorem text of the printing and type has been the industry"
                />
                <SliderItem
                    img={Backpack}
                    link="MyBackpack"
                    title="My Backpack"
                    text="What is Lorem Ipsum Lorem text of the printing and type has been the industry"
                />
                <SliderItem
                    img={Classroom}
                    link="Classroom"
                    title="Classroom"
                    text="What is Lorem Ipsum Lorem text of the printing and type has been the industry"
                />
            </OwlCarousel>
        );
    }
}

export default Slider