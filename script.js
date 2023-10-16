
let $team1Score=document.getElementById("team1-score");
let $team2Score=document.getElementById("team2-score");
let $team1Wickets=document.getElementById("team1-wickets");
let $team2Wickets=document.getElementById("team2-wickets");
let $team1Balls=document.querySelectorAll("#team1-superover>.ball");
let $team2Balls=document.querySelectorAll("#team2-superover>.ball");

let possibleOutcomesArr=[0,1,2,3,4,6,"W"];
let turn=1;
let team1Score=0;
let team2Score=0;
let team1Wickets=0;
let team2Wickets=0;
let ballFacedByTeam1=0;
let ballFacedByTeam2=0;
let i=0;
let j=0;

let strikeAudio= new Audio("http://bit.ly/so-ball-hit");
let gameoverAudio= new Audio("http://bit.ly/so-crowd-cheer");

function play(){
    
    strikeAudio.pause();
    strikeAudio.currentTime=0;
    strikeAudio.play();

    let reandomNo=Math.floor(Math.random()*possibleOutcomesArr.length);
    let outcome=possibleOutcomesArr[reandomNo];
    
    console.log(turn,i)
        
    if(turn==1){

        ballFacedByTeam1++;
        $team1Balls[i].innerText=outcome

        if(outcome=="W"){
            team1Wickets++;
            $team1Wickets.textContent=team1Wickets;
            
        }else{
            team1Score=team1Score+outcome;
            $team1Score.textContent=team1Score;
            
        }

        i++;


        if(ballFacedByTeam1==6 || team1Wickets==2){
            turn=2;
        }
    }

    else if(turn==2){

        ballFacedByTeam2++;
        $team2Balls[j].innerText=outcome

        if(outcome=="W"){
            team2Wickets++;
            $team2Wickets.textContent=team2Wickets;
            
        }else{
            team2Score=team2Score+outcome;
            $team2Score.textContent=team2Score;
            
        }

        j++;
        

        if(ballFacedByTeam2==6 || team2Wickets==2 || team2Score>team1Score){
            gameover()
        }

    
    }

}

function gameover(){



    gameoverAudio.play();
    setTimeout(()=>{
        if(team1Score>team2Score){
            alert("India wins...!!!")
        }else if(team1Score<team2Score){
            alert("Pak wins...!!!")
        }else{
            alert("DRAW! It is next superover")
        }
       },1000)

}
   

function reset(){
    window.location.reload();
}
