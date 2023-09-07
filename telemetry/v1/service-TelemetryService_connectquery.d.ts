// @generated by protoc-gen-connect-query v0.4.0
// @generated from file telemetry/v1/service.proto (package telemetry.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { UnaryHooks } from "@bufbuild/connect-query";
import { GetBeaconLogsRequest, GetBeaconLogsResponse, GetLatestBeaconLogsRequest, GetLatestBeaconLogsResponse } from "./service_pb.js";

export const getBeaconLogs: UnaryHooks<GetBeaconLogsRequest, GetBeaconLogsResponse>;
export const getLatestBeaconLogs: UnaryHooks<GetLatestBeaconLogsRequest, GetLatestBeaconLogsResponse>;