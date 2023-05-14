// TO Make Animation On The Name
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


// To Make The Year Copyrights
let footerTitle = document.getElementsByClassName("footer-title")[0]
day = new Date()
year = day.getFullYear()
footerTitle.innerHTML = ` copyright ${year} @ <span > Mohamed Emad </span>`



// Make A button to up
var scroll = document.getElementsByClassName("scroll")[0]
window.onscroll=function(){
    if(window.scrollY >= 600){
       scroll.style.display = "block"
    }else {
        scroll.style.display = "none"

    }
}
scroll.onclick = function (){
    window.scrollTo({
        left:0,
        top :0,
        behavior:"smooth"
    });
}