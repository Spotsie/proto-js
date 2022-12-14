// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file watchdog/v1/event.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";
import {Subject} from "../../domain/v1/domain_pb.js";

/**
 * @generated from message watchdog.v1.Event
 */
export const Event = proto3.makeMessageType(
  "watchdog.v1.Event",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "created_by_job", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "affected_subjects", kind: "message", T: Subject, repeated: true },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "updated_at", kind: "message", T: Timestamp },
    { no: 6, name: "payload", kind: "message", T: Event_Payload },
  ],
);

/**
 * @generated from message watchdog.v1.Event.Payload
 */
export const Event_Payload = proto3.makeMessageType(
  "watchdog.v1.Event.Payload",
  () => [
    { no: 10, name: "no_activity", kind: "message", T: Event_Payload_NoActivity, oneof: "payload" },
    { no: 11, name: "activity", kind: "message", T: Event_Payload_Activity, oneof: "payload" },
    { no: 12, name: "zone_overstay", kind: "message", T: Event_Payload_ZoneOverstay, oneof: "payload" },
    { no: 13, name: "similar_movement", kind: "message", T: Event_Payload_SimilarMovement, oneof: "payload" },
    { no: 14, name: "zone_visit", kind: "message", T: Event_Payload_ZoneVisit, oneof: "payload" },
  ],
  {localName: "Event_Payload"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.NoActivity
 */
export const Event_Payload_NoActivity = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.NoActivity",
  () => [
    { no: 1, name: "start_time", kind: "message", T: Timestamp },
    { no: 2, name: "end_time", kind: "message", T: Timestamp },
  ],
  {localName: "Event_Payload_NoActivity"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.Activity
 */
export const Event_Payload_Activity = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.Activity",
  () => [
    { no: 1, name: "start_time", kind: "message", T: Timestamp },
    { no: 2, name: "end_time", kind: "message", T: Timestamp },
  ],
  {localName: "Event_Payload_Activity"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.ZoneOverstay
 */
export const Event_Payload_ZoneOverstay = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.ZoneOverstay",
  () => [
    { no: 1, name: "start_time", kind: "message", T: Timestamp },
    { no: 2, name: "end_time", kind: "message", T: Timestamp },
  ],
  {localName: "Event_Payload_ZoneOverstay"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.SimilarMovement
 */
export const Event_Payload_SimilarMovement = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.SimilarMovement",
  () => [
    { no: 1, name: "start_time", kind: "message", T: Timestamp },
    { no: 2, name: "end_time", kind: "message", T: Timestamp },
    { no: 3, name: "similarity", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
  {localName: "Event_Payload_SimilarMovement"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.ZoneVisit
 */
export const Event_Payload_ZoneVisit = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.ZoneVisit",
  () => [
    { no: 1, name: "start_time", kind: "message", T: Timestamp },
    { no: 2, name: "end_time", kind: "message", T: Timestamp },
  ],
  {localName: "Event_Payload_ZoneVisit"},
);

