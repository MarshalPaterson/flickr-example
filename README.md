[![CircleCI](https://circleci.com/gh/MarshalPaterson/flickr-example/tree/main.svg?style=svg)](https://circleci.com/gh/MarshalPaterson/flickr-example/tree/main)

# flickr-example

A clean common structure React Native application that calls a Flickr API then uses Mobx as state management follow the Observer pattern then a FlatList to do infinity scroll, a Functional Components have been implemented with builds by CircleCI.

![sd](https://github.com/MarshalPaterson/flickr-example/blob/main/SolutionDesign/SolutionDesign.drawio.png)

# iOS
Trouble shooting: Please run 'pod install' the pod file is in 'ios' folder.

![ios](https://github.com/MarshalPaterson/flickr-example/blob/main/SolutionDesign/ios.gif)

# Android

Trouble shooting: You made to open Android Studio and run ./gradle from the 'android' folder.

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

# Builds are at:

# React Native is Awesome!!!

### TODO
Screen Orientation on iOS is working, though Styles sheets need to change. On Android not changing.

### Security options
For best practices on React Native security please review, this would need to be added.

https://hackernoon.com/how-to-build-a-secure-mobile-application-with-react-native-jz2s34k6

https://www.appsealing.com/react-native-security/