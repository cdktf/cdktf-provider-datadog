// https://www.terraform.io/docs/providers/datadog/d/synthetics_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSyntheticsTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * The synthetic test id to search for
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}
  */
  readonly testId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/synthetics_test datadog_synthetics_test}
*/
export class DataDatadogSyntheticsTest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_test";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/synthetics_test datadog_synthetics_test} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSyntheticsTestConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSyntheticsTestConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_test',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.10.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._testId = config.testId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: string; 
  public get testId() {
    return this.getStringAttribute('test_id');
  }
  public set testId(value: string) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      test_id: cdktf.stringToTerraform(this._testId),
    };
  }
}
