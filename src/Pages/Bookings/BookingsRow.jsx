const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, customerName, img, service, date, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-22 h-24">
            {img && <img src={img} alt="Img" />}
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{service}</td>
      <td>{date}</td>
      <th>
        {status == "confirm" ? (
          <span className="text-primary font-bold">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
