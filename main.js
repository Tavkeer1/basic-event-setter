const setting = document.querySelector("#SettingIcon");
const settingContent = document.querySelector('#settingsContent');
const dobDate = document.querySelector("#datedob");
const click =document.querySelector(".clk");
const eventStart =document.querySelector(".main2");
const setEvent =document.querySelector(".main");
let btn = document.querySelector("#dobbtn");
let reload = document.querySelector(".reload");



const year =document.getElementById("year");
const month =document.getElementById("Month");
const day =document.getElementById("days");
const hour =document.getElementById("hour");
const minute =document.getElementById("minute");
const second =document.getElementById("second");

// toggle from setting
click.addEventListener('click', ()=>{
    settingContent.classList.toggle("class")
})
// double digit
function makeTwoDigit(Digit){
    if(Digit<9){
        return "0"+Digit
    }else{
        return Digit
    }
}


// set event
btn.addEventListener('click', ()=>{
    settingContent.classList.toggle("class");
    setEvent.style.display="none";
    eventStart.style.display="initial";
    reload.style.display="block"



    setInterval(()=>{
        let two = dobDate.value
            var diff =  Date.parse(two) - Date.now() ;
           

        var seconds = Math.floor(diff / 1000),
            minutes = Math.floor(seconds / 60),
            hours   = Math.floor(minutes / 60),
            days    = Math.floor(hours / 24);
            months  = Math.floor(days / 30),
            years   = Math.floor(days / 365);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;
        days %= 30;
        months %= 12;
       
        year.textContent=makeTwoDigit(years);
        month.textContent=makeTwoDigit(months);
        day.textContent=makeTwoDigit(days);
        hour.textContent=makeTwoDigit(hours);
        minute.textContent=makeTwoDigit(minutes);
        second.textContent=makeTwoDigit(seconds);
        


    },1000)

})



reload.addEventListener("click",()=>{
    location.reload()
})