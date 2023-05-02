const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")
const resultEl = document.getElementById("result")

const ageCalculate = () => {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue==="") {
        alert("Please enter valid date.")
    } else {
        const age = getAge(birthdayValue)
        resultEl.innerText = `You are ${age} ${age > 1 ? "years": "year"} old!`
    }

}

const getAge = (birthdayValue) => {
    const currentDate = new Date()
    const birthdayDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    const month = currentDate.getMonth() - birthdayDate.getMonth()

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }

    return age
}

btn.addEventListener("click", ageCalculate)