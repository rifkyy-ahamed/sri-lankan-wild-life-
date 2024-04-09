// Introduction section 
const leopardData = {
    numberOnep1:'',
    numberOneh1:'',
    numberOneh2:'',
    numberOnep2:'',
    numberOneh3: '',
    numberOnep3: '',
    numberOneh4:'',
    numberOnep4:'',
    numberOneh5:'',
    numberOneh6:'',
    numberOnep5:'',
    numberOneh7:'',
    numberOnep6:'',
    numberOnep7:'',
    numberOneh8:'',
    numberOnep8:'',
    numberOnep9:'',
    numberOnep10:'',
    numberOneh9:'',
    numberOnep11:'',
    numberOneh10:'',
    numberOnep12:'',
    numberOnep13:'',
    numberOneh11:'',
    numberOnep14:'',
    numberOnep15:'',
    numberOnep16:'',
    numberOneh12:'',
    numberOnep17:'',

 
}


// fetch the JSON data
fetch('leopard.json')
    .then(response => response.json())
    .then(data => {

        leopardData.numberOnep1 = data.numberOnep1;
        leopardData.numberOneh1 = data.numberOneh1;
        leopardData.numberOneh2 = data.numberOneh2;
        leopardData.numberOnep2 = data.numberOnep2;
        leopardData.numberOneh3 = data.numberOneh3;
        leopardData.numberOnep3 = data.numberOnep3;
        leopardData.numberOneh4 = data.numberOneh4;
        leopardData.numberOnep4 = data.numberOnep4;
        leopardData.numberOneh5 = data.numberOneh5;
        leopardData.numberOneh6 = data.numberOneh6;
        leopardData.numberOnep5 = data.numberOnep5;
        leopardData.numberOneh7 = data.numberOneh7;
        leopardData.numberOnep6 = data.numberOnep6;
        leopardData.numberOnep7 = data.numberOnep7;
        leopardData.numberOneh8 = data.numberOneh8;
        leopardData.numberOnep8 = data.numberOnep8;
        leopardData.numberOnep9 = data.numberOnep9;
        leopardData.numberOnep10 = data.numberOnep10;
        leopardData.numberOneh9 = data.numberOneh9;
        leopardData.numberOnep11 = data.numberOnep11;
        leopardData.numberOneh10 = data.numberOneh10;
        leopardData.numberOnep12 = data.numberOnep12;
        leopardData.numberOnep13 = data.numberOnep13;
        leopardData.numberOneh11 = data.numberOneh11;
        leopardData.numberOnep14 = data.numberOnep14;
        leopardData.numberOnep15 = data.numberOnep15;
        leopardData.numberOnep16 = data.numberOnep16;
        leopardData.numberOneh12 = data.numberOneh12;
        leopardData.numberOnep17 = data.numberOnep17;

        localStorage.setItem("leopardData",JSON.stringify(data));

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
    document.getElementById("Fourp1").value = document.querySelector(".fourp1").innerText;
    document.getElementById("Fourh1").value = document.querySelector(".fourh1").innerText;
    document.getElementById("Fourh2").value = document.querySelector(".card-title").innerText;
    document.getElementById("Fourp2").value = document.querySelector(".card-sub-title").innerText;
    document.getElementById("Fourh3").value = document.querySelector("#fourh3").innerText;
    document.getElementById("Fourp3").value = document.querySelector("#fourp3").innerText;
    document.getElementById("Fourh4").value = document.querySelector("#fourh4").innerText;
    document.getElementById("Fourp4").value = document.querySelector("#fourp4").innerText;
    document.getElementById("Fourh5").value = document.querySelector("#fourh5").innerText;
    document.getElementById("Fourh6").value = document.querySelector("#fourh6").innerText;
    document.getElementById("Fourp5").value = document.querySelector(".intro-sec-2-p").innerText;
    document.getElementById("Fourh7").value = document.querySelector("#fourh7").innerText;
    document.getElementById("Fourp6").value = document.querySelector("#fourp6").innerText;
    document.getElementById("Fourp7").value = document.querySelector("#fourp7").innerText;
    document.getElementById("Fourh8").value = document.querySelector("#fourh8").innerText;
    document.getElementById("Fourp8").value = document.querySelector("#fourp8").innerText;
    document.getElementById("Fourp9").value = document.querySelector("#fourp9").innerText;
    document.getElementById("Fourp10").value = document.querySelector("#fourp10").innerText;
    document.getElementById("Fourh9").value = document.querySelector("#fourh9").innerText;
    document.getElementById("Fourp11").value = document.querySelector(".intro-sec-4-p").innerText;
    document.getElementById("Fourh10").value = document.querySelector("#fourh10").innerText;
    document.getElementById("Fourp12").value = document.querySelector("#fourp12").innerText;
    document.getElementById("Fourp13").value = document.querySelector("#fourp13").innerText;
    document.getElementById("Fourh11").value = document.querySelector("#fourh11").innerText;
    document.getElementById("Fourp14").value = document.querySelector("#fourp14").innerText;
    document.getElementById("Fourp15").value = document.querySelector("#fourp15").innerText;
    document.getElementById("Fourp16").value = document.querySelector("#fourp16").innerText;
    document.getElementById("Fourh12").value = document.querySelector("#fourh12").innerText;
    document.getElementById("Fourp17").value = document.querySelector("#fourp17").innerText;


   


}
function closeEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveChanges() {
    var paragraph1= document.getElementById("Fourp1").value;
    var heading1 = document.getElementById("Fourh1").value;
    var heading2 = document.getElementById("Fourh2").value;
    var paragraph2 = document.getElementById("Fourp2").value;
    var heading3 = document.getElementById("Fourh3").value;
    var paragraph3 = document.getElementById("Fourp3").value;
    var heading4 = document.getElementById("Fourh4").value;
    var paragraph4 = document.getElementById("Fourp4").value;
    var heading5 = document.getElementById("Fourh5").value;
    var heading6 = document.getElementById("Fourh6").value;
    var paragraph5 = document.getElementById("Fourp5").value;
    var heading7 = document.getElementById("Fourh7").value;
    var paragraph6 = document.getElementById("Fourp6").value;
    var paragraph7 = document.getElementById("Fourp7").value;
    var heading8 = document.getElementById("Fourh8").value;
    var paragraph8 = document.getElementById("Fourp8").value;
    var paragraph9 = document.getElementById("Fourp9").value;
    var paragraph10 = document.getElementById("Fourp10").value;
    var heading9 = document.getElementById("Fourh9").value;
    var paragraph11 = document.getElementById("Fourp11").value;
    var heading10 = document.getElementById("Fourh10").value;
    var paragraph12 = document.getElementById("Fourp12").value;
    var paragraph13 = document.getElementById("Fourp13").value;
    var heading11 = document.getElementById("Fourh11").value;
    var paragraph14 = document.getElementById("Fourp14").value;
    var paragraph15 = document.getElementById("Fourp15").value;
    var paragraph16 = document.getElementById("Fourp16").value;
    var heading12 = document.getElementById("Fourh12").value;
    var paragraph17 = document.getElementById("Fourp17").value;


   
   
   
   

    
    document.querySelector(".fourp1").innerText = paragraph1;
    document.querySelector(".fourh1").innerText = heading1;
    document.querySelector(".card-title").innerText = heading2;
    document.querySelector(".card-sub-title").innerText = paragraph2;
    document.querySelector("#fourh3").innerText = heading3;
    document.querySelector("#fourp3").innerText = paragraph3;
    document.querySelector("#fourh4").innerText = heading4;
    document.querySelector("#fourp4").innerText = paragraph4;
    document.querySelector("#fourh5").innerText = heading5;
    document.querySelector("#fourh6").innerText = heading6;
    document.querySelector(".intro-sec-2-p").innerText = paragraph5;
    document.querySelector("#fourh7").innerText = heading7;
    document.querySelector("#fourp6").innerText = paragraph6;
    document.querySelector("#fourp7").innerText = paragraph7;
    document.querySelector("#fourh8").innerText = heading8;
    document.querySelector("#fourp8").innerText = paragraph8;
    document.querySelector("#fourp9").innerText = paragraph9;
    document.querySelector("#fourp10").innerText = paragraph10;
    document.querySelector("#fourh9").innerText = heading9;
    document.querySelector(".intro-sec-4-p").innerText = paragraph11;
    document.querySelector("#fourh10").innerText = heading10;
    document.querySelector("#fourp12").innerText = paragraph12;
    document.querySelector("#fourp13").innerText = paragraph13;
    document.querySelector("#fourh11").innerText = heading11;
    document.querySelector("#fourp14").innerText = paragraph14;
    document.querySelector("#fourp15").innerText = paragraph15;
    document.querySelector("#fourp16").innerText = paragraph16;
    document.querySelector("#fourh12").innerText = heading12;
    document.querySelector("#fourp17").innerText = paragraph17;    
    
  

    closeEditor();
}