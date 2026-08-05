import { SetMetadata } from "@nestjs/common";
import type { ResourceKey } from "../../common/resource-catalog";

export const RESOURCE_KEY = "resource";

/**
 * Tags a controller/handler with a permission-catalog resource key. When the caller's fixed
 * @Roles() list doesn't grant access, RolesGuard falls back to checking whether the caller's
 * CustomRole was explicitly granted this resource.
 */
export const Resource = (resource: ResourceKey) => SetMetadata(RESOURCE_KEY, resource);
