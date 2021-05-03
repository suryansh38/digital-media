import React from "react";
import styled from "styled-components";
import{
    Input,
    Button,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import Home from "./home.js";
const Log=(props)=>
{const {setFlag}=props;
console.log("props ",props);
   return(
       <Container>
           <Box>
<Form > 
    <FormGroup>
        <InputGroup>
        <Input
        type="text"
        name="todo"
        id="todo"
        placeholder="Email id"
        />
        <Input
        type="text"
        name="todo"
        id="todo"
        placeholder="Password"
        />
        <InputGroupAddon>
            <Button onClick={()=>{setFlag(0)}}  color="success" href="/home">
                Login 
            </Button>
        </InputGroupAddon>
        </InputGroup>
    </FormGroup>
</Form>
</Box>
<BgImage/>

</Container>


);
};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Box = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export default Log;