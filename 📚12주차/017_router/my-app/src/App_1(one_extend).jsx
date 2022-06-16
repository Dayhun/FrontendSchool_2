import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            {/* 라우트를 감싸줍니다. */}
            <Route path="/" component={Index} />
            <Route path="/one" component={One} />
            <Route path="/one/ex" component={OneExtend} />
            <Route path="/two" component={Two} />
            <Route path="/three" component={Three} />
        </BrowserRouter>
    );
}

function Index() {
    return <h1>hello world0</h1>
}

function One() {
    return <h1>hello world1</h1>
}
//주소를 /one/ex하면 /과 one이 중복되기 때문에 index()페이지와 One()페이지와 OneExtend()페이지가 한 페이지에 함께 출력된다, 
function OneExtend() {
    return <h1>hello world1 extend</h1>
}

function Two() {
    return <h1>hello world2</h1>
}

function Three() {
    return <h1>hello world3</h1>
}


export default App;