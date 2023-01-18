const pokemon={
    Charmander:{
        id:0,
        name : "Charmander",
        type : "fire",
        image : "https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character-thumbnail.png", 
        attack1 : "ember",
        value1: 10,
        attack2 : "metal-claw",
        value2: 8,
        attack3 : "scratch",
        value3: 9,
        attack4 : "flame-thrower",
        value4: 15
    }
    ,
    Bulbasaur:{
        id : 1,
        name : "Bulbasaur",
        type : "grass",
        image : "https://w7.pngwing.com/pngs/957/190/png-transparent-green-pokemon-character-pokemon-red-and-blue-ash-ketchum-bulbasaur-wikia-pokemon-marine-mammal-mammal-vertebrate-thumbnail.png",
        attack1 : "vinewhip",
        value1 : 10,
        attack2 : "rasor-leaf",
        value2 : 9,
        attack3 : "tackle",
        value3 : 8,
        attack4 : "solar-beam",
        value4 : 15
    }
    ,
    Squirtle:{
        id:2,
        name : "Squirtle",
        type : "water",
        image : "https://e7.pngegg.com/pngimages/700/421/png-clipart-pokemon-squirtle-squirtle-pokemon-games-pokemon-thumbnail.png",
        attack1 : "tackle",
        value1 : 8,
        attack2 : "water-gun",
        value2 : 10,
        attack3 : "tail-whip",
        value3 : 9,
        attack4 : "hydro-pump",
        value4 : 15
    }
    ,
    Pikachu:{
        id : 3,
        name : "Pikachu",
        type : "electric",
        image : "https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate-thumbnail.png",
        attack1 : "tackle",
        value1 : 8,
        attack2 : "thunder-bolt",
        value2 : 15,
        attack3 : "iron-tail",
        value3 : 9,
        attack4 : "thunder-shock",
        value4 : 10
    }
}

let obj1=pokemon.Charmander
let input1=document.getElementsByClassName("slider")[0];
let input2=document.getElementsByClassName("slider")[1];
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");
let button4=document.getElementById("button4");

let value11 =0;
let value12 =0;
let value13 =0;
let value14 =0;

button1.innerHTML=obj1.attack1;
button2.innerHTML=obj1.attack2;
button3.innerHTML=obj1.attack3;
button4.innerHTML=obj1.attack4;
value11=obj1.value1;
value12=obj1.value2;
value13=obj1.value3;
value14=obj1.value4;



let selected1=document.getElementById("pokemon1").value;

