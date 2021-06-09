const circle = document.getElementById("circle");
const object = document.getElementById("object");
const time = document.getElementById("time");
const array = document.getElementById("array");
const country={
    korea:'한국',
    japen: '일본',
    china: '중국'
};
const color= ['red','orange','yellow','green','skyblue','blue','purple'];
let radius = 5;
let pi = 3.141592;
let date;
let hours;
let i = 0;

setInterval(1000,date = new Date());
setInterval(1000,hours = date.getHours());

circle.addEventListener("click",function(){
    alert("반지름 "+radius+"의 원의 둘레는 "+2*radius*pi+"이다.");
});

object.addEventListener("click",function(){
    for(let j in country){
        alert(j + ' : ' + country[j]);
    }
});

time.addEventListener("click",function(){
    if(hours<12)
        alert("오전입니다.");
    else
        alert("오후입니다.");
});

array.addEventListener("click",function(){
    array.style.color = color[i];
    i++;
    if(i > 6)
    i = 0;
});