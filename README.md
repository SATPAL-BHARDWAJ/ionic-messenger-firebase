# ionic-messenger-firebase
This is ionic based messenger with firebase. There is two authorties one is admin and second is user. User can chat only with admin and admin can chat with all users of the app.

# Create account with firebase 
  1. google-service.json file and upload at root directory of the app
  2. Go to the root directory of the app run following command to install firebase package in your ionic app
      - npm install firebase
  
# Go to api.service.ts and add 
    const config = {
      apiKey: "your_api_key",
      authDomain: "project_id.firebaseapp.com",
      databaseURL: "https://project_id.firebaseio.com",
      projectId: "project_id",
      storageBucket: "project_id.appspot.com",
      messagingSenderId: "sender_id"
    }; 

# Buid user and admin app with single code
We are using this single code for both user and admin.
# User
    - Go to config.xml 
    - change to app id to io.ionic.userMessenger
Then run build command
  ionic cordova build android
  
# Admin
    - app id will be io.ionic.adminMessenger
    - go to api.service.ts 
    - change admin: boolean = true;
    
Then run build command
  ionic cordova build android
  

# output will be
<img src="login.png" alt="login-screen" width="300"/> <img src="admin-chat.png" alt="admin-screen" width="300"/> <img src="user-chat.png" alt="user-screen" width="300"/>

# Live Demo
[Ionic 4 Firebase chat applicaiton](https://sbsharma.com/ionic-4-chat-app-firebase/)

# Contributor
[Satpal Bhardwaj](https://sbsharma.com/ionic/)

# Support us
<a href="https://www.hostg.xyz/SH6KQ"><img src="Support us.png" alt="To support my free tutorials and source code you can consider your next hosting purchase with my affiliate link. It will not cost you anything extra but it will give me a small amount of commission"/></a>

# Follow us
<a target="_blank" href="https://www.facebook.com/Sbsharma-2798360506847821"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"></a>
<a target="_blank" href="https://twitter.com/Ss101Bhardwaj"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"></a>
<a target="_blank" href="https://www.linkedin.com/in/satpal-bhardwaj-5a76b4134"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a target="_blank" href="https://codepen.io/sb_sharma"><img src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white"></a>

