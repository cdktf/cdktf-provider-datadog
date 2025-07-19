# `logsCustomDestination` Submodule <a name="`logsCustomDestination` Submodule" id="@cdktf/provider-datadog.logsCustomDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsCustomDestination <a name="LogsCustomDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination datadog_logs_custom_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  elasticsearch_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestination]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  forward_tags: typing.Union[bool, IResolvable] = None,
  forward_tags_restriction_list: typing.List[str] = None,
  forward_tags_restriction_list_type: str = None,
  http_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestination]] = None,
  microsoft_sentinel_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationMicrosoftSentinelDestination]] = None,
  query: str = None,
  splunk_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationSplunkDestination]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | The custom destination name. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.elasticsearchDestination">elasticsearch_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]</code> | elasticsearch_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether logs matching this custom destination should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTags">forward_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether tags from the forwarded logs should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionList">forward_tags_restriction_list</a></code> | <code>typing.List[str]</code> | List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionListType">forward_tags_restriction_list_type</a></code> | <code>str</code> | How the `forward_tags_restriction_list` parameter should be interpreted. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.httpDestination">http_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]</code> | http_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.microsoftSentinelDestination">microsoft_sentinel_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]</code> | microsoft_sentinel_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.query">query</a></code> | <code>str</code> | The custom destination query filter. Logs matching this query are forwarded to the destination. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.splunkDestination">splunk_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]</code> | splunk_destination block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.name"></a>

- *Type:* str

The custom destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#name LogsCustomDestination#name}

---

##### `elasticsearch_destination`<sup>Optional</sup> <a name="elasticsearch_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.elasticsearchDestination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]

elasticsearch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#elasticsearch_destination LogsCustomDestination#elasticsearch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether logs matching this custom destination should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#enabled LogsCustomDestination#enabled}

---

##### `forward_tags`<sup>Optional</sup> <a name="forward_tags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether tags from the forwarded logs should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#forward_tags LogsCustomDestination#forward_tags}

---

##### `forward_tags_restriction_list`<sup>Optional</sup> <a name="forward_tags_restriction_list" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionList"></a>

- *Type:* typing.List[str]

List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#forward_tags_restriction_list LogsCustomDestination#forward_tags_restriction_list}

---

##### `forward_tags_restriction_list_type`<sup>Optional</sup> <a name="forward_tags_restriction_list_type" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionListType"></a>

- *Type:* str

How the `forward_tags_restriction_list` parameter should be interpreted.

If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
are forwarded.
`BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list. Valid values are `ALLOW_LIST`, `BLOCK_LIST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#forward_tags_restriction_list_type LogsCustomDestination#forward_tags_restriction_list_type}

---

##### `http_destination`<sup>Optional</sup> <a name="http_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.httpDestination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]

http_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#http_destination LogsCustomDestination#http_destination}

---

##### `microsoft_sentinel_destination`<sup>Optional</sup> <a name="microsoft_sentinel_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.microsoftSentinelDestination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]

microsoft_sentinel_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#microsoft_sentinel_destination LogsCustomDestination#microsoft_sentinel_destination}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.query"></a>

- *Type:* str

The custom destination query filter. Logs matching this query are forwarded to the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#query LogsCustomDestination#query}

---

##### `splunk_destination`<sup>Optional</sup> <a name="splunk_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.splunkDestination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]

splunk_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#splunk_destination LogsCustomDestination#splunk_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination">put_elasticsearch_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination">put_http_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination">put_microsoft_sentinel_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination">put_splunk_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination">reset_elasticsearch_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags">reset_forward_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList">reset_forward_tags_restriction_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType">reset_forward_tags_restriction_list_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination">reset_http_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetMicrosoftSentinelDestination">reset_microsoft_sentinel_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination">reset_splunk_destination</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_elasticsearch_destination` <a name="put_elasticsearch_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination"></a>

```python
def put_elasticsearch_destination(
  value: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]

---

##### `put_http_destination` <a name="put_http_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination"></a>

```python
def put_http_destination(
  value: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]

---

##### `put_microsoft_sentinel_destination` <a name="put_microsoft_sentinel_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination"></a>

