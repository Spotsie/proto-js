// @generated by protoc-gen-es v1.2.1
// @generated from file deployment/v1/service.proto (package deployment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Deployment, Deployment_Type, MultilaterationConfig, Organization, PointConfig, PositioningReferent, PositioningReferent_DeviceType, Zone, Zone_Config } from "./organization_pb.js";
import { GeoPoint } from "../../domain/v1/domain_pb.js";

/**
 * @generated from message deployment.v1.GetZonesRequest
 */
export const GetZonesRequest = proto3.makeMessageType(
  "deployment.v1.GetZonesRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetZonesResponse
 */
export const GetZonesResponse = proto3.makeMessageType(
  "deployment.v1.GetZonesResponse",
  () => [
    { no: 1, name: "zones", kind: "message", T: Zone, repeated: true },
  ],
);

/**
 * @generated from message deployment.v1.GetZoneRequest
 */
export const GetZoneRequest = proto3.makeMessageType(
  "deployment.v1.GetZoneRequest",
  () => [
    { no: 1, name: "zone_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetZoneResponse
 */
export const GetZoneResponse = proto3.makeMessageType(
  "deployment.v1.GetZoneResponse",
  () => [
    { no: 1, name: "zone", kind: "message", T: Zone },
  ],
);

/**
 * @generated from message deployment.v1.UpdateDeploymentRequest
 */
export const UpdateDeploymentRequest = proto3.makeMessageType(
  "deployment.v1.UpdateDeploymentRequest",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "deployment_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "deployment_type", kind: "enum", T: proto3.getEnumType(Deployment_Type) },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "multilateration", kind: "message", T: MultilaterationConfig, oneof: "locator_config" },
    { no: 6, name: "point", kind: "message", T: PointConfig, oneof: "locator_config" },
  ],
);

/**
 * @generated from message deployment.v1.UpdateDeploymentResponse
 */
export const UpdateDeploymentResponse = proto3.makeMessageType(
  "deployment.v1.UpdateDeploymentResponse",
  [],
);

/**
 * @generated from message deployment.v1.CreateDeploymentRequest
 */
export const CreateDeploymentRequest = proto3.makeMessageType(
  "deployment.v1.CreateDeploymentRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "deployment_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "deployment_type", kind: "enum", T: proto3.getEnumType(Deployment_Type) },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "multilateration", kind: "message", T: MultilaterationConfig, oneof: "locator_config" },
    { no: 6, name: "point", kind: "message", T: PointConfig, oneof: "locator_config" },
  ],
);

/**
 * @generated from message deployment.v1.CreateDeploymentResponse
 */
export const CreateDeploymentResponse = proto3.makeMessageType(
  "deployment.v1.CreateDeploymentResponse",
  [],
);

/**
 * @generated from message deployment.v1.GetDeploymentsRequest
 */
