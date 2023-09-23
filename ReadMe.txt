 luis_moraes@NOTMCT066216  C:    cantinhoFeliz  master  USAGE  firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Projetos\cantinhoFeliz

Before we get started, keep in mind:

  * You are currently outside your home directory

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to
confirm your choices. Realtime Database: Configure a security rules file for Realtime Database and (optionally)
provision default instance, Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: cantinhosaofrancisco-c60d8 (CantinhoSaoFrancisco)
i  Using project cantinhosaofrancisco-c60d8 (CantinhoSaoFrancisco)

=== Database Setup
i  database: ensuring required API firebasedatabase.googleapis.com is enabled...
+  database: required API firebasedatabase.googleapis.com is enabled


Firebase Realtime Database Security Rules allow you to define how your data should be
structured and when your data can be read from and written to.

? What file should be used for Realtime Database Security Rules? database.rules.json
? File database.rules.json already exists. Do you want to overwrite it with the Realtime Database Security Rules for
cantinhosaofrancisco-c60d8-default-rtdb from the Firebase console? Yes
+  Database Rules for cantinhosaofrancisco-c60d8-default-rtdb have been written to database.rules.json.
Future modifications to database.rules.json will update Realtime Database Security Rules when you run
firebase deploy.

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? Yes
+  Wrote public/index.html

i  Detected a .git folder at C:\Projetos\cantinhoFeliz
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=454803944&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

+  Success! Logged into GitHub as luisrobertolrm

⠹ For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)

!  The provided authorization cannot be used with this repository. If this repository is in an organization, did you remember to grant access?

i  Action required: Visit this URL to ensure access has been granted to the appropriate organization(s) for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484

⠹ For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)

!  The provided authorization cannot be used with this repository. If this repository is in an organization, did you remember to grant access?

i  Action required: Visit this URL to ensure access has been granted to the appropriate organization(s) for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
luisrobertolrm/cantinho-sao-francisco

+  Created service account github-action-694962501 with Firebase Hosting admin permissions.
+  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_CANTINHOSAOFRANCISCO_C60D8.
i  You can manage your secrets at https://github.com/luisrobertolrm/cantinho-sao-francisco/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? npm ci && npm run build

+  Created workflow file C:\Projetos\cantinhoFeliz\.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? main

+  Created workflow file C:\Projetos\cantinhoFeliz\.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
