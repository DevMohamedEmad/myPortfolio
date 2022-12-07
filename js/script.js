let myName = document.getElementsByClassName("logo")[0]
p = "MOHAMED EMAD"
var i = 0
let x = setInterval(function(){
    if(i == p.length){
        myName.innerHTML =""
        i=0
    }else {
        myName.innerHTML = myName.innerHTML + p.charAt(i)
        i+=1
    }
} , 500)
