const add = document.querySelector('.add-btn');
const item = document.querySelector('.item');
const ul = document.querySelector('ul');
const del = document.querySelector('.del-btn');

// 리스트 삭제하기
function removeParentNode(event) {
    var target = event.target;
    target.removeEventListener("click", removeParentNode);
    target.parentNode.remove();
}

function createList() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(add.value));

    //삭제 버튼 만들기
    const btnDel = document.createElement("button");
    btnDel.appendChild(document.createTextNode("삭제"));
    btnDel.addEventListener("click", removeParentNode);

    li.innerHTML = li.innerHTML + " ";
    li.className = "li";
    li.appendChild(btnDel);
    ul.appendChild(li);

    inputData.value = "";
}