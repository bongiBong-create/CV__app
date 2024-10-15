export default function About(props) {
  return (
    <div className="about">
        <div className="subtitle"><b>About me</b></div>
      <p>{props.data.about.text}</p>
    </div>
  )
}
