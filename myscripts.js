let count2_1 = 0;
let count2_2 = 0;
let count2_3 = 0;
let count2_4= 0;
  function increaseCount1(buttonNumber1) {
    if ((buttonNumber1 === 1)){
      count2_1++;
      document.getElementById('counter_1').innerText = count2_1;
    }
      if ((buttonNumber1 === 2)){
      count2_2++;
      document.getElementById('counter_2').innerText = count2_2;
      
}
      if ((buttonNumber1 === 3)){
      count2_3++;
      document.getElementById('counter_3').innerText = count2_3;
      
}

      if ((buttonNumber1 === 4)){
      count2_4++;
      document.getElementById('counter_4').innerText = count2_4;
      
}
console.log(buttonNumber1.id)
    const allbtn = document.querySelectorAll('.card__btn');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
        if(buttonNumber1.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
         });
  }     


 let count1 = 0;
 let count1_2 =0;
 let count1_3 =0;
 let count1_4 =0;
  function increaseCount(buttonNumber) {
    if ((buttonNumber === 1)){
      count1++;
      document.getElementById('counter1_1').innerText = count1;
    }
      if ((buttonNumber === 2)){
      count1_2++;
      document.getElementById('counter1_2').innerText = count1_2;
      
}
      if ((buttonNumber === 3)){
      count1_3++;
      document.getElementById('counter1_3').innerText = count1_3;
      
}

      if ((buttonNumber === 4)){
      count1_4++;
      document.getElementById('counter1_4').innerText = count1_4;
      
}
console.log(buttonNumber.id)
    const allbtn = document.querySelectorAll('.card__btn1');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
        if(buttonNumber.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
      });
}
