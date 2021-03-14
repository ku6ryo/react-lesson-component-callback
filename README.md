# Overview  / 概要
コンポーネントからコンポーネントを使用している側へ値を受け渡す方法を学びます。コンポーネントの中で処理した結果を渡すことで、コンポーネントの親はコンポーネントの中で何が起こっているか知る必要がなくなります。この例では src/TextInput.js コンポーネントの中で、get value ボタンを押すと入力内容が親に渡され、アラートで表示される例を示しています。

# How to start React app. / React アプリの動かし方
Run following commands. You'll see content if you access localhost:3000 with your browser.
以下のコマンドを実行してください。ブラウザで localhost:3000 にアクセスするとコンテンツがみれます。
```
npm install
npm start
```

# 問題
もう一つボタンを追加して、Hello ボタンを作ってください。そのボタンを押したときには入力したテキストに Hello をつなげた文字を alert で表示するように変更してください。例: Michael という文字を入力したときには Hello Michael と表示するようにしてください。 
