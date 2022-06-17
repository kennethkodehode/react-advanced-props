import styled from 'styled-components'

export default function Article({ title, content }) {
  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  background-color: aliceblue;
  border-radius: .25em;
  padding: 1em;
`