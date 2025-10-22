/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/org_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of connection types to enable for this connection (., metrics, logs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/org_connection#connection_types OrgConnection#connection_types}
  */
  readonly connectionTypes: string[];
  /**
  * UUID of the sink (destination) organization. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/org_connection#sink_org_id OrgConnection#sink_org_id}
  */
  readonly sinkOrgId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/org_connection datadog_org_connection}
*/
export class OrgConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_org_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgConnection to import
  * @param importFromId The id of the existing OrgConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/org_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_org_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/org_connection datadog_org_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: OrgConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_org_connection',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.77.0',
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
    this._connectionTypes = config.connectionTypes;
    this._sinkOrgId = config.sinkOrgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_types - computed: false, optional: false, required: true
  private _connectionTypes?: string[]; 
  public get connectionTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_types'));
  }
  public set connectionTypes(value: string[]) {
    this._connectionTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypesInput() {
    return this._connectionTypes;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sink_org_id - computed: false, optional: false, required: true
  private _sinkOrgId?: string; 
  public get sinkOrgId() {
    return this.getStringAttribute('sink_org_id');
  }
  public set sinkOrgId(value: string) {
    this._sinkOrgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkOrgIdInput() {
    return this._sinkOrgId;
  }

  // sink_org_name - computed: true, optional: false, required: false
  public get sinkOrgName() {
    return this.getStringAttribute('sink_org_name');
  }

  // source_org_id - computed: true, optional: false, required: false
  public get sourceOrgId() {
    return this.getStringAttribute('source_org_id');
  }

  // source_org_name - computed: true, optional: false, required: false
  public get sourceOrgName() {
    return this.getStringAttribute('source_org_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionTypes),
      sink_org_id: cdktf.stringToTerraform(this._sinkOrgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sink_org_id: {
        value: cdktf.stringToHclTerraform(this._sinkOrgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
