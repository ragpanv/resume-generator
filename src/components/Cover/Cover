import style from "./cover.module.scss";
import React from 'react';
import {Picture} from "../Picture/index";

import {FaHome,FaPhone} from "react-icons/fa"
import {RiMailLine} from 'react-icons/ri'

export function Cover({
  name,
  projects,
  education,
  highlights,
  tagline,
  addr,
  email,
  phone,
  coverRef,
  bgColor,
  borderColor,
  work,
  about,
  skills,
  references,
})

{
  return (
    <div className="container">
      <div
        className={style.cover}
        style={{ background: bgColor, borderBottomColor: borderColor }}
        ref={coverRef}
      >
        <div className={style.row}>
          <div className={style.column}>
            <div>
              <Picture />
            </div>

            <div className={style.name}>
              <span
                style={{
                  fontSize: "16px",
                  paddingLeft: "25px",
                  color: borderColor,
                }}
              >
                ABOUT ME
              </span>
              <br></br>
              {about}
            </div>
            <div className={style.name}>
              <span
                style={{
                  fontSize: "16px",
                  paddingLeft: "25px",
                  color: borderColor,
                }}
              >
                EDUCATION
              </span>
              <br></br>
              {education}
            </div>
            <div className={style.name}>
              <span
                style={{
                  fontSize: "16px",
                  paddingLeft: "25px",
                  color: borderColor,
                }}
              >
                SKILLS
              </span>
              <br></br>
              {skills}
            </div>
          </div>

          <div className={style.column}>
            <div className={style.pad}>
              <div className={style.ur_name}> {name}</div>
              <div className={style.tagline}>{tagline}</div>
              <div className={style.addr}>
                {" "}
                <FaHome /> {addr}
              </div>
              <div className={style.addr}>
                {" "}
                {""} <RiMailLine /> {email}
              </div>
              <div className={style.addr}>
                {" "}
                <FaPhone /> {phone}
              </div>
              <div className={style.info}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "25px",
                    color: borderColor,
                  }}
                >
                  WORK EXPERIENCES
                </span>
                <br></br>
                {work}
              </div>
              <div className={style.info}>
                <span
                  style={{
                    fontSize: "14px",
                    paddingLeft: "25px",
                    color: borderColor,
                  }}
                >
                  PROJECTS
                </span>
                <br></br>
                {projects}
              </div>{" "}
            </div>
            <div className={style.name}>
              <span
                style={{
                  fontSize: "16px",
                  paddingLeft: "25px",
                  color: borderColor,
                }}
              >
                REFERENCES
              </span>
              <br></br>
              {references}
            </div>
            <div className={style.highlights}>{highlights}</div>
          </div>
        </div>
      </div>
    </div>
  );
  }

