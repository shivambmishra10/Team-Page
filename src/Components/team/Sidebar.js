import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import "./Sidebar.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from "react-router-dom";

const arrayList = [
  {
    id: 0,
    name: "nam",
  },
  {
    id: 1,
    name: "nam2",
  },
  {
    id: 2,
    name: "nam3",
  },
];

const Sidebar = () => {
  const [open, setopen] = React.useState(false);
  const [slideIndex, setslideIndex] = React.useState(0);
  const [activeUrl, setactiveUrl] = React.useState(false)
  

  return (
    <>

      <Drawer anchor={"right"} open={open} onClose={() => setopen(false)}>
        <div className="Side-container">
          <ul onClick={() => setopen(false)} class="nav__links">
            <li class="nav__item">
              <a class="nav__link" href="#joints">
                CORE
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--2">
                INFRA AND IN HOUSE MANAGERIAL
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                WEB DEVELOPMENT
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                PUBLICITY
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                SPONSORSHIP
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                PUBLIC RELATION
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                HOSPITALITY
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                DISCIPLINE
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                ADMIN AND DOCUMNETATION
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                DESIGN
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                THINK TANK
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                MEDIA CELL
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                CINEMATOGRAPHY
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
     
      <div className="sidebar">
        <KeyboardDoubleArrowLeftIcon sx={{
          fontSize: "100px",
          position: "absolute",
          insetInlineEnd: 0,
          color: "white"
        }} onClick={() => setopen(true)} />

        <div
          style={{
            backgroundColor: "white"
          }}
        >
          {/* {arrayList
            ?.filter((al) => {
              if (al.id == slideIndex) {
                return al;
              }
            })
            ?.map((al, index) => (
              <>{al.id}</>
            ))} */}
        </div>
      </div>
    </>
  );
};


export default Sidebar;
