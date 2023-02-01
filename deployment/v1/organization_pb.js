// @generated by protoc-gen-es v1.0.0
// @generated from file deployment/v1/organization.proto (package deployment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { GeoPoint } from "../../domain/v1/domain_pb.js";

/**
 * @generated from message deployment.v1.MultilaterationConfig
 */
export const MultilaterationConfig = proto3.makeMessageType(
  "deployment.v1.MultilaterationConfig",
  () => [
    { no: 1, name: "lpc_coefficient", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * @generated from message deployment.v1.PointConfig
 */
export const PointConfig = proto3.makeMessageType(
  "deployment.v1.PointConfig",
  () => [
    { no: 2, name: "rssi_threshold", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.Zone
 */
export const Zone = proto3.makeMessageType(
  "deployment.v1.Zone",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "config", kind: "message", T: Zone_Config },
    { no: 3, name: "deleted_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message deployment.v1.Zone.Config
 */
export const Zone_Config = proto3.makeMessageType(
  "deployment.v1.Zone.Config",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "geo_json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "positioning_referents", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 4, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Zone_Config"},
);

/**
 * @generated from message deployment.v1.Deployment
 */
export const Deployment = proto3.makeMessageType(
  "deployment.v1.Deployment",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "zones", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 5, name: "type", kind: "enum", T: proto3.getEnumType(Deployment_Type) },
    { no: 6, name: "namespace_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "created_date", kind: "message", T: Timestamp },
    { no: 11, name: "last_modified_date", kind: "message", T: Timestamp },
    { no: 12, name: "created_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "last_modified_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "multilateration", kind: "message", T: MultilaterationConfig, oneof: "locator_config" },
    { no: 9, name: "point", kind: "message", T: PointConfig, oneof: "locator_config" },
  ],
);

/**
 * @generated from enum deployment.v1.Deployment.Type
 */
export const Deployment_Type = proto3.makeEnum(
  "deployment.v1.Deployment.Type",
  [
    {no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "TYPE_POINT", localName: "POINT"},
    {no: 2, name: "TYPE_MULTILATERATION", localName: "MULTILATERATION"},
  ],
);

/**
 * @generated from message deployment.v1.PositioningReferent
 */
export const PositioningReferent = proto3.makeMessageType(
  "deployment.v1.PositioningReferent",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "device_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "referent_type", kind: "enum", T: proto3.getEnumType(PositioningReferent_DeviceType) },
    { no: 4, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "location", kind: "message", T: GeoPoint },
    { no: 6, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "zones", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 8, name: "created_date", kind: "message", T: Timestamp },
    { no: 9, name: "last_modified_date", kind: "message", T: Timestamp },
    { no: 10, name: "created_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "last_modified_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from enum deployment.v1.PositioningReferent.DeviceType
 */
export const PositioningReferent_DeviceType = proto3.makeEnum(
  "deployment.v1.PositioningReferent.DeviceType",
  [
    {no: 0, name: "DEVICE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "DEVICE_TYPE_BLE_GATEWAY", localName: "BLE_GATEWAY"},
    {no: 2, name: "DEVICE_TYPE_BEACON", localName: "BEACON"},
    {no: 3, name: "DEVICE_TYPE_PATROKLO_AGENT", localName: "PATROKLO_AGENT"},
  ],
);

/**
 * @generated from message deployment.v1.Organization
 */
export const Organization = proto3.makeMessageType(
  "deployment.v1.Organization",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "created_date", kind: "message", T: Timestamp },
    { no: 3, name: "last_modified_date", kind: "message", T: Timestamp },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "short_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "namespace_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "website", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "deployments", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 9, name: "positioning_referents", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 10, name: "created_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "last_modified_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

