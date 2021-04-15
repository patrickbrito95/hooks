import { useEffect, useState } from "react";

// FORMA ALTERNATIVA DE CRIAR ROTAS SEM O USO DE UM REACT ROUTER

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
