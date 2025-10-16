/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumRetentionFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * RUM application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter#application_id RumRetentionFilter#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether the retention filter is to be enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter#enabled RumRetentionFilter#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The type of RUM events to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter#event_type RumRetentionFilter#event_type}
  */
  readonly eventType: string;
  /**
  * The name of a RUM retention filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter#name RumRetentionFilter#name}
  */
  readonly name: string;
  /**
  * The Query string for a RUM retention filter. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter#query RumRetentionFilter#query}
  */
  readonly query?: string;
  /**
  * The sample rate for a RUM retention filter, between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter#sample_rate RumRetentionFilter#sample_rate}
  */
  readonly sampleRate: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter datadog_rum_retention_filter}
*/
export class RumRetentionFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_rum_retention_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumRetentionFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumRetentionFilter to import
  * @param importFromId The id of the existing RumRetentionFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumRetentionFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_rum_retention_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/rum_retention_filter datadog_rum_retention_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumRetentionFilterConfig
  */
  public constructor(scope: Construct, id: string, config: RumRetentionFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_rum_retention_filter',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.76.0',
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
    this._applicationId = config.applicationId;
    this._enabled = config.enabled;
    this._eventType = config.eventType;
    this._name = config.name;
    this._query = config.query;
    this._sampleRate = config.sampleRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // sample_rate - computed: false, optional: false, required: true
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_type: cdktf.stringToTerraform(this._eventType),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      sample_rate: cdktf.numberToTerraform(this._sampleRate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_rate: {
        value: cdktf.numberToHclTerraform(this._sampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
