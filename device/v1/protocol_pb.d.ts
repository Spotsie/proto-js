// @generated by protoc-gen-es v1.3.0
// @generated from file device/v1/protocol.proto (package device.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message as Message$1, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum device.v1.ClientType
 */
export declare enum ClientType {
  /**
   * @generated from enum value: CLIENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CLIENT_TYPE_GATEWAY = 1;
   */
  GATEWAY = 1,
}

/**
 * @generated from message device.v1.GatewayFeature
 */
export declare class GatewayFeature extends Message$1<GatewayFeature> {
  /**
   * @generated from oneof device.v1.GatewayFeature.config
   */
  config: {
    /**
     * @generated from field: device.v1.GatewayFeature.Mqtt mqtt = 1;
     */
    value: GatewayFeature_Mqtt;
    case: "mqtt";
  } | {
    /**
     * @generated from field: device.v1.GatewayFeature.Wifi wifi = 2;
     */
    value: GatewayFeature_Wifi;
    case: "wifi";
  } | {
    /**
     * @generated from field: device.v1.GatewayFeature.Sntp sntp = 3;
     */
    value: GatewayFeature_Sntp;
    case: "sntp";
  } | {
    /**
     * @generated from field: device.v1.GatewayFeature.Log log = 4;
     */
    value: GatewayFeature_Log;
    case: "log";
  } | {
    /**
     * @generated from field: device.v1.GatewayFeature.Ota ota = 5;
     */
    value: GatewayFeature_Ota;
    case: "ota";
  } | {
    /**
     * @generated from field: device.v1.GatewayFeature.KeepAlive keep_alive = 6;
     */
    value: GatewayFeature_KeepAlive;
    case: "keepAlive";
  } | {
    /**
     * @generated from field: device.v1.GatewayFeature.Ble ble = 7;
     */
    value: GatewayFeature_Ble;
    case: "ble";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GatewayFeature>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature;

  static equals(a: GatewayFeature | PlainMessage<GatewayFeature> | undefined, b: GatewayFeature | PlainMessage<GatewayFeature> | undefined): boolean;
}

/**
 * @generated from message device.v1.GatewayFeature.Mqtt
 */
export declare class GatewayFeature_Mqtt extends Message$1<GatewayFeature_Mqtt> {
  /**
   * @generated from field: string uri = 1;
   */
  uri: string;

  /**
   * @generated from field: string port = 2;
   */
  port: string;

  /**
   * @generated from field: string username = 3;
   */
  username: string;

  /**
   * @generated from field: string password = 4;
   */
  password: string;

  constructor(data?: PartialMessage<GatewayFeature_Mqtt>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature.Mqtt";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature_Mqtt;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature_Mqtt;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature_Mqtt;

  static equals(a: GatewayFeature_Mqtt | PlainMessage<GatewayFeature_Mqtt> | undefined, b: GatewayFeature_Mqtt | PlainMessage<GatewayFeature_Mqtt> | undefined): boolean;
}

/**
 * @generated from message device.v1.GatewayFeature.Wifi
 */
export declare class GatewayFeature_Wifi extends Message$1<GatewayFeature_Wifi> {
  /**
   * @generated from field: string ssid = 10;
   */
  ssid: string;

  /**
   * @generated from field: string password = 11;
   */
  password: string;

  /**
   * @generated from field: uint32 max_retry = 12;
   */
  maxRetry: number;

  constructor(data?: PartialMessage<GatewayFeature_Wifi>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature.Wifi";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature_Wifi;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature_Wifi;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature_Wifi;

  static equals(a: GatewayFeature_Wifi | PlainMessage<GatewayFeature_Wifi> | undefined, b: GatewayFeature_Wifi | PlainMessage<GatewayFeature_Wifi> | undefined): boolean;
}

/**
 * @generated from message device.v1.GatewayFeature.Sntp
 */
export declare class GatewayFeature_Sntp extends Message$1<GatewayFeature_Sntp> {
  /**
   * @generated from field: string server_url = 1;
   */
  serverUrl: string;

  constructor(data?: PartialMessage<GatewayFeature_Sntp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature.Sntp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature_Sntp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature_Sntp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature_Sntp;

  static equals(a: GatewayFeature_Sntp | PlainMessage<GatewayFeature_Sntp> | undefined, b: GatewayFeature_Sntp | PlainMessage<GatewayFeature_Sntp> | undefined): boolean;
}

/**
 * @generated from message device.v1.GatewayFeature.Log
 */
export declare class GatewayFeature_Log extends Message$1<GatewayFeature_Log> {
  /**
   * @generated from field: device.v1.GatewayFeature.Log.Level level = 1;
   */
  level: GatewayFeature_Log_Level;

