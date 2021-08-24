// ブラウザの開発者ツールからも実行できる
// Blobオブジェクトを生成
const blob = new Blob(["Hello WEB+DB PRESS!"]);
// Blobオブジェクトを指すオブジェクトURLを生成する
const url = URL.createObjectURL(blob);
// オブジェクトURLに対してfetch()する
const resp = await fetch(url);
// Hello Hello WEB+DB PRESS! と出力される
console.log(await resp.text());
// オブジェクトURLを解放する
URL.revokeObjectURL(url);
