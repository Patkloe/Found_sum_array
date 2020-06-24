var tab = [1,2,3,4,5,6,7,8,9];
var size = tab.length;
function lookup_sum(sum,deb,fin){
var a = deb;
var b = fin;
var total = tab[a] + tab[b];
if((total == sum) && (b - a >=0)){
  console.log("trouve");
  console.log("index : " + " " + a + " "+ ", "+" " +b);
 }
else if((total > sum) && (b - a >= 0)){
  b--;
  lookup_sum(sum,deb,b);
 }
else if((total < sum) && (b - a >= 0)){
  a++;
  lookup_sum(sum,a,fin);
 }
else
  console.log("sum not found in the array");
}
lookup_sum(20,0,8);
