// write js code here corresponding to favourites.html
var favdata= JSON.parse(localStorage.getItem("favourites"));
console.log(favdata)
// fav_data.forEach(function(){})
// favdata.forEach(function(ele){
//     var tr=document.createElement("tr");

//     var td1=document.createElement("td");
//      td1.innerText=ele.matchnum;

//     var td2=document.createElement("td")
//     td2.innerText=ele.team1;

//     var td3=document.createElement("td")
//     td3.innerText=ele.team2;

//     var td4=document.createElement("td")
//     td4.innerText=ele.date;

//     var td5=document.createElement("td")
//     td5.innerText=ele.venue;

//     var td6=document.createElement("button")
//     td6.innerText="remove";
//     td6.style.color="red";
//      td6.addEventListener("button",function(){ 

//       });

//     tr.append(td1,td2,td3,td4,td5,td6)

//     document.querySelector("tbody").append(tr)

//     console.log(td1,td2,td3,td4,td5,td6)

// })