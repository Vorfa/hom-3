const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const successMessage = 'Логин успешно добавлен!';
const alreadyUseMessage = 'Такой логин уже используется!';
const wrongLengthMessage = 'Ошибка! Логин должен быть от 4 до 16 символов';


const isLoginValid = function(login) {
  const checkLength = login.length >= 4 && login.length <= 16;
  return checkLength;
};

const isLoginUnique = function(allLogins, login) {
  checkUnique = allLogins.includes(login);

  if (checkUnique) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  const isValid = isLoginValid(login);
  const isUnique = isLoginUnique(allLogins, login);
    
    if (!isValid) {
      return wrongLengthMessage;
    } 
    
    if (!isUnique) {
      return alreadyUseMessage;
    } else {
      logins.push(login);
      return successMessage;
    }  
};

// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

