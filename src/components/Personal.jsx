import "../styles/personal.css";

export default function Personal(props) {
    const data = props.data;

    return (
        <>
            <div className="data_personal">
                <div className="name">{data.personal.name} {data.personal.lastName}</div>
            </div>

            <div className="contacts">
                <div className="subtitle">Contacts</div>
                <div className="contacts__container">
                    <div className="number">{data.personal.number}</div>
                    <div className="email">{data.personal.email}</div>
                    <div className="tg">{data.personal.tg}</div>
                    <div className="github">{data.personal.github}</div>
                </div>
            </div>

            <div className="education">
                <div className="subtitle">Education</div>
            </div>

            <div className="experiences">
                <div className="subtitle">Experiences</div>

            </div>

            <div className="projects">
                <div className="subtitle">Projects</div>
            </div>
        </>
    )
}