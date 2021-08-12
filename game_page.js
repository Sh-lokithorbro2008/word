var player_1_name=localStorage.getItem("player1name");
var player_2_name=localStorage.getItem("player2name");
var player_1_score=0;
var player_2_score=0;
var question="";
var question_turn="player1";
var answer_turn="player2";

document.getElementById("player_1_name").innerHTML=player_1_name;
document.getElementById("player_2_name").innerHTML=player_2_name;
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML=player_1_name;
document.getElementById("player_answer").innerHTML=player_2_name;

function send()
{
    question=document.getElementById("word").value;
    word=question.toLowerCase();

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2)
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length - 1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);
    
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log("charAt3");

    document.getElementById("output").innerHTML="<h2>Q. " + remove_charAt3 + "</h2>" + "<br>" + "A. <input type='text' id='answer' placeholder='answer here' class='form-control'>" + "<br>" + "<button onclick='check()' class='btn btn-info'>CHECK</button>";
    document.getElementById("word").value=" ";
}

function check()
{
    get_answer=document.getElementById("answer").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case- " + answer);
    if(answer==word)
    {
        if(answer_turn=="player1")
        {
            player_1_score=player_1_score + 1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
        }
        else
        {
            player_2_score=player_2_score + 1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
        }
    }

    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn- " + player_2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn- " + player_1_name;
    }

    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn- " + player_2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn- " + player_1_name;
    }

    document.getElementById("output").innerHTML=" "
}