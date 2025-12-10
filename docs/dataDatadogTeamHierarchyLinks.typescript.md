# `dataDatadogTeamHierarchyLinks` Submodule <a name="`dataDatadogTeamHierarchyLinks` Submodule" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamHierarchyLinks <a name="DataDatadogTeamHierarchyLinks" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links datadog_team_hierarchy_links}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer"></a>

```typescript
import { dataDatadogTeamHierarchyLinks } from '@cdktf/provider-datadog'

new dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks(scope: Construct, id: string, config?: DataDatadogTeamHierarchyLinksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig">DataDatadogTeamHierarchyLinksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig">DataDatadogTeamHierarchyLinksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam">resetFilterParentTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam">resetFilterSubTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId">resetLinkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilterParentTeam` <a name="resetFilterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam"></a>

```typescript
public resetFilterParentTeam(): void
```

##### `resetFilterSubTeam` <a name="resetFilterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam"></a>

```typescript
public resetFilterSubTeam(): void
```

##### `resetLinkId` <a name="resetLinkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId"></a>

```typescript
public resetLinkId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct"></a>

```typescript
import { dataDatadogTeamHierarchyLinks } from '@cdktf/provider-datadog'

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement"></a>

```typescript
import { dataDatadogTeamHierarchyLinks } from '@cdktf/provider-datadog'

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource"></a>

```typescript
import { dataDatadogTeamHierarchyLinks } from '@cdktf/provider-datadog'

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport"></a>

```typescript
import { dataDatadogTeamHierarchyLinks } from '@cdktf/provider-datadog'

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogTeamHierarchyLinks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogTeamHierarchyLinks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamHierarchyLinks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy">provisionedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput">filterParentTeamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput">filterSubTeamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput">linkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam">filterParentTeam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam">filterSubTeam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedBy`<sup>Required</sup> <a name="provisionedBy" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy"></a>

```typescript
public readonly provisionedBy: string;
```

- *Type:* string

---

##### `filterParentTeamInput`<sup>Optional</sup> <a name="filterParentTeamInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput"></a>

```typescript
public readonly filterParentTeamInput: string;
```

- *Type:* string

---

##### `filterSubTeamInput`<sup>Optional</sup> <a name="filterSubTeamInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput"></a>

```typescript
public readonly filterSubTeamInput: string;
```

- *Type:* string

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput"></a>

```typescript
public readonly linkIdInput: string;
```

- *Type:* string

---

##### `filterParentTeam`<sup>Required</sup> <a name="filterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam"></a>

```typescript
public readonly filterParentTeam: string;
```

- *Type:* string

---

##### `filterSubTeam`<sup>Required</sup> <a name="filterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam"></a>

```typescript
public readonly filterSubTeam: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamHierarchyLinksConfig <a name="DataDatadogTeamHierarchyLinksConfig" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.Initializer"></a>

```typescript
import { dataDatadogTeamHierarchyLinks } from '@cdktf/provider-datadog'

const dataDatadogTeamHierarchyLinksConfig: dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam">filterParentTeam</a></code> | <code>string</code> | Filter by parent team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam">filterSubTeam</a></code> | <code>string</code> | Filter by sub team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId">linkId</a></code> | <code>string</code> | The team hierarchy link’s identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterParentTeam`<sup>Optional</sup> <a name="filterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam"></a>

```typescript
public readonly filterParentTeam: string;
```

- *Type:* string

Filter by parent team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_parent_team DataDatadogTeamHierarchyLinks#filter_parent_team}

---

##### `filterSubTeam`<sup>Optional</sup> <a name="filterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam"></a>

```typescript
public readonly filterSubTeam: string;
```

- *Type:* string

Filter by sub team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_sub_team DataDatadogTeamHierarchyLinks#filter_sub_team}

---

##### `linkId`<sup>Optional</sup> <a name="linkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The team hierarchy link’s identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#link_id DataDatadogTeamHierarchyLinks#link_id}

---



