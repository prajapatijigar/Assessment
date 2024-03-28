
(function(){
  let num = document.querySelectorAll(".number");
  let inpDisplay = document.getElementById("inp");
  let equalButton = document.querySelector(".equal");
  let operatorButtons = document.querySelectorAll(".operator");
  let deleteButton = document.querySelector(".delete");
  let inpBtnTwo = document.getElementById("inpTwo");
  
  console.log(inpBtnTwo);
  
  deleteButton.addEventListener("click", () => {
    inpDisplay.value = inpDisplay.value.slice(0, -1);
  });
  
  equalButton.addEventListener("click", () => {
     try {
      inpBtnTwo.value = eval(inpDisplay.value);
      
     } catch (error) {
         inpDisplay.value = 'error'
     }
  });
  
  operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target.innerText);
      inpDisplay.value += e.target.innerText;
    });
  });
  
  num.forEach((button) => {
    button.addEventListener("click", (e) => {
      inpDisplay.value += e.target.innerText;
    });
  });
  
})()