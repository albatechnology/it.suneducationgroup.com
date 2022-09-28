import config from "../config.json";

export default class AuthService {
  static setLocalCredential(id, email, userName, token, profile_image) {
    localStorage.setItem("id", id);
    localStorage.setItem("email", email);
    localStorage.setItem("userName", userName);
    localStorage.setItem("token", token);
    localStorage.setItem("profile_image", profile_image);
  }
  static setToken(token) {
    localStorage.setItem("token", token);
  }

  static getLocalCredential() {
    return {
      id: localStorage.getItem("id"),
      email: localStorage.getItem("email"),
      userName: localStorage.getItem("userName"),
      token: localStorage.getItem("token"),
      profile_image: localStorage.getItem("profile_image"),
    };
  }

  static getToken() {
    //this.clearLocalCredential();
    return localStorage.getItem("token");
  }

  static getAxiosConfig() {
    return {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
  }

  static clearLocalCredential() {
    const emptyString = "";
    localStorage.setItem("id", emptyString);
    localStorage.setItem("email", emptyString);
    localStorage.setItem("userName", emptyString);
    localStorage.setItem("token", emptyString);
    localStorage.setItem("profile_image", emptyString);
  }
  static async authentication(login_token) {
    const axios = require("axios");
    AuthService.clearLocalCredential();
    try {
      const response = await axios.post(`${config.SERVER_URL}authentication`, {
        login_token: login_token,
      });
      const data = await response.data;
      console.log(data);
      if (data.error_code === 0) {
        AuthService.setLocalCredential(
          data.payload.userData.user_id,
          data.payload.userData.email,
          data.payload.userData.fullname,
          data.payload.token,
          data.payload.userData.profile_image
        );
        const userData = this.getLocalCredential();
        return userData;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }

    // Make a request for a user with a given ID
    /*
    axios
      .post("http://localhost:5000/api/authentication", {
        login_token: login_token,
      })
      .then(function (response) {
        // handle success
        const data = response.data;
        //console.log(data);
        if (data.error_code === 0) {
          AuthService.setLocalCredential(
            data.payload.userData.user_id,
            data.payload.userData.email,
            data.payload.userData.fullname,
            data.payload.token
          );
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  */
  }
}
