// @generated by protoc-gen-es v0.2.1 with parameter "target=js+dts"
// @generated from file notification/v1/service.proto (package notification.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {Notification} from "./notification_pb.js";

/**
 * @generated from message notification.v1.CreateNotificationRequest
 */
export declare class CreateNotificationRequest extends Message<CreateNotificationRequest> {
  /**
   * @generated from field: notification.v1.Notification notification = 1;
   */
  notification?: Notification;

  constructor(data?: PartialMessage<CreateNotificationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "notification.v1.CreateNotificationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNotificationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNotificationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNotificationRequest;

  static equals(a: CreateNotificationRequest | PlainMessage<CreateNotificationRequest> | undefined, b: CreateNotificationRequest | PlainMessage<CreateNotificationRequest> | undefined): boolean;
}

/**
 * @generated from message notification.v1.CreateNotificationResponse
 */
export declare class CreateNotificationResponse extends Message<CreateNotificationResponse> {
  /**
   * @generated from field: int64 notification_id = 1;
   */
  notificationId: bigint;

  constructor(data?: PartialMessage<CreateNotificationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "notification.v1.CreateNotificationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNotificationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNotificationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNotificationResponse;

  static equals(a: CreateNotificationResponse | PlainMessage<CreateNotificationResponse> | undefined, b: CreateNotificationResponse | PlainMessage<CreateNotificationResponse> | undefined): boolean;
}

