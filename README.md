# The View
http://hirai.website/hirai-react-portfolio/

上記URLに本ポートフォリオを掲載。

# 使用技術
<ul>
  <li>
    React
    <ul>
      <li>redux</li>
      <li>tsparticles.js</li>
    </ul>
  </li>
  <li>TypeScript</li>
  <li>Email.js</li>
</ul>

# コマンド
### `npm start`

アプリを開発モードで実行。<br>
http://localhost:3000 で表示。

### `npm run build`
本番用のアプリをフォルダにビルド。

# CSSルール
コンポーネント名 + "-"をクラス名の頭につける。<br>
CSS Modulesを使用する。

# package.jsonの更新方法

## npx npm-check-updates
アップデートするライブラリがあるか確認する。

## npx npm-check-updates -u
package.jsonの中身を最新のバージョンに書き換える。

## npm install
node_moduleに最新バージョンを適用する。

### npm installでエラーが出る場合
npx npm-check-updates -u 後にnpm installを実行したらエラーが出る時があることを確認。<br>
以下のエラーのようなものが出た場合は、「npm config set legacy-peer-deps true」を実行してからnpm installを行う。<br>

npm ERR! code ERESOLVE <br>
npm ERR! ERESOLVE could not resolve <br>
npm ERR! <br>
npm ERR! While resolving: redux-devtools@3.7.0 <br>
npm ERR! Found: react@18.2.0 <br>
npm ERR! node_modules/react <br>
npm ERR!   react@"^18.2.0" from the root project <br>
npm ERR!   peer react@">=16.8.0" from @emotion/react@11.10.4
