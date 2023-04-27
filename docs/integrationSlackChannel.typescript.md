# `datadog_integration_slack_channel`

Refer to the Terraform Registory for docs: [`datadog_integration_slack_channel`](https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel).

# `integrationSlackChannel` Submodule <a name="`integrationSlackChannel` Submodule" id="@cdktf/provider-datadog.integrationSlackChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSlackChannel <a name="IntegrationSlackChannel" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel datadog_integration_slack_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer"></a>

```typescript
import { integrationSlackChannel } from '@cdktf/provider-datadog'

new integrationSlackChannel.IntegrationSlackChannel(scope: Construct, id: string, config: IntegrationSlackChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig">IntegrationSlackChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig">IntegrationSlackChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay">putDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDisplay` <a name="putDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay"></a>

```typescript
public putDisplay(value: IntegrationSlackChannelDisplay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct"></a>

```typescript
import { integrationSlackChannel } from '@cdktf/provider-datadog'

integrationSlackChannel.IntegrationSlackChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement"></a>

```typescript
import { integrationSlackChannel } from '@cdktf/provider-datadog'

integrationSlackChannel.IntegrationSlackChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource"></a>

```typescript
import { integrationSlackChannel } from '@cdktf/provider-datadog'

integrationSlackChannel.IntegrationSlackChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput">displayInput</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display"></a>

```typescript
public readonly display: IntegrationSlackChannelDisplayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput"></a>

```typescript
public readonly displayInput: IntegrationSlackChannelDisplay;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSlackChannelConfig <a name="IntegrationSlackChannelConfig" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.Initializer"></a>

```typescript
import { integrationSlackChannel } from '@cdktf/provider-datadog'

const integrationSlackChannelConfig: integrationSlackChannel.IntegrationSlackChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName">accountName</a></code> | <code>string</code> | Slack account name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName">channelName</a></code> | <code>string</code> | Slack channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | display block. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Slack account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display"></a>

```typescript
public readonly display: IntegrationSlackChannelDisplay;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

display block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IntegrationSlackChannelDisplay <a name="IntegrationSlackChannelDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.Initializer"></a>

```typescript
import { integrationSlackChannel } from '@cdktf/provider-datadog'

const integrationSlackChannelDisplay: integrationSlackChannel.IntegrationSlackChannelDisplay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message">message</a></code> | <code>boolean \| cdktf.IResolvable</code> | Show the main body of the alert event. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified">notified</a></code> | <code>boolean \| cdktf.IResolvable</code> | Show the list of @-handles in the alert event. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot">snapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Show the alert event's snapshot image. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags">tags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Show the scopes on which the monitor alerted. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message"></a>

```typescript
public readonly message: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Show the main body of the alert event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#message IntegrationSlackChannel#message}

---

##### `notified`<sup>Optional</sup> <a name="notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified"></a>

```typescript
public readonly notified: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Show the list of @-handles in the alert event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#notified IntegrationSlackChannel#notified}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot"></a>

```typescript
public readonly snapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Show the alert event's snapshot image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#snapshot IntegrationSlackChannel#snapshot}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags"></a>

```typescript
public readonly tags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Show the scopes on which the monitor alerted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_slack_channel#tags IntegrationSlackChannel#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSlackChannelDisplayOutputReference <a name="IntegrationSlackChannelDisplayOutputReference" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer"></a>

```typescript
import { integrationSlackChannel } from '@cdktf/provider-datadog'

new integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified">resetNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetNotified` <a name="resetNotified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified"></a>

```typescript
public resetNotified(): void
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot"></a>

```typescript
public resetSnapshot(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput">messageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput">notifiedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput">snapshotInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput">tagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message">message</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified">notified</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot">snapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags">tags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifiedInput`<sup>Optional</sup> <a name="notifiedInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput"></a>

```typescript
public readonly notifiedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput"></a>

```typescript
public readonly snapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message"></a>

```typescript
public readonly message: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notified`<sup>Required</sup> <a name="notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified"></a>

```typescript
public readonly notified: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot"></a>

```typescript
public readonly snapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags"></a>

```typescript
public readonly tags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationSlackChannelDisplay;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---