  /**
   * @generated from field: string udp_host = 2;
   */
  udpHost: string;

  /**
   * @generated from field: string udp_port = 3;
   */
  udpPort: string;

  /**
   * @generated from field: bool udp_enable = 4;
   */
  udpEnable: boolean;

  constructor(data?: PartialMessage<GatewayFeature_Log>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature.Log";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature_Log;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature_Log;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature_Log;

  static equals(a: GatewayFeature_Log | PlainMessage<GatewayFeature_Log> | undefined, b: GatewayFeature_Log | PlainMessage<GatewayFeature_Log> | undefined): boolean;
}

/**
 * @generated from enum device.v1.GatewayFeature.Log.Level
 */
export declare enum GatewayFeature_Log_Level {
  /**
   * @generated from enum value: LEVEL_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: LEVEL_ERROR = 1;
   */
  ERROR = 1,

  /**
   * @generated from enum value: LEVEL_INFO = 2;
   */
  INFO = 2,

  /**
   * @generated from enum value: LEVEL_DEBUG = 3;
   */
  DEBUG = 3,
}

/**
 * @generated from message device.v1.GatewayFeature.Ota
 */
export declare class GatewayFeature_Ota extends Message$1<GatewayFeature_Ota> {
  /**
   * Milliseconds
   *
   * @generated from field: uint32 timeout = 1;
   */
  timeout: number;

  /**
   * @generated from field: string url = 2;
   */
  url: string;

  constructor(data?: PartialMessage<GatewayFeature_Ota>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature.Ota";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature_Ota;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature_Ota;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature_Ota;

  static equals(a: GatewayFeature_Ota | PlainMessage<GatewayFeature_Ota> | undefined, b: GatewayFeature_Ota | PlainMessage<GatewayFeature_Ota> | undefined): boolean;
}

/**
 * @generated from message device.v1.GatewayFeature.KeepAlive
 */
export declare class GatewayFeature_KeepAlive extends Message$1<GatewayFeature_KeepAlive> {
  /**
   * If no backend messages are received for specified duration, connection is marked as timed out.
   * Milliseconds
   *
   * @generated from field: uint32 timeout = 1;
   */
  timeout: number;

  /**
   * @generated from field: device.v1.GatewayFeature.KeepAlive.OnTimeout on_timeout = 2;
   */
  onTimeout: GatewayFeature_KeepAlive_OnTimeout;

  constructor(data?: PartialMessage<GatewayFeature_KeepAlive>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature.KeepAlive";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature_KeepAlive;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature_KeepAlive;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature_KeepAlive;

  static equals(a: GatewayFeature_KeepAlive | PlainMessage<GatewayFeature_KeepAlive> | undefined, b: GatewayFeature_KeepAlive | PlainMessage<GatewayFeature_KeepAlive> | undefined): boolean;
}

/**
 * @generated from enum device.v1.GatewayFeature.KeepAlive.OnTimeout
 */
export declare enum GatewayFeature_KeepAlive_OnTimeout {
  /**
   * @generated from enum value: ON_TIMEOUT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ON_TIMEOUT_RESTART = 1;
   */
  RESTART = 1,

  /**
   * @generated from enum value: ON_TIMEOUT_IGNORE = 2;
   */
  IGNORE = 2,
}

/**
 * @generated from message device.v1.GatewayFeature.Ble
 */
export declare class GatewayFeature_Ble extends Message$1<GatewayFeature_Ble> {
  /**
   * @generated from field: uint32 scan_duration = 1;
   */
  scanDuration: number;

  /**
   * @generated from field: uint32 scan_interval = 2;
   */
  scanInterval: number;

  /**
   * @generated from field: uint32 scan_window = 3;
   */
  scanWindow: number;

  constructor(data?: PartialMessage<GatewayFeature_Ble>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.GatewayFeature.Ble";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayFeature_Ble;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayFeature_Ble;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayFeature_Ble;

  static equals(a: GatewayFeature_Ble | PlainMessage<GatewayFeature_Ble> | undefined, b: GatewayFeature_Ble | PlainMessage<GatewayFeature_Ble> | undefined): boolean;
}

/**
 * CLIENT ---> BACKEND
 *
 * @generated from message device.v1.ClientMessage
 */
export declare class ClientMessage extends Message$1<ClientMessage> {
  /**
   * @generated from field: device.v1.ClientType client_type = 1;
   */
  clientType: ClientType;

