// https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/data-sources/teams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogTeamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search query. Can be team name, team handle, or email of team member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/data-sources/teams#filter_keyword DataDatadogTeams#filter_keyword}
  */
  readonly filterKeyword?: string;
  /**
  * When true, only returns teams the current user belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/data-sources/teams#filter_me DataDatadogTeams#filter_me}
  */
  readonly filterMe?: boolean | cdktf.IResolvable;
  /**
  * teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/data-sources/teams#teams DataDatadogTeams#teams}
  */
  readonly teams?: DataDatadogTeamsTeams[] | cdktf.IResolvable;
}
export interface DataDatadogTeamsTeams {
}

export function dataDatadogTeamsTeamsToTerraform(struct?: DataDatadogTeamsTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogTeamsTeamsToHclTerraform(struct?: DataDatadogTeamsTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogTeamsTeamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogTeamsTeams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTeamsTeams | cdktf.IResolvable | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // handle - computed: true, optional: false, required: false
  public get handle() {
    return this.getStringAttribute('handle');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_count - computed: true, optional: false, required: false
  public get linkCount() {
    return this.getNumberAttribute('link_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }
}

export class DataDatadogTeamsTeamsList extends cdktf.ComplexList {
  public internalValue? : DataDatadogTeamsTeams[] | cdktf.IResolvable

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
  public get(index: number): DataDatadogTeamsTeamsOutputReference {
    return new DataDatadogTeamsTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/data-sources/teams datadog_teams}
*/
export class DataDatadogTeams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_teams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogTeams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogTeams to import
  * @param importFromId The id of the existing DataDatadogTeams that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/data-sources/teams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogTeams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_teams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/data-sources/teams datadog_teams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogTeamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogTeamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_teams',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.60.0',
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
    this._filterKeyword = config.filterKeyword;
    this._filterMe = config.filterMe;
    this._teams.internalValue = config.teams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_keyword - computed: false, optional: true, required: false
  private _filterKeyword?: string; 
  public get filterKeyword() {
    return this.getStringAttribute('filter_keyword');
  }
  public set filterKeyword(value: string) {
    this._filterKeyword = value;
  }
  public resetFilterKeyword() {
    this._filterKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeywordInput() {
    return this._filterKeyword;
  }

  // filter_me - computed: false, optional: true, required: false
  private _filterMe?: boolean | cdktf.IResolvable; 
  public get filterMe() {
    return this.getBooleanAttribute('filter_me');
  }
  public set filterMe(value: boolean | cdktf.IResolvable) {
    this._filterMe = value;
  }
  public resetFilterMe() {
    this._filterMe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMeInput() {
    return this._filterMe;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // teams - computed: false, optional: true, required: false
  private _teams = new DataDatadogTeamsTeamsList(this, "teams", false);
  public get teams() {
    return this._teams;
  }
  public putTeams(value: DataDatadogTeamsTeams[] | cdktf.IResolvable) {
    this._teams.internalValue = value;
  }
  public resetTeams() {
    this._teams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_keyword: cdktf.stringToTerraform(this._filterKeyword),
      filter_me: cdktf.booleanToTerraform(this._filterMe),
      teams: cdktf.listMapper(dataDatadogTeamsTeamsToTerraform, true)(this._teams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_keyword: {
        value: cdktf.stringToHclTerraform(this._filterKeyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_me: {
        value: cdktf.booleanToHclTerraform(this._filterMe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teams: {
        value: cdktf.listMapperHcl(dataDatadogTeamsTeamsToHclTerraform, true)(this._teams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatadogTeamsTeamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
