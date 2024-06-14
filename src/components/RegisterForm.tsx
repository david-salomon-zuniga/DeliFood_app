import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';


// Styled components
const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
`;

const SocialButton = styled(Button)`
  background-color: #4267B2; /* Facebook color */
`;

const GoogleButton = styled(Button)`
  background-color: #db4437; /* Google color */
`;

interface FormData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1620259025436267',  // YOUR_FACEBOOK_APP_ID -> 1620259025436267
        cookie: true,
        xfbml: true,
        version: 'v12.0',
      });
    };

    (function (d, s, id) {
      const js: HTMLScriptElement | null = d.createElement(s) as HTMLScriptElement;
      const fjs: HTMLScriptElement = d.getElementsByTagName(s)[0] as HTMLScriptElement;
      if (d.getElementById(id)) {
        return;
      }
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    // Load Google API
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData);
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  

  const handleGoogleSignIn = () => {
    // Type assertion to let TypeScript know that window.gapi exists
    const gapiAuth = (window as any).gapi.auth2;
  
    gapiAuth.load('auth2', () => {
      const auth2 = gapiAuth.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
      });
      auth2.signIn().then((googleUser: any) => { // 'any' type here because we don't have type definitions for GoogleUser
        const idToken = googleUser.getAuthResponse().id_token;
        axios
          .post('/auth/google', { idToken })
          .then((response) => {
            console.log('User registered with Google:', response.data);
          })
          .catch((error) => {
            console.error('Error registering with Google:', error);
          });
      });
    });
  };

  const handleFacebookSignIn = () => {
    window.FB.login((response: fb.StatusResponse) => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        axios
          .post('/auth/facebook', { accessToken })
          .then((res) => {
            console.log('User registered with Facebook:', res.data);
          })
          .catch((err) => {
            console.error('Error registering with Facebook:', err);
          });
      } else {
        console.error('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'public_profile,email' });
  };

  return (
    <FormContainer>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Register</Button>
      </form>
      <SocialButton onClick={handleFacebookSignIn}>Sign up with Facebook</SocialButton>
      <GoogleButton onClick={handleGoogleSignIn}>Sign up with Google</GoogleButton>
    </FormContainer>
  );
};

export default RegisterForm;
