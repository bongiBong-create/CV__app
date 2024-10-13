import "../styles/personal.css";

export default function Personal() {
  return (
    <section className="personal">
      <form>
        <div className="form__item">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="your name"/>
        </div>
        <div className="form__item">
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" placeholder="your last name"/>
        </div>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="example@gmail.com"/>
        </div>
      </form>
    </section>
  )
}
