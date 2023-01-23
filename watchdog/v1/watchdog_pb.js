// @generated by protoc-gen-es v1.0.0 with parameter "target=js+dts"
// @generated from file watchdog/v1/watchdog.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message watchdog.v1.Job
 */
export const Job = proto3.makeMessageType(
  "watchdog.v1.Job",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "namespace_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "subject_group_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "config", kind: "message", T: Job_Config },
  ],
);

/**
 * @generated from message watchdog.v1.Job.Config
 */
export const Job_Config = proto3.makeMessageType(
  "watchdog.v1.Job.Config",
  () => [
    { no: 10, name: "no_activity", kind: "message", T: Job_Config_NoActivity, oneof: "kind" },
    { no: 11, name: "activity", kind: "message", T: Job_Config_Activity, oneof: "kind" },
    { no: 12, name: "similar_movement", kind: "message", T: Job_Config_SimilarMovement, oneof: "kind" },
    { no: 13, name: "zone_overstay", kind: "message", T: Job_Config_ZoneOverstay, oneof: "kind" },
  ],
  {localName: "Job_Config"},
);

/**
 * @generated from message watchdog.v1.Job.Config.NoActivity
 */
export const Job_Config_NoActivity = proto3.makeMessageType(
  "watchdog.v1.Job.Config.NoActivity",
  () => [
    { no: 1, name: "duration_threshold", kind: "message", T: Duration },
  ],
  {localName: "Job_Config_NoActivity"},
);

/**
 * @generated from message watchdog.v1.Job.Config.Activity
 */
export const Job_Config_Activity = proto3.makeMessageType(
  "watchdog.v1.Job.Config.Activity",
  [],
  {localName: "Job_Config_Activity"},
);

/**
 * @generated from message watchdog.v1.Job.Config.SimilarMovement
 */
export const Job_Config_SimilarMovement = proto3.makeMessageType(
  "watchdog.v1.Job.Config.SimilarMovement",
  [],
  {localName: "Job_Config_SimilarMovement"},
);

/**
 * @generated from message watchdog.v1.Job.Config.ZoneOverstay
 */
export const Job_Config_ZoneOverstay = proto3.makeMessageType(
  "watchdog.v1.Job.Config.ZoneOverstay",
  () => [
    { no: 1, name: "duration_threshold", kind: "message", T: Duration },
  ],
  {localName: "Job_Config_ZoneOverstay"},
);

