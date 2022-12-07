import './LogoutBtn.scss'
import { useNavigate } from "react-router-dom";

function LogoutBtn() {

    const navigate = useNavigate();

    const logout = () =>{
        window.localStorage.removeItem('access_token');
        navigate('/')
        window.location.reload()
    };

    return (
        <div className='log-out-box'>
            <button onClick={() => {
               logout();
            }}>로그아웃</button>
        </div>
    )
}export default LogoutBtn;