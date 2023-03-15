// @generated by protoc-gen-es v1.1.1
// @generated from file watchdog/v1/subject_group.proto (package watchdog.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message watchdog.v1.Audit
 */
export declare class Audit extends Message<Audit> {
  /**
   * @generated from field: optional google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: optional google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: optional google.protobuf.Timestamp deleted_at = 3;
   */
  deletedAt?: Timestamp;

  constructor(data?: PartialMessage<Audit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.Audit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Audit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Audit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Audit;

  static equals(a: Audit | PlainMessage<Audit> | undefined, b: Audit | PlainMessage<Audit> | undefined): boolean;
}

/**
 * @generated from message watchdog.v1.SubjectGroup
 */
export declare class SubjectGroup extends Message<SubjectGroup> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: int32 namespace_id = 3;
   */
  namespaceId: number;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from field: repeated int32 subject_ids = 5;
   */
  subjectIds: number[];

  /**
   * @generated from field: watchdog.v1.Audit audit = 6;
   */
  audit?: Audit;

  constructor(data?: PartialMessage<SubjectGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "watchdog.v1.SubjectGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubjectGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubjectGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubjectGroup;

  static equals(a: SubjectGroup | PlainMessage<SubjectGroup> | undefined, b: SubjectGroup | PlainMessage<SubjectGroup> | undefined): boolean;
}

