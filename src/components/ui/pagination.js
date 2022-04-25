

const Pagination = ({page, maxPages, onPageSelect}) => {
    return <div className="pagination">
    <span>&laquo;</span>
    {[...Array(maxPages)].map((x, i) => {
      return (
        <span key={i} className={`${i + 1 === page ? "active" : null}`} onClick={()=>{onPageSelect(i+1)}}>
          {i + 1}
        </span>
      );
    })}
    <span>&raquo;</span>
  </div>
}

export default Pagination;