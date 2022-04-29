import Card from "../../components/ui/card"

const DetailsTabCast = ({ cast }) => {
  return (
    <div className="tabcontent">
      <h3>Cast</h3>
      <div className="row">
        {cast &&
          cast.filter(item => item.profile_path).map((item, idx) => {
            return (
              <div key={idx} className="col-1">
                <Card>
                    <Card.Image
                      style={{ maxWidth: "200px" }}
                      src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                      alt="Avatar"
                    />
                  <Card.Body>
                    {item.name} as {item.character}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          </div>
      <div className="row">
          {cast &&
          cast.filter(item => !item.profile_path).map((item, idx) => {
            return (
              <div key={idx} className="col-1">
                <Card>
                  <Card.Body>
                    {item.name} as {item.character}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  )
};

export default DetailsTabCast;
