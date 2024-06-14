/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
// gatsby-browser.js
export const onClientEntry = () => {
    // Load Google API
    const googleScript = document.createElement('script');
    googleScript.src = 'https://apis.google.com/js/platform.js';
    googleScript.async = true;
    googleScript.defer = true;
    document.body.appendChild(googleScript);
  
    // Load Facebook SDK
    const facebookScript = document.createElement('script');
    facebookScript.src = 'https://connect.facebook.net/en_US/sdk.js';
    facebookScript.async = true;
    facebookScript.defer = true;
    facebookScript.crossOrigin = 'anonymous';
    document.body.appendChild(facebookScript);
  };
  