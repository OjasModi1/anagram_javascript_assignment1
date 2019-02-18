function check_anagram(s1,s2){
var string1  =s1.toLowerCase();
var string2  =s2.toLowerCase();

var result1=join(merge_sort(split(string1)));
var result2=join(merge_sort(split(string 2)));
if(result1=result2
)
{
 console.log(true);

}
else
{
console.log(false);    
}
}
function join (b){
    var length = b.length;
    var text ="";
    for(var i=0;i<length;i++){
        text += b[i];
    }
    return text;
}

function split(s1){

    var b = [];
    var lengths1 =s1.length;
for(var i=0;i<lengths1;i++){


    b[i] =s1.charAt(i);
    

}
 
return b;
function bubble_Sort(b)
{
    var swap;
    var n = a.length-1;
    var x= b;
    do {
        swap = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
 return x; 
}



 anagram('Ojas','Sajo');


