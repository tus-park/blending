var blend = [
  "normal","multiply","overlay","screen","darken","lighten","color-dodge","saturation","color","luminosity"
];

 // document.write(i);
 var cnt = 0;
  

  $('.blend').on('click',function(){ 
      if(cnt<=blend.length){
        $(this).css('mix-blend-mode',blend[cnt]);
        $(this).animate({
          opacity:1,
          duration:2000
        });       
        $('.blendName').text( "Blend Mode: " + blend[cnt]);
        cnt++;     
        return;      
      }else if(cnt>=blend.length){
        cnt=0;
      }
   });
 $('.blendName').on('click',function(){ 
    $('.blendName').text("Click to Image");
 });