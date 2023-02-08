import React from "react";

import "./Container.css";

import ProfileCard from "./ProfileCard.js";

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
              classSpecial=" card cardSpecial"
            />
          </div>

          <div className="joints__parent" id="joints">
            <h1 className="heading">Joint Secretaries</h1>
            <div className="joints__container">
              <ProfileCard
                name="JCAS1"
                position="JCAS"
                imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                classSpecial=" card cardSmall"
              />
              <ProfileCard
                name="JCAS2"
                position="JCAS"
                imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                classSpecial=" card cardSmall"
              />
              <ProfileCard
                name="JCAS3"
                position="JCAS"
                imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                classSpecial=" card cardSmall"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Container;
