import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";

function App() {
  return (
    <div className="App">
      <Header />

      <Content>
        <Summary />
        <Meals />
        <Basket />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
