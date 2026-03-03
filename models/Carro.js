class Obj{
    constructor(x, y, w, h, a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a

    }

    des_quad(){
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h, this.a)
    }

    des_quad(){
        // Roda dianteira esquerda (agora superior frente)
       des.beginPath()
       des.lineWidth = '5'
       des.strokeStyle = 'orange'
       des.fillStyle = 'darkorange'
       des.rect(this.x + 60, this.y - 50, 10, 10) 
       des.stroke()
       des.fill()

       // Roda dianteira direita (agora inferior frente)
       des.beginPath()
       des.rect(this.x + 60, this.y, 10, 10)
       des.stroke()
       des.fill()

       // Roda traseira esquerda (agora superior trás)
       des.beginPath()
       des.rect(this.x + 10, this.y - 50, 10, 10)
       des.stroke()
       des.fill()

       // Roda traseira direita (agora inferior trás)
       des.beginPath()
       des.rect(this.x + 10, this.y, 10, 10)
       des.stroke()
       des.fill()

       // Trapézio do corpo (Corpo principal rotacionado)
       des.beginPath()
       des.moveTo(this.x, this.y - 50) 
       des.lineTo(this.x, this.y)
       des.lineTo(this.x + 50, this.y - 10)
       des.lineTo(this.x + 50, this.y - 40)
       des.closePath()
       des.lineWidth = '5'
       des.strokeStyle = 'black'
       des.fillStyle = this.a
       des.stroke()
       des.fill()

       // Corpo frente (retângulo do "nariz")
       des.beginPath()
       des.rect(this.x + 50, this.y - 40, 20, 30)
       des.stroke()
       des.fill()

       // Asa frontal (vertical na ponta direita)
       des.beginPath()
       des.rect(this.x + 70, this.y - 50, 10, 50)
       des.stroke()
       des.fill()
   }
}

class Carro extends Obj{
    dir = 0
    dir2 = 0
    
    mov_car(){
        this.y += this.dir
        this.x += this.dir2
        // Limites da tela
        if(this.y <= 0){
            this.y = 0
        }if(this.y >= 700){ // 1200 - 60 (largura do carro)
            this.y = 700
        }
        
        if(this.x <= 0){
            this.x = 0
        }if(this.x >= 1140){ // 1200 - 60 (largura do carro)
            this.x = 1140
        }
    }
}

class CarroInimigo extends Obj{
    mov_car(){
        this.x -= 5
        if(this.x < -100){
            this.x = 1300
        }
    }
}