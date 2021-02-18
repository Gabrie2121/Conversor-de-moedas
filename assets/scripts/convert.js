const dolar = fetch('https://economia.awesomeapi.com.br/json/USD-BRL').then(resposta => {
    return resposta.json()
}).then(data=>{
    console.log(data)
    console.log(data[0].code)//dolar
    console.log(data[0].bid)//valor
    
} 
).catch(e => {
    console.log(e)
})