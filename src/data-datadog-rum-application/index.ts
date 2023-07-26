// https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/rum_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogRumApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the RUM application. Cannot be used with name and type filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/rum_application#id DataDatadogRumApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name used to search for a RUM application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/rum_application#name_filter DataDatadogRumApplication#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * The type used to search for a RUM application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/rum_application#type_filter DataDatadogRumApplication#type_filter}
  */
  readonly typeFilter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/rum_application datadog_rum_application}
*/
export class DataDatadogRumApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_rum_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/rum_application datadog_rum_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogRumApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogRumApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_rum_application',
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
    this._id = config.id;
    this._nameFilter = config.nameFilter;
    this._typeFilter = config.typeFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_filter - computed: false, optional: true, required: false
  private _typeFilter?: string; 
  public get typeFilter() {
    return this.getStringAttribute('type_filter');
  }
  public set typeFilter(value: string) {
    this._typeFilter = value;
  }
  public resetTypeFilter() {
    this._typeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeFilterInput() {
    return this._typeFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      type_filter: cdktf.stringToTerraform(this._typeFilter),
    };
  }
}
