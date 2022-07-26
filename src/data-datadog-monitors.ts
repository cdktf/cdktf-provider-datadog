// https://www.terraform.io/docs/providers/datadog/d/monitors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogMonitorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitors#id DataDatadogMonitors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitors#monitor_tags_filter DataDatadogMonitors#monitor_tags_filter}
  */
  readonly monitorTagsFilter?: string[];
  /**
  * A monitor name to limit the search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitors#name_filter DataDatadogMonitors#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * A list of tags to limit the search. This filters on the monitor scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitors#tags_filter DataDatadogMonitors#tags_filter}
  */
  readonly tagsFilter?: string[];
}
export interface DataDatadogMonitorsMonitors {
}

export function dataDatadogMonitorsMonitorsToTerraform(struct?: DataDatadogMonitorsMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogMonitorsMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogMonitorsMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogMonitorsMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDatadogMonitorsMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogMonitorsMonitorsOutputReference {
    return new DataDatadogMonitorsMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/monitors datadog_monitors}
*/
export class DataDatadogMonitors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_monitors";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/monitors datadog_monitors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogMonitorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogMonitorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitors',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._monitorTagsFilter = config.monitorTagsFilter;
    this._nameFilter = config.nameFilter;
    this._tagsFilter = config.tagsFilter;
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

  // monitor_tags_filter - computed: false, optional: true, required: false
  private _monitorTagsFilter?: string[]; 
  public get monitorTagsFilter() {
    return this.getListAttribute('monitor_tags_filter');
  }
  public set monitorTagsFilter(value: string[]) {
    this._monitorTagsFilter = value;
  }
  public resetMonitorTagsFilter() {
    this._monitorTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTagsFilterInput() {
    return this._monitorTagsFilter;
  }

  // monitors - computed: true, optional: false, required: false
  private _monitors = new DataDatadogMonitorsMonitorsList(this, "monitors", false);
  public get monitors() {
    return this._monitors;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string; 
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: string[]; 
  public get tagsFilter() {
    return this.getListAttribute('tags_filter');
  }
  public set tagsFilter(value: string[]) {
    this._tagsFilter = value;
  }
  public resetTagsFilter() {
    this._tagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsFilterInput() {
    return this._tagsFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_tags_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._monitorTagsFilter),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      tags_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._tagsFilter),
    };
  }
}
