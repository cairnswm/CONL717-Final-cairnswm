import Card from "../../components/ui/card"

const DetailsTabImages = ({ images }) => {
  return <div className="tabcontent">
  <h3>Images</h3>
  <div className="row">
    {images && images.backdrops &&
      images.backdrops.map((item, idx) => {
        return (
          <div key={idx} className="col-2">
            <Card>
              <Card.Body>
              <Card.Image
                  style={{ maxWidth: "200px" }}
                  src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                  alt="Avatar"
                />
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {images && images.posters &&
      images.posters.map((item, idx) => {
        return (
          <div key={idx} className="col-1">
            <Card>
              <Card.Body>
              <Card.Image
                  style={{ maxWidth: "200px" }}
                  src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                  alt="Avatar"
                />
              </Card.Body>
            </Card>
          </div>
        );
      })}
  </div>
</div>;
};

export default DetailsTabImages;
