import React from 'react'
import img from "../assets/CodeLab Best Logo.png"
import styled from 'styled-components';
import {AiOutlineSearch} from "react-icons/ai"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
        <Holder>
                <Logo src={img}/>

        <Search>
          <Icon/>
          <Input placeholder='Search here'/>
        </Search>
        </Holder>

        <Holder>
          <Button>Create</Button>
          <Avatar>P</Avatar>
        </Holder>

        </Main>
      </Container>
    </div>
  )
}

export default Header;
const Avatar =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkorange;
  color: white;
  font-family: Poppins;
`
const Button =styled.button`
  padding: 15px 38px;
  background-color: purple;
  color: white;
  border-radius: 5px;
  margin-right: 10px;
  font-family: Poppins;
`
const Input =styled.input`
  flex: 1;
  height: 100%;
  outline: none;
  border: none;

  &::placeholder{
    font-family: Poppins;
  }
`
const Icon =styled(AiOutlineSearch)`
  font-size: 40px;
`
const Search =styled.div`
  border: 1px solid silver;
  width: 300px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-left: 10px;
  overflow: hidden;
`
const Logo =styled.img`
  height: 40px;
  margin-right: 40px;
`
const Holder =styled.div`
  display: flex;
  align-items: center;
`
const Main =styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Container =styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid silver;
`
