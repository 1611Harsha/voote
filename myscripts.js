function disableButton(Buttonclicked){
    console.log(Buttonclicked.id)
    const allbtn = document.querySelectorAll('.card__btn');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
        if(Buttonclicked.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
    });
    for (let i = 1; i <= 4; i++) {
    let count = 0;
    document.getElementById(`b${i}`).addEventListener("click", function () {
        count++;
        document.getElementById(`counter_${i}`).innerText = count;
    });
}
}
function disableButton2(Buttonclicked1){
    console.log(Buttonclicked1.id)
    const allbtn = document.querySelectorAll('.card__btn1');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
        if(Buttonclicked1.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
    });
 for (let i = 1; i <= 4; i++) {
    let count = 0;
    document.getElementById(`v${i}`).addEventListener("click", function () {
        count++;
        document.getElementById(`counter1_${i}`).innerText = count;
    });
}
}
 