// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file domain/v1/domain.proto (package domain.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct, Timestamp} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * Subject is an entity that is being tracked.
 *
 * @generated from message domain.v1.Subject
 */
export declare class Subject extends Message<Subject> {
  /**
   * @generated from field: uint32 id = 1;
   */
  id: number;

  /**
   * Subject is scoped to a namespace (e.g organization)
   *
   * @generated from field: uint32 namespace = 2;
   */
  namespace: number;

  constructor(data?: PartialMessage<Subject>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Subject";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Subject;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Subject;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Subject;

  static equals(a: Subject | PlainMessage<Subject> | undefined, b: Subject | PlainMessage<Subject> | undefined): boolean;
}

/**
 * Beacon device which emits BLE signals
 *
 * @generated from message domain.v1.Beacon
 */
export declare class Beacon extends Message<Beacon> {
  /**
   * Namespace identifier
   *
   * @generated from field: uint32 major = 1;
   */
  major: number;

  /**
   * Resource/Entity identifier
   *
   * @generated from field: uint32 minor = 2;
   */
  minor: number;

  constructor(data?: PartialMessage<Beacon>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Beacon";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Beacon;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Beacon;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Beacon;

  static equals(a: Beacon | PlainMessage<Beacon> | undefined, b: Beacon | PlainMessage<Beacon> | undefined): boolean;
}

/**
 * Beacon model
 *
 * @generated from message domain.v1.BeaconDto
 */
export declare class BeaconDto extends Message<BeaconDto> {
  /**
   * Namespace identifier
   *
   * @generated from field: uint32 major = 1;
   */
  major: number;

  /**
   * Resource/Entity identifier
   *
   * @generated from field: uint32 minor = 2;
   */
  minor: number;

  /**
   * Labels
   *
   * @generated from field: map<string, string> labels = 3;
   */
  labels: { [key: string]: string };

  constructor(data?: PartialMessage<BeaconDto>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.BeaconDto";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconDto;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconDto;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconDto;

  static equals(a: BeaconDto | PlainMessage<BeaconDto> | undefined, b: BeaconDto | PlainMessage<BeaconDto> | undefined): boolean;
}

/**
 * @generated from message domain.v1.BeaconPosition
 */
export declare class BeaconPosition extends Message<BeaconPosition> {
  /**
   * @generated from field: domain.v1.Beacon beacon = 1;
   */
  beacon?: Beacon;

  /**
   * @generated from field: domain.v1.MultilaterationPosition multilateration = 2;
   */
  multilateration?: MultilaterationPosition;

  /**
   * @generated from field: domain.v1.KalmanPosition kalman = 3;
   */
  kalman?: KalmanPosition;

  /**
   * @generated from field: domain.v1.Tick tick = 4;
   */
  tick?: Tick;

  constructor(data?: PartialMessage<BeaconPosition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.BeaconPosition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconPosition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconPosition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconPosition;

  static equals(a: BeaconPosition | PlainMessage<BeaconPosition> | undefined, b: BeaconPosition | PlainMessage<BeaconPosition> | undefined): boolean;
}

/**
 * @generated from message domain.v1.MultilaterationPosition
 */
export declare class MultilaterationPosition extends Message<MultilaterationPosition> {
  /**
   * @generated from field: domain.v1.Point point = 1;
   */
  point?: Point;

  constructor(data?: PartialMessage<MultilaterationPosition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.MultilaterationPosition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultilaterationPosition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultilaterationPosition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultilaterationPosition;

  static equals(a: MultilaterationPosition | PlainMessage<MultilaterationPosition> | undefined, b: MultilaterationPosition | PlainMessage<MultilaterationPosition> | undefined): boolean;
}

/**
 * @generated from message domain.v1.KalmanPosition
 */
export declare class KalmanPosition extends Message<KalmanPosition> {
  /**
   * @generated from field: domain.v1.Point raw_point = 1;
   */
  rawPoint?: Point;

  /**
   * @generated from field: domain.v1.Point filtered_point = 2;
   */
  filteredPoint?: Point;

