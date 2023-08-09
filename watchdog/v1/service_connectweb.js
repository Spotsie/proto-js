// @generated by protoc-gen-connect-web v0.11.0
// @generated from file watchdog/v1/service.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateJobRequest, CreateJobResponse, CreateSubjectGroupRequest, CreateSubjectGroupResponse, DeleteJobRequest, DeleteJobResponse, GetEventsRequest, GetEventsResponse, GetJobsRequest, GetJobsResponse, GetSubjectGroupsRequest, GetSubjectGroupsResponse, UpdateSubjectGroupRequest, UpdateSubjectGroupResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service watchdog.v1.WatchdogService
 */
export const WatchdogService = {
  typeName: "watchdog.v1.WatchdogService",
  methods: {
    /**
     * @generated from rpc watchdog.v1.WatchdogService.GetJobs
     */
    getJobs: {
      name: "GetJobs",
      I: GetJobsRequest,
      O: GetJobsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc watchdog.v1.WatchdogService.CreateJob
     */
    createJob: {
      name: "CreateJob",
      I: CreateJobRequest,
      O: CreateJobResponse,
      kind: MethodKind.Unary,
    },
    /**
     * rpc UpdateJob(UpdateJobRequest) returns (UpdateJobResponse);
     *
     * @generated from rpc watchdog.v1.WatchdogService.DeleteJob
     */
    deleteJob: {
      name: "DeleteJob",
      I: DeleteJobRequest,
      O: DeleteJobResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc watchdog.v1.WatchdogService.GetSubjectGroups
     */
    getSubjectGroups: {
      name: "GetSubjectGroups",
      I: GetSubjectGroupsRequest,
      O: GetSubjectGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc watchdog.v1.WatchdogService.CreateSubjectGroup
     */
    createSubjectGroup: {
      name: "CreateSubjectGroup",
      I: CreateSubjectGroupRequest,
      O: CreateSubjectGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * rpc DeleteSubjectGroup(DeleteJobRequest) returns (DeleteJobResponse);
     *
     * @generated from rpc watchdog.v1.WatchdogService.UpdateSubjectGroup
     */
    updateSubjectGroup: {
      name: "UpdateSubjectGroup",
      I: UpdateSubjectGroupRequest,
      O: UpdateSubjectGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc watchdog.v1.WatchdogService.GetEvents
     */
    getEvents: {
      name: "GetEvents",
      I: GetEventsRequest,
      O: GetEventsResponse,
      kind: MethodKind.Unary,
    },
  }
};

