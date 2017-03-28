---
description: There are some CKEDITOR plugins that it add menu panel through their UI. This tutorial is about using this kind of plugins.
icon: "code-file"
layout: "guide"
title: UI Panel Menu Button
weight: 3
---

###### There are some CKEDITOR plugins that it add menu panel through their UI. This tutorial is about using this kind of plugins.

<article id="article1">

## Example to use 'COLOR BUTTON' button

<span class="code-header">You can download <a alt="download color button plugin" href="http://ckeditor.com/addon/colorbutton">color button plugin</a> and, after that,
you can paste it into <strong>plugins folder</strong>
</span>

> Note: Keep in mind, if this plugin has dependencies, we need to dowload and to configure them too.

</article>

<article id="article2">

## What CKEDITOR UI is used by plugin?

<p>This button is given by 'undo' CKEDITOR plugin. <a alt="code source of color button plugin" href="https://github.com/ckeditor/ckeditor-dev/blob/3876e730d418107f791eef517178b0048a2c9383/plugins/colorbutton/plugin.js#L31">It´s code source</a> contains this part of code: </p>

```js
  editor.ui.add( name, CKEDITOR.UI_PANELBUTTON, {
        label: title,
        title: title,
        modes: { wysiwyg: 1 },
        ...
```
<p>This plugin uses <strong>editor.ui.add(name, CKEDITOR.UI_PANELBUTTON)</strong>. Also, CKEDITOR plugins can use the following code to add panel button:</p>

```js
  editor.ui.addPanelMenuButton(name, definition)
```
<p>Both of the ways are correct and it means that we need an AlloyEditor adapter to use this kind of CKEDITOR plugins.</p>

</article>

<article id="article3">

## ae_panelmenubuttonbridge AlloyEditor plugin

<p>
  AlloyEditor provides a plugin that works as an adapter for CKEditor UI features generating compatible panel buttons.
  <strong>ae_panelmenubuttonbridge uses ae_uibridge AlloyEditor plugin</strong> to work.
</p>

```js
  AlloyEditor.editable('myContentEditable', {
    extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
      ',ae_uibridge,ae_panelmenubuttonbridge,panel,floatpanel,button,panelbutton,colorbutton'
  });
```
<p>
  <strong>AlloyEditor.Core.ATTRS.extraPlugins.value</strong> is used to keep current extraPlugins that AlloyEditor use, but you can avoid that to set your plugins there. After this step, this plugin will work, but AlloyEditor will not show the button yet.
</p>

</article>

<article id="article4">

## Adding 'BGColor' and 'TextColor' buttons to AlloyEditor toolbar

<p>Into the plugin appears this <a alt="Name of buttons" href="https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/colorbutton/plugin.js#L23,L42">code</a>, we can set toolbar buttons with 'BGColor' and 'TextColor' buttons: </p>

```js
  var selections = AlloyEditor.Selections;

    selections[3].buttons.push('BGColor','TextColor');

    var editor1 = AlloyEditor.editable('myContentEditable', {
        extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
            ',ae_uibridge,ae_buttonbridge,ae_panelmenubuttonbridge,panel,floatpanel,button,panelbutton,colorbutton',
        toolbars: {
            styles: {
                selections: selections,
                tabIndex: 1
            }
        }

    });
```
<div class="thumbnail">
  <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_panel_menu_button.png"/>
</div>

</article>