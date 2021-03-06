import { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const RegisterForm = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const { register, handleSubmit } = useForm();

  const signup = () => {
    axiosWithAuth()
      .post("/register", {
        ...input,
      })

      .catch((error) => {
        console.log(error, "something went wrong");
      });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signup(input);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          text="text"
          name="firstName"
          placeholder="first name"
          value={input.first}
          onChange={handleChange}
          ref={register}
        />
        <Input
          text="text"
          name="lastName"
          placeholder="last name"
          value={input.last}
          onChange={handleChange}
          ref={register}
        />
        <Input
          text="text"
          name="email"
          placeholder="email"
          value={input.email}
          onChange={handleChange}
          ref={register}
        />
        <Input
          text="text"
          name="phone"
          placeholder="phone"
          value={input.phone}
          onChange={handleChange}
          ref={register}
        />
        <Input
          text="text"
          name="address"
          placeholder="address"
          value={input.address}
          onChange={handleChange}
          ref={register}
        />
      </Form>

      <ButtonWrapper>
        <Button type="submit" onClick={onSubmit}>
          SIGN UP
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  width: 31.5rem;
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  margin-left: 1rem;
  justify-content: inherit;
`;

const Input = styled.input`
  width: 15rem;
  height: 2.5rem;
  border-radius: 2rem;
  background-color: #eafff9;
  text-align: center;
  font-family: "Ribeye", cursive;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  width: 15rem;
  height: 2.5rem;
  border-radius: 5px;
  text-align: center;
  border-radius: 2rem;
  margin-right: 3rem;
  background-color: #c82d35;
  color: #fff;
  border: 2px solid #000;
  margin-top: 1.85rem;
  font-family: "Ribeye", cursive;
`;

export default RegisterForm;
