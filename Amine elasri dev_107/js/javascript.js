let user = [];

function attrib(nom, Prenom, CINx, Emailx, passwordx,date) {
    this.Nomc = nom;
    this.Prenomc = Prenom;
    this.CINc = CINx;
    this.Emailc = Emailx;
    this.passwordc = passwordx;
    this.date = date;
}

function removeAllRows() {
    let table = document.getElementById("table");
    let rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

let afficher = function (uti) {
    user.push(uti)
    user.sort((a, b) => a.Nomc.localeCompare(b.Nomc));
    let table = document.getElementById("table");
    user.forEach(element => {
        let data = Object.values(element);
        let tr = document.createElement("tr");
        tr.id = `tr${data[2]}`
        for (let i = 0; i < data.length; i++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(data[i]));
            tr.appendChild(td);
        }
        
        let btn = document.createElement("button")
        btn.id = `S${data[2]}`
        btn.className = "suprimer"
        btn.appendChild(document.createTextNode("supremer"))
        btn.onclick = function () {
            let rowId = `tr${this.id.slice(1)}`;
            let result = confirm("confermation de suprimer");
            if (result === true) {
                let row = document.getElementById(rowId);
                row.remove();
                user = user.filter(item => item.CINc !== this.id.slice(1));
                document.getElementById("nb").innerHTML = `le nombre des user est ${user.length}`
            }
        };
        tr.appendChild(btn)
        let btn2 = document.createElement("button")
        btn2.id = `M${data[2]}`
        btn2.className = "modifier"
        btn2.appendChild(document.createTextNode("modifier"))
        btn2.onclick = function () {
            let rowId = `tr${this.id.slice(1)}`;
            let row = document.getElementById(rowId);
            row.remove();
            user = user.filter(item => item.CINc !== this.id.slice(1));
            let lisr = getinfor()
            lisr[0].value = data[0]
            lisr[1].value = data[1]
            lisr[2].value = data[2]
            lisr[3].value = data[3]
            lisr[4].value = data[4]
            lisr[5] = ""
            document.getElementById("nb").innerHTML = `le nombre des user est ${user.length}`
            
        };
        tr.appendChild(btn2)
        table.appendChild(tr);
        console.log(user)
    });
}

let sh = document.getElementById("check");
let pass13 = document.getElementById("pass1");
let pass2 = document.getElementById("Pass2");
sh.onclick = () => {
    if (sh.checked) {
        pass13.type = "text";
        pass2.type = "text";
    } else {
        pass13.type = "password";
        pass2.type = "password";
    }
};
function getinfor(){
    let Nom = document.getElementById('Nom');
    let Prenom = document.getElementById('Prenom');
    let CIN = document.getElementById('CIN');
    let Email = document.getElementById('Email');
    return [Nom, Prenom, CIN, Email, pass13, pass2]
}
function getInfo() {
    let lisr = getinfor()

    let Nom = lisr[0].value;
    let Prenom = lisr[1].value;
    let CIN = lisr[2].value;
    let Email = lisr[3].value;
    let pass1 = lisr[4].value;
        if (pass13.value === pass2.value) {
                let currentDate = new Date().toISOString().slice(0, 10);
                let call = new attrib(Nom, Prenom, CIN, Email, pass1, currentDate);
                removeAllRows();
                afficher(call);
                document.getElementById("nb").innerHTML = `le nombre des user est ${user.length}`
        }
    }

let inputCreated = false;
        function createInputAndButton() {
            if (!inputCreated) {
                let input = document.createElement('input');
                input.className = "form-control"
                input.type = 'file';
                input.accept = '.json';
                let button = document.createElement('button');
                button.className = "button-3" 
                button.textContent = 'Read JSON';
                button.onclick = readJSON;
                let br = document.createElement("br")
                let div = document.getElementById("ff")
                div.appendChild(input);
                div.appendChild(br)
                div.appendChild(button);

                inputCreated = true;
            }
        }

