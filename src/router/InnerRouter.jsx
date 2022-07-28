import { Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "../componets/Header/Header";
import SideMenu from "../componets/SideMenu/SideMenu";
import BuyItems from "../pages/BuyItems/BuyItems";
import GestionClientes from "../pages/GestionClientes/GestionClientes";
import GestionProductos from "../pages/GestionProductos/GestionProductos";
import GestionProveedores from "../pages/GestionProveedores/GestionProveedores";
import GestionUsuarios from "../pages/GestionUsuarios/GestionUsuarios";
import Inventario from "../pages/Inventario/Inventario";
import LoginPage from "../pages/LoginPage/LoginPage";
import ModulesPage from "../pages/ModulesPage/ModulesPage";
import SellItems from "../pages/SellItems/SellItems";
import { RoleRoute } from "./RoleRoute";

const InnerRouter = () => {
  return (
    <>
      <Header />
      <div className="containerInnerRoutes">
        <div className="containerSideMenu">
          <SideMenu />
        </div>
        <div className="containerOtherRoutes">
          <Routes>
            <Route path="/modules" element={<ModulesPage />} />
            <Route
              path="/modules/buy_items"
              element={
                <RoleRoute roles={["1"]}>
                  <BuyItems />
                </RoleRoute>
              }
            />
            <Route
              path="/modules/usuarios"
              element={
                <RoleRoute roles={["1"]}>
                  <GestionUsuarios />
                </RoleRoute>
              }
            />
            <Route
              path="/modules/gestion_clientes"
              element={
                <RoleRoute roles={["1"]}>
                  <GestionClientes />
                </RoleRoute>
              }
            />
            <Route
              path="/modules/gestion_proveedores"
              element={
                <RoleRoute roles={["1"]}>
                  <GestionProveedores />
                </RoleRoute>
              }
            />
            <Route
              path="/modules/gestion_productos"
              element={
                <RoleRoute roles={["1"]}>
                  <GestionProductos />
                </RoleRoute>
              }
            />
            <Route
              path="/modules/inventario"
              element={
                <RoleRoute roles={["1","2","3"]}>
                  <Inventario />
                </RoleRoute>
              }
            />
            <Route
              path="/modules/sell_items"
              element={
                <RoleRoute roles={["1"]}>
                  <SellItems />
                </RoleRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default InnerRouter;