  /**
   * @generated from field: uint64 device_id = 2;
   */
  deviceId: bigint;

  /**
   * @generated from oneof device.v1.ClientMessage.payload
   */
  payload: {
    /**
     * @generated from field: device.v1.ClientMessage.Discovery discovery = 10;
     */
    value: ClientMessage_Discovery;
    case: "discovery";
  } | {
    /**
     * @generated from field: device.v1.ClientMessage.BleScan ble_scan = 11;
     */
    value: ClientMessage_BleScan;
    case: "bleScan";
  } | {
    /**
     * @generated from field: device.v1.ClientMessage.Status status = 12;
     */
    value: ClientMessage_Status;
    case: "status";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ClientMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage;

  static equals(a: ClientMessage | PlainMessage<ClientMessage> | undefined, b: ClientMessage | PlainMessage<ClientMessage> | undefined): boolean;
}

/**
 * @generated from enum device.v1.ClientMessage.StatusCode
 */
export declare enum ClientMessage_StatusCode {
  /**
   * @generated from enum value: STATUS_CODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATUS_CODE_OTA_UPDATE_START = 1;
   */
  OTA_UPDATE_START = 1,

  /**
   * @generated from enum value: STATUS_CODE_OTA_UPDATE_END_SUCCESS = 2;
   */
  OTA_UPDATE_END_SUCCESS = 2,

  /**
   * @generated from enum value: STATUS_CODE_OTA_UPDATE_END_FAIL = 3;
   */
  OTA_UPDATE_END_FAIL = 3,

  /**
   * @generated from enum value: STATUS_CODE_PING = 4;
   */
  PING = 4,
}

/**
 * @generated from message device.v1.ClientMessage.Status
 */
export declare class ClientMessage_Status extends Message$1<ClientMessage_Status> {
  /**
   * @generated from field: device.v1.ClientMessage.StatusCode status_code = 1;
   */
  statusCode: ClientMessage_StatusCode;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<ClientMessage_Status>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.Status";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_Status;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_Status;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_Status;

  static equals(a: ClientMessage_Status | PlainMessage<ClientMessage_Status> | undefined, b: ClientMessage_Status | PlainMessage<ClientMessage_Status> | undefined): boolean;
}

/**
 * @generated from message device.v1.ClientMessage.Discovery
 */
export declare class ClientMessage_Discovery extends Message$1<ClientMessage_Discovery> {
  /**
   * @generated from field: string software_id = 1;
   */
  softwareId: string;

  /**
   * @generated from field: uint64 gw_mac_address = 2;
   */
  gwMacAddress: bigint;

  /**
   * @generated from field: uint64 ap_mac_address = 3;
   */
  apMacAddress: bigint;

  /**
   * @generated from field: string ap_ssid = 4;
   */
  apSsid: string;

  /**
   * @generated from field: int32 ap_rssi = 5;
   */
  apRssi: number;

  /**
   * @generated from field: string reset_by = 6;
   */
  resetBy: string;

  /**
   * @generated from field: string reset_msg = 7;
   */
  resetMsg: string;

  /**
   * @generated from field: string reset_reason = 8;
   */
  resetReason: string;

