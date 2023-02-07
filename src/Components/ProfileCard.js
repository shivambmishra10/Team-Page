import React from "react";

import "./ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div class="card">
      <div class="card-info">
        <div class="card-avatar">
          <img className="card-avatar" src={props.imgSrc} alt="CAS image" />
        </div>
        <div class="card-title">{props.name}</div>
        <div class="card-subtitle">
          <h3>{props.position}</h3>
        </div>
        <ul class="card-social">
          <li class="card-social__item">
            <a href="#" className="card-social__link">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li class="card-social__item">
            <a href="#" className="card-social__link">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li class="card-social__item">
            <a href="#" className="card-social__link">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
