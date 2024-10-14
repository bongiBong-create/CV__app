import "../styles/personal.css";

export default function Personal(props) {
    const data = props.data;

    return (
        <>
            <div className="data_personal">
                <h1 className="name">{data.personal.name} {data.personal.lastName}</h1>
            </div>
            <div className="contacts">
                <div className="subtitle"><b>Contacts</b></div>
                <div className="contacts__container">
                    <div className="number">{data.personal.number}</div>
                    <div className="email">{data.personal.email}</div>
                    <div className="tg"> <a href={data.personal.tg}> {data.personal.tg}</a></div>
                    <div className="github"><a href={data.personal.github}> {data.personal.github}</a></div>
                    <div className="vk"><a href={data.personal.vk}> {data.personal.vk}</a> </div>
                </div>
            </div>
            {/* <div className="education">
                <div className="subtitle"><b>Education</b></div>
            </div>

            <div className="experiences">
                <div className="subtitle"><b>Experiences</b></div>

            </div>

            <div className="projects">
                <div className="subtitle"><b>Projects</b></div>
            </div> */}
        </>
    )
}