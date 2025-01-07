import React, { useState, useEffect } from "react";

const App = () => {

    const [ usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(
        ["Juan", "Pedro", "Pablo"]
    );

    const handleAddUser = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario("");
    }

    useEffect(() => {
        setCount(usuarios.length);
    }, [usuarios])

        return ( 
            <div className="App">
                <h1>Usuarios</h1>
                <h3>Total: {count}</h3>
                <div>
                    <input
                    value = {usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                    />
                    <button onClick={handleAddUser}>
                        Adicionar
                    </button>
                </div>
                <hr />
                {usuarios.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        );
}

export default App;