  constructor(data?: PartialMessage<KalmanPosition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.KalmanPosition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KalmanPosition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KalmanPosition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KalmanPosition;

  static equals(a: KalmanPosition | PlainMessage<KalmanPosition> | undefined, b: KalmanPosition | PlainMessage<KalmanPosition> | undefined): boolean;
}

/**
 * TODO
 * Same as Observation, but with distance instead of rssi.
 *
 * @generated from message domain.v1.MeasurementDto
 */
export declare class MeasurementDto extends Message<MeasurementDto> {
  constructor(data?: PartialMessage<MeasurementDto>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.MeasurementDto";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasurementDto;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasurementDto;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasurementDto;

  static equals(a: MeasurementDto | PlainMessage<MeasurementDto> | undefined, b: MeasurementDto | PlainMessage<MeasurementDto> | undefined): boolean;
}

/**
 * Describes presence of a beacon observed by gateway at a point in time.
 *
 * @generated from message domain.v1.Observation
 */
export declare class Observation extends Message<Observation> {
  /**
   * Device that performed the observation
   *
   * @generated from field: uint64 observer_id = 1;
   */
  observerId: bigint;

  /**
   * Unix timestamp
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * Offset in microseconds from timestamp
   *
   * @generated from field: int32 delta_microseconds = 3;
   */
  deltaMicroseconds: number;

  /**
   * Observed beacon
   *
   * @generated from field: domain.v1.Beacon beacon = 4;
   */
  beacon?: Beacon;

  /**
   * Received signal strength indicator
   *
   * @generated from field: int32 rssi = 5;
   */
  rssi: number;

  constructor(data?: PartialMessage<Observation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Observation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Observation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Observation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Observation;

  static equals(a: Observation | PlainMessage<Observation> | undefined, b: Observation | PlainMessage<Observation> | undefined): boolean;
}

/**
 * Describes presence of a gateway near a gateway at point in time. (used for calibration purposes)
 *
 * @generated from message domain.v1.GatewayObservationDto
 */
export declare class GatewayObservationDto extends Message<GatewayObservationDto> {
  /**
   * @generated from field: uint64 gateway_id = 2;
   */
  gatewayId: bigint;

  /**
   * @generated from field: uint64 advertising_gateway_id = 3;
   */
  advertisingGatewayId: bigint;

  /**
   * @generated from field: int64 timestamp = 4;
   */
  timestamp: bigint;

  /**
   * @generated from field: int32 rssi = 5;
   */
  rssi: number;

  /**
   * @generated from field: uint32 count = 6;
   */
  count: number;

  /**
   * @generated from field: double rssi_mean = 7;
   */
  rssiMean: number;

  /**
   * @generated from field: double rssi_variance = 8;
   */
  rssiVariance: number;

  /**
   * @generated from field: repeated int32 data = 9;
   */
  data: number[];

  constructor(data?: PartialMessage<GatewayObservationDto>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.GatewayObservationDto";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GatewayObservationDto;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GatewayObservationDto;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GatewayObservationDto;

  static equals(a: GatewayObservationDto | PlainMessage<GatewayObservationDto> | undefined, b: GatewayObservationDto | PlainMessage<GatewayObservationDto> | undefined): boolean;
}

/**
 * @generated from message domain.v1.Point
 */
export declare class Point extends Message<Point> {
  /**
   * @generated from field: float x = 1;
   */
  x: number;

  /**
   * @generated from field: float y = 2;
   */
  y: number;

  /**
   * @generated from field: int32 level_id = 3;
   */
  levelId: number;

  constructor(data?: PartialMessage<Point>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Point";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Point;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Point;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Point;

  static equals(a: Point | PlainMessage<Point> | undefined, b: Point | PlainMessage<Point> | undefined): boolean;
}

/**
 * @generated from message domain.v1.Polygon
 */
export declare class Polygon extends Message<Polygon> {
  /**
   * @generated from field: repeated domain.v1.Point points = 1;
   */
  points: Point[];

  constructor(data?: PartialMessage<Polygon>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Polygon";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Polygon;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Polygon;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Polygon;

  static equals(a: Polygon | PlainMessage<Polygon> | undefined, b: Polygon | PlainMessage<Polygon> | undefined): boolean;
}

/**
 * @generated from message domain.v1.DeploymentDto
 */
export declare class DeploymentDto extends Message<DeploymentDto> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: domain.v1.DeploymentDto.Config config = 3;
   */
  config?: DeploymentDto_Config;

  /**
   * @generated from field: string avatar = 4;
   */
  avatar: string;

  /**
   * @generated from field: repeated string gateways = 5;
   */
  gateways: string[];

