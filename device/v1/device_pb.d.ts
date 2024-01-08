// @generated by protoc-gen-es v1.3.1
// @generated from file device/v1/device.proto (package device.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Audit } from "../../domain/v1/domain_pb.js";

/**
 * @generated from enum device.v1.DeviceType
 */
export declare enum DeviceType {
  /**
   * @generated from enum value: UNDEFINED = 0;
   */
  UNDEFINED = 0,

  /**
   * @generated from enum value: BLE_GATEWAY = 1;
   */
  BLE_GATEWAY = 1,

  /**
   * @generated from enum value: BEACON = 2;
   */
  BEACON = 2,
}

/**
 * @generated from message device.v1.Semver
 */
export declare class Semver extends Message<Semver> {
  /**
   * @generated from field: int32 major = 1;
   */
  major: number;

  /**
   * @generated from field: int32 minor = 2;
   */
  minor: number;

  /**
   * @generated from field: int32 patch = 3;
   */
  patch: number;

  constructor(data?: PartialMessage<Semver>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.Semver";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Semver;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Semver;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Semver;

  static equals(a: Semver | PlainMessage<Semver> | undefined, b: Semver | PlainMessage<Semver> | undefined): boolean;
}

/**
 * @generated from message device.v1.Device
 */
export declare class Device extends Message<Device> {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: int64 hardware_id = 2;
   */
  hardwareId: bigint;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: google.protobuf.Timestamp last_ping = 4;
   */
  lastPing?: Timestamp;

  /**
   * @generated from field: string metadata = 5;
   */
  metadata: string;

  /**
   * @generated from field: device.v1.DeviceType type = 6;
   */
  type: DeviceType;

  /**
   * @generated from field: device.v1.Semver firmver_version = 7;
   */
  firmverVersion?: Semver;

  /**
   * @generated from field: domain.v1.Audit audit = 8;
   */
  audit?: Audit;

  constructor(data?: PartialMessage<Device>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.Device";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Device;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Device;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Device;

  static equals(a: Device | PlainMessage<Device> | undefined, b: Device | PlainMessage<Device> | undefined): boolean;
}

/**
 * @generated from message device.v1.Firmware
 */
export declare class Firmware extends Message<Firmware> {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: device.v1.Semver semver = 3;
   */
  semver?: Semver;

  /**
   * @generated from field: bytes file = 4;
   */
  file: Uint8Array;

  /**
   * @generated from field: string commit_hash = 5;
   */
  commitHash: string;

  /**
   * @generated from field: domain.v1.Audit audit = 6;
   */
  audit?: Audit;

  constructor(data?: PartialMessage<Firmware>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.Firmware";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Firmware;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Firmware;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Firmware;

  static equals(a: Firmware | PlainMessage<Firmware> | undefined, b: Firmware | PlainMessage<Firmware> | undefined): boolean;
}

/**
 * TODO: fix when needed
 *
 * @generated from message device.v1.Session
 */
export declare class Session extends Message<Session> {
  /**
   * @generated from field: int64 device_id = 1;
   */
  deviceId: bigint;

  /**
   * @generated from field: google.protobuf.Timestamp first_ping_at = 2;
   */
  firstPingAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_ping_at = 3;
   */
  lastPingAt?: Timestamp;

  constructor(data?: PartialMessage<Session>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.Session";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Session;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Session;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Session;

  static equals(a: Session | PlainMessage<Session> | undefined, b: Session | PlainMessage<Session> | undefined): boolean;
}

/**
 * @generated from message device.v1.BeaconTemperatureData
 */
export declare class BeaconTemperatureData extends Message<BeaconTemperatureData> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * celsius
   *
   * @generated from field: int32 temperature = 2;
   */
  temperature: number;

  constructor(data?: PartialMessage<BeaconTemperatureData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.BeaconTemperatureData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconTemperatureData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconTemperatureData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconTemperatureData;

  static equals(a: BeaconTemperatureData | PlainMessage<BeaconTemperatureData> | undefined, b: BeaconTemperatureData | PlainMessage<BeaconTemperatureData> | undefined): boolean;
}

/**
 * @generated from message device.v1.BeaconVoltageData
 */
export declare class BeaconVoltageData extends Message<BeaconVoltageData> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * millivolts
   *
   * @generated from field: int32 voltage = 2;
   */
  voltage: number;

  constructor(data?: PartialMessage<BeaconVoltageData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.BeaconVoltageData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconVoltageData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconVoltageData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconVoltageData;

  static equals(a: BeaconVoltageData | PlainMessage<BeaconVoltageData> | undefined, b: BeaconVoltageData | PlainMessage<BeaconVoltageData> | undefined): boolean;
}

