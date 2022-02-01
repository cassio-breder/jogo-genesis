let order = []
let clickedOrder = []
let score = 0

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const red = document.querySelector('.red')
const green = document.querySelector('.green')

// Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)  
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

// Acende a próxima cor
    let lightColor = (element, number) => {
        number = number * 500
        setTimeout(() => element.classList.add('selected'), number - 250)
        setTimeout(() => element.classList.remove('selected'))
    }


// Verifica se os botões clicados são os mesmos da ordem gerada pelo jogo
    let checkOrder = () => {
        for(let i in clickedOrder) {
            if(clickedOrder[i] != order[i]) {
                gameOver()
                break
            }
        }

        if(clickedOrder.length == order.length) {
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
            nextLevel()
        }
    }


// Clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('slected')
        checkOrder()
    }, 250)
}

// Função para retornar a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green
    } else if(color == 1) {
        return red
    } else if(color == 2) {
        return yellow
    } else if (color == 3) {
        return blue
    }
}

// Função para próximo nível do jogo
let nextLevel = () => {
    score++
    shuffleOrder()
}

// Função game over
let gameOver = () => {
    alert(`Você perdeu!\nPontuação: ${score}!`)
    order = []
    clickedOrder = []

    playGame()
}

// Função inicio do jogo
let playGame = () => {
    alert('Iniciando um novo jogo!')
    score = 0

    nextLevel()
}

// Eventos de clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


// Inicio do jogo
playGame(); 