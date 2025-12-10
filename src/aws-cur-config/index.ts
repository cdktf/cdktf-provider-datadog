/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCurConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#account_id AwsCurConfig#account_id}
  */
  readonly accountId: string;
  /**
  * The S3 bucket name where your AWS Cost and Usage Report files are stored. This bucket must have appropriate IAM permissions for Datadog access and should be in the same AWS account as the CUR report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#bucket_name AwsCurConfig#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#bucket_region AwsCurConfig#bucket_region}
  */
  readonly bucketRegion?: string;
  /**
  * The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences. This must match the report name exactly as it appears in your AWS billing settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#report_name AwsCurConfig#report_name}
  */
  readonly reportName: string;
  /**
  * The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#report_prefix AwsCurConfig#report_prefix}
  */
  readonly reportPrefix: string;
  /**
  * account_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#account_filters AwsCurConfig#account_filters}
  */
  readonly accountFilters?: AwsCurConfigAccountFilters;
}
export interface AwsCurConfigAccountFilters {
  /**
  * List of AWS account IDs to exclude from cost analysis. Only used when `include_new_accounts` is `true`. Cannot be used together with `included_accounts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#excluded_accounts AwsCurConfig#excluded_accounts}
  */
  readonly excludedAccounts?: string[];
  /**
  * Whether to automatically include new member accounts in your cost analysis. When `true`, use `excluded_accounts` to specify accounts to exclude. When `false`, use `included_accounts` to specify only the accounts to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#include_new_accounts AwsCurConfig#include_new_accounts}
  */
  readonly includeNewAccounts?: boolean | cdktf.IResolvable;
  /**
  * List of AWS account IDs to include in cost analysis. Only used when `include_new_accounts` is `false`. Cannot be used together with `excluded_accounts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#included_accounts AwsCurConfig#included_accounts}
  */
  readonly includedAccounts?: string[];
}

export function awsCurConfigAccountFiltersToTerraform(struct?: AwsCurConfigAccountFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedAccounts),
    include_new_accounts: cdktf.booleanToTerraform(struct!.includeNewAccounts),
    included_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedAccounts),
  }
}


export function awsCurConfigAccountFiltersToHclTerraform(struct?: AwsCurConfigAccountFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_new_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.includeNewAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCurConfigAccountFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsCurConfigAccountFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedAccounts = this._excludedAccounts;
    }
    if (this._includeNewAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNewAccounts = this._includeNewAccounts;
    }
    if (this._includedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedAccounts = this._includedAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCurConfigAccountFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedAccounts = undefined;
      this._includeNewAccounts = undefined;
      this._includedAccounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedAccounts = value.excludedAccounts;
      this._includeNewAccounts = value.includeNewAccounts;
      this._includedAccounts = value.includedAccounts;
    }
  }

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[]; 
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }
  public set excludedAccounts(value: string[]) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts;
  }

  // include_new_accounts - computed: false, optional: true, required: false
  private _includeNewAccounts?: boolean | cdktf.IResolvable; 
  public get includeNewAccounts() {
    return this.getBooleanAttribute('include_new_accounts');
  }
  public set includeNewAccounts(value: boolean | cdktf.IResolvable) {
    this._includeNewAccounts = value;
  }
  public resetIncludeNewAccounts() {
    this._includeNewAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNewAccountsInput() {
    return this._includeNewAccounts;
  }

  // included_accounts - computed: false, optional: true, required: false
  private _includedAccounts?: string[]; 
  public get includedAccounts() {
    return this.getListAttribute('included_accounts');
  }
  public set includedAccounts(value: string[]) {
    this._includedAccounts = value;
  }
  public resetIncludedAccounts() {
    this._includedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedAccountsInput() {
    return this._includedAccounts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config datadog_aws_cur_config}
*/
export class AwsCurConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_aws_cur_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCurConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCurConfig to import
  * @param importFromId The id of the existing AwsCurConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCurConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_aws_cur_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config datadog_aws_cur_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCurConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCurConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_aws_cur_config',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.82.0',
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
    this._accountId = config.accountId;
    this._bucketName = config.bucketName;
    this._bucketRegion = config.bucketRegion;
    this._reportName = config.reportName;
    this._reportPrefix = config.reportPrefix;
    this._accountFilters.internalValue = config.accountFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_region - computed: false, optional: true, required: false
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error_messages - computed: true, optional: false, required: false
  public get errorMessages() {
    return this.getListAttribute('error_messages');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // report_prefix - computed: false, optional: false, required: true
  private _reportPrefix?: string; 
  public get reportPrefix() {
    return this.getStringAttribute('report_prefix');
  }
  public set reportPrefix(value: string) {
    this._reportPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportPrefixInput() {
    return this._reportPrefix;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_updated_at - computed: true, optional: false, required: false
  public get statusUpdatedAt() {
    return this.getStringAttribute('status_updated_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // account_filters - computed: false, optional: true, required: false
  private _accountFilters = new AwsCurConfigAccountFiltersOutputReference(this, "account_filters");
  public get accountFilters() {
    return this._accountFilters;
  }
  public putAccountFilters(value: AwsCurConfigAccountFilters) {
    this._accountFilters.internalValue = value;
  }
  public resetAccountFilters() {
    this._accountFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountFiltersInput() {
    return this._accountFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_region: cdktf.stringToTerraform(this._bucketRegion),
      report_name: cdktf.stringToTerraform(this._reportName),
      report_prefix: cdktf.stringToTerraform(this._reportPrefix),
      account_filters: awsCurConfigAccountFiltersToTerraform(this._accountFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_region: {
        value: cdktf.stringToHclTerraform(this._bucketRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_name: {
        value: cdktf.stringToHclTerraform(this._reportName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_prefix: {
        value: cdktf.stringToHclTerraform(this._reportPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_filters: {
        value: awsCurConfigAccountFiltersToHclTerraform(this._accountFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsCurConfigAccountFilters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
