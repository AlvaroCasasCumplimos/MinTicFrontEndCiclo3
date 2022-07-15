import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import ModulesPage from "../pages/ModulesPage/ModulesPage";
import InnerRouter from "./InnerRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const  AppRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
        } />
        <Route path="/*" element={
        <PrivateRoute>
            <InnerRouter />
        </PrivateRoute>} />

      </Routes>
    </div>
  );
}
export default AppRouter