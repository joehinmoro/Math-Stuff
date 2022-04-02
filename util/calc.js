exports.arithmetic = (num1, num2, operator) => {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "add":
            return num1 + num2;
            break;
        case "sub":
            return num1 - num2;
            break;
        case "mul":
            return num1 * num2;
            break;
        case "div":
            return num1 / num2;
            break;
        case "exp":
            return num1 ** num2;
            break;
        case "mod":
            return num1 % num2;
            break;
        default:
            throw new Error(`${operator} is invalid`);
    }
};

exports.BMICalc = (weight, height) => weight * (height * height);

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
    } else {
        return "Obesity Class III";
    }
};
