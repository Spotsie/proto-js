// @generated by protoc-gen-es v1.2.1
// @generated from file subject/v1/service.proto (package subject.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Subject, TimePeriod } from "../../domain/v1/domain_pb.js";
import { BatteryTelemetry, TemperatureTelemetry } from "./subject_pb.js";

/**
 * @generated from message subject.v1.GetAllSubjectsRequest
 */
export const GetAllSubjectsRequest = proto3.makeMessageType(
  "subject.v1.GetAllSubjectsRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "from_time", kind: "message", T: Timestamp },
    { no: 3, name: "to_time", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message subject.v1.GetAllSubjectsResponse
 */
export const GetAllSubjectsResponse = proto3.makeMessageType(
  "subject.v1.GetAllSubjectsResponse",
  () => [
    { no: 1, name: "subjects", kind: "message", T: Subject, repeated: true },
  ],
);

/**
 * @generated from message subject.v1.GetSubjectsTelemetryRequest
 */
export const GetSubjectsTelemetryRequest = proto3.makeMessageType(
  "subject.v1.GetSubjectsTelemetryRequest",
  () => [
    { no: 1, name: "subjects", kind: "message", T: Subject, repeated: true },
    { no: 2, name: "time", kind: "message", T: TimePeriod },
  ],
);

/**
 * @generated from message subject.v1.GetSubjectsTelemetryResponse
 */
export const GetSubjectsTelemetryResponse = proto3.makeMessageType(
  "subject.v1.GetSubjectsTelemetryResponse",
  () => [
    { no: 4, name: "subject_telemetries", kind: "message", T: GetSubjectsTelemetryResponse_SubjectTelemetry, repeated: true },
  ],
);

/**
 * @generated from message subject.v1.GetSubjectsTelemetryResponse.SubjectTelemetry
 */
export const GetSubjectsTelemetryResponse_SubjectTelemetry = proto3.makeMessageType(
  "subject.v1.GetSubjectsTelemetryResponse.SubjectTelemetry",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
    { no: 2, name: "temperature", kind: "message", T: TemperatureTelemetry, repeated: true },
    { no: 3, name: "battery", kind: "message", T: BatteryTelemetry, repeated: true },
  ],
  {localName: "GetSubjectsTelemetryResponse_SubjectTelemetry"},
);

/**
 * @generated from message subject.v1.GetLatestSubjectsTelemetryRequest
 */
export const GetLatestSubjectsTelemetryRequest = proto3.makeMessageType(
  "subject.v1.GetLatestSubjectsTelemetryRequest",
  () => [
    { no: 1, name: "subjects", kind: "message", T: Subject, repeated: true },
  ],
);

/**
 * @generated from message subject.v1.GetLatestSubjectsTelemetryResponse
 */
export const GetLatestSubjectsTelemetryResponse = proto3.makeMessageType(
  "subject.v1.GetLatestSubjectsTelemetryResponse",
  () => [
    { no: 4, name: "subject_telemetries", kind: "message", T: GetLatestSubjectsTelemetryResponse_LatestSubjectTelemetry, repeated: true },
  ],
);

/**
 * @generated from message subject.v1.GetLatestSubjectsTelemetryResponse.LatestSubjectTelemetry
 */
export const GetLatestSubjectsTelemetryResponse_LatestSubjectTelemetry = proto3.makeMessageType(
  "subject.v1.GetLatestSubjectsTelemetryResponse.LatestSubjectTelemetry",
  () => [
    { no: 1, name: "subject", kind: "message", T: Subject },
    { no: 2, name: "temperature", kind: "message", T: TemperatureTelemetry },
    { no: 3, name: "battery", kind: "message", T: BatteryTelemetry },
  ],
  {localName: "GetLatestSubjectsTelemetryResponse_LatestSubjectTelemetry"},
);

