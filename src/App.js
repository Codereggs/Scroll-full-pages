import ChildsScrollSection from "./components/ChildsScrollSection";
import MainScrollSection from "./components/MainScrollSection";
import "./styles/style.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <MainScrollSection>
            <ChildsScrollSection active>
              <h1>Desde que te conocí</h1>
            </ChildsScrollSection>
            <ChildsScrollSection>
              <h1>Me di cuenta que</h1>
            </ChildsScrollSection>
            <ChildsScrollSection direction="vertical">
              <h1>Eres el amor de mi vida</h1>
            </ChildsScrollSection>
            <ChildsScrollSection direction="horizontal">
              <h1>Mi dulce deseo</h1>
            </ChildsScrollSection>
            <ChildsScrollSection direction="horizontal">
              <h1>Mi hermosa princesa</h1>
            </ChildsScrollSection>
            <ChildsScrollSection direction="horizontal">
              <h1>Y quiero decirte</h1>
            </ChildsScrollSection>
            <ChildsScrollSection direction="vertical">
              <h1>Que te AMO ❤️</h1>
            </ChildsScrollSection>
          </MainScrollSection>
        </header>
      </div>
    </>
  );
}

export default App;
