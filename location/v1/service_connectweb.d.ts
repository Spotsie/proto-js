// @generated by protoc-gen-connect-web v0.6.0
// @generated from file location/v1/service.proto (package location.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetLatestSubjectLocationRequest, GetLatestSubjectLocationResponse, GetLatestSubjectPositionRequest, GetLatestSubjectPositionResponse, GetLocationHistoryRequest, GetLocationHistoryResponse, GetLocationRecordsRequest, GetLocationRecordsResponse, GetRealtimeLocationRequest, GetRealtimeLocationResponse, GetSubjectLocationsAtRequest, GetSubjectLocationsAtResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service location.v1.LocationService
 */
export declare const LocationService: {
  readonly typeName: "location.v1.LocationService",
  readonly methods: {
    /**
     * Compressed location history based on zones
     *
     * @generated from rpc location.v1.LocationService.GetLocationHistory
     */
    readonly getLocationHistory: {
      readonly name: "GetLocationHistory",
      readonly I: typeof GetLocationHistoryRequest,
      readonly O: typeof GetLocationHistoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Point in time location records based on zone and/or coordinates
     *
     * @generated from rpc location.v1.LocationService.GetLocationRecords
     */
    readonly getLocationRecords: {
      readonly name: "GetLocationRecords",
      readonly I: typeof GetLocationRecordsRequest,
      readonly O: typeof GetLocationRecordsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc location.v1.LocationService.GetRealtimeLocation
     */
    readonly getRealtimeLocation: {
      readonly name: "GetRealtimeLocation",
      readonly I: typeof GetRealtimeLocationRequest,
      readonly O: typeof GetRealtimeLocationResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc location.v1.LocationService.GetSubjectLocationsAt
     */
    readonly getSubjectLocationsAt: {
      readonly name: "GetSubjectLocationsAt",
      readonly I: typeof GetSubjectLocationsAtRequest,
      readonly O: typeof GetSubjectLocationsAtResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc location.v1.LocationService.GetLatestSubjectPosition
     */
    readonly getLatestSubjectPosition: {
      readonly name: "GetLatestSubjectPosition",
      readonly I: typeof GetLatestSubjectPositionRequest,
      readonly O: typeof GetLatestSubjectPositionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc location.v1.LocationService.GetLatestSubjectLocation
     */
    readonly getLatestSubjectLocation: {
      readonly name: "GetLatestSubjectLocation",
      readonly I: typeof GetLatestSubjectLocationRequest,
      readonly O: typeof GetLatestSubjectLocationResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
