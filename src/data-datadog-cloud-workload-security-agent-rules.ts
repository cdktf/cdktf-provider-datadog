// https://www.terraform.io/docs/providers/datadog/d/cloud_workload_security_agent_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogCloudWorkloadSecurityAgentRulesConfig extends cdktf.TerraformMetaArguments {
}
export class DataDatadogCloudWorkloadSecurityAgentRulesAgentRules extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/cloud_workload_security_agent_rules datadog_cloud_workload_security_agent_rules}
*/
export class DataDatadogCloudWorkloadSecurityAgentRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_cloud_workload_security_agent_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/cloud_workload_security_agent_rules datadog_cloud_workload_security_agent_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogCloudWorkloadSecurityAgentRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogCloudWorkloadSecurityAgentRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_cloud_workload_security_agent_rules',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_rules - computed: true, optional: false, required: false
  public agentRules(index: string) {
    return new DataDatadogCloudWorkloadSecurityAgentRulesAgentRules(this, 'agent_rules', index, false);
  }

  // id - computed: true, optional: true, required: false
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
}
