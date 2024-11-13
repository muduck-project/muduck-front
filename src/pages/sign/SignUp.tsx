import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";
import { routes } from "../../routes";

const Container = styled.div`
  width: 100%;
  /* background-color: yellow; */
  padding: ${padding.sidePaddingPc};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogInBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 5px 5px 20px 0px #cacaca;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const Input = styled.input`
  all: unset;
  width: 80%;
  border: 1px solid #999;
  padding: 20px;
  border-radius: 15px;
`;

const Text = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0 50px 0;
`;

const SignText = styled.p`
  margin: 10px 0;
`;

const Button = styled.button`
  all: unset;
  font-size: 18px;
  width: 80%;
  margin: 10px 0;
  padding: 20px;
  background-color: ${colors.point};
  text-align: center;
  border-radius: 15px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const Notice = styled.ul`
  display: flex;
  padding: 10px 0;

  li {
    margin: 0 10px;
  }

  p {
    font-weight: 700;
    color: ${colors.point};
  }
`;

interface FormInputs {
  username: string;
  password: string;
  name: string;
}

export const SignUp = () => {
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
        <Text>회원가입</Text>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <Input
            {...register("username", {
              required: "아이디를 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9]{4,12}$/,
                message: "4~12자, 영문 대소문자, 숫자로 만들어주세요.",
              },
            })}
            type="text"
            placeholder="아이디"
          />
          <SignText>{errors?.username?.message}</SignText>
          <Input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              minLength: {
                value: 8,
                message: "8자리 이상 입력해주세요.",
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          <SignText>{errors?.password?.message}</SignText>
          <Button type="submit">로그인</Button>
          <SignText>{loginText}</SignText>
          <Notice>
            이미 회원이시라면? &nbsp;
            <Link to={routes.signIn}>
              <p>로그인</p>
            </Link>
            &nbsp;하세요
          </Notice>
        </Form>
      </LogInBox>
    </Container>
  );
};
