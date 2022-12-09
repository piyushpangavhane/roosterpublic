import debounce from './debounce'

export const triggerVercelDeployment = debounce(async () => {
  if (process.env.NODE_ENV !== 'production') return
  try {
    const response = await fetch(process.env.VERCEL_WEBHOOK, {
      method: 'POST'
    })
    const responseJson = await response.json()
    if (responseJson?.job?.id) {
      console.log(
        `Triggered a new deployment: ${responseJson.job.id}`,
        responseJson.job.createdAt
      )
    }
  } catch (err) {
    console.error(err?.message, 'Unable to process the webhook')
  }
}, 5000)
