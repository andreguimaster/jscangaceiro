export function controller(...seletores) {
    const elements = seletores.map(selector => document.querySelector(selector));
    return function(constructor) {
        const constructorOriginal = constructor;
        const constructorNovo = function(){
            const instance = new constructorOriginal(...elements);
            Object.getOwnPropertyNames(constructorOriginal.prototype)
            .forEach(property => {
                if(Reflect.hasMetadata('bindEvent', instance, property)){
                    const metadado = Reflect.getMetadata('bindEvent', instance, property);
                    associaEvento(instance, metadado);
                }
            });
            return instance;
        };
        
        constructorNovo.prototype = constructorOriginal.prototype;
        return constructorNovo;
    }
}

function associaEvento(instance, metadado) {
    const elemento = document.querySelector(metadado.selector);
    if(!elemento){
        throw new Error(`Bind com selector ${metadado.selector} não encontrado!`);
    }
    elemento.addEventListener(metadado.event, event => {
        if(metadado.prevent){
            event.preventDefault();
        }
        instance[metadado.propertyKey](event);
    });
}