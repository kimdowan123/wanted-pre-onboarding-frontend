import { instance } from '../utils/instance';
import { setToken } from '../utils/token';
import { SIGNUP_URL, SIGNIN_URL } from '../constants';
import { AuthToast } from '../utils/toast';

/** 로그인 요청 */
export const handleSignin = async (userInfo, navigate) => {
  try {
    const response = await instance.post(SIGNIN_URL, userInfo);
    AuthToast('로그인성공 😀');
    navigate('/todo');
    return setToken(response);
  } catch (err) {
    const {
      response: {
        data: { statusCode, message },
      },
    } = err;

    if (statusCode === 401) {
      AuthToast('비밀번호를 확인해주세요. 😓');
    } else {
      AuthToast(`${message} 😓`);
    }
  }
};

/** 회원가입 요청 */
export const handleSignup = async (userInfo) => {
  try {
    await instance.post(SIGNUP_URL, userInfo);
    AuthToast('회원가입 성공 😀');
    return window.location.replace('/');
  } catch (err) {
    const {
      response: {
        data: { statusCode, message },
      },
    } = err;

    if (statusCode === 400) {
      AuthToast(`${message} 😓`);
    }
  }
};
