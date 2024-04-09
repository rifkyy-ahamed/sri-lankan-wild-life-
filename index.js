const indexData = {
    h1Intro: '',
    descriptionIntro: '',
    h1Intro2: '',
    numberOnep1: '',
    numberOnep2: '',
    numberOneh1: '',
    numberOnep3: '',
    numberOnep4: '',
    numberOneh2: '',
    numberOnep5: '',
    numberOnep6: '',

}

// fetch the JSON data
fetch('index.json')
    .then(response => response.json())
    .then(data => {
        indexData.h1Intro = data.h1Intro;
        indexData.descriptionIntro = data.descriptionIntro;
        indexData.h1Intro2 = data.h1Intro2;
        indexData.numberOnep1 = data.numberOnep1;
        indexData.numberOnep2 = data.numberOnep2;
        indexData.numberOneh1 = data.numberOneh1;
        indexData.numberOnep3 = data.numberOnep3;
        indexData.numberOnep4 = data.numberOnep4;
        indexData.numberOneh2 = data.numberOneh2;
        indexData.numberOnep5 = data.numberOnep5;
        indexData.numberOnep6 = data.numberOnep6;


        localStorage.setItem("indexData", JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section



const form = document.getElementById('newsletter-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    localStorage.setItem('email', email);
    form.reset();
    alert('You have been subscribed to our newsletter!');
});

if (localStorage.getItem('email')) {
    const email = localStorage.getItem('email');
    alert(`Welcome back, ${email}!`);

    
}






function openEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("oneh1").value = document.querySelector(".onepara").innerText;
    document.getElementById("onep").value = document.querySelector(".onep").innerText;
    document.getElementById("oneh2").value = document.querySelector(".oneh1").innerText;
    document.getElementById("onep1").value = document.querySelector(".onep1").innerText;
    document.getElementById("onep2").value = document.querySelector(".onep2").innerText;
    document.getElementById("oneh3").value = document.querySelector(".oneh2").innerText;
    document.getElementById("onep3").value = document.querySelector(".onep3").innerText;
    document.getElementById("onep4").value = document.querySelector(".onep4").innerText;
    document.getElementById("oneh4").value = document.querySelector(".oneh3").innerText;
    document.getElementById("onep5").value = document.querySelector(".onep5").innerText;
    document.getElementById("onep6").value = document.querySelector(".onep6").innerText;

}
function closeEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveChanges() {
    var heading1 = document.getElementById("oneh1").value;
    var paragraph1 = document.getElementById("onep").value;
    var heading2 = document.getElementById("oneh2").value;
    var paragraph2 = document.getElementById("onep1").value;
    var paragraph3 = document.getElementById("onep2").value;
    var heading3 = document.getElementById("oneh3").value;
    var paragraph4 = document.getElementById("onep3").value;
    var paragraph5 = document.getElementById("onep4").value;
    var heading4 = document.getElementById("oneh4").value;
    var paragraph6 = document.getElementById("onep5").value;
    var paragraph7 = document.getElementById("onep6").value;


    document.querySelector(".onepara").innerText = heading1;
    document.querySelector(".onep").innerText = paragraph1;
    document.querySelector(".oneh1").innerText = heading2;
    document.querySelector(".onep1").innerText = paragraph2;
    document.querySelector(".onep2").innerText = paragraph3;
    document.querySelector(".oneh2").innerText = heading3;
    document.querySelector(".onep3").innerText = paragraph4;
    document.querySelector(".onep4").innerText = paragraph5;
    document.querySelector(".oneh3").innerText = heading4;
    document.querySelector(".onep5").innerText = paragraph6;
    document.querySelector(".onep6").innerText = paragraph7;

    localStorage.setItem("indexData", JSON.stringify(indexData));

    closeEditor();
}







