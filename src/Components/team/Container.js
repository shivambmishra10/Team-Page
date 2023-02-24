import React, { useState, useEffect } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import "./Container.css";
import { motion } from "framer-motion";

import ProfileCard from "./ProfileCard.js";

const cardArray = [
  {
    id: 0,
    name: "xyz1",
    position: "xyz",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    classSpecial: " profile__card cardSpecial"
  },
  {
    id: 1,
    name: "xyz2",
    position: "xyz",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    classSpecial: " profile__card cardSpecial"
  },
  {
    id: 2,
    name: "xyz3",
    position: "xyz",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    classSpecial: " profile__card cardSpecial"
  },
  {
    id: 3,
    name: "xyz4",
    position: "xyz",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    classSpecial: "profile__card cardSpecial"
  }

]

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
  const [mainIndex, setmainIndex] = useState(1);
  return (
    <div id="main-teams">
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
          <h1 id="joints" className="heading">Core</h1>

          <div className="jcas">
            <button onClick={() => {
              if (mainIndex == 0) {
                return
              }
              setmainIndex(mainIndex - 1)
            }}>-</button>
            {cardArray.filter(ca => {
              if (ca.id == mainIndex || ca.id == mainIndex + 1 || ca.id == mainIndex + 2) {
                return ca
              }
            }).map(ca => (
              <motion.div
                key={ca.id}
                variants={{
                  hidden: { opacity: 0, },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: "spring",
                      stiffness: 20,
                    },
                  },
                }}
                initial="hidden"
                exit={{
                  // height: "0%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                whileInView="visible"
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}
            <button onClick={() => {
              if (mainIndex == 1) {
                return
              }
              setmainIndex(mainIndex + 1)
            }}>+</button>
            {/* <div>
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
            </div> */}
          </div>
        </div>
      </>
    </div>
  );
};

export default Container;
