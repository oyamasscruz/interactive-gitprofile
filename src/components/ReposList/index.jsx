import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

                //After all, we can do the code more automatic, using the propertie inside Repolist(), to make a desestruturação.

const ReposList = ({ nomeUsuario }) => {
    //the first setp its create an (Estado, remember the estados of the others lessons) to store the list of repositories of the github repositories.
    //additionally we do desestruturação of UseState, as we did in other lesssons.
    // we use an array empty in useState because its the same as ' ' or nothing
    const [repos, setRepos] = useState([]);
    // now we will create useEffect to call when load all the content. After we will call the fetch to get api.
        // we can also create a state to say our content its loading, to add this, first lets create an setTimeOut
    const [estaCarregando, setEstaCarregando] = useState(true)
    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        // now we use .then to return the call of an promises
        .then(res => res.json())
        .then(resJson => {
                    // we will create a setTimeout to say the page is loading
            setTimeout(() => {
                    // and after all lets use the setEstaCarregando
                    setEstaCarregando(false);
                //lets use the setRepos inside the setTimeout to appear that content its loading, and needs time to this.
    // if we use console.log(resJson) we see that fetch api retrive some list of arrays. This retrieve was what we expected, so we gonna use
    //setRepos using resJson as parameters;
                setRepos(resJson);
            },3000)
            //lets call the console.log(resJson) again to create our list
            console.log(resJson);
        })
    },[nomeUsuario]);
    
    return (
        <div className="container">
        {/* remember in App.jsx that we create a conditional to rendering content. */}
            {estaCarregando ? (
                <h3>Carregando...</h3>
            ): (
            <ul className={styles.list}>
                {/* as we did in formulario --> index.jsx we transform an array of number and to use it, we call map, to interct with functions */}
                {/* lets create a map to use the array stored used with fetch api */}
                {/* {repos.map(repositorio => ( we started written like this but to improve our desestruturação we can also write like below */}
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id} className={styles.listItem}>
                        <div className={styles.itemName}>
                            <b>Nome: </b>{name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b>{language}
                        </div> 
                        <a className={styles.itemLink} href={html_url} target="_blank">Visitar no Github</a>
                    </li>
                ))}
            </ul>

            )}
    </div>
    )
}

export default ReposList;