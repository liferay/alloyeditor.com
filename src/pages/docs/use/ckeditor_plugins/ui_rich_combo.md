---
description: There are some CKEDITOR plugins that it add rich combo through their UI. This tutorial is about using this kind of plugins.
icon: "code-file"
layout: "guide"
title: UI Rich Combo
weight: 4
---

###### There are some CKEDITOR plugins that it add rich combo through their UI. This tutorial is about using this kind of plugins.

<article id="article1">

## Example to use 'Font Size and Family' button

<span class="code-header">You can download <a alt="font plugin" href="http://ckeditor.com/addon/colorbutton">font size and family plugin</a> and, after that,
you can paste it into <strong>plugins folder</strong>
</span>

> Note: Keep in mind, if this plugin has dependencies, we need to dowload and to configure them too.

</article>

<article id="article2">

## What CKEDITOR UI is used by plugin?

<p>
  The plugin´s code contains <a alt="code of plugin" href="https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/font/plugin.js#L35">this part of code</a>.
</p>

```js
  editor.ui.addRichCombo( comboName, {
      label: lang.label,
      title: lang.panelTitle,
      toolbar: 'styles,' + order,
      ...
```
<p>This plugin uses <strong>editor.ui.addRichCombo(name, definition)</strong>. Also, CKEDITOR plugins can use the following code to add rich combos:</p>

```js
  editor.ui.add(name, CKEDITOR.UI_RICHCOMBO, definition);
```
<p>Both of the ways are correct and it means that we need an AlloyEditor adapter to use this kind of CKEDITOR plugins.</p>

</article>

<article id="article3">

## ae_richcombobridgebridge AlloyEditor plugin

<p>
  AlloyEditor provides a plugin that works as an adapter for CKEditor UI features generating compatible rich combos.
  <strong>ae_richcombobridge uses ae_uibridge AlloyEditor plugin</strong> to work.
</p>

```js
  AlloyEditor.editable('myContentEditable', {
    extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
      ',ae_uibridge,ae_richcombobridge,font'
  });
```
<p>
  <strong>AlloyEditor.Core.ATTRS.extraPlugins.value</strong> is used to keep current extraPlugins that AlloyEditor use, but you can avoid that to set your plugins there. After this step, this plugin will work, but AlloyEditor will not show the button yet.
</p>

</article>

<article id="article4">

## Adding 'Font' and 'FontSize' buttons to AlloyEditor toolbar

<p>Into the plugin appears this <a alt="Name of buttons" href="https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/font/plugin.js#L232-L233">code</a>, we can set toolbar buttons with 'Font' and 'FontSize' buttons: </p>

```js
  var selections = AlloyEditor.Selections;

    selections[3].buttons.push('Font', 'FontSize');

    var editor1 = AlloyEditor.editable('myContentEditable', {
        extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
            ',ae_uibridge,ae_richcombobridge,font',
        toolbars: {
            styles: {
                selections: selections,
                tabIndex: 1
            }
        }

    });
```
<div class="thumbnail">
  <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_richcombo.png"/>
</div>

</article>