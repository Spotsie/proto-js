// @generated by protoc-gen-connect-query v0.1.0
// @generated from file deployment/v1/service.proto (package deployment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { AddPositioningReferentRequest, AddPositioningReferentResponse, CreateDeploymentRequest, CreateDeploymentResponse, CreateOrganizationRequest, CreateOrganizationResponse, CreateZoneRequest, CreateZoneResponse, DeleteZoneRequest, DeleteZoneResponse, GetDeploymentRequest, GetDeploymentResponse, GetDeploymentsRequest, GetDeploymentsResponse, GetOrganizationRequest, GetOrganizationResponse, GetOrganizationsRequest, GetOrganizationsResponse, GetPositioningReferentRequest, GetPositioningReferentResponse, GetPositioningReferentsRequest, GetPositioningReferentsResponse, GetZoneRequest, GetZoneResponse, GetZonesRequest, GetZonesResponse, UpdateDeploymentRequest, UpdateDeploymentResponse, UpdatePositioningReferentRequest, UpdatePositioningReferentResponse, UpdateZoneRequest, UpdateZoneResponse } from "./service_pb.js";

export const typeName = "deployment.v1.DeploymentService";

/**
 * Deployment ops
 *
 * @generated from rpc deployment.v1.DeploymentService.GetDeployments
 */
export const getDeployments = createQueryService({
  service: {
    methods: {
      getDeployments: {
        name: "GetDeployments",
        kind: MethodKind.Unary,
        I: GetDeploymentsRequest,
        O: GetDeploymentsResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getDeployments;

/**
 * @generated from rpc deployment.v1.DeploymentService.CreateDeployment
 */
export const createDeployment = createQueryService({
  service: {
    methods: {
      createDeployment: {
        name: "CreateDeployment",
        kind: MethodKind.Unary,
        I: CreateDeploymentRequest,
        O: CreateDeploymentResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).createDeployment;

/**
 * @generated from rpc deployment.v1.DeploymentService.UpdateDeployment
 */
export const updateDeployment = createQueryService({
  service: {
    methods: {
      updateDeployment: {
        name: "UpdateDeployment",
        kind: MethodKind.Unary,
        I: UpdateDeploymentRequest,
        O: UpdateDeploymentResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).updateDeployment;

/**
 * @generated from rpc deployment.v1.DeploymentService.GetDeployment
 */
export const getDeployment = createQueryService({
  service: {
    methods: {
      getDeployment: {
        name: "GetDeployment",
        kind: MethodKind.Unary,
        I: GetDeploymentRequest,
        O: GetDeploymentResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getDeployment;

/**
 * Zone ops
 *
 * @generated from rpc deployment.v1.DeploymentService.CreateZone
 */
export const createZone = createQueryService({
  service: {
    methods: {
      createZone: {
        name: "CreateZone",
        kind: MethodKind.Unary,
        I: CreateZoneRequest,
        O: CreateZoneResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).createZone;

/**
 * @generated from rpc deployment.v1.DeploymentService.DeleteZone
 */
export const deleteZone = createQueryService({
  service: {
    methods: {
      deleteZone: {
        name: "DeleteZone",
        kind: MethodKind.Unary,
        I: DeleteZoneRequest,
        O: DeleteZoneResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).deleteZone;

/**
 * @generated from rpc deployment.v1.DeploymentService.UpdateZone
 */
export const updateZone = createQueryService({
  service: {
    methods: {
      updateZone: {
        name: "UpdateZone",
        kind: MethodKind.Unary,
        I: UpdateZoneRequest,
        O: UpdateZoneResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).updateZone;

/**
 * @generated from rpc deployment.v1.DeploymentService.GetZones
 */
export const getZones = createQueryService({
  service: {
    methods: {
      getZones: {
        name: "GetZones",
        kind: MethodKind.Unary,
        I: GetZonesRequest,
        O: GetZonesResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getZones;

/**
 * @generated from rpc deployment.v1.DeploymentService.GetZone
 */
export const getZone = createQueryService({
  service: {
    methods: {
      getZone: {
        name: "GetZone",
        kind: MethodKind.Unary,
        I: GetZoneRequest,
        O: GetZoneResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getZone;

/**
 * Positioning Referent ops 
 *
 * @generated from rpc deployment.v1.DeploymentService.AddPositioningReferent
 */
export const addPositioningReferent = createQueryService({
  service: {
    methods: {
      addPositioningReferent: {
        name: "AddPositioningReferent",
        kind: MethodKind.Unary,
        I: AddPositioningReferentRequest,
        O: AddPositioningReferentResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).addPositioningReferent;

/**
 * @generated from rpc deployment.v1.DeploymentService.UpdatePositioningReferent
 */
export const updatePositioningReferent = createQueryService({
  service: {
    methods: {
      updatePositioningReferent: {
        name: "UpdatePositioningReferent",
        kind: MethodKind.Unary,
        I: UpdatePositioningReferentRequest,
        O: UpdatePositioningReferentResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).updatePositioningReferent;

/**
 * @generated from rpc deployment.v1.DeploymentService.GetPositioningReferents
 */
export const getPositioningReferents = createQueryService({
  service: {
    methods: {
      getPositioningReferents: {
        name: "GetPositioningReferents",
        kind: MethodKind.Unary,
        I: GetPositioningReferentsRequest,
        O: GetPositioningReferentsResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getPositioningReferents;

/**
 * @generated from rpc deployment.v1.DeploymentService.GetPositioningReferent
 */
export const getPositioningReferent = createQueryService({
  service: {
    methods: {
      getPositioningReferent: {
        name: "GetPositioningReferent",
        kind: MethodKind.Unary,
        I: GetPositioningReferentRequest,
        O: GetPositioningReferentResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getPositioningReferent;

/**
 * * Organization ops* //
 *
 * @generated from rpc deployment.v1.DeploymentService.CreateOrganization
 */
export const createOrganization = createQueryService({
  service: {
    methods: {
      createOrganization: {
        name: "CreateOrganization",
        kind: MethodKind.Unary,
        I: CreateOrganizationRequest,
        O: CreateOrganizationResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).createOrganization;

/**
 * @generated from rpc deployment.v1.DeploymentService.GetOrganization
 */
export const getOrganization = createQueryService({
  service: {
    methods: {
      getOrganization: {
        name: "GetOrganization",
        kind: MethodKind.Unary,
        I: GetOrganizationRequest,
        O: GetOrganizationResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getOrganization;

/**
 * @generated from rpc deployment.v1.DeploymentService.GetOrganizations
 */
export const getOrganizations = createQueryService({
  service: {
    methods: {
      getOrganizations: {
        name: "GetOrganizations",
        kind: MethodKind.Unary,
        I: GetOrganizationsRequest,
        O: GetOrganizationsResponse,
      },
    },
    typeName: "deployment.v1.DeploymentService",
  },
}).getOrganizations;