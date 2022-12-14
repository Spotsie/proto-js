// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file event/v1/event.proto (package event.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";
import {Beacon, DeploymentDto, GeoPoint, Observation, Subject} from "../../domain/v1/domain_pb.js";

/**
 * @generated from message event.v1.BeaconObservationsEvent
 */
export const BeaconObservationsEvent = proto3.makeMessageType(
  "event.v1.BeaconObservationsEvent",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "beacon", kind: "message", T: Beacon },
    { no: 3, name: "observations", kind: "message", T: Observation, repeated: true },
  ],
);

/**
 * Single beacon observation event (gateway -> beacon)
 *
 * @generated from message event.v1.BeaconObservationEvent
 */
export const BeaconObservationEvent = proto3.makeMessageType(
  "event.v1.BeaconObservationEvent",
  () => [
    { no: 1, name: "observation", kind: "message", T: Observation },
  ],
);

/**
 * @generated from message event.v1.SubjectLocationUpdateEvent
 */
export const SubjectLocationUpdateEvent = proto3.makeMessageType(
  "event.v1.SubjectLocationUpdateEvent",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "location_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "point", kind: "message", T: GeoPoint, opt: true },
  ],
);

/**
 * @generated from message event.v1.DeploymentCreatedEvent
 */
export const DeploymentCreatedEvent = proto3.makeMessageType(
  "event.v1.DeploymentCreatedEvent",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "model", kind: "message", T: DeploymentDto },
  ],
);

/**
 * @generated from message event.v1.DeploymentDeletedEvent
 */
export const DeploymentDeletedEvent = proto3.makeMessageType(
  "event.v1.DeploymentDeletedEvent",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message event.v1.DeploymentUpdatedEvent
 */
export const DeploymentUpdatedEvent = proto3.makeMessageType(
  "event.v1.DeploymentUpdatedEvent",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "model", kind: "message", T: DeploymentDto },
  ],
);

/**
 * @generated from message event.v1.DeviceDiscovery
 */
export const DeviceDiscovery = proto3.makeMessageType(
  "event.v1.DeviceDiscovery",
  () => [
    { no: 1, name: "deployment_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "model", kind: "message", T: DeploymentDto },
  ],
);

