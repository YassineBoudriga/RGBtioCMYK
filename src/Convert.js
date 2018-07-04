var R = '';
var G = '';
var B ='';
function UserRGB(Ru, Gu, Bu){
  if ( Ru < 255 , Gu < 255 , Bu < 255 , 0 < Ru , 0 < Gu , 0  <Bu){
  R = Ru /255;
  G = Gu/ 255;
  B = Bu / 255;
  K = 1-Math.max(R, B, G);
   C = Math.round(100 * ((1-R-K) / (1-K)));
   M =  Math.round(100 * ((1-G-K) / (1-K)));
   Y =  Math.round(100 * ((1-B-K) / (1-K)));
    K1 = K * 100;
    //Value are in percent, use each variable to calculate amount of ink necessary for the machine
    console.log(C, M, Y, K1);
      }
 else {
   console.log('RGB values need to be between 0 and 255');
  
};
}
