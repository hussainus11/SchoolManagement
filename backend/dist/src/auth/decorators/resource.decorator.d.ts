import type { ResourceKey } from "../../common/resource-catalog";
export declare const RESOURCE_KEY = "resource";
export declare const Resource: (resource: ResourceKey) => import("@nestjs/common").CustomDecorator<string>;
