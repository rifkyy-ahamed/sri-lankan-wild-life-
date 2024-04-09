// Introduction section 
const animalsData = {
    numberOnep:'',
    numberOneh1:'',
    numberOnep1:'',
    numberOneh2:'',
    numberOnep2:'',
    numberOneh3:'',
    numberOnep3:'',
    numberOneh4:'',
    numberOnep4:'',
    numberOneh5:'',
    numberOnep5:'',
    numberOneh6:'',
    numberOnep6:'',
    numberOneh7:'',
    numberOnep7:'',
    numberOneh8:'',
    numberOnep8:'',
    numberOneh9:'',
    numberOnep9:'',
    numberOneh10:'',
    numberOnep10:'',
  
    
}


// fetch the JSON data
fetch('animals.json')
    .then(response => response.json())
    .then(data => {
        animalsData.numberOnep = data.numberOnep;
        animalsData.numberOneh1 = data.numberOneh1;
        animalsData.numberOnep1 = data.numberOnep1;
        animalsData.numberOneh2 = data.numberOneh2;
        animalsData.numberOnep2 = data.numberOnep2;
        animalsData.numberOneh3 = data.numberOneh3;
        animalsData.numberOnep3 = data.numberOnep3;
        animalsData.numberOneh4 = data.numberOneh4;
        animalsData.numberOnep4 = data.numberOnep4;
        animalsData.numberOneh5 = data.numberOneh5;
        animalsData.numberOnep5 = data.numberOnep5;
        animalsData.numberOneh6 = data.numberOneh6;
        animalsData.numberOnep6 = data.numberOnep6;
        animalsData.numberOneh7 = data.numberOneh7;
        animalsData.numberOnep7 = data.numberOnep7;
        animalsData.numberOneh8 = data.numberOneh8;
        animalsData.numberOnep8 = data.numberOnep8;
        animalsData.numberOneh9 = data.numberOneh9;
        animalsData.numberOnep9 = data.numberOnep9;
        animalsData.numberOneh10 = data.numberOneh10;
        animalsData.numberOnep10 = data.numberOnep10;





        localStorage.setItem("animalsData",JSON.stringify(data));
        

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
    document.getElementById("Onep").value = document.querySelector(".onep").innerText;
    document.getElementById("Oneh1").value = document.querySelector(".card-title").innerText;
    document.getElementById("Onep1").value = document.querySelector(".card-sub-title").innerText;
    document.getElementById("Oneh2").value = document.querySelector("#oneh1").innerText;
    document.getElementById("Onep2").value = document.querySelector("#onep2").innerText;
    document.getElementById("Oneh3").value = document.querySelector("#oneh3").innerText;
    document.getElementById("Onep3").value = document.querySelector("#onep3").innerText;
    document.getElementById("Oneh4").value = document.querySelector("#oneh4").innerText;
    document.getElementById("Onep4").value = document.querySelector("#onep4").innerText;
    document.getElementById("Oneh5").value = document.querySelector("#oneh5").innerText;
    document.getElementById("Onep5").value = document.querySelector("#onep5").innerText;
    document.getElementById("Oneh6").value = document.querySelector("#oneh6").innerText;
    document.getElementById("Onep6").value = document.querySelector("#onep6").innerText;
    document.getElementById("Oneh7").value = document.querySelector("#oneh7").innerText;
    document.getElementById("Onep7").value = document.querySelector("#onep7").innerText;
    document.getElementById("Oneh8").value = document.querySelector("#oneh8").innerText;
    document.getElementById("Onep8").value = document.querySelector("#onep8").innerText;
    document.getElementById("Oneh9").value = document.querySelector("#oneh9").innerText;
    document.getElementById("Onep9").value = document.querySelector("#onep9").innerText;
    document.getElementById("Oneh10").value = document.querySelector("#oneh10").innerText;
    document.getElementById("Onep10").value = document.querySelector("#onep10").innerText;

}
function closeEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveChanges() {
    var paragraph = document.getElementById("Onep").value;
    var heading1 = document.getElementById("Oneh1").value;
    var paragraph1 = document.getElementById("Onep1").value;
    var heading2 = document.getElementById("Oneh2").value;
    var paragraph2 = document.getElementById("Onep2").value;
    var heading3 = document.getElementById("Oneh3").value;
    var paragraph3 = document.getElementById("Onep3").value;
    var heading4 = document.getElementById("Oneh4").value;
    var paragraph4 = document.getElementById("Onep4").value;
    var heading5 = document.getElementById("Oneh5").value;
    var paragraph5 = document.getElementById("Onep5").value;
    var heading6 = document.getElementById("Oneh6").value;
    var paragraph6 = document.getElementById("Onep6").value;
    var heading7 = document.getElementById("Oneh7").value;
    var paragraph7 = document.getElementById("Onep7").value;
    var heading8 = document.getElementById("Oneh8").value;
    var paragraph8 = document.getElementById("Onep8").value;
    var heading9 = document.getElementById("Oneh9").value;
    var paragraph9 = document.getElementById("Onep9").value;
    var heading10 = document.getElementById("Oneh10").value;
    var paragraph10 = document.getElementById("Onep10").value;
    
   




    document.querySelector(".onep").innerText = paragraph;
    document.querySelector(".card-title").innerText = heading1;
    document.querySelector(".card-sub-title").innerText = paragraph1;
    document.querySelector("#oneh1").innerText = heading2;
    document.querySelector("#onep2").innerText = paragraph2;
    document.querySelector("#oneh3").innerText = heading3;
    document.querySelector("#onep3").innerText = paragraph3;
    document.querySelector("#oneh4").innerText = heading4;
    document.querySelector("#onep4").innerText = paragraph4;
    document.querySelector("#oneh5").innerText = heading5;
    document.querySelector("#onep5").innerText = paragraph5;
    document.querySelector("#oneh6").innerText = heading6;
    document.querySelector("#onep6").innerText = paragraph6;
    document.querySelector("#oneh7").innerText = heading7;
    document.querySelector("#onep7").innerText = paragraph7;
    document.querySelector("#oneh8").innerText = heading8;
    document.querySelector("#onep8").innerText = paragraph8;
    document.querySelector("#oneh9").innerText = heading9;
    document.querySelector("#onep9").innerText = paragraph9;
    document.querySelector("#oneh10").innerText = heading10;
    document.querySelector("#onep10").innerText = paragraph10;


    
    localStorage.setItem("animalsData", JSON.stringify(animalsData));

    closeEditor();
}
