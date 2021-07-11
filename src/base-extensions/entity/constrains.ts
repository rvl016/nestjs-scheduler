import { getMetadataArgsStorage } from "typeorm";
import { EntityListenerMetadataArgs } from "typeorm/metadata-args/EntityListenerMetadataArgs";
import { EventListenerTypes } from "typeorm/metadata/types/EventListenerTypes";

/**
 * Calls a method on which this decorator is applied after this entity update.
 */
export function Constrains(): PropertyDecorator {
    return function (object: Object, propertyName: string) {

        getMetadataArgsStorage().entityListeners.push({
            target: object.constructor,
            propertyName: propertyName,
            type: EventListenerTypes.AFTER_UPDATE
        } as EntityListenerMetadataArgs);
    };
}