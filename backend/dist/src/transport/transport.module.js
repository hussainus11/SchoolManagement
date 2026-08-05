"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportModule = void 0;
const common_1 = require("@nestjs/common");
const route_controller_1 = require("./route.controller");
const route_service_1 = require("./route.service");
const student_transport_controller_1 = require("./student-transport.controller");
const student_transport_service_1 = require("./student-transport.service");
const vehicle_controller_1 = require("./vehicle.controller");
const vehicle_service_1 = require("./vehicle.service");
let TransportModule = class TransportModule {
};
exports.TransportModule = TransportModule;
exports.TransportModule = TransportModule = __decorate([
    (0, common_1.Module)({
        controllers: [vehicle_controller_1.VehicleController, route_controller_1.RouteController, student_transport_controller_1.StudentTransportController],
        providers: [vehicle_service_1.VehicleService, route_service_1.RouteService, student_transport_service_1.StudentTransportService]
    })
], TransportModule);
//# sourceMappingURL=transport.module.js.map