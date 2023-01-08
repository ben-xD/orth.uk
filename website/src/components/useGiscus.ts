import { useEffect } from "react";

/**
 * Takes a ref which will be used as the container of Giscus's comment box.
 * 
 * Usage: useGiscus(ref); in a react component
 */
export const useGiscus = (ref) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://giscus.app/client.js";
        script.async = true;
        script.crossOrigin = "anonymous";

        script.setAttribute("data-repo", "ben-xD/orth.uk-comments");
        script.setAttribute("data-repo-id", "R_kgDOGjNfow");
        script.setAttribute("data-category", "Announcements");
        script.setAttribute("data-category-id", "DIC_kwDOGjNfo84CBEP2");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "top");
        script.setAttribute("data-theme", "light");
        script.setAttribute("data-lang", "en");

        ref.current.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
}
