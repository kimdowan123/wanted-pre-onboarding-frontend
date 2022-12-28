import { useState } from 'react';
import SignUpModal from './components/SignUpModal';
import SignIn from './components/SignIn';
import { Container } from '../../styles/global';

function LoginPage() {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <SignUpModal modal={modal} setModal={setModal} />
      <SignIn setModal={setModal} />
    </Container>
  );
}
export default LoginPage;
