// https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSoftwareCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter entities by excluding snapshotted entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#filter_exclude_snapshot DataDatadogSoftwareCatalog#filter_exclude_snapshot}
  */
  readonly filterExcludeSnapshot?: string;
  /**
  * Filter entities by UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#filter_id DataDatadogSoftwareCatalog#filter_id}
  */
  readonly filterId?: string;
  /**
  * Filter entities by kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#filter_kind DataDatadogSoftwareCatalog#filter_kind}
  */
  readonly filterKind?: string;
  /**
  * Filter entities by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#filter_name DataDatadogSoftwareCatalog#filter_name}
  */
  readonly filterName?: string;
  /**
  * Filter entities by owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#filter_owner DataDatadogSoftwareCatalog#filter_owner}
  */
  readonly filterOwner?: string;
  /**
  * Filter entities by reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#filter_ref DataDatadogSoftwareCatalog#filter_ref}
  */
  readonly filterRef?: string;
  /**
  * Filter entities by relation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#filter_relation_type DataDatadogSoftwareCatalog#filter_relation_type}
  */
  readonly filterRelationType?: string;
}
export interface DataDatadogSoftwareCatalogEntities {
}

export function dataDatadogSoftwareCatalogEntitiesToTerraform(struct?: DataDatadogSoftwareCatalogEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogSoftwareCatalogEntitiesToHclTerraform(struct?: DataDatadogSoftwareCatalogEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSoftwareCatalogEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSoftwareCatalogEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSoftwareCatalogEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataDatadogSoftwareCatalogEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSoftwareCatalogEntitiesOutputReference {
    return new DataDatadogSoftwareCatalogEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog datadog_software_catalog}
*/
export class DataDatadogSoftwareCatalog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_software_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogSoftwareCatalog to import
  * @param importFromId The id of the existing DataDatadogSoftwareCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogSoftwareCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_software_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/data-sources/software_catalog datadog_software_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSoftwareCatalogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSoftwareCatalogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_software_catalog',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.60.1',
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
    this._filterExcludeSnapshot = config.filterExcludeSnapshot;
    this._filterId = config.filterId;
    this._filterKind = config.filterKind;
    this._filterName = config.filterName;
    this._filterOwner = config.filterOwner;
    this._filterRef = config.filterRef;
    this._filterRelationType = config.filterRelationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entities - computed: true, optional: false, required: false
  private _entities = new DataDatadogSoftwareCatalogEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }

  // filter_exclude_snapshot - computed: false, optional: true, required: false
  private _filterExcludeSnapshot?: string; 
  public get filterExcludeSnapshot() {
    return this.getStringAttribute('filter_exclude_snapshot');
  }
  public set filterExcludeSnapshot(value: string) {
    this._filterExcludeSnapshot = value;
  }
  public resetFilterExcludeSnapshot() {
    this._filterExcludeSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExcludeSnapshotInput() {
    return this._filterExcludeSnapshot;
  }

  // filter_id - computed: false, optional: true, required: false
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  public resetFilterId() {
    this._filterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // filter_kind - computed: false, optional: true, required: false
  private _filterKind?: string; 
  public get filterKind() {
    return this.getStringAttribute('filter_kind');
  }
  public set filterKind(value: string) {
    this._filterKind = value;
  }
  public resetFilterKind() {
    this._filterKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKindInput() {
    return this._filterKind;
  }

  // filter_name - computed: false, optional: true, required: false
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  public resetFilterName() {
    this._filterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // filter_owner - computed: false, optional: true, required: false
  private _filterOwner?: string; 
  public get filterOwner() {
    return this.getStringAttribute('filter_owner');
  }
  public set filterOwner(value: string) {
    this._filterOwner = value;
  }
  public resetFilterOwner() {
    this._filterOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOwnerInput() {
    return this._filterOwner;
  }

  // filter_ref - computed: false, optional: true, required: false
  private _filterRef?: string; 
  public get filterRef() {
    return this.getStringAttribute('filter_ref');
  }
  public set filterRef(value: string) {
    this._filterRef = value;
  }
  public resetFilterRef() {
    this._filterRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRefInput() {
    return this._filterRef;
  }

  // filter_relation_type - computed: false, optional: true, required: false
  private _filterRelationType?: string; 
  public get filterRelationType() {
    return this.getStringAttribute('filter_relation_type');
  }
  public set filterRelationType(value: string) {
    this._filterRelationType = value;
  }
  public resetFilterRelationType() {
    this._filterRelationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRelationTypeInput() {
    return this._filterRelationType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_exclude_snapshot: cdktf.stringToTerraform(this._filterExcludeSnapshot),
      filter_id: cdktf.stringToTerraform(this._filterId),
      filter_kind: cdktf.stringToTerraform(this._filterKind),
      filter_name: cdktf.stringToTerraform(this._filterName),
      filter_owner: cdktf.stringToTerraform(this._filterOwner),
      filter_ref: cdktf.stringToTerraform(this._filterRef),
      filter_relation_type: cdktf.stringToTerraform(this._filterRelationType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_exclude_snapshot: {
        value: cdktf.stringToHclTerraform(this._filterExcludeSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_id: {
        value: cdktf.stringToHclTerraform(this._filterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_kind: {
        value: cdktf.stringToHclTerraform(this._filterKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_owner: {
        value: cdktf.stringToHclTerraform(this._filterOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_ref: {
        value: cdktf.stringToHclTerraform(this._filterRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_relation_type: {
        value: cdktf.stringToHclTerraform(this._filterRelationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
