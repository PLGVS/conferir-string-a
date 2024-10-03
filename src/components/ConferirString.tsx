import { useState } from "react"

export function ConferirString (){
    const [string, setString] = useState('')
    const [mensagem, setMensagem] = useState('')

    function conferirString(){
        const str = string
        let letra_minuscula = "a"
        let letra_maiscula = "A"
        let c = 0

        for (let i = 0; i < str.length; i++){
            if (str[i] === letra_minuscula || str[i] === letra_maiscula){
                c++;
            }
            console.log(str[i])
        }

        if (c > 0) {
            setMensagem("Nessa string temos " + c + " ocorrências da letra a")
        }
        else {
            setMensagem("Não há nenhuma ocorrência da letra a nessa string!")
        }
        
    }
    return (
        <>
             <div className="app">
                <h1>Conferir String</h1>
                <h3>Digite qualquer string para conferir se existe a letra a nela e quantas vezes ela aparece</h3>
                <input type="text" placeholder="Digite um número" value={string} onChange={(e) => setString(e.target.value)}/>
                <button onClick={conferirString}>Enviar</button>
                <h2>{mensagem}</h2>
            </div>
        </>
    )
}