  /**
   * @generated from field: domain.v1.DeploymentDto.Map map = 6;
   */
  map?: DeploymentDto_Map;

  /**
   * @generated from field: repeated domain.v1.DeploymentDto.ApiKey api_keys = 7;
   */
  apiKeys: DeploymentDto_ApiKey[];

  /**
   * @generated from field: int32 beacon_major = 8;
   */
  beaconMajor: number;

  constructor(data?: PartialMessage<DeploymentDto>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.DeploymentDto";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentDto;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentDto;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentDto;

  static equals(a: DeploymentDto | PlainMessage<DeploymentDto> | undefined, b: DeploymentDto | PlainMessage<DeploymentDto> | undefined): boolean;
}

/**
 * @generated from message domain.v1.DeploymentDto.ApiKey
 */
export declare class DeploymentDto_ApiKey extends Message<DeploymentDto_ApiKey> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string access_key = 3;
   */
  accessKey: string;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_used_at = 5;
   */
  lastUsedAt?: Timestamp;

  constructor(data?: PartialMessage<DeploymentDto_ApiKey>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.DeploymentDto.ApiKey";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentDto_ApiKey;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentDto_ApiKey;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentDto_ApiKey;

  static equals(a: DeploymentDto_ApiKey | PlainMessage<DeploymentDto_ApiKey> | undefined, b: DeploymentDto_ApiKey | PlainMessage<DeploymentDto_ApiKey> | undefined): boolean;
}

/**
 * @generated from message domain.v1.DeploymentDto.Config
 */
export declare class DeploymentDto_Config extends Message<DeploymentDto_Config> {
  /**
   * Tick size in msec
   *
   * @generated from field: float tick_size = 1;
   */
  tickSize: number;

  /**
   * @generated from field: float calibration_interval = 2;
   */
  calibrationInterval: number;

  /**
   * @generated from field: map<string, float> pipeline_params = 3;
   */
  pipelineParams: { [key: string]: number };

  /**
   * @generated from field: int32 beacon_major = 4;
   */
  beaconMajor: number;

  constructor(data?: PartialMessage<DeploymentDto_Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.DeploymentDto.Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentDto_Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentDto_Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentDto_Config;

  static equals(a: DeploymentDto_Config | PlainMessage<DeploymentDto_Config> | undefined, b: DeploymentDto_Config | PlainMessage<DeploymentDto_Config> | undefined): boolean;
}

/**
 * Floor map of the deployment location
 *
 * @generated from message domain.v1.DeploymentDto.Map
 */
export declare class DeploymentDto_Map extends Message<DeploymentDto_Map> {
  /**
   * @generated from field: repeated domain.v1.DeploymentDto.Map.Zone zones = 1;
   */
  zones: DeploymentDto_Map_Zone[];

  /**
   * @generated from field: domain.v1.FeatureCollection feature_collection = 2;
   */
  featureCollection?: FeatureCollection;

  /**
   * @generated from field: string feature_collection_json = 3;
   */
  featureCollectionJson: string;

  constructor(data?: PartialMessage<DeploymentDto_Map>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.DeploymentDto.Map";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentDto_Map;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentDto_Map;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentDto_Map;

  static equals(a: DeploymentDto_Map | PlainMessage<DeploymentDto_Map> | undefined, b: DeploymentDto_Map | PlainMessage<DeploymentDto_Map> | undefined): boolean;
}

/**
 * @generated from message domain.v1.DeploymentDto.Map.Zone
 */
export declare class DeploymentDto_Map_Zone extends Message<DeploymentDto_Map_Zone> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string code = 2;
   */
  code: string;

  /**
   * @generated from field: string color = 3;
   */
  color: string;

  /**
   * @generated from field: domain.v1.Polygon polygon = 4;
   */
  polygon?: Polygon;

  /**
   * @generated from field: int32 level = 5;
   */
  level: number;

  constructor(data?: PartialMessage<DeploymentDto_Map_Zone>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.DeploymentDto.Map.Zone";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentDto_Map_Zone;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentDto_Map_Zone;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentDto_Map_Zone;

  static equals(a: DeploymentDto_Map_Zone | PlainMessage<DeploymentDto_Map_Zone> | undefined, b: DeploymentDto_Map_Zone | PlainMessage<DeploymentDto_Map_Zone> | undefined): boolean;
}

/**
 * @generated from message domain.v1.Tick
 */
export declare class Tick extends Message<Tick> {
  /**
   * Duration of a tick
   *
   * @generated from field: google.protobuf.Duration duration = 1;
   */
  duration?: Duration;

