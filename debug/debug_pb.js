// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file debug/debug.proto (package spotsie.debug.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";
import {BeaconObservationsEvent, SubjectLocationUpdateEvent} from "../event/event_pb.js";

/**
 * @generated from message spotsie.debug.v1.Tick
 */
export const Tick = proto3.makeMessageType(
  "spotsie.debug.v1.Tick",
  () => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "beacon_observations_events", kind: "message", T: BeaconObservationsEvent, repeated: true },
    { no: 3, name: "subject_location_update_events", kind: "message", T: SubjectLocationUpdateEvent, repeated: true },
  ],
);

