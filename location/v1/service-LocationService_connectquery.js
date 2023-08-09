// @generated by protoc-gen-connect-query v0.4.0
// @generated from file location/v1/service.proto (package location.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { GetLatestSubjectLocationRequest, GetLatestSubjectLocationResponse, GetLatestSubjectPositionRequest, GetLatestSubjectPositionResponse, GetLocationHistoryRequest, GetLocationHistoryResponse, GetLocationRecordsRequest, GetLocationRecordsResponse, GetSubjectLocationsAtRequest, GetSubjectLocationsAtResponse } from "./service_pb.js";

export const typeName = "location.v1.LocationService";

/**
 * Compressed location history based on zones
 *
 * @generated from rpc location.v1.LocationService.GetLocationHistory
 */
export const getLocationHistory = createQueryService({
  service: {
    methods: {
      getLocationHistory: {
        name: "GetLocationHistory",
        kind: MethodKind.Unary,
        I: GetLocationHistoryRequest,
        O: GetLocationHistoryResponse,
      },
    },
    typeName: "location.v1.LocationService",
  },
}).getLocationHistory;

/**
 * Point in time location records based on zone and/or coordinates
 *
 * @generated from rpc location.v1.LocationService.GetLocationRecords
 */
export const getLocationRecords = createQueryService({
  service: {
    methods: {
      getLocationRecords: {
        name: "GetLocationRecords",
        kind: MethodKind.Unary,
        I: GetLocationRecordsRequest,
        O: GetLocationRecordsResponse,
      },
    },
    typeName: "location.v1.LocationService",
  },
}).getLocationRecords;

/**
 * @generated from rpc location.v1.LocationService.GetSubjectLocationsAt
 */
export const getSubjectLocationsAt = createQueryService({
  service: {
    methods: {
      getSubjectLocationsAt: {
        name: "GetSubjectLocationsAt",
        kind: MethodKind.Unary,
        I: GetSubjectLocationsAtRequest,
        O: GetSubjectLocationsAtResponse,
      },
    },
    typeName: "location.v1.LocationService",
  },
}).getSubjectLocationsAt;

/**
 * Deprecated: GetLatestSubjectPosition is deprecated, use GetLatestSubjectLocation instead
 *
 * @generated from rpc location.v1.LocationService.GetLatestSubjectPosition
 */
export const getLatestSubjectPosition = createQueryService({
  service: {
    methods: {
      getLatestSubjectPosition: {
        name: "GetLatestSubjectPosition",
        kind: MethodKind.Unary,
        I: GetLatestSubjectPositionRequest,
        O: GetLatestSubjectPositionResponse,
      },
    },
    typeName: "location.v1.LocationService",
  },
}).getLatestSubjectPosition;

/**
 * @generated from rpc location.v1.LocationService.GetLatestSubjectLocation
 */
export const getLatestSubjectLocation = createQueryService({
  service: {
    methods: {
      getLatestSubjectLocation: {
        name: "GetLatestSubjectLocation",
        kind: MethodKind.Unary,
        I: GetLatestSubjectLocationRequest,
        O: GetLatestSubjectLocationResponse,
      },
    },
    typeName: "location.v1.LocationService",
  },
}).getLatestSubjectLocation;
