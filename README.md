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
Currently, this module works only when get called in app.js. I mean, when you call it in required JS file, callback function won't get fired so that it does not work. Thread related problem? I guess so. Please ask android guys in Appcelerator before you accuse me. No, not me.
