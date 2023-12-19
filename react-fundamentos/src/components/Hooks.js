import { useState, useEffect } from "react";

const Hooks = () => {
    let idade = 30
    const [novaIdade, setNovaIdade] = useState(40);

    const changeAge = () => {
        idade = 31;
        console.log(idade);
    };

    useEffect(
        () => {
          console.log("Testendo!");  
        }
    );

    const changeNewAge = () => {
        // Obtém o valor atual da idade
        const currentAge = novaIdade;
    
        // Incrementa o valor
        const newAge = currentAge + 1;
    
        // Atualiza o estado com o novo valor
        setNovaIdade(newAge);
    }
    

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar Nova Idade</button>
        </div>
    );
}

export default Hooks;