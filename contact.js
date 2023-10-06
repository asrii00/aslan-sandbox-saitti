// are you human choice doesn't get checked atm

const marryCheckBox = document.getElementById('marry');
const netWorthBox = document.getElementById('netWorthBox');
const incomeBox = document.getElementById('incomeBox');


function validateForm() {
    let x = document.forms["form1"]["fname"].value;
    let y = document.forms["form1"]["lname"].value;
    let humannessInput = document.querySelector(
        'input[name="real"]:checked');

    if (x == "" || y == "") {
        alert("Please include your full name.");
        return false;
    }
    else {
        let z = document.getElementById("email").value;
        if (!z.includes('@') || !z.includes('.') || (z.length < 5)) {
            alert("Please include a valid email.")
            return false;
        }
        else {
            let a = document.forms["form1"]["details"].value;
            if (a.length < 15) {
                alert("Please include your preferred date and location.")
                return false;
            }
            else {
                if (!humannessInput) {
                    alert("Please confirm whether you are a human or something else.")
                    return false;
                }
            }
        }

    }
}

marryCheckBox.addEventListener('change', (event) => { 
    if (event.currentTarget.checked) {
        document.getElementById("marryForMoney").style.display = "inline"

    } else {
        document.getElementById("marryForMoney").style.display = "none"

    }
})

netWorthBox.addEventListener('change', netWorthChecker);
incomeBox.addEventListener('change', incomeChecker);
netWorthBox.addEventListener('blur', netWorthChecker);
incomeBox.addEventListener('blur', incomeChecker);
incomeBox.addEventListener('focus', netWorthChecker);


function netWorthChecker() {


    let x = document.getElementById("netWorthBox").value;
    let text;
    if (x == "") {
        let x = document.getElementById("incomeGuide").style.display = "block";
        text = "Please enter a value";
    }
    else if (isNaN(x)) {
        let x = document.getElementById("networthGuide").style.display = "block";
        text = "Please enter numbers only.";
    } else if (x < 800000) {
        text = "You are too poor. Please reconsider the intention to marry me.";
    }
    else {
        text = "";
    }
    document.getElementById("networthGuide").innerHTML = text;

}


function incomeChecker() {

    let x = document.getElementById("incomeBox").value;
    let text;
    if (x == "") {
        let x = document.getElementById("incomeGuide").style.display = "block";
        text = "Please enter a value";

    }
    else if (isNaN(x)) {
        let x = document.getElementById("incomeGuide").style.display = "block";
        text = "Please enter numbers only.";
    }
    else if (x < 120000) {
        text = "You don't make enough money. Please reconsider the intention to marry me.";
    }
    else {
        text = "";
    }
    document.getElementById("incomeGuide").innerHTML = text;
}

