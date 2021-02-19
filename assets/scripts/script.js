const val = document.querySelector('#valor')
const btn = document.querySelector('button')
const result = document.querySelector('#resultado')
const check = (e) => {
    return typeof (e) == Number ? True : false
}
const pressBtn = btn.addEventListener('click', e => {
    event.preventDefault()
    if(val.value == ''){
        showError('Please insert a value')
    }else{
        chamada()
    }
    
})
val.addEventListener('keypress', e => {
    pressBtn
    if (e.keyCode == 13) pressBtn
})
const chamada = async () => {
    const ap = await api()
    calcularValor(ap)
    console.log(ap)
}
const calcularValor = v => {
    const total = val.value/v.bid
    const type = v.code
    showValue(total,type)
}
const showValue = (x,text) =>{
    result.innerHTML=`${text} ${x.toFixed(2)}`
}
const showError = (x)=>{
    result.innerHTML = `<span style="color:red;">${x}<span/>`.toUpperCase()
}