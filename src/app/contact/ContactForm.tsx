"use client"

import { useState } from "react"
import { toast } from "sonner"
import { sendInquiry } from "@/services/email"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await sendInquiry({ name, phone, email, message })
      toast.success(result.message)
      setName("")
      setPhone("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <label className="text-[1.6rem] font-semibold mb-[1rem]">
        Company Name <b className="text-primary">*</b>
      </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='E.g: "Amazon Inc"'
        required
        className="bg-surface-muted px-[30px] py-[19px] text-[1.6rem] border-none outline-none mb-[2.3rem]"
      />

      <label className="text-[1.6rem] font-semibold mb-[1rem]">
        Mobile No. <b className="text-primary">*</b>
      </label>
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="7827258487"
        required
        className="bg-surface-muted px-[30px] py-[19px] text-[1.6rem] border-none outline-none mb-[2.3rem]"
      />

      <label className="text-[1.6rem] font-semibold mb-[1rem]">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="youremail@example.com"
        className="bg-surface-muted px-[30px] py-[19px] text-[1.6rem] border-none outline-none mb-[2.3rem]"
      />

      <label className="text-[1.6rem] font-semibold mb-[1rem]">
        Tell us your requirement <b className="text-primary">*</b>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write Here.."
        required
        className="bg-surface-muted h-[18rem] px-[30px] py-[19px] text-[1.6rem] border-none outline-none mb-[2.5rem] resize-none"
      />

      <button
        type="submit"
        className="bg-primary text-text-primary px-[3rem] py-[1.8rem] rounded-[0.3rem] border-2 border-primary text-[1.8rem] font-semibold cursor-pointer transition-all duration-300 hover:bg-primary-hover self-start"
      >
        <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message
      </button>
    </form>
  )
}
