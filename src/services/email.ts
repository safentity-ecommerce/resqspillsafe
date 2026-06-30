export interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
}

export async function sendInquiry(data: ContactFormData) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(`${API_URL}/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message)
  }

  return result
}
