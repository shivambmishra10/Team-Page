import React from "react";
import Drawer from "@mui/material/Drawer";
import "./Sidebar.css";

// const arrayList = [
//   {
//     id: 0,
//     name: "nam",
//   },
//   {
//     id: 1,
//     name: "nam2",
//   },
//   {
//     id: 2,
//     name: "nam3",
//   },
// ];

const Sidebar = () => {
  const [open, setopen] = React.useState(false);
  // const [slideIndex, setslideIndex] = React.useState(0);
  return (
    <>
      {/* <Drawer anchor={"right"} open={open} onClose={() => setopen(false)}>
        <span>Hellow</span>
      </Drawer> */}
      <div className="sidebar">
        {/* <button
          style={{
            zIndex: 100,
            backgroundColor: "white",
            width: "100px",
            height: "100px",
          }}
          onClick={() => setopen(true)}
        >
          Hi
        </button> */}
        {/* <div
          style={{
            backgroundColor: "white",
            color: "blue",
          }}
        >
          {arrayList
            ?.filter((al) => {
              if (al.id == slideIndex) {
                return al;
              }
            })
            ?.map((al, index) => (
              <>{al.id}</>
            ))}
        </div> */}

        <ul class="nav__links">
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
    </>
  );
};

export default Sidebar;
