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
          var audio = document.getElementById("myAudio");
    audio.play();
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
        var audio = document.getElementById("myAudio");
    audio.play();
        if(buttonNumber.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
      });
}


let count2_11 = 0;
let count2_22= 0;
let count2_33 = 0;
let count2_44= 0;
  function SportsCaptain(buttonNumber3) {
    if ((buttonNumber3 === 1)){
      count2_11++;
      document.getElementById('sport1_1').innerText = count2_11;
    }
      if ((buttonNumber3 === 2)){
      count2_22++;
      document.getElementById('sport1_2').innerText = count2_22;
      
}
      if ((buttonNumber3 === 3)){
      count2_33++;
      document.getElementById('sport1_3').innerText = count2_33;
      
}
      if ((buttonNumber3 === 4)){
      count2_44++;
      document.getElementById('sport1_4').innerText = count2_44;
      
}
console.log(buttonNumber3.id)
    const allbtn = document.querySelectorAll('.card__btn2');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
          var audio = document.getElementById("myAudio");
    audio.play();
        if(buttonNumber3.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
         });
  }     


  let count21 = 0;
let count22= 0;
let count23 = 0;
let count24= 0;
  function Vice(buttonNumber4) {
    if ((buttonNumber4 === 1)){
      count21++;
      document.getElementById('Vice1_1').innerText = count21;
    }
      if ((buttonNumber4 === 2)){
      count22++;
      document.getElementById('Vice1_2').innerText = count22;
      
}
      if ((buttonNumber4 === 3)){
      count23++;
      document.getElementById('Vice1_3').innerText = count23;
      
}
      if ((buttonNumber4 === 4)){
      count24++;
      document.getElementById('Vice1_4').innerText = count24;
      
}
console.log(buttonNumber4.id)
    const allbtn = document.querySelectorAll('.card__btn4');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
          var audio = document.getElementById("myAudio");
    audio.play();
        if(buttonNumber4.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
         });
  }     

  let countp_1 = 0;
let countp_2= 0;
let countp_3= 0;
let countp_4= 0;
  function Pupil(buttonNumber5) {
    if ((buttonNumber5 === 1)){
      countp_1++;
      document.getElementById('Pupil1_1').innerText = countp_1;
    }
      if ((buttonNumber5 === 2)){
      countp_1++;
      document.getElementById('Pupil1_2').innerText = countp_1;
      
}
      if ((buttonNumber5 === 3)){
      countp_1++;
      document.getElementById('Pupil1_3').innerText = countp_1;
      
}
      if ((buttonNumber5 === 4)){
      countp_1++;
      document.getElementById('Pupil1_4').innerText = countp_1;
      
}
console.log(buttonNumber5.id)
    const allbtn = document.querySelectorAll('.card__btn5');
    console.log(allbtn)
    allbtn.forEach((buttonInfo,index)=>{
        console.log(buttonInfo .id)
          var audio = document.getElementById("myAudio");
    audio.play();
        if(buttonNumber5.id !== buttonInfo.id){ 
            buttonInfo.disabled =true;
        }
         });
  }     

 