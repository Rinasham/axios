// セレクトボックス
const selectBox = document.getElementById("date");
// HTML内で結果を表示するエリア
const resultArea = document.getElementById("result");

// 選択肢が選ばれた時に実行される
selectBox.addEventListener("change", () => {
  // 何月が選択されたかを判定
  const option = selectBox.options[selectBox.selectedIndex];
  const selectedMonth = option.getAttribute("data-month");
  // 全データが入ったリストから選択された月のデータを探す
  dataList.map((data) => {
    if (data.month == selectedMonth) {
      // 見つかったらrenderHTML関数を呼んで画面を再描画する
      renderHTML(data);
    }
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
