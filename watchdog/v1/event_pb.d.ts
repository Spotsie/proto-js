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
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  /**
   * Type of the event
   *
   * @generated from oneof watchdog.v1.Event.payload
   */
  payload: {
    /**
     * @generated from field: watchdog.v1.Event.NoActivity no_activity = 10;
     */
    value: Event_NoActivity;
    case: "noActivity";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.Activity activity = 11;
     */
    value: Event_Activity;
    case: "activity";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.ZoneOverstay zone_overstay = 12;
     */
    value: Event_ZoneOverstay;
    case: "zoneOverstay";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.SimilarMovement similar_movement = 13;
     */
    value: Event_SimilarMovement;
    case: "similarMovement";
  } | {
    /**
     * @generated from field: watchdog.v1.Event.ZoneVisit zone_visit = 14;
     */
    value: Event_ZoneVisit;
    case: "zoneVisit";
  } | { case: undefined; value?: undefined };

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
 * @generated from message watchdog.v1.Event.NoActivity
 */
export declare class Event_NoActivity extends Message<Event_NoActivity> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_NoActivity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.NoActivity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_NoActivity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_NoActivity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_NoActivity;

  static equals(a: Event_NoActivity | PlainMessage<Event_NoActivity> | undefined, b: Event_NoActivity | PlainMessage<Event_NoActivity> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.Activity
 */
export declare class Event_Activity extends Message<Event_Activity> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_Activity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.Activity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Activity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Activity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Activity;

  static equals(a: Event_Activity | PlainMessage<Event_Activity> | undefined, b: Event_Activity | PlainMessage<Event_Activity> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.ZoneOverstay
 */
export declare class Event_ZoneOverstay extends Message<Event_ZoneOverstay> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_ZoneOverstay>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.ZoneOverstay";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_ZoneOverstay;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_ZoneOverstay;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_ZoneOverstay;

  static equals(a: Event_ZoneOverstay | PlainMessage<Event_ZoneOverstay> | undefined, b: Event_ZoneOverstay | PlainMessage<Event_ZoneOverstay> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.SimilarMovement
 */
export declare class Event_SimilarMovement extends Message<Event_SimilarMovement> {
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

  constructor(data?: PartialMessage<Event_SimilarMovement>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.SimilarMovement";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_SimilarMovement;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_SimilarMovement;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_SimilarMovement;

  static equals(a: Event_SimilarMovement | PlainMessage<Event_SimilarMovement> | undefined, b: Event_SimilarMovement | PlainMessage<Event_SimilarMovement> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Event.ZoneVisit
 */
export declare class Event_ZoneVisit extends Message<Event_ZoneVisit> {
  /**
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Event_ZoneVisit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Event.ZoneVisit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_ZoneVisit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_ZoneVisit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_ZoneVisit;

  static equals(a: Event_ZoneVisit | PlainMessage<Event_ZoneVisit> | undefined, b: Event_ZoneVisit | PlainMessage<Event_ZoneVisit> | undefined): boolean;
}

