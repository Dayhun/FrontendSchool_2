import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    //useContext를 이용하여 AuthContext의 값 가져오기
    const context = useContext(AuthContext);
    // 이제 context안에는 AuthContext에서 반환하는 state값과 dispatch 함수 두가지가 들어있음.
    return context
}