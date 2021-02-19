//conexão com a api do awesome API
const api =async () =>{
    try{
        const dolar = await fetch('https://economia.awesomeapi.com.br/json/USD-BRL').then(resposta => {
            return resposta.json()
        }).then(data=>{
            return data
        } 
        ).catch(e => {
            console.error(e)
        })
        return dolar[0]
    }catch{
        alert(Error('Estou com problemas, por favor tente novamente mais tarde'))
    }
}
