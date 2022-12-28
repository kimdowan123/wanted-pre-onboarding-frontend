import { useEffect, useState } from 'react';
import { handleSignup } from '../../../api/index';
import {
  BackModal,
  WhiteModal,
  Xicon,
  AlertSection,
  IdMes,
  PwMes,
} from '../styled';

function SignUpModal(props) {
  const { modal } = props;
  const { setModal } = props;

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  // SignUp state
  const [IdMessage, setIdMessage] = useState('');
  const [IdCheck, setIdCheck] = useState(false);

  const [PwMessage, setPwMessage] = useState('');
  const [PwCheck, setPwCheck] = useState(false);

  // 회원가입 버튼 활성화/비활성화
  const [ActivateBTN, setActivateBTN] = useState(true);

  useEffect(() => {
    if (IdCheck && PwCheck === true) {
      setActivateBTN(false);
    } else {
      setActivateBTN(true);
    }
  }, [IdCheck, PwCheck]);

  // 아이디 유효성검사 function
  const EmailCheck = (e) => {
    const inputId = e.target.value;

    if (inputId === '') {
      setIdMessage('');
    } else if (inputId.includes('@') === false) {
      setIdCheck(false);
      setIdMessage('@을 포함한 이메일형식의 Id를 입력해주세요.');
    } else if (inputId.includes('@') === true) {
      setIdCheck(true);
      setIdMessage('올바른 양식입니다.');
    }
  };

  // 비밀번호 유효성검사 function
  const passWordCheck = (e) => {
    const inputPw = e.target.value;

    if (inputPw === '') {
      setPwMessage('');
    } else if (inputPw.length < 8) {
      setPwCheck(false);
      setPwMessage('8자리 이상으로 입력해주세요.');
    } else {
      setPwCheck(true);
      setPwMessage('올바른 양식입니다.');
    }
  };

  return (
    <BackModal modal={modal}>
      <WhiteModal>
        <Xicon
          onClick={() => {
            setModal(false);
          }}
        />
        <h2>회원가입</h2>
        <AlertSection>
          <p>* 아이디</p>
          <IdMes IdCheck={IdCheck}>{IdMessage}</IdMes>
        </AlertSection>
        <input
          type="text"
          placeholder="Email을 입력해주세요."
          onInput={(e) => {
            const box = { ...userInfo };
            box.email = e.target.value;
            setUserInfo(box);
            EmailCheck(e);
          }}
        />

        <AlertSection>
          <p>* 비밀번호</p>
          <PwMes PwCheck={PwCheck}>{PwMessage}</PwMes>
        </AlertSection>
        <input
          type="password"
          placeholder="Password를 입력해주세요."
          onInput={(e) => {
            const box = { ...userInfo };
            box.password = e.target.value;
            setUserInfo(box);
            passWordCheck(e);
          }}
        />

        <button
          type="button"
          disabled={ActivateBTN}
          onClick={() => {
            handleSignup(userInfo);
          }}
        >
          제출
        </button>
      </WhiteModal>
    </BackModal>
  );
}
export default SignUpModal;
