// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file domain/v1/domain.proto (package domain.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {Duration, proto3, Struct, Timestamp} from "@bufbuild/protobuf";

/**
 * Subject is an entity that is being tracked.
 *
 * @generated from message domain.v1.Subject
 */
export const Subject = proto3.makeMessageType(
  "domain.v1.Subject",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "namespace", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * Beacon device which emits BLE signals
 *
 * @generated from message domain.v1.Beacon
 */
export const Beacon = proto3.makeMessageType(
  "domain.v1.Beacon",
  () => [
    { no: 1, name: "major", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "minor", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * Beacon model
 *
 * @generated from message domain.v1.BeaconDto
 */
export const BeaconDto = proto3.makeMessageType(
  "domain.v1.BeaconDto",
  () => [
    { no: 1, name: "major", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "minor", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message domain.v1.BeaconPosition
 */
export const BeaconPosition = proto3.makeMessageType(
  "domain.v1.BeaconPosition",
  () => [
    { no: 1, name: "beacon", kind: "message", T: Beacon },
    { no: 2, name: "multilateration", kind: "message", T: MultilaterationPosition },
    { no: 3, name: "kalman", kind: "message", T: KalmanPosition },
    { no: 4, name: "tick", kind: "message", T: Tick },
  ],
);

/**
 * @generated from message domain.v1.MultilaterationPosition
 */
export const MultilaterationPosition = proto3.makeMessageType(
  "domain.v1.MultilaterationPosition",
  () => [
    { no: 1, name: "point", kind: "message", T: Point },
  ],
);

/**
 * @generated from message domain.v1.KalmanPosition
 */
export const KalmanPosition = proto3.makeMessageType(
  "domain.v1.KalmanPosition",
  () => [
    { no: 1, name: "raw_point", kind: "message", T: Point },
    { no: 2, name: "filtered_point", kind: "message", T: Point },
  ],
);

/**
 * TODO
 * Same as Observation, but with distance instead of rssi.
 *
 * @generated from message domain.v1.MeasurementDto
 */
export const MeasurementDto = proto3.makeMessageType(
  "domain.v1.MeasurementDto",
  [],
);

/**
 * Describes presence of a beacon observed by gateway at a point in time.
 *
 * @generated from message domain.v1.Observation
 */
export const Observation = proto3.makeMessageType(
  "domain.v1.Observation",
  () => [
    { no: 1, name: "observer_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "delta_microseconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "beacon", kind: "message", T: Beacon },
    { no: 5, name: "rssi", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * Describes presence of a gateway near a gateway at point in time. (used for calibration purposes)
 *
 * @generated from message domain.v1.GatewayObservationDto
 */
export const GatewayObservationDto = proto3.makeMessageType(
  "domain.v1.GatewayObservationDto",
  () => [
    { no: 2, name: "gateway_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "advertising_gateway_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "rssi", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "rssi_mean", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 8, name: "rssi_variance", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 9, name: "data", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * @generated from message domain.v1.Point
 */
export const Point = proto3.makeMessageType(
  "domain.v1.Point",
  () => [
    { no: 1, name: "x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "level_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message domain.v1.Polygon
 */
export const Polygon = proto3.makeMessageType(
  "domain.v1.Polygon",
  () => [
    { no: 1, name: "points", kind: "message", T: Point, repeated: true },
  ],
);

/**
 * @generated from message domain.v1.DeploymentDto
 */
export const DeploymentDto = proto3.makeMessageType(
  "domain.v1.DeploymentDto",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "config", kind: "message", T: DeploymentDto_Config },
    { no: 4, name: "avatar", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "gateways", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "map", kind: "message", T: DeploymentDto_Map },
    { no: 7, name: "api_keys", kind: "message", T: DeploymentDto_ApiKey, repeated: true },
    { no: 8, name: "beacon_major", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message domain.v1.DeploymentDto.ApiKey
 */
export const DeploymentDto_ApiKey = proto3.makeMessageType(
  "domain.v1.DeploymentDto.ApiKey",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "access_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "last_used_at", kind: "message", T: Timestamp },
  ],
  {localName: "DeploymentDto_ApiKey"},
);

/**
 * @generated from message domain.v1.DeploymentDto.Config
 */
export const DeploymentDto_Config = proto3.makeMessageType(
  "domain.v1.DeploymentDto.Config",
  () => [
    { no: 1, name: "tick_size", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "calibration_interval", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "pipeline_params", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 2 /* ScalarType.FLOAT */} },
    { no: 4, name: "beacon_major", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "DeploymentDto_Config"},
);

/**
 * Floor map of the deployment location
 *
 * @generated from message domain.v1.DeploymentDto.Map
 */
export const DeploymentDto_Map = proto3.makeMessageType(
  "domain.v1.DeploymentDto.Map",
  () => [
    { no: 1, name: "zones", kind: "message", T: DeploymentDto_Map_Zone, repeated: true },
    { no: 2, name: "feature_collection", kind: "message", T: FeatureCollection },
    { no: 3, name: "feature_collection_json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "DeploymentDto_Map"},
);

/**
 * @generated from message domain.v1.DeploymentDto.Map.Zone
 */
export const DeploymentDto_Map_Zone = proto3.makeMessageType(
  "domain.v1.DeploymentDto.Map.Zone",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "polygon", kind: "message", T: Polygon },
    { no: 5, name: "level", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "DeploymentDto_Map_Zone"},
);

/**
 * @generated from message domain.v1.Tick
 */
export const Tick = proto3.makeMessageType(
  "domain.v1.Tick",
  () => [
    { no: 1, name: "duration", kind: "message", T: Duration },
    { no: 2, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message domain.v1.FeatureCollection
 */
export const FeatureCollection = proto3.makeMessageType(
  "domain.v1.FeatureCollection",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "features", kind: "message", T: Feature, repeated: true },
  ],
);

/**
 * @generated from message domain.v1.Feature
 */
export const Feature = proto3.makeMessageType(
  "domain.v1.Feature",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "geometry", kind: "message", T: Geometry },
    { no: 4, name: "properties", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message domain.v1.Geometry
 */
export const Geometry = proto3.makeMessageType(
  "domain.v1.Geometry",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "coordinates", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 3, name: "geometries", kind: "message", T: Geometry, repeated: true },
  ],
);

/**
 * Internal type (consider moving to a package that is never exposed outside)
 *
 * @generated from message domain.v1.BeaconEvent
 */
export const BeaconEvent = proto3.makeMessageType(
  "domain.v1.BeaconEvent",
  () => [
    { no: 1, name: "time", kind: "message", T: Timestamp },
    { no: 2, name: "beacon", kind: "message", T: Beacon },
    { no: 3, name: "location_change", kind: "message", T: BeaconEvent_LocationChange, oneof: "event" },
    { no: 4, name: "speed_error", kind: "message", T: BeaconEvent_SpeedError, oneof: "event" },
    { no: 5, name: "gate_pass_error", kind: "message", T: BeaconEvent_GatePassError, oneof: "event" },
    { no: 6, name: "invalid_location_change", kind: "message", T: BeaconEvent_InvalidLocationChange, oneof: "event" },
  ],
);

/**
 * @generated from message domain.v1.BeaconEvent.LocationChange
 */
export const BeaconEvent_LocationChange = proto3.makeMessageType(
  "domain.v1.BeaconEvent.LocationChange",
  () => [
    { no: 1, name: "previous_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "BeaconEvent_LocationChange"},
);

/**
 * @generated from message domain.v1.BeaconEvent.SpeedError
 */
export const BeaconEvent_SpeedError = proto3.makeMessageType(
  "domain.v1.BeaconEvent.SpeedError",
  () => [
    { no: 1, name: "previous_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "speed", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "max_speed", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
  {localName: "BeaconEvent_SpeedError"},
);

/**
 * @generated from message domain.v1.BeaconEvent.GatePassError
 */
export const BeaconEvent_GatePassError = proto3.makeMessageType(
  "domain.v1.BeaconEvent.GatePassError",
  () => [
    { no: 2, name: "previous_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "BeaconEvent_GatePassError"},
);

/**
 * @generated from message domain.v1.BeaconEvent.InvalidLocationChange
 */
export const BeaconEvent_InvalidLocationChange = proto3.makeMessageType(
  "domain.v1.BeaconEvent.InvalidLocationChange",
  () => [
    { no: 2, name: "previous_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "BeaconEvent_InvalidLocationChange"},
);

/**
 * @generated from message domain.v1.User
 */
export const User = proto3.makeMessageType(
  "domain.v1.User",
  () => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message domain.v1.GeoPoint
 */
export const GeoPoint = proto3.makeMessageType(
  "domain.v1.GeoPoint",
  () => [
    { no: 1, name: "long", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "lat", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * @generated from message domain.v1.Test
 */
export const Test = proto3.makeMessageType(
  "domain.v1.Test",
  () => [
    { no: 1, name: "test", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "foo", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

