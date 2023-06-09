import { Navigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenAtom, userAtom } from "../recoil/atoms/LoginAtom";
import { sidebarDAta } from "../components/Sidebar/sidebardata";
import { toast } from "react-toastify";
import { removeFromLocalStorage } from "../utils/localStorage";
import { TOKEN_KEY, USER_KEY } from "../recoil/constance";

function RequireAuth({ children }: { children: JSX.Element }) {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const location = useLocation();

  if (!token) {
    const redirect = location.pathname.replace("/", "");
    return (
      <Navigate
        to={`/login?redirect=${redirect}`}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default RequireAuth;
