import "../styles/form.css";

export default function Form({ data, setData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      personal: {
        ...data.personal,
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
          <label htmlFor="github">GitHub</label>
          <input
            onChange={handleChange}
            name="github"
            type="text"
            placeholder="t.me/sekraaa"
            value={data.personal.github}
          />
        </div>
      </form>
    </section>
  )

}
