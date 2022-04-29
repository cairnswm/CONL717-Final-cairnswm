import Card from "../../components/ui/card";

const DetailsTabVideo = ({ videos }) => {
  return (
    <div className="tabcontent">
      <h3>Videos</h3>
      {videos &&
        videos
          .filter((item) => item.type === "Trailer")
          .map((item, idx) => {
            return (
              <div key={idx}>
                <h2>{item.name} <a href={`https://www.youtube.com/watch?v=${item.key}`}>
                  <em>View on YouTube</em>
                </a></h2>
                
                <Card>
                  <Card.Body>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title="YouTube video player"
                      allowFullScreen={true}
                    ></iframe>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
    </div>
  );
};

export default DetailsTabVideo;