```python
def put_microsoft_sentinel_destination(
  value: typing.Union[IResolvable, typing.List[LogsCustomDestinationMicrosoftSentinelDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]

---

##### `put_splunk_destination` <a name="put_splunk_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination"></a>

```python
def put_splunk_destination(
  value: typing.Union[IResolvable, typing.List[LogsCustomDestinationSplunkDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]

---

##### `reset_elasticsearch_destination` <a name="reset_elasticsearch_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination"></a>

```python
def reset_elasticsearch_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_forward_tags` <a name="reset_forward_tags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags"></a>

```python
def reset_forward_tags() -> None
```

##### `reset_forward_tags_restriction_list` <a name="reset_forward_tags_restriction_list" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList"></a>

```python
def reset_forward_tags_restriction_list() -> None
```

##### `reset_forward_tags_restriction_list_type` <a name="reset_forward_tags_restriction_list_type" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType"></a>

```python
def reset_forward_tags_restriction_list_type() -> None
```

##### `reset_http_destination` <a name="reset_http_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination"></a>

```python
def reset_http_destination() -> None
```

##### `reset_microsoft_sentinel_destination` <a name="reset_microsoft_sentinel_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetMicrosoftSentinelDestination"></a>

```python
def reset_microsoft_sentinel_destination() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_splunk_destination` <a name="reset_splunk_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination"></a>

```python
def reset_splunk_destination() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogsCustomDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestination.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogsCustomDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsCustomDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsCustomDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogsCustomDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination">elasticsearch_destination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination">http_destination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestination">microsoft_sentinel_destination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList">LogsCustomDestinationMicrosoftSentinelDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination">splunk_destination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput">elasticsearch_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput">forward_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput">forward_tags_restriction_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput">forward_tags_restriction_list_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput">http_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestinationInput">microsoft_sentinel_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput">splunk_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags">forward_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList">forward_tags_restriction_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType">forward_tags_restriction_list_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query">query</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `elasticsearch_destination`<sup>Required</sup> <a name="elasticsearch_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination"></a>

```python
elasticsearch_destination: LogsCustomDestinationElasticsearchDestinationList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a>

---

##### `http_destination`<sup>Required</sup> <a name="http_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination"></a>

```python
http_destination: LogsCustomDestinationHttpDestinationList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `microsoft_sentinel_destination`<sup>Required</sup> <a name="microsoft_sentinel_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestination"></a>

```python
microsoft_sentinel_destination: LogsCustomDestinationMicrosoftSentinelDestinationList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList">LogsCustomDestinationMicrosoftSentinelDestinationList</a>

---

##### `splunk_destination`<sup>Required</sup> <a name="splunk_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination"></a>

```python
splunk_destination: LogsCustomDestinationSplunkDestinationList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a>

---

##### `elasticsearch_destination_input`<sup>Optional</sup> <a name="elasticsearch_destination_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput"></a>

```python
elasticsearch_destination_input: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_tags_input`<sup>Optional</sup> <a name="forward_tags_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput"></a>

```python
forward_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_tags_restriction_list_input`<sup>Optional</sup> <a name="forward_tags_restriction_list_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput"></a>

```python
forward_tags_restriction_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `forward_tags_restriction_list_type_input`<sup>Optional</sup> <a name="forward_tags_restriction_list_type_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput"></a>

```python
forward_tags_restriction_list_type_input: str
```

- *Type:* str

---

##### `http_destination_input`<sup>Optional</sup> <a name="http_destination_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput"></a>

```python
http_destination_input: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]

---

##### `microsoft_sentinel_destination_input`<sup>Optional</sup> <a name="microsoft_sentinel_destination_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestinationInput"></a>

```python
microsoft_sentinel_destination_input: typing.Union[IResolvable, typing.List[LogsCustomDestinationMicrosoftSentinelDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `splunk_destination_input`<sup>Optional</sup> <a name="splunk_destination_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput"></a>

```python
splunk_destination_input: typing.Union[IResolvable, typing.List[LogsCustomDestinationSplunkDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_tags`<sup>Required</sup> <a name="forward_tags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags"></a>

```python
forward_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_tags_restriction_list`<sup>Required</sup> <a name="forward_tags_restriction_list" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList"></a>

```python
forward_tags_restriction_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `forward_tags_restriction_list_type`<sup>Required</sup> <a name="forward_tags_restriction_list_type" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType"></a>

```python
forward_tags_restriction_list_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query"></a>

```python
query: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsCustomDestinationConfig <a name="LogsCustomDestinationConfig" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  elasticsearch_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestination]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  forward_tags: typing.Union[bool, IResolvable] = None,
  forward_tags_restriction_list: typing.List[str] = None,
  forward_tags_restriction_list_type: str = None,
  http_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestination]] = None,
  microsoft_sentinel_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationMicrosoftSentinelDestination]] = None,
  query: str = None,
  splunk_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationSplunkDestination]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name">name</a></code> | <code>str</code> | The custom destination name. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination">elasticsearch_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]</code> | elasticsearch_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether logs matching this custom destination should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags">forward_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether tags from the forwarded logs should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList">forward_tags_restriction_list</a></code> | <code>typing.List[str]</code> | List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType">forward_tags_restriction_list_type</a></code> | <code>str</code> | How the `forward_tags_restriction_list` parameter should be interpreted. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination">http_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]</code> | http_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.microsoftSentinelDestination">microsoft_sentinel_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]</code> | microsoft_sentinel_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query">query</a></code> | <code>str</code> | The custom destination query filter. Logs matching this query are forwarded to the destination. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination">splunk_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]</code> | splunk_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The custom destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#name LogsCustomDestination#name}

---

##### `elasticsearch_destination`<sup>Optional</sup> <a name="elasticsearch_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination"></a>

```python
elasticsearch_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]

elasticsearch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#elasticsearch_destination LogsCustomDestination#elasticsearch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether logs matching this custom destination should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#enabled LogsCustomDestination#enabled}

---

##### `forward_tags`<sup>Optional</sup> <a name="forward_tags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags"></a>

```python
forward_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether tags from the forwarded logs should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#forward_tags LogsCustomDestination#forward_tags}

---

##### `forward_tags_restriction_list`<sup>Optional</sup> <a name="forward_tags_restriction_list" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList"></a>

```python
forward_tags_restriction_list: typing.List[str]
```

- *Type:* typing.List[str]

List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#forward_tags_restriction_list LogsCustomDestination#forward_tags_restriction_list}

---

##### `forward_tags_restriction_list_type`<sup>Optional</sup> <a name="forward_tags_restriction_list_type" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType"></a>

```python
forward_tags_restriction_list_type: str
```

- *Type:* str

How the `forward_tags_restriction_list` parameter should be interpreted.

If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
are forwarded.
`BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list. Valid values are `ALLOW_LIST`, `BLOCK_LIST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#forward_tags_restriction_list_type LogsCustomDestination#forward_tags_restriction_list_type}

---

##### `http_destination`<sup>Optional</sup> <a name="http_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination"></a>

```python
http_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]

http_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#http_destination LogsCustomDestination#http_destination}

---

##### `microsoft_sentinel_destination`<sup>Optional</sup> <a name="microsoft_sentinel_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.microsoftSentinelDestination"></a>

```python
microsoft_sentinel_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationMicrosoftSentinelDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]

microsoft_sentinel_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#microsoft_sentinel_destination LogsCustomDestination#microsoft_sentinel_destination}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The custom destination query filter. Logs matching this query are forwarded to the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#query LogsCustomDestination#query}

---

##### `splunk_destination`<sup>Optional</sup> <a name="splunk_destination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination"></a>

```python
splunk_destination: typing.Union[IResolvable, typing.List[LogsCustomDestinationSplunkDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]

splunk_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#splunk_destination LogsCustomDestination#splunk_destination}

---

### LogsCustomDestinationElasticsearchDestination <a name="LogsCustomDestinationElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationElasticsearchDestination(
  endpoint: str,
  index_name: str,
  basic_auth: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestinationBasicAuth]] = None,
  index_rotation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint">endpoint</a></code> | <code>str</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName">index_name</a></code> | <code>str</code> | Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)). |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth">basic_auth</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]]</code> | basic_auth block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation">index_rotation</a></code> | <code>str</code> | Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}'). |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#index_name LogsCustomDestination#index_name}

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth"></a>

