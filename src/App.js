import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">hi</div>
    </Provider>
  );
}

export default App;
