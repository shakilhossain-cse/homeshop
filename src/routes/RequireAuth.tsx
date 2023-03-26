import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../recoil/atoms/LoginAtom";

function RequireAuth({ children }: { children: JSX.Element }) {
  const token = useRecoilState(tokenAtom);
  const location = useLocation();

  if (!token[0]) {
    const redirect = location.pathname.replace('/', '');
    return <Navigate to={`/login?redirect=${redirect}`} state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
