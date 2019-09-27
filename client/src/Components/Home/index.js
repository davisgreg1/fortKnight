import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  p {
    display: flex;
    align-self: center;
    color: red;
  }
`

export default function Home () {
  return (
    <HomeContainer>
      <p>
        Fort Knight
      </p>
    </HomeContainer>
  )
}
