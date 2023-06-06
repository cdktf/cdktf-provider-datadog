/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudConfigurationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the cloud configuration rule is enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#enabled CloudConfigurationRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Fields to group by when generating signals, e.g. @resource. Defaults to empty list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#group_by CloudConfigurationRule#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The message associated to the rule that will be shown in findings and signals.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#message CloudConfigurationRule#message}
  */
  readonly message: string;
  /**
  * The name of the cloud configuration rule.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#name CloudConfigurationRule#name}
  */
  readonly name: string;
  /**
  * Notification targets for signals. Defaults to empty list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#notifications CloudConfigurationRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Policy written in Rego format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#policy CloudConfigurationRule#policy}
  */
  readonly policy: string;
  /**
  * Related resource types to be checked by the rule. Defaults to empty list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#related_resource_types CloudConfigurationRule#related_resource_types}
  */
  readonly relatedResourceTypes?: string[];
  /**
  * Main resource type to be checked by the rule.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#resource_type CloudConfigurationRule#resource_type}
  */
  readonly resourceType: string;
  /**
  * Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#severity CloudConfigurationRule#severity}
  */
  readonly severity: string;
  /**
  * Tags of the rule, propagated to findings and signals. Defaults to empty list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule#tags CloudConfigurationRule#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule datadog_cloud_configuration_rule}
*/
export class CloudConfigurationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_cloud_configuration_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/cloud_configuration_rule datadog_cloud_configuration_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudConfigurationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudConfigurationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_cloud_configuration_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.26.0',
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
    this._enabled = config.enabled;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._message = config.message;
    this._name = config.name;
    this._notifications = config.notifications;
    this._policy = config.policy;
    this._relatedResourceTypes = config.relatedResourceTypes;
    this._resourceType = config.resourceType;
    this._severity = config.severity;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // related_resource_types - computed: false, optional: true, required: false
  private _relatedResourceTypes?: string[]; 
  public get relatedResourceTypes() {
    return this.getListAttribute('related_resource_types');
  }
  public set relatedResourceTypes(value: string[]) {
    this._relatedResourceTypes = value;
  }
  public resetRelatedResourceTypes() {
    this._relatedResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceTypesInput() {
    return this._relatedResourceTypes;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifications),
      policy: cdktf.stringToTerraform(this._policy),
      related_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relatedResourceTypes),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      severity: cdktf.stringToTerraform(this._severity),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
