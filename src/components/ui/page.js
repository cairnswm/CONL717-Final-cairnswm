export const Page = ({children}) => {
    return <div className="page">
        {children}
    </div>
}

export const Row = ({className, children}) => {
    return <div className={`row ${className}`}>
        {children}
    </div>
}

export const Col = ({children, d, s, m, l}) => {
    return <div className={`${d ? `col-${d}` : ""} ${s ? `col-s-${s}` : ""} ${m ? `col-m-${m}` : ""}  ${l ? `col-l-${l}` : ""} ${(!s&&!m&&!l) ? "col" : ""}`}>
        {children}
    </div>
}
