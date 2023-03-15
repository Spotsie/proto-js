// @generated by protoc-gen-es v1.1.1
// @generated from file location/v1/location.proto (package location.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message location.v1.LocationHistoryRecord
 */
export declare class LocationHistoryRecord extends Message<LocationHistoryRecord> {
  /**
   * Zone in which the beacon was present
   *
   * @generated from field: int32 zone = 1;
   */
  zone: number;

  /**
   * @generated from field: google.protobuf.Timestamp from_time = 2;
   */
  fromTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp to_time = 3;
   */
  toTime?: Timestamp;

  constructor(data?: PartialMessage<LocationHistoryRecord>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.LocationHistoryRecord";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationHistoryRecord;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationHistoryRecord;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationHistoryRecord;

  static equals(a: LocationHistoryRecord | PlainMessage<LocationHistoryRecord> | undefined, b: LocationHistoryRecord | PlainMessage<LocationHistoryRecord> | undefined): boolean;
}

/**
 * An object that represents a latitude/longitude pair. This is expressed as a
 * pair of doubles to represent degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the
 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
 * standard</a>. Values must be within normalized ranges.
 *
 * @generated from message location.v1.LatLng
 */
export declare class LatLng extends Message<LatLng> {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   *
   * @generated from field: double latitude = 1;
   */
  latitude: number;

  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   *
   * @generated from field: double longitude = 2;
   */
  longitude: number;

  constructor(data?: PartialMessage<LatLng>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.LatLng";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LatLng;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LatLng;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LatLng;

  static equals(a: LatLng | PlainMessage<LatLng> | undefined, b: LatLng | PlainMessage<LatLng> | undefined): boolean;
}

/**
 * @generated from message location.v1.LocationRecord
 */
export declare class LocationRecord extends Message<LocationRecord> {
  /**
   * Zone in  which the beacon was present
   *
   * @generated from field: optional int32 zone = 1;
   */
  zone?: number;

  /**
   * coordinates at which beacon was present
   *
   * @generated from field: optional location.v1.LatLng coordinates = 2;
   */
  coordinates?: LatLng;

  /**
   * @generated from field: google.protobuf.Timestamp time = 3;
   */
  time?: Timestamp;

  constructor(data?: PartialMessage<LocationRecord>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "location.v1.LocationRecord";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationRecord;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationRecord;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationRecord;

  static equals(a: LocationRecord | PlainMessage<LocationRecord> | undefined, b: LocationRecord | PlainMessage<LocationRecord> | undefined): boolean;
}

