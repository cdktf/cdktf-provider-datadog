/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/synthetics_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSyntheticsTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The synthetic test id or URL to search for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}
  */
  readonly testId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/synthetics_test datadog_synthetics_test}
*/
export class DataDatadogSyntheticsTest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogSyntheticsTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogSyntheticsTest to import
  * @param importFromId The id of the existing DataDatadogSyntheticsTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/synthetics_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogSyntheticsTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_synthetics_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/synthetics_test datadog_synthetics_test} Data Source
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
        providerVersion: '3.32.0',
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
    this._testId = config.testId;
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
      id: cdktf.stringToTerraform(this._id),
      test_id: cdktf.stringToTerraform(this._testId),
    };
  }
}
