function palindrome(str) {

  const mayus = str
  .toLowerCase()
  .match(/[a-z0-9]/g);

  return mayus.join("") === mayus.reverse().join("");
}

palindrome("eye");