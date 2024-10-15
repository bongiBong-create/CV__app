import "./styles/app.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import About from "./components/About";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from "./components/Button";

function App() {

  const [data, setData] = useState({
    personal: {
      name: "Bongi",
      lastName: "So",
      number: "+7 900 430 22 18",
      email: "mairanss543@inbox.ru",
      tg: "tg.me/bongi",
      github: "github.com",
      vk: "https://vk.com/bongibingo",
    },

    skills: {
      language: "JavaScript",
      framework: "React",
      library: "jquery, bootstrap, animation.js",
      tools: "github, git"
    },
    about: {
      text: "I'am frontend developer",
    }
  }
  );


  const clear = () => {
    setData({
      personal: {
        name: "",
        lastName: "",
        number: "",
        email: "",
        tg: "",
        github: "",
        vk: "",
      },
      skills: {
        language: "",
        framework: "",
        library: "",
        tools: ""
      },
      about: {
        text: "",
      }
    })
  }

  const handlePdf = () => {
    const resume = document.getElementById("resume");
    html2canvas(resume).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0)
      pdf.save("download.pdf")
    })
  }


  return (
    <main className="main">
      <div>
        <Form data={data} setData={setData} />
        <div className="btns__box">
          <Button handle={handlePdf} text="Download pdf" />
          <Button handle={clear} text="Clear" />
        </div>
      </div>
      <section id="resume" className="resume">
        <Personal data={data} />
        <Skills data={data} />
        <About data={data} />
      </section>
    </main>
  )
}

export default App
