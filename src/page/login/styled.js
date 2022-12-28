import styled from 'styled-components';
import { FaRegWindowClose } from 'react-icons/fa';

/** 로그인 박스 */
export const SignInContainer = styled.div`
  background-color: white;
  text-align: center;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10%;
  padding-top: 20px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  h1 {
    padding: 15px;
    margin-top: 20px;
    color: #666666;
  }
`;

export const Input = styled.input`
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  width: 350px;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const LoginBtn = styled.button`
  width: 350px;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  padding: 15px;
  background-color: orange;
  color: white;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: orangered;
  }
`;

export const SignUpBtn = styled.div`
  margin-top: 20px;
  padding: 10px;
  color: #666666;

  button {
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    border: none;
    margin-left: 10px;
    color: orange;
    cursor: pointer;
    &:hover {
      color: orangered;
    }
  }
`;

/**  회원가입 모달 */
export const BackModal = styled.div`
  display: ${(props) => (props.modal === false ? 'none' : 'block')};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const WhiteModal = styled.div`
  background-color: white;
  width: 400px;
  height: 500px;
  margin: 0 auto;
  margin-top: 7%;
  text-align: center;

  h2 {
    margin-top: 20px;
    padding: 10px;
    color: #666666;
  }

  input {
    width: 300px;
    padding: 15px;
    margin-top: 10px;
  }

  button {
    margin-top: 30px;
    padding: 15px;
    width: 300px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    background-color: orange;
    border: 1px solid orange;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const Xicon = styled(FaRegWindowClose)`
  font-size: 30px;
  color: gray;
  margin-left: 80%;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

export const AlertSection = styled.div`
  display: flex;
  margin: 0 auto;
  width: 330px;
  text-align: initial;
  margin-top: 20px;
`;

export const IdMes = styled.p`
  color: ${(props) => (props.IdCheck === false ? 'red' : 'blue')};
  font-size: 11px;
  height: 20px;
  margin-left: 10px;
  margin-top: 4px;
`;

export const PwMes = styled.p`
  color: ${(props) => (props.PwCheck === false ? 'red' : 'blue')};
  font-size: 11px;
  height: 20px;
  margin-left: 10px;
  margin-top: 4px;
`;
