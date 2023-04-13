import { Navigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenAtom, userAtom } from "../recoil/atoms/LoginAtom";
import { sidebarDAta } from "../components/Sidebar/sidebardata";
import { toast } from "react-toastify";
import { removeFromLocalStorage } from "../utils/localStorage";
import { TOKEN_KEY, USER_KEY } from "../recoil/constance";

function RequireAdmin({ children }: { children: JSX.Element }) {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const location = useLocation();

  if (user && user.role !== "admin") {
    toast.error("Your are not authorized");
    setUser(null);
    setToken(null);
    removeFromLocalStorage(TOKEN_KEY);
    removeFromLocalStorage(USER_KEY);
    return <Navigate to={`/login`} replace />;
  }

  return children;
}

export default RequireAdmin;
