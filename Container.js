import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Container.css";

import ProfileCard from "./ProfileCard.js";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Container = () => {
  return (
    <div>
      <>
        <div className="parent__container">
          <div className="cas__container">
            <ProfileCard
              name="Ayushman Rajpurohit"
              position="Cultural Affairs Secretary(CAS)"
              imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              classSpecial="profile__card cardSpecial"
            />
          </div>
          <Carousel
            responsive={responsive}
            infinite={false}
            removeArrowOnDeviceType="all"
          >
            <div>
              <ProfileCard
                name="Aayushman Tiwari"
                position="Joint Cultural Affairs Secretary"
                imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                classSpecial=" profile__card cardSmall"
              />
            </div>
            <div>
              <ProfileCard
                name="Prashant Paliwal"
                position="Joint Cultural Affairs Secretary"
                imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                classSpecial="  profile__card cardSmall"
              />
            </div>
            <div>
              <ProfileCard
                name="Kuldeep"
                position="Joint Cultural Affairs Secretary"
                imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                classSpecial=" profile__card cardSmall"
              />
            </div>
            <div>
              <ProfileCard
                name="Kanha Bhawani"
                position="Joint Cultural Affairs Secretary"
                imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                classSpecial="  profile__card cardSmall"
              />
            </div>
          </Carousel>
          ;{/* <div className="joints__parent" id="joints"> */}
          <h1 className="heading">Core</h1>
          {/* 
            <div className="joints__container"></div>
            <div className="joints__container"></div> */}
        </div>
        {/* </div> */}
      </>
    </div>
  );
};

export default Container;
