// @generated by protoc-gen-es v1.2.1
// @generated from file location/v1/service.proto (package location.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { GeoPoint, Subject } from "../../domain/v1/domain_pb.js";
import { LocationHistoryRecord, LocationRecord } from "./location_pb.js";

/**
 * @generated from message location.v1.GetLocationHistoryRequest
 */
export const GetLocationHistoryRequest = proto3.makeMessageType(
  "location.v1.GetLocationHistoryRequest",
  () => [
    { no: 1, name: "subjects", kind: "message", T: Subject, repeated: true },
    { no: 2, name: "from_time", kind: "message", T: Timestamp },
    { no: 3, name: "to_time", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message location.v1.GetLocationHistoryResponse
 */
export const GetLocationHistoryResponse = proto3.makeMessageType(
  "location.v1.GetLocationHistoryResponse",
  () => [
    { no: 1, name: "subject_location_history", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: LocationHistory} },
  ],
);

/**
 * @generated from message location.v1.LocationHistory
 */
export const LocationHistory = proto3.makeMessageType(
  "location.v1.LocationHistory",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
    { no: 2, name: "records", kind: "message", T: LocationHistoryRecord, repeated: true },
  ],
);

/**
 * @generated from message location.v1.GetRealtimeLocationRequest
 */
export const GetRealtimeLocationRequest = proto3.makeMessageType(
  "location.v1.GetRealtimeLocationRequest",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
  ],
);

/**
 * @generated from message location.v1.GetRealtimeLocationResponse
 */
export const GetRealtimeLocationResponse = proto3.makeMessageType(
  "location.v1.GetRealtimeLocationResponse",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "location_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "point", kind: "message", T: GeoPoint },
  ],
);

/**
 * @generated from message location.v1.GetSubjectLocationsAtRequest
 */
export const GetSubjectLocationsAtRequest = proto3.makeMessageType(
  "location.v1.GetSubjectLocationsAtRequest",
  () => [
    { no: 1, name: "time", kind: "message", T: Timestamp },
    { no: 2, name: "namespace", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message location.v1.GetSubjectLocationsAtResponse
 */
export const GetSubjectLocationsAtResponse = proto3.makeMessageType(
  "location.v1.GetSubjectLocationsAtResponse",
  () => [
    { no: 1, name: "subject_locations", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
  ],
);

/**
 * @generated from message location.v1.GetLatestSubjectPositionRequest
 */
export const GetLatestSubjectPositionRequest = proto3.makeMessageType(
  "location.v1.GetLatestSubjectPositionRequest",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
  ],
);

/**
 * @generated from message location.v1.GetLatestSubjectPositionResponse
 */
export const GetLatestSubjectPositionResponse = proto3.makeMessageType(
  "location.v1.GetLatestSubjectPositionResponse",
  () => [
    { no: 1, name: "time", kind: "message", T: Timestamp },
    { no: 2, name: "point", kind: "message", T: GeoPoint },
  ],
);

/**
 * @generated from message location.v1.GetLocationRecordsRequest
 */
export const GetLocationRecordsRequest = proto3.makeMessageType(
  "location.v1.GetLocationRecordsRequest",
  () => [
    { no: 1, name: "subjects", kind: "message", T: Subject, repeated: true },
    { no: 2, name: "from_time", kind: "message", T: Timestamp },
    { no: 3, name: "to_time", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message location.v1.GetLocationRecordsResponse
 */
export const GetLocationRecordsResponse = proto3.makeMessageType(
  "location.v1.GetLocationRecordsResponse",
  () => [
    { no: 1, name: "subject_location_records", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: GetLocationRecordsResponse_SubjectLocationRecords} },
  ],
);

/**
 * @generated from message location.v1.GetLocationRecordsResponse.SubjectLocationRecords
 */
export const GetLocationRecordsResponse_SubjectLocationRecords = proto3.makeMessageType(
  "location.v1.GetLocationRecordsResponse.SubjectLocationRecords",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
    { no: 2, name: "records", kind: "message", T: LocationRecord, repeated: true },
  ],
  {localName: "GetLocationRecordsResponse_SubjectLocationRecords"},
);

/**
 * @generated from message location.v1.GetLatestSubjectLocationRequest
 */
export const GetLatestSubjectLocationRequest = proto3.makeMessageType(
  "location.v1.GetLatestSubjectLocationRequest",
  () => [
    { no: 1, name: "subjects", kind: "message", T: Subject, repeated: true },
    { no: 2, name: "from_time", kind: "message", T: Timestamp, opt: true },
  ],
);

/**
 * @generated from message location.v1.GetLatestSubjectLocationResponse
 */
export const GetLatestSubjectLocationResponse = proto3.makeMessageType(
  "location.v1.GetLatestSubjectLocationResponse",
  () => [
    { no: 1, name: "subject_location_record", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: LocationRecord} },
  ],
);