```python
basic_auth: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestinationBasicAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]]

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `index_rotation`<sup>Optional</sup> <a name="index_rotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation"></a>

```python
index_rotation: str
```

- *Type:* str

Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}').

You can customize the index rotation naming pattern by choosing one of these options:
- Hourly: 'yyyy-MM-dd-HH' (as an example, it would render: '2022-10-19-09')
- Daily: 'yyyy-MM-dd' (as an example, it would render: '2022-10-19')
- Weekly: 'yyyy-'W'ww' (as an example, it would render: '2022-W42')
- Monthly: 'yyyy-MM' (as an example, it would render: '2022-10')
If this field is missing or is blank, it means that the index name will always be the same
(that is, no rotation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#index_rotation LogsCustomDestination#index_rotation}

---

### LogsCustomDestinationElasticsearchDestinationBasicAuth <a name="LogsCustomDestinationElasticsearchDestinationBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password">password</a></code> | <code>str</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username">username</a></code> | <code>str</code> | The username of the authentication. This field is not returned by the API. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestination <a name="LogsCustomDestinationHttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestination(
  endpoint: str,
  basic_auth: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationBasicAuth]] = None,
  custom_header_auth: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationCustomHeaderAuth]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint">endpoint</a></code> | <code>str</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth">basic_auth</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]]</code> | basic_auth block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth">custom_header_auth</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]]</code> | custom_header_auth block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth"></a>

```python
basic_auth: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationBasicAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]]

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `custom_header_auth`<sup>Optional</sup> <a name="custom_header_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth"></a>

