// Introduction section 
const introductionData = {
    descriptionIntro:'',
    descriptionIntrOne:'',
    numberOne:'',
    numberOnep:'',
    numberOneh1: '',
    numberOnep1: '',
    numberOnep2:'',
    numberOnep3:'',
    numbertwo:'',
    numbertwop:'',
    numbertwoh1: '',
    numbertwop1: '',
    numbertwop2:'',
    numbertwop3:'',
    numbertwop4:'',
    numberthree:'',
    numberthreep: '',
    numberthreeh1:'',
    numberthreep1:'',
    numberthreep2:'',
    numberthreep3:'',
    numberthreep4:'',
    numberfour:'',
    numberfourp:'',
    numberfourh2:'',
    numberfourp1:'',
    numberfourp2:'',
    numberfourp3:'',
    numberfourp4:'',
}


// fetch the JSON data
fetch('introduction.json')
    .then(response => response.json())
    .then(data => {
        introductionData.descriptionIntro = data.descriptionIntro;
        introductionData.descriptionIntrOne = data.descriptionIntrOne;
        introductionData.numberOne = data.numberOne;
        introductionData.numberOnep = data.numberOnep;
        introductionData.numberOneh1 = data.numberOneh1;
        introductionData.numberOnep1 = data.numberOnep1;
        introductionData.numberOnep2 = data.numberOnep2;
        introductionData.numberOnep3 = data.numberOnep3;
        introductionData.numbertwo = data.numbertwo;
        introductionData.numbertwop = data.numbertwop;
        introductionData.numbertwoh1 = data.numbertwoh1;
        introductionData.numbertwop1 = data.numbertwop1;
        introductionData.numbertwop2 = data.numbertwop2;
        introductionData.numbertwop3 = data.numbertwop3;
        introductionData.numbertwop4 = data.numbertwop4;
        introductionData.numberthree = data.numberthree;
        introductionData.numberthreep = data.numberthreep;
        introductionData.numberthreeh1 = data.numberthreeh1;
        introductionData.numberthreep1 = data.numberthreep1;
        introductionData.numberthreep2 = data.numberthreep2;
        introductionData.numberthreep3 = data.numberthreep3;
        introductionData.numberthreep4 = data.numberthreep4;
        introductionData.numberfour = data.numberfour;
        introductionData.numberfourp = data.numberfourp;
        introductionData.numberfourh2 = data.numberfourh2;
        introductionData.numberfourp1 = data.numberfourp1;
        introductionData.numberfourp2 = data.numberfourp2;
        introductionData.numberfourp3 = data.numberfourp3;
        introductionData.numberfourp4 = data.numberfourp4;

        localStorage.setItem("introductionData",JSON.stringify(data));

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
    document.getElementById("Twoh1").value = document.querySelector(".twoh1").innerText;
    document.getElementById("Twop1").value = document.querySelector(".intro-sec-2-p").innerText;
    document.getElementById("Twoh2").value = document.querySelector(".twoh2").innerText;
    document.getElementById("Twoli1").value = document.querySelector(".twoli1").innerText;
    document.getElementById("Twoli2").value = document.querySelector(".twoli2").innerText;
    document.getElementById("Twoli3").value = document.querySelector(".twoli3").innerText;
    document.getElementById("Twoh3").value = document.querySelector(".twoh3").innerText;
    document.getElementById("Twop2").value = document.querySelector(".intro-sec-4-p").innerText;
    document.getElementById("Twoh4").value = document.querySelector(".twoh4").innerText;
    document.getElementById("Twoli4").value = document.querySelector(".twoli4").innerText;
    document.getElementById("Twoli5").value = document.querySelector(".twoli5").innerText;
    document.getElementById("Twoli6").value = document.querySelector(".twoli6").innerText;
    document.getElementById("Twoli7").value = document.querySelector(".twoli7").innerText;
    document.getElementById("Twoh5").value = document.querySelector(".twoh5").innerText;
    document.getElementById("Twop3").value = document.querySelector(".intro-sec-6-p").innerText;
    document.getElementById("Twoh6").value = document.querySelector(".twoh6").innerText;
    document.getElementById("Twoli8").value = document.querySelector(".twoli8").innerText;
    document.getElementById("Twoli9").value = document.querySelector(".twoli9").innerText;
    document.getElementById("Twoli10").value = document.querySelector(".twoli10").innerText;
    document.getElementById("Twoli11").value = document.querySelector(".twoli11").innerText;
    document.getElementById("Twoh7").value = document.querySelector(".twoh7").innerText;
    document.getElementById("Twop4").value = document.querySelector(".intro-sec-8-p").innerText;
    document.getElementById("Twoh8").value = document.querySelector(".twoh8").innerText;
    document.getElementById("Twoli12").value = document.querySelector(".twoli12").innerText;
    document.getElementById("Twoli13").value = document.querySelector(".twoli13").innerText;
    document.getElementById("Twoli14").value = document.querySelector(".twoli14").innerText;
    document.getElementById("Twoli15").value = document.querySelector(".twoli15").innerText;


}
function closeEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveChanges() {
    var heading1 = document.getElementById("Twoh1").value;
    var paragraph1 = document.getElementById("Twop1").value;
    var heading3 = document.getElementById("Twoh2").value;
    var li1 = document.getElementById("Twoli1").value;
    var li2 = document.getElementById("Twoli2").value;
    var li3 = document.getElementById("Twoli3").value;
    var heading3 = document.getElementById("Twoh3").value;
    var paragraph5 = document.getElementById("Twop2").value;
    var heading4 = document.getElementById("Twoh4").value;
    var li4 = document.getElementById("Twoli4").value;
    var li5 = document.getElementById("Twoli5").value;
    var li6 = document.getElementById("Twoli6").value;
    var li7 = document.getElementById("Twoli7").value;
    var heading5 = document.getElementById("Twoh5").value;
    var paragraph3 = document.getElementById("Twop3").value;
    var heading6 = document.getElementById("Twoh6").value;
    var li8 = document.getElementById("Twoli8").value;
    var li9 = document.getElementById("Twoli9").value;
    var li10 = document.getElementById("Twoli10").value;
    var li11 = document.getElementById("Twoli11").value;
    var heading7 = document.getElementById("Twoh7").value;
    var paragraph4 = document.getElementById("Twop4").value;
    var heading8 = document.getElementById("Twoh8").value;
    var li12 = document.getElementById("Twoli12").value;
    var li13 = document.getElementById("Twoli13").value;
    var li14 = document.getElementById("Twoli14").value;
    var li15 = document.getElementById("Twoli15").value;

   

    
    document.querySelector(".twoh1").innerText = heading1;
    document.querySelector(".intro-sec-2-p").innerText = paragraph1;
    document.querySelector(".twoh2").innerText = heading3;
    document.querySelector(".twoli1").innerText = li1;
    document.querySelector(".twoli2").innerText = li2;
    document.querySelector(".twoli3").innerText = li3;
    document.querySelector(".twoh2").innerText = heading3;
    document.querySelector(".intro-sec-4-p").innerText = paragraph5;
    document.querySelector(".twoh4").innerText = heading4;
    document.querySelector(".twoli4").innerText = li4;
    document.querySelector(".twoli5").innerText = li5;
    document.querySelector(".twoli6").innerText = li6;
    document.querySelector(".twoli7").innerText = li7;
    document.querySelector(".twoh5").innerText = heading5;
    document.querySelector(".intro-sec-6-p").innerText = paragraph3;
    document.querySelector(".twoh6").innerText = heading6;
    document.querySelector(".twoli8").innerText = li8;
    document.querySelector(".twoli9").innerText = li9;
    document.querySelector(".twoli10").innerText = li10;
    document.querySelector(".twoli11").innerText = li11;
    document.querySelector(".twoh7").innerText = heading7;
    document.querySelector(".intro-sec-8-p").innerText = paragraph4;
    document.querySelector(".twoh8").innerText = heading8;
    document.querySelector(".twoli12").innerText = li12;
    document.querySelector(".twoli13").innerText = li13;
    document.querySelector(".twoli14").innerText = li14;
    document.querySelector(".twoli15").innerText = li15;

  

    closeEditor();
}