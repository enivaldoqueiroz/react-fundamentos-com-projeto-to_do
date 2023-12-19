import AnotherComponent from "./AnotherComponent";

function FirstComponent(){
    //Algum comentário

    const name = "Enivaldo";
    return (
        <div className="firstcomponent">
            {/*Comentário no JSX*/}
            <p>Primeiro Component</p>
            {2 + 2}
            {console.log("JavaScript")}
            <p>Nome: {name}</p>
            <AnotherComponent/>
        </div>
    )
}

export default FirstComponent;