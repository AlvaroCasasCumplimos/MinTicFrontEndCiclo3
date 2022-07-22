import { useContext, useMemo } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import "./sideMenu.css";
import { Button, Stack } from "@mui/material";
const SideMenu = () => {
  const { logout, role, name } = useContext(AuthContext);
  const navigate = useNavigate();

  //  Role 1 = administrador
  //  2 = vendedor
  //  3 = comprador
  const dataRole = useMemo(() => {
    const vectorData = [];
    if (role === "1") {
      vectorData.push({
        label: "Usuarios",
        route: "usuarios",
      });
      vectorData.push({
        label: "Productos",
        route: "gestion_productos",
      });
    }
    if (role === "2") {
      vectorData.push({
        label: "Clientes",
        route: "gestion_clientes",
      });
      vectorData.push({
        label: "Vender productos",
        route: "sell_items",
      });
    }
    if (role === "3") {
      vectorData.push({
        label: "Proveedores",
        route: "gestion_proveedores",
      });
      vectorData.push({
        label: "Comprar productos",
        route: "buy_items",
      });
    }
    if (role === "1" || role === "2" || role === "3") {
      vectorData.push({
        label: "Inventario",
        route: "inventario",
      });
    }
    return vectorData;
  }, [role]);
  return (
    <>
      <h3>PANEL DE NAVEGACIÓN</h3>
      <Stack spacing={1} direction="column">
        {dataRole.length ? (
          dataRole.map((data, i) => (
            <Button
              variant="contained"
              key={i}
              onClick={() => navigate(`/modules/${data?.route}`)}
            >
              {data?.label}
            </Button>
          ))
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};

export default SideMenu;
