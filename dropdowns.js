let plus_material = document.getElementById("plus_pflege");
let plus_versand = document.getElementById("plus_versand");
let plus_geschenk = document.getElementById("plus_qualitaet");
let plus_zahlen = document.getElementById("plus_zahlen");
let plus_produkt = document.getElementById("plus_produkt");

let material_div = document.getElementById("pflege_div");
let versand_div = document.getElementById("versand_div");
let geschenk_div = document.getElementById("qualitaet_div");
let zahlen_div = document.getElementById("zahlen_div");
let produkt_div = document.getElementById("produkt_div");

let infobox = document.createElement("p");
let versand_tabelle = document.createElement("img");
let geschenk_packung = document.createElement("img");
let oko_packung = document.createElement("img");
let infobox_geschenk = document.createElement("p");
let zahlungsmethoden_1 = document.createElement("img");
let zahlungsmethoden_2 = document.createElement("img");
let zahlen_info_1 = document.createElement("p");
let zahlen_info_2 = document.createElement("p");



function openMaterial(){
    if(plus_material.innerHTML=="+"){
        plus_material.innerHTML= "−";
        
        infobox.id = "infotext";
        infobox.innerText= 
        "Die Pflanzen von Red Bull werden täglich von extremen Gärtnern betreut. So können wir die extreme EXTREME der Pflanze für SIE sicher stellen";
        material_div.appendChild(infobox);
        infobox.style.textAlign="left";
        infobox.style.marginLeft="80px";
        infobox.style.marginRight="30px";
        infobox.style.fontSize="20px";
    } else {
    plus_material.innerHTML= "+";
    infobox.remove();
    }
    plus_material.style.fontWeight = "900";
}

plus_material.addEventListener("click", openMaterial);

function openQualitaet(){
    if(plus_geschenk.innerHTML =="+"){
        plus_geschenk.innerHTML="−";

        /*geschenk_packung.src="images/ciuk4onl.bmp";
        oko_packung.src ="images/oeko_behaelter.png";*/
        infobox_geschenk.innerHTML = "Die Qualität der Red Bull Planzen ist extrem gut"
        geschenk_div.appendChild(geschenk_packung);
        geschenk_div.appendChild(oko_packung);
        geschenk_div.appendChild(infobox_geschenk);

        infobox_geschenk.style.textAlign="left";
        infobox_geschenk.style.marginLeft="80px";
        infobox_geschenk.style.marginRight="30px";
        infobox_geschenk.style.fontSize="20px";
    
    } else {
    plus_geschenk.innerHTML="+";
    geschenk_packung.remove();
    oko_packung.remove(); 
    infobox_geschenk.remove(); 
    }
    plus_geschenk.style.fontWeight = "900";
}

plus_geschenk.addEventListener("click", openQualitaet);

function openZahlen() {
    if(plus_zahlen.innerHTML == "+"){
        plus_zahlen.innerHTML="−";

        /*zahlungsmethoden_1.src = "images/zahlungsmethoden_1.png";
        zahlungsmethoden_2.src = "images/zahlungsmethoden_2.png";
        zahlen_info_1.innerHTML = "Gucci akzeptiert die folgenden Zahlungsweisen für Online-Einkäufe:"*/
        zahlen_info_2.innerHTML = "Unsere Pflanzen sind für jedes Klima gemacht. Sie können extremsten Wetterbedingungen Standhalten"
        zahlen_div.appendChild(zahlen_info_1);
        zahlen_div.appendChild(zahlungsmethoden_1);
        zahlen_div.appendChild(zahlungsmethoden_2);
        zahlen_div.appendChild(zahlen_info_2);

        zahlen_info_1.style.textAlign="left";
        zahlen_info_1.style.marginLeft="80px";
        zahlen_info_1.style.marginRight="30px";
        zahlen_info_1.style.fontSize="20px";

        zahlen_info_2.style.textAlign="left";
        zahlen_info_2.style.marginLeft="80px";
        zahlen_info_2.style.marginRight="30px";
        zahlen_info_2.style.fontSize="20px";
        
    } else {
        plus_zahlen.innerHTML="+";
        zahlungsmethoden_1.remove();
        zahlungsmethoden_2.remove();
        zahlen_info_1.remove();
        zahlen_info_2.remove();
        }
        plus_zahlen.style.fontWeight ="900"
}

plus_zahlen.addEventListener("click", openZahlen);


