// Introduction section 
const aboutData = {
    numberoneh1:'',
    numberonep1:'',
    numberonep2:'',
    numberonep3:'',
    numberonep4: '',
    numberoneh2: '',
    numberoneh3:'',
    numberonep5:'',
    numberoneh4: '',
    numberonep6:'',
}


// fetch the JSON data
fetch('about.json')
    .then(response => response.json())
    .then(data => {
        aboutData.numberoneh1 = data.numberoneh1;
        aboutData.numberonep1 = data.numberonep1;
        aboutData.numberonep2 = data.numberonep2;
        aboutData.numberonep3 = data.numberonep3;
        aboutData.numberonep4 = data.numberonep4;
        aboutData.numberoneh2 = data.numberoneh2;
        aboutData.numberoneh3 = data.numberoneh3;
        aboutData.numberonep5 = data.numberonep5;
        aboutData.numberoneh4 = data.numberoneh4;
        aboutData.numberonep6 = data.numberonep6;

        localStorage.setItem("aboutData",JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section


localStorage.setItem("aboutData",aboutData);
console.log(localStorage);




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
    document.getElementById("Threeh1").value = document.querySelector(".threeh1").innerText;
    document.getElementById("Threep1").value = document.querySelector(".threep1").innerText;
    document.getElementById("Threep2").value = document.querySelector(".threep2").innerText;
    document.getElementById("Threep3").value = document.querySelector(".threep3").innerText;
    document.getElementById("Threep4").value = document.querySelector(".threep4").innerText;
    document.getElementById("Threeh2").value = document.querySelector(".threeh2").innerText;
    document.getElementById("Threeh3").value = document.querySelector(".threeh3").innerText;
    document.getElementById("Threep5").value = document.querySelector("#threep5").innerText;
    document.getElementById("Threeh4").value = document.querySelector(".threeh4").innerText;
    document.getElementById("Threep6").value = document.querySelector("#threep6").innerText;
   


}
function closeEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveChanges() {
    var heading1 = document.getElementById("Threeh1").value;
    var paragraph1 = document.getElementById("Threep1").value;
    var paragraph2 = document.getElementById("Threep2").value;
    var paragraph3 = document.getElementById("Threep3").value;
    var paragraph4 = document.getElementById("Threep4").value;
    var heading2 = document.getElementById("Threeh2").value;
    var heading3 = document.getElementById("Threeh3").value;
    var paragraph5 = document.getElementById("Threep5").value;
    var heading4 = document.getElementById("Threeh4").value;
    var paragraph6 = document.getElementById("Threep6").value;
   
   
   

    
    document.querySelector(".threeh1").innerText = heading1;
    document.querySelector(".threep1").innerText = paragraph1;
    document.querySelector(".threep2").innerText = paragraph2;
    document.querySelector(".threep3").innerText = paragraph3;
    document.querySelector(".threep4").innerText = paragraph4;
    document.querySelector(".threeh2").innerText = heading2;
    document.querySelector(".threeh3").innerText = heading3;
    document.querySelector("#threep5").innerText = paragraph5;
    document.querySelector(".threeh4").innerText = heading4;
    document.querySelector("#threep6").innerText = paragraph6;
    
    
  

    closeEditor();
}