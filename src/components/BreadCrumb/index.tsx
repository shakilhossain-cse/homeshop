import { Link } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = ({ title }: { title: string | undefined }) => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link to="/" className="text-primary text-base">
        <ImHome3 />
      </Link>
      <span className="text-sm text-gray-400">
        <MdOutlineKeyboardArrowRight />
      </span>
      <p className="text-gray-600 font-medium">{title}</p>
    </div>
  );
};

export default BreadCrumb;
