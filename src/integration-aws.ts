// https://www.terraform.io/docs/providers/datadog/r/integration_aws.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your AWS Account ID without dashes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html#account_id IntegrationAws#account_id}
  */
  readonly accountId: string;
  /**
  * Enables or disables metric collection for specific AWS namespaces for this AWS account only. A list of namespaces can be found at the [available namespace rules API endpoint](https://docs.datadoghq.com/api/v1/aws-integration/#list-namespace-rules).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html#account_specific_namespace_rules IntegrationAws#account_specific_namespace_rules}
  */
  readonly accountSpecificNamespaceRules?: { [key: string]: boolean };
  /**
  * An array of AWS regions to exclude from metrics collection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html#excluded_regions IntegrationAws#excluded_regions}
  */
  readonly excludedRegions?: string[];
  /**
  * Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. e.x. `env:production,instance-type:c1.*,!region:us-east-1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html#filter_tags IntegrationAws#filter_tags}
  */
  readonly filterTags?: string[];
  /**
  * Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html#host_tags IntegrationAws#host_tags}
  */
  readonly hostTags?: string[];
  /**
  * Your Datadog role delegation name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html#role_name IntegrationAws#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html datadog_integration_aws}
*/
export class IntegrationAws extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws.html datadog_integration_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._accountSpecificNamespaceRules = config.accountSpecificNamespaceRules;
    this._excludedRegions = config.excludedRegions;
    this._filterTags = config.filterTags;
    this._hostTags = config.hostTags;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // account_specific_namespace_rules - computed: false, optional: true, required: false
  private _accountSpecificNamespaceRules?: { [key: string]: boolean };
  public get accountSpecificNamespaceRules() {
    return this.interpolationForAttribute('account_specific_namespace_rules') as any;
  }
  public set accountSpecificNamespaceRules(value: { [key: string]: boolean } ) {
    this._accountSpecificNamespaceRules = value;
  }
  public resetAccountSpecificNamespaceRules() {
    this._accountSpecificNamespaceRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSpecificNamespaceRulesInput() {
    return this._accountSpecificNamespaceRules
  }

  // excluded_regions - computed: false, optional: true, required: false
  private _excludedRegions?: string[];
  public get excludedRegions() {
    return this.getListAttribute('excluded_regions');
  }
  public set excludedRegions(value: string[] ) {
    this._excludedRegions = value;
  }
  public resetExcludedRegions() {
    this._excludedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRegionsInput() {
    return this._excludedRegions
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // filter_tags - computed: false, optional: true, required: false
  private _filterTags?: string[];
  public get filterTags() {
    return this.getListAttribute('filter_tags');
  }
  public set filterTags(value: string[] ) {
    this._filterTags = value;
  }
  public resetFilterTags() {
    this._filterTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagsInput() {
    return this._filterTags
  }

  // host_tags - computed: false, optional: true, required: false
  private _hostTags?: string[];
  public get hostTags() {
    return this.getListAttribute('host_tags');
  }
  public set hostTags(value: string[] ) {
    this._hostTags = value;
  }
  public resetHostTags() {
    this._hostTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTagsInput() {
    return this._hostTags
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName: string;
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      account_specific_namespace_rules: cdktf.hashMapper(cdktf.anyToTerraform)(this._accountSpecificNamespaceRules),
      excluded_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedRegions),
      filter_tags: cdktf.listMapper(cdktf.stringToTerraform)(this._filterTags),
      host_tags: cdktf.listMapper(cdktf.stringToTerraform)(this._hostTags),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }
}
