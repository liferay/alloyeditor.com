---
description: There are some CKEDITOR plugins that it add menu button through their UI. This tutorial is about using this kind of plugins.
icon: "code-file"
layout: "guide"
title: UI Menu Button
weight: 2
---

###### There are some CKEDITOR plugins that it add menu button through their UI. This tutorial is about using this kind of plugins.

<article id="article1">

## Example to use 'Spell Checker AS YOU TYPE' plugin

<span class="code-header">You can download <a alt="download spell checker as you type plugin" href="http://ckeditor.com/addon/scayt">Scayt</a> and, after that,
you can paste it into <strong>plugins folder</strong>
</span>

> Note: Keep in mind, if this plugin has dependencies, we need to dowload and to configure them too.

</article>

<article id="article2">

## What CKEDITOR UI is used by plugin?

<p>
  The plugin´s code contains <a alt="code of plugin" href="https://github.com/WebSpellChecker/ckeditor-plugin-scayt/blob/master/plugin.js#L39">this part of code</a>.
</p>

```js
  editor.ui.add('Scayt', CKEDITOR.UI_MENUBUTTON, {
      label : lang.text_title,
      title : ( editor.plugins.wsc ? editor.lang.wsc.title : lang.text_title ),
      ...
```
<p>This plugin uses <strong>editor.ui.add(name, CKEDITOR.UI_MENUBUTTON definition)</strong>.</p>

</article>

<article id="article3">

## ae_menubuttonbridge AlloyEditor plugin

<p>
  AlloyEditor provides a plugin that works as an adapter for CKEditor UI features generating compatible menu buttons.
  <strong>ae_menubuttonbridge uses ae_uibridge and ae_menubridge AlloyEditor plugins</strong> to work.
</p>

```js
  AlloyEditor.editable('myContentEditable', {
    extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
            ',ae_uibridge,ae_menubridge,ae_menubuttonbridge,scayt'
  });
```
<p>
  <strong>AlloyEditor.Core.ATTRS.extraPlugins.value</strong> is used to keep current extraPlugins that AlloyEditor use, but you can avoid that to set your plugins there. After this step, this plugin will work, but AlloyEditor will not show the button yet.
</p>

</article>

<article id="article4">

## Adding 'Scayt' button to AlloyEditor toolbar

<p>Into the plugin appears this <a alt="Name of buttons" href="https://github.com/WebSpellChecker/ckeditor-plugin-scayt/blob/master/plugin.js#L39">code</a>, we can set toolbar buttons with 'Scayt' button: </p>

```js
   var selections = AlloyEditor.Selections;

    selections[3].buttons.push('Scayt');

    AlloyEditor.editable('myContentEditable', {
        extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value +
            ',ae_uibridge,ae_menubridge,ae_menubuttonbridge,scayt',
        toolbars: {
            styles: {
                selections: selections,
                tabIndex: 1
            }
        }

    });
```

<div class="thumbnail">
  <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_menu_button1.png"/>
</div>
<div class="thumbnail">
  <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_menu_button2.png"/>
</div>

</article>