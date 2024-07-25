class PasswordGenerator {
  constructor() {
    this.lowercase = "abcdefghijklmnopqrstuvwxyz";
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.number = "0123456789";
    this.speicalChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  }

  getRandomChar(str) {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
  }

  generateStrongPassword() {
    const minLength = 12;
    const allChars = this.lowercase + this.uppercase + this.number;
    let password = "";
    for (let i = 0; i < minLength; i++)
      password = password + this.getRandomChar(allChars);
    return password;
  }

  generateWeakPassword() {
    const maxLength = 8;
    const allChars = this.lowercase + this.uppercase;
    let password = "";
    for (let i = 0; i < maxLength; i++)
      password = password + this.getRandomChar(allChars);
    return password;
  }

  generateSuperStrongPassword() {
    const minLength = 15;
    const allChars =
      this.lowercase + this.uppercase + this.number + this.speicalChars;
    let password = "";
    for (let i = 0; i < minLength; i++)
      password = password + this.getRandomChar(allChars);
    return password;
  }

  generateFunnyPassword() {
    let funnyPassArray = ["password", "admin", "incorrectpassword", "secret"];
    const randomIndex = Math.floor(Math.random() * funnyPassArray.length);
    return funnyPassArray[randomIndex];
  }
}

const passArr = [];

let pgObj = new PasswordGenerator();
let funnyPass = pgObj.generateFunnyPassword();
console.log(`The Funny password is : ${funnyPass}`);
let weakPass = pgObj.generateWeakPassword();
console.log(`The Weak password is : ${weakPass}`);
let strongPass = pgObj.generateStrongPassword();
console.log(`The Strong password is : ${strongPass}`);
let superStrongPass = pgObj.generateSuperStrongPassword();
console.log(`The Super strong password is : ${superStrongPass}`);
