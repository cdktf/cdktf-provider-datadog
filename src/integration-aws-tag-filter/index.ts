/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsTagFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your AWS Account ID without dashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter#account_id IntegrationAwsTagFilter#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter#id IntegrationAwsTagFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The namespace associated with the tag filter entry. Valid values are `elb`, `application_elb`, `sqs`, `rds`, `custom`, `network_elb`, `lambda`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter#namespace IntegrationAwsTagFilter#namespace}
  */
  readonly namespace: string;
  /**
  * The tag filter string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter#tag_filter_str IntegrationAwsTagFilter#tag_filter_str}
  */
  readonly tagFilterStr: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter datadog_integration_aws_tag_filter}
*/
export class IntegrationAwsTagFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_tag_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsTagFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsTagFilter to import
  * @param importFromId The id of the existing IntegrationAwsTagFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsTagFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_tag_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/integration_aws_tag_filter datadog_integration_aws_tag_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsTagFilterConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsTagFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_tag_filter',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.48.0',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._tagFilterStr = config.tagFilterStr;
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

  // tag_filter_str - computed: false, optional: false, required: true
  private _tagFilterStr?: string; 
  public get tagFilterStr() {
    return this.getStringAttribute('tag_filter_str');
  }
  public set tagFilterStr(value: string) {
    this._tagFilterStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterStrInput() {
    return this._tagFilterStr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      tag_filter_str: cdktf.stringToTerraform(this._tagFilterStr),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_filter_str: {
        value: cdktf.stringToHclTerraform(this._tagFilterStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
