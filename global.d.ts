//This file will contain the type definitions for global variables.
// src/global.d.ts or global.d.ts
// src/global.d.ts
export {};

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (params: { appId: string; cookie: boolean; xfbml: boolean; version: string }) => void;
      login: (callback: (response: fb.StatusResponse) => void, options: { scope: string }) => void;
    };
    gapi: {
      load: (api: string, callback: () => void) => void;
      auth2: {
        init: (params: { client_id: string }) => { signIn: () => Promise<{ getAuthResponse: () => { id_token: string } }> };
      };
    };
  }

  namespace fb {
    interface AuthResponse {
      accessToken: string;
    }
    interface StatusResponse {
      status: string;
      authResponse: AuthResponse;
    }
  }
}

export default global;
