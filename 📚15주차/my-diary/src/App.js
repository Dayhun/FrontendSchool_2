import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Nav from './components/Nav';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { isAuthReady, user } = useAuthContext();
  return (
    <div className="App">
      {/* HashRuoter는 http://localhost:3000/#/signup 로 hash를 써주어야 이동됨
      hashrouter는 SEO 검색기능 불가능
      브라우저 라우터를 쓰면 서버사이드렌더링과  같게 동작해서(?) SPA지만 크롤링이 가능하다
      해쉬라우터는 페이지안에있는 콘텐츠라 생각해서 크롤링이 불가능하다 SEO에 악영향을 미친다 */}
      {isAuthReady ? (
        <BrowserRouter>
          <Nav />
          <Routes>
            {/* user 정보 없으면 login화면으로 가라 */}
            {/* replace는 속성값이 false라면 뒤로가기를 눌렀을때 리다이랙트 이전의 url로 이동하는 것이 가능하지만, true는 이동할 수 없음. 즉, 로그인화면에서 뒤로가기 했을때 home화면으로 넘어가지 않게 지정함 */}
            <Route path='/' element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
            {/* 유저정보가 없다면 로그인화면, 있다면 홈으로 */}
            <Route path='/login' element={!user ? <Login /> : <Navigate replace={true} to="/" />}></Route>
            {/* 유저정보가 없다면 회원가입화면, 있다면 홈으로 */}
            <Route path='/signup' element={!user ? <Signup /> : <Navigate replace={true} to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      ) : 'Loading...'}
    </div>
  );
}

export default App
