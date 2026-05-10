let kgRef = document.getElementById("kg");
let cmRef = document.getElementById("cm");
let feetRef = document.getElementById("feet");
let inchRef = document.getElementById("inch");
let bmiValueRef = document.getElementById("bmi-value");
let bmiCategoryRef = document.getElementById("bmi-category");
let heightTypeRadios = document.querySelectorAll('input[name="height-type"]');

let getHeightInMeters = () => {
  let heightType = document.querySelector('input[name="height-type"]:checked').value;
  
  if (heightType === "cm") {
    let cm = parseFloat(cmRef.value);
    return cm > 0 ? cm / 100 : null;
  } else {
    let feet = parseFloat(feetRef.value);
    let inch = parseFloat(inchRef.value);
    if (feet > 0 || inch > 0) {
      let totalInches = (feet || 0) * 12 + (inch || 0);
      return totalInches > 0 ? totalInches * 0.0254 : null;
    }
    return null;
  }
};

let calculateBMI = () => {
  let kg = parseFloat(kgRef.value);
  let heightInMeters = getHeightInMeters();
  
  if (kg > 0 && heightInMeters) {
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

// Toggle height input method
heightTypeRadios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    let cmWrapper = document.getElementById("cm-wrapper");
    let feetInchWrapper = document.getElementById("feet-inch-wrapper");
    let buttonLabels = document.querySelectorAll('.button-label');
    
    // Update button styles
    buttonLabels.forEach(label => {
      label.classList.remove('active');
    });
    document.querySelector(`label[for="${e.target.id}"]`).classList.add('active');
    
    if (e.target.value === "cm") {
      cmWrapper.style.display = "block";
      feetInchWrapper.style.display = "none";
      cmRef.value = "";
      feetRef.value = "";
      inchRef.value = "";
    } else {
      cmWrapper.style.display = "none";
      feetInchWrapper.style.display = "block";
      cmRef.value = "";
      feetRef.value = "";
      inchRef.value = "";
    }
    calculateBMI();
  });
});

kgRef.addEventListener("input", calculateBMI);
cmRef.addEventListener("input", calculateBMI);
feetRef.addEventListener("input", calculateBMI);
inchRef.addEventListener("input", calculateBMI);
