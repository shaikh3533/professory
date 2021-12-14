import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import ServicesData from "./ServicesData"
import SecondNavbar from "../SecondNavbar"
import Searchbars from "../Shared/Searchbars"
import ServiceForSale from "./ServiceForSale"
import BookDescription from "../BookStore/BookDescription"
import Icon from "../../../Assets/img/icon.png"
import Profile from '../Shared/Profile';
import GetData from '../../Api/GetData';
import { Spin } from "antd";
import { useState } from 'react';
import ICON from "../../../Assets/img/icon.png";
const ServiceSale = () => {
    const {serviceID}= useParams();
    const { ServiceId, ServiceCategory } = useParams();
    const {serviceSaleProvider , setServiceSaleProvider} = useState([]);
    const [Loading, setLoading] = useState(true);
    const [noOfElement , setNoOfElement]=useState(3);
    const getData=async()=>{
        const data= await GetData.ServiceSaleProvider(serviceID);
        setServiceSaleProvider(data);
        setLoading(false);
    }
    useEffect(()=>{
        getData();
    },[])
    const showMoreItems =()=>{
        setNoOfElement((prevValue)=> prevValue+3);
    }
    return (
        <>
        {console.log("ServiceSaleData",serviceSaleProvider)}
            <SecondNavbar />
            <Searchbars ButtonValue="Post a Service" from="ServiceProvider" />
            <div className="container-fluid mt-5">
                <div className="MaxWidth">
                    <div className="row mt-5">
                        {Loading ? (<Spin />):(
                        <div className="row col-11 mx-auto">
                            <div className="col-12 col-lg-8">
                                <div className="btm_bordr">
                                    <h4 className="mb-3">For Sale</h4>
                                </div>
                                <div className="mt-3">
                                    {serviceSaleProvider && (
                                        <BookDescription
                                        Date={serviceSaleProvider.modifiedOn}
                                        Price={serviceSaleProvider.price}
                                        icon={ICON}
                                        Description={serviceSaleProvider.description}

                                        
                                        />
                                    )}
                                </div>
                                <div className="btm_bordr mt-4">
                                    <h4 className="mb-3">Related Post</h4>
                                </div>
                                <div className="row">
                                {serviceSaleProvider.related.slice(0,noOfElement).map((each)=>{
                                        return(
                                            <ServiceForSale
                                            Img={each.serviceimages}
                                            Date={each.modifiedOn}
                                            Name={each.serviceName}
                                            icon={ICON}
                                            />
                                        )
                                    })}
                                    <button className='bookloadmore mx-auto border-0 w-50' onClick={showMoreItems }>Load More</button>
                                </div>
                            </div>
                            <Profile />
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceSale;