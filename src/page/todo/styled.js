import styled from 'styled-components';
import { FaPencilAlt, FaTrashAlt, FaRegCheckSquare } from 'react-icons/fa';

/** 로그아웃 버튼 */
export const LogoutSection = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
`;

export const LogoutButton = styled.button`
  margin-top: 20px;
  color: orange;
  background-color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: wheat;
  }
`;

/** 투두생성인풋 */
export const TodoLogo = styled.div`
  color: white;
  width: 500px;
  margin: 0 auto;
  text-align: center;
`;

export const ProducerSection = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 30px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);

  input {
    width: 400px;
    padding: 15px;
    border-radius: 10px;
    border: 0px;
    &:focus {
      outline: none;
    }
  }

  button {
    color: white;
    background-color: #1257d6;
    border: 1px solid #1257d6;
    border-radius: 5px;
    padding: 5px;
    width: 55px;
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      background-color: blue;
    }
  }
`;

/** 투두리스트 */
export const ListContainer = styled.div`
  background-color: white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  padding: 1px;
`;

export const MyList = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  width: 450px;
  height: 57px;
  padding: 15px;

  p {
    width: 320px;
    margin-left: 10px;
    margin-right: 10px;
  }

  input {
    border: 1px solid gray;
    width: 320px;
    font-size: 15px;
    &:focus {
      outline: none;
    }
  }

  button {
    margin-left: 12px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    padding: 6px;
    font-size: 11px;
    color: white;
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: #ffbc40;
    }
  }
`;

export const Pencil = styled(FaPencilAlt)`
  font-size: 20px;
  color: gray;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

export const Trash = styled(FaTrashAlt)`
  font-size: 20px;
  color: gray;
  margin-left: 13px;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

export const Check = styled(FaRegCheckSquare)`
  font-size: 20px;
  cursor: pointer;
  margin-top: 2px;
  color: ${(props) => (props.$isCompleted === false ? 'gray' : 'red')};

  &:hover {
    color: red;
  }
`;
