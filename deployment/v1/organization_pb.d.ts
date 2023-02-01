// @generated by protoc-gen-es v1.0.0
// @generated from file deployment/v1/organization.proto (package deployment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { GeoPoint } from "../../domain/v1/domain_pb.js";

/**
 * @generated from message deployment.v1.MultilaterationConfig
 */
export declare class MultilaterationConfig extends Message<MultilaterationConfig> {
  /**
   * @generated from field: float lpc_coefficient = 1;
   */
  lpcCoefficient: number;

  constructor(data?: PartialMessage<MultilaterationConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.MultilaterationConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultilaterationConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultilaterationConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultilaterationConfig;

  static equals(a: MultilaterationConfig | PlainMessage<MultilaterationConfig> | undefined, b: MultilaterationConfig | PlainMessage<MultilaterationConfig> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.PointConfig
 */
export declare class PointConfig extends Message<PointConfig> {
  /**
   * @generated from field: int32 rssi_threshold = 2;
   */
  rssiThreshold: number;

  constructor(data?: PartialMessage<PointConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.PointConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PointConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PointConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PointConfig;

  static equals(a: PointConfig | PlainMessage<PointConfig> | undefined, b: PointConfig | PlainMessage<PointConfig> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.Zone
 */
export declare class Zone extends Message<Zone> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * @generated from field: deployment.v1.Zone.Config config = 2;
   */
  config?: Zone_Config;

  /**
   * @generated from field: google.protobuf.Timestamp deleted_at = 3;
   */
  deletedAt?: Timestamp;

  constructor(data?: PartialMessage<Zone>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.Zone";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Zone;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Zone;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Zone;

  static equals(a: Zone | PlainMessage<Zone> | undefined, b: Zone | PlainMessage<Zone> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.Zone.Config
 */
export declare class Zone_Config extends Message<Zone_Config> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string geo_json = 2;
   */
  geoJson: string;

  /**
   * @generated from field: repeated int32 positioning_referents = 3;
   */
  positioningReferents: number[];

  /**
   * @generated from field: int32 deployment_id = 4;
   */
  deploymentId: number;

  /**
   * @generated from field: string description = 5;
   */
  description: string;

  constructor(data?: PartialMessage<Zone_Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.Zone.Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Zone_Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Zone_Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Zone_Config;

  static equals(a: Zone_Config | PlainMessage<Zone_Config> | undefined, b: Zone_Config | PlainMessage<Zone_Config> | undefined): boolean;
}

/**
 * @generated from message deployment.v1.Deployment
 */
export declare class Deployment extends Message<Deployment> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: int32 organization_id = 3;
   */
  organizationId: number;

  /**
   * @generated from field: repeated int32 zones = 4;
   */
  zones: number[];

  /**
   * @generated from field: deployment.v1.Deployment.Type type = 5;
   */
  type: Deployment_Type;

  /**
   * @generated from field: int32 namespace_id = 6;
   */
  namespaceId: number;

  /**
   * @generated from field: string description = 7;
   */
  description: string;

  /**
   * @generated from field: google.protobuf.Timestamp created_date = 10;
   */
  createdDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_modified_date = 11;
   */
  lastModifiedDate?: Timestamp;

  /**
   * @generated from field: string created_by = 12;
   */
  createdBy: string;

  /**
   * @generated from field: string last_modified_by = 13;
   */
  lastModifiedBy: string;

  /**
   * @generated from oneof deployment.v1.Deployment.locator_config
   */
  locatorConfig: {
    /**
     * @generated from field: deployment.v1.MultilaterationConfig multilateration = 8;
     */
    value: MultilaterationConfig;
    case: "multilateration";
  } | {
    /**
     * @generated from field: deployment.v1.PointConfig point = 9;
     */
    value: PointConfig;
    case: "point";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Deployment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.Deployment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deployment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deployment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deployment;

  static equals(a: Deployment | PlainMessage<Deployment> | undefined, b: Deployment | PlainMessage<Deployment> | undefined): boolean;
}

/**
 * @generated from enum deployment.v1.Deployment.Type
 */
export declare enum Deployment_Type {
  /**
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TYPE_POINT = 1;
   */
  POINT = 1,

  /**
   * @generated from enum value: TYPE_MULTILATERATION = 2;
   */
  MULTILATERATION = 2,
}

/**
 * @generated from message deployment.v1.PositioningReferent
 */
export declare class PositioningReferent extends Message<PositioningReferent> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * @generated from field: int64 device_id = 2;
   */
  deviceId: bigint;

  /**
   * @generated from field: deployment.v1.PositioningReferent.DeviceType referent_type = 3;
   */
  referentType: PositioningReferent_DeviceType;

  /**
   * @generated from field: int32 organization_id = 4;
   */
  organizationId: number;

  /**
   * @generated from field: domain.v1.GeoPoint location = 5;
   */
  location?: GeoPoint;

  /**
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * @generated from field: repeated int32 zones = 7;
   */
  zones: number[];

  /**
   * @generated from field: google.protobuf.Timestamp created_date = 8;
   */
  createdDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_modified_date = 9;
   */
  lastModifiedDate?: Timestamp;

  /**
   * @generated from field: string created_by = 10;
   */
  createdBy: string;

  /**
   * @generated from field: string last_modified_by = 11;
   */
  lastModifiedBy: string;

  /**
   * Only set for multilateration deployments
   *
   * @generated from field: optional int32 deployment_id = 12;
   */
  deploymentId?: number;

  constructor(data?: PartialMessage<PositioningReferent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.PositioningReferent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositioningReferent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositioningReferent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositioningReferent;

  static equals(a: PositioningReferent | PlainMessage<PositioningReferent> | undefined, b: PositioningReferent | PlainMessage<PositioningReferent> | undefined): boolean;
}

/**
 * @generated from enum deployment.v1.PositioningReferent.DeviceType
 */
export declare enum PositioningReferent_DeviceType {
  /**
   * @generated from enum value: DEVICE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DEVICE_TYPE_BLE_GATEWAY = 1;
   */
  BLE_GATEWAY = 1,

  /**
   * @generated from enum value: DEVICE_TYPE_BEACON = 2;
   */
  BEACON = 2,

  /**
   * @generated from enum value: DEVICE_TYPE_PATROKLO_AGENT = 3;
   */
  PATROKLO_AGENT = 3,
}

/**
 * @generated from message deployment.v1.Organization
 */
export declare class Organization extends Message<Organization> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * @generated from field: google.protobuf.Timestamp created_date = 2;
   */
  createdDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_modified_date = 3;
   */
  lastModifiedDate?: Timestamp;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: string short_name = 5;
   */
  shortName: string;

  /**
   * @generated from field: int32 namespace_id = 6;
   */
  namespaceId: number;

  /**
   * @generated from field: string website = 7;
   */
  website: string;

  /**
   * @generated from field: repeated int32 deployments = 8;
   */
  deployments: number[];

  /**
   * @generated from field: repeated int32 positioning_referents = 9;
   */
  positioningReferents: number[];

  /**
   * @generated from field: string created_by = 10;
   */
  createdBy: string;

  /**
   * @generated from field: string last_modified_by = 11;
   */
  lastModifiedBy: string;

  constructor(data?: PartialMessage<Organization>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "deployment.v1.Organization";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization;

  static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean;
}

