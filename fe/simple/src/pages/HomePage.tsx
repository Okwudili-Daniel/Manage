import React from 'react'
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Start>
            Project / Project Task
          </Start>

          <Project>Project Task</Project>

          <Detail>createdAt: </Detail>

          <Card>start</Card>
        </Main>
      </Container>
    </div>
  )
}

export default HomePage;
// const Container = styled.div``
const Card = styled.div`
  width: 300px;
  background-color: red;
`
const Detail = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 20px;
`
const Project = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`
const Start = styled.div`
  color: gray;
`
const Main = styled.div``
const Container = styled.div`
  width: 100%;
`
