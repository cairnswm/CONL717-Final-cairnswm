const MovieMainCrew = ({crew}) => {
    if (!crew) { return <></> }
    return crew.filter(
            (item) =>
              item.job === "Director" ||
              item.job === "Executive Producer" ||
              item.job === "Producer"
          )
          .map((item, idx) => {
            return (
              <div key={idx}>
                <strong>{item.job}</strong> {item.name}
              </div>
            );
          })
}

export default MovieMainCrew;