  constructor(data?: PartialMessage<ClientMessage_Discovery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.Discovery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_Discovery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_Discovery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_Discovery;

  static equals(a: ClientMessage_Discovery | PlainMessage<ClientMessage_Discovery> | undefined, b: ClientMessage_Discovery | PlainMessage<ClientMessage_Discovery> | undefined): boolean;
}

/**
 * Wrapper for BLE scan results
 *
 * @generated from message device.v1.ClientMessage.BleScan
 */
export declare class ClientMessage_BleScan extends Message$1<ClientMessage_BleScan> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * @generated from oneof device.v1.ClientMessage.BleScan.results
   */
  results: {
    /**
     * @generated from field: device.v1.ClientMessage.BleScan.IBeacon ibeacon = 3;
     */
    value: ClientMessage_BleScan_IBeacon;
    case: "ibeacon";
  } | {
    /**
     * @generated from field: device.v1.ClientMessage.BleScan.EddystoneTLM eddystoneTLM = 4;
     */
    value: ClientMessage_BleScan_EddystoneTLM;
    case: "eddystoneTLM";
  } | {
    /**
     * @generated from field: device.v1.ClientMessage.BleScan.Telemetry telemtry = 5;
     */
    value: ClientMessage_BleScan_Telemetry;
    case: "telemtry";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ClientMessage_BleScan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.BleScan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_BleScan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_BleScan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_BleScan;

  static equals(a: ClientMessage_BleScan | PlainMessage<ClientMessage_BleScan> | undefined, b: ClientMessage_BleScan | PlainMessage<ClientMessage_BleScan> | undefined): boolean;
}

/**
 * @generated from message device.v1.ClientMessage.BleScan.Telemetry
 */
export declare class ClientMessage_BleScan_Telemetry extends Message$1<ClientMessage_BleScan_Telemetry> {
  /**
   * @generated from field: repeated device.v1.ClientMessage.BleScan.Telemetry.Data data = 1;
   */
  data: ClientMessage_BleScan_Telemetry_Data[];

  constructor(data?: PartialMessage<ClientMessage_BleScan_Telemetry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.BleScan.Telemetry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_BleScan_Telemetry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_Telemetry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_Telemetry;

  static equals(a: ClientMessage_BleScan_Telemetry | PlainMessage<ClientMessage_BleScan_Telemetry> | undefined, b: ClientMessage_BleScan_Telemetry | PlainMessage<ClientMessage_BleScan_Telemetry> | undefined): boolean;
}

/**
 * @generated from message device.v1.ClientMessage.BleScan.Telemetry.Data
 */
export declare class ClientMessage_BleScan_Telemetry_Data extends Message$1<ClientMessage_BleScan_Telemetry_Data> {
  /**
   * @generated from field: uint64 mac_address = 1;
   */
  macAddress: bigint;

  /**
   * @generated from field: optional uint32 major = 2;
   */
  major?: number;

  /**
   * @generated from field: optional uint32 minor = 3;
   */
  minor?: number;

  /**
   * @generated from field: optional string local_name = 4;
   */
  localName?: string;

  /**
   * @generated from field: optional uint32 company_id = 5;
   */
  companyId?: number;

  /**
   * @generated from field: optional double battery_voltage = 6;
   */
  batteryVoltage?: number;

  /**
   * @generated from field: optional bool moved_beacon_state = 7;
   */
  movedBeaconState?: boolean;

  /**
   * @generated from field: optional bool movement_active = 8;
   */
  movementActive?: boolean;

  /**
   * @generated from field: optional bool active_or_shipping = 9;
   */
  activeOrShipping?: boolean;

  /**
   * @generated from field: optional bool recently_moved = 10;
   */
  recentlyMoved?: boolean;

  /**
   * @generated from field: optional bool accel_present = 11;
   */
  accelPresent?: boolean;

  /**
   * @generated from field: optional bool button_pressed = 12;
   */
  buttonPressed?: boolean;

  /**
   * @generated from field: optional bool fw_version = 13;
   */
  fwVersion?: boolean;

  /**
   * @generated from field: optional bool beacon_type = 14;
   */
  beaconType?: boolean;

  /**
   * @generated from field: optional int32 temperature = 15;
   */
  temperature?: number;

  constructor(data?: PartialMessage<ClientMessage_BleScan_Telemetry_Data>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.BleScan.Telemetry.Data";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_BleScan_Telemetry_Data;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_Telemetry_Data;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_Telemetry_Data;

  static equals(a: ClientMessage_BleScan_Telemetry_Data | PlainMessage<ClientMessage_BleScan_Telemetry_Data> | undefined, b: ClientMessage_BleScan_Telemetry_Data | PlainMessage<ClientMessage_BleScan_Telemetry_Data> | undefined): boolean;
}

/**
 * @generated from message device.v1.ClientMessage.BleScan.IBeacon
 */
export declare class ClientMessage_BleScan_IBeacon extends Message$1<ClientMessage_BleScan_IBeacon> {
  /**
   * @generated from field: repeated device.v1.ClientMessage.BleScan.IBeacon.AdvertisingData data = 1;
   */
  data: ClientMessage_BleScan_IBeacon_AdvertisingData[];

