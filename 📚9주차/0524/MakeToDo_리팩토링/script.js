var button = document.getElementById("enter");
var inputData = document.getElementById("input");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteBtn = document.getElementsByClassName("delete");

// 토글을 이용해서 취소선 그리기
ul.onclick = function (event) {
    if (event.target.className === "li" || event.target.className==="li done") {
        event.target.classList.toggle("done");
    }
}
// 리스트 삭제하기
function removeParentNode(event) {
    var target = event.target;
    target.removeEventListener("click", removeParentNode);
    target.parentNode.remove();
}

// 초기 삭제 버튼에도 리스트 삭제 달아주기
for (var i=0; i<deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", removeParentNode);
}

// 리스트 추가하기
function checkInputLength() {
    return inputData.value.length;
}

function createList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputData.value));

    //삭제 버튼 만들기
    var btnDel = document.createElement("button");
    btnDel.appendChild(document.createTextNode("삭제"));
    btnDel.addEventListener("click", removeParentNode);

    li.innerHTML = li.innerHTML + " ";
    li.className = "li";
    li.appendChild(btnDel);
    ul.appendChild(li);

    inputData.value = "";
}

function addListAfterClick() {
    if (checkInputLength() > 0) {
        createList();
    }
}

function addListAfterKeypress(event) {
    if (checkInputLength() > 0 && event.keyCode === 13) {
        createList();
    }
}

button.addEventListener("click", addListAfterClick);
inputData.addEventListener("keypress", addListAfterKeypress);
