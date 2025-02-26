// https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to apply to all metrics in the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}
  */
  readonly accountTags?: string[];
  /**
  * Your AWS Account ID without dashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * AWS Account partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}
  */
  readonly awsPartition: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}
  */
  readonly authConfig?: IntegrationAwsAccountAuthConfig;
  /**
  * aws_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}
  */
  readonly awsRegions?: IntegrationAwsAccountAwsRegions;
  /**
  * logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}
  */
  readonly logsConfig?: IntegrationAwsAccountLogsConfig;
  /**
  * metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}
  */
  readonly metricsConfig?: IntegrationAwsAccountMetricsConfig;
  /**
  * resources_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}
  */
  readonly resourcesConfig?: IntegrationAwsAccountResourcesConfig;
  /**
  * traces_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}
  */
  readonly tracesConfig?: IntegrationAwsAccountTracesConfig;
}
export interface IntegrationAwsAccountAuthConfigAwsAuthConfigKeys {
  /**
  * AWS Access Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#access_key_id IntegrationAwsAccount#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * AWS Secret Access Key. This value is write-only; changes made outside of Terraform will not be drift-detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#secret_access_key IntegrationAwsAccount#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function integrationAwsAccountAuthConfigAwsAuthConfigKeysToTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function integrationAwsAccountAuthConfigAwsAuthConfigKeysToHclTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface IntegrationAwsAccountAuthConfigAwsAuthConfigRole {
  /**
  * AWS IAM External ID for associated role. If omitted, one will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#external_id IntegrationAwsAccount#external_id}
  */
  readonly externalId?: string;
  /**
  * AWS IAM Role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#role_name IntegrationAwsAccount#role_name}
  */
  readonly roleName?: string;
}

export function integrationAwsAccountAuthConfigAwsAuthConfigRoleToTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function integrationAwsAccountAuthConfigAwsAuthConfigRoleToHclTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._roleName = value.roleName;
    }
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface IntegrationAwsAccountAuthConfig {
  /**
  * aws_auth_config_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#aws_auth_config_keys IntegrationAwsAccount#aws_auth_config_keys}
  */
  readonly awsAuthConfigKeys?: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys;
  /**
  * aws_auth_config_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#aws_auth_config_role IntegrationAwsAccount#aws_auth_config_role}
  */
  readonly awsAuthConfigRole?: IntegrationAwsAccountAuthConfigAwsAuthConfigRole;
}

export function integrationAwsAccountAuthConfigToTerraform(struct?: IntegrationAwsAccountAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_auth_config_keys: integrationAwsAccountAuthConfigAwsAuthConfigKeysToTerraform(struct!.awsAuthConfigKeys),
    aws_auth_config_role: integrationAwsAccountAuthConfigAwsAuthConfigRoleToTerraform(struct!.awsAuthConfigRole),
  }
}


