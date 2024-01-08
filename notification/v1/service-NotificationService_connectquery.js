// @generated by protoc-gen-connect-query v0.4.1
// @generated from file notification/v1/service.proto (package notification.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateNotificationRequest, CreateNotificationResponse } from "./service_pb.js";

export const typeName = "notification.v1.NotificationService";

/**
 * @generated from rpc notification.v1.NotificationService.createNotification
 */
export const createNotification = createQueryService({
  service: {
    methods: {
      createNotification: {
        name: "createNotification",
        kind: MethodKind.Unary,
        I: CreateNotificationRequest,
        O: CreateNotificationResponse,
      },
    },
    typeName: "notification.v1.NotificationService",
  },
}).createNotification;
