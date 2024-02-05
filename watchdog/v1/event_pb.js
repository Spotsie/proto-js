// @generated by protoc-gen-es v1.3.1
// @generated from file watchdog/v1/event.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Subject } from "../../domain/v1/domain_pb.js";

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
    { no: 7, name: "start_time", kind: "message", T: Timestamp },
    { no: 8, name: "end_time", kind: "message", T: Timestamp },
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
    { no: 15, name: "no_movement", kind: "message", T: Event_Payload_NoMovement, oneof: "payload" },
    { no: 16, name: "temperature_limit", kind: "message", T: Event_Payload_TemperatureLimit, oneof: "payload" },
    { no: 17, name: "low_battery", kind: "message", T: Event_Payload_LowBattery, oneof: "payload" },
    { no: 18, name: "button_press", kind: "message", T: Event_Payload_ButtonPress, oneof: "payload" },
  ],
  {localName: "Event_Payload"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.NoActivity
 */
export const Event_Payload_NoActivity = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.NoActivity",
  [],
  {localName: "Event_Payload_NoActivity"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.Activity
 */
export const Event_Payload_Activity = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.Activity",
  [],
  {localName: "Event_Payload_Activity"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.ZoneOverstay
 */
export const Event_Payload_ZoneOverstay = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.ZoneOverstay",
  [],
  {localName: "Event_Payload_ZoneOverstay"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.SimilarMovement
 */
export const Event_Payload_SimilarMovement = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.SimilarMovement",
  () => [
    { no: 1, name: "similarity", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
  {localName: "Event_Payload_SimilarMovement"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.ZoneVisit
 */
export const Event_Payload_ZoneVisit = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.ZoneVisit",
  [],
  {localName: "Event_Payload_ZoneVisit"},
);

/**
 * beacon did not move for a certain period of time
 *
 * @generated from message watchdog.v1.Event.Payload.NoMovement
 */
export const Event_Payload_NoMovement = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.NoMovement",
  [],
  {localName: "Event_Payload_NoMovement"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.TemperatureLimit
 */
export const Event_Payload_TemperatureLimit = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.TemperatureLimit",
  () => [
    { no: 1, name: "max_allowed_temperature", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "min_allowed_temperature", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "max", kind: "message", T: Event_Payload_TemperatureLimit_MaxViolation, oneof: "violation" },
    { no: 4, name: "min", kind: "message", T: Event_Payload_TemperatureLimit_MinViolation, oneof: "violation" },
  ],
  {localName: "Event_Payload_TemperatureLimit"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.TemperatureLimit.MaxViolation
 */
export const Event_Payload_TemperatureLimit_MaxViolation = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.TemperatureLimit.MaxViolation",
  () => [
    { no: 1, name: "max_measured_celsius", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "Event_Payload_TemperatureLimit_MaxViolation"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.TemperatureLimit.MinViolation
 */
export const Event_Payload_TemperatureLimit_MinViolation = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.TemperatureLimit.MinViolation",
  () => [
    { no: 1, name: "min_measured_celsius", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "Event_Payload_TemperatureLimit_MinViolation"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.LowBattery
 */
export const Event_Payload_LowBattery = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.LowBattery",
  () => [
    { no: 1, name: "voltage", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
  {localName: "Event_Payload_LowBattery"},
);

/**
 * @generated from message watchdog.v1.Event.Payload.ButtonPress
 */
export const Event_Payload_ButtonPress = proto3.makeMessageType(
  "watchdog.v1.Event.Payload.ButtonPress",
  [],
  {localName: "Event_Payload_ButtonPress"},
);

