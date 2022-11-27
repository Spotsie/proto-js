// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file location/v1/location.proto (package location.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";

/**
 * @generated from message location.v1.LocationHistoryRecord
 */
export const LocationHistoryRecord = proto3.makeMessageType(
  "location.v1.LocationHistoryRecord",
  () => [
    { no: 1, name: "zone", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "from_time", kind: "message", T: Timestamp },
    { no: 3, name: "to_time", kind: "message", T: Timestamp },
  ],
);

/**
 * An object that represents a latitude/longitude pair. This is expressed as a
 * pair of doubles to represent degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the
 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
 * standard</a>. Values must be within normalized ranges.
 *
 * @generated from message location.v1.LatLng
 */
export const LatLng = proto3.makeMessageType(
  "location.v1.LatLng",
  () => [
    { no: 1, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message location.v1.GeoLocationHistoryRecord
 */
export const GeoLocationHistoryRecord = proto3.makeMessageType(
  "location.v1.GeoLocationHistoryRecord",
  () => [
    { no: 1, name: "coordinates", kind: "message", T: LatLng },
    { no: 2, name: "from_time", kind: "message", T: Timestamp },
    { no: 3, name: "to_time", kind: "message", T: Timestamp },
  ],
);

