"use strict";
exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 8847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 53 modules
var axios = __webpack_require__(359);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.esm.js + 19 modules
var emotion_styled_esm = __webpack_require__(5223);
;// CONCATENATED MODULE: ./src/components/RegisterForm.tsx
// Styled components
const FormContainer=emotion_styled_esm/* default */.Z.div`
  max-width: 400px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 10px;
`;const Input=emotion_styled_esm/* default */.Z.input`
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;const Button=emotion_styled_esm/* default */.Z.button`
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
`;const SocialButton=(0,emotion_styled_esm/* default */.Z)(Button)`
  background-color: #4267B2; /* Facebook color */
`;const GoogleButton=(0,emotion_styled_esm/* default */.Z)(Button)`
  background-color: #db4437; /* Google color */
`;const RegisterForm=()=>{const{0:formData,1:setFormData}=(0,react.useState)({name:'',email:'',password:''});(0,react.useEffect)(()=>{window.fbAsyncInit=function(){window.FB.init({appId:'1620259025436267',// YOUR_FACEBOOK_APP_ID -> 1620259025436267
cookie:true,xfbml:true,version:'v12.0'});};(function(d,s,id){var _fjs$parentNode;const js=d.createElement(s);const fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}js.id=id;js.src='https://connect.facebook.net/en_US/sdk.js';(_fjs$parentNode=fjs.parentNode)===null||_fjs$parentNode===void 0?void 0:_fjs$parentNode.insertBefore(js,fjs);})(document,'script','facebook-jssdk');// Load Google API
const script=document.createElement('script');script.src='https://apis.google.com/js/platform.js';script.async=true;script.defer=true;document.body.appendChild(script);return()=>{document.body.removeChild(script);};},[]);const handleChange=e=>{setFormData({...formData,[e.target.name]:e.target.value});};const handleSubmit=async e=>{e.preventDefault();try{const response=await axios/* default */.Z.post('/register',formData);console.log('User registered successfully:',response.data);}catch(error){console.error('Error registering user:',error);}};const handleGoogleSignIn=()=>{// Type assertion to let TypeScript know that window.gapi exists
const gapiAuth=window.gapi.auth2;gapiAuth.load('auth2',()=>{const auth2=gapiAuth.init({client_id:'YOUR_GOOGLE_CLIENT_ID'});auth2.signIn().then(googleUser=>{// 'any' type here because we don't have type definitions for GoogleUser
const idToken=googleUser.getAuthResponse().id_token;axios/* default */.Z.post('/auth/google',{idToken}).then(response=>{console.log('User registered with Google:',response.data);}).catch(error=>{console.error('Error registering with Google:',error);});});});};const handleFacebookSignIn=()=>{window.FB.login(response=>{if(response.authResponse){const accessToken=response.authResponse.accessToken;axios/* default */.Z.post('/auth/facebook',{accessToken}).then(res=>{console.log('User registered with Facebook:',res.data);}).catch(err=>{console.error('Error registering with Facebook:',err);});}else{console.error('User cancelled login or did not fully authorize.');}},{scope:'public_profile,email'});};return/*#__PURE__*/react.createElement(FormContainer,null,/*#__PURE__*/react.createElement("h2",null,"Register"),/*#__PURE__*/react.createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/react.createElement(Input,{type:"text",name:"name",placeholder:"Name",value:formData.name,onChange:handleChange,required:true}),/*#__PURE__*/react.createElement(Input,{type:"email",name:"email",placeholder:"Email",value:formData.email,onChange:handleChange,required:true}),/*#__PURE__*/react.createElement(Input,{type:"password",name:"password",placeholder:"Password",value:formData.password,onChange:handleChange,required:true}),/*#__PURE__*/react.createElement(Button,{type:"submit"},"Register")),/*#__PURE__*/react.createElement(SocialButton,{onClick:handleFacebookSignIn},"Sign up with Facebook"),/*#__PURE__*/react.createElement(GoogleButton,{onClick:handleGoogleSignIn},"Sign up with Google"));};/* harmony default export */ const components_RegisterForm = (RegisterForm);
;// CONCATENATED MODULE: ./src/pages/register.tsx


const RegisterPage = () => /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, "Register"), /*#__PURE__*/react.createElement(components_RegisterForm, null));
/* harmony default export */ const register = (RegisterPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-register-tsx.js.map