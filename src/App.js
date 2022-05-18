import { Provider } from "react-redux";
import UsersList from "./Components/UsersList";
import { store } from "./Features/store";

function App() {
  return (
    <Provider store={store}>
      <div>hi</div>
      <UsersList />
    </Provider>
  );
}

export default App;
