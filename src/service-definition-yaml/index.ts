/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/service_definition_yaml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDefinitionYamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/service_definition_yaml#id ServiceDefinitionYaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The YAML/JSON formatted definition of the service
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/service_definition_yaml#service_definition ServiceDefinitionYaml#service_definition}
  */
  readonly serviceDefinition: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/service_definition_yaml datadog_service_definition_yaml}
*/
export class ServiceDefinitionYaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_service_definition_yaml";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/service_definition_yaml datadog_service_definition_yaml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDefinitionYamlConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDefinitionYamlConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_definition_yaml',
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
    this._serviceDefinition = config.serviceDefinition;
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

  // service_definition - computed: false, optional: false, required: true
  private _serviceDefinition?: string; 
  public get serviceDefinition() {
    return this.getStringAttribute('service_definition');
  }
  public set serviceDefinition(value: string) {
    this._serviceDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDefinitionInput() {
    return this._serviceDefinition;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_definition: cdktf.stringToTerraform(this._serviceDefinition),
    };
  }
}
