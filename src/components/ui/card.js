const Card = ({children, className, onClick}) => {
    return <div className={`card ${className}`} onClick={onClick} >
            {children}
          </div>
}

const Image = ({src, alt}) => {
    return <img className="card-image" src={src} alt={alt} />
}

const Body = ({children}) => {
    return <div className="card-body">
    {children}
  </div>
}

const Header = ({children}) => {
  return <div className="card-header">
  {children}
</div>
}

Card.Header = Header;
Card.Image = Image;
Card.Body = Body;

export default Card;