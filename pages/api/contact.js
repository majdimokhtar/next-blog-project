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
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.x5apesq.mongodb.net/${process.env.mongodb_database_key}?retryWrites=true&w=majority`
    try {
      client = await MongoClient.connect(connectionString)
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
