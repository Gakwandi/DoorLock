# Steps to the final project

- [Introduction](#introduction)
- [Running Commands](#running-commands)
	- [Checking Connected Device](#cheking-connected-device)
	- [connecting To Server](#connecting-to-servers)
	- [Running on android device](#running-on-android-device)


## Introduction

Installing react native using react init. It is used when you want to test on physical device

	react-native init --version="0.55.4" DoorLock

### Checking connected devices

Checking connected device you must have installed SDK and JDK. And you need to go to the path where the platform-tools are installed, and your run the following command

	C:\Users\Gakwandi Joshua\AppData\Local\Android\sdk\platform-tools/> adb devices

### Connecting to servers

This is how you iterate quickly on a device by connecting to the development server running on your development machine.

	C:\Users\username\AppData\Local\Android\sdk\platform-tools\>adb reverse tcp:8081 tcp:8081

#### Running on android device

When running react on your android you go inside your folder is where your project is installed. Then type the following command

	C:\Users\username\myproject/>npm start |yarn start
	C:\Users\username\myproject/> react-native run-android

Some errors when running may occur
	Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.

To solve the following error
	1.You go inside the project folder
	2.Android folder
	3.Create file called local.properties
	4. Write sdk.dir = C:\\Users\\username\\AppData\\Local\\Android\\sdk
	5. Run your react-native run-android


	