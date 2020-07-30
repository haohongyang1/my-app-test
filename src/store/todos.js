export default function todos(state = [], action) {
  console.log(state, "====");
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}
