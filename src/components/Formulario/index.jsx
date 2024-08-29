import { useState, useEffect } from "react";


// using react we has some functions begining with 'use'. We call the hook(gancho) functions
// useEffet it's watch the alterations of parameters selected. 

const Formulario = () => {
    // using react its more easy to retrive an value of any object. For the exemple below we can use this
    const [name, setname] = useState('') //please note that we are make a desestruturação 
    const [materiaA, setMateriaA] = useState(0) // recording as this way --using a state 'usando o estado'
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    
    useEffect(() => {
        console.log('o estado iniciou');

            return () => {
                console.log(' o estado terminou') // after that we create a function to button wen we inspecioned with console, we see
            }// that when click to open form shows 'o estado iniciou' and when click to close form shows 'o estado terminou'
    },[])
    // to look at an one event in specific as change the value of name, materiaA, materiaB, or materiaC, you have to include the const inside of []
    // we can use to return as a condition, lets create a condition in  a function on app.jsx
    // but, if you want to look at general view you insert nothing on [] as above.
    useEffect(() => {
        console.log('o estado mudou')
    },[name]) // as we said before if we insert the const name inside every time that you increase, decrease or using space inside of the content
    // the console.log ('o estado mudou') will appear.

    function retornaValores() {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC); // to return sum you have to add in a const
        const media = soma / 3;
        if(media >= 7) {
            return ( // notice that you have to use arguments inside of paratensis of return inside the IF and ELSE function
                <p>O {name} foi aprovado com média {media}</p>
            )
        }else {
            return (
                <p>O {name} não foi aprovado, sua média foi de {media}</p>
            )
        }
    }
    return (

        // HOW TO RENDERING LIST ON REACT. SEE BELOW --->
        //first lets create a list with <ul>
        <form >
            <ul>
                {/* every content inside of {} its JavaScript content */}
                {/* afeter lets create an array of numbers and to use it we have to call map to interact with functions */}
                {/* why map? Because he can interect with every each element of array and return an element, and to use react we need a element. */}
                {/* so doing like this we create a list of every each element of array. Rendering all items */}
                {/* if we inspect(inspencionar) the console, we will found an error, this because the map needs a key */}
                {/* and we need to add key with the value its the same of (item), because the react maybe will need to acces the right place */}
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}   

            </ul>
            {/* we can also use desestruturação to parameters inside of arrowm function as bellow */}
            <input type="text" placeholder="Digite o seu nome" onChange={({ target }) => setname(target.value)}/>
            <input type="number" placeholder="Digite uma nota" onChange={evento => setMateriaA(evento.target.value)}/>
            <input type="number" placeholder="Digite uma nota" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number" placeholder="Digite uma nota" onChange={evento => setMateriaC(evento.target.value)}/>
            {retornaValores()}
        </form>
    )
}

export default Formulario