function login(email, password) {
  if (email.toLowerCase() === 'michael' && password.toLowerCase() === '1234')
    return {
        "success": true,
        "data": {
          "successMessage": "You are successed login"
        }
      }
  else
    return {
      "success": false,
      "data": {
        "errorMessage": "Password or login is wrong. Try login again"
      }
    }
};

export default login;