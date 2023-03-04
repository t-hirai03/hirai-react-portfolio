import React from "react";
import HeaderSection from "./components/header";
import Top from "./page/top";
import FooterSection from "./components/footer";
import RevolvingDotLoading from "./components/revolvingDotLoading";
import { useSelector } from 'react-redux'
import { selectCount } from './store/reducer'

const App = () => {
  const isRevolvingDotLoading = useSelector(selectCount);

  return (
    <div>
      {isRevolvingDotLoading && <RevolvingDotLoading />}
      {/* ヘッダー */}
      <HeaderSection />
      {/* コンテンツ */}
      <Top />
      {/* フッター */}
      <FooterSection />
    </div>
  );
}

export default App;
