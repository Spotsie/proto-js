// @generated by protoc-gen-connect-web v0.11.0
// @generated from file notification/v1/service.proto (package notification.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateNotificationRequest, CreateNotificationResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service notification.v1.NotificationService
 */
export declare const NotificationService: {
  readonly typeName: "notification.v1.NotificationService",
  readonly methods: {
    /**
     * @generated from rpc notification.v1.NotificationService.createNotification
     */
    readonly createNotification: {
      readonly name: "createNotification",
      readonly I: typeof CreateNotificationRequest,
      readonly O: typeof CreateNotificationResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

