import { useState } from 'react';
import SignUpModal from './components/SignUpModal';
import SignIn from './components/SignIn';

function LoginPage() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {/* 회원가입 모달 */}
      <SignUpModal modal={modal} setModal={setModal} />
      {/* 로그인페이지 */}
      <SignIn setModal={setModal} />
    </>
  );
}
export default LoginPage;
