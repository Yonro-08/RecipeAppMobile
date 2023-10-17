import { Provider } from "react-redux";
import AppNavigation from "./navigation/AppNavigation";

import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
