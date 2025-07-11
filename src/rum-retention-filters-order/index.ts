/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/rum_retention_filters_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumRetentionFiltersOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * RUM application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/rum_retention_filters_order#application_id RumRetentionFiltersOrder#application_id}
  */
  readonly applicationId: string;
  /**
  * RUM retention filter ID list. The order of IDs in this attribute defines the order of RUM retention filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/rum_retention_filters_order#retention_filter_ids RumRetentionFiltersOrder#retention_filter_ids}
  */
  readonly retentionFilterIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/rum_retention_filters_order datadog_rum_retention_filters_order}
*/
export class RumRetentionFiltersOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_rum_retention_filters_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumRetentionFiltersOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumRetentionFiltersOrder to import
  * @param importFromId The id of the existing RumRetentionFiltersOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/rum_retention_filters_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumRetentionFiltersOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_rum_retention_filters_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/rum_retention_filters_order datadog_rum_retention_filters_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumRetentionFiltersOrderConfig
  */
  public constructor(scope: Construct, id: string, config: RumRetentionFiltersOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_rum_retention_filters_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.67.0',
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
    this._retentionFilterIds = config.retentionFilterIds;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_filter_ids - computed: false, optional: false, required: true
  private _retentionFilterIds?: string[]; 
  public get retentionFilterIds() {
    return this.getListAttribute('retention_filter_ids');
  }
  public set retentionFilterIds(value: string[]) {
    this._retentionFilterIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionFilterIdsInput() {
    return this._retentionFilterIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      retention_filter_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retentionFilterIds),
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
      retention_filter_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retentionFilterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
