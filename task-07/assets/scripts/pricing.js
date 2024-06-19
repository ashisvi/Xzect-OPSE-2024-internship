const annualPrice = document.querySelectorAll(".pricing-annual")
const monthlyPrice = document.querySelectorAll(".pricing-month")
const priceSwitch = document.getElementById("switch")

priceSwitch.addEventListener("change", () => {
  const isChecked = priceSwitch.checked

  if (isChecked) {
    for (const element of annualPrice) {
      element.classList.toggle("hidden", false)
    }
    for (const element of monthlyPrice) {
      element.classList.toggle("hidden", true)
    }
  } else {
    for (const element of annualPrice) {
      element.classList.toggle("hidden", true)
    }
    for (const element of monthlyPrice) {
      element.classList.toggle("hidden", false)
    }
  }
})
