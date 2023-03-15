// @generated by protoc-gen-es v1.1.1
// @generated from file device/v1/service.proto (package device.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Page, Pagination, Sort } from "../../domain/v1/domain_pb.js";
import type { Device, Firmware, Semver } from "./device_pb.js";

/**
 * Get all devices in specified organization
 *
 * @generated from message device.v1.GetDevicesRequest
 */
export declare class GetDevicesRequest extends Message<GetDevicesRequest> {
  /**
   * @generated from field: optional int64 organization_id = 1;
   */
  organizationId?: bigint;

  /**
   * @generated from field: domain.v1.Page page = 2;
   */
  page?: Page;

  /**
   * @generated from field: optional domain.v1.Sort sort = 3;
   */
  sort?: Sort;

  constructor(data?: PartialMessage<GetDevicesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GetDevicesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDevicesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDevicesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDevicesRequest;

  static equals(a: GetDevicesRequest | PlainMessage<GetDevicesRequest> | undefined, b: GetDevicesRequest | PlainMessage<GetDevicesRequest> | undefined): boolean;
}

/**
 * @generated from message device.v1.GetDevicesResponse
 */
export declare class GetDevicesResponse extends Message<GetDevicesResponse> {
  /**
   * @generated from field: repeated device.v1.Device devices = 1;
   */
  devices: Device[];

  /**
   * @generated from field: domain.v1.Pagination pagination = 2;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<GetDevicesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GetDevicesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDevicesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDevicesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDevicesResponse;

  static equals(a: GetDevicesResponse | PlainMessage<GetDevicesResponse> | undefined, b: GetDevicesResponse | PlainMessage<GetDevicesResponse> | undefined): boolean;
}

/**
 * Get a device by hardware ID
 *
 * @generated from message device.v1.GetDeviceRequest
 */
export declare class GetDeviceRequest extends Message<GetDeviceRequest> {
  /**
   * @generated from field: int64 hardware_id = 1;
   */
  hardwareId: bigint;

  constructor(data?: PartialMessage<GetDeviceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GetDeviceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDeviceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDeviceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDeviceRequest;

  static equals(a: GetDeviceRequest | PlainMessage<GetDeviceRequest> | undefined, b: GetDeviceRequest | PlainMessage<GetDeviceRequest> | undefined): boolean;
}

/**
 * @generated from message device.v1.GetDeviceResponse
 */
export declare class GetDeviceResponse extends Message<GetDeviceResponse> {
  /**
   * @generated from field: device.v1.Device device = 1;
   */
  device?: Device;

  constructor(data?: PartialMessage<GetDeviceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GetDeviceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDeviceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDeviceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDeviceResponse;

  static equals(a: GetDeviceResponse | PlainMessage<GetDeviceResponse> | undefined, b: GetDeviceResponse | PlainMessage<GetDeviceResponse> | undefined): boolean;
}

/**
 * @generated from message device.v1.CreateOneTimeTokenRequest
 */
export declare class CreateOneTimeTokenRequest extends Message<CreateOneTimeTokenRequest> {
  /**
   * @generated from field: google.protobuf.Duration token_duration = 1;
   */
  tokenDuration?: Duration;

  constructor(data?: PartialMessage<CreateOneTimeTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.CreateOneTimeTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOneTimeTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOneTimeTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOneTimeTokenRequest;

  static equals(a: CreateOneTimeTokenRequest | PlainMessage<CreateOneTimeTokenRequest> | undefined, b: CreateOneTimeTokenRequest | PlainMessage<CreateOneTimeTokenRequest> | undefined): boolean;
}

/**
 * @generated from message device.v1.CreateOneTimeTokenResponse
 */
export declare class CreateOneTimeTokenResponse extends Message<CreateOneTimeTokenResponse> {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string token = 2;
   */
  token: string;

  /**
   * @generated from field: google.protobuf.Timestamp expire_at = 3;
   */
  expireAt?: Timestamp;

