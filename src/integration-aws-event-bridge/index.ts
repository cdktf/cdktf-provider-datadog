/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsEventBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your AWS Account ID without dashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge#account_id IntegrationAwsEventBridge#account_id}
  */
  readonly accountId: string;
  /**
  * True if Datadog should create the event bus in addition to the event source. Requires the `events:CreateEventBus` permission. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge#create_event_bus IntegrationAwsEventBridge#create_event_bus}
  */
  readonly createEventBus?: boolean | cdktf.IResolvable;
  /**
  * The given part of the event source name, which is then combined with an assigned suffix to form the full name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge#event_generator_name IntegrationAwsEventBridge#event_generator_name}
  */
  readonly eventGeneratorName: string;
  /**
  * The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge#region IntegrationAwsEventBridge#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge datadog_integration_aws_event_bridge}
*/
export class IntegrationAwsEventBridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_event_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsEventBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsEventBridge to import
  * @param importFromId The id of the existing IntegrationAwsEventBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsEventBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_event_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/integration_aws_event_bridge datadog_integration_aws_event_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsEventBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsEventBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_event_bridge',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.56.0',
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
    this._accountId = config.accountId;
    this._createEventBus = config.createEventBus;
    this._eventGeneratorName = config.eventGeneratorName;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // create_event_bus - computed: true, optional: true, required: false
  private _createEventBus?: boolean | cdktf.IResolvable; 
  public get createEventBus() {
    return this.getBooleanAttribute('create_event_bus');
  }
  public set createEventBus(value: boolean | cdktf.IResolvable) {
    this._createEventBus = value;
  }
  public resetCreateEventBus() {
    this._createEventBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEventBusInput() {
    return this._createEventBus;
  }

  // event_generator_name - computed: false, optional: false, required: true
  private _eventGeneratorName?: string; 
  public get eventGeneratorName() {
    return this.getStringAttribute('event_generator_name');
  }
  public set eventGeneratorName(value: string) {
    this._eventGeneratorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventGeneratorNameInput() {
    return this._eventGeneratorName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      create_event_bus: cdktf.booleanToTerraform(this._createEventBus),
      event_generator_name: cdktf.stringToTerraform(this._eventGeneratorName),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_event_bus: {
        value: cdktf.booleanToHclTerraform(this._createEventBus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_generator_name: {
        value: cdktf.stringToHclTerraform(this._eventGeneratorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