```python
custom_header_auth: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationCustomHeaderAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]]

custom_header_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#custom_header_auth LogsCustomDestination#custom_header_auth}

---

### LogsCustomDestinationHttpDestinationBasicAuth <a name="LogsCustomDestinationHttpDestinationBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password">password</a></code> | <code>str</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username">username</a></code> | <code>str</code> | The username of the authentication. This field is not returned by the API. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestinationCustomHeaderAuth <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth(
  header_name: str,
  header_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName">header_name</a></code> | <code>str</code> | The header name of the authentication. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue">header_value</a></code> | <code>str</code> | The header value of the authentication. This field is not returned by the API. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

The header name of the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#header_name LogsCustomDestination#header_name}

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

The header value of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#header_value LogsCustomDestination#header_value}

---

### LogsCustomDestinationMicrosoftSentinelDestination <a name="LogsCustomDestinationMicrosoftSentinelDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination(
  client_id: str,
  data_collection_endpoint: str,
  data_collection_rule_id: str,
  stream_name: str,
  tenant_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.clientId">client_id</a></code> | <code>str</code> | Client ID from the Datadog Azure Integration. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionEndpoint">data_collection_endpoint</a></code> | <code>str</code> | Azure Data Collection Endpoint. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionRuleId">data_collection_rule_id</a></code> | <code>str</code> | Azure Data Collection Rule ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.streamName">stream_name</a></code> | <code>str</code> | Azure stream name. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.tenantId">tenant_id</a></code> | <code>str</code> | Tenant ID from the Datadog Azure Integration. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Client ID from the Datadog Azure Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#client_id LogsCustomDestination#client_id}

---

##### `data_collection_endpoint`<sup>Required</sup> <a name="data_collection_endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionEndpoint"></a>

```python
data_collection_endpoint: str
```

- *Type:* str

Azure Data Collection Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#data_collection_endpoint LogsCustomDestination#data_collection_endpoint}

---

##### `data_collection_rule_id`<sup>Required</sup> <a name="data_collection_rule_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionRuleId"></a>

```python
data_collection_rule_id: str
```

- *Type:* str

Azure Data Collection Rule ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#data_collection_rule_id LogsCustomDestination#data_collection_rule_id}

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Azure stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#stream_name LogsCustomDestination#stream_name}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Tenant ID from the Datadog Azure Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#tenant_id LogsCustomDestination#tenant_id}

---

### LogsCustomDestinationSplunkDestination <a name="LogsCustomDestinationSplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationSplunkDestination(
  access_token: str,
  endpoint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken">access_token</a></code> | <code>str</code> | Access token of the Splunk HTTP Event Collector. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint">endpoint</a></code> | <code>str</code> | The destination for which logs will be forwarded to. |

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Access token of the Splunk HTTP Event Collector. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#access_token LogsCustomDestination#access_token}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsCustomDestinationElasticsearchDestinationBasicAuthList <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestinationBasicAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]]

---


### LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsCustomDestinationElasticsearchDestinationBasicAuth]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]

---


### LogsCustomDestinationElasticsearchDestinationList <a name="LogsCustomDestinationElasticsearchDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsCustomDestinationElasticsearchDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]]

---


### LogsCustomDestinationElasticsearchDestinationOutputReference <a name="LogsCustomDestinationElasticsearchDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth">put_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth">reset_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation">reset_index_rotation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_auth` <a name="put_basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth"></a>

```python
def put_basic_auth(
  value: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestinationBasicAuth]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]]

---

##### `reset_basic_auth` <a name="reset_basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth"></a>

```python
def reset_basic_auth() -> None
```

##### `reset_index_rotation` <a name="reset_index_rotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation"></a>

```python
def reset_index_rotation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput">basic_auth_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput">index_rotation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation">index_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth`<sup>Required</sup> <a name="basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth"></a>

