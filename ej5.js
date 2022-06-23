
const middleCharacter = (string) => {

    let posicion;
    
    let largo;
    
    if(string % 2 !== 0)
    { posicion = string. length / 2;
    
    largo = 1;
    
    } 
    else {
    
    posicion = string.length / 2 - 1;
    
    largo=2;

    }
    console.log(string, posicion, posicion + largo);
    
    };

    console.log(middleCharacter("hola"));