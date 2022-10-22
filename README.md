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
## npm installでエラーが出る場合
npx npm-check-updates -u 後にnpm installを実行したらエラーが出る時があることを確認。
以下のエラーのようなものが出た場合は、「npm config set legacy-peer-deps true」を実行してからnpm installを行う。

npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: redux-devtools@3.7.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!   peer react@">=16.8.0" from @emotion/react@11.10.4