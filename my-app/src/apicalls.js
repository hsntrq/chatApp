import axios from "axios";
import makeToast from "./Toaster";

export const loginCall = async (userCredential, dispatch, props) => {
//   dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/login",
      userCredential
    );
    props.history.push("/chat");
    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    makeToast("success", res.data.message);
  } catch (err) {
    makeToast("error", err.response.data.message);
    // dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
