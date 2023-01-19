const pokemon=[
    {
        id:0,
        name : "Charizard",
        type : "Fire",
        image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", 
        attack1 : "flame-thrower",
        value1: 10,
        attack2 : "ember",
        value2: 8,
        attack3 : "scratch",
        value3: 9,
        attack4 : "hyper-beam",
        value4: 15
    }
    ,
    {
        id : 1,
        name : "Venusaur",
        type : "Grass",
        image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
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
    {
        id:2,
        name : "Blastoise",
        type : "Water",
        image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        attack1 : "tackle",
        value1 : 8,
        attack2 : "hydro-cannon",
        value2 : 10,
        attack3 : "water-gun",
        value3 : 9,
        attack4 : "hydro-pump",
        value4 : 15
    }
    ,
    {
        id : 3,
        name : "Raichu",
        type : "Electric",
        image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        attack1 : "tackle",
        value1 : 8,
        attack2 : "thunder-bolt",
        value2 : 15,
        attack3 : "iron-tail",
        value3 : 9,
        attack4 : "thunder-shock",
        value4 : 10
    }
    ,
    {
        id : 4,
        name : "Pidgeot",
        type : "Flying",
        image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        attack1 : "peck",
        value1 : 8,
        attack2 : "wing-attack",
        value2 : 15,
        attack3 : "fly",
        value3 : 9,
        attack4 : "steel-wing",
        value4 : 10
    }
    ,
    {
        id : 5,
        name : "Dragonite",
        type : "Dragon",
        image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        attack1 : "dragon-claw",
        value1 : 8,
        attack2 : "dragon-breath",
        value2 : 15,
        attack3 : "steel-wing",
        value3 : 9,
        attack4 : "hyper-beam",
        value4 : 10
    }

]
console.log(pokemon[0].id)
let obj1=pokemon[0]
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
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



let selected1="Yours Charizard";

function handleChange1(){
    selected1=document.getElementById("pokemon1").value;

    for(let i=0;i<pokemon.length;i++){
        if(pokemon[i].name===selected1){
            obj1=pokemon[i]
            selected1="Yours "+obj1.name;
            console.log(selected1)
            document.getElementById("img1").src=obj1.image;
            document.getElementById("type1").innerHTML=obj1.type;
            document.getElementById("health-img1").src=obj1.image;
            document.getElementById("healthbar-name1").innerHTML=obj1.name;
            button1.innerHTML=obj1.attack1;
            button2.innerHTML=obj1.attack2;
            button3.innerHTML=obj1.attack3;
            button4.innerHTML=obj1.attack4;
            value11=obj1.value1;
            value12=obj1.value2;
            value13=obj1.value3;
            value14=obj1.value4;
            break;
        }
    }
    
}
let obj2={}
let selected2="";
let num=null;
function opponent(){
    num=Math.floor(Math.random()*(pokemon.length+1))
    for(let i=0;i<pokemon.length;i++){
        if(pokemon[i].id===num){
            obj2=pokemon[i];
            selected2="Opponent "+obj2.name
            document.getElementById("pokemon2").innerHTML=obj2.name;
            document.getElementById("img2").src=obj2.image;
            document.getElementById("type2").innerHTML=obj2.type;
            document.getElementById("healthbar-name2").innerHTML=obj2.name;
            document.getElementById("health-img2").src=obj2.image;
            break;
        }
    }
}


function handleClick(){
    if(num===null){
        document.getElementById("warning").style.display="block"
    }
    else{
        document.getElementById("selection").style.display="none";
        document.getElementById("match").style.display="block";
        document.getElementById("pokemonLogo").style.display="none";
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
    document.getElementById("poke").innerHTML=obj1.name;
    document.getElementById("atk").innerHTML=obj1.attack1;
    document.getElementById("damage2").innerHTML=-1*obj1.value1;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atkDiv").style.visibility="visible"
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
    document.getElementById("poke").innerHTML=obj1.name;
    document.getElementById("atk").innerHTML=obj1.attack2;
    document.getElementById("damage2").innerHTML=-1*obj1.value2;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atkDiv").style.visibility="visible"
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
    document.getElementById("poke").innerHTML=obj1.name;
    document.getElementById("atk").innerHTML=obj1.attack3;
    document.getElementById("damage2").innerHTML=-1*obj1.value3;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atkDiv").style.visibility="visible"
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
    document.getElementById("poke").innerHTML=obj1.name;
    document.getElementById("atk").innerHTML=obj1.attack4;
    document.getElementById("damage2").innerHTML=-1*obj1.value4;
    document.getElementById("nextBtn").style.visibility="visible"
    document.getElementById("atkDiv").style.visibility="visible"
}

function next(){
    let n=Math.floor(Math.random()*4)
    console.log(n)
    console.log(obj2.name)
    if(n===0){
        document.getElementById("poke").innerHTML=obj2.name;
        document.getElementById("atk").innerHTML=obj2.attack1;
        document.getElementById("damage1").innerHTML=-1*obj2.value1;
        result1=result1-obj2.value1;
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
    else if(n===1){
        document.getElementById("poke").innerHTML=obj2.name;
        document.getElementById("atk").innerHTML=obj2.attack2;
        document.getElementById("damage1").innerHTML=-1*obj2.value2;
        result1=result1-obj2.value2;
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
    else if(n===2){
        document.getElementById("poke").innerHTML=obj2.name;
        document.getElementById("atk").innerHTML=obj2.attack3;
        document.getElementById("damage1").innerHTML=-1*obj2.value3;
        result1=result1-obj2.value3;
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
    else if(n===3){
        document.getElementById("poke").innerHTML=obj2.name;
        document.getElementById("atk").innerHTML=obj2.attack4;
        document.getElementById("damage1").innerHTML=-1*obj2.value4;
        result1=result1-obj2.value4;
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
    if(winner===selected2){
        document.getElementById("winner-span").innerHTML=selected2;
        document.getElementById("winner-img").src=obj2.image
    }
    else if(winner===selected1){
        document.getElementById("winner-span").innerHTML=selected1
        document.getElementById("winner-img").src=obj1.image
    }
    document.getElementById("result").style.display="block"
    document.getElementById("winner-img").style.display="block"
}
