// @generated by protoc-gen-connect-web v0.3.1 with parameter "target=ts"
// @generated from file device/v1/service.proto (package device.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {CreateFirmwareRequest, CreateFirmwareResponse, CreateOneTimeTokenRequest, CreateOneTimeTokenResponse, GetDeviceRequest, GetDeviceResponse, GetDevicesRequest, GetDevicesResponse, GetFirmwareRequest, GetFirmwareResponse, UseOneTimeTokenRequest, UseOneTimeTokenResponse} from "./service_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service device.v1.DeviceService
 */
export const DeviceService = {
  typeName: "device.v1.DeviceService",
  methods: {
    /**
     * Device ops
     *
     * @generated from rpc device.v1.DeviceService.GetDevices
     */
    getDevices: {
      name: "GetDevices",
      I: GetDevicesRequest,
      O: GetDevicesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc device.v1.DeviceService.GetDevice
     */
    getDevice: {
      name: "GetDevice",
      I: GetDeviceRequest,
      O: GetDeviceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * One time token ops
     *
     * @generated from rpc device.v1.DeviceService.CreateOneTimeToken
     */
    createOneTimeToken: {
      name: "CreateOneTimeToken",
      I: CreateOneTimeTokenRequest,
      O: CreateOneTimeTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc device.v1.DeviceService.UseOneTimeToken
     */
    useOneTimeToken: {
      name: "UseOneTimeToken",
      I: UseOneTimeTokenRequest,
      O: UseOneTimeTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Firmware ops
     *
     * @generated from rpc device.v1.DeviceService.CreateFirmware
     */
    createFirmware: {
      name: "CreateFirmware",
      I: CreateFirmwareRequest,
      O: CreateFirmwareResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc device.v1.DeviceService.GetFirmware
     */
    getFirmware: {
      name: "GetFirmware",
      I: GetFirmwareRequest,
      O: GetFirmwareResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

