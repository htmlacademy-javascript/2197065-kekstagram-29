// проверка длины строки

const checkStringLenght = (string, length) => string.length <= length;
checkStringLenght('dakjhdkja', 20);

// проверка на палиндром

function isPalindrom(string) {

  const newString = string.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < newString.length / 2; i++) {
    if (newString.at(i) !== newString.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

isPalindrom('Лёша на полке клопа нашёл');

// Извлечение цифр

function extractnumber(arg) {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

extractnumber('2023');


