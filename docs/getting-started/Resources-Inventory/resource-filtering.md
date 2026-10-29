---
title: Resource Filtering
sidebar_label: Resource Filtering
sidebar_position: 4
description: How to filter resources by type, attributes, and logical conditions in Stack Automation.
---

# Resource Filtering

Stack Automation provides multiple ways to filter resources across the platform. This guide covers filtering at different levels - from providers to individual resources.

## Provider-level Filtering

The **Providers Inventory** page offers comprehensive filtering options:
- Filter by provider type (AWS, vCenter, Kubernetes, etc.)
- Filter by capability status (Discovery health, Deploy capability)
- Filter by labels for organization and categorization
- Filter by health state (Healthy vs. Unhealthy)

When viewing the inventory grid, use the search bar and filter controls at the top to narrow your results.

## Resource-level Filtering

Within a provider's resource view:
- Search by keyword to find specific resources by name
- Apply filters by type, model, location, or other attributes 
- Select multiple resources using row checkboxes for bulk operations

## Advanced Filtering with Logical Conditions (Feature #19947)

Starting with feature #19947, Stack Automation supports enhanced filtering logic for:
- **AND conditions** - match all specified criteria
- **OR conditions** - match any of the specified alternatives  
- **Contains operator** - check if string attributes contain specific values

### Syntax Examples

#### Logical OR conditions
```yaml
selector:
  any-of:
    - type: azure_vm
      provider-type: azure
    - type: vcenter_vm
      provider-name: lab_vcenter
      attributes:
        - pool: builds
```

#### Using Contains operator
```yaml
attributes:
  - region:
      contains: us-east
```

#### Using IN operator with multiple values
```yaml
attributes:
  - environment:
      in: [production, staging]
```

### Selector Structure

When using the `selector` field, you can define:
- `quantity` (top-level only) - The total number of resources to select across matched alternatives
- `attributes` - Common criteria that must match all alternatives (AND-ed)
- `any-of` - Alternatives where at least one must match (OR-ed)

This flexible syntax allows for complex filtering logic while maintaining simplicity and consistency.
