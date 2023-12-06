import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/appstore";
import Videoplayer from "./components/Videoplayer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/video/:id", element: <Videoplayer /> },
  ]);
  return (
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
