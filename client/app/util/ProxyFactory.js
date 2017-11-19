class ProxyFactory {

    static create(objeto, props, armadilha) {
        return new Proxy(objeto, {

            get(target, prop, receiver) {
               if (ProxyFactory.EhFuncao(target[prop]) && props.includes(prop)) {
                   return function(){
                     console.log(`${prop} disparou a armadilha`);
                     let retorno = target[prop].apply(target, arguments);
                     armadilha(target);
                     return retorno;
                   };
               } else {
                   return target[prop];
               }
            },
            set(target, prop, value, receiver) {
                const updated = Reflect.set(target, prop, value);
                if(props.includes(prop)){
                    console.log(`${prop} disparou a armadilha`);
                    armadilha(target);
                }
                return updated;
            }
        });
    }

    static EhFuncao(fn){
        return typeof(fn) == typeof(Function);
    }
}