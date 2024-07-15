const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/coat-of-arms-of-Nizhny-Novgorod.png") {
        myImage.setAttribute("src", "images/coat-of-arms-of-Avtozavodsky-district.png");
    } else {
        myImage.setAttribute("src", "images/coat-of-arms-of-Nizhny-Novgorod.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Nizhny Novgorod, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Nizhny Novgorod, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}

