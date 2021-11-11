
var N
var T=[]
var P=[]
var I=[]
do{
N=Number(prompt("donner la taille de tableau : "))
}while(N<=0 || isNaN(N))

for(let i=0;i<N;i++)
{
T[i]=Math.floor((Math.random()*901+100))

/*
   if(T[i]%2==0)
     P.push(T[i])
    else
     I.push(T[i])
*/

}


//P=T.filter(number=>number%2==0)
//I=T.filter(items=>items%2!=0)
document.write("Le tableau saisie est : <br>",T.join(' | '),"<br>")
document.write("Le tableau des entiers pairs est : <br>",T.filter(number=>number%2==0).join(' | '),"<br>")
document.write("Le tableau des entiers impaire est : <br>",T.filter(items=>items%2!=0).join(' | '),"<br>")

function somme(Tab) {
  var s=0;
  for(let i=0;i<Tab.length;i++)
  {
    if(isNaN(Tab[i])==false && Number.isInteger(Tab[i]))
      s+=Tab[i]
    else
      i++
  }
  return s
}
document.write("<br> la somme est :",somme(T))

function permut(Tab) {
  var x
  x=Tab[0]
  Tab[0]=Tab[Tab.length-1]
  Tab[Tab.length]=x

  return Tab
}
document.write("<br> nouveau tableau est :",permut(T))
function Type(Tab) {
  var Type=[]
  for(let i=0;i<Tab.length;i++)
  {
  Type[i]=typeof(Tab[i])
  }
  return Type
}
var K=[5,"zfzfr",true,0.48]
document.write("<br> tableau des types est :",Type(K))