function handleChange1(){
    let select1=document.getElementById("pokemon1").value;
    if(select1===pokemon.Charmander.name){
        obj1=pokemon.Charmander
        selected1=obj1.name
        document.getElementById("img1").src=obj1.image;
        document.getElementById("type1").innerHTML=obj1.type;
        button1.innerHTML=obj1.attack1;
        button2.innerHTML=obj1.attack2;
        button3.innerHTML=obj1.attack3;
        button4.innerHTML=obj1.attack4;
        value11=obj1.value1;
        value12=obj1.value2;
        value13=obj1.value3;
        value14=obj1.value4;
    }
    else if(select1===pokemon.Bulbasaur.name){
        obj1=pokemon.Bulbasaur
        selected1=obj1.name
        document.getElementById("img1").src=obj1.image;
        document.getElementById("type1").innerText=obj1.type;
        button1.innerHTML=obj1.attack1;
        button2.innerHTML=obj1.attack2;
        button3.innerHTML=obj1.attack3;
        button4.innerHTML=obj1.attack4;
        value11=obj1.value1;
        value12=obj1.value2;
        value13=obj1.value3;
        value14=obj1.value4;
    }
    else if(select1===pokemon.Squirtle.name){
        obj1=pokemon.Squirtle
        selected1=obj1.name
        document.getElementById("img1").src=obj1.image;
        document.getElementById("type1").innerText=obj1.type;
        button1.innerHTML=obj1.attack1;
        button2.innerHTML=obj1.attack2;
        button3.innerHTML=obj1.attack3;
        button4.innerHTML=obj1.attack4;
        value11=obj1.value1;
        value12=obj1.value2;
        value13=obj1.value3;
        value14=obj1.value4;
    }
    else{
        obj1=pokemon.Pikachu
        selected1=obj1.name
        document.getElementById("img1").src=obj1.image;
        document.getElementById("type1").innerText=obj1.type;
        button1.innerHTML=obj1.attack1;
        button2.innerHTML=obj1.attack2;
        button3.innerHTML=obj1.attack3;
        button4.innerHTML=obj1.attack4;
        value11=obj1.value1;
        value12=obj1.value2;
        value13=obj1.value3;
        value14=obj1.value4;
    }
}
let obj2={}
let selected2="";
let num=null;
function opponent(){
    num=Math.floor(Math.random()*4)
    if(num===pokemon.Charmander.id){
        obj2=pokemon.Charmander;
        selected2=obj2.name
        document.getElementById("pokemon2").innerHTML=obj2.name;
        document.getElementById("img2").src=obj2.image;
        document.getElementById("type2").innerHTML=obj2.type;
    }
    else if(num===pokemon.Bulbasaur.id){
        obj2=pokemon.Bulbasaur;
        selected2=obj2.name
        document.getElementById("pokemon2").innerHTML=obj2.name;
        document.getElementById("img2").src=obj2.image;
        document.getElementById("type2").innerHTML=obj2.type;
    }
    else if(num===pokemon.Squirtle.id){
        obj2=pokemon.Squirtle;
        selected2=obj2.name
        document.getElementById("pokemon2").innerHTML=obj2.name;
        document.getElementById("img2").src=obj2.image;
        document.getElementById("type2").innerHTML=obj2.type;
        
    }
    else{
        obj2=pokemon.Pikachu;
        selected2=obj2.name
        document.getElementById("pokemon2").innerHTML=obj2.name;
        document.getElementById("img2").src=obj2.image;
        document.getElementById("type2").innerHTML=obj2.type;
    }
    
}


function handleClick(){
    if(num==null){
        document.getElementById("warning").style.display="block"
    }
    else{
        document.getElementById("selection").style.display="none";
        document.getElementById("match").style.display="block";
        document.getElementById("pokemonLogo").style.height="150px";
    }
}

let result1=input1.value;
let result2=input2.value;
let loser="";
let winner="";

function handleClick1(){
    result2=result2-value11;
    if(result2<=0){
        loser=selected2;
        winner=selected1;
        input2.value=0;
        document.getElementById("health2").innerHTML=0;
        document.getElementById("match").style.display="none"
        document.getElementById("endMatch").style.display="block"
    }
    else{
        input2.value=result2;
        document.getElementById("health2").innerHTML=result2;
    }
    button1.style.visibility="hidden";
    button2.style.visibility="hidden";
    button3.style.visibility="hidden";
    button4.style.visibility="hidden";
    document.getElementById("poke1").innerHTML=obj1.name;
    document.getElementById("atk1").innerHTML=obj1.attack1;
    document.getElementById("damage2").innerHTML=-1*obj1.value1;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atk").style.visibility="visible"
}

function handleClick2(){
    result2=result2-value12;
    if(result2<=0){
        loser=selected2;
        winner=selected1
        input2.value=0;
        document.getElementById("health2").innerHTML=0;
        document.getElementById("match").style.display="none"
        document.getElementById("endMatch").style.display="block"
    }
    else{
        input2.value=result2;
        document.getElementById("health2").innerHTML=result2;
    }
    button1.style.visibility="hidden";
    button2.style.visibility="hidden";
    button3.style.visibility="hidden";
    button4.style.visibility="hidden";
    document.getElementById("poke1").innerHTML=obj1.name;
    document.getElementById("atk1").innerHTML=obj1.attack2;
    document.getElementById("damage2").innerHTML=-1*obj1.value2;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atk").style.visibility="visible"
}

function handleClick3(){
    result2=result2-value13;
    if(result2<=0){
        loser=selected2;
        winner=selected1
        input2.value=0;
        document.getElementById("health2").innerHTML=0;
        document.getElementById("match").style.display="none"
        document.getElementById("endMatch").style.display="block"
    }
    else{
        input2.value=result2;
        document.getElementById("health2").innerHTML=result2;
    }
    button1.style.visibility="hidden";
    button2.style.visibility="hidden";
    button3.style.visibility="hidden";
    button4.style.visibility="hidden";
    document.getElementById("poke1").innerHTML=obj1.name;
    document.getElementById("atk1").innerHTML=obj1.attack3;
    document.getElementById("damage2").innerHTML=-1*obj1.value3;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atk").style.visibility="visible"
}

