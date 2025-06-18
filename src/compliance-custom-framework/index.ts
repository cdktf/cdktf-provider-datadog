/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComplianceCustomFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The framework handle. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#handle ComplianceCustomFramework#handle}
  */
  readonly handle: string;
  /**
  * The URL of the icon representing the framework
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#icon_url ComplianceCustomFramework#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * The framework name. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}
  */
  readonly name: string;
  /**
  * The framework version. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#version ComplianceCustomFramework#version}
  */
  readonly version: string;
  /**
  * requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#requirements ComplianceCustomFramework#requirements}
  */
  readonly requirements?: ComplianceCustomFrameworkRequirements[] | cdktf.IResolvable;
}
export interface ComplianceCustomFrameworkRequirementsControls {
  /**
  * The name of the control. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}
  */
  readonly name: string;
  /**
  * The set of rules IDs for the control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#rules_id ComplianceCustomFramework#rules_id}
  */
  readonly rulesId: string[];
}

export function complianceCustomFrameworkRequirementsControlsToTerraform(struct?: ComplianceCustomFrameworkRequirementsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rules_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulesId),
  }
}


export function complianceCustomFrameworkRequirementsControlsToHclTerraform(struct?: ComplianceCustomFrameworkRequirementsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulesId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComplianceCustomFrameworkRequirementsControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComplianceCustomFrameworkRequirementsControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rulesId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesId = this._rulesId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceCustomFrameworkRequirementsControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rulesId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rulesId = value.rulesId;
    }
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

  // rules_id - computed: false, optional: false, required: true
  private _rulesId?: string[]; 
  public get rulesId() {
    return cdktf.Fn.tolist(this.getListAttribute('rules_id'));
  }
  public set rulesId(value: string[]) {
    this._rulesId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesIdInput() {
    return this._rulesId;
  }
}

export class ComplianceCustomFrameworkRequirementsControlsList extends cdktf.ComplexList {
  public internalValue? : ComplianceCustomFrameworkRequirementsControls[] | cdktf.IResolvable

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
  public get(index: number): ComplianceCustomFrameworkRequirementsControlsOutputReference {
    return new ComplianceCustomFrameworkRequirementsControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceCustomFrameworkRequirements {
  /**
  * The name of the requirement. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}
  */
  readonly name: string;
  /**
  * controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#controls ComplianceCustomFramework#controls}
  */
  readonly controls?: ComplianceCustomFrameworkRequirementsControls[] | cdktf.IResolvable;
}

export function complianceCustomFrameworkRequirementsToTerraform(struct?: ComplianceCustomFrameworkRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    controls: cdktf.listMapper(complianceCustomFrameworkRequirementsControlsToTerraform, true)(struct!.controls),
  }
}


export function complianceCustomFrameworkRequirementsToHclTerraform(struct?: ComplianceCustomFrameworkRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controls: {
      value: cdktf.listMapperHcl(complianceCustomFrameworkRequirementsControlsToHclTerraform, true)(struct!.controls),
      isBlock: true,
      type: "list",
      storageClassType: "ComplianceCustomFrameworkRequirementsControlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComplianceCustomFrameworkRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComplianceCustomFrameworkRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._controls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controls = this._controls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceCustomFrameworkRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._controls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._controls.internalValue = value.controls;
    }
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

  // controls - computed: false, optional: true, required: false
  private _controls = new ComplianceCustomFrameworkRequirementsControlsList(this, "controls", false);
  public get controls() {
    return this._controls;
  }
  public putControls(value: ComplianceCustomFrameworkRequirementsControls[] | cdktf.IResolvable) {
    this._controls.internalValue = value;
  }
  public resetControls() {
    this._controls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls.internalValue;
  }
}

export class ComplianceCustomFrameworkRequirementsList extends cdktf.ComplexList {
  public internalValue? : ComplianceCustomFrameworkRequirements[] | cdktf.IResolvable

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
  public get(index: number): ComplianceCustomFrameworkRequirementsOutputReference {
    return new ComplianceCustomFrameworkRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework datadog_compliance_custom_framework}
*/
export class ComplianceCustomFramework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_compliance_custom_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComplianceCustomFramework to import
  * @param importFromId The id of the existing ComplianceCustomFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComplianceCustomFramework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_compliance_custom_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/compliance_custom_framework datadog_compliance_custom_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComplianceCustomFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: ComplianceCustomFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_compliance_custom_framework',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.66.0',
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
    this._handle = config.handle;
    this._iconUrl = config.iconUrl;
    this._name = config.name;
    this._version = config.version;
    this._requirements.internalValue = config.requirements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
  }

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // requirements - computed: false, optional: true, required: false
  private _requirements = new ComplianceCustomFrameworkRequirementsList(this, "requirements", false);
  public get requirements() {
    return this._requirements;
  }
  public putRequirements(value: ComplianceCustomFrameworkRequirements[] | cdktf.IResolvable) {
    this._requirements.internalValue = value;
  }
  public resetRequirements() {
    this._requirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      handle: cdktf.stringToTerraform(this._handle),
      icon_url: cdktf.stringToTerraform(this._iconUrl),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
      requirements: cdktf.listMapper(complianceCustomFrameworkRequirementsToTerraform, true)(this._requirements.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_url: {
        value: cdktf.stringToHclTerraform(this._iconUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirements: {
        value: cdktf.listMapperHcl(complianceCustomFrameworkRequirementsToHclTerraform, true)(this._requirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComplianceCustomFrameworkRequirementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
