let form = document["airline-form"]

let submit = document.getElementById("submit")

function formAlert() {
    let firstName = form.elements["first-name"].value;

    let lastName = form.elements["last-name"].value;

    let age = form.age.value

    let gender = form.elements["gender"].value;

    let location = form.elements.location.value;

    let berries = [];

    if (form.elements['oran-berry'].checked) {
        berries.push(document.getElementById('oran-berry').value);
    }
    else if (form.elements['sitrus-berry'].checked) {
        berries.push(document.getElementById('sitrus-berry').value);
    }
    else if (form.elements['cherri-berry'].checked) {
        berries.push(document.getElementById('cherri-berry').value)
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nBerries: " + berries)
}

submit.addEventListener("click", formAlert)