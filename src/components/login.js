import React,{useState} from "react";
import{
    Input,
    Button,
    Form,
    FormGroup,
    Container,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import Home from "./components/home.js";
const Log=({add})=>
{
const handlesubmit=e=>{
 <Home></Home>   
}

    return(
<Form onSubmit={handlesubmit}> 
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
            <Button color="success">
                Login 
            </Button>
        </InputGroupAddon>
        </InputGroup>
        
    </FormGroup>
</Form>


);
};

export default Log;