import Panel from '@enact/sandstone/Panels/Panel';
import Header from '@enact/sandstone/Panels';
import Input from '@enact/sandstone/Input';
import Button from '@enact/sandstone/Button';
import { useState,useEffect} from 'react';
import css from './Auth.module.less';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { getPictureUrlHW } from '../../picsource';

import Image from '@enact/sandstone/Image';

const LoginPanel = () => {
  const { login, googleLogin, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const welcomeImage = getPictureUrlHW({id: 47, width:1280, height:792})

  useEffect(() => {
    if (user) {
      navigate('/list');
    }
  }, [user, navigate]);


  const handleLogin = async () => {
    try {
      await login(email, password);
      //navigate('/list');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      //navigate('/list');
    } catch (err) {
      setError(err.message);
    }
  }

  const handleSignupNavigate = () => {
    navigate('/signup');
  }

  return (
    <Panel>
      <Header title="Log In to Catinder" />
      <div className={css.sideBySide}>
        <div className={css.form}>

          <Input
            placeholder="Email"
            onChange={({ value }) => setEmail(value)}
            value={email}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={({ value }) => setPassword(value)}
            value={password}
          />
          <Button onClick={handleLogin}>Log In</Button>
          {error && <p className={css.error}>{error}</p>}
          <Button onClick={handleGoogleLogin}>Log In With Google Instead</Button>
          <Button onClick={handleSignupNavigate}>Sign Up Instead</Button>
        </div>
        <div className={css.imageCentered}>
          <Image src={welcomeImage} alt="Welcome Image" />
        </div>
      </div>



    </Panel>
  );
};

export default LoginPanel;