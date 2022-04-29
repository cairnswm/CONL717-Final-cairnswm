import Card from "../../components/ui/card"

const DetailsTabCrew = ({ crew }) => {
  return <div id="Tokyo" className="tabcontent">
  <h3>Crew</h3>
  <div className="row">
    {crew && crew.length > 0 &&
      crew.map((item, idx) => {
        return (<div key={idx} className="col-2">
            <Card>
              <Card.Body>
                <strong>{item.name}</strong> ({item.job})
              </Card.Body>
            </Card>
          </div>
        );
      })}                      
  </div>
</div>;
};

export default DetailsTabCrew;
