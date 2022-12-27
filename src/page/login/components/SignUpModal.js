import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { handleSignup } from '../../../api/index';
import './SignUpModal.scss';

function SignUpModal(props) {
  const { modal } = props;
  const { setModal } = props;

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  // SignUp state
  const [signUpId, setSignUpId] = useState('');
  const [IdMessage, setIdMessage] = useState('');
  const [IdCheck, setIdCheck] = useState(false);

  const [signUpPw, setSignUpPw] = useState('');
  const [PwMessage, setPwMessage] = useState('');
  const [PwCheck, setPwCheck] = useState(false);

  // 회원가입 버튼 활성화/비활성화
  const [activateBTN, setActivateBTN] = useState(true);

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
      setSignUpId(inputId);
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
      setSignUpPw(inputPw);
    }
  };

  return (
    <div className={modal === true ? 'BlackModal' : 'Disabled-BlackModal'}>
      <div className="whiteModal">
        <FontAwesomeIcon
          icon={faXmark}
          className="xMark"
          onClick={() => {
            setModal(false);
          }}
        />
        <h2>회원가입</h2>
        <div className="alert">
          <p>* 아이디</p>{' '}
          <p className={IdCheck === true ? 'correct' : 'non-correct'}>
            {IdMessage}
          </p>
        </div>
        <input
          type="text"
          placeholder="Email을 입력해주세요."
          onInput={(e) => {
            const box = { ...userInfo };
            box.email = e.target.value;
            setUserInfo(box);
          }}
        />

        <div className="alert">
          <p>* 비밀번호</p>{' '}
          <p className={PwCheck === true ? 'correct' : 'non-correct'}>
            {PwMessage}
          </p>
        </div>
        <input
          type="password"
          placeholder="Password를 입력해주세요."
          onInput={(e) => {
            const box = { ...userInfo };
            box.password = e.target.value;
            setUserInfo(box);
          }}
        />

        <button
          type="button"
          className={
            activateBTN === true ? 'disabled-accountBTN' : 'accountBTN'
          }
          disabled={activateBTN}
          onClick={() => {
            handleSignup();
            // signUp(signUpId, signUpPw, setModal);
          }}
        >
          제출
        </button>
      </div>
    </div>
  );
}
export default SignUpModal;
