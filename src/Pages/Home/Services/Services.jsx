import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [services, setServices] = useState([]);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `http://localhost:5000/carsServices?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);
  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };
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
        <div className="form-control">
          <div className="input-group">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
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