  /**
   * @generated from field: int32 value = 2;
   */
  value: number;

  constructor(data?: PartialMessage<Tick>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Tick";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tick;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tick;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tick;

  static equals(a: Tick | PlainMessage<Tick> | undefined, b: Tick | PlainMessage<Tick> | undefined): boolean;
}

/**
 * @generated from message domain.v1.FeatureCollection
 */
export declare class FeatureCollection extends Message<FeatureCollection> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * @generated from field: repeated domain.v1.Feature features = 2;
   */
  features: Feature[];

  constructor(data?: PartialMessage<FeatureCollection>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.FeatureCollection";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeatureCollection;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeatureCollection;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeatureCollection;

  static equals(a: FeatureCollection | PlainMessage<FeatureCollection> | undefined, b: FeatureCollection | PlainMessage<FeatureCollection> | undefined): boolean;
}

/**
 * @generated from message domain.v1.Feature
 */
export declare class Feature extends Message<Feature> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * @generated from field: domain.v1.Geometry geometry = 3;
   */
  geometry?: Geometry;

  /**
   * @generated from field: google.protobuf.Struct properties = 4;
   */
  properties?: Struct;

  constructor(data?: PartialMessage<Feature>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Feature";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Feature;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Feature;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Feature;

  static equals(a: Feature | PlainMessage<Feature> | undefined, b: Feature | PlainMessage<Feature> | undefined): boolean;
}

/**
 * @generated from message domain.v1.Geometry
 */
export declare class Geometry extends Message<Geometry> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * @generated from field: repeated double coordinates = 4;
   */
  coordinates: number[];

  /**
   * @generated from field: repeated domain.v1.Geometry geometries = 3;
   */
  geometries: Geometry[];

  constructor(data?: PartialMessage<Geometry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Geometry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Geometry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Geometry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Geometry;

  static equals(a: Geometry | PlainMessage<Geometry> | undefined, b: Geometry | PlainMessage<Geometry> | undefined): boolean;
}

/**
 * Internal type (consider moving to a package that is never exposed outside)
 *
 * @generated from message domain.v1.BeaconEvent
 */
export declare class BeaconEvent extends Message<BeaconEvent> {
  /**
   * @generated from field: google.protobuf.Timestamp time = 1;
   */
  time?: Timestamp;

  /**
   * @generated from field: domain.v1.Beacon beacon = 2;
   */
  beacon?: Beacon;

  /**
   * @generated from oneof domain.v1.BeaconEvent.event
   */
  event: {
    /**
     * @generated from field: domain.v1.BeaconEvent.LocationChange location_change = 3;
     */
    value: BeaconEvent_LocationChange;
    case: "locationChange";
  } | {
    /**
     * @generated from field: domain.v1.BeaconEvent.SpeedError speed_error = 4;
     */
    value: BeaconEvent_SpeedError;
    case: "speedError";
  } | {
    /**
     * @generated from field: domain.v1.BeaconEvent.GatePassError gate_pass_error = 5;
     */
    value: BeaconEvent_GatePassError;
    case: "gatePassError";
  } | {
    /**
     * @generated from field: domain.v1.BeaconEvent.InvalidLocationChange invalid_location_change = 6;
     */
    value: BeaconEvent_InvalidLocationChange;
    case: "invalidLocationChange";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<BeaconEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.BeaconEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconEvent;

  static equals(a: BeaconEvent | PlainMessage<BeaconEvent> | undefined, b: BeaconEvent | PlainMessage<BeaconEvent> | undefined): boolean;
}

/**
 * @generated from message domain.v1.BeaconEvent.LocationChange
 */
export declare class BeaconEvent_LocationChange extends Message<BeaconEvent_LocationChange> {
  /**
   * @generated from field: string previous_zone = 1;
   */
  previousZone: string;

  /**
   * @generated from field: string zone = 2;
   */
  zone: string;

