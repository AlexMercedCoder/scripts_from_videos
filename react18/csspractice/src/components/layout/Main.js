import FlexContainer from "../style/FlexContainer";
import MainContent from "./MainContent";
import MainSidebar from "./MainSidebar";

function Main(props) {
  return (
    <>
      <FlexContainer className="main">
        <MainContent />
        <MainSidebar />
      </FlexContainer>
    </>
  );
}

export default Main;
