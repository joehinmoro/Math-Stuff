exports.BMICalc = (weight, height) =>
    (weight / (height * height)).toFixed(2);

exports.BMIClass = (BMI) => {
    BMI = Number(BMI);
    if (BMI <= 0) {
        throw new Error(`${BMI} is invalid`);
    } else if (BMI < 18.5) {
        return "Underweight";
    } else if (BMI < 25) {
        return "Normal Weight";
    } else if (BMI < 30) {
        return "Overweight";
    } else if (BMI < 35) {
        return "Obesity Class I";
    } else if (BMI < 40) {
        return "Obesity Class II";
    } else if (BMI < 400) {
        return "Obesity Class III";
    } else {
        return "Invalid BMI";
    }
};
