// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file debug/debug.proto (package spotsie.debug.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {BeaconObservationsEvent, SubjectLocationUpdateEvent} from "../event/event_pb.js";

/**
 * @generated from message spotsie.debug.v1.Tick
 */
export declare class Tick extends Message<Tick> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: repeated spotsie.event.v1.BeaconObservationsEvent beacon_observations_events = 2;
   */
  beaconObservationsEvents: BeaconObservationsEvent[];

  /**
   * @generated from field: repeated spotsie.event.v1.SubjectLocationUpdateEvent subject_location_update_events = 3;
   */
  subjectLocationUpdateEvents: SubjectLocationUpdateEvent[];

  constructor(data?: PartialMessage<Tick>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spotsie.debug.v1.Tick";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tick;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tick;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tick;

  static equals(a: Tick | PlainMessage<Tick> | undefined, b: Tick | PlainMessage<Tick> | undefined): boolean;
}

