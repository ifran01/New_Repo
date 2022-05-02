// write js code here corresponding to matches.html
var Match_sed= JSON.parse( localStorage.getItem("schedule")) || [];
// console.log(Match_sed)

Match_sed.forEach(function(ele){
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
     td1.innerText=ele.matchnum;

    var td2=document.createElement("td")
    td2.innerText=ele.team1;

    var td3=document.createElement("td")
    td3.innerText=ele.team2;

    var td4=document.createElement("td")
    td4.innerText=ele.date;

    var td5=document.createElement("td")
    td5.innerText=ele.venue;

    var td6=document.createElement("button")
    td6.innerText="Favourite";
   

    td6.style.backgroundColor="white"
    td6.style.border="none"
    td6.style.marginTop="10px"
    td6.style.color="green";
    tr.append(td1,td2,td3,td4,td5,td6)
    td6.addEventListener("click",function(){
        // adddata();
        localStorage.setItem("favourites",JSON.stringify(td6.parentNode));

    })

    // tr.append(td1,td2,td3,td4,td5,td6)
    // function adddata(){
    //     localStorage.setItem("favourites",JSON.stringify(tr));
    // }

    document.querySelector("tbody").append(tr)

    // console.log(td1,td2,td3,td4,td5,td6)

})