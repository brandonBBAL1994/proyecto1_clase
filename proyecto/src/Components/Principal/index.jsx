import React from 'react'
import { useLocation } from 'react-router-dom'

const Principal = () => {

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)

    const turno = parseInt(searchParams.get('turno'))
    const estado= searchParams.get('estado')
    
    const casillaEnBlanco = 2
    const fichaBlanca = 1
    const fichaNegra = 0

    const colocar = () => {
        let pos = 0
        let x = 0
        let y = 0

        let arrayTablero = new Array(8)
        for(x = 0; x <= 7; x++){
            arrayTablero[x] = new Array(8)
            for(y = 0; y<=7; y++){
                arrayTablero[x][y] = parseInt(estado[pos])
                pos++
            }
        }
        pos = 0
        x = 0
        y = 0

        let z = 0
        let w = 0
        let arregloPosiblesMovimientos = []

        for(x = 0; x <= 7; x++){
            for(y = 0; y <= 7; y++){
                if(arrayTablero[x][y] !== casillaEnBlanco) continue
                let posibleIndice = {
                    x: x,
                    y: y,
                    total: 0
                }
                let counterMovs = 0

                if(turno === 0){//turno de fichas negras

                    if(y > 0){//voy a revisar los valores de la izquierda
                        z = y - 1
                        counterMovs = 0
                        
                        while(z >= 0){
                            if(arrayTablero[x][z] === casillaEnBlanco || arrayTablero[x][z] === fichaNegra) break
                            if(arrayTablero[x][z] === fichaBlanca) counterMovs++
                            z--
                            if(arrayTablero[x][z] === fichaNegra) break
                        }
                        if(arrayTablero[x][z] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }
                    if(y <= 5){//voy a revisar los valores a la derecha
                        z = y + 1
                        counterMovs = 0
                        while(z <= 7){
                            if(arrayTablero[x][z] === casillaEnBlanco || arrayTablero[x][z] === fichaNegra) break
                            if(arrayTablero[x][z] === fichaBlanca) counterMovs++
                            z++
                            if(arrayTablero[x][z] === fichaNegra) break
                        }
                        if(arrayTablero[x][z] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                            
                        }
                    }
                    if(x >= 2){//voy a revisar hacia arriba
                        z = x - 1
                        counterMovs = 0
                        while(z >= 0){
                            if(arrayTablero[z][y] === casillaEnBlanco || arrayTablero[x][z] === fichaNegra) break
                            if(arrayTablero[z][y] === fichaBlanca) counterMovs++
                            z--
                            if(arrayTablero[z][y] === fichaNegra) break
                        }
                        if(arrayTablero[z][y] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }
                    if(x <= 5){//voy a revisar hacia abajo
                        z = x + 1
                        counterMovs = 0
                        while(z <= 7){
                            if(arrayTablero[z][y] === casillaEnBlanco || arrayTablero[z][y] === fichaNegra) break
                            if(arrayTablero[z][y] === fichaBlanca) counterMovs++
                            z++
                            if(arrayTablero[z][y] === fichaNegra) break
                        }
                        if(arrayTablero[z][y] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                            
                        }
                    }

                    /* REVISANDO EN DIAGONALES */

                    //DIAGONAL DERECHA ARRIBA
                    if(x >= 2 && y <= 5){
                        z = x - 1
                        w = y + 1
                        counterMovs = 0
                        while(z > 0 && w < 7){
                            if(arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaNegra) break
                            if(arrayTablero[z][w] === fichaBlanca) counterMovs++
                            z--
                            w++
                            if(arrayTablero[z][w] === fichaNegra) break
                        }
                        if(arrayTablero[z][w] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }

                    //DIAGONAL DERECHA ABAJO
                    if(x <= 5 && y <= 5){
                        z = x + 1
                        w = y + 1
                        counterMovs = 0
                        while(z < 7 && w < 7){
                            if(arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaNegra) break
                            if(arrayTablero[z][w] === fichaBlanca) counterMovs++
                            z++
                            w++
                            if(arrayTablero[z][w] === fichaNegra) break
                        }
                        if(arrayTablero[z][w] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }

                    //DIAGONAL IZQUIERDA ARRIBA
                    if(x >= 2 && y >= 2){
                        z = x - 1
                        w = y - 1
                        counterMovs = 0
                        while(z > 0 && w > 0){
                            if(arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaNegra) break
                            if(arrayTablero[z][w] === fichaBlanca) counterMovs++
                            z--
                            w--
                            if(arrayTablero[z][w] === fichaNegra) break
                        }
                        if(arrayTablero[z][w] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }

                    //DIAGONAL IZQUIERDA ABAJO
                    if(x <= 5 && y >= 2){
                        z = x + 1
                        w = y - 1
                        counterMovs = 0
                        while(z < 7 && w > 0){
                            if(arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaNegra) break
                            if(arrayTablero[z][w] === fichaBlanca) counterMovs++
                            z++
                            w--
                            if(arrayTablero[z][w] === fichaNegra) break
                        }
                        if(arrayTablero[z][w] === fichaNegra && counterMovs > 0){
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }



                    
                }else{//turno fichas blancas

                    if (y > 0) {//voy a revisar los valores de la izquierda
                        z = y - 1
                        counterMovs = 0

                        while (z >= 0) {
                            if (arrayTablero[x][z] === casillaEnBlanco || arrayTablero[x][z] === fichaBlanca) break
                            if (arrayTablero[x][z] === fichaNegra) counterMovs++
                            z--
                            if (arrayTablero[x][z] === fichaBlanca) break
                        }
                        if (arrayTablero[x][z] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)

                        }
                    }
                    if (y <= 5) {//voy a revisar los valores a la derecha
                        z = y + 1
                        counterMovs = 0
                        while (z <= 7) {
                            if (arrayTablero[x][z] === casillaEnBlanco || arrayTablero[x][z] === fichaBlanca) break
                            if (arrayTablero[x][z] === fichaNegra) counterMovs++
                            z++
                            if (arrayTablero[x][z] === fichaBlanca) break
                        }
                        if (arrayTablero[x][z] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }
                    if (x >= 2) {//voy a revisar hacia arriba
                        z = x - 1
                        counterMovs = 0
                        while (z >= 0) {
                            if (arrayTablero[z][y] === casillaEnBlanco || arrayTablero[z][y] === fichaBlanca) break
                            if (arrayTablero[z][y] === fichaNegra) counterMovs++
                            z--
                            if (arrayTablero[z][y] === fichaBlanca) break
                        }
                        if (arrayTablero[z][y] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }
                    if (x <= 5) {//voy a revisar hacia abajo
                        z = x + 1
                        counterMovs = 0
                        while (z <= 7) {
                            if (arrayTablero[z][y] === casillaEnBlanco || arrayTablero[z][y] === fichaBlanca) break
                            if (arrayTablero[z][y] === fichaNegra) counterMovs++
                            z++
                            if (arrayTablero[z][y] === fichaBlanca) break
                        }
                        if (arrayTablero[z][y] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }

                    /* REVISANDO EN DIAGONALES */
                    //DIAGONAL DERECHA ARRIBA
                    if (x >= 2 && y <= 5) {
                        z = x - 1
                        w = y + 1
                        counterMovs = 0
                        while (z > 0 && w < 7) {
                            if (arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaBlanca) break
                            if (arrayTablero[z][w] === fichaNegra) counterMovs++
                            z--
                            w++
                            if (arrayTablero[z][w] === fichaBlanca) break
                        }
                        if (arrayTablero[z][w] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                        }
                    }

                    //DIAGONAL DERECHA ABAJO
                    if (x <= 5 && y <= 5) {
                        z = x + 1
                        w = y + 1
                        counterMovs = 0
                        while (z < 7 && w < 7) {
                            if (arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaBlanca) break
                            if (arrayTablero[z][w] === fichaNegra) counterMovs++
                            z++
                            w++
                            if (arrayTablero[z][w] === fichaBlanca) break
                        }
                        if (arrayTablero[z][w] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }

                    //DIAGONAL IZQUIERDA ARRIBA
                    if (x >= 2 && y >= 2) {
                        z = x - 1
                        w = y - 1
                        counterMovs = 0
                        while (z > 0 && w > 0) {
                            if (arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaBlanca) break
                            if (arrayTablero[z][w] === fichaNegra) counterMovs++
                            z--
                            w--
                            if (arrayTablero[z][w] === fichaBlanca) break
                        }
                        if (arrayTablero[z][w] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }

                    //DIAGONAL IZQUIERDA ABAJO
                    if (x <= 5 && y >= 2) {
                        z = x + 1
                        w = y - 1
                        counterMovs = 0
                        while (z < 7 && w > 0) {
                            if (arrayTablero[z][w] === casillaEnBlanco || arrayTablero[z][w] === fichaBlanca) break
                            if (arrayTablero[z][w] === fichaNegra) counterMovs++
                            z++
                            w--
                            if (arrayTablero[z][w] === fichaBlanca) break
                        }
                        if (arrayTablero[z][w] === fichaBlanca && counterMovs > 0) {
                            posibleIndice.total += counterMovs
                            //console.log(posibleIndice)
                        }
                    }
                }
                if(posibleIndice.total > 0){
                    arregloPosiblesMovimientos.push(posibleIndice)
                }
            }
            
        }

        arregloPosiblesMovimientos.sort(function(a, b){
            return b.total - a.total
        })

        return (arregloPosiblesMovimientos[0].x+''+arregloPosiblesMovimientos[0].y)

    }

    return ( <> { colocar() } </> )
}

export default Principal
