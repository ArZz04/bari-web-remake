import { Link } from "react-router-dom";

const BtnNav = ({ to, title }) => {
  return (
    <li className="flex-row text-[#ffffff] dark:text-white cursor-pointer bg-[#181a21] hover:text-red-950 hover:bg-white 
focus:ring-1 focus:outline-none focus:ring-[#701f13]/60 font-medium rounded-lg px-5 py-2.5 text-center justify-center inline-flex items-center 
dark:focus:ring-[#701f13]/65 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105 scale-80 gap-x-2 opacity-90 hover:opacity-100">
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default BtnNav;
