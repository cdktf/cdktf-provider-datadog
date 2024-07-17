/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/resources/logs_archive_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsArchiveOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The archive IDs list. The order of archive IDs in this attribute defines the overall archive order for logs. If `archive_ids` is empty or not specified, it will import the actual archive order, and create the resource. Otherwise, it will try to update the order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/resources/logs_archive_order#archive_ids LogsArchiveOrder#archive_ids}
  */
  readonly archiveIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/resources/logs_archive_order#id LogsArchiveOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/resources/logs_archive_order datadog_logs_archive_order}
*/
export class LogsArchiveOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_archive_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogsArchiveOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsArchiveOrder to import
  * @param importFromId The id of the existing LogsArchiveOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/resources/logs_archive_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsArchiveOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_archive_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/resources/logs_archive_order datadog_logs_archive_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsArchiveOrderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogsArchiveOrderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_archive_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.41.0',
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
    this._archiveIds = config.archiveIds;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_ids - computed: true, optional: true, required: false
  private _archiveIds?: string[]; 
  public get archiveIds() {
    return this.getListAttribute('archive_ids');
  }
  public set archiveIds(value: string[]) {
    this._archiveIds = value;
  }
  public resetArchiveIds() {
    this._archiveIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveIdsInput() {
    return this._archiveIds;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._archiveIds),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._archiveIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