  constructor(data?: PartialMessage<ClientMessage_BleScan_IBeacon>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.BleScan.IBeacon";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_BleScan_IBeacon;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_IBeacon;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_IBeacon;

  static equals(a: ClientMessage_BleScan_IBeacon | PlainMessage<ClientMessage_BleScan_IBeacon> | undefined, b: ClientMessage_BleScan_IBeacon | PlainMessage<ClientMessage_BleScan_IBeacon> | undefined): boolean;
}

/**
 * @generated from message device.v1.ClientMessage.BleScan.IBeacon.AdvertisingData
 */
export declare class ClientMessage_BleScan_IBeacon_AdvertisingData extends Message$1<ClientMessage_BleScan_IBeacon_AdvertisingData> {
  /**
   * TODO: deprecate
   *
   * @generated from field: uint32 major = 1;
   */
  major: number;

  /**
   * @generated from field: uint32 minor = 2;
   */
  minor: number;

  /**
   * @generated from field: int32 rssi = 3;
   */
  rssi: number;

  /**
   * @generated from field: uint64 mac_address = 4;
   */
  macAddress: bigint;

  constructor(data?: PartialMessage<ClientMessage_BleScan_IBeacon_AdvertisingData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.BleScan.IBeacon.AdvertisingData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_BleScan_IBeacon_AdvertisingData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_IBeacon_AdvertisingData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_IBeacon_AdvertisingData;

  static equals(a: ClientMessage_BleScan_IBeacon_AdvertisingData | PlainMessage<ClientMessage_BleScan_IBeacon_AdvertisingData> | undefined, b: ClientMessage_BleScan_IBeacon_AdvertisingData | PlainMessage<ClientMessage_BleScan_IBeacon_AdvertisingData> | undefined): boolean;
}

/**
 * @generated from message device.v1.ClientMessage.BleScan.EddystoneTLM
 */
export declare class ClientMessage_BleScan_EddystoneTLM extends Message$1<ClientMessage_BleScan_EddystoneTLM> {
  /**
   * @generated from field: repeated device.v1.ClientMessage.BleScan.EddystoneTLM.AdvertisingData data = 1;
   */
  data: ClientMessage_BleScan_EddystoneTLM_AdvertisingData[];

  constructor(data?: PartialMessage<ClientMessage_BleScan_EddystoneTLM>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.BleScan.EddystoneTLM";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_BleScan_EddystoneTLM;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_EddystoneTLM;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_EddystoneTLM;

  static equals(a: ClientMessage_BleScan_EddystoneTLM | PlainMessage<ClientMessage_BleScan_EddystoneTLM> | undefined, b: ClientMessage_BleScan_EddystoneTLM | PlainMessage<ClientMessage_BleScan_EddystoneTLM> | undefined): boolean;
}

/**
 * @generated from message device.v1.ClientMessage.BleScan.EddystoneTLM.AdvertisingData
 */
export declare class ClientMessage_BleScan_EddystoneTLM_AdvertisingData extends Message$1<ClientMessage_BleScan_EddystoneTLM_AdvertisingData> {
  /**
   * @generated from field: uint64 mac_address = 1;
   */
  macAddress: bigint;

  /**
   * @generated from field: int32 rssi = 2;
   */
  rssi: number;

  /**
   * @generated from field: uint32 bat_voltage = 3;
   */
  batVoltage: number;

  /**
   * @generated from field: uint32 temperature = 4;
   */
  temperature: number;

  /**
   * @generated from field: uint32 adv_count = 5;
   */
  advCount: number;

  /**
   * @generated from field: uint32 sec_count = 6;
   */
  secCount: number;

