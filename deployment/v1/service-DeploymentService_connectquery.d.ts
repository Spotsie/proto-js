// @generated by protoc-gen-connect-query v0.2.3
// @generated from file deployment/v1/service.proto (package deployment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { UnaryHooks } from "@bufbuild/connect-query";
import { AddPositioningReferentRequest, AddPositioningReferentResponse, CreateDeploymentRequest, CreateDeploymentResponse, CreateOrganizationRequest, CreateOrganizationResponse, CreateZoneRequest, CreateZoneResponse, DeleteZoneRequest, DeleteZoneResponse, GetDeploymentRequest, GetDeploymentResponse, GetDeploymentsRequest, GetDeploymentsResponse, GetOrganizationRequest, GetOrganizationResponse, GetOrganizationsRequest, GetOrganizationsResponse, GetPositioningReferentRequest, GetPositioningReferentResponse, GetPositioningReferentsRequest, GetPositioningReferentsResponse, GetZoneRequest, GetZoneResponse, GetZonesRequest, GetZonesResponse, UpdateDeploymentRequest, UpdateDeploymentResponse, UpdatePositioningReferentRequest, UpdatePositioningReferentResponse, UpdateZoneRequest, UpdateZoneResponse } from "./service_pb.js";

export const getDeployments: UnaryHooks<GetDeploymentsRequest, GetDeploymentsResponse>;
export const createDeployment: UnaryHooks<CreateDeploymentRequest, CreateDeploymentResponse>;
export const updateDeployment: UnaryHooks<UpdateDeploymentRequest, UpdateDeploymentResponse>;
export const getDeployment: UnaryHooks<GetDeploymentRequest, GetDeploymentResponse>;
export const createZone: UnaryHooks<CreateZoneRequest, CreateZoneResponse>;
export const deleteZone: UnaryHooks<DeleteZoneRequest, DeleteZoneResponse>;
export const updateZone: UnaryHooks<UpdateZoneRequest, UpdateZoneResponse>;
export const getZones: UnaryHooks<GetZonesRequest, GetZonesResponse>;
export const getZone: UnaryHooks<GetZoneRequest, GetZoneResponse>;
export const addPositioningReferent: UnaryHooks<AddPositioningReferentRequest, AddPositioningReferentResponse>;
export const updatePositioningReferent: UnaryHooks<UpdatePositioningReferentRequest, UpdatePositioningReferentResponse>;
export const getPositioningReferents: UnaryHooks<GetPositioningReferentsRequest, GetPositioningReferentsResponse>;
export const getPositioningReferent: UnaryHooks<GetPositioningReferentRequest, GetPositioningReferentResponse>;
export const createOrganization: UnaryHooks<CreateOrganizationRequest, CreateOrganizationResponse>;
export const getOrganization: UnaryHooks<GetOrganizationRequest, GetOrganizationResponse>;
export const getOrganizations: UnaryHooks<GetOrganizationsRequest, GetOrganizationsResponse>;
