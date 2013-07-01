// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({color:'Black', text:'click me'});
window.add(label);
window.open();

// TODO: write your module tests here
var cropimage = require('org.selfkleptomaniac.ti.mod.cropimage');
Ti.API.info("module is => " + cropimage);

if (Ti.Platform.name == "android") {
  window.addEventListener('click', function(){
    Ti.Media.openPhotoGallery({
      success:function(elem){
        cropimage.cropper({
          success:function(e){
            Ti.API.info(e);//cropped image
          },
          error:function(){alert('cropper error');},
          cancel:function(){alert('croppe canceled');},
          image:elem.media},
          300,
          300);
      },
      cancel:function(){alert('cancel');},
      error:function(){alert('error');}
    });
  }); 
}
