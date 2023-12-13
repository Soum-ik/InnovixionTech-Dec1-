const Button = ({ text, icon, padding }) => {
  return (
    <button
      className={` gap-3 flex items-center justify-center  text-[16px] botton font-bold ${padding}`}
    >
      {text} {icon}
    </button>
  );
};
export default Button;