  constructor(data?: PartialMessage<CreateOneTimeTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.CreateOneTimeTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOneTimeTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOneTimeTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOneTimeTokenResponse;

  static equals(a: CreateOneTimeTokenResponse | PlainMessage<CreateOneTimeTokenResponse> | undefined, b: CreateOneTimeTokenResponse | PlainMessage<CreateOneTimeTokenResponse> | undefined): boolean;
}

/**
 * @generated from message device.v1.UseOneTimeTokenRequest
 */
export declare class UseOneTimeTokenRequest extends Message<UseOneTimeTokenRequest> {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  constructor(data?: PartialMessage<UseOneTimeTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.UseOneTimeTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UseOneTimeTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UseOneTimeTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UseOneTimeTokenRequest;

  static equals(a: UseOneTimeTokenRequest | PlainMessage<UseOneTimeTokenRequest> | undefined, b: UseOneTimeTokenRequest | PlainMessage<UseOneTimeTokenRequest> | undefined): boolean;
}

/**
 * @generated from message device.v1.UseOneTimeTokenResponse
 */
export declare class UseOneTimeTokenResponse extends Message<UseOneTimeTokenResponse> {
  constructor(data?: PartialMessage<UseOneTimeTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.UseOneTimeTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UseOneTimeTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UseOneTimeTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UseOneTimeTokenResponse;

  static equals(a: UseOneTimeTokenResponse | PlainMessage<UseOneTimeTokenResponse> | undefined, b: UseOneTimeTokenResponse | PlainMessage<UseOneTimeTokenResponse> | undefined): boolean;
}

/**
 * @generated from message device.v1.CreateFirmwareRequest
 */
export declare class CreateFirmwareRequest extends Message<CreateFirmwareRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: int32 major = 2;
   */
  major: number;

  /**
   * @generated from field: int32 minor = 3;
   */
  minor: number;

  /**
   * @generated from field: int32 patch = 4;
   */
  patch: number;

  /**
   * @generated from field: string commit_hash = 5;
   */
  commitHash: string;

  /**
   * @generated from field: bytes file = 6;
   */
  file: Uint8Array;

  constructor(data?: PartialMessage<CreateFirmwareRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.CreateFirmwareRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFirmwareRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFirmwareRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFirmwareRequest;

  static equals(a: CreateFirmwareRequest | PlainMessage<CreateFirmwareRequest> | undefined, b: CreateFirmwareRequest | PlainMessage<CreateFirmwareRequest> | undefined): boolean;
}

/**
 * @generated from message device.v1.CreateFirmwareResponse
 */
export declare class CreateFirmwareResponse extends Message<CreateFirmwareResponse> {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  constructor(data?: PartialMessage<CreateFirmwareResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.CreateFirmwareResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFirmwareResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFirmwareResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFirmwareResponse;

  static equals(a: CreateFirmwareResponse | PlainMessage<CreateFirmwareResponse> | undefined, b: CreateFirmwareResponse | PlainMessage<CreateFirmwareResponse> | undefined): boolean;
}

/**
 * @generated from message device.v1.GetFirmwareRequest
 */
export declare class GetFirmwareRequest extends Message<GetFirmwareRequest> {
  /**
   * @generated from oneof device.v1.GetFirmwareRequest.version
   */
  version: {
    /**
     * @generated from field: device.v1.Semver semver = 1;
     */
    value: Semver;
    case: "semver";
  } | {
    /**
     * returns the last patch version of the named version
     *
     * @generated from field: string name = 2;
     */
    value: string;
    case: "name";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GetFirmwareRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GetFirmwareRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFirmwareRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFirmwareRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFirmwareRequest;

  static equals(a: GetFirmwareRequest | PlainMessage<GetFirmwareRequest> | undefined, b: GetFirmwareRequest | PlainMessage<GetFirmwareRequest> | undefined): boolean;
}

/**
 * @generated from message device.v1.GetFirmwareResponse
 */
export declare class GetFirmwareResponse extends Message<GetFirmwareResponse> {
  /**
   * @generated from field: device.v1.Firmware firmware = 1;
   */
  firmware?: Firmware;

  constructor(data?: PartialMessage<GetFirmwareResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GetFirmwareResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFirmwareResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFirmwareResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFirmwareResponse;

  static equals(a: GetFirmwareResponse | PlainMessage<GetFirmwareResponse> | undefined, b: GetFirmwareResponse | PlainMessage<GetFirmwareResponse> | undefined): boolean;
}

