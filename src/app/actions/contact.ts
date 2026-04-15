'use server'

export async function submitContactForm(formData: FormData) {
  // Extract data to an object for easy integration (Resend, Supabase, CRM, etc.)
  const data = Object.fromEntries(formData.entries())
  
  // Log the data in the server console for now
  console.log('Nueva solicitud de diagnóstico recibida:', data)

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real scenario, handle validation and specific error states
  return { success: true }
}
