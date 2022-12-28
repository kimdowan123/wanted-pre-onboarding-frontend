import { useNavigate } from 'react-router-dom';
import { LogoutSection, LogoutButton } from './styled';

function LogoutBtn() {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem('access_token');
    navigate('/');
    window.location.reload();
  };

  return (
    <LogoutSection>
      <LogoutButton
        type="button"
        onClick={() => {
          logout();
        }}
      >
        로그아웃
      </LogoutButton>
    </LogoutSection>
  );
}
export default LogoutBtn;
