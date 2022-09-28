export default class AuthData {
  static setLocalCredential(id, email, userName, token) {
    localStorage.setItem("id", id);
    localStorage.setItem("email", email);
    localStorage.setItem("userName", userName);
    localStorage.setItem("token", token);
  }

  static getLocalCredential() {
    return {
      id: localStorage.getItem("id"),
      email: localStorage.getItem("email"),
      userName: localStorage.getItem("userName"),
      token: localStorage.getItem("token"),
    };
  }

  static getToken() {
    this.clearLocalCredential();
    return localStorage.getItem("token");
  }

  static clearLocalCredential() {
    const emptyString = "";
    localStorage.setItem("id", emptyString);
    localStorage.setItem("email", emptyString);
    localStorage.setItem("userName", emptyString);
    localStorage.setItem("token", emptyString);
  }
  static authentication(login_token) {
    const axios = require("axios");
    //AuthService.clearLocalCredential()

    // Make a request for a user with a given ID
    axios
      .post("http://localhost:5000/api/authentication", {
        login_token: login_token,
      })
      .then(function (response) {
        // handle success
        const data = response.data;
        console.log(data);
        if (data.error_code === 0) {
          AuthService.setLocalCredential(
            data.payload.user_data.user_id,
            data.payload.user_data.email,
            data.payload.user_data.fullname,
            "jwt"
          );
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
}
