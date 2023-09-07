const data = [
    { name: "LUVKUMAR GUPTA", photo: "image.jpg" },
    { name: "Name 2", photo: "photo2.jpg" },
    { name: "Name 3", photo: "photo3.jpg" },
    // Add more names and photos
];

const content = document.getElementById("content");
const photoElement = document.getElementById("photo");
const nameElement = document.getElementById("name");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const responseElement = document.getElementById("response");

let currentIndex = 0;

function showNextPerson() {
    if (currentIndex < data.length) {
        const person = data[currentIndex];
        photoElement.src = person.photo;
        nameElement.textContent = person.name;
        currentIndex++;
    } else {
        content.innerHTML = "<p>Thank you for playing!</p>";
        yesButton.disabled = true;
        noButton.disabled = true;
    }
}

function handleYesClick() {
    // showNextPerson();
    responseElement.textContent = "Thank You... apke upar simran ji k ashirwad rhega hmesa 😌";
    yesButton.disabled = true;
    noButton.disabled = true;
}

function handleNoClick() {
    responseElement.textContent = "You are bad! 😏";
    yesButton.disabled = true;
    noButton.disabled = true;
}

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

// Initial display
showNextPerson();
