// @generated by protoc-gen-es v1.3.1
// @generated from file watchdog/v1/watchdog.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message watchdog.v1.Job
 */
export declare class Job extends Message<Job> {
  /**
   * Name is unique per organization
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: int32 namespace_id = 3;
   */
  namespaceId: number;

  /**
   * List of subjects that are included in this check
   *
   * @generated from field: int32 subject_group_id = 4;
   */
  subjectGroupId: number;

  /**
   * @generated from field: watchdog.v1.Job.Config config = 5;
   */
  config?: Job_Config;

  constructor(data?: PartialMessage<Job>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job;

  static equals(a: Job | PlainMessage<Job> | undefined, b: Job | PlainMessage<Job> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config
 */
export declare class Job_Config extends Message<Job_Config> {
  /**
   * @generated from oneof watchdog.v1.Job.Config.kind
   */
  kind: {
    /**
     * @generated from field: watchdog.v1.Job.Config.NoActivity no_activity = 10;
     */
    value: Job_Config_NoActivity;
    case: "noActivity";
  } | {
    /**
     * @generated from field: watchdog.v1.Job.Config.Activity activity = 11;
     */
    value: Job_Config_Activity;
    case: "activity";
  } | {
    /**
     * @generated from field: watchdog.v1.Job.Config.SimilarMovement similar_movement = 12;
     */
    value: Job_Config_SimilarMovement;
    case: "similarMovement";
  } | {
    /**
     * @generated from field: watchdog.v1.Job.Config.ZoneOverstay zone_overstay = 13;
     */
    value: Job_Config_ZoneOverstay;
    case: "zoneOverstay";
  } | {
    /**
     * @generated from field: watchdog.v1.Job.Config.NoMovement no_movement = 14;
     */
    value: Job_Config_NoMovement;
    case: "noMovement";
  } | {
    /**
     * @generated from field: watchdog.v1.Job.Config.TemperatureLimit temperature_limit = 15;
     */
    value: Job_Config_TemperatureLimit;
    case: "temperatureLimit";
  } | {
    /**
     * @generated from field: watchdog.v1.Job.Config.LowBattery low_battery = 16;
     */
    value: Job_Config_LowBattery;
    case: "lowBattery";
  } | {
    /**
     * @generated from field: watchdog.v1.Job.Config.ButtonPress button_press = 17;
     */
    value: Job_Config_ButtonPress;
    case: "buttonPress";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Job_Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config;

  static equals(a: Job_Config | PlainMessage<Job_Config> | undefined, b: Job_Config | PlainMessage<Job_Config> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.NoActivity
 */
export declare class Job_Config_NoActivity extends Message<Job_Config_NoActivity> {
  /**
   * Watchdog will trigger if subject has no activity for specified duration
   *
   * @generated from field: google.protobuf.Duration duration_threshold = 1;
   */
  durationThreshold?: Duration;

  constructor(data?: PartialMessage<Job_Config_NoActivity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.NoActivity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_NoActivity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_NoActivity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_NoActivity;

  static equals(a: Job_Config_NoActivity | PlainMessage<Job_Config_NoActivity> | undefined, b: Job_Config_NoActivity | PlainMessage<Job_Config_NoActivity> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.Activity
 */
export declare class Job_Config_Activity extends Message<Job_Config_Activity> {
  constructor(data?: PartialMessage<Job_Config_Activity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.Activity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_Activity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_Activity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_Activity;

  static equals(a: Job_Config_Activity | PlainMessage<Job_Config_Activity> | undefined, b: Job_Config_Activity | PlainMessage<Job_Config_Activity> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.SimilarMovement
 */
export declare class Job_Config_SimilarMovement extends Message<Job_Config_SimilarMovement> {
  constructor(data?: PartialMessage<Job_Config_SimilarMovement>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.SimilarMovement";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_SimilarMovement;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_SimilarMovement;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_SimilarMovement;

  static equals(a: Job_Config_SimilarMovement | PlainMessage<Job_Config_SimilarMovement> | undefined, b: Job_Config_SimilarMovement | PlainMessage<Job_Config_SimilarMovement> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.ZoneOverstay
 */
export declare class Job_Config_ZoneOverstay extends Message<Job_Config_ZoneOverstay> {
  /**
   * Watchdog will trigger if subject has stayed in the same zone for specified duration
   *
   * @generated from field: google.protobuf.Duration duration_threshold = 1;
   */
  durationThreshold?: Duration;

  constructor(data?: PartialMessage<Job_Config_ZoneOverstay>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.ZoneOverstay";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_ZoneOverstay;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_ZoneOverstay;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_ZoneOverstay;

  static equals(a: Job_Config_ZoneOverstay | PlainMessage<Job_Config_ZoneOverstay> | undefined, b: Job_Config_ZoneOverstay | PlainMessage<Job_Config_ZoneOverstay> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.NoMovement
 */
export declare class Job_Config_NoMovement extends Message<Job_Config_NoMovement> {
  /**
   * Watchdog will trigger if subject not moved for specified duration
   *
   * @generated from field: google.protobuf.Duration duration_threshold = 1;
   */
  durationThreshold?: Duration;

  constructor(data?: PartialMessage<Job_Config_NoMovement>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.NoMovement";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_NoMovement;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_NoMovement;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_NoMovement;

  static equals(a: Job_Config_NoMovement | PlainMessage<Job_Config_NoMovement> | undefined, b: Job_Config_NoMovement | PlainMessage<Job_Config_NoMovement> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.TemperatureLimit
 */
export declare class Job_Config_TemperatureLimit extends Message<Job_Config_TemperatureLimit> {
  /**
   * Watchdog will trigger if subject's temperature exceeded the min or max value
   *
   * @generated from field: int32 max_temperature = 1;
   */
  maxTemperature: number;

  /**
   * @generated from field: int32 min_temperature = 2;
   */
  minTemperature: number;

  constructor(data?: PartialMessage<Job_Config_TemperatureLimit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.TemperatureLimit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_TemperatureLimit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_TemperatureLimit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_TemperatureLimit;

  static equals(a: Job_Config_TemperatureLimit | PlainMessage<Job_Config_TemperatureLimit> | undefined, b: Job_Config_TemperatureLimit | PlainMessage<Job_Config_TemperatureLimit> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.LowBattery
 */
export declare class Job_Config_LowBattery extends Message<Job_Config_LowBattery> {
  /**
   * @generated from field: float min_allowed_battery_level = 1;
   */
  minAllowedBatteryLevel: number;

  constructor(data?: PartialMessage<Job_Config_LowBattery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.LowBattery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_LowBattery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_LowBattery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_LowBattery;

  static equals(a: Job_Config_LowBattery | PlainMessage<Job_Config_LowBattery> | undefined, b: Job_Config_LowBattery | PlainMessage<Job_Config_LowBattery> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.Job.Config.ButtonPress
 */
export declare class Job_Config_ButtonPress extends Message<Job_Config_ButtonPress> {
  constructor(data?: PartialMessage<Job_Config_ButtonPress>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Job.Config.ButtonPress";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job_Config_ButtonPress;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job_Config_ButtonPress;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job_Config_ButtonPress;

  static equals(a: Job_Config_ButtonPress | PlainMessage<Job_Config_ButtonPress> | undefined, b: Job_Config_ButtonPress | PlainMessage<Job_Config_ButtonPress> | undefined): boolean;
}

