Image cropping module for Appcelerator Titanium (Android)
=========================================
Build
-------------------
	$ export ANDROID_SDK=/path/to/android-sdk
	$ export ANDROID_NDK=/path/to/android-ndk
	$ ant clean && ant

Description
-------------------
CropImage is a small image cropper. You can call this module in 'success' callback of showCamera or openPhotoGallery.
See example for details.

WARNING!!
-------------------
This module works only when you use single JavaScript context in your app.