import { MongoClient } from "mongodb"

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
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
    let client
    try {
      client = await MongoClient.connect(
        "mongodb+srv://majdi-next:8BffHQXbs8hDkesj@cluster0.x5apesq.mongodb.net/my-blog?retryWrites=true&w=majority"
      )
    } catch (error) {
      res.status(500).json({ message: "could not connect to database!!!" })
      return
    }
    const db = client.db()
    try {
      const result = await db.collection("messagesblog1").insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: "storing message failed!!" })
      return
    }
    client.close()
    res.status(201).json({ message: "Success fully stored message!" })
  }
}

export default handler
