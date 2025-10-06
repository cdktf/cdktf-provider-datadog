# `cloudWorkloadSecurityAgentRule` Submodule <a name="`cloudWorkloadSecurityAgentRule` Submodule" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudWorkloadSecurityAgentRule <a name="CloudWorkloadSecurityAgentRule" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule datadog_cloud_workload_security_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer"></a>

```typescript
import { cloudWorkloadSecurityAgentRule } from '@cdktf/provider-datadog'

new cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule(scope: Construct, id: string, config: CloudWorkloadSecurityAgentRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig">CloudWorkloadSecurityAgentRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig">CloudWorkloadSecurityAgentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudWorkloadSecurityAgentRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct"></a>

```typescript
import { cloudWorkloadSecurityAgentRule } from '@cdktf/provider-datadog'

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement"></a>

```typescript
import { cloudWorkloadSecurityAgentRule } from '@cdktf/provider-datadog'

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource"></a>

```typescript
import { cloudWorkloadSecurityAgentRule } from '@cdktf/provider-datadog'

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport"></a>

```typescript
import { cloudWorkloadSecurityAgentRule } from '@cdktf/provider-datadog'

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudWorkloadSecurityAgentRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudWorkloadSecurityAgentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudWorkloadSecurityAgentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudWorkloadSecurityAgentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudWorkloadSecurityAgentRuleConfig <a name="CloudWorkloadSecurityAgentRuleConfig" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.Initializer"></a>

```typescript
import { cloudWorkloadSecurityAgentRule } from '@cdktf/provider-datadog'

const cloudWorkloadSecurityAgentRuleConfig: cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression">expression</a></code> | <code>string</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description">description</a></code> | <code>string</code> | The description of the Agent rule. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the Agent rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule#expression CloudWorkloadSecurityAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule#name CloudWorkloadSecurityAgentRule#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Agent rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule#description CloudWorkloadSecurityAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the Agent rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule#enabled CloudWorkloadSecurityAgentRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



