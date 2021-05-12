var flg1=false, flg2=false, flg3=false;
var rand1 = Math.floor(Math.random() * 10);
var rand2 = Math.floor(Math.random() * 10);
var rand3 = Math.floor(Math.random() * 10);

function StartButtonClick(){
    flag1=false, flag2=false, flag3=false;
}

function StopButtonClick1(){
    flag1=true;
    rand1 = Math.floor(Math.random() * 10);
    StopChecker();
}
function StopButtonClick2(){
    flag2=true;
    rand2 = Math.floor(Math.random() * 10);
    StopChecker();
}
function StopButtonClick3(){
    flag3=true;
    rand3 = Math.floor(Math.random() * 10);
    StopChecker();
}

function StopChecker(){
    if(!((flag1 == flag2) && (flag1== flag3))){
        return;
    }
    if((rand1 == rand2) && (rand1 == rand3)){
        alert("あたり");
    }
    else{
        alert("はずれ");
    }
}