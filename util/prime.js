// to verify if a number: num is a prime number
const isPrime = (num) => {
    // parse absolute value of num to integer
    num = parseInt(Math.abs(num));
    // verify that num must be greater than 2:
    // [2 is the smallest prime number]
    if (num < 2) return false;
    // loop over from 2 to (num - 1) to check if
    // num has a factor which is also a perfect divisor
    // stop at (num - 1) because num is a perfect divisor of itself
    for (let idx = 2; idx < num; idx++) {
        // return false if a perfect divisor exists
        if (num % idx === 0) return false;
    }
    // return true if no perfect divisor exists
    // hence, num is a prime number
    return true;
};

// using isPrime(), generate prime numbers
// from 2 to a particular number: num
const generatePositivePrimes = (num) => {
    // verify num is is positive
    if (num <= 0) {
        throw new Error("number must be positive");
    }
    // parse absolute value of num to integer
    num = Math.abs(parseInt(num));
    // define array of integers from 1 to num
    const nums = [...Array(++num).keys()].splice(1);
    // define array to store generated primes
    const primes = [];
    // loop over array of intergers,
    for (let num of nums) {
        // push primes to primes array
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    // return primes array
    return primes;
};

const generateNegativePrimes = (num) => {
    // verify num is is negative
    if (num >= 0) {
        throw new Error("number must be negative");
    }
    // parse absolute value of num to integer
    num = Math.abs(parseInt(num));
    // define array of integers from 1 to num
    const nums = [...Array(++num).keys()].splice(1);
    // define array to store generated primes
    const primes = [];
    for (let num of nums) {
        if (isPrime(num)) {
            // unshift negative primes to primes array
            primes.unshift(num * -1);
        }
    }
    // return primes array
    return primes;
};

const positivePrimeFactors = (num) => {
    // parse num to integer
    num = parseInt(num);
    // verify num is is positive
    if (num <= 0) {
        throw new Error("number must be positive");
    }
    // generate array of all primes lower than the absolute value of num into variable
    const primes = generatePositivePrimes(num);
    // define array to save prime factors
    const factors = [];
    // loop over array of primes
    for (let prime of primes) {
        // while prime is a factor of num
        while (num % prime === 0) {
            // push prime to factor
            factors.push(prime);
            // then divide num by prime to check for the next prime factor
            num /= prime;
        }
        // [NOT NECESSARY] THIS WILL EFFICIENTLY BREAK LOOP
        // SINCE NO MULTIPLE SHOULD BE LESSER THAN A POTENTIAL FACTOR
        if (num < prime) {
            break;
        }
    }
    // return array of all prime factors of num
    return factors;
};

// export all functions
exports.isPrime = isPrime;
exports.generatePositivePrimes = generatePositivePrimes;
exports.generateNegativePrimes = generateNegativePrimes;
exports.positivePrimeFactors = positivePrimeFactors;
