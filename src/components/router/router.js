import { useContext } from "react";
import RouterProvider, { RouterContext } from "./routerContext"

const Router = ({ children }) => {
    return (
        <RouterProvider>
            {children}
        </RouterProvider>
    )
}

const Page = ({ hash, children }) => {
    const { page } = useContext(RouterContext);

    return (<>{page && (page === hash || page === "#" + hash ? <>{children}</> : null)}</>)
}

const Menu = ({children}) => {
    return (<div className="sidebar">
        {children}
      </div>)
}

const To = ({ href, params, children }) => {
    const { page } = useContext(RouterContext);
    return <a href={`#${href}?${params}`} className={page === href || page === "#" + href ? "active" : null}>{children}</a>
}

Router.Page = Page;
Router.Menu = Menu;
Router.To = To;

export const useParams = () => {
    const { params } = useContext(RouterContext);

    return params;
}


export default Router;