const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")

const ageCalculate = () => {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue==="") {
        alert("Please enter valid date.")
    } else {
        const age = getAge(birthdayValue)
    }

}

const getAge = (birthdayValue) => {
    const currentDate = new Date()
}

btn.addEventListener("click", ageCalculate)