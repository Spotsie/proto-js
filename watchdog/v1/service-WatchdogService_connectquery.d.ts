// @generated by protoc-gen-connect-query v0.1.0
// @generated from file watchdog/v1/service.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { UnaryHooks } from "@bufbuild/connect-query";
import { CreateJobRequest, CreateJobResponse, CreateSubjectGroupRequest, CreateSubjectGroupResponse, DeleteJobRequest, DeleteJobResponse, GetEventsRequest, GetEventsResponse, GetJobsRequest, GetJobsResponse, GetSubjectGroupsRequest, GetSubjectGroupsResponse, UpdateSubjectGroupRequest, UpdateSubjectGroupResponse } from "./service_pb.js";

export const getJobs: UnaryHooks<GetJobsRequest, GetJobsResponse>;
export const createJob: UnaryHooks<CreateJobRequest, CreateJobResponse>;
export const deleteJob: UnaryHooks<DeleteJobRequest, DeleteJobResponse>;
export const getSubjectGroups: UnaryHooks<GetSubjectGroupsRequest, GetSubjectGroupsResponse>;
export const createSubjectGroup: UnaryHooks<CreateSubjectGroupRequest, CreateSubjectGroupResponse>;
export const updateSubjectGroup: UnaryHooks<UpdateSubjectGroupRequest, UpdateSubjectGroupResponse>;
export const getEvents: UnaryHooks<GetEventsRequest, GetEventsResponse>;
