module.exports = function check(str, bracketsConfig) {
  let arr1 =[];
  let arr2 = [];
  for(let i = 0; i<bracketsConfig.length;i++){
    let count = bracketsConfig[i];
    for(let j = 0; j<count.length;j++){
      arr2.push(bracketsConfig[i][j]);
    }
  }
  console.log(arr2)
let num = str.split('');

for (let i = 0; i < num.length; i++) {
 if(num[0]==(arr2[0]||arr2[2]||arr2[4]||arr2[6]||arr2[8]) && i==0)
 {
   arr1.push(num[0]);
   continue;
 }
 if((num[i] == arr2[1] && arr1[arr1.length-1]==arr2[0])||
 (num[i] == arr2[3] && arr1[arr1.length-1]==arr2[2])||
 (num[i] == arr2[5] && arr1[arr1.length-1]==arr2[4])||
 (num[i] == arr2[7] && arr1[arr1.length-1]==arr2[6])||
 (num[i] == arr2[9] && arr1[arr1.length-1]==arr2[8])){
   arr1.pop(num[i-1]);
 }
 else{
   arr1.push(num[i]);
 }
}
if (arr1[0]==undefined)
{
  return true;
}
return false;
}
