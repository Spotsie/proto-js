// @generated by protoc-gen-connect-web v0.11.0
// @generated from file telemetry/v1/service.proto (package telemetry.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetBeaconLogsRequest, GetBeaconLogsResponse, GetBeaconsRequest, GetBeaconsResponse, GetLatestBeaconLogsRequest, GetLatestBeaconLogsResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service telemetry.v1.TelemetryService
 */
export const TelemetryService = {
  typeName: "telemetry.v1.TelemetryService",
  methods: {
    /**
     * @generated from rpc telemetry.v1.TelemetryService.GetBeacons
     */
    getBeacons: {
      name: "GetBeacons",
      I: GetBeaconsRequest,
      O: GetBeaconsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc telemetry.v1.TelemetryService.GetBeaconLogs
     */
    getBeaconLogs: {
      name: "GetBeaconLogs",
      I: GetBeaconLogsRequest,
      O: GetBeaconLogsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc telemetry.v1.TelemetryService.GetLatestBeaconLogs
     */
    getLatestBeaconLogs: {
      name: "GetLatestBeaconLogs",
      I: GetLatestBeaconLogsRequest,
      O: GetLatestBeaconLogsResponse,
      kind: MethodKind.Unary,
    },
  }
};

