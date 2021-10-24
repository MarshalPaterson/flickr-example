[![CircleCI](https://circleci.com/gh/MarshalPaterson/flickr-example/tree/main.svg?style=svg)](https://circleci.com/gh/MarshalPaterson/flickr-example/tree/main) https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

# flickr-example

A clean common structure React Native application that calls a Flickr API then uses Mobx as state management follow the Observer pattern then a FlatList to do infinity scroll, a Functional Components have been implemented with builds by CircleCI.

![sd](https://github.com/MarshalPaterson/flickr-example/blob/main/SolutionDesign/SolutionDesign.drawio.png)

# iOS
Trouble shooting: Please run 'pod install' the pod file is in 'ios' folder. Archive release has been tested and is working.

![ios](https://github.com/MarshalPaterson/flickr-example/blob/main/SolutionDesign/ios.gif)

# Android

Trouble shooting: You made to open Android Studio and run ./gradle from the 'android' folder. Release build has been tested and is working.

![android](https://github.com/MarshalPaterson/flickr-example/blob/main/SolutionDesign/android.gif)

# Install and run
yarn 

yarn run ios

yarn run android

# Unit Test
Tests are run with Jest and Enzyme

yarn test

![ios](https://github.com/MarshalPaterson/flickr-example/blob/main/SolutionDesign/UnitTests.png)

# MobX Walkthrough
For state managent MobX has been implemented, more at https://mobx.js.org/README.html

* App.js has the Provider with store
* Inject and observer for Photo List Screen
* MobX store is in the store folder

# Folder Structure

![folder structure](https://github.com/MarshalPaterson/flickr-example/blob/main/SolutionDesign/folders.png)

# React Native is Awesome!!!

### TODO
Screen Orientation on iOS is working, though Styles sheets need to change. On Android not changing. Consider: https://github.com/yamill/react-native-orientation. Also on Android on some devices needs more padding.

### Security options
For best practices on React Native security please review, this would need to be added.

https://hackernoon.com/how-to-build-a-secure-mobile-application-with-react-native-jz2s34k6

https://www.appsealing.com/react-native-security/

### Other Considerations
For this demo Javascript was chosen though Typescript would also be great to use.

https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white https://www.linkedin.com/in/mpaterson/

![React Native Australia](https://media-exp1.licdn.com/dms/image/C5107AQGdkqfacGal1g/group-logo_image-shrink_92x92/0/1631004853641?e=1635202800&v=beta&t=Hh_DGogeu-AMb3xv90J0XUX1pk5tzi06ep3wQjKnlg0) https://www.linkedin.com/groups/13532424/