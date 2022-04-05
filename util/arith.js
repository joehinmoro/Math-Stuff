exports.calc = (num1, num2, operator) => {
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
