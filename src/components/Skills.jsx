import "../styles/skills.css";

export default function Skills(props) {
  const skills = props.data.skills;
  return (
    <div className="skills">
      <div className="subtitle"><b>Skills</b></div>
        <div className="programming__language"><b>Programming language</b> : {skills.language}</div>
        <div className="framework"><b>Framework</b> : {skills.framework}</div>
        <div className="library"><b>Library</b> : {skills.library}</div>
        <div className="tools"><b>Tools</b> : {skills.tools}</div>
    </div>
  )
}
