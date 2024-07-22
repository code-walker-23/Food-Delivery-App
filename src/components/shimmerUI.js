export const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-card-image"></div>
            <div className="shimmer-card-details">
              <div className="shimmer-line long"></div>
              <div className="shimmer-line medium"></div>
              <div className="shimmer-line short"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
