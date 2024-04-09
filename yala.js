// Introduction section 
const yalaData = {

    numberOneh1: '',
    numberOnep:'',
    numberOneh2: '',
    numberOneh3: '',
    numberOnep1:'',
    numberOneh4: '',
    numberOnep2:'',
    numberOneli1:'',
    numberOneli2:'',
    numberOneli3:'',
    numberOneh5: '',
    numberOnep3:'',
    numberOneli4:'',
    numberOneli5:'',
}




// fetch the JSON data
fetch('yala.json')
    .then(response => response.json())
    .then(data => {

        yalaData.numberOneh1 = data.numberOneh1;
        yalaData.numberOnep = data.numberOnep;
        yalaData.numberOneh2 = data.numberOneh2;
        yalaData.numberOneh3 = data.numberOneh3;
        yalaData.numberOnep1 = data.numberOnep1;
        yalaData.numberOneh4 = data.numberOneh4;
        yalaData.numberOnep2 = data.numberOnep2;
        yalaData.numberOneli1 = data.numberOneli1;
        yalaData.numberOneli2 = data.numberOneli2;
        yalaData.numberOneli3 = data.numberOneli3;
        yalaData.numberOneh5 = data.numberOneh5;
        yalaData.numberOnep3 = data.numberOnep3;
        yalaData.numberOneli4 = data.numberOneli4;
        yalaData.numberOneli5 = data.numberOneli5;

        localStorage.setItem("yalaData",JSON.stringify(data));

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
    document.getElementById("Sevenh1").value = document.querySelector(".con-h1").innerText;
    document.getElementById("Sevenp1").value = document.querySelector(".sevenp1").innerText;
    document.getElementById("Sevenh2").value = document.querySelector(".h-2").innerText;
    document.getElementById("Sevenh3").value = document.querySelector(".title").innerText;
    document.getElementById("Sevenp2").value = document.querySelector(".sevenp2").innerText;
    document.getElementById("Sevenh4").value = document.querySelector(".title-1").innerText;
    document.getElementById("Sevenp3").value = document.querySelector(".sevenp3").innerText;
    document.getElementById("Li1").value = document.querySelector(".li1").innerText;
    document.getElementById("Li2").value = document.querySelector(".li2").innerText;
    document.getElementById("Li3").value = document.querySelector(".li3").innerText;
    document.getElementById("Sevenh5").value = document.querySelector("#title-1").innerText;
    document.getElementById("Sevenp4").value = document.querySelector(".sevenp4").innerText;
    document.getElementById("Li4").value = document.querySelector(".li4").innerText;
    document.getElementById("Li5").value = document.querySelector(".li5").innerText;
   


}
function closeEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveChanges() {
    var heading1 = document.getElementById("Sevenh1").value;
    var paragraph1 = document.getElementById("Sevenp1").value;
    var heading2 = document.getElementById("Sevenh2").value;
    var heading3 = document.getElementById("Sevenh3").value;
    var paragraph2 = document.getElementById("Sevenp2").value;
    var heading4 = document.getElementById("Sevenh4").value;
    var paragraph3 = document.getElementById("Sevenp3").value;
    var paragraph4 = document.getElementById("Li1").value;
    var paragraph5 = document.getElementById("Li2").value; 
    var paragraph6 = document.getElementById("Li3").value;
    var heading5 = document.getElementById("Sevenh5").value;
    var paragraph7 = document.getElementById("Sevenp4").value;
    var paragraph8 = document.getElementById("Li4").value; 
    var paragraph9 = document.getElementById("Li5").value;
   
    document.querySelector(".con-h1").innerText = heading1;
    document.querySelector(".sevenp1").innerText = paragraph1;
    document.querySelector(".h-2").innerText = heading2;
    document.querySelector(".title").innerText = heading3;
    document.querySelector(".sevenp2").innerText = paragraph2;
    document.querySelector(".title-1").innerText = heading4;
    document.querySelector(".sevenp3").innerText = paragraph3;
    document.querySelector(".li1").innerText = paragraph4;
    document.querySelector(".li2").innerText = paragraph5;
    document.querySelector(".li3").innerText = paragraph6;
    document.querySelector("#title-1").innerText = heading5;
    document.querySelector(".sevenp4").innerText = paragraph7;
    document.querySelector(".li4").innerText = paragraph8;
    document.querySelector(".li5").innerText = paragraph9;
    
    closeEditor(); 
}
