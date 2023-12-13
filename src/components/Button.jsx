const Button = ({ text, icon, padding }) => {
  return (
    <button
      onClick={() => console.log("Hello world")}
      className={` hover:bg-[red] gap-3 flex items-center justify-center  text-[16px] botton font-bold ${padding}`}
    >
      {text} {icon}
    </button>
  );
};
export default Button;
