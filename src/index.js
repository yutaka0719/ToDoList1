import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);

  //button(削除)タグ追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //    const deleteTarget = deleteButton.parentNode;
    //    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-low";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //    const deleteTarget = completeButton.parentNode;
    //    document.getElementById("incomplete-list").removeChild(deleteTarget);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化する
    addTarget.textContent = null;

    //liタグを生成する
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグを生成する
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された”戻す”ボタンの親タグ（div）を完了リストから削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得する
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定する
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
};
