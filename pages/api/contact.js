function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim()===""
    ) {
      res.status(422).json({ message: "Something went wrong invalid input!!!" })
      return
    }
    // store database
    const newMessage = {
      email,
      name,
      message,
    }
    console.log(newMessage)
    res.status(201).json({ message: "Success fully stored message!" })
  }
}

export default handler
