import axios from "axios";

export const fetchUser = () => {
  return (dispatch, getState) => {
    axios.get("/api/current_user").then(res => {
      dispatch({
        type: "FETCH_USER",
        payload: res.data
      });
    });
  };
};
// token i.e we got bakc from stripe
//Sending token to  backend
export const handleToken = token => {
  console.log("Tokyo", token);
  return dispatch => {
    axios.post("/api/stripe").then(token => {
      //making post req to backend
      dispatch({
        type: "FETCH_USER",
        payload: token.data
      });
    });
  };
};

//Action creator thinks it should return an action i.e action is an obj
