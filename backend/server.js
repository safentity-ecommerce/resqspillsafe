import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Resend } from "resend"

dotenv.config()

const app = express()
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://resqspillsafe-sandy.vercel.app",
      "https://www.resqspillsafe.com",
    ],
  }),
)
app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.post("/send-email", async (req, res) => {
  console.log(req.body)
  const { name, phone, email, message } = req.body

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "teamsafentity@gmail.com",
      subject: `New Lead from ResQ Spill Safe - ${name}`,
      html: `
        <h2>New Website Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
       `,
    })
    res.status(200).json({
      success: true,
      message: "Inquiry sent successfully",
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
