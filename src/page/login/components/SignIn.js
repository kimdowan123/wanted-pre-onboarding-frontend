/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContainer, Input, LoginBtn, SignUpBtn } from '../styled';
import { handleSignin } from '../../../api/index';

function SignIn(props) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const loginFun = () => {
    if (userInfo.email === '') {
      alert('Id를 입력해주세요.');
    } else if (userInfo.email.includes('@') === false) {
      alert('@을 포함한 이메일 형식으로 입력해주세요.');
    } else if (userInfo.email.includes('@') === true) {
      if (userInfo.password.length === 0) {
        alert('비밀번호를 입력해주세요.');
      } else if (userInfo.password.length < 8) {
        alert('비밀번호는 8자리이상입니다.');
      } else if (userInfo.password.length >= 8) {
        handleSignin(userInfo, navigate);
      }
    }
  };

  return (
    <SignInContainer>
      <h1>프리온보딩 사전과제</h1>
      <Input
        type="text"
        placeholder="UserID"
        onInput={(e) => {
          const userInfoCopy = { ...userInfo };
          userInfoCopy.email = e.target.value;
          setUserInfo(userInfoCopy);
        }}
      />
      <Input
        type="password"
        placeholder="Password"
        onInput={(e) => {
          const userInfoCopy = { ...userInfo };
          userInfoCopy.password = e.target.value;
          setUserInfo(userInfoCopy);
        }}
      />
      <LoginBtn
        type="button"
        onClick={() => {
          loginFun();
        }}
      >
        Login
      </LoginBtn>

      <SignUpBtn>
        Not a member?
        <button
          type="button"
          onClick={() => {
            props.setModal(true);
          }}
        >
          Creat Account
        </button>
      </SignUpBtn>
    </SignInContainer>
  );
}
export default SignIn;
