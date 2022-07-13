// 사용자 정보 관리
import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();
const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            // ...state : state값 업데이트
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        case 'authIsReady':
            return { ...state, user: action.payload, isAuthReady: true }
        default:
            return state
    }
}

// context 객체를 구독할 컴포넌트의 묶음 범위를 정하는 함수
const AuthContextProvider = ({ children }) => {
    // useReducer는 객체정보 관리에 용이 > user정보를 관리할 hook
    // state를 관리하기 위해서 authReducer함수를 실행해야함
    // authReducer 사용하기 위해 dispatch로 호출

    // 정리
    // authReducer : 리듀서 함수. state를 업데이트함.
    // useReducer 두번째 인자 : state를 초기화함.
    // state : 우리가 관리할 대사.
    // dispatch : authReducer 함수를 호출. action 인자를 사용.
    // action : authReducer 함수에서 사용할 수 있는 type, payload 같은 값을 dispatch함수에 전달.
    const [state, dispatch] = useReducer(authReducer, {
        // state 초기화
        user: null,
        //유저의 인증정보가 준비가 됐는지 관리
        IsAuthReady: false
    })

    // useEffect : 의존성배열인[]의값을 감시하다가 그값이 변하면 실행시켜주는애
    // [] 빈배열을 넣어주면, 업데이트 실행 될때마다 실행 안됨. 딱 한번만 실행됨.
    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            // 계정이 준비가 되면, user 정보 업데이트
            dispatch({ type: 'authIsReady', payload: user })
        })
        // 상태 확인하자마자 연결 종료시키기 (return으로 cleanup해주기)
        return unsubscribe
    }, [])

    // provider는 value를 통해서 값을 공유함.
    // dispatch 함수를 전달하여 다른 훅이나 컴포넌트에서도 user state값을 업데이트 할 수 있게 만들어 줍니다.
    // state : 로그인한 유저의 정보 > 자주 변경되는 데이터이기 때문에 Reducer함수를 통해 관리를 해서 state를 업데이트! 전개구문으로 사용
    console.log('유저의 상태: ', state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, authReducer, AuthContextProvider }