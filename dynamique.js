
// Example 1: Programme de temperature en c°
function exx0() {
    var tempF = document.getElementById("exercice1").value;
    let tempC = (5 / 9) * (tempF - 32);

    console.log(tempC + " C°");
    document.getElementById("exer").innerHTML = tempC + " C°";
}

// Example 2: Programme de conversion de durées
function exx2(){
    var secc = (document.getElementById("sec").value)
    
    
    var jours = Math.floor(secc / 86400)
    var heurs = Math.floor((secc % 86400) / 3600)
    var min = Math.floor((secc % 3600) / 60)
    var secend = secc % 60

    document.getElementById("j").value = jours
    document.getElementById("h").value = heurs
    document.getElementById("m").value = min
    document.getElementById("s").value = secend 
}


// Exercise PYRAMIDE
function exx3(){
    var N = document.getElementById("pyramid").value;
    var output = ''; 

    for (i = 1; i <= N; i++) {
        var up = "";

        for (j = 1; j <= i; j++) {
            up += "*";
        }

        output += up + "<br>";
    }

    document.getElementById("pyr").innerHTML = output; 
}

// Exercise PYRAMIDE2
function exx4() {
    var n = document.getElementById("pyrami").value;
    var pyramide = '';
    for (var i = n; i >= 1; i--) {
        var ligne = '';
        for (var j = 0; j < n - i; j++) {
            ligne += '&nbsp;';
        }

        for (var k = 0; k < 2 * i - 1; k++) {
            ligne += '*';
        }
        pyramide += ligne + "<br>";
    }
    document.getElementById("pyra").innerHTML = pyramide;
}
