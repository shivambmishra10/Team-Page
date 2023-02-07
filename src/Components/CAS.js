import React from "react";

import "./CAS.css";

import ProfileCard from "./ProfileCard";

const CAS = (props) => {
  return (
    <>
      <nav className="navbar">The navbar from main page</nav>
      <div className="cas__container">
        <ProfileCard
          name="Ayushman Rajpurohit"
          position="Cultural Affairs Secretary(CAS)"
          imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>

      <div className="joints__container">
        <ProfileCard
          name="JCAS1"
          position="JCAS"
          imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <ProfileCard
          name="JCAS2"
          position="JCAS"
          imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <ProfileCard
          name="JCAS3"
          position="JCAS"
          imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </>
  );
};

export default CAS;
