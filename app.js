const button = document.getElementById("button")
const themeBtn = document.getElementById("theme-btn")
const range = document.getElementById("range")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")
const charLength = document.getElementById("char-length")

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbersArray = [0,1,2,3,4,5,6,7,8,9]
const symbolsArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?"]

button.addEventListener("click", function() {
        document.getElementById("secondary-items").style.display = "block"
        document.getElementById("secondary-items").innerHTML = `
        <div class="password">get ready</div>`
        inputChange()

        setTimeout(() => {
            document.getElementById("secondary-items").innerHTML = `
        <div class="password">get ready.</div>`
        }, 750);

        setTimeout(() => {
            document.getElementById("secondary-items").innerHTML = `
        <div class="password">get ready..</div>`
        }, 1500);

        setTimeout(() => {
            document.getElementById("secondary-items").innerHTML = `
        <div class="password">get ready...</div>`
        }, 2250);


        setTimeout(() => {
            document.getElementById("secondary-items").innerHTML = `
        <div id="password-id" onclick="copyElementText(this.id)" class="password color">${generate()}</div>`
        }, 3000);

        setTimeout(() => {
            document.getElementById("secondary-items").style.display = "none"
            inputChange()
            symbols.checked = false
            numbers.checked = false
        }, 10000);
})

document.getElementById("range").addEventListener("input", function() {
    charLength.innerHTML = document.getElementById("range").value
})

function getRandomNum(arr) {
    return Math.floor(Math.random() * arr.length)
}

function generate() {
    const rangeVal = range.value
    let array = []

    for (let i=0; i<rangeVal; i++) {
       array.push(alphabet[getRandomNum(alphabet)])
    }
    let string = array.join('')

    if (numbers.checked && symbols.checked) {
        return string.charAt(0).toUpperCase() + string.slice(1) + generateNumbers() + generateSymbols()
    } else if (symbols.checked) {
        return string.charAt(0).toUpperCase() + string.slice(1) + generateSymbols() 
    } else if (numbers.checked) {
        return string.charAt(0).toUpperCase() + string.slice(1) + generateNumbers()
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }  
}

function generateNumbers() {
    let array = [] 
    for (let i=0; i<4; i++) {
        array.push(numbersArray[getRandomNum(numbersArray)])
     }
     return array.join('')

}

function generateSymbols() {
    let array = [] 
    for (let i=0; i<2; i++) {
        array.push(symbolsArray[getRandomNum(symbolsArray)])
     }
     return array.join('')
}

function inputChange() {
        button.disabled = !button.disabled 
        range.disabled = !range.disabled
        numbers.disabled = !numbers.disabled
        symbols.disabled = !symbols.disabled
}


function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}









