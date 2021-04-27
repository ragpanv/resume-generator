import React, { useState, useRef } from "react";
import style from "./app.module.scss";
import color from "./color-blocks.module.scss";
import html2canvas from "html2canvas";

import { Cover } from "./components/Cover/index";
import { ColorBlock } from "./components/ColorBlock/index";
import { GithubTag } from "./components/GithubTag/index";

function App() {
 
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [references, setReferences] = useState("");
  const [education, setEducation] = useState("");
  const [projects, setProjects] = useState("");
  const [highlights, setHighlights] = useState("");
  const [tagline, setTagline] = useState("");
  const [addr, setAddr] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bgColor, setBgColor] = useState("#161B22");
  const [borderColor, setBorderColor] = useState("#0F6D31");
  const [work, setWork] = useState("")

  const coverRef = useRef(null);
  const duplicateCoverRef = useRef(null);

  const downloadCover = () => {
    // making a clone of the cover component
    const scaledCover = coverRef.current.cloneNode(true);

    // scaling the component to get a high defination image
    scaledCover.style.transform = "scale(2)";

    // hack to hide the element.
    scaledCover.style.position = "fixed";
    scaledCover.style.top = "0";
    scaledCover.style.left = "0";
    scaledCover.style.zIndex = "-10";

    // appending the duplicate element
    duplicateCoverRef.current.appendChild(scaledCover);

    html2canvas(scaledCover, {
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
    })
      .then((canvas) => {
        var img = canvas.toDataURL();
        let a = document.createElement("a");
        a.href = img;
        console.log(a)
        a.download = `${name === "" ? "unknown" : name}'s-cover.png`;
        a.click();

        // removing the duplicate element
        duplicateCoverRef.current.removeChild(scaledCover);
      })
      .catch(console.log);
  };

  // function to handle the input elements
  function handleForm(event) {
    const { name, value } = event.target;
 
    if (name === "name") setName(value);
    else if (name === "about") setAbout(value);
    else if (name === "skills") setSkills(value);
    else if (name === "education") setEducation(value);
    else if (name === "references") setReferences(value);
    else if (name === "projects") setProjects(value);
    else if (name === "highlights") setHighlights(value);
    else if (name === "tagline") setTagline(value);
    else if (name === "addr") setAddr(value);
    else if (name === "email") setEmail(value);
    else if (name === "phone") setPhone(value);
    else if (name === "work") setWork(value);
  }

  // function to change colours
  function changeColor(bg, border) {
    setBgColor(bg);
    setBorderColor(border);
  }

  // Array of color schemes
  let colorArr = [
    ["#161B22", "#0F6D31"],
    ["#5039A3", "#FC9776"],
    ["#060607", "#3D5FF8"],
    ["#172346", "#4FD0ED"],
    ["#292C31", "#E94C2B"],
    ["rgb(7 72 89)", "rgb(43 65 233)"],
    ["rgb(246 18 128)", "rgb(108 0 245)"],
    ["rgb(246 129 18)", "rgb(0 245 123)"],
    ["rgb(116 60 7)", "#E94C2B"],
    ["rgb(66 113 191)", "rgb(163 200 21)"],

    ["rgb(22 27 34 / 50%)", "rgb(15 109 49 / 50%)"],
    ["rgb(80 57 163 / 50%)", "rgb(252, 151, 8/ 50%)"],
    ["rgb(48, 143, 160, 50%)", "rgb(82 82 196 / 50%)"],
    ["rgb(23 35 70 / 50%)", "rgb(79 208 237 / 50%)"],
    ["rgb(41 44 49 / 60%)", "rgb(233 76 43 / 65%)"],
    ["rgb(7 72 89 / 50%)", "rgb(43 65 233 / 50%)"],
    ["rgb(246 18 128 / 50%)", "rgb(108 0 245 / 50%)"],
    ["rgb(246 129 18 / 50%)", "rgb(0 245 123 / 50%)"],
    ["rgb(116 60 7/ 50%)", "rgb(233, 76, 43/ 50%)"],
    ["rgb(66 113 191/ 50%)", "rgb(163 200 21/ 50%)"],
  ];

  return (
    <>
      <GithubTag />

      <div ref={duplicateCoverRef}></div>

      <div className={style.coverWrapper}>
        <Cover
          name={name === "" ? "Your name here" : name}
          about={about === "" ? "About yourself" : about}
          education={education === "" ? "Education" : education}
          skills={skills === "" ? "Your skills" : skills}
          references={references === "" ? "References" : references}
          projects={projects === "" ? "Projects" : projects}
          highlights={
            highlights === "" ? "Your highlights and achievements" : highlights
          }
          tagline={tagline === "" ? "tagline" : tagline}
          addr={addr === "" ? "HOME" : addr}
          email={email === "" ? "EMAIL" : email}
          phone={phone === "" ? "PHONE" : phone}
          coverRef={coverRef}
          bgColor={bgColor}
          borderColor={borderColor}
          work={work === "" ? "Your Work Experience" : work}
        />
      </div>

      <footer className={style.footer}>
        <div className="grid-container">
          <div className={style.flex}>
            <p>
              Cover Image Generator{" "}
              <span style={{ fontSize: "12px", opacity: "0.7" }}>
                by{" "}
                <a
                  href="https://github.com/ragpanv"
                  target="_blank"
                  rel="noreferrer"
                >
                  ragpanv
                </a>
              </span>
            </p>
            <div className={style.button} onClick={downloadCover}>
              Download Cover
            </div>
          </div>
        </div>
      </footer>


      <div className={style.scrollContainer}>
        <div className="grid-container">

          <form className={style.form}>
            <div className="grid-x grid-margin-x">

              {[
                ["name", name],
                ["about", about],
                ["education", education],
                ["skills", skills],
                ["references", references],
                ["projects", projects],
                ["highlights", highlights],
                ["tagline", tagline],
                ["addr", addr],
                ["email", email],
                ["phone", phone],
                ["work", work],
              ].map((item, index) => {
                return (
                  <div className="cell  medium-6" key={index}>
                    <label htmlFor={item[0]} className={style.label}>
                      {item[0]}
                    </label>
                    <textarea
                      row={5}
                      column={10}
                      name={item[0]}
                      value={item[1]}
                      onChange={handleForm}
                      className={style.input}
                    />
                  </div>
                );
              })}
            </div>
          </form>

          <div className="grid-x grid-margin-x">
            <div className="cell large-6">
              <div className={color.container}>
                <div className={color.railContainer}>
                  <div className={color.rail}>
                    {colorArr.map((colors, index) => {
                      return (
                        <div
                          onClick={() => {
                            changeColor(colors[0], colors[1]);
                          }}
                          key={index}
                        >
                          <ColorBlock
                            color={{ bg: colors[0], border: colors[1] }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
