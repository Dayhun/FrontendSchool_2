import './App.css'
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';

function App() {
  //로그인이 된 경우, homepage 보여주기
  const user = {
    login: true,
    id: 'lanna05@naver.com',
    nickname: 'day'
  }
  return (
    <div>
      {user.login ? <Homepage id={user.id} nickname={user.nickname} /> : <Login />}
    </div>
  );
}

export default App;

//menu 분해하기
// function Header() {
//   return (
//     <div>
//       header
//       <div>
//         menu
//       </div>
//     </div>
//   )
// }

// function Menu() {
//   return (
//     <div>
//       menu
//     </div>
//   )
// }

//포함관계는 따로 jsx폴더 만들어주는 편> menu폴더 따로 만들기
// function Header() {
//   return (
//     <div>
//       header
//       <Menu />
//     </div>
//   )
// }
// function Main() {
//   return (
//     <div>
//       section
//     </div>
//   )
// }
// function Footer() {
//   return (
//     <div>
//       footer
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

//아래를 참고로, header, section, footer함수로 컴포넌트 만들어보기
//회사 컨벤션에 따라 사용하기. 주로 3번 많이 사용.
// 1. const Section =()=>{}
// 2. const Section = function(){}
// 3. function Section(){}

// function App() {
//   return (
//     <div>
//       <div>
//         header
//         <div>
//           menu
//         </div>
//       </div>
//       <div>
//         section
//       </div>
//       <div>
//         footer
//       </div>
//     </div>
//   );
// }


