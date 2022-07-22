import { useNavigate } from "react-router-dom";
import "./modulesBox.css";

const ModulesBox = ({ children, label,route }) => {
  const navigate = useNavigate();
  return (
    <div className="containerBoxes" onClick={() => navigate(`/modules/${route}`)}>
      {children}
      <div>{label}</div>
    </div>
  );
};
export default ModulesBox;
