const frontPage=document.getElementById("frontPage");
const questionDisplay=document.getElementById("questionDisplay");
const finalScore=document.getElementById("finalScore");
const startButton=document.getElementById("startButton");
const questionStatment=document.getElementById("questionStatment");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const restartButton=document.getElementById("restartButton");
let currentAnswer=0;
let score=0;
let currentQuestion=1;
let remark1="You Answered";
let remark2="Correctly";



const questionlist=[
    {
        question: "Who is Spider-Man?",
        option1: "Obiwan Kanobi",
        option2: "Norman Osborn",
        option3: "J.Jonah Jameson",
        option4: "Unknown",
        answer: 4
    },
    {
        question: "What caused Multiverse of Madness?",
        option1: "Doctor Strange",
        option2: "Wanda Maximoff",
        option3: "Loki Odinson",
        option4: "He who remains",
        answer: 1
    },
    {
        question: "Is black panther alive?",
        option1: "Yes",
        option2: "No",
        option3: "Hell YEAH!!",
        option4: "Seriously?",
        answer: 4
    },
    {
        question: "What is the name of theors hammer?",
        option1: "Groot",
        option2: "Mjolnir",
        option3: "Thunder",
        option4: "Johnathan",
        answer: 4
    },
    {
        question: "What is the catch-phrase of Spider-man?",
        option1: "Friendly neighbourhood hero",
        option2: "Strongest Avenger",
        option3: "I am Batman",
        option4: "Weeeeee",
        answer: 4
    }
];

const onRestart=()=>{
    finalScore.style.display="none";
    frontPage.style.display="flex";
    score=0;
    currentQuestion=1;
}

restartButton.addEventListener("click", ()=>{
    onRestart();
})

startButton.addEventListener("click", ()=>{
    frontPage.style.display="none";
    questionDisplay.style.display="flex";
    questionStatment.innerHTML=questionlist[0].question;
    option1.innerHTML=questionlist[0].option1;
    option2.innerHTML=questionlist[0].option2;
    option3.innerHTML=questionlist[0].option3;
    option4.innerHTML=questionlist[0].option4;
    currentAnswer=questionlist[0].answer;

});

const onAnswerClick=(opt)=>{
    if(opt==currentAnswer){
        score=score+1;
        console.log("correct");
    }
    else{
        console.log("Wrong");
    }
    console.log(currentAnswer);
    questionStatment.innerHTML=questionlist[currentQuestion].question;
    option1.innerHTML=questionlist[currentQuestion].option1;
    option2.innerHTML=questionlist[currentQuestion].option2;
    option3.innerHTML=questionlist[currentQuestion].option3;
    option4.innerHTML=questionlist[currentQuestion].option4;
    currentAnswer=questionlist[currentQuestion].answer;
    currentQuestion++;


};

const onFinalAnswer=(opt)=>{
if(currentAnswer==opt){
    score=score+1;
    console.log("correct");
}
else{
    console.log("Wrong");
}

    finalScore.children[0].innerHTML=remark1.concat(" ", score, " ", remark2);
    if(score==1){
        finalScore.children[1].innerHTML="Huh! NOOB";
    }
    if(score==1){
        finalScore.children[1].innerHTML="GG NOOB";
    }
    if(score==2){
        finalScore.children[1].innerHTML="Apse Better Expect Kiye thhe";
    }
    if(score==3){
        finalScore.children[1].innerHTML="Good Job";
    }
    if(score==4){
        finalScore.children[1].innerHTML="Impressive";
    }
    if(score==5){
        finalScore.children[1].innerHTML="OP bhai, OP!!";
    }
};

option1.addEventListener("click", ()=>{
    if(currentQuestion>=5){
        questionDisplay.style.display="none";
        onFinalAnswer(1);
        finalScore.style.display="flex";
    }
    else{
        onAnswerClick(1);
    }
});

option2.addEventListener("click", ()=>{
    if(currentQuestion>=5){
        questionDisplay.style.display="none";
        onFinalAnswer(2);
        finalScore.style.display="flex";
    }
    else{
        onAnswerClick(2);
    }
});

option3.addEventListener("click", ()=>{
    if(currentQuestion>=5){
        questionDisplay.style.display="none";
        onFinalAnswer(3);
        finalScore.style.display="flex";
    }
    else{
        onAnswerClick(3);
    }
});

option4.addEventListener("click", ()=>{
    if(currentQuestion>=5){
        questionDisplay.style.display="none";
        onFinalAnswer(4);
        finalScore.style.display="flex";
    }
    else{
        onAnswerClick(4);
    }
});

