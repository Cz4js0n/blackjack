var karty = {"2Karo":2,"2Kier":2,"2Pik":2,"2Trefl":2,"3Karo":3,"3Kier":3,"3Pik":3,"3Trefl":3,"4Karo":4,"4Kier":4,"4Pik":4,"4Trefl":4,"5Karo":5,"5Kier":5,"5Pik":5,"5Trefl":5,"6Karo":6,"6Kier":6,"6Pik":6,"6Trefl":6,"7Karo":7,"7Kier":7,"7Pik":7,"7Trefl":7,"8Karo":8,"8Kier":8,"8Pik":8,"8Trefl":8,"9Karo":9,"9Kier":9,"9Pik":9,"9Trefl":9,"10Karo":10,"10Kier":10,"10Pik":10,"10Trefl":10,"JKaro":10,"JKier":10,"JPik":10,"JTrefl":10,"Qkaro":10,"QKier":10,"QPik":10,"QTrefl":10,"KKaro":10,"KKier":10,"KPik":10,"KTrefl":10,
"AKaro":11,"AKier":11,"APik":11,"ATrefl":11};
function pass(){
    document.getElementById("przycisk-dobierz").disabled=true;
    if(parseInt(document.getElementById("wynik-k").innerHTML)<21){
        while(parseInt(document.getElementById("wynik-k").innerHTML)<21){
            var keys = Object.keys(karty);
            var pole_krupiera = document.getElementById("krupier");
            var id_karty = Math.floor((Math.random()*keys.length));
            var karta = keys[id_karty];
            document.getElementById("wynik-k").innerHTML=parseInt(document.getElementById("wynik-k").innerHTML)+parseInt(karty[karta]);
            keys.pop(id_karty);
            pole_krupiera.innerHTML+=`<img src=${karta}.png>`; 
        }
        document.getElementById("przycisk-pass").disabled=true;
        wynik();
    }
    else if(parseInt(document.getElementById("wynik-k").innerHTML)>=21)
    {
        alert("Przegrałeś");
        var potwierdz2 = confirm("Czy chcesz rozpocząć grę od nowa? ")
        if(potwierdz2 == true){
            document.location.reload(true);
        }
        else{
            window.location.href='index.html';
        }
    }
}
function dobierz(){
    if(parseInt(document.getElementById("wynik").innerHTML)<21){
        var keys = Object.keys(karty);
        var pole_gracza = document.getElementById("karty-gracza");
        var id_karty = Math.floor((Math.random()*keys.length));
        var karta = keys[id_karty];
        document.getElementById("wynik").innerHTML=parseInt(document.getElementById("wynik").innerHTML)+parseInt(karty[karta]);
        keys.pop(id_karty);
        pole_gracza.innerHTML+=`<img src=${karta}.png>`;
    }
    else if(parseInt(document.getElementById("wynik").innerHTML)>21){
        alert("Przekroczyłeś 21. Koniec Gry");
        alert("Przegrałeś");
        var potwierdz2 = confirm("Czy chcesz rozpocząć grę od nowa? ")
        if(potwierdz2 == true){
            document.location.reload(true);
        }
        else{
            window.location.href='index.html';
        }
    }
    else if(parseInt(document.getElementById("wynik").innerHTML)==21){
        alert("Wygrałeś");
        var potwierdz = confirm("Czy chcesz rozpocząć grę od nowa? ")
        if(potwierdz == true){
            document.location.reload(true);
        }
        else{
            window.location.href='index.html';
        }
    }
}
