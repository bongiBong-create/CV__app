import "../styles/form.css";

export default function Form({ data, setData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      personal: {
        ...data.personal,
        [name]: value,
      },
      skills: {
        ...data.skills,
        [name]: value,
      },
      about: {
        ...data.about,
        [name]: value,
      }
    })
    )
  }

  return (
    <section className="Form">
      <form>
        <div className="form__item">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="your name"
            value={data.personal.name}
          />
        </div>
        <div className="form__item">
          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="your last name"
            value={data.personal.lastName}
          />
        </div>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="example@gmail.com"
            value={data.personal.email}
          />
        </div>
        <div className="form__item">
          <label htmlFor="number">Number</label>
          <input
            onChange={handleChange}
            name="number"
            type="text"
            placeholder="89004302218"
            value={data.personal.number}
          />
        </div>
        <div className="form__item">
          <label htmlFor="tg">Telegram</label>
          <input
            onChange={handleChange}
            name="tg"
            type="text"
            placeholder="t.me/sekraaa"
            value={data.personal.tg}
          />
        </div>
        <div className="form__item">
          <label htmlFor="vk">Vkonakte</label>
          <input
            onChange={handleChange}
            name="vk"
            type="text"
            placeholder="https://vk.com/bongibingo"
            value={data.personal.vk}
          />
        </div>
        <div className="form__item">
          <label htmlFor="language">Programming language</label>
          <input
            onChange={handleChange}
            name="language"
            type="text"
            placeholder="JavaScript"
            value={data.skills.language}
          />
        </div>
        <div className="form__item">
          <label htmlFor="framework">Framework</label>
          <input
            onChange={handleChange}
            name="framework"
            type="text"
            placeholder="React"
            value={data.skills.framework}
          />
        </div>
        <div className="form__item">
          <label htmlFor="library">Library</label>
          <input
            onChange={handleChange}
            name="library"
            type="text"
            placeholder="bootstrap"
            value={data.skills.library}
          />
        </div>
        <div className="form__item">
          <label htmlFor="text">About yourself</label>
          <textarea
            onChange={handleChange}
            name="text"
            rows={5}
            value={data.about.text}
          />
        </div>
      </form>
    </section>
  )
}
