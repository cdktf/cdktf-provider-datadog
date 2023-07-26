// https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * String to filter search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts#filter DataDatadogHosts#filter}
  */
  readonly filter?: string;
  /**
  * Number of seconds since UNIX epoch from which you want to search your hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts#from DataDatadogHosts#from}
  */
  readonly from?: number;
  /**
  * Include information on the muted status of hosts and when the mute expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts#include_muted_hosts_data DataDatadogHosts#include_muted_hosts_data}
  */
  readonly includeMutedHostsData?: boolean | cdktf.IResolvable;
  /**
  * Direction of sort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts#sort_dir DataDatadogHosts#sort_dir}
  */
  readonly sortDir?: string;
  /**
  * Sort hosts by this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts#sort_field DataDatadogHosts#sort_field}
  */
  readonly sortField?: string;
}
export interface DataDatadogHostsHostListMeta {
}

export function dataDatadogHostsHostListMetaToTerraform(struct?: DataDatadogHostsHostListMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogHostsHostListMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogHostsHostListMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogHostsHostListMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // cpu_cores - computed: true, optional: false, required: false
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }

  // gohai - computed: true, optional: false, required: false
  public get gohai() {
    return this.getStringAttribute('gohai');
  }

  // machine - computed: true, optional: false, required: false
  public get machine() {
    return this.getStringAttribute('machine');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // processor - computed: true, optional: false, required: false
  public get processor() {
    return this.getStringAttribute('processor');
  }

  // python_version - computed: true, optional: false, required: false
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }

  // socket_fqdn - computed: true, optional: false, required: false
  public get socketFqdn() {
    return this.getStringAttribute('socket_fqdn');
  }

  // socket_hostname - computed: true, optional: false, required: false
  public get socketHostname() {
    return this.getStringAttribute('socket_hostname');
  }
}
export interface DataDatadogHostsHostListMetrics {
}

export function dataDatadogHostsHostListMetricsToTerraform(struct?: DataDatadogHostsHostListMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogHostsHostListMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogHostsHostListMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogHostsHostListMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // iowait - computed: true, optional: false, required: false
  public get iowait() {
    return this.getNumberAttribute('iowait');
  }

  // load - computed: true, optional: false, required: false
  public get load() {
    return this.getNumberAttribute('load');
  }
}
export interface DataDatadogHostsHostListStruct {
}

export function dataDatadogHostsHostListStructToTerraform(struct?: DataDatadogHostsHostListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogHostsHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogHostsHostListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogHostsHostListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // apps - computed: true, optional: false, required: false
  public get apps() {
    return this.getListAttribute('apps');
  }

  // aws_name - computed: true, optional: false, required: false
  public get awsName() {
    return this.getStringAttribute('aws_name');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_muted - computed: true, optional: false, required: false
  public get isMuted() {
    return this.getBooleanAttribute('is_muted');
  }

  // last_reported_time - computed: true, optional: false, required: false
  public get lastReportedTime() {
    return this.getNumberAttribute('last_reported_time');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataDatadogHostsHostListMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataDatadogHostsHostListMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // mute_timeout - computed: true, optional: false, required: false
  public get muteTimeout() {
    return this.getNumberAttribute('mute_timeout');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.getListAttribute('sources');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }
}

export class DataDatadogHostsHostListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogHostsHostListStructOutputReference {
    return new DataDatadogHostsHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts datadog_hosts}
*/
export class DataDatadogHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_hosts";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/hosts datadog_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogHostsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogHostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_hosts',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.28.0',
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
    this._filter = config.filter;
    this._from = config.from;
    this._includeMutedHostsData = config.includeMutedHostsData;
    this._sortDir = config.sortDir;
    this._sortField = config.sortField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // host_list - computed: true, optional: false, required: false
  private _hostList = new DataDatadogHostsHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_muted_hosts_data - computed: false, optional: true, required: false
  private _includeMutedHostsData?: boolean | cdktf.IResolvable; 
  public get includeMutedHostsData() {
    return this.getBooleanAttribute('include_muted_hosts_data');
  }
  public set includeMutedHostsData(value: boolean | cdktf.IResolvable) {
    this._includeMutedHostsData = value;
  }
  public resetIncludeMutedHostsData() {
    this._includeMutedHostsData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMutedHostsDataInput() {
    return this._includeMutedHostsData;
  }

  // sort_dir - computed: false, optional: true, required: false
  private _sortDir?: string; 
  public get sortDir() {
    return this.getStringAttribute('sort_dir');
  }
  public set sortDir(value: string) {
    this._sortDir = value;
  }
  public resetSortDir() {
    this._sortDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirInput() {
    return this._sortDir;
  }

  // sort_field - computed: false, optional: true, required: false
  private _sortField?: string; 
  public get sortField() {
    return this.getStringAttribute('sort_field');
  }
  public set sortField(value: string) {
    this._sortField = value;
  }
  public resetSortField() {
    this._sortField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFieldInput() {
    return this._sortField;
  }

  // total_matching - computed: true, optional: false, required: false
  public get totalMatching() {
    return this.getNumberAttribute('total_matching');
  }

  // total_returned - computed: true, optional: false, required: false
  public get totalReturned() {
    return this.getNumberAttribute('total_returned');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      from: cdktf.numberToTerraform(this._from),
      include_muted_hosts_data: cdktf.booleanToTerraform(this._includeMutedHostsData),
      sort_dir: cdktf.stringToTerraform(this._sortDir),
      sort_field: cdktf.stringToTerraform(this._sortField),
    };
  }
}
