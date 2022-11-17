---
title: Welcome Docusaurus v2
description: This is my first post on Docusaurus 2 and serves as a test page.
slug: welcome-docusaurus-v2
authors:
    - tfisicaro
tags: [Markdown, Docusaurus, React]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
draft: true
comments: true
---

Welcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).
On this page I will be testing some of Docusaurus' features and custom components and styles that I have added myself.

<!--truncate-->

This is my first post on Docusaurus 2. A whole bunch of exploration to follow.
We will be testing if the custom styles work.

## Admonitions

Admonitions can be used to draw attention to an important piece of information or anything that a reader might otherwise not directly know by reading the page.

```md
<!-- When used without Prettier -->

:::tip With custom title
Message that is shown in the admonition.
:::

<!-- When used with Prettier -->

:::tip With custom title

Message that is shown in the admonition.

:::
```

### Warnings

:::danger

Danger admonitions should be used only when you absolutely want the reader to read this information to prevent catastrophic failures.

:::

:::danger Red, but not really dangerous.

Make sure to use the appropriate admonition color. For example, if you use red everywhere, users will devalue the significance of the color.
This is true for colors but also the admonitions itself. The text that is shown in these two red admonitions could have done perfectly without admonition.

:::

:::caution

Caution admonitions are used for information that is important but not necessarily detrimental.

:::

### Informational

:::tip

Green often indicates success and or a good result. This admonition can be called with either "success" or "tip".

:::

:::note

The most neutral variant.

:::

:::info

Blue.

:::

## Code blocks

Code blocks should be used to display console input and small snippets of code. Large functions or entire documents are better displayed in an alternative way.

### Code highlighting with Prism

Code can be highlighted like it would be when a user was using an IDE or code editor.
Prism supports a lot of programming languages but we will show an example for PowerShell and C# here.

```powershell title="HTTP GET Request with PowerShell"
Invoke-WebRequest -Uri "https://tfisicaro.dev" -Method Get
```

```csharp title="HTTP GET Request with C#"
# Shortened for brevity
var httpClient = new HttpClient();
var result = await httpClient.GetStringAsync("https://tfisicaro.dev");
```
