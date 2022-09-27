import React from "react";
import HeaderSection from "./components/header";
import Top from "./page/top";
import AudioLoading from "./components/audioLoading";
import RevolvingDotLoading from "./components/revolvingDotLoading";
import { useSelector } from 'react-redux'
import { selectCount } from './store/reducer'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const isRevolvingDotLoading = useSelector(selectCount);

  return (
    <div>
      {isRevolvingDotLoading && <RevolvingDotLoading />}
      {/* ヘッダー */}
      <HeaderSection />
      {/* コンテンツ */}
      {isLoading ? (
        <AudioLoading />
      ) : (
        <div className="index-contents">
          <Top />
        </div>
      )}
    </div>
  );
}

export default App;
