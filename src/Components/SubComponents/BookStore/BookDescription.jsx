import React from "react";
import moment from "moment";
import { Carousel } from "react-bootstrap";
const BookDescription = (props) => {
  return (
    <>
      <div className="bordr p-1">
        <Carousel>
          {props.Img.length === 0 ? (
            <p>No Pictures</p>
          ) : (
            props.Img.map((each) => {
              return (
                <Carousel.Item key={each.id}>
                  <img
                    className="testimonialImages d-block w-100"
                    src={each.image}
                    alt=""
                    loading="lazy"
                  />
                </Carousel.Item>
              );
            })
          )}
        </Carousel>
        <div className="row mt-3 mx-0 px-1 px-sm-3">
          <div className="col d-inline-flex px-0 px-md-2 widthMaxContent">
            <div>
              <h5>{props.Name}</h5>
              <p className="mb-1">
                {" "}
                {moment(props.Date).format("DD MMMM YYYY")}
              </p>
            </div>
            <div className="d-flex px-2">
              <img src={props.icon} alt="" className=" my-auto" />
            </div>
          </div>
          <div className="col d-flex px-0">
            <h3 className="my-auto ml-auto">{props.Price}</h3>
          </div>
        </div>
      </div>
      <div className="mt-3 mt-md-5 pl-2 pl-md-4">
        <h5 className="pl-1">Description</h5>
        <p className="wSpace pl-1">{props.Description}</p>
      </div>
    </>
  );
};

export default BookDescription;
