import { Provider } from "react-redux";
import UsersList from "./Components/UsersList";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">hi</div>
      <UsersList />
    </Provider>
  );
}

export default App;
