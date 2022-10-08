# コマンド
### `npm start`

アプリを開発モードで実行します。http://localhost:3000
を 開いてブラウザで表示します。

編集を行うと、ページがリロードされます。
また、コンソールに lint エラーが表示されます。

### `npm run build`

本番用のアプリをフォルダーにビルドします。

# CSSルール
コンポーネント名 + "-"をクラス名の最初につける。

# package.jsonの更新方法

### npx npm-check-updates
アップデートするライブラリがあるか確認する。

### npx npm-check-updates -u
package.jsonの中身を最新のバージョンに書き換える。

### npm install
node_moduleに最新バージョンを適用する。