let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(1300, 325, 50, 50, 'green')

let carroInimigo2 = new CarroInimigo(1500, 200, 50, 50, 'red')

let carro = new Carro(100, 325, 50, 50, 'blue')

document.addEventListener('keydown', (e)=>{
    if(e.key === 's'){
        carro.dir = +5
    console.log(carro.dir)
    }else if(e.key === 'w'){
        carro.dir = -5
    console.log(carro.dir)
    }
    
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'w' || e.key === 's'){
        carro.dir = 0   
    }
})


document.addEventListener('keydown', (e)=>{
    if(e.key === 'a'){
        carro.dir2 = -5
    console.log(carro.dir)
    }else if(e.key === 'd'){
        carro.dir2 = 5
    console.log(carro.dir)
    }
    
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'a' || e.key === 'd'){
        carro.dir2 = 0   
    }
})


function desenha(){
    carroInimigo.des_quad()
    carroInimigo2.des_quad()
    carro.des_quad()
}

function atualiza(){
    carro.mov_car()
    carroInimigo.mov_car()    
    carroInimigo2.mov_car()
}

function main(){
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()