import {
  Button,
  Stack
} from "@mui/material";
import TableModules from "../../componets/TableModules/TableModules";
import "./gestionUsuarios.css";
const GestionUsuarios = () => {
  const data = [
    {
      id: 1,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
    {
      id: 2,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
    {
      id: 3,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
    {
      id: 4,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
    {
      id: 5,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
    {
      id: 6,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
    {
      id: 7,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
    {
      id: 8,
      name: "sss",
      objs: "sdasd",
      com: "ASdasdas",
    },
  ];
  const headers = ["Id", "Name", "obj", "COm"];
  return (
    <div className="containerInnerModules">
      <h1>Gestión de usuarios</h1>
      <Stack spacing={2} direction="row">
      <Button  variant="contained" color="success"  size="large" >Crear usuario</Button>

      </Stack>
      <TableModules
        data={data}
        headers={headers}
        onSelectRow={(x, y) => {
          console.log(`sleeee${x},${y}`);
        }}
      />
    </div>
  );
};
export default GestionUsuarios;
