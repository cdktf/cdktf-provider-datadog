// https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsPrivateLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the private location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location#description SyntheticsPrivateLocation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location#id SyntheticsPrivateLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Synthetics private location name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location#name SyntheticsPrivateLocation#name}
  */
  readonly name: string;
  /**
  * A list of tags to associate with your synthetics private location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location#tags SyntheticsPrivateLocation#tags}
  */
  readonly tags?: string[];
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location#metadata SyntheticsPrivateLocation#metadata}
  */
  readonly metadata?: SyntheticsPrivateLocationMetadata;
}
export interface SyntheticsPrivateLocationMetadata {
  /**
  * A list of role identifiers pulled from the Roles API to restrict read and write access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location#restricted_roles SyntheticsPrivateLocation#restricted_roles}
  */
  readonly restrictedRoles?: string[];
}

export function syntheticsPrivateLocationMetadataToTerraform(struct?: SyntheticsPrivateLocationMetadataOutputReference | SyntheticsPrivateLocationMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedRoles),
  }
}

export class SyntheticsPrivateLocationMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsPrivateLocationMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedRoles = this._restrictedRoles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsPrivateLocationMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedRoles = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedRoles = value.restrictedRoles;
    }
  }

  // restricted_roles - computed: false, optional: true, required: false
  private _restrictedRoles?: string[]; 
  public get restrictedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_roles'));
  }
  public set restrictedRoles(value: string[]) {
    this._restrictedRoles = value;
  }
  public resetRestrictedRoles() {
    this._restrictedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRolesInput() {
    return this._restrictedRoles;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location datadog_synthetics_private_location}
*/
export class SyntheticsPrivateLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_private_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_private_location datadog_synthetics_private_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsPrivateLocationConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsPrivateLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_private_location',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new SyntheticsPrivateLocationMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SyntheticsPrivateLocationMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      metadata: syntheticsPrivateLocationMetadataToTerraform(this._metadata.internalValue),
    };
  }
}
