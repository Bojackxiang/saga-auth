const mockApis = {
  mockLogin(values) {
    const { email, password } = values;
    return new Promise((resolve, reject) => {
      if (email === "test@test.com" && password === "111111") {
        resolve({
          status: "success",
          message: "",
        });
      }
      reject({
        status: "error",
        message: "Invalid email or password",
      });
    });
  },
};

export default mockApis;
