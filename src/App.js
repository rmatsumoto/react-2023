import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import NavigationComponent from "./routes/navigation/navigation.component";
import AuthenticationComponent
  from "./routes/authentication/authentication.component";

const App = () => {

  return (
    <Routes>
      <Route
        path={'/'}
        element={<NavigationComponent/>}
      >
        <Route
          index
          element={<Home/>}
        />
        <Route
          path={`/shop`}
          element={<Shop/>}
        />
        <Route
          path={'/sign-in'}
          element={<AuthenticationComponent/>}
        />
      </Route>
    </Routes>
  )
}

export default App;