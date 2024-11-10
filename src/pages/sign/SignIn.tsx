import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { padding } from "../../GlobalStyled";

const Container = styled.div`
  width: 100%;
  background-color: yellow;
  padding: ${padding.sidePaddingPc};
`;

const LogInBox = styled.div`
  width: 100%;
  padding: 150px;
  border: 1px solid #222;
  border-radius: 50px;
`;

const Form = styled.form``;
const Input = styled.input``;

const Text = styled.p`
  font-size: 16px;
`;
const Button = styled.button``;

interface FormInputs {
  username: string;
  password: string;
  name: string;
}

export const SignIn = () => {
  const navigate = useNavigate();
  const [loginText, setLoginText] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
  });

  const enterusername = "username123";
  const enterpassword = "password123";

  const loginHandler: SubmitHandler<FormInputs> = ({ username, password }) => {
    if (enterusername === username && enterpassword === password) {
      alert("로그인 되었습니다");
      navigate("/");
    } else {
      setLoginText("아이디, 비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <Container>
      <LogInBox>
        <Text>로그인하세요</Text>
        <p>로그인하시고 뮤지컬 정보를 손쉽게 받아보세요.</p>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <Input
            {...register("username", {
              required: "아이디를 입력",
              pattern: {
                value: /^[a-zA-Z0-9]{4,12}$/,
                message: "4~12자, 영문 대소문자, 숫자로 만들어주세요.",
              },
            })}
            type="text"
            placeholder="아이디"
          />
          <Text>{errors?.username?.message}</Text>
          <Input
            {...register("password", {
              required: "비번을 입력",
              minLength: {
                value: 8,
                message: "8자리 이상 입력해주세요.",
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          <Text>{errors?.password?.message}</Text>
          <Text>{loginText}</Text>
          <Button type="submit">버튼</Button>
        </Form>
      </LogInBox>
    </Container>
  );
};
