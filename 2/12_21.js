const num=document.getElementById("num");
const chooseNum=document.getElementById("chooseNum");
const Form=document.getElementById("RanNumGameForm");
const endText=document.querySelector("#RanNumGameForm #choose");
const setText=document.querySelector("#setText");

function submit(event){
    const MACHINE_NUM=Math.ceil(Math.random()*num.value);
    localStorage.setItem("machineNum", MACHINE_NUM);
    localStorage.setItem("choseNum",chooseNum.value);
    event.preventDefault();

    guess=parseInt(localStorage.getItem("machineNum"));
    right=parseInt(localStorage.getItem("choseNum"));


    endText.innerText=`your choose : ${right} the machine chose : ${guess}.`;

    if(right===guess){
        setText.innerText="You won!";
    }else{
        setText.innerText="You lost!";
    }
}




Form.addEventListener("submit",submit);