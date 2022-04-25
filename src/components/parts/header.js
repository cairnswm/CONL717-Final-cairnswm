

const Header = ({children}) => {
    return (
      <>
      <header className="App-header bg-section" style={{position: "fixed",top:"0",width: "100%"}}>
          {children}
      </header>
      <div style={{height:"63px"}}>

      </div>
      </>
    )
}

export default Header;