export function integrationAwsAccountAuthConfigToHclTerraform(struct?: IntegrationAwsAccountAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_auth_config_keys: {
      value: integrationAwsAccountAuthConfigAwsAuthConfigKeysToHclTerraform(struct!.awsAuthConfigKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountAuthConfigAwsAuthConfigKeys",
    },
    aws_auth_config_role: {
      value: integrationAwsAccountAuthConfigAwsAuthConfigRoleToHclTerraform(struct!.awsAuthConfigRole),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountAuthConfigAwsAuthConfigRole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAuthConfigKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAuthConfigKeys = this._awsAuthConfigKeys?.internalValue;
    }
    if (this._awsAuthConfigRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAuthConfigRole = this._awsAuthConfigRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAuthConfigKeys.internalValue = undefined;
      this._awsAuthConfigRole.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAuthConfigKeys.internalValue = value.awsAuthConfigKeys;
      this._awsAuthConfigRole.internalValue = value.awsAuthConfigRole;
    }
  }

  // aws_auth_config_keys - computed: false, optional: true, required: false
  private _awsAuthConfigKeys = new IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference(this, "aws_auth_config_keys");
  public get awsAuthConfigKeys() {
    return this._awsAuthConfigKeys;
  }
  public putAwsAuthConfigKeys(value: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys) {
    this._awsAuthConfigKeys.internalValue = value;
  }
  public resetAwsAuthConfigKeys() {
    this._awsAuthConfigKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthConfigKeysInput() {
    return this._awsAuthConfigKeys.internalValue;
  }

  // aws_auth_config_role - computed: false, optional: true, required: false
  private _awsAuthConfigRole = new IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference(this, "aws_auth_config_role");
  public get awsAuthConfigRole() {
    return this._awsAuthConfigRole;
  }
  public putAwsAuthConfigRole(value: IntegrationAwsAccountAuthConfigAwsAuthConfigRole) {
    this._awsAuthConfigRole.internalValue = value;
  }
  public resetAwsAuthConfigRole() {
    this._awsAuthConfigRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthConfigRoleInput() {
    return this._awsAuthConfigRole.internalValue;
  }
}
export interface IntegrationAwsAccountAwsRegions {
  /**
  * Include all regions. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}
  */
  readonly includeAll?: boolean | cdktf.IResolvable;
  /**
  * Include only these regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}
  */
  readonly includeOnly?: string[];
}

export function integrationAwsAccountAwsRegionsToTerraform(struct?: IntegrationAwsAccountAwsRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_all: cdktf.booleanToTerraform(struct!.includeAll),
    include_only: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeOnly),
  }
}


export function integrationAwsAccountAwsRegionsToHclTerraform(struct?: IntegrationAwsAccountAwsRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_all: {
      value: cdktf.booleanToHclTerraform(struct!.includeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_only: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAwsRegionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAwsRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAll = this._includeAll;
    }
    if (this._includeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAwsRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAll = undefined;
      this._includeOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAll = value.includeAll;
      this._includeOnly = value.includeOnly;
    }
  }

  // include_all - computed: true, optional: true, required: false
  private _includeAll?: boolean | cdktf.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktf.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
  }

  // include_only - computed: false, optional: true, required: false
  private _includeOnly?: string[]; 
  public get includeOnly() {
    return this.getListAttribute('include_only');
  }
  public set includeOnly(value: string[]) {
    this._includeOnly = value;
  }
  public resetIncludeOnly() {
    this._includeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly;
  }
}
export interface IntegrationAwsAccountLogsConfigLambdaForwarder {
  /**
  * List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#lambdas IntegrationAwsAccount#lambdas}
  */
  readonly lambdas?: string[];
  /**
  * List of service IDs set to enable automatic log collection. Use [`datadog_integration_aws_available_logs_services` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_logs_services) to get allowed values. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#sources IntegrationAwsAccount#sources}
  */
  readonly sources?: string[];
}

export function integrationAwsAccountLogsConfigLambdaForwarderToTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambdas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lambdas),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function integrationAwsAccountLogsConfigLambdaForwarderToHclTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lambdas: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lambdas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountLogsConfigLambdaForwarder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdas !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdas = this._lambdas;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountLogsConfigLambdaForwarder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdas = undefined;
      this._sources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdas = value.lambdas;
      this._sources = value.sources;
    }
  }

  // lambdas - computed: true, optional: true, required: false
  private _lambdas?: string[]; 
  public get lambdas() {
    return this.getListAttribute('lambdas');
  }
  public set lambdas(value: string[]) {
    this._lambdas = value;
  }
  public resetLambdas() {
    this._lambdas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdasInput() {
    return this._lambdas;
  }

  // sources - computed: true, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface IntegrationAwsAccountLogsConfig {
  /**
  * lambda_forwarder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#lambda_forwarder IntegrationAwsAccount#lambda_forwarder}
  */
  readonly lambdaForwarder?: IntegrationAwsAccountLogsConfigLambdaForwarder;
}

