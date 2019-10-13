//Reducer is a place where we manipulate state from incoming action

// null => we don't know what current our auth status is ?
// false => Definetly not logged in

export const authReducer = (state = null, action) => {
  // console.log("Reducer", action);
  console.log("payload", action.payload);
  switch (action.type) {
    case "FETCH_USER":
      return action.payload || false;
    default:
      return state;
  }
};
