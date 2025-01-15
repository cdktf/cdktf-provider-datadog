// https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/integration_aws_available_logs_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogIntegrationAwsAvailableLogsServicesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/integration_aws_available_logs_services datadog_integration_aws_available_logs_services}
*/
export class DataDatadogIntegrationAwsAvailableLogsServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_available_logs_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogIntegrationAwsAvailableLogsServices to import
  * @param importFromId The id of the existing DataDatadogIntegrationAwsAvailableLogsServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/integration_aws_available_logs_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogIntegrationAwsAvailableLogsServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_available_logs_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/integration_aws_available_logs_services datadog_integration_aws_available_logs_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogIntegrationAwsAvailableLogsServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogIntegrationAwsAvailableLogsServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_available_logs_services',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.52.0',
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

  // aws_logs_services - computed: true, optional: false, required: false
  public get awsLogsServices() {
    return this.getListAttribute('aws_logs_services');
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
