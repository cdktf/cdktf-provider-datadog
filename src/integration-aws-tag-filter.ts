// https://www.terraform.io/docs/providers/datadog/r/integration_aws_tag_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsTagFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your AWS Account ID without dashes. If your account is a GovCloud or China account, specify the `access_key_id` here.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_tag_filter.html#account_id IntegrationAwsTagFilter#account_id}
  */
  readonly accountId: string;
  /**
  * The namespace associated with the tag filter entry. Valid values are `elb`, `application_elb`, `sqs`, `rds`, `custom`, `network_elb`, `lambda`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_tag_filter.html#namespace IntegrationAwsTagFilter#namespace}
  */
  readonly namespace: string;
  /**
  * The tag filter string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_tag_filter.html#tag_filter_str IntegrationAwsTagFilter#tag_filter_str}
  */
  readonly tagFilterStr: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_tag_filter.html datadog_integration_aws_tag_filter}
*/
export class IntegrationAwsTagFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_integration_aws_tag_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_tag_filter.html datadog_integration_aws_tag_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsTagFilterConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsTagFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_tag_filter',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
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
  public get id() {
    return this.getStringAttribute('id');
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
      namespace: cdktf.stringToTerraform(this._namespace),
      tag_filter_str: cdktf.stringToTerraform(this._tagFilterStr),
    };
  }
}
