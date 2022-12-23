// https://www.terraform.io/docs/providers/datadog/r/logs_archive_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsArchiveOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The archive IDs list. The order of archive IDs in this attribute defines the overall archive order for logs. If `archive_ids` is empty or not specified, it will import the actual archive order, and create the resource. Otherwise, it will try to update the order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive_order#archive_ids LogsArchiveOrder#archive_ids}
  */
  readonly archiveIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive_order#id LogsArchiveOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive_order datadog_logs_archive_order}
*/
export class LogsArchiveOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_archive_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive_order datadog_logs_archive_order} Resource
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
        providerVersion: '3.19.1',
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
}
