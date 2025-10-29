export const goToBlock = (block: string) => {
  const order = document.getElementById(block)

  if (order) {
    order.scrollIntoView({ block: "center", behavior: "smooth" })
  }
}