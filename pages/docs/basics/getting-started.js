import React from 'react'
import DocsLayout from '../../../components/DocsLayout'
import LiveEdit from '../../../components/LiveEdit'

const sample = (`
const Title = styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;

const Wrapper = styled.section\`
  padding: 4em;
  background: papayawhip;
\`;

// Use Title and Wrapper like any other React component –
// except they're styled!
render(
  <Wrapper>
    <Title>Hello World, this is my first styled component!</Title>
  </Wrapper>
);
`).trim()

const GettingStarted = ({ url }) => (
  <DocsLayout url={url}>
    <p>
      Styled Components is utilising tagged template literals to style your components.
    </p>

    <p>
      It removes the mapping between components and styles, which means that when you're defining your styles,
      you're actually creating a normal React component, that has your styles attached to it.
    </p>

    <p>
      This example creates two simple components, a wrapper and a title, with some styles attached to it.
      You can edit the code and get a feel for how you'd work with Styled Components.
    </p>

    <LiveEdit
      code={sample}
      noInline
    />

    <p>
      The CSS rules are automatically vendor prefixed, so you don't have to think about it.
    </p>
  </DocsLayout>
)

export default GettingStarted