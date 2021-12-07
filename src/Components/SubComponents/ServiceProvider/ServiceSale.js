import React from 'react';
import { useParams } from "react-router-dom"
import ServicesData from "./ServicesData"
import SecondNavbar from "../SecondNavbar"
import Searchbars from "../Shared/Searchbars"
import ServiceForSale from "./ServiceForSale"
import BookDescription from "../BookStore/BookDescription"
import Icon from "../../../Assets/img/icon.png"
import Profile from '../Shared/Profile';

const ServiceSale = () => {
    const { ServiceId, ServiceCategory } = useParams();
    const RenderSpecificBook = ServicesData.map(Service => {
        if (Service.id == ServiceId) {
            return <BookDescription Key={Service.id} Id={Service.id} Img={Service.img} Name={Service.Name} Price={Service.Price} Date={Service.Date} icon={Icon} Description={Service.DetailDescription} />
        }
        return (null);
    })
    const RenderRelatedServices = ServicesData.map(Service => {
        if (Service.Category == ServiceCategory) {
            if (Service.id != ServiceId) { return <ServiceForSale Key={Service.id} Img={Service.img} Id={Service.id} Name={Service.Name} Date={Service.Date} Price={Service.Price} icon={Icon} Description={Service.ShortDescription} Category={Service.Category} /> }
            return (null);
        }
        return (null);
    })
    return (
        <>
            <SecondNavbar />
            <Searchbars ButtonValue="Post a Service" from="ServiceProvider" />
            <div className="container-fluid mt-5">
                <div className="MaxWidth">
                    <div className="row mt-5">
                        <div className="row col-11 mx-auto">
                            <div className="col-12 col-lg-8">
                                <div className="btm_bordr">
                                    <h4 className="mb-3">For Sale</h4>
                                </div>
                                <div className="mt-3">
                                    {RenderSpecificBook}
                                </div>
                                <div className="btm_bordr mt-4">
                                    <h4 className="mb-3">Related Post</h4>
                                </div>
                                <div className="row">
                                    {RenderRelatedServices}
                                </div>
                            </div>
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceSale;