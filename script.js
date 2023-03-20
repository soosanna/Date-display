var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");

var button=document.createElement("button");
button.innerHTML="Display date";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydate);
var div=document.createElement("div");
div.setAttribute("id","display");




function displaydate(){
    var input=document.getElementById("dob").value;
    console.log(input);
    if(Date.parse(input)){
        var inputdate=new Date(input);
        console.log(inputdate);
        var currentdate=new Date();
        console.log(currentdate);
        var millisecdiff=currentdate.getTime()-inputdate.getTime();
        console.log(millisecdiff);
        var secondsdiff=mathfloor(millisecdiff,1000);
        console.log(secondsdiff);
        //Minutes diff
        var minutesdiff=mathfloor(secondsdiff,60);
        console.log(minutesdiff);
        //Hours diff
        var hoursdiff=mathfloor(minutesdiff,60);
        console.log(hoursdiff);
        //day diff
        var daydiff=mathfloor(hoursdiff,24);
        console.log(daydiff);
        //year diff
        var yeardiff=getyears(inputdate,currentdate);
        console.log(yeardiff);
        //months diff
        var monthdiff=getmonths(inputdate,currentdate);
        console.log(monthdiff);
        div.innerHTML=`
Given Input date is ${input}<br>
Year ${yeardiff}<br>
months ${monthdiff}<br>
days ${daydiff} <br>
hour ${hoursdiff} <br>
minute ${minutesdiff} <br>
second ${secondsdiff} <br>
milli sec ${millisecdiff}<br>
`;
    

    }
else{
    console.log("invalid input entered");
}
}


function mathfloor(value1,value2){
return Math.floor(value1/value2);
}

function getyears(value1,value2){
var d1=new Date(value1);
var d2=new Date(value2);
return d2.getFullYear()-d1.getFullYear();
}


function getmonths(value1,value2){
    var year=getyears(value1,value2);
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}


document.body.append(input,button,div);