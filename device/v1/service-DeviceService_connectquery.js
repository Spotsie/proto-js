// @generated by protoc-gen-connect-query v0.4.0
// @generated from file device/v1/service.proto (package device.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateFirmwareRequest, CreateFirmwareResponse, CreateOneTimeTokenRequest, CreateOneTimeTokenResponse, GetDeviceRequest, GetDeviceResponse, GetDevicesRequest, GetDevicesResponse, GetFirmwareRequest, GetFirmwareResponse, UseOneTimeTokenRequest, UseOneTimeTokenResponse } from "./service_pb.js";

export const typeName = "device.v1.DeviceService";

/**
 * Device ops
 *
 * @generated from rpc device.v1.DeviceService.GetDevices
 */
export const getDevices = createQueryService({
  service: {
    methods: {
      getDevices: {
        name: "GetDevices",
        kind: MethodKind.Unary,
        I: GetDevicesRequest,
        O: GetDevicesResponse,
      },
    },
    typeName: "device.v1.DeviceService",
  },
}).getDevices;

/**
 * @generated from rpc device.v1.DeviceService.GetDevice
 */
export const getDevice = createQueryService({
  service: {
    methods: {
      getDevice: {
        name: "GetDevice",
        kind: MethodKind.Unary,
        I: GetDeviceRequest,
        O: GetDeviceResponse,
      },
    },
    typeName: "device.v1.DeviceService",
  },
}).getDevice;

/**
 * One time token ops
 *
 * @generated from rpc device.v1.DeviceService.CreateOneTimeToken
 */
export const createOneTimeToken = createQueryService({
  service: {
    methods: {
      createOneTimeToken: {
        name: "CreateOneTimeToken",
        kind: MethodKind.Unary,
        I: CreateOneTimeTokenRequest,
        O: CreateOneTimeTokenResponse,
      },
    },
    typeName: "device.v1.DeviceService",
  },
}).createOneTimeToken;

/**
 * @generated from rpc device.v1.DeviceService.UseOneTimeToken
 */
export const useOneTimeToken = createQueryService({
  service: {
    methods: {
      useOneTimeToken: {
        name: "UseOneTimeToken",
        kind: MethodKind.Unary,
        I: UseOneTimeTokenRequest,
        O: UseOneTimeTokenResponse,
      },
    },
    typeName: "device.v1.DeviceService",
  },
}).useOneTimeToken;

/**
 * Firmware ops
 *
 * @generated from rpc device.v1.DeviceService.CreateFirmware
 */
export const createFirmware = createQueryService({
  service: {
    methods: {
      createFirmware: {
        name: "CreateFirmware",
        kind: MethodKind.Unary,
        I: CreateFirmwareRequest,
        O: CreateFirmwareResponse,
      },
    },
    typeName: "device.v1.DeviceService",
  },
}).createFirmware;

/**
 * @generated from rpc device.v1.DeviceService.GetFirmware
 */
export const getFirmware = createQueryService({
  service: {
    methods: {
      getFirmware: {
        name: "GetFirmware",
        kind: MethodKind.Unary,
        I: GetFirmwareRequest,
        O: GetFirmwareResponse,
      },
    },
    typeName: "device.v1.DeviceService",
  },
}).getFirmware;
