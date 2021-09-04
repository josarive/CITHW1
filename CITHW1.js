const equation = (MPG,MPY,COST)=>{
  let ele=document.createElement("div");
  let step1=MPY / MPG;
  let step2=step1 * COST;
  ele.innerHTML="To drive a car with a MPG of "+MPG+" for "+MPY+" miles at $"+COST+" per gallon it would cost $"+step2;
  document.body.querySelector(".box").appendChild(ele);

}

let MPY=Number(prompt("What is the estimated miles per year driven?"))
let COST=Number(prompt("What is the current cost of gas per gallon?"))

equation(12,MPY,COST);
equation(17,MPY,COST);
equation(26,MPY,COST);
equation(29,MPY,COST);