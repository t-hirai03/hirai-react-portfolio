# ポートフォリオ
## URL
下記URLに本ポートフォリオを掲載。

<strong>URL：https://privbucket03.s3.ap-northeast-1.amazonaws.com/portfolio/index.html</strong>

### 制作意図
業務で携わったことがないモダンなフロントエンドの技術が多いと思い、<br>
勉強がてらそれらを使用したポートフォリオを制作しました。
#### ポートフォリオ制作するうえで使用してみたかった技術
* React
* TypeScript

# 使用技術
<ul>
  <li>
    フレームワーク
    <ul>
      <li>React</li>
    </ul>
  </li>
  <li>言語
    <ul>
      <li>html</li>
      <li>css/scss</li>
      <li>JavaScript/TypeScript</li>
    </ul>
  </li>
  <li>
    アニメーション
    <ul>
      <li>tsparticles.js</li>
      <li>gsap</li>
    </ul>
  </li>
  <li>
    お問い合わせフォーム
    <ul>
      <li>redux</li>
      <li>Email.js</li>
      <li>bootstrap</li>
      <li>Material-UI</li>
    </ul>
  </li>
</ul>

## ヘッダーの天気情報
気象庁が用意しているApiから今日の福井県の天気情報を取得。
## MVのアニメーション
背景のアニメーションはtsparticles.jsを使用。<br>
文字のアニメーションはgsapを使用。
## My skill setのグラフ
Reactのグラフライブラリ「react-chartjs-2」を使用。
## お問い合わせフォーム
Email.jsを使用してメール送信処理を実装。<br>
送信時のローディング表示、非表示制御はreduxを使用。
## お問い合わせフォーム送信後に表示するモーダル
bootstrapのモーダルを使用。<br>
モーダルサイズのレスポンシブ調整をMaterial-UIを使用して対応。

# npm scripts
### `npm start`

アプリを開発モードで実行。<br>
http://localhost:3000 で表示。

### `npm run build`
本番用のアプリをフォルダにビルド。

# CSSルール
・コンポーネント名 + "-"をクラス名の頭につける。<br>
・CSS Modulesを使用する。

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
