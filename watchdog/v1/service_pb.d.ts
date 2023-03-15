// @generated by protoc-gen-es v1.1.1
// @generated from file watchdog/v1/service.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Job, Job_Config } from "./watchdog_pb.js";
import type { SubjectGroup } from "./subject_group_pb.js";
import type { Subject } from "../../domain/v1/domain_pb.js";
import type { Event } from "./event_pb.js";

/**
 * @generated from message watchdog.v1.GetJobsRequest
 */
export declare class GetJobsRequest extends Message<GetJobsRequest> {
  constructor(data?: PartialMessage<GetJobsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.GetJobsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetJobsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetJobsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetJobsRequest;

  static equals(a: GetJobsRequest | PlainMessage<GetJobsRequest> | undefined, b: GetJobsRequest | PlainMessage<GetJobsRequest> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.GetJobsResponse
 */
export declare class GetJobsResponse extends Message<GetJobsResponse> {
  /**
   * @generated from field: repeated watchdog.v1.Job jobs = 1;
   */
  jobs: Job[];

  constructor(data?: PartialMessage<GetJobsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.GetJobsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetJobsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetJobsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetJobsResponse;

  static equals(a: GetJobsResponse | PlainMessage<GetJobsResponse> | undefined, b: GetJobsResponse | PlainMessage<GetJobsResponse> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.CreateJobRequest
 */
export declare class CreateJobRequest extends Message<CreateJobRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: int32 subject_group_id = 3;
   */
  subjectGroupId: number;

  /**
   * At what time in the day the job is started
   *
   * @generated from field: google.protobuf.Duration start_time = 4;
   */
  startTime?: Duration;

  /**
   * At what time in the day the job is stopped
   *
   * @generated from field: google.protobuf.Duration end_time = 5;
   */
  endTime?: Duration;

  /**
   * Configuration of the job
   *
   * @generated from field: watchdog.v1.Job.Config config = 6;
   */
  config?: Job_Config;

  constructor(data?: PartialMessage<CreateJobRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.CreateJobRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateJobRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateJobRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateJobRequest;

  static equals(a: CreateJobRequest | PlainMessage<CreateJobRequest> | undefined, b: CreateJobRequest | PlainMessage<CreateJobRequest> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.CreateJobResponse
 */
export declare class CreateJobResponse extends Message<CreateJobResponse> {
  /**
   * @generated from field: watchdog.v1.Job job = 1;
   */
  job?: Job;

  constructor(data?: PartialMessage<CreateJobResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.CreateJobResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateJobResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateJobResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateJobResponse;

  static equals(a: CreateJobResponse | PlainMessage<CreateJobResponse> | undefined, b: CreateJobResponse | PlainMessage<CreateJobResponse> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.DeleteJobRequest
 */
export declare class DeleteJobRequest extends Message<DeleteJobRequest> {
  /**
   * @generated from field: int32 job_id = 1;
   */
  jobId: number;

  constructor(data?: PartialMessage<DeleteJobRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.DeleteJobRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteJobRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteJobRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteJobRequest;

  static equals(a: DeleteJobRequest | PlainMessage<DeleteJobRequest> | undefined, b: DeleteJobRequest | PlainMessage<DeleteJobRequest> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.DeleteJobResponse
 */
export declare class DeleteJobResponse extends Message<DeleteJobResponse> {
  constructor(data?: PartialMessage<DeleteJobResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.DeleteJobResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteJobResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteJobResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteJobResponse;

  static equals(a: DeleteJobResponse | PlainMessage<DeleteJobResponse> | undefined, b: DeleteJobResponse | PlainMessage<DeleteJobResponse> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.GetSubjectGroupsRequest
 */
export declare class GetSubjectGroupsRequest extends Message<GetSubjectGroupsRequest> {
  constructor(data?: PartialMessage<GetSubjectGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.GetSubjectGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSubjectGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSubjectGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSubjectGroupsRequest;

  static equals(a: GetSubjectGroupsRequest | PlainMessage<GetSubjectGroupsRequest> | undefined, b: GetSubjectGroupsRequest | PlainMessage<GetSubjectGroupsRequest> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.GetSubjectGroupsResponse
 */
export declare class GetSubjectGroupsResponse extends Message<GetSubjectGroupsResponse> {
  /**
   * @generated from field: repeated watchdog.v1.SubjectGroup subject_groups = 1;
   */
  subjectGroups: SubjectGroup[];

  constructor(data?: PartialMessage<GetSubjectGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.GetSubjectGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSubjectGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSubjectGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSubjectGroupsResponse;

  static equals(a: GetSubjectGroupsResponse | PlainMessage<GetSubjectGroupsResponse> | undefined, b: GetSubjectGroupsResponse | PlainMessage<GetSubjectGroupsResponse> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.CreateSubjectGroupRequest
 */
export declare class CreateSubjectGroupRequest extends Message<CreateSubjectGroupRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: repeated domain.v1.Subject subjects = 3;
   */
  subjects: Subject[];

  constructor(data?: PartialMessage<CreateSubjectGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.CreateSubjectGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSubjectGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSubjectGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSubjectGroupRequest;

  static equals(a: CreateSubjectGroupRequest | PlainMessage<CreateSubjectGroupRequest> | undefined, b: CreateSubjectGroupRequest | PlainMessage<CreateSubjectGroupRequest> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.CreateSubjectGroupResponse
 */
export declare class CreateSubjectGroupResponse extends Message<CreateSubjectGroupResponse> {
  /**
   * @generated from field: watchdog.v1.SubjectGroup subject_group = 1;
   */
  subjectGroup?: SubjectGroup;

  constructor(data?: PartialMessage<CreateSubjectGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.CreateSubjectGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSubjectGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSubjectGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSubjectGroupResponse;

  static equals(a: CreateSubjectGroupResponse | PlainMessage<CreateSubjectGroupResponse> | undefined, b: CreateSubjectGroupResponse | PlainMessage<CreateSubjectGroupResponse> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.UpdateSubjectGroupRequest
 */
export declare class UpdateSubjectGroupRequest extends Message<UpdateSubjectGroupRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * @generated from field: repeated int32 subject_ids = 2;
   */
  subjectIds: number[];

  /**
   * @generated from field: optional string name = 3;
   */
  name?: string;

  /**
   * @generated from field: optional string description = 4;
   */
  description?: string;

  constructor(data?: PartialMessage<UpdateSubjectGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.UpdateSubjectGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSubjectGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSubjectGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSubjectGroupRequest;

  static equals(a: UpdateSubjectGroupRequest | PlainMessage<UpdateSubjectGroupRequest> | undefined, b: UpdateSubjectGroupRequest | PlainMessage<UpdateSubjectGroupRequest> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.UpdateSubjectGroupResponse
 */
export declare class UpdateSubjectGroupResponse extends Message<UpdateSubjectGroupResponse> {
  /**
   * @generated from field: watchdog.v1.SubjectGroup subject_group = 1;
   */
  subjectGroup?: SubjectGroup;

  constructor(data?: PartialMessage<UpdateSubjectGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.UpdateSubjectGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSubjectGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSubjectGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSubjectGroupResponse;

  static equals(a: UpdateSubjectGroupResponse | PlainMessage<UpdateSubjectGroupResponse> | undefined, b: UpdateSubjectGroupResponse | PlainMessage<UpdateSubjectGroupResponse> | undefined): boolean;
}

/**
 * returns events that are created/updated after the specified timestamp
 *
 * @generated from message watchdog.v1.GetEventsRequest
 */
export declare class GetEventsRequest extends Message<GetEventsRequest> {
  /**
   * @generated from field: google.protobuf.Timestamp time_after = 1;
   */
  timeAfter?: Timestamp;

  constructor(data?: PartialMessage<GetEventsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.GetEventsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventsRequest;

  static equals(a: GetEventsRequest | PlainMessage<GetEventsRequest> | undefined, b: GetEventsRequest | PlainMessage<GetEventsRequest> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.GetEventsResponse
 */
export declare class GetEventsResponse extends Message<GetEventsResponse> {
  /**
   * @generated from field: repeated watchdog.v1.Event events = 1;
   */
  events: Event[];

  constructor(data?: PartialMessage<GetEventsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.GetEventsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventsResponse;

  static equals(a: GetEventsResponse | PlainMessage<GetEventsResponse> | undefined, b: GetEventsResponse | PlainMessage<GetEventsResponse> | undefined): boolean;
}

