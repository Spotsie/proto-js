// @generated by protoc-gen-es v1.0.0 with parameter "target=js+dts"
// @generated from file watchdog/v1/service.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, Timestamp } from "@bufbuild/protobuf";
import { Job, Job_Config } from "./watchdog_pb.js";
import { SubjectGroup } from "./subject_group_pb.js";
import { Subject } from "../../domain/v1/domain_pb.js";
import { Event } from "./event_pb.js";

/**
 * @generated from message watchdog.v1.GetJobsRequest
 */
export const GetJobsRequest = proto3.makeMessageType(
  "watchdog.v1.GetJobsRequest",
  [],
);

/**
 * @generated from message watchdog.v1.GetJobsResponse
 */
export const GetJobsResponse = proto3.makeMessageType(
  "watchdog.v1.GetJobsResponse",
  () => [
    { no: 1, name: "jobs", kind: "message", T: Job, repeated: true },
  ],
);

/**
 * @generated from message watchdog.v1.CreateJobRequest
 */
export const CreateJobRequest = proto3.makeMessageType(
  "watchdog.v1.CreateJobRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subject_group_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "start_time", kind: "message", T: Duration },
    { no: 5, name: "end_time", kind: "message", T: Duration },
    { no: 6, name: "config", kind: "message", T: Job_Config },
  ],
);

/**
 * @generated from message watchdog.v1.CreateJobResponse
 */
export const CreateJobResponse = proto3.makeMessageType(
  "watchdog.v1.CreateJobResponse",
  () => [
    { no: 1, name: "job", kind: "message", T: Job },
  ],
);

/**
 * @generated from message watchdog.v1.DeleteJobRequest
 */
export const DeleteJobRequest = proto3.makeMessageType(
  "watchdog.v1.DeleteJobRequest",
  () => [
    { no: 1, name: "job_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message watchdog.v1.DeleteJobResponse
 */
export const DeleteJobResponse = proto3.makeMessageType(
  "watchdog.v1.DeleteJobResponse",
  [],
);

/**
 * @generated from message watchdog.v1.GetSubjectGroupsRequest
 */
export const GetSubjectGroupsRequest = proto3.makeMessageType(
  "watchdog.v1.GetSubjectGroupsRequest",
  [],
);

/**
 * @generated from message watchdog.v1.GetSubjectGroupsResponse
 */
export const GetSubjectGroupsResponse = proto3.makeMessageType(
  "watchdog.v1.GetSubjectGroupsResponse",
  () => [
    { no: 1, name: "subject_groups", kind: "message", T: SubjectGroup, repeated: true },
  ],
);

/**
 * @generated from message watchdog.v1.CreateSubjectGroupRequest
 */
export const CreateSubjectGroupRequest = proto3.makeMessageType(
  "watchdog.v1.CreateSubjectGroupRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subjects", kind: "message", T: Subject, repeated: true },
  ],
);

/**
 * @generated from message watchdog.v1.CreateSubjectGroupResponse
 */
export const CreateSubjectGroupResponse = proto3.makeMessageType(
  "watchdog.v1.CreateSubjectGroupResponse",
  () => [
    { no: 1, name: "subject_group", kind: "message", T: SubjectGroup },
  ],
);

/**
 * @generated from message watchdog.v1.UpdateSubjectGroupRequest
 */
export const UpdateSubjectGroupRequest = proto3.makeMessageType(
  "watchdog.v1.UpdateSubjectGroupRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "subject_ids", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message watchdog.v1.UpdateSubjectGroupResponse
 */
export const UpdateSubjectGroupResponse = proto3.makeMessageType(
  "watchdog.v1.UpdateSubjectGroupResponse",
  () => [
    { no: 1, name: "subject_group", kind: "message", T: SubjectGroup },
  ],
);

/**
 * returns events that are created/updated after the specified timestamp
 *
 * @generated from message watchdog.v1.GetEventsRequest
 */
export const GetEventsRequest = proto3.makeMessageType(
  "watchdog.v1.GetEventsRequest",
  () => [
    { no: 1, name: "time_after", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message watchdog.v1.GetEventsResponse
 */
export const GetEventsResponse = proto3.makeMessageType(
  "watchdog.v1.GetEventsResponse",
  () => [
    { no: 1, name: "events", kind: "message", T: Event, repeated: true },
  ],
);

