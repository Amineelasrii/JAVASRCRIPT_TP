
// Example 1:
function exx0() {
    let num = document.getElementById("exercice1").value;
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    document.getElementById("exer").innerText = "Reverse: " + reversed;
}


// Example 2: 
function exx2() {
    var str = document.getElementById("sec").value;
    var ft = str.split('').sort().join('');
    document.getElementById("c").value = ft;
}


// Exercise 3:
function exx3() {
    var str = document.getElementById("chainee").value;
    var output = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    document.getElementById("pyr").innerHTML = output;
}


// Exercise 4:
function exx4() {
    var str = document.getElementById("chain").value;
    const words = str.split(' ');
    let longestWord = "";
    for (const word of words) {
        if (word.length) {
            longestWord = word;
        }
    }
    document.getElementById("longestWord").innerHTML = longestWord;
}
