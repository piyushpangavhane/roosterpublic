function debounce(callback, timer) {
  let timeoutId

  return (...args) => {
    // save the current context (this)
    const context = this

    // clear the existing timeout
    clearTimeout(timeoutId)

    // create a new timeout
    timeoutId = setTimeout(() => {
      callback.apply(context, args)
    }, timer)
  }
}

export default debounce
