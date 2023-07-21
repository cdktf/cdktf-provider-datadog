// https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/integration_aws_namespace_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogIntegrationAwsNamespaceRulesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/integration_aws_namespace_rules datadog_integration_aws_namespace_rules}
*/
export class DataDatadogIntegrationAwsNamespaceRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_namespace_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/integration_aws_namespace_rules datadog_integration_aws_namespace_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogIntegrationAwsNamespaceRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogIntegrationAwsNamespaceRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_namespace_rules',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.28.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace_rules - computed: true, optional: false, required: false
  public get namespaceRules() {
    return this.getListAttribute('namespace_rules');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
