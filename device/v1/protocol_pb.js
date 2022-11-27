// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file device/v1/protocol.proto (package device.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";

/**
 * @generated from enum device.v1.ClientType
 */
export const ClientType = proto3.makeEnum(
  "device.v1.ClientType",
  [
    {no: 0, name: "CLIENT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "CLIENT_TYPE_GATEWAY", localName: "GATEWAY"},
  ],
);

/**
 * @generated from message device.v1.GatewayFeature
 */
export const GatewayFeature = proto3.makeMessageType(
  "device.v1.GatewayFeature",
  () => [
    { no: 1, name: "mqtt", kind: "message", T: GatewayFeature_Mqtt, oneof: "config" },
    { no: 2, name: "wifi", kind: "message", T: GatewayFeature_Wifi, oneof: "config" },
    { no: 3, name: "sntp", kind: "message", T: GatewayFeature_Sntp, oneof: "config" },
    { no: 4, name: "log", kind: "message", T: GatewayFeature_Log, oneof: "config" },
    { no: 5, name: "ota", kind: "message", T: GatewayFeature_Ota, oneof: "config" },
    { no: 6, name: "keep_alive", kind: "message", T: GatewayFeature_KeepAlive, oneof: "config" },
    { no: 7, name: "ble", kind: "message", T: GatewayFeature_Ble, oneof: "config" },
  ],
);

/**
 * @generated from message device.v1.GatewayFeature.Mqtt
 */
export const GatewayFeature_Mqtt = proto3.makeMessageType(
  "device.v1.GatewayFeature.Mqtt",
  () => [
    { no: 1, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GatewayFeature_Mqtt"},
);

/**
 * @generated from message device.v1.GatewayFeature.Wifi
 */
export const GatewayFeature_Wifi = proto3.makeMessageType(
  "device.v1.GatewayFeature.Wifi",
  () => [
    { no: 10, name: "ssid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "max_retry", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "GatewayFeature_Wifi"},
);

/**
 * @generated from message device.v1.GatewayFeature.Sntp
 */
export const GatewayFeature_Sntp = proto3.makeMessageType(
  "device.v1.GatewayFeature.Sntp",
  () => [
    { no: 1, name: "server_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GatewayFeature_Sntp"},
);

/**
 * @generated from message device.v1.GatewayFeature.Log
 */
export const GatewayFeature_Log = proto3.makeMessageType(
  "device.v1.GatewayFeature.Log",
  () => [
    { no: 1, name: "level", kind: "enum", T: proto3.getEnumType(GatewayFeature_Log_Level) },
    { no: 2, name: "udp_host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "udp_port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "udp_enable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "GatewayFeature_Log"},
);

/**
 * @generated from enum device.v1.GatewayFeature.Log.Level
 */
export const GatewayFeature_Log_Level = proto3.makeEnum(
  "device.v1.GatewayFeature.Log.Level",
  [
    {no: 0, name: "LEVEL_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "LEVEL_ERROR", localName: "ERROR"},
    {no: 2, name: "LEVEL_INFO", localName: "INFO"},
    {no: 3, name: "LEVEL_DEBUG", localName: "DEBUG"},
  ],
);

/**
 * @generated from message device.v1.GatewayFeature.Ota
 */
export const GatewayFeature_Ota = proto3.makeMessageType(
  "device.v1.GatewayFeature.Ota",
  () => [
    { no: 1, name: "timeout", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GatewayFeature_Ota"},
);

/**
 * @generated from message device.v1.GatewayFeature.KeepAlive
 */
export const GatewayFeature_KeepAlive = proto3.makeMessageType(
  "device.v1.GatewayFeature.KeepAlive",
  () => [
    { no: 1, name: "timeout", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "on_timeout", kind: "enum", T: proto3.getEnumType(GatewayFeature_KeepAlive_OnTimeout) },
  ],
  {localName: "GatewayFeature_KeepAlive"},
);

/**
 * @generated from enum device.v1.GatewayFeature.KeepAlive.OnTimeout
 */
export const GatewayFeature_KeepAlive_OnTimeout = proto3.makeEnum(
  "device.v1.GatewayFeature.KeepAlive.OnTimeout",
  [
    {no: 0, name: "ON_TIMEOUT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ON_TIMEOUT_RESTART", localName: "RESTART"},
    {no: 2, name: "ON_TIMEOUT_IGNORE", localName: "IGNORE"},
  ],
);

/**
 * @generated from message device.v1.GatewayFeature.Ble
 */
export const GatewayFeature_Ble = proto3.makeMessageType(
  "device.v1.GatewayFeature.Ble",
  () => [
    { no: 1, name: "scan_duration", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "scan_interval", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "scan_window", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "GatewayFeature_Ble"},
);

/**
 * CLIENT ---> BACKEND
 *
 * @generated from message device.v1.ClientMessage
 */
export const ClientMessage = proto3.makeMessageType(
  "device.v1.ClientMessage",
  () => [
    { no: 1, name: "client_type", kind: "enum", T: proto3.getEnumType(ClientType) },
    { no: 2, name: "device_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "discovery", kind: "message", T: ClientMessage_Discovery, oneof: "payload" },
    { no: 11, name: "ble_scan", kind: "message", T: ClientMessage_BleScan, oneof: "payload" },
    { no: 12, name: "error", kind: "message", T: ClientMessage_Error, oneof: "payload" },
  ],
);

/**
 * @generated from enum device.v1.ClientMessage.ErrorCode
 */
export const ClientMessage_ErrorCode = proto3.makeEnum(
  "device.v1.ClientMessage.ErrorCode",
  [
    {no: 0, name: "ERROR_CODE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ERROR_CODE_OTA_UPDATE", localName: "OTA_UPDATE"},
  ],
);

/**
 * @generated from message device.v1.ClientMessage.Error
 */
export const ClientMessage_Error = proto3.makeMessageType(
  "device.v1.ClientMessage.Error",
  () => [
    { no: 1, name: "error_code", kind: "enum", T: proto3.getEnumType(ClientMessage_ErrorCode) },
  ],
  {localName: "ClientMessage_Error"},
);

/**
 * @generated from message device.v1.ClientMessage.Discovery
 */
export const ClientMessage_Discovery = proto3.makeMessageType(
  "device.v1.ClientMessage.Discovery",
  () => [
    { no: 1, name: "software_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ClientMessage_Discovery"},
);

/**
 * Wrapper for BLE scan results
 *
 * @generated from message device.v1.ClientMessage.BleScan
 */
export const ClientMessage_BleScan = proto3.makeMessageType(
  "device.v1.ClientMessage.BleScan",
  () => [
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "ibeacon", kind: "message", T: ClientMessage_BleScan_IBeacon, oneof: "results" },
    { no: 4, name: "eddystone", kind: "message", T: ClientMessage_BleScan_Eddystone, oneof: "results" },
  ],
  {localName: "ClientMessage_BleScan"},
);

/**
 * @generated from message device.v1.ClientMessage.BleScan.IBeacon
 */
export const ClientMessage_BleScan_IBeacon = proto3.makeMessageType(
  "device.v1.ClientMessage.BleScan.IBeacon",
  () => [
    { no: 1, name: "data", kind: "message", T: ClientMessage_BleScan_IBeacon_AdvertisingData, repeated: true },
  ],
  {localName: "ClientMessage_BleScan_IBeacon"},
);

/**
 * @generated from message device.v1.ClientMessage.BleScan.IBeacon.AdvertisingData
 */
export const ClientMessage_BleScan_IBeacon_AdvertisingData = proto3.makeMessageType(
  "device.v1.ClientMessage.BleScan.IBeacon.AdvertisingData",
  () => [
    { no: 1, name: "major", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "minor", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "rssi", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "ClientMessage_BleScan_IBeacon_AdvertisingData"},
);

/**
 * TODO: implement
 *
 * @generated from message device.v1.ClientMessage.BleScan.Eddystone
 */
export const ClientMessage_BleScan_Eddystone = proto3.makeMessageType(
  "device.v1.ClientMessage.BleScan.Eddystone",
  () => [
    { no: 1, name: "data", kind: "message", T: ClientMessage_BleScan_Eddystone_AdvertisingData, repeated: true },
  ],
  {localName: "ClientMessage_BleScan_Eddystone"},
);

/**
 * @generated from message device.v1.ClientMessage.BleScan.Eddystone.AdvertisingData
 */
export const ClientMessage_BleScan_Eddystone_AdvertisingData = proto3.makeMessageType(
  "device.v1.ClientMessage.BleScan.Eddystone.AdvertisingData",
  [],
  {localName: "ClientMessage_BleScan_Eddystone_AdvertisingData"},
);

/**
 * BACKEND ---> CLIENT
 *
 * @generated from message device.v1.BackendMessage
 */
export const BackendMessage = proto3.makeMessageType(
  "device.v1.BackendMessage",
  () => [
    { no: 1, name: "ping", kind: "message", T: BackendMessage_Ping, oneof: "payload" },
    { no: 2, name: "configure", kind: "message", T: BackendMessage_Configure, oneof: "payload" },
    { no: 3, name: "ota", kind: "message", T: BackendMessage_Ota, oneof: "payload" },
  ],
);

/**
 * @generated from message device.v1.BackendMessage.Ping
 */
export const BackendMessage_Ping = proto3.makeMessageType(
  "device.v1.BackendMessage.Ping",
  () => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
  ],
  {localName: "BackendMessage_Ping"},
);

/**
 * @generated from message device.v1.BackendMessage.Configure
 */
export const BackendMessage_Configure = proto3.makeMessageType(
  "device.v1.BackendMessage.Configure",
  () => [
    { no: 1, name: "gateway_feature", kind: "message", T: GatewayFeature },
  ],
  {localName: "BackendMessage_Configure"},
);

/**
 * @generated from message device.v1.BackendMessage.Ota
 */
export const BackendMessage_Ota = proto3.makeMessageType(
  "device.v1.BackendMessage.Ota",
  () => [
    { no: 1, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "BackendMessage_Ota"},
);

/**
 * @generated from message device.v1.Message
 */
export const Message = proto3.makeMessageType(
  "device.v1.Message",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "client_message", kind: "message", T: ClientMessage, oneof: "payload" },
    { no: 11, name: "backend_message", kind: "message", T: BackendMessage, oneof: "payload" },
  ],
);

/**
 * @generated from message device.v1.MessageAck
 */
export const MessageAck = proto3.makeMessageType(
  "device.v1.MessageAck",
  () => [
    { no: 1, name: "message_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

