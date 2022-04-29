const DetailsTabs = ({tab, setTab}) => {
    return <div className="tab">
    <button
      className={`tablinks ${tab==="Videos" ? "active" : null}`}
      onClick={() => {
        setTab("Videos");
      }}
    >
      Videos
    </button>
    <button
      className={`tablinks ${tab==="Cast" ? "active" : null}`}
      onClick={() => {
        setTab("Cast");
      }}
    >
      Cast
    </button>
    <button
      className={`tablinks ${tab==="Crew" ? "active" : null}`}
      onClick={() => {
        setTab("Crew");
      }}
    >
      Crew
    </button>
    <button
      className={`tablinks ${tab==="Images" ? "active" : null}`}
      onClick={() => {
        setTab("Images");
      }}
    >
      Images
    </button>
  </div>
}

export default DetailsTabs;