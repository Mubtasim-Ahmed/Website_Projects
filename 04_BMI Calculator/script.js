let kgRef = document.getElementById("kg");
let cmRef = document.getElementById("cm");
let bmiValueRef = document.getElementById("bmi-value");
let bmiCategoryRef = document.getElementById("bmi-category");

let calculateBMI = () => {
  let kg = parseFloat(kgRef.value);
  let cm = parseFloat(cmRef.value);
  
  if (kg > 0 && cm > 0) {
    let heightInMeters = cm / 100;
    let bmi = (kg / (heightInMeters * heightInMeters)).toFixed(1);
    bmiValueRef.textContent = bmi;
    
    // Remove all category classes
    bmiCategoryRef.className = "";
    
    // Update category based on BMI value
    if (bmi < 18.5) {
      bmiCategoryRef.textContent = "Underweight";
      bmiCategoryRef.classList.add("category-underweight");
    } else if (bmi < 25) {
      bmiCategoryRef.textContent = "Normal Weight";
      bmiCategoryRef.classList.add("category-normal");
    } else if (bmi < 30) {
      bmiCategoryRef.textContent = "Overweight";
      bmiCategoryRef.classList.add("category-overweight");
    } else {
      bmiCategoryRef.textContent = "Obese";
      bmiCategoryRef.classList.add("category-obese");
    }
  } else {
    bmiValueRef.textContent = "--";
    bmiCategoryRef.className = "";
    bmiCategoryRef.textContent = "Enter your details";
  }
};

kgRef.addEventListener("input", calculateBMI);
cmRef.addEventListener("input", calculateBMI);
