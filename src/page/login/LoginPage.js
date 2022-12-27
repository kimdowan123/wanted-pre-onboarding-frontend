import { useState } from 'react';
import styled from 'styled-components';
import SignUpModal from './components/SignUpModal';
import SignIn from './components/SignIn';
// import {Container} from ''

function LoginPage() {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      {/* 회원가입 모달 */}
      <SignUpModal modal={modal} setModal={setModal} />
      {/* 로그인페이지 */}
      <SignIn setModal={setModal} />
    </Container>
  );
}
export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffbc40;
  padding: 1px;
`;
