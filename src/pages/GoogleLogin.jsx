import { Loader } from 'lucide-react';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { apiClient } from '../utils/apiClient';
import { setCookie } from '../utils/cookies';
import { useGlobalContext } from '../context/globalContext';
import { useLocation, useNavigate } from 'react-router';

const GoogleLogin = () => {
  const { isLogin, setIsLogin, setUserProfile } = useGlobalContext();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  console.log('code', code);

  useEffect(() => {
    const sendCodeToServer = async () => {
      try {
        const data = await apiClient.googleLogin({ code });
        console.log(data);

        const tokenExpiresIn = data.expiresIn;
        const currentMilies = Date.now();

        dayjs.extend(duration);

        function convertExpiryToSeconds(expiryString) {
          const unit = expiryString.slice(-1).toUpperCase(); // e.g. "H"
          const value = parseInt(expiryString.slice(0, -1), 10); // e.g. 1

          const expiryDuration = dayjs
            .duration(value, unit === 'H' ? 'hour' : unit)
            .asSeconds();
          return expiryDuration;
        }

        setCookie('token', data.token, convertExpiryToSeconds(tokenExpiresIn));

        setIsLogin(true);

        setUserProfile(data);

        navigate(from, { replace: true });
      } catch (error) {
        console.log(error);
      }
    };

    sendCodeToServer();
  }, []);

  return (
    <>
      <div>{code}</div>
      <Loader />
    </>
  );
};

export default GoogleLogin;
