const Menu = ({children}) => {
    return (<div className="sidebar">
        {children}
      </div>)
}

const Item = ({href, active, children}) => {
    return <a href={href} className={active ? "active" : null}>{children}</a>
}

Menu.Item = Item;

export default Menu