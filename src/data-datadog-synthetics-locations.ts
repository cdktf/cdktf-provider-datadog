// https://www.terraform.io/docs/providers/datadog/d/synthetics_locations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSyntheticsLocationsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/synthetics_locations datadog_synthetics_locations}
*/
export class DataDatadogSyntheticsLocations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_synthetics_locations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/synthetics_locations datadog_synthetics_locations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSyntheticsLocationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSyntheticsLocationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_locations',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locations - computed: true, optional: false, required: false
  public locations(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'locations').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