  constructor(data?: PartialMessage<BeaconEvent_LocationChange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.BeaconEvent.LocationChange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconEvent_LocationChange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconEvent_LocationChange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconEvent_LocationChange;

  static equals(a: BeaconEvent_LocationChange | PlainMessage<BeaconEvent_LocationChange> | undefined, b: BeaconEvent_LocationChange | PlainMessage<BeaconEvent_LocationChange> | undefined): boolean;
}

/**
 * @generated from message domain.v1.BeaconEvent.SpeedError
 */
export declare class BeaconEvent_SpeedError extends Message<BeaconEvent_SpeedError> {
  /**
   * @generated from field: string previous_zone = 1;
   */
  previousZone: string;

  /**
   * @generated from field: string zone = 2;
   */
  zone: string;

  /**
   * @generated from field: float speed = 4;
   */
  speed: number;

  /**
   * @generated from field: float max_speed = 5;
   */
  maxSpeed: number;

  constructor(data?: PartialMessage<BeaconEvent_SpeedError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.BeaconEvent.SpeedError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconEvent_SpeedError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconEvent_SpeedError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconEvent_SpeedError;

  static equals(a: BeaconEvent_SpeedError | PlainMessage<BeaconEvent_SpeedError> | undefined, b: BeaconEvent_SpeedError | PlainMessage<BeaconEvent_SpeedError> | undefined): boolean;
}

/**
 * @generated from message domain.v1.BeaconEvent.GatePassError
 */
export declare class BeaconEvent_GatePassError extends Message<BeaconEvent_GatePassError> {
  /**
   * @generated from field: string previous_zone = 2;
   */
  previousZone: string;

  /**
   * @generated from field: string zone = 3;
   */
  zone: string;

  constructor(data?: PartialMessage<BeaconEvent_GatePassError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.BeaconEvent.GatePassError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconEvent_GatePassError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconEvent_GatePassError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconEvent_GatePassError;

  static equals(a: BeaconEvent_GatePassError | PlainMessage<BeaconEvent_GatePassError> | undefined, b: BeaconEvent_GatePassError | PlainMessage<BeaconEvent_GatePassError> | undefined): boolean;
}

/**
 * @generated from message domain.v1.BeaconEvent.InvalidLocationChange
 */
export declare class BeaconEvent_InvalidLocationChange extends Message<BeaconEvent_InvalidLocationChange> {
  /**
   * @generated from field: string previous_zone = 2;
   */
  previousZone: string;

  /**
   * @generated from field: string zone = 3;
   */
  zone: string;

  constructor(data?: PartialMessage<BeaconEvent_InvalidLocationChange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.BeaconEvent.InvalidLocationChange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconEvent_InvalidLocationChange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconEvent_InvalidLocationChange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconEvent_InvalidLocationChange;

  static equals(a: BeaconEvent_InvalidLocationChange | PlainMessage<BeaconEvent_InvalidLocationChange> | undefined, b: BeaconEvent_InvalidLocationChange | PlainMessage<BeaconEvent_InvalidLocationChange> | undefined): boolean;
}

/**
 * @generated from message domain.v1.User
 */
export declare class User extends Message<User> {
  /**
   * @generated from field: string first_name = 1;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 2;
   */
  lastName: string;

  /**
   * @generated from field: string email = 3;
   */
  email: string;

  /**
   * @generated from field: string phone = 4;
   */
  phone: string;

  constructor(data?: PartialMessage<User>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.User";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}

/**
 * @generated from message domain.v1.GeoPoint
 */
export declare class GeoPoint extends Message<GeoPoint> {
  /**
   * @generated from field: float long = 1;
   */
  long: number;

  /**
   * @generated from field: float lat = 2;
   */
  lat: number;

  constructor(data?: PartialMessage<GeoPoint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.GeoPoint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoPoint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoPoint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoPoint;

  static equals(a: GeoPoint | PlainMessage<GeoPoint> | undefined, b: GeoPoint | PlainMessage<GeoPoint> | undefined): boolean;
}

/**
 * @generated from message domain.v1.Test
 */
export declare class Test extends Message<Test> {
  /**
   * @generated from field: int32 test = 1;
   */
  test: number;

  /**
   * @generated from field: int32 foo = 2;
   */
  foo: number;

  /**
   * @generated from field: int32 bar = 3;
   */
  bar: number;

  /**
   * @generated from field: int32 a = 4;
   */
  a: number;

  constructor(data?: PartialMessage<Test>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "domain.v1.Test";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Test;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Test;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Test;

  static equals(a: Test | PlainMessage<Test> | undefined, b: Test | PlainMessage<Test> | undefined): boolean;
}

