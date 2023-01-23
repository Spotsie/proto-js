// @generated by protoc-gen-connect-web v0.6.0
// @generated from file deployment/v1/service.proto (package deployment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddPositioningReferentRequest, AddPositioningReferentResponse, CreateDeploymentRequest, CreateDeploymentResponse, CreateOrganizationRequest, CreateOrganizationResponse, CreateZoneRequest, CreateZoneResponse, DeleteZoneRequest, DeleteZoneResponse, GetDeploymentRequest, GetDeploymentResponse, GetDeploymentsRequest, GetDeploymentsResponse, GetOrganizationRequest, GetOrganizationResponse, GetOrganizationsRequest, GetOrganizationsResponse, GetPositioningReferentRequest, GetPositioningReferentResponse, GetPositioningReferentsRequest, GetPositioningReferentsResponse, GetZoneRequest, GetZoneResponse, GetZonesRequest, GetZonesResponse, UpdateDeploymentRequest, UpdateDeploymentResponse, UpdatePositioningReferentRequest, UpdatePositioningReferentResponse, UpdateZoneRequest, UpdateZoneResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service deployment.v1.DeploymentService
 */
export declare const DeploymentService: {
  readonly typeName: "deployment.v1.DeploymentService",
  readonly methods: {
    /**
     * Deployment ops
     *
     * @generated from rpc deployment.v1.DeploymentService.GetDeployments
     */
    readonly getDeployments: {
      readonly name: "GetDeployments",
      readonly I: typeof GetDeploymentsRequest,
      readonly O: typeof GetDeploymentsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.CreateDeployment
     */
    readonly createDeployment: {
      readonly name: "CreateDeployment",
      readonly I: typeof CreateDeploymentRequest,
      readonly O: typeof CreateDeploymentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.UpdateDeployment
     */
    readonly updateDeployment: {
      readonly name: "UpdateDeployment",
      readonly I: typeof UpdateDeploymentRequest,
      readonly O: typeof UpdateDeploymentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.GetDeployment
     */
    readonly getDeployment: {
      readonly name: "GetDeployment",
      readonly I: typeof GetDeploymentRequest,
      readonly O: typeof GetDeploymentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Zone ops
     *
     * @generated from rpc deployment.v1.DeploymentService.CreateZone
     */
    readonly createZone: {
      readonly name: "CreateZone",
      readonly I: typeof CreateZoneRequest,
      readonly O: typeof CreateZoneResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.DeleteZone
     */
    readonly deleteZone: {
      readonly name: "DeleteZone",
      readonly I: typeof DeleteZoneRequest,
      readonly O: typeof DeleteZoneResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.UpdateZone
     */
    readonly updateZone: {
      readonly name: "UpdateZone",
      readonly I: typeof UpdateZoneRequest,
      readonly O: typeof UpdateZoneResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.GetZones
     */
    readonly getZones: {
      readonly name: "GetZones",
      readonly I: typeof GetZonesRequest,
      readonly O: typeof GetZonesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.GetZone
     */
    readonly getZone: {
      readonly name: "GetZone",
      readonly I: typeof GetZoneRequest,
      readonly O: typeof GetZoneResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Positioning Referent ops 
     *
     * @generated from rpc deployment.v1.DeploymentService.AddPositioningReferent
     */
    readonly addPositioningReferent: {
      readonly name: "AddPositioningReferent",
      readonly I: typeof AddPositioningReferentRequest,
      readonly O: typeof AddPositioningReferentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.UpdatePositioningReferent
     */
    readonly updatePositioningReferent: {
      readonly name: "UpdatePositioningReferent",
      readonly I: typeof UpdatePositioningReferentRequest,
      readonly O: typeof UpdatePositioningReferentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.GetPositioningReferents
     */
    readonly getPositioningReferents: {
      readonly name: "GetPositioningReferents",
      readonly I: typeof GetPositioningReferentsRequest,
      readonly O: typeof GetPositioningReferentsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.GetPositioningReferent
     */
    readonly getPositioningReferent: {
      readonly name: "GetPositioningReferent",
      readonly I: typeof GetPositioningReferentRequest,
      readonly O: typeof GetPositioningReferentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * * Organization ops* //
     *
     * @generated from rpc deployment.v1.DeploymentService.CreateOrganization
     */
    readonly createOrganization: {
      readonly name: "CreateOrganization",
      readonly I: typeof CreateOrganizationRequest,
      readonly O: typeof CreateOrganizationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.GetOrganization
     */
    readonly getOrganization: {
      readonly name: "GetOrganization",
      readonly I: typeof GetOrganizationRequest,
      readonly O: typeof GetOrganizationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc deployment.v1.DeploymentService.GetOrganizations
     */
    readonly getOrganizations: {
      readonly name: "GetOrganizations",
      readonly I: typeof GetOrganizationsRequest,
      readonly O: typeof GetOrganizationsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

