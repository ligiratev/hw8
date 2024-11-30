const numbers = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];

const multipliedByFive = numbers.map(num => num * 5);
console.log("Умноженные на 5:", multipliedByFive);

const positiveNumbers = numbers.filter(num => num > 0);
console.log("Положительные числа:", positiveNumbers);











const sizesInMm = [600, 1500, 200, 3750, 1550, 1400, 1000];

const sizesInMeters = sizesInMm.map(size => size / 1000);
console.log("Размеры в метрах:", sizesInMeters);

const sizesInInches = sizesInMm.map(size => Math.round(size * 0.0393701));
console.log("Размеры в дюймах:", sizesInInches);














const words = ["level", "world", "madam", "racecar", "hello", "civic", "javascript", "radar", "python"];

const isPalindrome = word => {
    const lowerCased = word.toLowerCase(); 
    return lowerCased === lowerCased.split("").reverse().join("");
  };

  const palindromes = words.filter(isPalindrome);
console.log("Палиндромы:", palindromes);
