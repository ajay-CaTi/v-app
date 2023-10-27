import "./index.css";
import Body from "./component/Body";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./component/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./component/WatchPage";
import Error from "./component/Error";
import MainContainer from "./component/MainContainer";
import Demo from "./component/Demo";
import Demo2 from "./component/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Navbar />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