export const GetDeploymentsRequest = proto3.makeMessageType(
  "deployment.v1.GetDeploymentsRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetDeploymentsResponse
 */
export const GetDeploymentsResponse = proto3.makeMessageType(
  "deployment.v1.GetDeploymentsResponse",
  () => [
    { no: 1, name: "deployments", kind: "message", T: Deployment, repeated: true },
  ],
);

/**
 * @generated from message deployment.v1.GetDeploymentRequest
 */
export const GetDeploymentRequest = proto3.makeMessageType(
  "deployment.v1.GetDeploymentRequest",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetDeploymentResponse
 */
export const GetDeploymentResponse = proto3.makeMessageType(
  "deployment.v1.GetDeploymentResponse",
  () => [
    { no: 1, name: "deployment", kind: "message", T: Deployment },
  ],
);

/**
 * @generated from message deployment.v1.CreateZoneRequest
 */
export const CreateZoneRequest = proto3.makeMessageType(
  "deployment.v1.CreateZoneRequest",
  () => [
    { no: 1, name: "config", kind: "message", T: Zone_Config },
  ],
);

/**
 * @generated from message deployment.v1.CreateZoneResponse
 */
export const CreateZoneResponse = proto3.makeMessageType(
  "deployment.v1.CreateZoneResponse",
  [],
);

/**
 * @generated from message deployment.v1.UpdateZoneRequest
 */
export const UpdateZoneRequest = proto3.makeMessageType(
  "deployment.v1.UpdateZoneRequest",
  () => [
    { no: 1, name: "zone_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "config", kind: "message", T: Zone_Config },
  ],
);

/**
 * @generated from message deployment.v1.UpdateZoneResponse
 */
export const UpdateZoneResponse = proto3.makeMessageType(
  "deployment.v1.UpdateZoneResponse",
  [],
);

/**
 * @generated from message deployment.v1.DeleteZoneRequest
 */
export const DeleteZoneRequest = proto3.makeMessageType(
  "deployment.v1.DeleteZoneRequest",
  () => [
    { no: 1, name: "zone_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.DeleteZoneResponse
 */
export const DeleteZoneResponse = proto3.makeMessageType(
  "deployment.v1.DeleteZoneResponse",
  [],
);

/**
 * @generated from message deployment.v1.AddPositioningReferentRequest
 */
export const AddPositioningReferentRequest = proto3.makeMessageType(
  "deployment.v1.AddPositioningReferentRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "device_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "device_type", kind: "enum", T: proto3.getEnumType(PositioningReferent_DeviceType) },
    { no: 4, name: "location", kind: "message", T: GeoPoint },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message deployment.v1.AddPositioningReferentResponse
 */
export const AddPositioningReferentResponse = proto3.makeMessageType(
  "deployment.v1.AddPositioningReferentResponse",
  [],
);

/**
 * @generated from message deployment.v1.UpdatePositioningReferentRequest
 */
export const UpdatePositioningReferentRequest = proto3.makeMessageType(
  "deployment.v1.UpdatePositioningReferentRequest",
  () => [
    { no: 1, name: "referent_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "location", kind: "message", T: GeoPoint },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message deployment.v1.UpdatePositioningReferentResponse
 */
export const UpdatePositioningReferentResponse = proto3.makeMessageType(
  "deployment.v1.UpdatePositioningReferentResponse",
  [],
);

/**
 * @generated from message deployment.v1.GetPositioningReferentsRequest
 */
export const GetPositioningReferentsRequest = proto3.makeMessageType(
  "deployment.v1.GetPositioningReferentsRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetPositioningReferentsResponse
 */
export const GetPositioningReferentsResponse = proto3.makeMessageType(
  "deployment.v1.GetPositioningReferentsResponse",
  () => [
    { no: 1, name: "positioning_referents", kind: "message", T: PositioningReferent, repeated: true },
  ],
);

/**
 * @generated from message deployment.v1.GetPositioningReferentRequest
 */
export const GetPositioningReferentRequest = proto3.makeMessageType(
  "deployment.v1.GetPositioningReferentRequest",
  () => [
    { no: 1, name: "referent_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetPositioningReferentResponse
 */
export const GetPositioningReferentResponse = proto3.makeMessageType(
  "deployment.v1.GetPositioningReferentResponse",
  () => [
    { no: 1, name: "positioning_referent", kind: "message", T: PositioningReferent },
  ],
);

/**
 * @generated from message deployment.v1.CreateOrganizationRequest
 */
export const CreateOrganizationRequest = proto3.makeMessageType(
  "deployment.v1.CreateOrganizationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "namespace_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "website", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message deployment.v1.CreateOrganizationResponse
 */
export const CreateOrganizationResponse = proto3.makeMessageType(
  "deployment.v1.CreateOrganizationResponse",
  [],
);

/**
 * @generated from message deployment.v1.GetOrganizationRequest
 */
export const GetOrganizationRequest = proto3.makeMessageType(
  "deployment.v1.GetOrganizationRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetOrganizationResponse
 */
export const GetOrganizationResponse = proto3.makeMessageType(
  "deployment.v1.GetOrganizationResponse",
  () => [
    { no: 1, name: "organization", kind: "message", T: Organization },
  ],
);

/**
 * @generated from message deployment.v1.GetOrganizationsRequest
 */
export const GetOrganizationsRequest = proto3.makeMessageType(
  "deployment.v1.GetOrganizationsRequest",
  [],
);

/**
 * @generated from message deployment.v1.GetOrganizationsResponse
 */
export const GetOrganizationsResponse = proto3.makeMessageType(
  "deployment.v1.GetOrganizationsResponse",
  () => [
    { no: 1, name: "organizations", kind: "message", T: Organization, repeated: true },
  ],
);

/**
 * @generated from message deployment.v1.GetDeploymentStateRequest
 */
export const GetDeploymentStateRequest = proto3.makeMessageType(
  "deployment.v1.GetDeploymentStateRequest",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message deployment.v1.GetDeploymentStateResponse
 */
export const GetDeploymentStateResponse = proto3.makeMessageType(
  "deployment.v1.GetDeploymentStateResponse",
  () => [
    { no: 1, name: "state", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "updated", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message deployment.v1.SetDeploymentStateRequest
 */
export const SetDeploymentStateRequest = proto3.makeMessageType(
  "deployment.v1.SetDeploymentStateRequest",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "state", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message deployment.v1.SetDeploymentStateResponse
 */
export const SetDeploymentStateResponse = proto3.makeMessageType(
  "deployment.v1.SetDeploymentStateResponse",
  [],
);

