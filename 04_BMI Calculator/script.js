let kgRef = document.getElementById("kg");
let cmRef = document.getElementById("cm");
let feetRef = document.getElementById("feet");
let inchRef = document.getElementById("inch");
let bmiValueRef = document.getElementById("bmi-value");
let bmiCategoryRef = document.getElementById("bmi-category");
let idealWeightRef = document.getElementById("ideal-weight");
let healthTipsRef = document.getElementById("health-tips");
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

let calculateIdealWeight = (heightInMeters) => {
  let minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  let maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
  return { min: minWeight, max: maxWeight };
};

let getHealthTips = (bmi) => {
  if (bmi < 18.5) {
    return "• Increase calorie intake with nutritious foods \n• Add protein-rich meals such as eggs, fish, chicken, milk, and nuts \n• Maintain a regular meal schedule \n• Include strength training exercises \n• Stay hydrated and sleep properly";
  } else if (bmi < 25) {
    return "• Maintain a balanced diet \n• Continue regular physical activity \n• Avoid excessive processed foods and sugary drinks \n• Monitor weight periodically \n• Maintain healthy sleep and hydration habits";
  } else if (bmi < 30) {
    return "• Reduce high-calorie and oily foods \n• Increase daily physical activity \n• Focus on portion control \n• Include more vegetables, fruits, and lean protein \n• Maintain a consistent exercise routine";
  } else {
    return "• Follow a structured healthy diet plan \n• Perform regular cardio and physical exercise \n• Avoid sugary beverages and junk food \n• Monitor weight and lifestyle habits regularly n• Consider consulting a healthcare professional for personalized guidance";
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
    
    // Calculate and display ideal weight range
    let idealWeight = calculateIdealWeight(heightInMeters);
    idealWeightRef.textContent = `${idealWeight.min} kg - ${idealWeight.max} kg`;
    
    // Display health tips
    healthTipsRef.textContent = getHealthTips(parseFloat(bmi));
  } else {
    bmiValueRef.textContent = "--";
    bmiCategoryRef.className = "";
    bmiCategoryRef.textContent = "Enter your details";
    idealWeightRef.textContent = "--";
    healthTipsRef.textContent = "Enter your details to see personalized tips";
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
