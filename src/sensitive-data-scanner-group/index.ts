// https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensitiveDataScannerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Datadog scanning group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group#description SensitiveDataScannerGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not the scanning group is enabled. If the group doesn't contain any rule or if all the rules in it are disabled, the group is force-disabled by our backend
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group#is_enabled SensitiveDataScannerGroup#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Name of the Datadog scanning group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group#name SensitiveDataScannerGroup#name}
  */
  readonly name: string;
  /**
  * List of products the scanning group applies.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group#product_list SensitiveDataScannerGroup#product_list}
  */
  readonly productList: string[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group#filter SensitiveDataScannerGroup#filter}
  */
  readonly filter: SensitiveDataScannerGroupFilter;
}
export interface SensitiveDataScannerGroupFilter {
  /**
  * Query to filter the events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group#query SensitiveDataScannerGroup#query}
  */
  readonly query: string;
}

export function sensitiveDataScannerGroupFilterToTerraform(struct?: SensitiveDataScannerGroupFilterOutputReference | SensitiveDataScannerGroupFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class SensitiveDataScannerGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SensitiveDataScannerGroupFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensitiveDataScannerGroupFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group datadog_sensitive_data_scanner_group}
*/
export class SensitiveDataScannerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_sensitive_data_scanner_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group datadog_sensitive_data_scanner_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensitiveDataScannerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SensitiveDataScannerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_sensitive_data_scanner_group',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.25.0',
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
    this._description = config.description;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._productList = config.productList;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // product_list - computed: false, optional: false, required: true
  private _productList?: string[]; 
  public get productList() {
    return cdktf.Fn.tolist(this.getListAttribute('product_list'));
  }
  public set productList(value: string[]) {
    this._productList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productListInput() {
    return this._productList;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SensitiveDataScannerGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SensitiveDataScannerGroupFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      product_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productList),
      filter: sensitiveDataScannerGroupFilterToTerraform(this._filter.internalValue),
    };
  }
}
