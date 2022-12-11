import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections ">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Tech (Computer Science and Engineering)
                </h3>
                <span className="qualification_subtitle">
                  Aligarh College of Engineering & Technology.{" "}
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Senior Secondary with Science
                </h3>
                <span className="qualification_subtitle">
                  Gagan Public School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React JS Developer</h3>
                <span className="qualification_subtitle">
                  Infiniticube Services Pvt Ltd.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 01/2022 - 06/2022,
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification_subtitle">
                  Brimo Software Solutions.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 06/2022 - 09/2022
                </div>
              </div>
            </div>{" "}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification_subtitle">Antino Labs.</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 09/2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Consultant Software Developer
                </h3>
                <span className="qualification_subtitle">
                  Nextdoor Kitchens Pvt Ltd.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 08/2022 - Present
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
