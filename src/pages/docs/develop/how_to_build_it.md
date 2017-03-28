---
description: How to build a version of AlloyEditor.

layout: "guide"
title: "Build it"
weight: 1
---

###### How to build a version of AlloyEditor.

<article id="article1">

## Install NodeJS

Using your browser, navigate to http://nodejs.org and install NodeJS.

</article>

<article id="article2">

## Install Gulp

<span class="code-header">Open a terminal on your computer and execute</span>

```bash
[sudo] npm install -g gulp
```

</article>

<article id="article3">

## Fork AlloyEditor

Use the <strong>Fork</strong> button in our <a href="https://github.com/liferay/alloy-editor">Github Repository page</a> to get a copy of alloyEditor. After that, follow the instructions to clone the project into your computer.

</article>

<article id="article4">

## Install AlloyEditor dependencies

<span class="code-header">Navigate to the AlloyEditor project in your computer and execute</span>

```bash
[sudo] npm install
```
</article>

<article id="article5">

## Build AlloyEditor

<span class="code-header">Navigate to the AlloyEditor project in your computer and execute</span>

```bash
gulp build
```

<p class="guide-note">There are other gulp tasks you can use like <strong>release</strong> to generate a bundled zip file, or <strong>watch</strong> if you're in development mode</p>


</article>
