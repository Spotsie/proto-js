// @generated by protoc-gen-es v1.3.0
// @generated from file event/v1/event.proto (package event.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Beacon, DeploymentDto, Observation, Subject, TimePeriod } from "../../domain/v1/domain_pb.js";
import type { LocationRecord } from "../../location/v1/location_pb.js";
import type { BatteryTelemetry, TemperatureTelemetry } from "../../subject/v1/subject_pb.js";

/**
 * @generated from message event.v1.BeaconObservationsEvent
 */
export declare class BeaconObservationsEvent extends Message<BeaconObservationsEvent> {
  /**
   * @generated from field: uint32 deployment_id = 1;
   */
  deploymentId: number;

  /**
   * @generated from field: domain.v1.Beacon beacon = 2;
   */
  beacon?: Beacon;

  /**
   * @generated from field: repeated domain.v1.Observation observations = 3;
   */
  observations: Observation[];

  /**
   * @generated from field: domain.v1.TimePeriod time = 4;
   */
  time?: TimePeriod;

  constructor(data?: PartialMessage<BeaconObservationsEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.BeaconObservationsEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconObservationsEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconObservationsEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconObservationsEvent;

  static equals(a: BeaconObservationsEvent | PlainMessage<BeaconObservationsEvent> | undefined, b: BeaconObservationsEvent | PlainMessage<BeaconObservationsEvent> | undefined): boolean;
}

/**
 * Single beacon observation event (gateway -> beacon)
 *
 * @generated from message event.v1.BeaconObservationEvent
 */
export declare class BeaconObservationEvent extends Message<BeaconObservationEvent> {
  /**
   * @generated from field: domain.v1.Observation observation = 1;
   */
  observation?: Observation;

  constructor(data?: PartialMessage<BeaconObservationEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.BeaconObservationEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BeaconObservationEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BeaconObservationEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BeaconObservationEvent;

  static equals(a: BeaconObservationEvent | PlainMessage<BeaconObservationEvent> | undefined, b: BeaconObservationEvent | PlainMessage<BeaconObservationEvent> | undefined): boolean;
}

/**
 * @generated from message event.v1.SubjectLocationUpdateEvent
 */
export declare class SubjectLocationUpdateEvent extends Message<SubjectLocationUpdateEvent> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  /**
   * @generated from field: location.v1.LocationRecord location_record = 2;
   */
  locationRecord?: LocationRecord;

  constructor(data?: PartialMessage<SubjectLocationUpdateEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.SubjectLocationUpdateEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubjectLocationUpdateEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubjectLocationUpdateEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubjectLocationUpdateEvent;

  static equals(a: SubjectLocationUpdateEvent | PlainMessage<SubjectLocationUpdateEvent> | undefined, b: SubjectLocationUpdateEvent | PlainMessage<SubjectLocationUpdateEvent> | undefined): boolean;
}

/**
 * @generated from message event.v1.DeploymentCreatedEvent
 */
export declare class DeploymentCreatedEvent extends Message<DeploymentCreatedEvent> {
  /**
   * @generated from field: uint32 deployment_id = 1;
   */
  deploymentId: number;

  /**
   * @generated from field: domain.v1.DeploymentDto model = 2;
   */
  model?: DeploymentDto;

  constructor(data?: PartialMessage<DeploymentCreatedEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.DeploymentCreatedEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentCreatedEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentCreatedEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentCreatedEvent;

  static equals(a: DeploymentCreatedEvent | PlainMessage<DeploymentCreatedEvent> | undefined, b: DeploymentCreatedEvent | PlainMessage<DeploymentCreatedEvent> | undefined): boolean;
}

/**
 * @generated from message event.v1.DeploymentDeletedEvent
 */
export declare class DeploymentDeletedEvent extends Message<DeploymentDeletedEvent> {
  /**
   * @generated from field: uint32 deployment_id = 1;
   */
  deploymentId: number;

  constructor(data?: PartialMessage<DeploymentDeletedEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.DeploymentDeletedEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentDeletedEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentDeletedEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentDeletedEvent;

  static equals(a: DeploymentDeletedEvent | PlainMessage<DeploymentDeletedEvent> | undefined, b: DeploymentDeletedEvent | PlainMessage<DeploymentDeletedEvent> | undefined): boolean;
}

/**
 * @generated from message event.v1.DeploymentUpdatedEvent
 */
export declare class DeploymentUpdatedEvent extends Message<DeploymentUpdatedEvent> {
  /**
   * @generated from field: uint32 deployment_id = 1;
   */
  deploymentId: number;

  /**
   * @generated from field: domain.v1.DeploymentDto model = 2;
   */
  model?: DeploymentDto;

  constructor(data?: PartialMessage<DeploymentUpdatedEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.DeploymentUpdatedEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentUpdatedEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentUpdatedEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentUpdatedEvent;

  static equals(a: DeploymentUpdatedEvent | PlainMessage<DeploymentUpdatedEvent> | undefined, b: DeploymentUpdatedEvent | PlainMessage<DeploymentUpdatedEvent> | undefined): boolean;
}

/**
 * @generated from message event.v1.DeviceDiscovery
 */
export declare class DeviceDiscovery extends Message<DeviceDiscovery> {
  /**
   * @generated from field: uint32 deployment_id = 1;
   */
  deploymentId: number;

  /**
   * @generated from field: domain.v1.DeploymentDto model = 2;
   */
  model?: DeploymentDto;

  constructor(data?: PartialMessage<DeviceDiscovery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.DeviceDiscovery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeviceDiscovery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeviceDiscovery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeviceDiscovery;

  static equals(a: DeviceDiscovery | PlainMessage<DeviceDiscovery> | undefined, b: DeviceDiscovery | PlainMessage<DeviceDiscovery> | undefined): boolean;
}

/**
 * Produced by timeline service
 *
 * @generated from message event.v1.SubjectLocationSpanUpdateEvent
 */
export declare class SubjectLocationSpanUpdateEvent extends Message<SubjectLocationSpanUpdateEvent> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  constructor(data?: PartialMessage<SubjectLocationSpanUpdateEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.SubjectLocationSpanUpdateEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubjectLocationSpanUpdateEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubjectLocationSpanUpdateEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubjectLocationSpanUpdateEvent;

  static equals(a: SubjectLocationSpanUpdateEvent | PlainMessage<SubjectLocationSpanUpdateEvent> | undefined, b: SubjectLocationSpanUpdateEvent | PlainMessage<SubjectLocationSpanUpdateEvent> | undefined): boolean;
}

/**
 * @generated from message event.v1.SubjectTelemetryEvent
 */
export declare class SubjectTelemetryEvent extends Message<SubjectTelemetryEvent> {
  /**
   * @generated from field: domain.v1.Subject subject = 1;
   */
  subject?: Subject;

  /**
   * @generated from field: optional subject.v1.BatteryTelemetry battery = 2;
   */
  battery?: BatteryTelemetry;

  /**
   * @generated from field: optional subject.v1.TemperatureTelemetry temperature = 3;
   */
  temperature?: TemperatureTelemetry;

  constructor(data?: PartialMessage<SubjectTelemetryEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.SubjectTelemetryEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubjectTelemetryEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubjectTelemetryEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubjectTelemetryEvent;

  static equals(a: SubjectTelemetryEvent | PlainMessage<SubjectTelemetryEvent> | undefined, b: SubjectTelemetryEvent | PlainMessage<SubjectTelemetryEvent> | undefined): boolean;
}