export function integrationAwsAccountLogsConfigToTerraform(struct?: IntegrationAwsAccountLogsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_forwarder: integrationAwsAccountLogsConfigLambdaForwarderToTerraform(struct!.lambdaForwarder),
  }
}


export function integrationAwsAccountLogsConfigToHclTerraform(struct?: IntegrationAwsAccountLogsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lambda_forwarder: {
      value: integrationAwsAccountLogsConfigLambdaForwarderToHclTerraform(struct!.lambdaForwarder),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountLogsConfigLambdaForwarder",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountLogsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountLogsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaForwarder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaForwarder = this._lambdaForwarder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountLogsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaForwarder.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaForwarder.internalValue = value.lambdaForwarder;
    }
  }

  // lambda_forwarder - computed: false, optional: true, required: false
  private _lambdaForwarder = new IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference(this, "lambda_forwarder");
  public get lambdaForwarder() {
    return this._lambdaForwarder;
  }
  public putLambdaForwarder(value: IntegrationAwsAccountLogsConfigLambdaForwarder) {
    this._lambdaForwarder.internalValue = value;
  }
  public resetLambdaForwarder() {
    this._lambdaForwarder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaForwarderInput() {
    return this._lambdaForwarder.internalValue;
  }
}
export interface IntegrationAwsAccountMetricsConfigNamespaceFilters {
  /**
  * Exclude only these namespaces from metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`. `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}
  */
  readonly excludeOnly?: string[];
  /**
  * Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}
  */
  readonly includeOnly?: string[];
}

export function integrationAwsAccountMetricsConfigNamespaceFiltersToTerraform(struct?: IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_only: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeOnly),
    include_only: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeOnly),
  }
}


export function integrationAwsAccountMetricsConfigNamespaceFiltersToHclTerraform(struct?: IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_only: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_only: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeOnly = this._excludeOnly;
    }
    if (this._includeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeOnly = undefined;
      this._includeOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeOnly = value.excludeOnly;
      this._includeOnly = value.includeOnly;
    }
  }

  // exclude_only - computed: true, optional: true, required: false
  private _excludeOnly?: string[]; 
  public get excludeOnly() {
    return this.getListAttribute('exclude_only');
  }
  public set excludeOnly(value: string[]) {
    this._excludeOnly = value;
  }
  public resetExcludeOnly() {
    this._excludeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOnlyInput() {
    return this._excludeOnly;
  }

  // include_only - computed: false, optional: true, required: false
  private _includeOnly?: string[]; 
  public get includeOnly() {
    return this.getListAttribute('include_only');
  }
  public set includeOnly(value: string[]) {
    this._includeOnly = value;
  }
  public resetIncludeOnly() {
    this._includeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly;
  }
}
export interface IntegrationAwsAccountMetricsConfigTagFilters {
  /**
  * The AWS service for which the tag filters defined in `tags` will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#namespace IntegrationAwsAccount#namespace}
  */
  readonly namespace: string;
  /**
  * The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#tags IntegrationAwsAccount#tags}
  */
  readonly tags?: string[];
}

