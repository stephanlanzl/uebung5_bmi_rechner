function initBMICalculator() {
    alert("Let's start coding...");
    setInputHeightListener();
}

function setInputHeightListener(){
    var logKey = document.getElementById("input_field_height");
    logKey.addEventListener("input", outputBMI);
}

function outputBMI(event){
    var height = getHeight();
    var weight = getWeight();
    if(height == 0){
        console.log("Durch NULL teilen geht nicht!");
    } else {
        var result = weight / ((height/100) * (height/100));
        var resInputField = document.getElementById("bmi_result_value");
        resInputField.innerHTML = result;
    }
}

function getHeight(){
    var heightInputField = document.getElementById("input_field_height");
    var height = heightInputField.value;
    return height;
}

function getWeight(){
    var weightInputField = document.getElementById("input_field_weight");
    var weight = weightInputField.value;
    return weight;
}

