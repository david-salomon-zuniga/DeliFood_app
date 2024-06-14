// Import required modules
const express = require('express');
const AWS = require('aws-sdk');
const path = require('path'); // Don't forget to import 'path' module
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables from .env file
require('dotenv').config();

// Create an instance of Express
const app = express();
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Use CORS middleware to enable CORS for all routes
app.use(cors());


// Set up AWS configuration
AWS.config.update({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  });

// Create an S3 instance
const s3 = new AWS.S3();
console.log('hola');
console.log(__dirname);
console.log(path.join(__dirname, 'public', 'register', 'index.html'));
// Define route to serve the root HTML file
app.get('/', (req, res) => {
    // Send the static HTML file
    res.send(path.join(__dirname, 'src/pages/index.tsx'));
});

// Define route to serve the register HTML file
app.get('/register', (req, res) => {
  // Send the static HTML file for the register page
  res.sendFile(path.join(__dirname, 'public', 'register', 'index.html'));
});


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Validate and register the user with the provided details
    res.send('User registered successfully');
});

app.post('/auth/google', async (req, res) => {
    const { idToken } = req.body;
    try {
        // Verify Google ID token
        const ticket = await axios.post(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
        const { email, name } = ticket.data;

        // Register the user in your system
        res.send('User registered with Google');
    } catch (error) {
        console.error('Error verifying Google ID token:', error);
        res.status(500).send('Error registering with Google');
    }
});

app.post('/auth/facebook', async (req, res) => {
    const { accessToken } = req.body;
    try {
        // Verify Facebook access token
        const response = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,email`);
        const { id, name, email } = response.data;

        // Register the user in your system
        res.send('User registered with Facebook');
    } catch (error) {
        console.error('Error verifying Facebook access token:', error);
        res.status(500).send('Error registering with Facebook');
    }
});



// Define route to serve the image files in the 'main' folder
app.get('/lcta-images', (req, res) => {
    const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/lcta/
        Bucket: 'recipe-imgs-bucket',
        Prefix: 'images/landing_page/landing_page/lcta/'
    };
    // Counter to keep track of callback executions
    var callbackExecutions = 0;
    // Set to store unique image keys
    var uniqueImageKeys = new Set();
  
    // Fetch objects (image files) with the specified prefix
    s3.listObjectsV2(params, (err, data) => {
        if (err) {
            console.error('Error listing objects:', err);
            res.status(500).send('Internal Server Error');
        } else {
            // Increment callback execution count
            callbackExecutions++;
            // Get the list of image keys
            data.Contents.forEach(obj => {
                uniqueImageKeys.add(obj.Key);
            });
  
            // Convert the set to an array and return as JSON
            const imageKeys = Array.from(uniqueImageKeys);
            //console.log(callbackExecutions);
            res.json(imageKeys);
        }
    });
  
  });

// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-Testimonials', (req, res) => {
  const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/testimonials/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/testimonials/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-Ratings', (req, res) => {
  const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/awards/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/awards/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-Influencers', (req, res) => {
  const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/influencers/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/influencers/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

//userGeneratedContent
// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-userGeneratedContent', (req, res) => {
  const params = {                      //ss3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/user_content/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/user_content/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-mediaMentions', (req, res) => {
  const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/media_mentions/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/media_mentions/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});


// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-ranked', (req, res) => {
  const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/ranked/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/ranked/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-awards', (req, res) => {
  const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/awards/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/awards/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

// Define route to serve the image files in the 'main' folder
app.get('/socialProofImgs-usersSuccessStories', (req, res) => {
  const params = {                      //s3://recipe-imgs-bucket/images/landing_page/landing_page/social_proof/users_success_Stories/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/social_proof/users_success_Stories/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

// Define route to serve the image files in the 'main' folder
app.get('/main-images', (req, res) => {
  const params = {                                 // s3://recipe-imgs-bucket/images/landing_page/landing_page/main/
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/main/'
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});

// Define route to serve the image files in the 'main' folder
app.get('/benefits-images', (req, res) => {
  const params = {
      Bucket: 'recipe-imgs-bucket',
      Prefix: 'images/landing_page/landing_page/benefits/'    // s3://recipe-imgs-bucket/images/landing_page/landing_page/benefits/
  };
  // Counter to keep track of callback executions
  var callbackExecutions = 0;
  // Set to store unique image keys
  var uniqueImageKeys = new Set();

  // Fetch objects (image files) with the specified prefix
  s3.listObjectsV2(params, (err, data) => {
      if (err) {
          console.error('Error listing objects:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Increment callback execution count
          callbackExecutions++;
          // Get the list of image keys
          data.Contents.forEach(obj => {
              uniqueImageKeys.add(obj.Key);
          });

          // Convert the set to an array and return as JSON
          const imageKeys = Array.from(uniqueImageKeys);
          //console.log(callbackExecutions);
          res.json(imageKeys);
      }
  });

});


// Define route to serve an individual image file
app.get('/image', (req, res) => {
  const { key } = req.query;
  const params = {
      Bucket: 'recipe-imgs-bucket',
      Key: key
  };

  // Fetch object data (image file) based on the key
  s3.getObject(params, (err, data) => {
      if (err) {
          console.error('Error fetching object data:', err);
          res.status(500).send('Internal Server Error');
      } else {
          // Set appropriate content type header for the image
          res.setHeader('Content-Type', 'image/jpeg');
          // Return image data
          res.send(data.Body);
      }
  });
})

// Define route to fetch the mainContent.json file
app.get('/main-content', (req, res) => {   // s3://recipe-imgs-bucket/images/landing_page/allPublicContent.json
  const params = {
    Bucket: 'recipe-imgs-bucket',
    Key: 'images/landing_page/allPublicContent.json'
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error('Error fetching JSON content from S3:', err);
      res.status(500).send('Error fetching content');
      //throw err; // Re-throw the error to terminate the promise chain
    } else {

      // Set appropriate content type header for JSON
      res.setHeader('Content-Type', 'application/json');

      //const jsonData = JSON.parse(data.Body.toString('utf-8'));
      //res.json(jsonData);
      
      // Return JSON data
      res.send(data.Body.toString('utf-8'));
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