export function integrationAwsAccountMetricsConfigTagFiltersToTerraform(struct?: IntegrationAwsAccountMetricsConfigTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function integrationAwsAccountMetricsConfigTagFiltersToHclTerraform(struct?: IntegrationAwsAccountMetricsConfigTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountMetricsConfigTagFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationAwsAccountMetricsConfigTagFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountMetricsConfigTagFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._tags = value.tags;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class IntegrationAwsAccountMetricsConfigTagFiltersList extends cdktf.ComplexList {
  public internalValue? : IntegrationAwsAccountMetricsConfigTagFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationAwsAccountMetricsConfigTagFiltersOutputReference {
    return new IntegrationAwsAccountMetricsConfigTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsAccountMetricsConfig {
  /**
  * Enable EC2 automute for AWS metrics Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#automute_enabled IntegrationAwsAccount#automute_enabled}
  */
  readonly automuteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable CloudWatch alarms collection Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#collect_cloudwatch_alarms IntegrationAwsAccount#collect_cloudwatch_alarms}
  */
  readonly collectCloudwatchAlarms?: boolean | cdktf.IResolvable;
  /**
  * Enable custom metrics collection Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#collect_custom_metrics IntegrationAwsAccount#collect_custom_metrics}
  */
  readonly collectCustomMetrics?: boolean | cdktf.IResolvable;
  /**
  * Enable AWS metrics collection Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#enabled IntegrationAwsAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * namespace_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#namespace_filters IntegrationAwsAccount#namespace_filters}
  */
  readonly namespaceFilters?: IntegrationAwsAccountMetricsConfigNamespaceFilters;
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}
  */
  readonly tagFilters?: IntegrationAwsAccountMetricsConfigTagFilters[] | cdktf.IResolvable;
}

export function integrationAwsAccountMetricsConfigToTerraform(struct?: IntegrationAwsAccountMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automute_enabled: cdktf.booleanToTerraform(struct!.automuteEnabled),
    collect_cloudwatch_alarms: cdktf.booleanToTerraform(struct!.collectCloudwatchAlarms),
    collect_custom_metrics: cdktf.booleanToTerraform(struct!.collectCustomMetrics),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    namespace_filters: integrationAwsAccountMetricsConfigNamespaceFiltersToTerraform(struct!.namespaceFilters),
    tag_filters: cdktf.listMapper(integrationAwsAccountMetricsConfigTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function integrationAwsAccountMetricsConfigToHclTerraform(struct?: IntegrationAwsAccountMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automute_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.automuteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collect_cloudwatch_alarms: {
      value: cdktf.booleanToHclTerraform(struct!.collectCloudwatchAlarms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collect_custom_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.collectCustomMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_filters: {
      value: integrationAwsAccountMetricsConfigNamespaceFiltersToHclTerraform(struct!.namespaceFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountMetricsConfigNamespaceFilters",
    },
    tag_filters: {
      value: cdktf.listMapperHcl(integrationAwsAccountMetricsConfigTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationAwsAccountMetricsConfigTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountMetricsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automuteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.automuteEnabled = this._automuteEnabled;
    }
    if (this._collectCloudwatchAlarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectCloudwatchAlarms = this._collectCloudwatchAlarms;
    }
    if (this._collectCustomMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectCustomMetrics = this._collectCustomMetrics;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._namespaceFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceFilters = this._namespaceFilters?.internalValue;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountMetricsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automuteEnabled = undefined;
      this._collectCloudwatchAlarms = undefined;
      this._collectCustomMetrics = undefined;
      this._enabled = undefined;
      this._namespaceFilters.internalValue = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automuteEnabled = value.automuteEnabled;
      this._collectCloudwatchAlarms = value.collectCloudwatchAlarms;
      this._collectCustomMetrics = value.collectCustomMetrics;
      this._enabled = value.enabled;
      this._namespaceFilters.internalValue = value.namespaceFilters;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // automute_enabled - computed: true, optional: true, required: false
  private _automuteEnabled?: boolean | cdktf.IResolvable; 
  public get automuteEnabled() {
    return this.getBooleanAttribute('automute_enabled');
  }
  public set automuteEnabled(value: boolean | cdktf.IResolvable) {
    this._automuteEnabled = value;
  }
  public resetAutomuteEnabled() {
    this._automuteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automuteEnabledInput() {
    return this._automuteEnabled;
  }

  // collect_cloudwatch_alarms - computed: true, optional: true, required: false
  private _collectCloudwatchAlarms?: boolean | cdktf.IResolvable; 
  public get collectCloudwatchAlarms() {
    return this.getBooleanAttribute('collect_cloudwatch_alarms');
  }
  public set collectCloudwatchAlarms(value: boolean | cdktf.IResolvable) {
    this._collectCloudwatchAlarms = value;
  }
  public resetCollectCloudwatchAlarms() {
    this._collectCloudwatchAlarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCloudwatchAlarmsInput() {
    return this._collectCloudwatchAlarms;
  }

  // collect_custom_metrics - computed: true, optional: true, required: false
  private _collectCustomMetrics?: boolean | cdktf.IResolvable; 
  public get collectCustomMetrics() {
    return this.getBooleanAttribute('collect_custom_metrics');
  }
  public set collectCustomMetrics(value: boolean | cdktf.IResolvable) {
    this._collectCustomMetrics = value;
  }
  public resetCollectCustomMetrics() {
    this._collectCustomMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCustomMetricsInput() {
    return this._collectCustomMetrics;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // namespace_filters - computed: false, optional: true, required: false
  private _namespaceFilters = new IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference(this, "namespace_filters");
  public get namespaceFilters() {
    return this._namespaceFilters;
  }
  public putNamespaceFilters(value: IntegrationAwsAccountMetricsConfigNamespaceFilters) {
    this._namespaceFilters.internalValue = value;
  }
  public resetNamespaceFilters() {
    this._namespaceFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceFiltersInput() {
    return this._namespaceFilters.internalValue;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new IntegrationAwsAccountMetricsConfigTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: IntegrationAwsAccountMetricsConfigTagFilters[] | cdktf.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}
export interface IntegrationAwsAccountResourcesConfig {
  /**
  * Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations. Requires `extended_collection` to be set to `true`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#cloud_security_posture_management_collection IntegrationAwsAccount#cloud_security_posture_management_collection}
  */
  readonly cloudSecurityPostureManagementCollection?: boolean | cdktf.IResolvable;
  /**
  * Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cloud_security_posture_management_collection`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#extended_collection IntegrationAwsAccount#extended_collection}
  */
  readonly extendedCollection?: boolean | cdktf.IResolvable;
}

export function integrationAwsAccountResourcesConfigToTerraform(struct?: IntegrationAwsAccountResourcesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_security_posture_management_collection: cdktf.booleanToTerraform(struct!.cloudSecurityPostureManagementCollection),
    extended_collection: cdktf.booleanToTerraform(struct!.extendedCollection),
  }
}


export function integrationAwsAccountResourcesConfigToHclTerraform(struct?: IntegrationAwsAccountResourcesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_security_posture_management_collection: {
      value: cdktf.booleanToHclTerraform(struct!.cloudSecurityPostureManagementCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extended_collection: {
      value: cdktf.booleanToHclTerraform(struct!.extendedCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountResourcesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountResourcesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSecurityPostureManagementCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSecurityPostureManagementCollection = this._cloudSecurityPostureManagementCollection;
    }
    if (this._extendedCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCollection = this._extendedCollection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountResourcesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudSecurityPostureManagementCollection = undefined;
      this._extendedCollection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudSecurityPostureManagementCollection = value.cloudSecurityPostureManagementCollection;
      this._extendedCollection = value.extendedCollection;
    }
  }

  // cloud_security_posture_management_collection - computed: true, optional: true, required: false
  private _cloudSecurityPostureManagementCollection?: boolean | cdktf.IResolvable; 
  public get cloudSecurityPostureManagementCollection() {
    return this.getBooleanAttribute('cloud_security_posture_management_collection');
  }
  public set cloudSecurityPostureManagementCollection(value: boolean | cdktf.IResolvable) {
    this._cloudSecurityPostureManagementCollection = value;
  }
  public resetCloudSecurityPostureManagementCollection() {
    this._cloudSecurityPostureManagementCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSecurityPostureManagementCollectionInput() {
    return this._cloudSecurityPostureManagementCollection;
  }

  // extended_collection - computed: true, optional: true, required: false
  private _extendedCollection?: boolean | cdktf.IResolvable; 
  public get extendedCollection() {
    return this.getBooleanAttribute('extended_collection');
  }
  public set extendedCollection(value: boolean | cdktf.IResolvable) {
    this._extendedCollection = value;
  }
  public resetExtendedCollection() {
    this._extendedCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCollectionInput() {
    return this._extendedCollection;
  }
}
export interface IntegrationAwsAccountTracesConfigXrayServices {
  /**
  * Include all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}
  */
  readonly includeAll?: boolean | cdktf.IResolvable;
  /**
  * Include only these services. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}
  */
  readonly includeOnly?: string[];
}

export function integrationAwsAccountTracesConfigXrayServicesToTerraform(struct?: IntegrationAwsAccountTracesConfigXrayServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_all: cdktf.booleanToTerraform(struct!.includeAll),
    include_only: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeOnly),
  }
}


export function integrationAwsAccountTracesConfigXrayServicesToHclTerraform(struct?: IntegrationAwsAccountTracesConfigXrayServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_all: {
      value: cdktf.booleanToHclTerraform(struct!.includeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_only: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountTracesConfigXrayServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountTracesConfigXrayServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAll = this._includeAll;
    }
    if (this._includeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountTracesConfigXrayServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAll = undefined;
      this._includeOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAll = value.includeAll;
      this._includeOnly = value.includeOnly;
    }
  }

  // include_all - computed: false, optional: true, required: false
  private _includeAll?: boolean | cdktf.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktf.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
  }

  // include_only - computed: true, optional: true, required: false
  private _includeOnly?: string[]; 
  public get includeOnly() {
    return this.getListAttribute('include_only');
  }
  public set includeOnly(value: string[]) {
    this._includeOnly = value;
  }
  public resetIncludeOnly() {
    this._includeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly;
  }
}
export interface IntegrationAwsAccountTracesConfig {
  /**
  * xray_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#xray_services IntegrationAwsAccount#xray_services}
  */
  readonly xrayServices?: IntegrationAwsAccountTracesConfigXrayServices;
}

export function integrationAwsAccountTracesConfigToTerraform(struct?: IntegrationAwsAccountTracesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xray_services: integrationAwsAccountTracesConfigXrayServicesToTerraform(struct!.xrayServices),
  }
}


export function integrationAwsAccountTracesConfigToHclTerraform(struct?: IntegrationAwsAccountTracesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xray_services: {
      value: integrationAwsAccountTracesConfigXrayServicesToHclTerraform(struct!.xrayServices),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountTracesConfigXrayServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountTracesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountTracesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xrayServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xrayServices = this._xrayServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountTracesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xrayServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xrayServices.internalValue = value.xrayServices;
    }
  }

  // xray_services - computed: false, optional: true, required: false
  private _xrayServices = new IntegrationAwsAccountTracesConfigXrayServicesOutputReference(this, "xray_services");
  public get xrayServices() {
    return this._xrayServices;
  }
  public putXrayServices(value: IntegrationAwsAccountTracesConfigXrayServices) {
    this._xrayServices.internalValue = value;
  }
  public resetXrayServices() {
    this._xrayServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayServicesInput() {
    return this._xrayServices.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account datadog_integration_aws_account}
*/
export class IntegrationAwsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsAccount to import
  * @param importFromId The id of the existing IntegrationAwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_account datadog_integration_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.56.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountTags = config.accountTags;
    this._awsAccountId = config.awsAccountId;
    this._awsPartition = config.awsPartition;
    this._authConfig.internalValue = config.authConfig;
    this._awsRegions.internalValue = config.awsRegions;
    this._logsConfig.internalValue = config.logsConfig;
    this._metricsConfig.internalValue = config.metricsConfig;
    this._resourcesConfig.internalValue = config.resourcesConfig;
    this._tracesConfig.internalValue = config.tracesConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_tags - computed: true, optional: true, required: false
  private _accountTags?: string[]; 
  public get accountTags() {
    return this.getListAttribute('account_tags');
  }
  public set accountTags(value: string[]) {
    this._accountTags = value;
  }
  public resetAccountTags() {
    this._accountTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTagsInput() {
    return this._accountTags;
  }

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_partition - computed: false, optional: false, required: true
  private _awsPartition?: string; 
  public get awsPartition() {
    return this.getStringAttribute('aws_partition');
  }
  public set awsPartition(value: string) {
    this._awsPartition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPartitionInput() {
    return this._awsPartition;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new IntegrationAwsAccountAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: IntegrationAwsAccountAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions = new IntegrationAwsAccountAwsRegionsOutputReference(this, "aws_regions");
  public get awsRegions() {
    return this._awsRegions;
  }
  public putAwsRegions(value: IntegrationAwsAccountAwsRegions) {
    this._awsRegions.internalValue = value;
  }
  public resetAwsRegions() {
    this._awsRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions.internalValue;
  }

  // logs_config - computed: false, optional: true, required: false
  private _logsConfig = new IntegrationAwsAccountLogsConfigOutputReference(this, "logs_config");
  public get logsConfig() {
    return this._logsConfig;
  }
  public putLogsConfig(value: IntegrationAwsAccountLogsConfig) {
    this._logsConfig.internalValue = value;
  }
  public resetLogsConfig() {
    this._logsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsConfigInput() {
    return this._logsConfig.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new IntegrationAwsAccountMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: IntegrationAwsAccountMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // resources_config - computed: false, optional: true, required: false
  private _resourcesConfig = new IntegrationAwsAccountResourcesConfigOutputReference(this, "resources_config");
  public get resourcesConfig() {
    return this._resourcesConfig;
  }
  public putResourcesConfig(value: IntegrationAwsAccountResourcesConfig) {
    this._resourcesConfig.internalValue = value;
  }
  public resetResourcesConfig() {
    this._resourcesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesConfigInput() {
    return this._resourcesConfig.internalValue;
  }

  // traces_config - computed: false, optional: true, required: false
  private _tracesConfig = new IntegrationAwsAccountTracesConfigOutputReference(this, "traces_config");
  public get tracesConfig() {
    return this._tracesConfig;
  }
  public putTracesConfig(value: IntegrationAwsAccountTracesConfig) {
    this._tracesConfig.internalValue = value;
  }
  public resetTracesConfig() {
    this._tracesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesConfigInput() {
    return this._tracesConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountTags),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_partition: cdktf.stringToTerraform(this._awsPartition),
      auth_config: integrationAwsAccountAuthConfigToTerraform(this._authConfig.internalValue),
      aws_regions: integrationAwsAccountAwsRegionsToTerraform(this._awsRegions.internalValue),
      logs_config: integrationAwsAccountLogsConfigToTerraform(this._logsConfig.internalValue),
      metrics_config: integrationAwsAccountMetricsConfigToTerraform(this._metricsConfig.internalValue),
      resources_config: integrationAwsAccountResourcesConfigToTerraform(this._resourcesConfig.internalValue),
      traces_config: integrationAwsAccountTracesConfigToTerraform(this._tracesConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_partition: {
        value: cdktf.stringToHclTerraform(this._awsPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_config: {
        value: integrationAwsAccountAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountAuthConfig",
      },
      aws_regions: {
        value: integrationAwsAccountAwsRegionsToHclTerraform(this._awsRegions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountAwsRegions",
      },
      logs_config: {
        value: integrationAwsAccountLogsConfigToHclTerraform(this._logsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountLogsConfig",
      },
      metrics_config: {
        value: integrationAwsAccountMetricsConfigToHclTerraform(this._metricsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountMetricsConfig",
      },
      resources_config: {
        value: integrationAwsAccountResourcesConfigToHclTerraform(this._resourcesConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountResourcesConfig",
      },
      traces_config: {
        value: integrationAwsAccountTracesConfigToHclTerraform(this._tracesConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountTracesConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
