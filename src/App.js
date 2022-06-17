import styled from 'styled-components'

import Article from './components/Article'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <StyledMain>
        <Article title="Foo" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a justo id turpis suscipit facilisis a vel enim. Nam et cursus orci. Suspendisse potenti. Aenean egestas ipsum a lorem posuere, ac scelerisque ligula imperdiet. Aenean quis laoreet sapien. Vivamus quam ligula, rutrum non porttitor at, faucibus a arcu. Suspendisse dapibus aliquet lacus id pulvinar. Vivamus porta orci nunc, id dignissim risus euismod sed. Fusce quis ullamcorper mauris. Proin vitae posuere sapien. Ut mollis felis ultrices erat posuere, eu egestas lorem dapibus. Proin eleifend quis turpis dapibus blandit." />
        <Article title="Bar" content="Vivamus pretium a turpis at dignissim. Nunc a molestie diam. Morbi porta mollis orci id dignissim. Nulla varius, purus non semper vehicula, dui elit dapibus dui, nec vestibulum sapien lorem quis nisi. Aliquam ut turpis eleifend quam volutpat viverra. Quisque id gravida nulla, ut feugiat urna. Quisque vestibulum nisl neque, eget consequat ligula maximus quis. Nulla dui tellus, bibendum eget lacinia ac, tempus eu mauris. In sed turpis eu turpis volutpat tempus. Sed finibus elit magna. Donec interdum arcu massa, a eleifend ex consectetur et. Etiam nec ipsum in eros suscipit eleifend ut vel magna. Fusce lacinia laoreet augue, sed maximus massa finibus eu. Nam eu congue sapien, in egestas diam." />
      </StyledMain>
    </div>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`