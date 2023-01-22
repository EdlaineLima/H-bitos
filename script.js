//iniciando a blibioteca
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
//change= mudança/ save = salvar os dados
form.addEventListener('change', save)
function add() {
    //slice funciona em string e é coomo recorte, 0 recorta nada no começo, mas -5 caracter de trás para frente. de 01/01/2023, ficou 01/01.
    //toLocaleDateString = pega a data brasileira
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    //true se o dia já existir
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert('Dia já existe ')
        return
    }
    alert('Adicionado com sucesso 🆗')
    nlwSetup.addDay(today)
}

function save() {
    //objeto que guarda informação na memoria do navegador
    //guarda o valor NLWSetup em json(string)
    localStorage.setItem("NLWSetup", JSON.stringify(nlwSetup.data))
}

//tranforma o objeto em texto.
const data = JSON.parse(localStorage.getItem("NLWSetup")) || {}
nlwSetup.setData(data)
nlwSetup.load();