// セレクトボックス
const selectBox = document.getElementById("date");
// HTML内で結果を表示するエリア
const resultArea = document.getElementById("result");
// エンドポイント
const baseURL = "http://127.0.0.1:5000/eachmonth";

// 選択肢が選ばれた時に実行される
selectBox.addEventListener("change", () => {
  const option = selectBox.options[selectBox.selectedIndex];
  const selectedMonth = option.getAttribute("data-month");

  // 選択された月を指定して非同期でデータを取りに行く
  const getData = axios
    .get(`${baseURL}/${selectedMonth}`)
    // 成功した場合、renderHTML関数を呼び出して画面を書き換える
    .then((response) => {
      renderHTML(response.data);
    })
    // 失敗した場合、ログにエラーを出す
    .catch((error) => {
      console.log(error);
    });
});

// HTMLを書き換える関数
const renderHTML = (data) => {
  const newHtml = `
  <p>${data.month}月</p>
  <p>${data.fruits[0]}</p>
  `;

  resultArea.innerHTML = newHtml;
};
