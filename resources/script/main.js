/*const formElement=document.getElementById("myForm");
let arr=[];
function translator(evt){
    evt.preventDefault();
const value=document.getElementById("myInput").value;
arr=value.split(" ");
console.log(arr);
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        
       vocals=(arr[i][j].join("")).match(/[aeiou]/gi) ;
    }
}
 return alert(vocals); 
}

formElement.addEventListener("submit", translator);*/
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
