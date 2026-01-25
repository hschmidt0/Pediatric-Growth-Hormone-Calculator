//When HTML loaded initially
document.addEventListener("DOMContentLoaded", (event) => {
  // Add actions "eventListeners" to the elements that trigger the calculations
  document
    .getElementById("weightInput")
    .addEventListener("input", runCalculations);
  document
    .getElementById("doseSchedule")
    .addEventListener("change", runCalculations);
  document
    .getElementById("indication")
    .addEventListener("change", runCalculations);
  document
    .getElementById("want-weekly-product")
    .addEventListener("input", runCalculations);
});

function switchTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
//Calculator function
function runCalculations(event) {
  const dosageNote= document.getElementById("dosage-note");
  dosageNote.style.display = "none";
  dosageNote.setAttribute (`style`, `white-space: pre;`);
  const weightInput = document.getElementById("weightInput");
  const doseScheduleSelect = document.getElementById("doseSchedule");
  const indicationSelect = document.getElementById("indication");
  const resultsTable = document.getElementById("results-table");

  
  const weightInKg = parseFloat(weightInput.value);
  const doseSchedule = parseInt(doseScheduleSelect.value);
  const indication = parseInt(indicationSelect.value);

  // Ensure that the weightInKg is a number. Does not show or deletes wrong inputs
  if (isNaN(weightInKg)) {
    if (weightInput.value !== "") alert("Numeric values only");

    weightInput.value = "";
    resultsTable.style.display = "none";
    gmdWeeklyProductRow.style.display = "none";
    return;
  }
  //When first opening the calculator, the table will not show
  resultsTable.style.display = "";
  let lowerGuidelineFactor = 0.0;
  let upperGuidelineFactor = 0.0;
  let lowerGenotropinFactor = 0.0;
  let upperGenotropinFactor = 0.0;
  let lowerHumatropeFactor = 0.0;
  let upperHumatropeFactor = 0.0;
  let lowerOmnitropeFactor = 0.0;
  let upperOmnitropeFactor = 0.0;
  let lowerNorditropinFactor = 0.0;
  let upperNorditropinFactor = 0.0;
  
//Weekly products table displayed if checkbox checked
const gmdWeeklyProductRow = document.getElementById("gmd-weekly-products-row");
const gmdWeeklyProductTable = document.getElementById("weekly-products-table");
const gmdWantWeekly = document.getElementById("want-weekly-product");
gmdWeeklyProductRow.style.display = "none";
if (gmdWantWeekly.checked === true) gmdWeeklyProductTable.style.display = "";
else gmdWeeklyProductTable.style.display = "none";

  switch (indication) {
    case 1: //Growth Hormone Deficiency
      document.getElementById("guideline-based-row").style.display = "";
      document.getElementById("geno-row").style.display = "";
      document.getElementById("huma-row").style.display = "";
      document.getElementById("omni-row").style.display = "";
      document.getElementById("nordi-row").style.display = "";

      lowerGuidelineFactor = 0.16;
      upperGuidelineFactor = 0.24;
      lowerGenotropinFactor = 0.16;
      upperGenotropinFactor = 0.24;
      lowerHumatropeFactor = 0.18;
      upperHumatropeFactor = 0.3;
      lowerOmnitropeFactor = 0.16;
      upperOmnitropeFactor = 0.24;
      lowerNorditropinFactor = 0.17;
      upperNorditropinFactor = 0.24;
      skytrofaFactor = 0.24;
      sogroyaFactor =0.16;

      //shows checkbox option on GHD only (since weekly products are only indicated in GHD)
      gmdWeeklyProductRow.style.display = "";

      //shows the weekly product chart if the checkbox is checked; otherwise hides it
      if (gmdWantWeekly.checked === true) gmdWeeklyProductRow.style.display = "";
      else gmdWeeklyProductTable.style.display = "none";  

     // If the checkbox is checked, then shows the dosage note which was a pain in the butt to format here
      if (gmdWantWeekly.checked === true)  dosageNote.style.display = "";
      else dosageNote.style.display = "none";
      dosageNote.textContent = "Skytrofa indicated for patients 1 year and older and is dosed at 0.24mg/kg/week and rounded to the recommended dosing per child's\r\n";
      dosageNote.textContent += "weight using the chart available in detail in the package insert.\r\n"; 
      dosageNote.textContent += "Sogroya is indicated for patients 2.5 years and older at an initial dose of 0.16mg/kg/week \r\n";
      dosageNote.textContent +="to a max of 8mg/week.";
     
      break;

    case 2: //Idiopathic Short Stature
      document.getElementById("guideline-based-row").style.display = "none";
      document.getElementById("geno-row").style.display = "";
      document.getElementById("huma-row").style.display = "";
      document.getElementById("omni-row").style.display = "";
      document.getElementById("nordi-row").style.display = "";
      document.getElementById("weekly-products-table").style.display = "none";

      dosageNote.style.display = "";
      dosageNote.textContent = "All products listed can be dosed up to the max; use the lowest effective dose";

      lowerGenotropinFactor = 0.0;
      upperGenotropinFactor = 0.47; //UP TO
      lowerHumatropeFactor = 0.0;
      upperHumatropeFactor = 0.37; //UP TO
      lowerOmnitropeFactor = 0.0;
      upperOmnitropeFactor = 0.47; //UP TO
      lowerNorditropinFactor = 0.0;
      upperNorditropinFactor = 0.47; //UP TO
      break;

    case 3: //Small for Gestational Age
      document.getElementById("guideline-based-row").style.display = "none";
      document.getElementById("geno-row").style.display = "";
      document.getElementById("huma-row").style.display = "";
      document.getElementById("omni-row").style.display = "";
      document.getElementById("nordi-row").style.display = "";
      document.getElementById("weekly-products-table").style.display = "none";

      dosageNote.style.display = "";
      dosageNote.textContent = "All products listed can be dosed up to the max; use the lowest effective dose";

      lowerGenotropinFactor = 0.0;
      upperGenotropinFactor = 0.48; //UP TO
      lowerHumatropeFactor = 0.0;
      upperHumatropeFactor = 0.47; //UP TO
      lowerOmnitropeFactor = 0.0;
      upperOmnitropeFactor = 0.48; //UP TO
      lowerNorditropinFactor = 0.0;
      upperNorditropinFactor = 0.47; //UP TO
      break;
    case 4: //Prader-Willi
      document.getElementById("guideline-based-row").style.display = "none";
      document.getElementById("geno-row").style.display = "";
      document.getElementById("huma-row").style.display = "";
      document.getElementById("omni-row").style.display = "";
      document.getElementById("nordi-row").style.display = "";
      document.getElementById("weekly-products-table").style.display = "none";

      dosageNote.style.display = "";
      dosageNote.textContent = "Genotropin, Omnitrope, and Norditropin dosage are a flat dose of 0.24mg/kg/week for PWS";

      lowerGenotropinFactor = 0.0;
      upperGenotropinFactor = 0.24; //flat dose
      lowerOmnitropeFactor = 0.0;
      upperOmnitropeFactor = 0.24; //flat dose
      lowerNorditropinFactor = 0.0;
      upperNorditropinFactor = 0.24; //flat dose
      break;
    case 5: //Turner Syndrome
      document.getElementById("guideline-based-row").style.display = "none";
      document.getElementById("geno-row").style.display = "";
      document.getElementById("huma-row").style.display = "";
      document.getElementById("omni-row").style.display = "";
      document.getElementById("nordi-row").style.display = "";
      document.getElementById("weekly-products-table").style.display = "none";

      dosageNote.style.display = "";
      dosageNote.textContent = "All products listed can be dosed up to the max; use the lowest effective dose";

      lowerGenotropinFactor = 0.0;
      upperGenotropinFactor = 0.33;
      lowerHumatropeFactor = 0.0;
      upperHumatropeFactor = 0.375;
      lowerOmnitropeFactor = 0.0;
      upperOmnitropeFactor = 0.33;
      lowerNorditropinFactor = 0.0;
      upperNorditropinFactor = 0.47;
      break;

    case 6: //Noonan Syndrome
      document.getElementById("guideline-based-row").style.display = "none";
      document.getElementById("geno-row").style.display = "none";
      document.getElementById("huma-row").style.display = "none";
      document.getElementById("omni-row").style.display = "none";
      document.getElementById("nordi-row").style.display = "";
      document.getElementById("weekly-products-table").style.display = "none";

      dosageNote.style.display = "";
      dosageNote.textContent = "Norditropin dosage is up to 0.46mg/kg/week but should be individualized for each patient";

      lowerNorditropinFactor = 0.0;
      upperNorditropinFactor = 0.46; //UP TO 0.46mg/kg/week
      break;

    case 7: //SHOX Deficiency
      document.getElementById("guideline-based-row").style.display = "none";
      document.getElementById("geno-row").style.display = "none";
      document.getElementById("huma-row").style.display = "";
      document.getElementById("omni-row").style.display = "none";
      document.getElementById("nordi-row").style.display = "none";
      document.getElementById("weekly-products-table").style.display = "none";

      dosageNote.style.display = "";
      dosageNote.textContent = "Humatrope dosage is a flat dose of 0.35mg/kg/week for SHOX Deficiency";

      lowerHumatropeFactor = 0.35; //FLAT DOSE
      upperHumatropeFactor = 0.35; //FLAT DOSE
      break;
  }
  //assigning results to the table cells
  document.getElementById("guideline-weekly-min").textContent = (weightInKg * lowerGuidelineFactor).toFixed(2);
  document.getElementById("guideline-weekly-max").textContent = (weightInKg * upperGuidelineFactor).toFixed(2);
  document.getElementById("guideline-daily-min").textContent = ((weightInKg * lowerGuidelineFactor) /doseSchedule).toFixed(2);
  document.getElementById("guideline-daily-max").textContent = ((weightInKg * upperGuidelineFactor) /doseSchedule).toFixed(2);

  document.getElementById("geno-weekly-min").textContent = (weightInKg * lowerGenotropinFactor).toFixed(2);
  document.getElementById("geno-weekly-max").textContent = (weightInKg * upperGenotropinFactor).toFixed(2);
  document.getElementById("geno-daily-min").textContent = ((weightInKg * lowerGenotropinFactor) /doseSchedule).toFixed(2);
  document.getElementById("geno-daily-max").textContent = ((weightInKg * upperGenotropinFactor) /doseSchedule).toFixed(2);

  document.getElementById("huma-weekly-min").textContent = (weightInKg * lowerHumatropeFactor).toFixed(2);
  document.getElementById("huma-weekly-max").textContent = (weightInKg * upperHumatropeFactor).toFixed(2);
  document.getElementById("huma-daily-min").textContent = ((weightInKg * lowerHumatropeFactor) /doseSchedule).toFixed(2);
  document.getElementById("huma-daily-max").textContent = ((weightInKg * upperHumatropeFactor) /doseSchedule).toFixed(2);

  document.getElementById("omni-weekly-min").textContent = (weightInKg * lowerOmnitropeFactor).toFixed(2);
  document.getElementById("omni-weekly-max").textContent = (weightInKg * upperOmnitropeFactor).toFixed(2);
  document.getElementById("omni-daily-min").textContent = ((weightInKg * lowerOmnitropeFactor) /doseSchedule).toFixed(2);
  document.getElementById("omni-daily-max").textContent = ((weightInKg * upperOmnitropeFactor) /doseSchedule).toFixed(2);

  document.getElementById("nordi-weekly-min").textContent = (weightInKg * lowerNorditropinFactor).toFixed(2);
  document.getElementById("nordi-weekly-max").textContent = (weightInKg * upperNorditropinFactor).toFixed(2);
  document.getElementById("nordi-daily-min").textContent = ((weightInKg * lowerNorditropinFactor) / doseSchedule).toFixed(2);
  document.getElementById("nordi-daily-max").textContent = ((weightInKg * upperNorditropinFactor) /doseSchedule).toFixed(2);

//adding the specific weekly agents' messages to the table cells
  document.getElementById("skytrofa-dose-message").textContent = (getRecommendedDose(weightInKg));
  document.getElementById("sogroya-dose-message").textContent = (limitToMax((weightInKg * sogroyaFactor), 8)).toFixed(2) + " mg";
}
//adapted the table from the Sogroya PI to return the recommended dose based on the weight inputted
function getRecommendedDose(weightInKg) {
  if (weightInKg >= 11.5 && weightInKg <= 13.9) {
    return 3 + " mg";
  } else if (weightInKg >= 14 && weightInKg <= 16.4) {
    return 3.6 + " mg";
  } else if (weightInKg >= 16.5 && weightInKg <= 19.9) {
    return 4.3 + " mg";
  } else if (weightInKg >= 20 && weightInKg <= 23.9) {
    return 5.2 + " mg";
  } else if (weightInKg >= 24 && weightInKg <= 28.9) {
    return 6.3 + " mg";
  } else if (weightInKg >= 29 && weightInKg <= 34.9) {
    return 7.6 + " mg";
  } else if (weightInKg >= 35 && weightInKg <= 41.9) {
    return 9.1 + " mg";
  } else if (weightInKg >= 42 && weightInKg <= 50.9) {
    return 11 + " mg";
  } else if (weightInKg >= 51 && weightInKg <= 60.4) {
    return 13.3 + " mg";
  } else if (weightInKg >= 60.5 && weightInKg <= 69.9) {
    return 15.2 + " mg";
  } else if (weightInKg >= 70 && weightInKg <= 84.9) {
    return 18.2 + " mg";
  } else if (weightInKg >= 85 && weightInKg <= 100) {
    return 22 + " mg";
  } else {
    return "Only approved for patients weighing between 11.5 kg to 100 kg";
  }
}
// Skytrofa's dose is 0.16mg/kg until the max of 8mg where this function will always return 8mg
function limitToMax(value, maxValue) {
  if (value > maxValue) {
    return maxValue;
  } else {
    return value;
  }
}
