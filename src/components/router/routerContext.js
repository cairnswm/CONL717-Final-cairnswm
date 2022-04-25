import { useState, createContext, useEffect } from "react";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
	const [page, setPage] = useState("#home");
    const [params, setParams] = useState({});

    const loadPage = () => {
        let hash = window.location.hash;
        let p = [];
        if (window.location.href.includes("?")) {
            window.location.href
                .split("?")[1]
                .split("&")
                .map((item) => {
                    let val = item.split("=");
                    let obj = {};
                    obj[val[0]] = val[1];
                    p[val[0]] = val[1];
                    return obj;
                });
            setParams(p);
            hash = hash.split("?")[0];
        }
        if (p.page) {
            if (p.page === "refer") {
                p.page = "register";
            }
            hash = "#" + p.page;
            let prm = "";
            Object.keys(p).forEach((key) => {
                if (key !== "page") {
                    if (prm.length > 0) {
                        prm += "&";
                    }
                    prm += key + "=" + p[key];
                }
            });
            window.location.href = "/#" + p.page + "?" + prm;
        }
        setPage(hash);
    };

    useEffect(() => {
        loadPage();
        window.onpopstate = function (event) {
            loadPage();
        };
        window.addEventListener("popstate", function (event) {
            loadPage();
        });

        window.addEventListener("hashchange", () => {
            loadPage();
        });
    }, []);

    useEffect(() => {
        //console.log("PAGE",page)
    }, [page]);

	return (
		<RouterContext.Provider
			value={{
				page, params
			}}>
			{children}
		</RouterContext.Provider>
	);
};

export default RouterProvider;
