module.exports = function getZerosCount(number, base) {
  
// перевод числа в любую систему счисления
 /* var numberX=[];
  var leftover=0;
    while (number>=base){
        leftover=number%base;
        numberX.push(leftover);
          if(number==base){
            number=1;
            break
          }
        number=Math.floor(number/base);
        ;
        
      }
  numberX.push(number);
  numberX.reverse();
  numberX=numberX.join(''); 
  
  */ 
var zeros=0;
var j=2;
var bases=[];
for (i=1;i<base;i++){
    if(base%j==0){
      bases.push(j);
      base/=j;
      }
    else {
      j++;
      
      }
  }

bases.push(base);
  
var l=bases.length;
  if(bases[l-1]==1){
    var newBase=bases[l-2];
  }
  else if(bases[l-1]==bases[l-2]){
    newBase=bases[l-1];
    var counter=0;
      for(i=0;i<l;i++){
        if(bases[i]==newBase){
        counter++;
        }
      }
    while (Math.floor(number)>0){
    number/=newBase;
    zeros+=Math.floor(number);
    }
    zeros=Math.floor(zeros/counter);
    return zeros;
  }
  else {
    newBase=bases[l-1];
  }
 
while (Math.floor(number)>0){
  number/=newBase;
  zeros+=Math.floor(number);
}


return zeros;
}