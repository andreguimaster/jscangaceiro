import { obrigatorio } from '../../util';

export function bindEvent(
    event = obrigatorio('event'),
    selector = obrigatorio('selector'),
    prevent = true
){
    return function(target, propertyKey, descriptor) {
        const atributosMetaData = { event, selector, prevent, propertyKey };
        Reflect.defineMetadata(
            'bindEvent',
            atributosMetaData,
            Object.getPrototypeOf(target),
            propertyKey
        );
        return descriptor;
    }
}