// https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/integration_aws_available_namespaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogIntegrationAwsAvailableNamespacesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/integration_aws_available_namespaces datadog_integration_aws_available_namespaces}
*/
export class DataDatadogIntegrationAwsAvailableNamespaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_available_namespaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableNamespaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogIntegrationAwsAvailableNamespaces to import
  * @param importFromId The id of the existing DataDatadogIntegrationAwsAvailableNamespaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/integration_aws_available_namespaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogIntegrationAwsAvailableNamespaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_available_namespaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/integration_aws_available_namespaces datadog_integration_aws_available_namespaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogIntegrationAwsAvailableNamespacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogIntegrationAwsAvailableNamespacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_available_namespaces',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_namespaces - computed: true, optional: false, required: false
  public get awsNamespaces() {
    return this.getListAttribute('aws_namespaces');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
