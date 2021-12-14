import React from "react";
import SecondNavbar from "../SubComponents/SecondNavbar";
import Searchbars from "../SubComponents/Shared/Searchbars";
import Icon from "../../Assets/img/icon.png";
import ServiceForSale from "../SubComponents/ServiceProvider/ServiceForSale";
import ServiceForRequest from "../SubComponents/ServiceProvider/ServiceForRequest";
import FilterBar from "../SubComponents/Shared/FilterBar";
import ServicesData from "../SubComponents/ServiceProvider/ServicesData";

const ServiceProvider = () => {
  const RenderingServicesSale = ServicesData.map((Service) => {
    return (
      <ServiceForSale
        key={Service.id}
        Img={Service.img}
        Id={Service.id}
        Name={Service.Name}
        Date={Service.Date}
        Price={Service.Price}
        icon={Icon}
        Category={Service.Category}
        Description={Service.ShortDescription}
      />
    );
  });
  const RenderingRequestedServices = ServicesData.map((Service) => {
    return (
      <ServiceForRequest
        key={Service.id}
        Id={Service.id}
        Name={Service.Name}
        Date={Service.Date}
        Category={Service.Category}
        Description={Service.ShortDescription}
        icon={Icon}
      />
    );
  });
  return (
    <>
      <SecondNavbar />
      <Searchbars ButtonValue="Post/Request a Service" from="ServiceProvider" />
      <div className="container-fluid mt-5">
        <div className="MaxWidth">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-12 col-md-8 pr-0">
                  <div className="row m-0 p-0">
                    <div className="col-12">
                      <div className="btm_bordr">
                        <h4 className="mb-2">For Sale</h4>
                      </div>
                      <div className="row">{RenderingServicesSale}</div>
                    </div>
                    <div className="col-12 mt-5">
                      <div className="btm_bordr">
                        <h4>Requests</h4>
                      </div>
                      <div className="row">{RenderingRequestedServices}</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 mt-3">
                  <FilterBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
