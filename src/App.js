import ChildsScrollSection from "./components/ChildsScrollSection";
import MainScrollSection from "./components/MainScrollSection";
import "./styles/style.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <MainScrollSection>
            <ChildsScrollSection className="active">
              <h1>Animejs plugins</h1>
            </ChildsScrollSection>
            <ChildsScrollSection>
              <h1>Animejs plugins</h1>
            </ChildsScrollSection>
            <ChildsScrollSection direction="vertical">
              <h1>Animejs plugins</h1>
            </ChildsScrollSection>
            <ChildsScrollSection direction="horizontal">
              <h1>Animejs plugins</h1>
            </ChildsScrollSection>
          </MainScrollSection>
        </header>
      </div>
    </>
  );
}

export default App;
