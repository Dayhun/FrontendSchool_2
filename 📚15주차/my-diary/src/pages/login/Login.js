import styles from './Login.module.css'
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
    // 입력받을 값을 useState로 관리
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();
    const handleData = (event) => {
        // 이벤트가 발생한 타겟의 타입이 이메일/비밀번호인 경우, 값재설정
        // 왜 이렇게 해야해요? 
        // react 신뢰 가능한 단일 출처 (값을 입력받을 수 있는 방법을 하나로!)
        // : 사용자 키보드로 직접 입력받는 방법, 음성인식 등 많은데 이를 배제시키기 위해, useState를 사용하여 원래 기능 중지하고 우리가 원하는 방향으로 이끌기 위해서! (이벤트 차단을 위해)
        if (event.target.type === 'email') {
            setEmail(event.target.value);
        } else if (event.target.type === 'password') {
            setPassword(event.target.value);
        }
    }

    // 버튼이 클릭되었을때 작동될 이벤트
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password)
        login(email, password);
    }

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>로그인</legend>
                <label htmlFor='myEmail'>email : </label>
                <input type='email' id='myEmail' required value={email} onChange={handleData}></input>

                <label htmlFor='myPassWord'>password : </label>
                <input type='password' id='myPassWord' required value={password} onChange={handleData}></input>

                {/* pending이 false이고(통신이 안되고있으면) 버튼반환 */}
                {!isPending &&
                    <button type='submit' className={styles.btn}>로그인</button>}
                {/* 로그인된 상태라면 */}
                {isPending && <strong>로그인이 진행중입니다..</strong>}
                {/* 에러가 발생했다면 */}
                {error && <strong>{error}</strong>}
            </fieldset>
        </form>
    )
}
