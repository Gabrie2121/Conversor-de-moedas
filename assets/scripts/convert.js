const dolar = fetch('https://economia.awesomeapi.com.br/json/USD-BRL').then(resposta => {
    return resposta.json()
}).then(data=>{
    console.log(data)
    console.log(data[0].code)//dolar
    console.log(data[0].codein)//real
    console.log(data[0].bid)//valor
    console.log(data[0].high)//maxima
    console.log(data[0].low)//minimo
    
} 
).catch(e => {
    console.log(e)
})