  constructor(data?: PartialMessage<ClientMessage_BleScan_EddystoneTLM_AdvertisingData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.ClientMessage.BleScan.EddystoneTLM.AdvertisingData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientMessage_BleScan_EddystoneTLM_AdvertisingData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_EddystoneTLM_AdvertisingData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientMessage_BleScan_EddystoneTLM_AdvertisingData;

  static equals(a: ClientMessage_BleScan_EddystoneTLM_AdvertisingData | PlainMessage<ClientMessage_BleScan_EddystoneTLM_AdvertisingData> | undefined, b: ClientMessage_BleScan_EddystoneTLM_AdvertisingData | PlainMessage<ClientMessage_BleScan_EddystoneTLM_AdvertisingData> | undefined): boolean;
}

/**
 * BACKEND ---> CLIENT
 *
 * @generated from message device.v1.BackendMessage
 */
export declare class BackendMessage extends Message$1<BackendMessage> {
  /**
   * @generated from oneof device.v1.BackendMessage.payload
   */
  payload: {
    /**
     * @generated from field: device.v1.BackendMessage.Ping ping = 1;
     */
    value: BackendMessage_Ping;
    case: "ping";
  } | {
    /**
     * @generated from field: device.v1.BackendMessage.Configure configure = 2;
     */
    value: BackendMessage_Configure;
    case: "configure";
  } | {
    /**
     * @generated from field: device.v1.BackendMessage.Ota ota = 3;
     */
    value: BackendMessage_Ota;
    case: "ota";
  } | {
    /**
     * @generated from field: device.v1.BackendMessage.Restart restart = 4;
     */
    value: BackendMessage_Restart;
    case: "restart";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<BackendMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.BackendMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BackendMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BackendMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BackendMessage;

  static equals(a: BackendMessage | PlainMessage<BackendMessage> | undefined, b: BackendMessage | PlainMessage<BackendMessage> | undefined): boolean;
}

/**
 * @generated from message device.v1.BackendMessage.Ping
 */
export declare class BackendMessage_Ping extends Message$1<BackendMessage_Ping> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<BackendMessage_Ping>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.BackendMessage.Ping";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BackendMessage_Ping;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BackendMessage_Ping;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BackendMessage_Ping;

  static equals(a: BackendMessage_Ping | PlainMessage<BackendMessage_Ping> | undefined, b: BackendMessage_Ping | PlainMessage<BackendMessage_Ping> | undefined): boolean;
}

/**
 * @generated from message device.v1.BackendMessage.Configure
 */
export declare class BackendMessage_Configure extends Message$1<BackendMessage_Configure> {
  /**
   * @generated from field: device.v1.GatewayFeature gateway_feature = 1;
   */
  gatewayFeature?: GatewayFeature;

  constructor(data?: PartialMessage<BackendMessage_Configure>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.BackendMessage.Configure";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BackendMessage_Configure;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BackendMessage_Configure;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BackendMessage_Configure;

  static equals(a: BackendMessage_Configure | PlainMessage<BackendMessage_Configure> | undefined, b: BackendMessage_Configure | PlainMessage<BackendMessage_Configure> | undefined): boolean;
}

/**
 * @generated from message device.v1.BackendMessage.Ota
 */
export declare class BackendMessage_Ota extends Message$1<BackendMessage_Ota> {
  /**
   * @generated from field: string uri = 1;
   */
  uri: string;

  constructor(data?: PartialMessage<BackendMessage_Ota>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.BackendMessage.Ota";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BackendMessage_Ota;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BackendMessage_Ota;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BackendMessage_Ota;

  static equals(a: BackendMessage_Ota | PlainMessage<BackendMessage_Ota> | undefined, b: BackendMessage_Ota | PlainMessage<BackendMessage_Ota> | undefined): boolean;
}

/**
 * @generated from message device.v1.BackendMessage.Restart
 */
export declare class BackendMessage_Restart extends Message$1<BackendMessage_Restart> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<BackendMessage_Restart>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.BackendMessage.Restart";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BackendMessage_Restart;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BackendMessage_Restart;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BackendMessage_Restart;

  static equals(a: BackendMessage_Restart | PlainMessage<BackendMessage_Restart> | undefined, b: BackendMessage_Restart | PlainMessage<BackendMessage_Restart> | undefined): boolean;
}

/**
 * @generated from message device.v1.Message
 */
export declare class Message extends Message$1<Message> {
  /**
   * @generated from field: uint32 id = 1;
   */
  id: number;

  /**
   * @generated from oneof device.v1.Message.payload
   */
  payload: {
    /**
     * @generated from field: device.v1.ClientMessage client_message = 10;
     */
    value: ClientMessage;
    case: "clientMessage";
  } | {
    /**
     * @generated from field: device.v1.BackendMessage backend_message = 11;
     */
    value: BackendMessage;
    case: "backendMessage";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Message>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.Message";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message;

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean;
}

/**
 * @generated from message device.v1.MessageAck
 */
export declare class MessageAck extends Message$1<MessageAck> {
  /**
   * @generated from field: uint32 message_id = 1;
   */
  messageId: number;

  constructor(data?: PartialMessage<MessageAck>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "device.v1.MessageAck";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageAck;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageAck;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageAck;

  static equals(a: MessageAck | PlainMessage<MessageAck> | undefined, b: MessageAck | PlainMessage<MessageAck> | undefined): boolean;
}

