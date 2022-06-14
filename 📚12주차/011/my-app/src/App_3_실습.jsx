import React, { useState } from "react";

function App() {
    return (
        <Menu />
    );
}

function A() {
    return (
        <section>
            <h2>menu A</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit totam nam similique. Aperiam corrupti veritatis numquam pariatur atque repellendus cupiditate? Quibusdam non dolor quia odio modi, excepturi illum harum autem!</p>
        </section>
    )
}
function B() {
    return (
        <section>
            <h2>menu B</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit totam nam similique. Aperiam corrupti veritatis numquam pariatur atque repellendus cupiditate? Quibusdam non dolor quia odio modi, excepturi illum harum autem!</p>
        </section>
    )
}
function C() {
    return (
        <section>
            <h2>menu C</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit totam nam similique. Aperiam corrupti veritatis numquam pariatur atque repellendus cupiditate? Quibusdam non dolor quia odio modi, excepturi illum harum autem!</p>
        </section>
    )
}

function Control({ menuList }) {
    if (menuList === 'a') {
        return <A />
    }
    else if (menuList === 'b') {
        return <B />
    }
    else if (menuList === 'c') {
        return <C />
    } else {
        return <NotFound />
    }
}

function NotFound() {
    return <h2>NotFound</h2>
}
function Menu() {
    const [menuList, setMenuList] = useState('a')
    const handleMenu = (e) => {
        setMenuList(e.target.id)
    }
    return (
        <div>
            <nav>
                <ul>
                    <li id="a" onClick={handleMenu}>메뉴1</li>
                    <li id="b" onClick={handleMenu}>메뉴2</li>
                    <li id="c" onClick={handleMenu}>메뉴3</li>
                    <li id="d" onClick={handleMenu}>메뉴4</li>
                </ul>
            </nav>
            <Control menuList={menuList} />
        </div>
    )
}

export default App;