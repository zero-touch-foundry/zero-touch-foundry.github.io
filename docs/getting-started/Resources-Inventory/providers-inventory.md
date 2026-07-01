---
title: Providers Inventory
sidebar_label: Providers Inventory
sidebar_position: 0
description: The central inventory grid — summary metrics, the provider list, search, filters, and capability status.
---

# Providers Inventory

The Providers Inventory page (**Resources → Inventory**) is the central hub. It combines summary metrics with a searchable, filterable list of every connected provider.

## Summary metrics

Three metric cards sit above the provider list and update as providers are added or change state. Toggle them with the **Metrics** button next to the search bar.

- **Providers Health** — a donut chart and counts showing how many providers are Healthy vs. Unhealthy, with an overall status badge.
- **Inventory Types** — a breakdown of providers by type (for example Intersight, AWS, vCenter, and Others) with per-type counts and percentages.
- **Capabilities Health** — progress bars summarizing the health of the Discovery and Deploy capabilities across all providers (e.g., Discovery 52%, Deploy 86%).

<!-- ![Inventory metrics cards — Providers Health, Inventory Types, Capabilities Health](./images/inventory-metrics.png) -->

## Provider list

Each row represents one provider. The columns are:

| Column | Description |
|--------|-------------|
| **Provider Name** | The provider alias defined at creation. Click to drill into discovered resources (when Discovery is supported). |
| **Type** | The provider type with its icon (AWS, Kubernetes, Intersight, vCenter, Azure, etc.). |
| **Capabilities** | Icons indicating Discovery and Deploy. A green icon means the capability is healthy; a red icon means it is unavailable or unhealthy. |
| **Labels** | Optional key/value labels applied to the provider for organization and filtering. |
| **Deployment Spaces** | The spaces the provider is shared with (e.g., "All spaces"). |
| **Actions (⋮)** | Row-level menu for editing, testing connectivity, or removing the provider. |

<!-- ![Provider list rows showing Type, Capabilities icons, Labels, and Deployment spaces](./images/provider-list.png) -->

## Searching and filtering

- **Search inventory** — free-text search across provider names.
- **Filters** — narrow the list by type, capability, label, or health state.
- **Results count** — the header shows the total number of matching providers (e.g., "21 results").
- **Pagination** — navigate large inventories with the page controls at the bottom right.

## Reading capability status at a glance

In the Capabilities column, the rocket icon represents **Deploy** and the stacked-layers icon represents **Discovery**. Color communicates state:

| Indicator | Meaning |
|-----------|---------|
| 🟢 Green icon | Capability is configured and healthy. |
| 🔴 Red icon | Capability is unavailable, misconfigured, or failing health checks. |
| ⚪ Greyed / absent | Capability is not applicable to this provider type. |
