import "./ModulesPage.css";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import ModulesBox from "../../componets/ModuleBox/ModuleBox";
import { AuthContext } from "../../context/auth/AuthContext";
import { useContext, useMemo } from "react";

const ModulesPage = () => {
  const { role } = useContext(AuthContext);
  const dataRole = useMemo(() => {
    const vectorData = [];
    if (role === "1") {
      vectorData.push({
        label: "Usuarios",
        route: "usuarios",
        icon: <HomeRepairServiceOutlined fontSize="large" color="primary" />,
      });
      vectorData.push({
        label: "Productos",
        route: "gestion_productos",
        icon: <HomeRepairServiceOutlined fontSize="large" color="primary" />,
      });
    }
    if (role === "2") {
      vectorData.push({
        label: "Clientes",
        route: "gestion_clientes",
        icon: <HomeRepairServiceOutlined fontSize="large" color="primary" />,
      });
      vectorData.push({
        label: "Vender productos",
        route: "sell_items",
        icon: <HomeRepairServiceOutlined fontSize="large" color="primary" />,
      });
    }
    if (role === "3") {
      vectorData.push({
        label: "Proveedores",
        route: "gestion_proveedores",
        icon: <HomeRepairServiceOutlined fontSize="large" color="primary" />,
      });
      vectorData.push({
        label: "Comprar productos",
        route: "buy_items",
        icon: <HomeRepairServiceOutlined fontSize="large" color="primary" />,
      });
    }
    if (role === "1" || role === "2" || role === "3") {
      vectorData.push({
        label: "Inventario",
        route: "inventario",
        icon: <HomeRepairServiceOutlined fontSize="large" color="primary" />,
      });
    }
    return vectorData;
  }, [role]);
  return (
    <div className="containerModules">
      {dataRole.length ? (
        dataRole.map((data, i) => (
          <ModulesBox label={data?.label} route={data?.route} key={i}>
            {data?.icon}
          </ModulesBox>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
export default ModulesPage;
