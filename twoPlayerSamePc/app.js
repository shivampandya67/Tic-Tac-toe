//html elements

const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.cells');
//game constants
const xSymbole = 'X';
const oSymbole = 'O';
document.querySelector('.status').innerHTML= xSymbole+ " is next";
// game variables
let gameislive = true; // true till the game is on
let xisnext = true;
var cnt=0;
//functions start

function checkGameStatus(){
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const centerLeft = cellDivs[3].classList[1];
    const centerMiddle = cellDivs[4].classList[1];
    const centerRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];
   console.log(topLeft,topMiddle,topRight,centerLeft,centerMiddle,centerRight,bottomLeft,bottomMiddle,bottomRight);
    //console.log(cellDivs[0].classList[2]);
    //console.log(cellDivs[1].classList[2]);
    console.log(cellDivs[2].classList);
    
   //check winner
   //first row
   if(topLeft && topLeft === topMiddle && topLeft === topRight)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }

   //second row
   else if(centerLeft && centerLeft === centerMiddle && centerLeft === centerRight)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }

   //third row
   else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }

   //first column
   else if(topLeft && topLeft === centerLeft && topLeft === bottomLeft)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }
   
   //second column
   else if(topMiddle && topMiddle === centerMiddle && topMiddle === bottomMiddle)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }
   //third column
   else if(topRight && topRight === centerRight && topRight === bottomRight)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }

   //first diagonal
   else if(topLeft && topLeft === centerMiddle && topLeft === bottomRight)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }

   //second diagonal
   else if(topRight && topRight === centerMiddle && topRight === bottomLeft)
   {
       cnt++;
       gameislive = false;
       if(cnt%2===1)
       statusDiv.innerHTML ='<span class="red">' + xSymbole +  ' has won! </span>';
       else
       statusDiv.innerHTML ='<span class="red">' + oSymbole +  ' has won! </span>';
   }
   else if(cnt===8)
   {
    gameislive = false;
    statusDiv.innerHTML ='<span class="red">' + 'Tied! </span>';
   }
   else
   {
        //xisnext = !xisnext;
        if(!xisnext)
        {
            statusDiv.innerHTML = '<span class="orange">' + xSymbole + ' is next </span>';
            cnt++;
        }
        else
        {
            statusDiv.innerHTML = '<span class="navy">' + oSymbole + ' is next </span>';
            cnt++;
        }
   }
}

//event handler
function handleReset (){
    //console.log(e);
    cnt=0;
    gameislive=true;
    xisnext= true;
    statusDiv.innerHTML = '<span class="orange">' + xSymbole + ' is next </span>';
    for(const cellDiv of cellDivs)
    {
        cellDiv.classList.remove('X');
        cellDiv.classList.remove('O');
    }
}

function handleCellClick(e){
    //console.log(e.target.classList);
    const classList = e.target.classList;
    console.log(classList[1]);
    //const location = e.target.classList[1];
    //console.log("location",location);
    if(!gameislive || classList[1]==='X' || classList[1]==='O')
    {return;}
    if(xisnext)
    {
        classList.add('X');
        checkGameStatus();
        xisnext = !xisnext;
        console.log(cnt);
    }
    else
    {
        classList.add('O');
        checkGameStatus();
        xisnext = !xisnext;
        console.log(cnt);
    }
}
//event listeners
resetDiv.addEventListener('click',handleReset);

for(const cellDiv of cellDivs)
{
    cellDiv.addEventListener('click',handleCellClick);
}