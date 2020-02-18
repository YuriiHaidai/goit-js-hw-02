const checkForSpam = function(str) {
  const strLowerCase = str.toLowerCase();
  return strLowerCase.includes("sale") || strLowerCase.includes("spam");
};

// Ещё один вариант:

// function setSpamWords(...spamWords) {
//   return function checkInclude(s) {
//     const arg = [...spamWords];

//     for (let i = 0; i < arg.length; i += 1) {
//       if (s.includes(arg[i])) return true;
//     }
//     return false;
//   };
// }

// const checkForSpam = setSpamWords("spam", "sale");

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
