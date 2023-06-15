var butonSayi = document.querySelectorAll("#butonSayi");
var butonSembol = document.querySelectorAll("#butonSembol");
var islem = document.querySelector("#islem");
var sembolMu = false;
var sembol = "";
var sonuc = 0;


updateSonuc();

function updateSonuc(){
    sonuc = islem.textContent

 }


butonSayi.forEach(element => {
    element.onclick = function(){
    if(islem.textContent == "0" || sembolMu){
        islem.textContent = " ";
    }
    console.log(sembolMu);
    console.log(this.textContent);
    islem.textContent += this.textContent;
    sembolMu = false;
}
});

butonSembol.forEach(element => {
    element.onclick = function(){
    sembolMu = true;
    var yeniSembol = this.textContent;

    switch(sembol){
    case "+": islem.textContent = sonuc + Number(islem.textContent);
    break;

    case "-": islem.textContent = sonuc - Number(islem.textContent);
    break;

    case "%": islem.textContent = sonuc / Number(islem.textContent);
    break;

    case "x": islem.textContent = sonuc * Number(islem.textContent);
    break

    case "CE": islem.textContent = "0";
    break;

    //case "."

    case "=": sonuc = Number(islem.textContent);
    break;

}

    sonuc = Number(islem.textContent);
    sembol = yeniSembol;
    
}
});
