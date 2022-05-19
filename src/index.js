import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    deleteFromIncompleteList(completeButton.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
