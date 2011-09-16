// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var cropimage = require('org.selfkleptomaniac.ti.cropimage');
Ti.API.info("module is => " + cropimage);

if (Ti.Platform.name == "android") {
  window.addEventListener('click', function(){
    Ti.Media.openPhotoGallery(style.gallery({
      success:function(elem){
        cropimage.cropper({
          success:function(elem){
            Ti.API.info(elem);//cropped image
          },
          error:function(){alert('cropper error');},
          cancel:function(){alert('croppe canceled');},
          image.e.media,
          width:300,
          height:300
        });
      },
      cancel:function(){alert('cancel');},
      error:function(){alert('error');}
    });
  }); 
}
