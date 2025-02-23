// https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/data-sources/integration_aws_namespace_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogIntegrationAwsNamespaceRulesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/data-sources/integration_aws_namespace_rules datadog_integration_aws_namespace_rules}
*/
export class DataDatadogIntegrationAwsNamespaceRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_namespace_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogIntegrationAwsNamespaceRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogIntegrationAwsNamespaceRules to import
  * @param importFromId The id of the existing DataDatadogIntegrationAwsNamespaceRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/data-sources/integration_aws_namespace_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogIntegrationAwsNamespaceRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_namespace_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/data-sources/integration_aws_namespace_rules datadog_integration_aws_namespace_rules} Data Source
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
        providerVersion: '3.55.0',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
