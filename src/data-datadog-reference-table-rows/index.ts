/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogReferenceTableRowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of primary key values (row IDs) to retrieve. These are the values of the table's primary key field(s). Maximum 250 IDs per request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#row_ids DataDatadogReferenceTableRows#row_ids}
  */
  readonly rowIds: string[];
  /**
  * The UUID of the reference table to query rows from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#table_id DataDatadogReferenceTableRows#table_id}
  */
  readonly tableId: string;
  /**
  * rows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#rows DataDatadogReferenceTableRows#rows}
  */
  readonly rows?: DataDatadogReferenceTableRowsRows[] | cdktf.IResolvable;
}
export interface DataDatadogReferenceTableRowsRows {
}

export function dataDatadogReferenceTableRowsRowsToTerraform(struct?: DataDatadogReferenceTableRowsRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogReferenceTableRowsRowsToHclTerraform(struct?: DataDatadogReferenceTableRowsRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogReferenceTableRowsRowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogReferenceTableRowsRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogReferenceTableRowsRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // values - computed: true, optional: false, required: false
  private _values = new cdktf.StringMap(this, "values");
  public get values() {
    return this._values;
  }
}

export class DataDatadogReferenceTableRowsRowsList extends cdktf.ComplexList {
  public internalValue? : DataDatadogReferenceTableRowsRows[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogReferenceTableRowsRowsOutputReference {
    return new DataDatadogReferenceTableRowsRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows datadog_reference_table_rows}
*/
export class DataDatadogReferenceTableRows extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_reference_table_rows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogReferenceTableRows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogReferenceTableRows to import
  * @param importFromId The id of the existing DataDatadogReferenceTableRows that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogReferenceTableRows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_reference_table_rows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows datadog_reference_table_rows} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogReferenceTableRowsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogReferenceTableRowsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_reference_table_rows',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.82.0',
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
    this._rowIds = config.rowIds;
    this._tableId = config.tableId;
    this._rows.internalValue = config.rows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // row_ids - computed: false, optional: false, required: true
  private _rowIds?: string[]; 
  public get rowIds() {
    return this.getListAttribute('row_ids');
  }
  public set rowIds(value: string[]) {
    this._rowIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIdsInput() {
    return this._rowIds;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // rows - computed: false, optional: true, required: false
  private _rows = new DataDatadogReferenceTableRowsRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: DataDatadogReferenceTableRowsRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      row_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rowIds),
      table_id: cdktf.stringToTerraform(this._tableId),
      rows: cdktf.listMapper(dataDatadogReferenceTableRowsRowsToTerraform, true)(this._rows.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      row_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rowIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      table_id: {
        value: cdktf.stringToHclTerraform(this._tableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rows: {
        value: cdktf.listMapperHcl(dataDatadogReferenceTableRowsRowsToHclTerraform, true)(this._rows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatadogReferenceTableRowsRowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
