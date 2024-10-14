import "./styles/app.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Personal from "./components/Personal";
import Skills from "./components/Skills";

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
    }

    
  }
  );

  return (
    <main className="main">
      <>
        <Form data={data} setData={setData}/>
      </>
      <section className="resume">
        <Personal data={data} />
        <Skills data={data} />
      </section>
    </main>
  )
}

export default App
