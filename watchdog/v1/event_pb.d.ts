// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file watchdog/v1/event.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {Subject} from "../../domain/v1/domain_pb.js";

/**
 * @generated from message watchdog.v1.Event
 */
export declare class Event extends Message<Event> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * ID of a Job that created this event
   *
   * @generated from field: int32 created_by_job = 2;
   */
  createdByJob: number;

  /**
   * Subjects that are related to this event
   *
   * @generated from field: repeated domain.v1.Subject affected_subjects = 3;
   */
  affectedSubjects: Subject[];

  /**
   * Time of the last update
   *
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  /**
   * Time of the last update
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 5;
   */
  updatedAt?: Timestamp;

  /**
   * Type of the event with event specific data
   *
   * @generated from field: watchdog.v1.Event.Payload payload = 6;
   */
  payload?: Event_Payload;

  constructor(data?: PartialMessage<Event>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.Payload
 */
export declare class Event_Payload extends Message<Event_Payload> {
  /**
   * @generated from oneof watchdog.v1.Event.Payload.payload
   */
  payload: {
    /**
     * @generated from field: watchdog.v1.Event.Payload.NoActivity no_activity = 10;
     */
    value: Event_Payload_NoActivity;
    case: "noActivity";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.Payload.Activity activity = 11;
     */
    value: Event_Payload_Activity;
    case: "activity";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.Payload.ZoneOverstay zone_overstay = 12;
     */
    value: Event_Payload_ZoneOverstay;
    case: "zoneOverstay";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.Payload.SimilarMovement similar_movement = 13;
     */
    value: Event_Payload_SimilarMovement;
    case: "similarMovement";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.Payload.ZoneVisit zone_visit = 14;
     */
    value: Event_Payload_ZoneVisit;
    case: "zoneVisit";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Event_Payload>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.Payload";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Payload;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Payload;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Payload;

  static equals(a: Event_Payload | PlainMessage<Event_Payload> | undefined, b: Event_Payload | PlainMessage<Event_Payload> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.Payload.NoActivity
 */
export declare class Event_Payload_NoActivity extends Message<Event_Payload_NoActivity> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_Payload_NoActivity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.Payload.NoActivity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Payload_NoActivity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Payload_NoActivity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Payload_NoActivity;

  static equals(a: Event_Payload_NoActivity | PlainMessage<Event_Payload_NoActivity> | undefined, b: Event_Payload_NoActivity | PlainMessage<Event_Payload_NoActivity> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.Payload.Activity
 */
export declare class Event_Payload_Activity extends Message<Event_Payload_Activity> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_Payload_Activity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.Payload.Activity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Payload_Activity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Payload_Activity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Payload_Activity;

  static equals(a: Event_Payload_Activity | PlainMessage<Event_Payload_Activity> | undefined, b: Event_Payload_Activity | PlainMessage<Event_Payload_Activity> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.Payload.ZoneOverstay
 */
export declare class Event_Payload_ZoneOverstay extends Message<Event_Payload_ZoneOverstay> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_Payload_ZoneOverstay>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.Payload.ZoneOverstay";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Payload_ZoneOverstay;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Payload_ZoneOverstay;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Payload_ZoneOverstay;

  static equals(a: Event_Payload_ZoneOverstay | PlainMessage<Event_Payload_ZoneOverstay> | undefined, b: Event_Payload_ZoneOverstay | PlainMessage<Event_Payload_ZoneOverstay> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.Payload.SimilarMovement
 */
export declare class Event_Payload_SimilarMovement extends Message<Event_Payload_SimilarMovement> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  /**
   * 0 = no similarity, 1 = maximum similarity
   *
   * @generated from field: float similarity = 3;
   */
  similarity: number;

  constructor(data?: PartialMessage<Event_Payload_SimilarMovement>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.Payload.SimilarMovement";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Payload_SimilarMovement;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Payload_SimilarMovement;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Payload_SimilarMovement;

  static equals(a: Event_Payload_SimilarMovement | PlainMessage<Event_Payload_SimilarMovement> | undefined, b: Event_Payload_SimilarMovement | PlainMessage<Event_Payload_SimilarMovement> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.Payload.ZoneVisit
 */
export declare class Event_Payload_ZoneVisit extends Message<Event_Payload_ZoneVisit> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_Payload_ZoneVisit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.Payload.ZoneVisit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Payload_ZoneVisit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Payload_ZoneVisit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Payload_ZoneVisit;

  static equals(a: Event_Payload_ZoneVisit | PlainMessage<Event_Payload_ZoneVisit> | undefined, b: Event_Payload_ZoneVisit | PlainMessage<Event_Payload_ZoneVisit> | undefined): boolean;
}

