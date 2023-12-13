
import { useNavigate } from "react-router-dom";

const Button = ({ text, icon, padding }) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/moviepage")
  }

  return (
    <button
      onClick={clickHandler}
      className={` hover:bg-[red] gap-3 flex items-center justify-center  text-[16px] botton font-bold ${padding}`}
    >
      {text} {icon}
    </button>
  );
};
export default Button;
