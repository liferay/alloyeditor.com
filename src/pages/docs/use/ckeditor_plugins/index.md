---
description: Is there an existing CKEditor plugin you like? Chances are you will be able to use it with AlloyEditor as well!
layout: "guide"
title: How to use CKEditor Plugins?
weight: 4
---

###### The section below assumes that you are using the default UI, which is built using React. The AlloyEditor core is fully separated from the UI and creating another one based on any other framework is very easy.

<article id="article1">

## Download your plugin

<p>CKEditor offers a <a href="http://ckeditor.com/addons/plugins/all">huge selection of plugins</a>. Find and download those you need along with all its dependencies into AlloyEditor's <strong>plugins</strong> folder.</p>

</article>

<article id="article2">

## Add the CKEditor plugin

<span>All that's left for you to do is to add the plugin to your editor configuration&#42;</span>
```js
// Extend the extraPlugins value adding the new plugins to the default ones
AlloyEditor.editable('contentEditable', {
	extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + ',myplugin,myplugindependency'
});
```

<p><small>&#42; Keep in mind that some plugins have dependencies that are not bundled inside AlloyEditor. You'll need to download and add them to the <code>extraPlugins</code> property as well</small></p>

> Note: Keep reading if the plugin you want contains UI...

</article>

<article id="article3">

## Add one of AlloyEditor's ui-bridge plugins

<p>AlloyEditor provides a set of plugins that work as an adapter for CKEditor UI features generating compatible buttons, richcombos, panels and more that can be reused. All you need to do is use the appropriate ui-bridge plugin and add the buttons to an existing or new selection.</p>

<span class="code-header">For example, you can reuse the <a href="http://ckeditor.com/addon/font">Font Size and Family Plugin</a> like this:.</span>

```js
var textSelection;

for (var i = 0; i < AlloyEditor.Selections.length; i++) {
    textSelection = AlloyEditor.Selections[i];

    if (textSelection.name === 'text') {
      break;
    }
}

textSelection.buttons = ['Font', 'FontSize'].concat(textSelection.buttons);

AlloyEditor.editable('contentEditable', {
	extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + ',ae_richcombobridge,font'
});
```

<div class="thumbnail">
	<img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/ckeditor_plugins.gif">
</div>

<p>Current existing UI-Bridge plugins are:
	<ul>
		<li><a href="http://alloyeditor.com/api/classes/CKEDITOR.plugins.ae_buttonbridge.html">Button</a></li>
		<li><a href="http://alloyeditor.com/api/classes/CKEDITOR.plugins.ae_panelmenubuttonbridge.html">Panel Menu Button</a></li>
		<li><a href="http://alloyeditor.com/api/classes/CKEDITOR.plugins.ae_richcombobridge.html">RichCombo</a></li>
	</ul>
</p>
</article>

<article id="article4">

## Use moono skin for visual compatibility

> Note: AlloyEditor's UI Bridge is in its early stages, so there are still some uncovered areas. For example, `dialogs are not converted and will still appear with CKEditor's default look and feel.

<span class="code-header">Use the new <code>moono</code> skin to close the gap between AlloyEditor default look and feel and CKEditor's.</span>

```html
	<link href="alloy-editor/assets/alloy-editor-moono-min.css" rel="stylesheet"></link>
```

<div class="thumbnail">
	<img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/ckeditor_moono.gif">
</div>

</article>