function handleClick4(){
    result2=result2-value14;
    if(result2<=0){
        loser=selected2;
        winner=selected1
        input2.value=0;
        document.getElementById("health2").innerHTML=0;
        document.getElementById("match").style.display="none"
        document.getElementById("endMatch").style.display="block"
    }
    else{
        input2.value=result2;
        document.getElementById("health2").innerHTML=result2;
    }
    button1.style.visibility="hidden";
    button2.style.visibility="hidden";
    button3.style.visibility="hidden";
    button4.style.visibility="hidden";
    document.getElementById("poke1").innerHTML=obj1.name;
    document.getElementById("atk1").innerHTML=obj1.attack4;
    document.getElementById("damage2").innerHTML=-1*obj1.value4;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atk").style.visibility="visible"
}

function next(){
    document.getElementById("oppAtk").style.visibility="visible"
    let n=Math.floor(Math.random()*4)
    if(n==0){
        document.getElementById("poke2").innerHTML=obj2.name;
        document.getElementById("atk2").innerHTML=obj2.attack1;
        document.getElementById("damage1").innerHTML=-1*obj2.value1;
        result1=result1-obj2.value1
        if(result1<=0){
            loser=selected1;
            winner=selected2
            input1.value=0;
            document.getElementById("health1").innerHTML=0;
            document.getElementById("match").style.display="none"
            document.getElementById("endMatch").style.display="block"
        }
        else{
            input1.value=result1;
            document.getElementById("health1").innerHTML=result1;
        }
    }
    else if(n==1){
        document.getElementById("poke2").innerHTML=obj2.name;
        document.getElementById("atk2").innerHTML=obj2.attack2;
        document.getElementById("damage1").innerHTML=-1*obj2.value2;
        result1=result1-obj2.value2
        if(result1<=0){
            loser=selected1;
            winner=selected2
            input1.value=0;
            document.getElementById("health1").innerHTML=0;
            document.getElementById("match").style.display="none"
            document.getElementById("endMatch").style.display="block"
        }
        else{
            input1.value=result1;
            document.getElementById("health1").innerHTML=result1;
        }
    }
    else if(n==2){
        document.getElementById("poke2").innerHTML=obj2.name;
        document.getElementById("atk2").innerHTML=obj2.attack3;
        document.getElementById("damage1").innerHTML=-1*obj2.value3;
        result1=result1-obj2.value3
        if(result1<=0){
            loser=selected1;
            winner=selected2
            input1.value=0;
            document.getElementById("health1").innerHTML=0;
            document.getElementById("match").style.display="none"
            document.getElementById("endMatch").style.display="block"
        }
        else{
            input1.value=result1;
            document.getElementById("health1").innerHTML=result1;
        }
    }
    else{
        document.getElementById("poke2").innerHTML=obj2.name;
        document.getElementById("atk2").innerHTML=obj2.attack4;
        document.getElementById("damage1").innerHTML=-1*obj2.value4;
        result1=result1-obj2.value4
        if(result1<=0){
            loser=selected1;
            winner=selected2
            input1.value=0;
            document.getElementById("health1").innerHTML=0;
            document.getElementById("match").style.display="none"
            document.getElementById("endMatch").style.display="block"
        }
        else{
            input1.value=result1;
            document.getElementById("health1").innerHTML=result1;
        }
    }
    button1.style.visibility="visible";
    button2.style.visibility="visible";
    button3.style.visibility="visible";
    button4.style.visibility="visible";
    document.getElementById("nextBtn").style.visibility="hidden"
}

function endMatch(){
    console.log(selected1)
    console.log(selected2)
    if(loser==selected1){
        document.getElementById("result").innerHTML=obj2.name;
        document.getElementById("winner-img").src=obj2.image
    }
    else{
        document.getElementById("result").innerHTML=obj1.name
        document.getElementById("winner-img").src=obj1.image
    }
    document.getElementById("result").style.display="block"
    document.getElementById("winner-img").style.display="block"
}
