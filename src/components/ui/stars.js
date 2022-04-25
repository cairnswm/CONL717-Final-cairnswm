const Stars = ({ number }) => {
    return (
      <span className="star-rating">
        {[...Array(10)].map((star, index) => {
          index += 1;
          return (
            <span
              key={index}
              className={`star ${index <= (number) ? "on" : "off"}`}
            >
              <span className="star">&#9733;</span>
            </span>
          );
        })}
      </span>)
};

export default Stars;
