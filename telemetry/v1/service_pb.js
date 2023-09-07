// @generated by protoc-gen-es v1.3.0
// @generated from file telemetry/v1/service.proto (package telemetry.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Beacon } from "../../domain/v1/domain_pb.js";
import { BatteryLog, Beacon as Beacon$1, ButtonPressLog, MovementLog, TemperatureLog } from "./telemetry_pb.js";

/**
 * common/utility messages
 *
 * @generated from message telemetry.v1.BeaconFilter
 */
export const BeaconFilter = proto3.makeMessageType(
  "telemetry.v1.BeaconFilter",
  () => [
    { no: 1, name: "ibeacon", kind: "message", T: Beacon, oneof: "type" },
    { no: 2, name: "mac_address", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "type" },
    { no: 3, name: "primary_key", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "type" },
  ],
);

/**
 * @generated from message telemetry.v1.GetBeaconLogsRequest
 */
export const GetBeaconLogsRequest = proto3.makeMessageType(
  "telemetry.v1.GetBeaconLogsRequest",
  () => [
    { no: 1, name: "beacons", kind: "message", T: BeaconFilter, repeated: true },
    { no: 2, name: "start", kind: "message", T: Timestamp },
    { no: 3, name: "end", kind: "message", T: Timestamp },
    { no: 4, name: "temperature_logs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "battery_logs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "button_press_logs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "movement_logs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message telemetry.v1.GetBeaconLogsResponse
 */
export const GetBeaconLogsResponse = proto3.makeMessageType(
  "telemetry.v1.GetBeaconLogsResponse",
  () => [
    { no: 1, name: "beacon_logs", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "message", T: GetBeaconLogsResponse_BeaconLogs} },
  ],
);

/**
 * @generated from message telemetry.v1.GetBeaconLogsResponse.BeaconLogs
 */
export const GetBeaconLogsResponse_BeaconLogs = proto3.makeMessageType(
  "telemetry.v1.GetBeaconLogsResponse.BeaconLogs",
  () => [
    { no: 1, name: "beacon", kind: "message", T: Beacon$1 },
    { no: 2, name: "temperature", kind: "message", T: TemperatureLog, repeated: true },
    { no: 3, name: "battery", kind: "message", T: BatteryLog, repeated: true },
    { no: 4, name: "button_press", kind: "message", T: ButtonPressLog, repeated: true },
    { no: 5, name: "movement", kind: "message", T: MovementLog, repeated: true },
  ],
  {localName: "GetBeaconLogsResponse_BeaconLogs"},
);

/**
 * @generated from message telemetry.v1.GetLatestBeaconLogsResponse
 */
export const GetLatestBeaconLogsResponse = proto3.makeMessageType(
  "telemetry.v1.GetLatestBeaconLogsResponse",
  () => [
    { no: 1, name: "beacon_logs", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "message", T: GetLatestBeaconLogsResponse_LatestBeaconLogs} },
  ],
);

/**
 * @generated from message telemetry.v1.GetLatestBeaconLogsResponse.LatestBeaconLogs
 */
export const GetLatestBeaconLogsResponse_LatestBeaconLogs = proto3.makeMessageType(
  "telemetry.v1.GetLatestBeaconLogsResponse.LatestBeaconLogs",
  () => [
    { no: 1, name: "beacon", kind: "message", T: Beacon$1 },
    { no: 2, name: "temperature", kind: "message", T: TemperatureLog, opt: true },
    { no: 3, name: "battery", kind: "message", T: BatteryLog, opt: true },
    { no: 4, name: "button_press", kind: "message", T: ButtonPressLog, opt: true },
    { no: 5, name: "movement", kind: "message", T: MovementLog, opt: true },
  ],
  {localName: "GetLatestBeaconLogsResponse_LatestBeaconLogs"},
);

/**
 * @generated from message telemetry.v1.GetLatestBeaconLogsRequest
 */
export const GetLatestBeaconLogsRequest = proto3.makeMessageType(
  "telemetry.v1.GetLatestBeaconLogsRequest",
  () => [
    { no: 1, name: "beacons", kind: "message", T: BeaconFilter, repeated: true },
  ],
);

