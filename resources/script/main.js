
const formElement = document.getElementById("myForm");

function translator(evt) {
    evt.preventDefault();

    const value = document.getElementById("myInput").value;
    const word = value.toLowerCase();
    const vocales = [];
    const vowels=["a","e","i","o","u"];

    for (let i = 0; i < word.length; i++) {
            if(word[i]==="e"|| word[i]==="u"){
                vocales.push(word[i]);
            }
        
        for (let j = 0; j < vowels.length; j++) {
            if(word[i]===vowels[j]){
                vocales.push(word[i]);
            }

           
        }
    }


    alert("The whales says: " + (vocales.join("")).toUpperCase());
}

formElement.addEventListener("submit", translator);
