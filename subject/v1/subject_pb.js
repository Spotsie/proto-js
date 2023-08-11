// @generated by protoc-gen-es v1.3.0
// @generated from file subject/v1/subject.proto (package subject.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Subject } from "../../domain/v1/domain_pb.js";

/**
 * @generated from enum subject.v1.Scope
 */
export const Scope = proto3.makeEnum(
  "subject.v1.Scope",
  [
    {no: 0, name: "SCOPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SCOPE_GLOBAL", localName: "GLOBAL"},
    {no: 2, name: "SCOPE_ORGANIZATION", localName: "ORGANIZATION"},
  ],
);

/**
 * @generated from message subject.v1.SubjectMetadata
 */
export const SubjectMetadata = proto3.makeMessageType(
  "subject.v1.SubjectMetadata",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
    { no: 2, name: "properties", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "scope", kind: "enum", T: proto3.getEnumType(Scope) },
  ],
);

/**
 * @generated from message subject.v1.TemperatureTelemetry
 */
export const TemperatureTelemetry = proto3.makeMessageType(
  "subject.v1.TemperatureTelemetry",
  () => [
    { no: 1, name: "temperature", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message subject.v1.BatteryTelemetry
 */
export const BatteryTelemetry = proto3.makeMessageType(
  "subject.v1.BatteryTelemetry",
  () => [
    { no: 1, name: "voltage", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
  ],
);
