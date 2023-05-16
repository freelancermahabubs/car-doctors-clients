import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { img, price, _id, title } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-500 text-xl">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`} className="btn btn-primary">
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
