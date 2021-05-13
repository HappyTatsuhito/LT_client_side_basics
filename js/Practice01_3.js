var flg1=false, flg2=false, flg3=false;
var rand1 = Math.floor(Math.random() * 10);
var rand2 = Math.floor(Math.random() * 10);
var rand3 = Math.floor(Math.random() * 10);
var arrChangeCnt = new Array();
var intervalID;

function StartButtonClick(){
    flag1=false, flag2=false, flag3=false;
    arrChangeCnt.push(intervalID = setInterval(RandomSlot, 100));
}

function RandomSlot(){
    if(!flag1){
        rand1 = Math.floor(Math.random() * 10);
        innerRand1.innerHTML = rand1;
    }
    if(!flag2){
        rand2 = Math.floor(Math.random() * 10);
        innerRand2.innerHTML = rand2;
    }
    if(!flag3){
        rand3 = Math.floor(Math.random() * 10);
        innerRand3.innerHTML = rand3;
    }
}

function StopButtonClick1(){
    flag1=true;
    StopChecker();
}

function StopButtonClick2(){
    flag2=true;
    StopChecker();
}

function StopButtonClick3(){
    flag3=true;
    StopChecker();
}

function StopChecker(){
    if(!((flag1 == flag2) && (flag1== flag3))){
        return;
    }
    clearInterval(arrChangeCnt.shift());
    if((rand1 == rand2) && (rand1 == rand3)){
        alert("あたり");
    }
    else{
        alert("はずれ");
    }
}