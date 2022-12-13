export const triggerDiscordNotifications = async (content) => {
  if (process.env.NODE_ENV !== 'production') return
  try {
    const response = await fetch(process.env.DISCORD_INQUIRIES_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `>>> ***You have a new Inquiry!***
**Name:**
${content?.submissionData[0]?.value} \n
**Phone:**
${content?.submissionData[1]?.value} \n
**Email:**
${content?.submissionData[2]?.value} \n
**Organisation:**
${content?.submissionData[3]?.value} \n
**Message:**
${content?.submissionData[4]?.value} \n
**Product Interested in:**
${content?.submissionData[5]?.value}
        `
      }),
      mode: 'cors'
    })
    const responseJson = await response.json()
    if (responseJson?.job?.id) {
      console.log(
        `Notification Sent!: ${responseJson.job.id}`,
        responseJson.job.createdAt
      )
    }
  } catch (err) {
    console.error(err?.message, 'Unable to process the webhook')
  }
}
