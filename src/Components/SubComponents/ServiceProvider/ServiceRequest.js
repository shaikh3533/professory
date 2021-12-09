import React from 'react';
import { useParams } from "react-router-dom"
import ServicesData from "./ServicesData"
import SecondNavbar from "../SecondNavbar"
import Searchbars from "../Shared/Searchbars"
import ServiceForRequest from "./ServiceForRequest"
import BookDescription from "../BookStore/BookDescription"
import Icon from "../../../Assets/img/icon.png"
import Profile from '../Shared/Profile';

const ServiceRequest = () => {
    const { ServiceId, ServiceCategory } = useParams();
    const RenderSpecificService = ServicesData.map(Service => {
        if (Service.id == ServiceId) {
            return <BookDescription key={Service.id} Id={Service.id} Name={Service.Name} Price={Service.Price} Date={Service.Date} icon={Icon} Description={Service.DetailDescription} />
        }
        return (null);
    })
    const RenderRelatedServices = ServicesData.map(Service => {
        if (Service.Category == ServiceCategory) {
            return <ServiceForRequest key={Service.id} Id={Service.id} Name={Service.Name} Date={Service.Date} Category={Service.Category} Description={Service.ShortDescription} icon={Icon} />
        }
        return (null);
    })
    return (
        <>
            <SecondNavbar />
            <Searchbars ButtonValue="Post a Request" from="ServiceProvider" />
            <div className="container-fluid mt-5">
                <div className="row mt-5">
                    <div className="row col-11 mx-auto">
                        <div className="col-12 col-lg-8">
                            <div className="btm_bordr">
                                <h4 className="mb-3">For Requests</h4>
                            </div>
                            <div className="mt-3">
                                {RenderSpecificService}
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
        </>
    );
}

export default ServiceRequest;