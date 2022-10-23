const input = document.getElementById("button");

function addingEventListener() {
    alert("I Was clicked!");
    input.addEventListener("click",addingEventListener);
}
addingEventListener();
