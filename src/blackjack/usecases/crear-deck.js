import _ from 'underscore'


/**
 * 
 * @param {array<string>} tiposDeCarta  Ejemplo : ['C','D','H','S']
 * @param {array<string>} tiposEspeciales  Ejemplo : ['A','J','Q','K']
 * @returns  {array} retorna deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.legth === 0) {
        throw new Error(' tipoDeCarta es obligatori como un arreglo de string')
    }
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
