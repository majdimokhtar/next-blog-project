import { useState } from "react"
import styles from "./contact-form.module.css"

const ContactForm = () => {
  const [entredEmail, setEntredEmail] = useState("")
  const [entredName, setEntredName] = useState("")
  const [entredMessage, setEntredMessage] = useState("")
  const sendMessageHandler = (event) => {
    event.preventDefault()
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: entredEmail,
        name: entredName,
        message: entredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  return (
    <section className={styles.contact}>
      <h1>How Can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={entredEmail}
              onChange={(e) => setEntredEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={entredName}
              onChange={(e) => setEntredName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={entredMessage}
            onChange={(e) => setEntredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
