import "../styles/form.css";

export default function Form(props) {

  const inputValue = (e) => {
    props.setData(
    );
  }

  return (
    <section className="Form">
      <form>
        <div className="form__item">
          <label htmlFor="name">Name</label>
          <input onChange={inputValue} id="name" type="text" placeholder="your name"/>
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
