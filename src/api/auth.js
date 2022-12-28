import { instance } from '../utils/instance';
import { setToken } from '../utils/token';
import { SIGNUP_URL, SIGNIN_URL } from '../constants';

/** 로그인 요청 */
export const handleSignin = async (userInfo) => {
  try {
    const response = await instance.post(SIGNIN_URL, userInfo);
    return setToken(response);
  } catch (err) {
    // alert(err);
  }
};

/** 회원가입 요청 */
export const handleSignup = async (userInfo) => {
  try {
    await instance.post(SIGNUP_URL, userInfo);
    return window.location.replace('/');
  } catch (err) {
    // alert(err);
  }
};
