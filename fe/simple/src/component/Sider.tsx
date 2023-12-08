import React from 'react'
import styled from 'styled-components';
import {GiFallingStar} from "react-icons/gi"

const Sider = () => {
  return (
    <div>
      <Container>
        <Main>
            <Top>
                <Image/>
                <Content>
                    <Title>Dashboard</Title>
                    <SUbtitle>Softwarer</SUbtitle>
                </Content>
            </Top>

                <SUbtitle>You are on <span>FREE</span> plan</SUbtitle>

                <Upgrade>
                    <Icon/>
                    <span>Upgrade</span>
                </Upgrade>

                <br />
                <hr />
                <br />

                <Project>Project</Project>

                <ProjectTask>ProjectTask</ProjectTask>
                <ProjectTask>ProjectTask</ProjectTask>
                <ProjectTask>ProjectTask</ProjectTask>

                <br />
                <hr />
                <br />

                <But>
                <Button>Add Project</Button>
                </But>
        </Main>
      </Container>
    </div>
  )
}

export default Sider;
const But = styled.div`
    width: 100%;
    justify-content: center;
`
const Button = styled.button`
    text-transform: uppercase;
    font: small;
    padding: 10px 18px;
    border-radius: 3px;
    color: white;
    background-color: #7700ff;
    transition: all 400ms;
    outline: none;
    border: none;

    &:hover{
        cursor: pointer;
        transform: scale(1.02);
    }
`
const ProjectTask = styled.div`
    padding: 10px;
    margin: 6px 0;
    border-radius: 3px;
    transition: all 400ms;

    &:hover{
    background-color: #cc00ff68;
        cursor: pointer;
    }
`
const Project = styled.div`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 10px;
    text-transform: uppercase;
`
const Icon = styled(GiFallingStar)`
    font-size: 30px;
    margin-right: 10px;
    color: #5c0080;
`
const Upgrade = styled.div`
    margin-top: 30px;
    border: 1px solid purple;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px 0;
`
const SUbtitle = styled.div`
    font-size: 14px;
`
const Title = styled.div`
    font-weight: 600;
    line-height: 1.2;
    text-transform: uppercase;
`
const Content = styled.div`
    margin-left: 10px;
`
const Image = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background-color: purple;
`
const Top = styled.div`
    display: flex;
    margin-bottom: 50px;
`
const Main = styled.div`
    padding: 0 20px;
    margin-top: 50px;
`
const Container = styled.div`
    width: 200px;
    height: calc(100vh - 70px);
    position: fixed;
    border-right: 1px solid silver;
`
