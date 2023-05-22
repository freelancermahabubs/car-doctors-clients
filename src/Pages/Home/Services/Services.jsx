import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/carsServices?sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc]);
  return (
    <div className="mt-4">
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-orange-600">Service</h3>
        <h2 className="text-5xl ">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
        <button onClick={() => setAsc(!asc)} className="btn btn-primary">
          {asc ? "Price High to Low" : "Price Low To high"}
        </button>
      </div>
      <div className="grid lg:grid-cols-3 mt-5 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
