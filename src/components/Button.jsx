import "../styles/button.css"

export default function Button({ handle, text }) {
  return (
    <button className="btn" onClick={handle}>
      {text}
    </button>
  )
}
