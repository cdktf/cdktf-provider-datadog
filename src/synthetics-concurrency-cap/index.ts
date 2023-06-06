/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/synthetics_concurrency_cap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsConcurrencyCapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Value of the on-demand concurrency cap, customizing the number of Synthetic tests run in parallel.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/synthetics_concurrency_cap#on_demand_concurrency_cap SyntheticsConcurrencyCap#on_demand_concurrency_cap}
  */
  readonly onDemandConcurrencyCap: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/synthetics_concurrency_cap datadog_synthetics_concurrency_cap}
*/
export class SyntheticsConcurrencyCap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_concurrency_cap";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/synthetics_concurrency_cap datadog_synthetics_concurrency_cap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsConcurrencyCapConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsConcurrencyCapConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_concurrency_cap',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.26.0',
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
    this._onDemandConcurrencyCap = config.onDemandConcurrencyCap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // on_demand_concurrency_cap - computed: false, optional: false, required: true
  private _onDemandConcurrencyCap?: number; 
  public get onDemandConcurrencyCap() {
    return this.getNumberAttribute('on_demand_concurrency_cap');
  }
  public set onDemandConcurrencyCap(value: number) {
    this._onDemandConcurrencyCap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandConcurrencyCapInput() {
    return this._onDemandConcurrencyCap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      on_demand_concurrency_cap: cdktf.numberToTerraform(this._onDemandConcurrencyCap),
    };
  }
}
