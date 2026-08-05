import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../../../generated/prisma/client";
import type { ResourceKey } from "../../common/resource-catalog";
import { RESOURCE_KEY } from "../decorators/resource.decorator";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { JwtPayload } from "../types/jwt-payload.type";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const user: JwtPayload | undefined = request.user;
    if (!user) {
      throw new ForbiddenException("You do not have permission to perform this action");
    }
    if (requiredRoles.includes(user.role)) return true;

    // Additive fallback: a user with a CustomRole may be granted access to a resource
    // even when their fixed role isn't in the handler's @Roles() list.
    if (user.customRoleId && user.permissions?.length) {
      const resource = this.reflector.getAllAndOverride<ResourceKey>(RESOURCE_KEY, [
        context.getHandler(),
        context.getClass()
      ]);
      if (resource && user.permissions.includes(resource)) return true;
    }

    throw new ForbiddenException("You do not have permission to perform this action");
  }
}
