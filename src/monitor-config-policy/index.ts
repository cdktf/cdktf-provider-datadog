/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfigPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The monitor config policy type Valid values are `tag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy#policy_type MonitorConfigPolicy#policy_type}
  */
  readonly policyType: string;
  /**
  * tag_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy#tag_policy MonitorConfigPolicy#tag_policy}
  */
  readonly tagPolicy?: MonitorConfigPolicyTagPolicy;
}
export interface MonitorConfigPolicyTagPolicy {
  /**
  * The key of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy#tag_key MonitorConfigPolicy#tag_key}
  */
  readonly tagKey: string;
  /**
  * If a tag key is required for monitor creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy#tag_key_required MonitorConfigPolicy#tag_key_required}
  */
  readonly tagKeyRequired: boolean | cdktf.IResolvable;
  /**
  * Valid values for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy#valid_tag_values MonitorConfigPolicy#valid_tag_values}
  */
  readonly validTagValues: string[];
}

export function monitorConfigPolicyTagPolicyToTerraform(struct?: MonitorConfigPolicyTagPolicyOutputReference | MonitorConfigPolicyTagPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_key_required: cdktf.booleanToTerraform(struct!.tagKeyRequired),
    valid_tag_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validTagValues),
  }
}


export function monitorConfigPolicyTagPolicyToHclTerraform(struct?: MonitorConfigPolicyTagPolicyOutputReference | MonitorConfigPolicyTagPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key_required: {
      value: cdktf.booleanToHclTerraform(struct!.tagKeyRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_tag_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validTagValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorConfigPolicyTagPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorConfigPolicyTagPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagKeyRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKeyRequired = this._tagKeyRequired;
    }
    if (this._validTagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTagValues = this._validTagValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorConfigPolicyTagPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tagKey = undefined;
      this._tagKeyRequired = undefined;
      this._validTagValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tagKey = value.tagKey;
      this._tagKeyRequired = value.tagKeyRequired;
      this._validTagValues = value.validTagValues;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_key_required - computed: false, optional: false, required: true
  private _tagKeyRequired?: boolean | cdktf.IResolvable; 
  public get tagKeyRequired() {
    return this.getBooleanAttribute('tag_key_required');
  }
  public set tagKeyRequired(value: boolean | cdktf.IResolvable) {
    this._tagKeyRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyRequiredInput() {
    return this._tagKeyRequired;
  }

  // valid_tag_values - computed: false, optional: false, required: true
  private _validTagValues?: string[]; 
  public get validTagValues() {
    return this.getListAttribute('valid_tag_values');
  }
  public set validTagValues(value: string[]) {
    this._validTagValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validTagValuesInput() {
    return this._validTagValues;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy datadog_monitor_config_policy}
*/
export class MonitorConfigPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_monitor_config_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorConfigPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorConfigPolicy to import
  * @param importFromId The id of the existing MonitorConfigPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorConfigPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_monitor_config_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/monitor_config_policy datadog_monitor_config_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfigPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfigPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor_config_policy',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.36.0',
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
    this._id = config.id;
    this._policyType = config.policyType;
    this._tagPolicy.internalValue = config.tagPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // tag_policy - computed: false, optional: true, required: false
  private _tagPolicy = new MonitorConfigPolicyTagPolicyOutputReference(this, "tag_policy");
  public get tagPolicy() {
    return this._tagPolicy;
  }
  public putTagPolicy(value: MonitorConfigPolicyTagPolicy) {
    this._tagPolicy.internalValue = value;
  }
  public resetTagPolicy() {
    this._tagPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPolicyInput() {
    return this._tagPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_type: cdktf.stringToTerraform(this._policyType),
      tag_policy: monitorConfigPolicyTagPolicyToTerraform(this._tagPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_policy: {
        value: monitorConfigPolicyTagPolicyToHclTerraform(this._tagPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorConfigPolicyTagPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
