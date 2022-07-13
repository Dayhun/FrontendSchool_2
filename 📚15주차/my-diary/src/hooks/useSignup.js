import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react"
import { appAuth } from "../firebase/config";
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    // 에러 정보 저장
    const [error, setError] = useState(null);
    // 서버가 통신 중인지 상태 확인 (통신 중이면 false)
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    // signup 훅 생성하기
    const signup = (email, password, displayName) => {
        // 상태 저장
        setError(null);
        setIsPending(true);

        // firebase 함수
        // firebase 초기화 객체 appAuth 받아오기
        createUserWithEmailAndPassword(appAuth, email, password)
            // 유저정보 자동으로 가져오기
            .then((userCredential) => {
                // Signed in
                // 유저 정보
                const user = userCredential.user;
                console.log(user);
                // user가 없는 경우
                if (!user) {
                    throw new Error('회원가입이 실패했습니다.');
                }
                // 계정 업데이트하기 (별명 등록)
                // updateprofile함수 실행
                //현재 로그인된 user를 appAuth.currentUser에 들어가있음
                updateProfile(appAuth.currentUser, { displayName })
                    //잘 가져왔다면
                    .then(() => {
                        setError(null);
                        setIsPending(false);
                        dispatch({ type: 'login', payload: user })
                    }).catch((error) => {
                        //에러가 발생했다면 (예외처리)
                        setError(error.message);
                        setIsPending(false);
                        console.log(error.message);
                    });

            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
                console.log(error.message);
            });
    }
    return { error, isPending, signup }
}
