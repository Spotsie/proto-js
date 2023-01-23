// @generated by protoc-gen-es v1.0.0
// @generated from file device/v1/device.proto (package device.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Audit } from "../../domain/v1/domain_pb.js";

/**
 * @generated from enum device.v1.DeviceType
 */
export const DeviceType = proto3.makeEnum(
  "device.v1.DeviceType",
  [
    {no: 0, name: "UNDEFINED"},
    {no: 1, name: "BLE_GATEWAY"},
    {no: 2, name: "BEACON"},
  ],
);

/**
 * @generated from message device.v1.Semver
 */
export const Semver = proto3.makeMessageType(
  "device.v1.Semver",
  () => [
    { no: 1, name: "major", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "minor", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "patch", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message device.v1.Device
 */
export const Device = proto3.makeMessageType(
  "device.v1.Device",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hardware_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_ping", kind: "message", T: Timestamp },
    { no: 5, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "type", kind: "enum", T: proto3.getEnumType(DeviceType) },
    { no: 7, name: "firmver_version", kind: "message", T: Semver },
    { no: 8, name: "audit", kind: "message", T: Audit },
  ],
);

/**
 * @generated from message device.v1.Firmware
 */
export const Firmware = proto3.makeMessageType(
  "device.v1.Firmware",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "semver", kind: "message", T: Semver },
    { no: 4, name: "file", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "commit_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "audit", kind: "message", T: Audit },
  ],
);

/**
 * TODO: fix when needed
 *
 * @generated from message device.v1.Session
 */
export const Session = proto3.makeMessageType(
  "device.v1.Session",
  () => [
    { no: 1, name: "device_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "first_ping_at", kind: "message", T: Timestamp },
    { no: 3, name: "last_ping_at", kind: "message", T: Timestamp },
  ],
);