```python
basic_auth: LogsCustomDestinationElasticsearchDestinationBasicAuthList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a>

---

##### `basic_auth_input`<sup>Optional</sup> <a name="basic_auth_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput"></a>

```python
basic_auth_input: typing.Union[IResolvable, typing.List[LogsCustomDestinationElasticsearchDestinationBasicAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>]]

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `index_rotation_input`<sup>Optional</sup> <a name="index_rotation_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput"></a>

```python
index_rotation_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `index_rotation`<sup>Required</sup> <a name="index_rotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation"></a>

```python
index_rotation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsCustomDestinationElasticsearchDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>]

---


### LogsCustomDestinationHttpDestinationBasicAuthList <a name="LogsCustomDestinationHttpDestinationBasicAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsCustomDestinationHttpDestinationBasicAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationBasicAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]]

---


### LogsCustomDestinationHttpDestinationBasicAuthOutputReference <a name="LogsCustomDestinationHttpDestinationBasicAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsCustomDestinationHttpDestinationBasicAuth]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthList <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationCustomHeaderAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]]

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput">header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput"></a>

```python
header_value_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsCustomDestinationHttpDestinationCustomHeaderAuth]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]

---


### LogsCustomDestinationHttpDestinationList <a name="LogsCustomDestinationHttpDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsCustomDestinationHttpDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]]

---


### LogsCustomDestinationHttpDestinationOutputReference <a name="LogsCustomDestinationHttpDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth">put_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth">put_custom_header_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth">reset_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth">reset_custom_header_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_auth` <a name="put_basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth"></a>

```python
def put_basic_auth(
  value: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationBasicAuth]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]]

---

##### `put_custom_header_auth` <a name="put_custom_header_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth"></a>

```python
def put_custom_header_auth(
  value: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationCustomHeaderAuth]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]]

---

##### `reset_basic_auth` <a name="reset_basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth"></a>

```python
def reset_basic_auth() -> None
```

##### `reset_custom_header_auth` <a name="reset_custom_header_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth"></a>

```python
def reset_custom_header_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth">custom_header_auth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput">basic_auth_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput">custom_header_auth_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth`<sup>Required</sup> <a name="basic_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth"></a>

```python
basic_auth: LogsCustomDestinationHttpDestinationBasicAuthList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a>

---

##### `custom_header_auth`<sup>Required</sup> <a name="custom_header_auth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth"></a>

```python
custom_header_auth: LogsCustomDestinationHttpDestinationCustomHeaderAuthList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a>

---

##### `basic_auth_input`<sup>Optional</sup> <a name="basic_auth_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput"></a>

```python
basic_auth_input: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationBasicAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>]]

---

##### `custom_header_auth_input`<sup>Optional</sup> <a name="custom_header_auth_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput"></a>

```python
custom_header_auth_input: typing.Union[IResolvable, typing.List[LogsCustomDestinationHttpDestinationCustomHeaderAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>]]

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsCustomDestinationHttpDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>]

---


### LogsCustomDestinationMicrosoftSentinelDestinationList <a name="LogsCustomDestinationMicrosoftSentinelDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsCustomDestinationMicrosoftSentinelDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsCustomDestinationMicrosoftSentinelDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]]

---


### LogsCustomDestinationMicrosoftSentinelDestinationOutputReference <a name="LogsCustomDestinationMicrosoftSentinelDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpointInput">data_collection_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleIdInput">data_collection_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpoint">data_collection_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleId">data_collection_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `data_collection_endpoint_input`<sup>Optional</sup> <a name="data_collection_endpoint_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpointInput"></a>

```python
data_collection_endpoint_input: str
```

- *Type:* str

---

##### `data_collection_rule_id_input`<sup>Optional</sup> <a name="data_collection_rule_id_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleIdInput"></a>

```python
data_collection_rule_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `data_collection_endpoint`<sup>Required</sup> <a name="data_collection_endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpoint"></a>

```python
data_collection_endpoint: str
```

- *Type:* str

---

##### `data_collection_rule_id`<sup>Required</sup> <a name="data_collection_rule_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleId"></a>

```python
data_collection_rule_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsCustomDestinationMicrosoftSentinelDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>]

---


### LogsCustomDestinationSplunkDestinationList <a name="LogsCustomDestinationSplunkDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationSplunkDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsCustomDestinationSplunkDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsCustomDestinationSplunkDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]]

---


### LogsCustomDestinationSplunkDestinationOutputReference <a name="LogsCustomDestinationSplunkDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_custom_destination

logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsCustomDestinationSplunkDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>]

---



