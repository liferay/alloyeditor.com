---
description: There are some CKEDITOR plugins that it add button panel through their UI. This tutorial is about using this kind of plugins.
icon: "code-file"
layout: "guide"
title: UI Button
weight: 1
---

###### There are some CKEDITOR plugins that it add button panel through their UI. This tutorial is about using this kind of plugins.

<article id="article1">

## Example to use 'UNDO' button

<span class="code-header">In this case, Undo CKEDITOR plugin exists into AlloyEditor core, but, if the plugin does not exist into AlloyEditor core, you can download it and, after that,
you can paste it into <strong>plugins folder</strong>
</span>

> Note: Keep in mind, if this plugin has dependencies, we need to dowload and to configure them too.

</article>

<article id="article2">

## What CKEDITOR UI is used by plugin?

<p>This button is given by 'undo' CKEDITOR plugin. <a alt="code source of undo plugin" href="https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/undo/plugin.js#L105-L109">It´s code source</a> contains this part of code: </p>

```js
  editor.ui.addButton( 'Undo', {
          label: editor.lang.undo.undo,
          command: 'undo',
          toolbar: 'undo,10'
        } );
```
<p>This plugin uses <strong>editor.ui.addButton</strong>. Also, CKEDITOR plugins can use the following code to add buttons:</p>

```js
  editor.ui.add(name, CKEDITOR.UI_BUTTON, definition)
```

<p>Both of the ways are correct and it means that we need an AlloyEditor adapter to use this kind of CKEDITOR plugins.</p>

</article>

<article id="article3">

## ae_buttonbridge AlloyEditor plugin

<p>AlloyEditor provides a plugin that works as an adapter for CKEditor UI features generating compatible buttons</p>

```js
  AlloyEditor.editable('myContentEditable', {
    extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
      ',ae_buttonbridge,undo'
  });
```
<p><strong>AlloyEditor.Core.ATTRS.extraPlugins.value</strong> is used to keep current extraPlugins that AlloyEditor use, but you can avoid that to set your plugins there. After this step, this plugin will work, but AlloyEditor will not show the button yet.</p>

</article>

<article id="article4">

## Adding 'Undo' button to AlloyEditor toolbar

<p>Following <a alt="toolbar configuration" href="guides/ckeditor_plugins/ui_button">toolbar configuration</a>, we can set toolbar buttons with 'Undo' button: </p>

```js
  var selections = AlloyEditor.Selections;

  //index of text toolbar
  selections[3].buttons.push('Undo');

  AlloyEditor.editable('myContentEditable', {
    extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
      ',ae_buttonbridge,undo',
    toolbars: {
      styles: {
        selections: selections,
        tabIndex: 1
      }
    }

  });
```
<div class="thumbnail">
  <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_button.png" />
</div>

</article>