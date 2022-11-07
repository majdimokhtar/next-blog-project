import { useEffect, useState } from "react"
import styles from "./contact-form.module.css"
import Notification from "../ui/notification"

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || "something went wrong")
  }
}

const ContactForm = () => {
  let notification
  const [entredEmail, setEntredEmail] = useState("")
  const [entredName, setEntredName] = useState("")
  const [entredMessage, setEntredMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState() //pending success error
  const [requestError, setRequestError] = useState()
  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [requestStatus])
  const sendMessageHandler = async (event) => {
    event.preventDefault()
    setRequestStatus("pending")
    try {
      await sendContactData({
        email: entredEmail,
        name: entredName,
        message: entredMessage,
      })
      setRequestStatus("success")
      setEntredEmail("")
      setEntredMessage("")
      setEntredName("")
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus("error")
    }
  }

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on it way!!",
    }
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Message sent!!",
      message: "Message sent successfully",
    }
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    }
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
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
    </section>
  )
}

export default ContactForm
