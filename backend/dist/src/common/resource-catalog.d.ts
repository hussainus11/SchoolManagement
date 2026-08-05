export interface ResourceCatalogItem {
    key: string;
    label: string;
    group: string;
}
export declare const RESOURCE_CATALOG: ResourceCatalogItem[];
export declare const RESOURCE_KEYS: string[];
export type ResourceKey = (typeof RESOURCE_KEYS)[number];
