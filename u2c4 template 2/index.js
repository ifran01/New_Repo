// write js code here corresponding to index.html
// You should add submit event on the form

var alldata=[]
var data=document.querySelector("form");
data=addEventListener("submit",function(){
    event.preventDefault();
    var obj={};

    var MatchNumber=document.querySelector("#matchNum").value;
    var teamA=document.querySelector("#teamA").value;
    var teamB=document.querySelector("#teamB").value;
    var date=document.querySelector("#date").value;
    var ven=document.querySelector("#venue").value;
    
    obj.matchnum=MatchNumber
    obj.team1=teamA
    obj.team2=teamB
    obj.date=date
    obj.venue=ven

    alldata.push(obj)
    console.log(alldata)

    localStorage.setItem("schedule",JSON.stringify(alldata))

})
