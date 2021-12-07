import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const BookForSale = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 p-3">
      <NavLink
        className="nav-link m-0 p-0"
        to={"/Bookstore/Sale/" + props.Category + "/" + props.Id}
      >
        <div className="bordr p-1">
          {/* {props.Img.map(bookImg => {

                           <img className="d-bock mx-auto" src={bookImg.image} width="100%" height="100%" alt="" />
                           {console.log(bookImg.image)}
                    })} */}

          <img
            className="d-bock mx-auto"
            src={props.Img[0].image}
            width="100%"
            height="100%"
            alt=""
          />
          <div className="row m-0 mt-1">
            <div className="col-4 pl-1 pr-1">
              <p className="text-left mb-1 FS_18 Bold Black">${props.Price}</p>
            </div>
            <div className="col-8 pr-1 pl-1">
              <p className="text-right my-1 FS_12 Black">
                {moment(props.Date).format("DD MMMM YYYY")}
              </p>
            </div>
            <div className="col-10 pl-1 pr-1">
              <p className="text-left mb-1 Black">{props.Name}</p>
            </div>
            <div className="col-2 pr-1 pl-1">
              <img className="d-block ml-auto" src={props.icon} alt="" />
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BookForSale;
