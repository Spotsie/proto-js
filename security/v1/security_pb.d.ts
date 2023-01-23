// @generated by protoc-gen-es v1.0.0
// @generated from file security/v1/security.proto (package security.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message security.v1.SignInRequest
 */
export declare class SignInRequest extends Message<SignInRequest> {
  /**
   * @generated from oneof security.v1.SignInRequest.credentials
   */
  credentials: {
    /**
     * @generated from field: security.v1.SignInRequest.UserCredentials user_credentials = 1;
     */
    value: SignInRequest_UserCredentials;
    case: "userCredentials";
  } | {
    /**
     * @generated from field: string token = 2;
     */
    value: string;
    case: "token";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SignInRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "security.v1.SignInRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInRequest;

  static equals(a: SignInRequest | PlainMessage<SignInRequest> | undefined, b: SignInRequest | PlainMessage<SignInRequest> | undefined): boolean;
}

/**
 * @generated from message security.v1.SignInRequest.UserCredentials
 */
export declare class SignInRequest_UserCredentials extends Message<SignInRequest_UserCredentials> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  /**
   * @generated from field: bool api_token = 3;
   */
  apiToken: boolean;

  constructor(data?: PartialMessage<SignInRequest_UserCredentials>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "security.v1.SignInRequest.UserCredentials";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInRequest_UserCredentials;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInRequest_UserCredentials;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInRequest_UserCredentials;

  static equals(a: SignInRequest_UserCredentials | PlainMessage<SignInRequest_UserCredentials> | undefined, b: SignInRequest_UserCredentials | PlainMessage<SignInRequest_UserCredentials> | undefined): boolean;
}

/**
 * @generated from message security.v1.SignInResponse
 */
export declare class SignInResponse extends Message<SignInResponse> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  constructor(data?: PartialMessage<SignInResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "security.v1.SignInResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInResponse;

  static equals(a: SignInResponse | PlainMessage<SignInResponse> | undefined, b: SignInResponse | PlainMessage<SignInResponse> | undefined): boolean;
}

