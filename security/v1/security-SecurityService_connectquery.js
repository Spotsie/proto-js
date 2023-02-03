// @generated by protoc-gen-connect-query v0.1.0
// @generated from file security/v1/security.proto (package security.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { SignInRequest, SignInResponse } from "./security_pb.js";

export const typeName = "security.v1.SecurityService";

/**
 * *Auth* //
 *
 * @generated from rpc security.v1.SecurityService.SignIn
 */
export const signIn = createQueryService({
  service: {
    methods: {
      signIn: {
        name: "SignIn",
        kind: MethodKind.Unary,
        I: SignInRequest,
        O: SignInResponse,
      },
    },
    typeName: "security.v1.SecurityService",
  },
}).signIn;