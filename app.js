var string= prompt("Enter your text here");
var letter=prompt("Enter 1 letter here");
var strLen=string.length;
var counter=0;
for (var i=0 ; i<strLen ; i++)
    {if(string [i] == letter){
        counter ++;
    }
    };
    console.log(`The number of ${letter} in "${string}" are = ${counter}`)