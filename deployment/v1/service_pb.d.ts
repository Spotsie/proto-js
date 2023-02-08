// @generated by protoc-gen-es v1.0.0
// @generated from file deployment/v1/service.proto (package deployment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Deployment, Deployment_Type, MultilaterationConfig, Organization, PointConfig, PositioningReferent, PositioningReferent_DeviceType, Zone, Zone_Config } from "./organization_pb.js";
import type { GeoPoint } from "../../domain/v1/domain_pb.js";

/**
 * @generated from message deployment.v1.GetZonesRequest
 */
export declare class GetZonesRequest extends Message<GetZonesRequest> {
  /**
   * @generated from field: int32 organization_id = 1;
   */
  organizationId: number;

  constructor(data?: PartialMessage<GetZonesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetZonesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetZonesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetZonesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetZonesRequest;

  static equals(a: GetZonesRequest | PlainMessage<GetZonesRequest> | undefined, b: GetZonesRequest | PlainMessage<GetZonesRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetZonesResponse
 */
export declare class GetZonesResponse extends Message<GetZonesResponse> {
  /**
   * @generated from field: repeated deployment.v1.Zone zones = 1;
   */
  zones: Zone[];

  constructor(data?: PartialMessage<GetZonesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetZonesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetZonesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetZonesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetZonesResponse;

  static equals(a: GetZonesResponse | PlainMessage<GetZonesResponse> | undefined, b: GetZonesResponse | PlainMessage<GetZonesResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetZoneRequest
 */
export declare class GetZoneRequest extends Message<GetZoneRequest> {
  /**
   * @generated from field: int32 zone_id = 1;
   */
  zoneId: number;

  constructor(data?: PartialMessage<GetZoneRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetZoneRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetZoneRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetZoneRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetZoneRequest;

  static equals(a: GetZoneRequest | PlainMessage<GetZoneRequest> | undefined, b: GetZoneRequest | PlainMessage<GetZoneRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetZoneResponse
 */
export declare class GetZoneResponse extends Message<GetZoneResponse> {
  /**
   * @generated from field: deployment.v1.Zone zone = 1;
   */
  zone?: Zone;

  constructor(data?: PartialMessage<GetZoneResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetZoneResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetZoneResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetZoneResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetZoneResponse;

  static equals(a: GetZoneResponse | PlainMessage<GetZoneResponse> | undefined, b: GetZoneResponse | PlainMessage<GetZoneResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.UpdateDeploymentRequest
 */
export declare class UpdateDeploymentRequest extends Message<UpdateDeploymentRequest> {
  /**
   * @generated from field: int32 deployment_id = 1;
   */
  deploymentId: number;

  /**
   * @generated from field: string deployment_name = 2;
   */
  deploymentName: string;

  /**
   * @generated from field: deployment.v1.Deployment.Type deployment_type = 3;
   */
  deploymentType: Deployment_Type;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from oneof deployment.v1.UpdateDeploymentRequest.locator_config
   */
  locatorConfig: {
    /**
     * @generated from field: deployment.v1.MultilaterationConfig multilateration = 5;
     */
    value: MultilaterationConfig;
    case: "multilateration";
  } | {
    /**
     * @generated from field: deployment.v1.PointConfig point = 6;
     */
    value: PointConfig;
    case: "point";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<UpdateDeploymentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.UpdateDeploymentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDeploymentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDeploymentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDeploymentRequest;

  static equals(a: UpdateDeploymentRequest | PlainMessage<UpdateDeploymentRequest> | undefined, b: UpdateDeploymentRequest | PlainMessage<UpdateDeploymentRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.UpdateDeploymentResponse
 */
export declare class UpdateDeploymentResponse extends Message<UpdateDeploymentResponse> {
  constructor(data?: PartialMessage<UpdateDeploymentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.UpdateDeploymentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDeploymentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDeploymentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDeploymentResponse;

  static equals(a: UpdateDeploymentResponse | PlainMessage<UpdateDeploymentResponse> | undefined, b: UpdateDeploymentResponse | PlainMessage<UpdateDeploymentResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.CreateDeploymentRequest
 */
export declare class CreateDeploymentRequest extends Message<CreateDeploymentRequest> {
  /**
   * @generated from field: int32 organization_id = 1;
   */
  organizationId: number;

  /**
   * @generated from field: string deployment_name = 2;
   */
  deploymentName: string;

  /**
   * @generated from field: deployment.v1.Deployment.Type deployment_type = 3;
   */
  deploymentType: Deployment_Type;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from oneof deployment.v1.CreateDeploymentRequest.locator_config
   */
  locatorConfig: {
    /**
     * @generated from field: deployment.v1.MultilaterationConfig multilateration = 5;
     */
    value: MultilaterationConfig;
    case: "multilateration";
  } | {
    /**
     * @generated from field: deployment.v1.PointConfig point = 6;
     */
    value: PointConfig;
    case: "point";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CreateDeploymentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.CreateDeploymentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDeploymentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDeploymentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDeploymentRequest;

  static equals(a: CreateDeploymentRequest | PlainMessage<CreateDeploymentRequest> | undefined, b: CreateDeploymentRequest | PlainMessage<CreateDeploymentRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.CreateDeploymentResponse
 */
export declare class CreateDeploymentResponse extends Message<CreateDeploymentResponse> {
  constructor(data?: PartialMessage<CreateDeploymentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.CreateDeploymentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDeploymentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDeploymentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDeploymentResponse;

  static equals(a: CreateDeploymentResponse | PlainMessage<CreateDeploymentResponse> | undefined, b: CreateDeploymentResponse | PlainMessage<CreateDeploymentResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetDeploymentsRequest
 */
export declare class GetDeploymentsRequest extends Message<GetDeploymentsRequest> {
  /**
   * @generated from field: int32 organization_id = 1;
   */
  organizationId: number;

  constructor(data?: PartialMessage<GetDeploymentsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetDeploymentsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDeploymentsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDeploymentsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDeploymentsRequest;

  static equals(a: GetDeploymentsRequest | PlainMessage<GetDeploymentsRequest> | undefined, b: GetDeploymentsRequest | PlainMessage<GetDeploymentsRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetDeploymentsResponse
 */
export declare class GetDeploymentsResponse extends Message<GetDeploymentsResponse> {
  /**
   * @generated from field: repeated deployment.v1.Deployment deployments = 1;
   */
  deployments: Deployment[];

  constructor(data?: PartialMessage<GetDeploymentsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetDeploymentsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDeploymentsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDeploymentsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDeploymentsResponse;

  static equals(a: GetDeploymentsResponse | PlainMessage<GetDeploymentsResponse> | undefined, b: GetDeploymentsResponse | PlainMessage<GetDeploymentsResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetDeploymentRequest
 */
export declare class GetDeploymentRequest extends Message<GetDeploymentRequest> {
  /**
   * @generated from field: int32 deployment_id = 1;
   */
  deploymentId: number;

  constructor(data?: PartialMessage<GetDeploymentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetDeploymentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDeploymentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDeploymentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDeploymentRequest;

  static equals(a: GetDeploymentRequest | PlainMessage<GetDeploymentRequest> | undefined, b: GetDeploymentRequest | PlainMessage<GetDeploymentRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetDeploymentResponse
 */
export declare class GetDeploymentResponse extends Message<GetDeploymentResponse> {
  /**
   * @generated from field: deployment.v1.Deployment deployment = 1;
   */
  deployment?: Deployment;

  constructor(data?: PartialMessage<GetDeploymentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetDeploymentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDeploymentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDeploymentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDeploymentResponse;

  static equals(a: GetDeploymentResponse | PlainMessage<GetDeploymentResponse> | undefined, b: GetDeploymentResponse | PlainMessage<GetDeploymentResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.CreateZoneRequest
 */
export declare class CreateZoneRequest extends Message<CreateZoneRequest> {
  /**
   * @generated from field: deployment.v1.Zone.Config config = 1;
   */
  config?: Zone_Config;

  constructor(data?: PartialMessage<CreateZoneRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.CreateZoneRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateZoneRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateZoneRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateZoneRequest;

  static equals(a: CreateZoneRequest | PlainMessage<CreateZoneRequest> | undefined, b: CreateZoneRequest | PlainMessage<CreateZoneRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.CreateZoneResponse
 */
export declare class CreateZoneResponse extends Message<CreateZoneResponse> {
  constructor(data?: PartialMessage<CreateZoneResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.CreateZoneResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateZoneResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateZoneResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateZoneResponse;

  static equals(a: CreateZoneResponse | PlainMessage<CreateZoneResponse> | undefined, b: CreateZoneResponse | PlainMessage<CreateZoneResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.UpdateZoneRequest
 */
export declare class UpdateZoneRequest extends Message<UpdateZoneRequest> {
  /**
   * @generated from field: int32 zone_id = 1;
   */
  zoneId: number;

  /**
   * @generated from field: deployment.v1.Zone.Config config = 2;
   */
  config?: Zone_Config;

  constructor(data?: PartialMessage<UpdateZoneRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.UpdateZoneRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateZoneRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateZoneRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateZoneRequest;

  static equals(a: UpdateZoneRequest | PlainMessage<UpdateZoneRequest> | undefined, b: UpdateZoneRequest | PlainMessage<UpdateZoneRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.UpdateZoneResponse
 */
export declare class UpdateZoneResponse extends Message<UpdateZoneResponse> {
  constructor(data?: PartialMessage<UpdateZoneResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.UpdateZoneResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateZoneResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateZoneResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateZoneResponse;

  static equals(a: UpdateZoneResponse | PlainMessage<UpdateZoneResponse> | undefined, b: UpdateZoneResponse | PlainMessage<UpdateZoneResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.DeleteZoneRequest
 */
export declare class DeleteZoneRequest extends Message<DeleteZoneRequest> {
  /**
   * @generated from field: int32 zone_id = 1;
   */
  zoneId: number;

  constructor(data?: PartialMessage<DeleteZoneRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.DeleteZoneRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteZoneRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteZoneRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteZoneRequest;

  static equals(a: DeleteZoneRequest | PlainMessage<DeleteZoneRequest> | undefined, b: DeleteZoneRequest | PlainMessage<DeleteZoneRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.DeleteZoneResponse
 */
export declare class DeleteZoneResponse extends Message<DeleteZoneResponse> {
  constructor(data?: PartialMessage<DeleteZoneResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.DeleteZoneResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteZoneResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteZoneResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteZoneResponse;

  static equals(a: DeleteZoneResponse | PlainMessage<DeleteZoneResponse> | undefined, b: DeleteZoneResponse | PlainMessage<DeleteZoneResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.AddPositioningReferentRequest
 */
export declare class AddPositioningReferentRequest extends Message<AddPositioningReferentRequest> {
  /**
   * @generated from field: int32 organization_id = 1;
   */
  organizationId: number;

  /**
   * @generated from field: int64 device_id = 2;
   */
  deviceId: bigint;

  /**
   * @generated from field: deployment.v1.PositioningReferent.DeviceType device_type = 3;
   */
  deviceType: PositioningReferent_DeviceType;

  /**
   * @generated from field: domain.v1.GeoPoint location = 4;
   */
  location?: GeoPoint;

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * Only for multilateration deployments
   *
   * @generated from field: optional int32 deployment_id = 6;
   */
  deploymentId?: number;

  constructor(data?: PartialMessage<AddPositioningReferentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.AddPositioningReferentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddPositioningReferentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddPositioningReferentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddPositioningReferentRequest;

  static equals(a: AddPositioningReferentRequest | PlainMessage<AddPositioningReferentRequest> | undefined, b: AddPositioningReferentRequest | PlainMessage<AddPositioningReferentRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.AddPositioningReferentResponse
 */
export declare class AddPositioningReferentResponse extends Message<AddPositioningReferentResponse> {
  constructor(data?: PartialMessage<AddPositioningReferentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.AddPositioningReferentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddPositioningReferentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddPositioningReferentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddPositioningReferentResponse;

  static equals(a: AddPositioningReferentResponse | PlainMessage<AddPositioningReferentResponse> | undefined, b: AddPositioningReferentResponse | PlainMessage<AddPositioningReferentResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.UpdatePositioningReferentRequest
 */
export declare class UpdatePositioningReferentRequest extends Message<UpdatePositioningReferentRequest> {
  /**
   * @generated from field: int32 referent_id = 1;
   */
  referentId: number;

  /**
   * @generated from field: int32 organization_id = 2;
   */
  organizationId: number;

  /**
   * @generated from field: domain.v1.GeoPoint location = 4;
   */
  location?: GeoPoint;

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * Only for multilateration deployments
   *
   * @generated from field: optional int32 deployment_id = 6;
   */
  deploymentId?: number;

  constructor(data?: PartialMessage<UpdatePositioningReferentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.UpdatePositioningReferentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePositioningReferentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePositioningReferentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePositioningReferentRequest;

  static equals(a: UpdatePositioningReferentRequest | PlainMessage<UpdatePositioningReferentRequest> | undefined, b: UpdatePositioningReferentRequest | PlainMessage<UpdatePositioningReferentRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.UpdatePositioningReferentResponse
 */
export declare class UpdatePositioningReferentResponse extends Message<UpdatePositioningReferentResponse> {
  constructor(data?: PartialMessage<UpdatePositioningReferentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.UpdatePositioningReferentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePositioningReferentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePositioningReferentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePositioningReferentResponse;

  static equals(a: UpdatePositioningReferentResponse | PlainMessage<UpdatePositioningReferentResponse> | undefined, b: UpdatePositioningReferentResponse | PlainMessage<UpdatePositioningReferentResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetPositioningReferentsRequest
 */
export declare class GetPositioningReferentsRequest extends Message<GetPositioningReferentsRequest> {
  /**
   * @generated from field: int32 organization_id = 1;
   */
  organizationId: number;

  constructor(data?: PartialMessage<GetPositioningReferentsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetPositioningReferentsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPositioningReferentsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPositioningReferentsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPositioningReferentsRequest;

  static equals(a: GetPositioningReferentsRequest | PlainMessage<GetPositioningReferentsRequest> | undefined, b: GetPositioningReferentsRequest | PlainMessage<GetPositioningReferentsRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetPositioningReferentsResponse
 */
export declare class GetPositioningReferentsResponse extends Message<GetPositioningReferentsResponse> {
  /**
   * @generated from field: repeated deployment.v1.PositioningReferent positioning_referents = 1;
   */
  positioningReferents: PositioningReferent[];

  constructor(data?: PartialMessage<GetPositioningReferentsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetPositioningReferentsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPositioningReferentsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPositioningReferentsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPositioningReferentsResponse;

  static equals(a: GetPositioningReferentsResponse | PlainMessage<GetPositioningReferentsResponse> | undefined, b: GetPositioningReferentsResponse | PlainMessage<GetPositioningReferentsResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetPositioningReferentRequest
 */
export declare class GetPositioningReferentRequest extends Message<GetPositioningReferentRequest> {
  /**
   * @generated from field: int32 referent_id = 1;
   */
  referentId: number;

  constructor(data?: PartialMessage<GetPositioningReferentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetPositioningReferentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPositioningReferentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPositioningReferentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPositioningReferentRequest;

  static equals(a: GetPositioningReferentRequest | PlainMessage<GetPositioningReferentRequest> | undefined, b: GetPositioningReferentRequest | PlainMessage<GetPositioningReferentRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetPositioningReferentResponse
 */
export declare class GetPositioningReferentResponse extends Message<GetPositioningReferentResponse> {
  /**
   * @generated from field: deployment.v1.PositioningReferent positioning_referent = 1;
   */
  positioningReferent?: PositioningReferent;

  constructor(data?: PartialMessage<GetPositioningReferentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetPositioningReferentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPositioningReferentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPositioningReferentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPositioningReferentResponse;

  static equals(a: GetPositioningReferentResponse | PlainMessage<GetPositioningReferentResponse> | undefined, b: GetPositioningReferentResponse | PlainMessage<GetPositioningReferentResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.CreateOrganizationRequest
 */
export declare class CreateOrganizationRequest extends Message<CreateOrganizationRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string code = 2;
   */
  code: string;

  /**
   * @generated from field: int32 namespace_id = 3;
   */
  namespaceId: number;

  /**
   * @generated from field: string website = 4;
   */
  website: string;

  constructor(data?: PartialMessage<CreateOrganizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.CreateOrganizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;

  static equals(a: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined, b: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.CreateOrganizationResponse
 */
export declare class CreateOrganizationResponse extends Message<CreateOrganizationResponse> {
  constructor(data?: PartialMessage<CreateOrganizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.CreateOrganizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;

  static equals(a: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined, b: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetOrganizationRequest
 */
export declare class GetOrganizationRequest extends Message<GetOrganizationRequest> {
  /**
   * @generated from field: int32 organization_id = 1;
   */
  organizationId: number;

  constructor(data?: PartialMessage<GetOrganizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetOrganizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationRequest;

  static equals(a: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined, b: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetOrganizationResponse
 */
export declare class GetOrganizationResponse extends Message<GetOrganizationResponse> {
  /**
   * @generated from field: deployment.v1.Organization organization = 1;
   */
  organization?: Organization;

  constructor(data?: PartialMessage<GetOrganizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetOrganizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationResponse;

  static equals(a: GetOrganizationResponse | PlainMessage<GetOrganizationResponse> | undefined, b: GetOrganizationResponse | PlainMessage<GetOrganizationResponse> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetOrganizationsRequest
 */
export declare class GetOrganizationsRequest extends Message<GetOrganizationsRequest> {
  constructor(data?: PartialMessage<GetOrganizationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetOrganizationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationsRequest;

  static equals(a: GetOrganizationsRequest | PlainMessage<GetOrganizationsRequest> | undefined, b: GetOrganizationsRequest | PlainMessage<GetOrganizationsRequest> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.GetOrganizationsResponse
 */
export declare class GetOrganizationsResponse extends Message<GetOrganizationsResponse> {
  /**
   * @generated from field: repeated deployment.v1.Organization organizations = 1;
   */
  organizations: Organization[];

  constructor(data?: PartialMessage<GetOrganizationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.GetOrganizationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationsResponse;

  static equals(a: GetOrganizationsResponse | PlainMessage<GetOrganizationsResponse> | undefined, b: GetOrganizationsResponse | PlainMessage<GetOrganizationsResponse> | undefined): boolean;
}

