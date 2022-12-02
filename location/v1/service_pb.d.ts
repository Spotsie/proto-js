// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file location/v1/service.proto (package location.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {GeoPoint, Subject} from "../../domain/v1/domain_pb.js";
import type {LocationHistoryRecord, LocationRecord} from "./location_pb.js";

/**
 * @generated from message location.v1.GetLocationHistoryRequest
 */
export declare class GetLocationHistoryRequest extends Message<GetLocationHistoryRequest> {
  /**
   * @generated from field: repeated domain.v1.Subject subjects = 1;
   */
  subjects: Subject[];

  /**
   * @generated from field: google.protobuf.Timestamp from_time = 2;
   */
  fromTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp to_time = 3;
   */
  toTime?: Timestamp;

  constructor(data?: PartialMessage<GetLocationHistoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetLocationHistoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLocationHistoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLocationHistoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLocationHistoryRequest;

  static equals(a: GetLocationHistoryRequest | PlainMessage<GetLocationHistoryRequest> | undefined, b: GetLocationHistoryRequest | PlainMessage<GetLocationHistoryRequest> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetLocationHistoryResponse
 */
export declare class GetLocationHistoryResponse extends Message<GetLocationHistoryResponse> {
  /**
   * @generated from field: map<int32, location.v1.LocationHistory> subject_location_history = 1;
   */
  subjectLocationHistory: { [key: number]: LocationHistory };

  constructor(data?: PartialMessage<GetLocationHistoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetLocationHistoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLocationHistoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLocationHistoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLocationHistoryResponse;

  static equals(a: GetLocationHistoryResponse | PlainMessage<GetLocationHistoryResponse> | undefined, b: GetLocationHistoryResponse | PlainMessage<GetLocationHistoryResponse> | undefined): boolean;
}

/**
 * @generated from message location.v1.LocationHistory
 */
export declare class LocationHistory extends Message<LocationHistory> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  /**
   * @generated from field: repeated location.v1.LocationHistoryRecord records = 2;
   */
  records: LocationHistoryRecord[];

  constructor(data?: PartialMessage<LocationHistory>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.LocationHistory";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationHistory;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationHistory;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationHistory;

  static equals(a: LocationHistory | PlainMessage<LocationHistory> | undefined, b: LocationHistory | PlainMessage<LocationHistory> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetRealtimeLocationRequest
 */
export declare class GetRealtimeLocationRequest extends Message<GetRealtimeLocationRequest> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  constructor(data?: PartialMessage<GetRealtimeLocationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetRealtimeLocationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRealtimeLocationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRealtimeLocationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRealtimeLocationRequest;

  static equals(a: GetRealtimeLocationRequest | PlainMessage<GetRealtimeLocationRequest> | undefined, b: GetRealtimeLocationRequest | PlainMessage<GetRealtimeLocationRequest> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetRealtimeLocationResponse
 */
export declare class GetRealtimeLocationResponse extends Message<GetRealtimeLocationResponse> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  /**
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * @generated from field: int32 location_id = 3;
   */
  locationId: number;

  /**
   * @generated from field: domain.v1.GeoPoint point = 4;
   */
  point?: GeoPoint;

  constructor(data?: PartialMessage<GetRealtimeLocationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetRealtimeLocationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRealtimeLocationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRealtimeLocationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRealtimeLocationResponse;

  static equals(a: GetRealtimeLocationResponse | PlainMessage<GetRealtimeLocationResponse> | undefined, b: GetRealtimeLocationResponse | PlainMessage<GetRealtimeLocationResponse> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetSubjectLocationsAtRequest
 */
export declare class GetSubjectLocationsAtRequest extends Message<GetSubjectLocationsAtRequest> {
  /**
   * @generated from field: google.protobuf.Timestamp time = 1;
   */
  time?: Timestamp;

  /**
   * @generated from field: int32 namespace = 2;
   */
  namespace: number;

  constructor(data?: PartialMessage<GetSubjectLocationsAtRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetSubjectLocationsAtRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSubjectLocationsAtRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSubjectLocationsAtRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSubjectLocationsAtRequest;

  static equals(a: GetSubjectLocationsAtRequest | PlainMessage<GetSubjectLocationsAtRequest> | undefined, b: GetSubjectLocationsAtRequest | PlainMessage<GetSubjectLocationsAtRequest> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetSubjectLocationsAtResponse
 */
export declare class GetSubjectLocationsAtResponse extends Message<GetSubjectLocationsAtResponse> {
  /**
   * Map<subject id, location id>
   *
   * @generated from field: map<int32, int32> subject_locations = 1;
   */
  subjectLocations: { [key: number]: number };

  constructor(data?: PartialMessage<GetSubjectLocationsAtResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetSubjectLocationsAtResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSubjectLocationsAtResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSubjectLocationsAtResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSubjectLocationsAtResponse;

  static equals(a: GetSubjectLocationsAtResponse | PlainMessage<GetSubjectLocationsAtResponse> | undefined, b: GetSubjectLocationsAtResponse | PlainMessage<GetSubjectLocationsAtResponse> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetLatestSubjectPositionRequest
 */
export declare class GetLatestSubjectPositionRequest extends Message<GetLatestSubjectPositionRequest> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  constructor(data?: PartialMessage<GetLatestSubjectPositionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetLatestSubjectPositionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestSubjectPositionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestSubjectPositionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestSubjectPositionRequest;

  static equals(a: GetLatestSubjectPositionRequest | PlainMessage<GetLatestSubjectPositionRequest> | undefined, b: GetLatestSubjectPositionRequest | PlainMessage<GetLatestSubjectPositionRequest> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetLatestSubjectPositionResponse
 */
export declare class GetLatestSubjectPositionResponse extends Message<GetLatestSubjectPositionResponse> {
  /**
   * @generated from field: google.protobuf.Timestamp time = 1;
   */
  time?: Timestamp;

  /**
   * @generated from field: domain.v1.GeoPoint point = 2;
   */
  point?: GeoPoint;

  constructor(data?: PartialMessage<GetLatestSubjectPositionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetLatestSubjectPositionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestSubjectPositionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestSubjectPositionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestSubjectPositionResponse;

  static equals(a: GetLatestSubjectPositionResponse | PlainMessage<GetLatestSubjectPositionResponse> | undefined, b: GetLatestSubjectPositionResponse | PlainMessage<GetLatestSubjectPositionResponse> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetLocationRecordsRequest
 */
export declare class GetLocationRecordsRequest extends Message<GetLocationRecordsRequest> {
  /**
   * @generated from field: repeated domain.v1.Subject subjects = 1;
   */
  subjects: Subject[];

  /**
   * @generated from field: google.protobuf.Timestamp from_time = 2;
   */
  fromTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp to_time = 3;
   */
  toTime?: Timestamp;

  constructor(data?: PartialMessage<GetLocationRecordsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetLocationRecordsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLocationRecordsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLocationRecordsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLocationRecordsRequest;

  static equals(a: GetLocationRecordsRequest | PlainMessage<GetLocationRecordsRequest> | undefined, b: GetLocationRecordsRequest | PlainMessage<GetLocationRecordsRequest> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetLocationRecordsResponse
 */
export declare class GetLocationRecordsResponse extends Message<GetLocationRecordsResponse> {
  /**
   * @generated from field: map<int32, location.v1.GetLocationRecordsResponse.SubjectLocationRecords> subject_location_records = 1;
   */
  subjectLocationRecords: { [key: number]: GetLocationRecordsResponse_SubjectLocationRecords };

  constructor(data?: PartialMessage<GetLocationRecordsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetLocationRecordsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLocationRecordsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLocationRecordsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLocationRecordsResponse;

  static equals(a: GetLocationRecordsResponse | PlainMessage<GetLocationRecordsResponse> | undefined, b: GetLocationRecordsResponse | PlainMessage<GetLocationRecordsResponse> | undefined): boolean;
}

/**
 * @generated from message location.v1.GetLocationRecordsResponse.SubjectLocationRecords
 */
export declare class GetLocationRecordsResponse_SubjectLocationRecords extends Message<GetLocationRecordsResponse_SubjectLocationRecords> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  /**
   * @generated from field: repeated location.v1.LocationRecord records = 2;
   */
  records: LocationRecord[];

  constructor(data?: PartialMessage<GetLocationRecordsResponse_SubjectLocationRecords>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.GetLocationRecordsResponse.SubjectLocationRecords";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLocationRecordsResponse_SubjectLocationRecords;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLocationRecordsResponse_SubjectLocationRecords;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLocationRecordsResponse_SubjectLocationRecords;

  static equals(a: GetLocationRecordsResponse_SubjectLocationRecords | PlainMessage<GetLocationRecordsResponse_SubjectLocationRecords> | undefined, b: GetLocationRecordsResponse_SubjectLocationRecords | PlainMessage<GetLocationRecordsResponse_SubjectLocationRecords> | undefined): boolean;
}

