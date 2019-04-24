/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0-a6a2328c406d2461acdb.js"
  },
  {
    "url": "404.html",
    "revision": "71c91f9b673b8c2ff57f9defa9c41425"
  },
  {
    "url": "404/index.html",
    "revision": "6a95699cc0f55675dc502918d40796cb"
  },
  {
    "url": "8-541c7638914bfab2c2aa.js"
  },
  {
    "url": "9-5e382ba94216e727581c.js"
  },
  {
    "url": "alloy-editor/alloy-editor-all-min.js"
  },
  {
    "url": "alloy-editor/alloy-editor-core-min.js"
  },
  {
    "url": "alloy-editor/alloy-editor-no-ckeditor-min.js"
  },
  {
    "url": "alloy-editor/alloy-editor-no-react-min.js"
  },
  {
    "url": "alloy-editor/assets/alloy-editor-atlas-min.css"
  },
  {
    "url": "alloy-editor/assets/alloy-editor-atlas.css"
  },
  {
    "url": "alloy-editor/assets/alloy-editor-moono-min.css"
  },
  {
    "url": "alloy-editor/assets/alloy-editor-moono.css"
  },
  {
    "url": "alloy-editor/assets/alloy-editor-ocean-min.css"
  },
  {
    "url": "alloy-editor/assets/alloy-editor-ocean.css"
  },
  {
    "url": "alloy-editor/assets/css/skin/atlas/main.css"
  },
  {
    "url": "alloy-editor/assets/css/skin/moono/main.css"
  },
  {
    "url": "alloy-editor/assets/css/skin/ocean/main.css"
  },
  {
    "url": "alloy-editor/assets/icons/icons.svg",
    "revision": "d41c33ddc2147eddb87a91a0ba65d435"
  },
  {
    "url": "alloy-editor/build-config.js"
  },
  {
    "url": "alloy-editor/ckeditor.js"
  },
  {
    "url": "alloy-editor/config.js"
  },
  {
    "url": "alloy-editor/contents.css"
  },
  {
    "url": "alloy-editor/lang/af.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/af.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ar.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/bg.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/bn.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/bs.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ca.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/cs.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/cy.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/da.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/de.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/el.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/en-au.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/en-ca.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/en-gb.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/en.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/eo.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/es.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/et.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/eu.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/fa.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/fi.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/fo.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/fr-ca.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/fr.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/gl.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/gu.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/he.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/hi.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/hr.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/hu.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/id.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/is.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/it.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ja.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ka.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/km.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ko.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ku.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/lt.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/lv.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/mk.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/mn.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ms.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/nb.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/nl.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/no.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/pl.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/pt-br.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/pt.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ro.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ru.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/si.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/sk.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/sl.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/sq.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/sr-latn.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/sr.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/sv.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/th.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/tr.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/tt.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/ug.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/uk.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/vi.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/zh-cn.js"
  },
  {
    "url": "alloy-editor/lang/alloy-editor/zh.js"
  },
  {
    "url": "alloy-editor/lang/ar.js"
  },
  {
    "url": "alloy-editor/lang/az.js"
  },
  {
    "url": "alloy-editor/lang/bg.js"
  },
  {
    "url": "alloy-editor/lang/bn.js"
  },
  {
    "url": "alloy-editor/lang/bs.js"
  },
  {
    "url": "alloy-editor/lang/ca.js"
  },
  {
    "url": "alloy-editor/lang/cs.js"
  },
  {
    "url": "alloy-editor/lang/cy.js"
  },
  {
    "url": "alloy-editor/lang/da.js"
  },
  {
    "url": "alloy-editor/lang/de-ch.js"
  },
  {
    "url": "alloy-editor/lang/de.js"
  },
  {
    "url": "alloy-editor/lang/el.js"
  },
  {
    "url": "alloy-editor/lang/en-au.js"
  },
  {
    "url": "alloy-editor/lang/en-ca.js"
  },
  {
    "url": "alloy-editor/lang/en-gb.js"
  },
  {
    "url": "alloy-editor/lang/en.js"
  },
  {
    "url": "alloy-editor/lang/eo.js"
  },
  {
    "url": "alloy-editor/lang/es.js"
  },
  {
    "url": "alloy-editor/lang/et.js"
  },
  {
    "url": "alloy-editor/lang/eu.js"
  },
  {
    "url": "alloy-editor/lang/fa.js"
  },
  {
    "url": "alloy-editor/lang/fi.js"
  },
  {
    "url": "alloy-editor/lang/fo.js"
  },
  {
    "url": "alloy-editor/lang/fr-ca.js"
  },
  {
    "url": "alloy-editor/lang/fr.js"
  },
  {
    "url": "alloy-editor/lang/gl.js"
  },
  {
    "url": "alloy-editor/lang/gu.js"
  },
  {
    "url": "alloy-editor/lang/he.js"
  },
  {
    "url": "alloy-editor/lang/hi.js"
  },
  {
    "url": "alloy-editor/lang/hr.js"
  },
  {
    "url": "alloy-editor/lang/hu.js"
  },
  {
    "url": "alloy-editor/lang/id.js"
  },
  {
    "url": "alloy-editor/lang/is.js"
  },
  {
    "url": "alloy-editor/lang/it.js"
  },
  {
    "url": "alloy-editor/lang/ja.js"
  },
  {
    "url": "alloy-editor/lang/ka.js"
  },
  {
    "url": "alloy-editor/lang/km.js"
  },
  {
    "url": "alloy-editor/lang/ko.js"
  },
  {
    "url": "alloy-editor/lang/ku.js"
  },
  {
    "url": "alloy-editor/lang/lt.js"
  },
  {
    "url": "alloy-editor/lang/lv.js"
  },
  {
    "url": "alloy-editor/lang/mk.js"
  },
  {
    "url": "alloy-editor/lang/mn.js"
  },
  {
    "url": "alloy-editor/lang/ms.js"
  },
  {
    "url": "alloy-editor/lang/nb.js"
  },
  {
    "url": "alloy-editor/lang/nl.js"
  },
  {
    "url": "alloy-editor/lang/no.js"
  },
  {
    "url": "alloy-editor/lang/oc.js"
  },
  {
    "url": "alloy-editor/lang/pl.js"
  },
  {
    "url": "alloy-editor/lang/pt-br.js"
  },
  {
    "url": "alloy-editor/lang/pt.js"
  },
  {
    "url": "alloy-editor/lang/ro.js"
  },
  {
    "url": "alloy-editor/lang/ru.js"
  },
  {
    "url": "alloy-editor/lang/si.js"
  },
  {
    "url": "alloy-editor/lang/sk.js"
  },
  {
    "url": "alloy-editor/lang/sl.js"
  },
  {
    "url": "alloy-editor/lang/sq.js"
  },
  {
    "url": "alloy-editor/lang/sr-latn.js"
  },
  {
    "url": "alloy-editor/lang/sr.js"
  },
  {
    "url": "alloy-editor/lang/sv.js"
  },
  {
    "url": "alloy-editor/lang/th.js"
  },
  {
    "url": "alloy-editor/lang/tr.js"
  },
  {
    "url": "alloy-editor/lang/tt.js"
  },
  {
    "url": "alloy-editor/lang/ug.js"
  },
  {
    "url": "alloy-editor/lang/uk.js"
  },
  {
    "url": "alloy-editor/lang/vi.js"
  },
  {
    "url": "alloy-editor/lang/zh-cn.js"
  },
  {
    "url": "alloy-editor/lang/zh.js"
  },
  {
    "url": "alloy-editor/plugins/clipboard/dialogs/paste.js"
  },
  {
    "url": "alloy-editor/plugins/dialog/dialogDefinition.js"
  },
  {
    "url": "alloy-editor/plugins/icons_hidpi.png",
    "revision": "4fe568fe313c92295dc309f1f2d2b77a"
  },
  {
    "url": "alloy-editor/plugins/icons.png",
    "revision": "bf2ab5e24f7db09776eeea1913ad902d"
  },
  {
    "url": "alloy-editor/plugins/pastefromword/filter/default.js"
  },
  {
    "url": "alloy-editor/plugins/widget/images/handle.png",
    "revision": "9d0d2d1e481b4fc8254de987ed36355f"
  },
  {
    "url": "alloy-editor/skins/moono/dialog_ie.css"
  },
  {
    "url": "alloy-editor/skins/moono/dialog_ie7.css"
  },
  {
    "url": "alloy-editor/skins/moono/dialog_ie8.css"
  },
  {
    "url": "alloy-editor/skins/moono/dialog_iequirks.css"
  },
  {
    "url": "alloy-editor/skins/moono/dialog.css"
  },
  {
    "url": "alloy-editor/skins/moono/editor_gecko.css"
  },
  {
    "url": "alloy-editor/skins/moono/editor_ie.css"
  },
  {
    "url": "alloy-editor/skins/moono/editor_ie7.css"
  },
  {
    "url": "alloy-editor/skins/moono/editor_ie8.css"
  },
  {
    "url": "alloy-editor/skins/moono/editor_iequirks.css"
  },
  {
    "url": "alloy-editor/skins/moono/editor.css"
  },
  {
    "url": "alloy-editor/skins/moono/icons_hidpi.png",
    "revision": "4ee604e9fab81d6470a35b42f1ad86af"
  },
  {
    "url": "alloy-editor/skins/moono/icons.png",
    "revision": "69082838d3e79ab417d125991096cba5"
  },
  {
    "url": "alloy-editor/skins/moono/images/anchor.png",
    "revision": "c5e1cf53ce8db85674167fb425824e19"
  },
  {
    "url": "alloy-editor/skins/moono/images/arrow.png",
    "revision": "5b9854a7f865788fff62fe32b0324ca0"
  },
  {
    "url": "alloy-editor/skins/moono/images/close.png",
    "revision": "738269db9d41f199e104f9960885a08c"
  },
  {
    "url": "alloy-editor/skins/moono/images/hidpi/anchor.png",
    "revision": "398796538d22fd0fe1c102f5f6567d71"
  },
  {
    "url": "alloy-editor/skins/moono/images/hidpi/close.png",
    "revision": "d925282972b93c0f8f85deac5800d2e4"
  },
  {
    "url": "alloy-editor/skins/moono/images/hidpi/lock-open.png",
    "revision": "61b09126774ba1c8f97d1b268a36303a"
  },
  {
    "url": "alloy-editor/skins/moono/images/hidpi/lock.png",
    "revision": "6b37e84dd4f8deefcb79c6c211803ffd"
  },
  {
    "url": "alloy-editor/skins/moono/images/hidpi/refresh.png",
    "revision": "7951e77da753e455649be7c725496d2f"
  },
  {
    "url": "alloy-editor/skins/moono/images/lock-open.png",
    "revision": "1007c83887ae2446d305b8dc0a6c08bc"
  },
  {
    "url": "alloy-editor/skins/moono/images/lock.png",
    "revision": "44aeed002636c661231fad2b3e3d5bc7"
  },
  {
    "url": "alloy-editor/skins/moono/images/refresh.png",
    "revision": "a97a516fb1c061fdd73b393d1a81263b"
  },
  {
    "url": "alloy-editor/skins/moono/images/spinner.gif",
    "revision": "7f32b6e67f42a0ef3e1ddb0b9401f6c5"
  },
  {
    "url": "alloy-editor/styles.js"
  },
  {
    "url": "app-0b249460b0f9935e270a.js"
  },
  {
    "url": "app.c60a3a0f860e7ed6ad19.css"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-a-774303-a-95098-a-9-f-8-c-85-b-08340284378-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-dfaf1a7d76372a82a25f.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-afcdf-3-ec-318-f-6-a-7-c-9-b-8927-b-17937-c-17-c-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-5981f90df277949283c2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-395e2e548807c8ea6fbc.js"
  },
  {
    "url": "component---src-pages-404-js-ac53b49e1df262b2a8fc.js"
  },
  {
    "url": "component---src-pages-index-js-cf887e2c612e149a2feb.js"
  },
  {
    "url": "docs/develop/about.html",
    "revision": "2527e6dce10655acdc6a440901c096d6"
  },
  {
    "url": "docs/develop/create_buttons.html",
    "revision": "285ca18d00b8f084b4d0a86d50d30930"
  },
  {
    "url": "docs/develop/create_skin.html",
    "revision": "e45028d5367776b35b15aae16ef4c91d"
  },
  {
    "url": "docs/develop/create_toolbars.html",
    "revision": "ba5f0aa7f0ec07a2e89c82af6740a32d"
  },
  {
    "url": "docs/develop/create_ui.html",
    "revision": "9b911d392d5a46984c9719b3c5e138cd"
  },
  {
    "url": "docs/develop/create.html",
    "revision": "4ffb22e6ffa1dc7b0957c9aacef7c8f3"
  },
  {
    "url": "docs/develop/how-to-build-it.html",
    "revision": "8c3755a4d5b1dea4a38e39887794878d"
  },
  {
    "url": "docs/features/bold.html",
    "revision": "597d785d5b61f968d8b6e0ff27383d0c"
  },
  {
    "url": "docs/features/camera.html",
    "revision": "23917f00403faff112877f8853c87088"
  },
  {
    "url": "docs/features/code.html",
    "revision": "eab8dcfa275488825357277f03f2663b"
  },
  {
    "url": "docs/features/hline.html",
    "revision": "c694520fa8a715f86cffc2285e3acdde"
  },
  {
    "url": "docs/features/hone.html",
    "revision": "c1b0f14b0a3122fdc750a103e6ba5be3"
  },
  {
    "url": "docs/features/htwo.html",
    "revision": "5713356ccb74047187ef4c76da5e281f"
  },
  {
    "url": "docs/features/image.html",
    "revision": "79eb5520802cd01cedc7c1b66649770c"
  },
  {
    "url": "docs/features/imagealigncenter.html",
    "revision": "cee0ab61bdb6f16056f068d1601628ae"
  },
  {
    "url": "docs/features/imagealignleft.html",
    "revision": "56cfce5fb030e2d59692bae7e40ef446"
  },
  {
    "url": "docs/features/imagealignright.html",
    "revision": "df3075d6cbbd51e1461883eb34ea0d12"
  },
  {
    "url": "docs/features/indent-outdent.html",
    "revision": "7294d89feb2386fab7045472a151b1fe"
  },
  {
    "url": "docs/features/italic.html",
    "revision": "91b23345bc62118991ab450cf7e3b25b"
  },
  {
    "url": "docs/features/link.html",
    "revision": "8442f812652e314170961a304e9f5402"
  },
  {
    "url": "docs/features/linkautocomplete.html",
    "revision": "88eef9f3433db0eb218d3540a697a0a0"
  },
  {
    "url": "docs/features/ol.html",
    "revision": "4182fe87828ce6a74a15388173980982"
  },
  {
    "url": "docs/features/paragraphaligncenter.html",
    "revision": "0f569aa199df5b2dc78849388c60f4a8"
  },
  {
    "url": "docs/features/paragraphalignjustify.html",
    "revision": "f5183077ef2f634c499178c3e3a28c5a"
  },
  {
    "url": "docs/features/paragraphalignleft.html",
    "revision": "bfecf16ed0c492163c8e060d9d10534b"
  },
  {
    "url": "docs/features/paragraphalignright.html",
    "revision": "c10f6bde8734888d8293521039bd8f93"
  },
  {
    "url": "docs/features/quote.html",
    "revision": "fa39b3096c99b403d50eca8154d15c6e"
  },
  {
    "url": "docs/features/removeformat.html",
    "revision": "fcba65b7b1ba026d62507901689ebf7e"
  },
  {
    "url": "docs/features/strike.html",
    "revision": "c0692163e028b5f15117296ca8412740"
  },
  {
    "url": "docs/features/styles.html",
    "revision": "90f74ec7c4831f07f50e490e26906f64"
  },
  {
    "url": "docs/features/subscript.html",
    "revision": "6626f838997e59e8c67a497868e01c34"
  },
  {
    "url": "docs/features/superscript.html",
    "revision": "11c1827afc43d1b393f968493f50893c"
  },
  {
    "url": "docs/features/table.html",
    "revision": "cd599bc6c4740fd0d205b1afdcf7c95e"
  },
  {
    "url": "docs/features/tablecell.html",
    "revision": "18af5a9b501cf8e941d4213d6a95b671"
  },
  {
    "url": "docs/features/tablecolumn.html",
    "revision": "5d37e4a15e67c0e9afe78b67d110cc23"
  },
  {
    "url": "docs/features/tableheading.html",
    "revision": "36074cc5ddbcbeb235d3718c3945c1ff"
  },
  {
    "url": "docs/features/tableremove.html",
    "revision": "50a22411dfa100213db7b79f2f6f6267"
  },
  {
    "url": "docs/features/tablerow.html",
    "revision": "c9285e20eb6ec142857b59b213d6c453"
  },
  {
    "url": "docs/features/twitter.html",
    "revision": "fa9c9925cd1b34684783cd32bd10e822"
  },
  {
    "url": "docs/features/ul.html",
    "revision": "d181212d4faaf330a710b31505a26abd"
  },
  {
    "url": "docs/features/underline.html",
    "revision": "1f0886ccf781f9a32bdc9adaa1041737"
  },
  {
    "url": "docs/index.html",
    "revision": "da4d9c344cf601034dc4196bc266ef42"
  },
  {
    "url": "docs/use/button_configuration.html",
    "revision": "c9b59e38f5a030b048e73844160a98bf"
  },
  {
    "url": "docs/use/editor_configuration.html",
    "revision": "13ad7c9c297c0cb542591ea80c1ab1ef"
  },
  {
    "url": "docs/use/how_to_use_it.html",
    "revision": "d987705bf686409909dd2cec8ca6609e"
  },
  {
    "url": "docs/use/react_component.html",
    "revision": "bf7eac3cfe2600a949c8d2b0213d74a6"
  },
  {
    "url": "docs/use/readonly_configuration.html",
    "revision": "9b8b4e10aa14cfe358f1fbe9dbea7a55"
  },
  {
    "url": "docs/use/skin.html",
    "revision": "8187b9be6f5c969e019bf7e1a5076218"
  },
  {
    "url": "docs/use/toolbar_configuration.html",
    "revision": "f9411db8bbcc6bdc55599135bb5e47f9"
  },
  {
    "url": "docs/use/use_ckeditor_plugins.html",
    "revision": "214e34d275f53f538edb3e2a1519786c"
  },
  {
    "url": "docs/use/use.html",
    "revision": "a9534e2a437b885c55a11f3cf5c3e593"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "f03ae7f42e7ac0e126edb0a725c2b182"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "94538f3b68c321f60b1370d7ea987f4c"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "494fa6b664de39cfef8e9f40c0b15658"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "3b7a602a46488bcb4715d57f76059a26"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "85b708f981aab92e3aea785034379f8b"
  },
  {
    "url": "favicons/html_code.html",
    "revision": "26089730f2a5f28478ca56fa4d24a334"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "3cf07fd044eca47f3a99a59daf01c09a"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "c75309ac48d48ef06a5ac6d9a0f2948b"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "images/features/button-bold.gif",
    "revision": "f3fc019e7c3862ca3cc3fd64a64908b6"
  },
  {
    "url": "images/features/button-camera.gif",
    "revision": "b930a5a15e5075e655d26d8fde322374"
  },
  {
    "url": "images/features/button-code.gif",
    "revision": "5866f1c518c5974eb25ec20084c86586"
  },
  {
    "url": "images/features/button-h1.gif",
    "revision": "d118f508f439206febae4b715c71d2b1"
  },
  {
    "url": "images/features/button-h2.gif",
    "revision": "30b1eea2847a88210af97ea6e5f8f948"
  },
  {
    "url": "images/features/button-hline.gif",
    "revision": "07e0937343790cc06dd305f972c9becd"
  },
  {
    "url": "images/features/button-image.gif",
    "revision": "bba3bfa819f4f780babecadd4e8a42f6"
  },
  {
    "url": "images/features/button-imagealigncenter.gif",
    "revision": "a59a514560855c361fa23762a152de46"
  },
  {
    "url": "images/features/button-imagealignleft.gif",
    "revision": "45bf6bc6bcb8a96bc33c60461af5b7c1"
  },
  {
    "url": "images/features/button-imagealignright.gif",
    "revision": "53f11df6bca1b6e2727bccaab5575048"
  },
  {
    "url": "images/features/button-italic.gif",
    "revision": "746380548585b6bcea71d538289cbb7a"
  },
  {
    "url": "images/features/button-link.gif",
    "revision": "7bef4056c20d199a26e6c56271518f0b"
  },
  {
    "url": "images/features/button-linkautocomplete.gif",
    "revision": "a2952a1438d45d9bba2eeadb8c0658ef"
  },
  {
    "url": "images/features/button-ol.gif",
    "revision": "d6e748b41f88e6d916586b667a1e9791"
  },
  {
    "url": "images/features/button-paragraphaligncenter.gif",
    "revision": "7c0bc9785bd13bc5474abf6cc7e49d43"
  },
  {
    "url": "images/features/button-paragraphalignjustify.gif",
    "revision": "8569f9fd33ae6afd8f6cf6b86c621563"
  },
  {
    "url": "images/features/button-paragraphalignleft.gif",
    "revision": "45abe5bf1ac4c42f740507e5171c7a2f"
  },
  {
    "url": "images/features/button-paragraphalignright.gif",
    "revision": "97a3f986fee407b3adae20bbbf2ba539"
  },
  {
    "url": "images/features/button-quote.gif",
    "revision": "2f266456c33ef9637fdabfd94cf534ed"
  },
  {
    "url": "images/features/button-removeformat.gif",
    "revision": "7adb8778af046995b280694c1220cb07"
  },
  {
    "url": "images/features/button-strike.gif",
    "revision": "4b95727e2f5fcc573b651796b25882db"
  },
  {
    "url": "images/features/button-styles.gif",
    "revision": "a994a5c887a8593f458a0ec981b8f692"
  },
  {
    "url": "images/features/button-subscript.gif",
    "revision": "9131098c30f69b672bb26cbddf20df41"
  },
  {
    "url": "images/features/button-superscript.gif",
    "revision": "1f0cefae23553bedfce1a790ad0e6f24"
  },
  {
    "url": "images/features/button-table.gif",
    "revision": "aeadf483933df0181f154a9cfa96aba6"
  },
  {
    "url": "images/features/button-tablecell.gif",
    "revision": "f61f5ad262ac2819781cb93d894a6beb"
  },
  {
    "url": "images/features/button-tablecol.gif",
    "revision": "ffe37ab68037ef2a5bc3ef36f45c8c32"
  },
  {
    "url": "images/features/button-tableheading.gif",
    "revision": "e07e19a213b7d20168608e177745e8d8"
  },
  {
    "url": "images/features/button-tableremove.gif",
    "revision": "2a12caeea297b7370c1dae80e92b025b"
  },
  {
    "url": "images/features/button-tablerow.gif",
    "revision": "57e601d9ea40a345a3d740a419bca11f"
  },
  {
    "url": "images/features/button-twitter.gif",
    "revision": "ea9052442e6327c14d5bbd4368bb8ed3"
  },
  {
    "url": "images/features/button-ul.gif",
    "revision": "883aebf3351f05b5cde30f69be21f540"
  },
  {
    "url": "images/features/button-underline.gif",
    "revision": "f1b37055e98b581a4193027f96a16eba"
  },
  {
    "url": "images/features/indent-outdent.gif",
    "revision": "8ce59a9615021404fdfe79743b809105"
  },
  {
    "url": "images/features/plugin-autolist.gif",
    "revision": "0b8d481f930d81fcb024c0214fce7bba"
  },
  {
    "url": "images/guides/ckeditor_moono.gif",
    "revision": "7ddbf3e41f793a4c784141850e0eb3e8"
  },
  {
    "url": "images/guides/ckeditor_plugins.gif",
    "revision": "9200f23e0761cf72c02a96f9bc2573c2"
  },
  {
    "url": "images/guides/ckeditor_ui_button.png",
    "revision": "43fbd9273b17dd525cd9b63db6c3f652"
  },
  {
    "url": "images/guides/ckeditor_ui_menu_button1.png",
    "revision": "72e1202dd7b58a9d092fa7643ec00aa8"
  },
  {
    "url": "images/guides/ckeditor_ui_menu_button2.png",
    "revision": "941ce40d32c3d53bb03dfa578827ee9e"
  },
  {
    "url": "images/guides/ckeditor_ui_panel_menu_button.png",
    "revision": "b8560fb501760e50e6c1141304add8d6"
  },
  {
    "url": "images/guides/ckeditor_ui_richcombo.png",
    "revision": "1dca81cff961bbc6f1e1e7bdb6eac15c"
  },
  {
    "url": "images/guides/skin_atlas.png",
    "revision": "b4a32aba66ebe83bb81eed4d9e5c2412"
  },
  {
    "url": "images/guides/skin_moono.png",
    "revision": "4b90b0dd9122e76827c670552dab25e3"
  },
  {
    "url": "images/guides/skin_ocean.png",
    "revision": "b9cccd563af8da20b575cc7de25505c6"
  },
  {
    "url": "images/home/banner_back.png",
    "revision": "fdf96e7cbdabc6fecce1c3d2772ed58c"
  },
  {
    "url": "images/home/cupcakes.jpg",
    "revision": "b8b9e38e8e00fbf5875f22bb93539d8d"
  },
  {
    "url": "images/home/features_corazon.png",
    "revision": "05b22c8536ba8e3c8d225962141bd511"
  },
  {
    "url": "images/home/features_estanterias.png",
    "revision": "2fac21462d449f6501f09ad020b1ab6c"
  },
  {
    "url": "images/home/features_ui.png",
    "revision": "94418b7ce0240d887270a39ec6878cbb"
  },
  {
    "url": "images/home/GitHub-Mark-64px.svg",
    "revision": "0c9e7db5843df9e272a46cbd3edd541e"
  },
  {
    "url": "images/home/logo.png",
    "revision": "0deb360f232acdbd5a0431988aa0554f"
  },
  {
    "url": "images/icons/icons.svg",
    "revision": "19e3f7ad0de88f9c8cfb1ee63f898147"
  },
  {
    "url": "index.html",
    "revision": "3d5a8b47b8f920fc1eaf4d1e39c130a3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c76b5e44532e7e58e1a8cedc9563808d"
  },
  {
    "url": "updates/index.html",
    "revision": "8c1257ac68aa4e260f97af51959c7e76"
  },
  {
    "url": "webpack-runtime-d3a2c048d3d19ece9fc3.js"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|\/static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');
"use strict";

/* global importScripts, workbox, idbKeyval */
importScripts("idb-keyval-iife.min.js");
var WHITELIST_KEY = "custom-navigation-whitelist";
var navigationRoute = new workbox.routing.NavigationRoute(function (_ref) {
  var event = _ref.event;

  var _ref2 = new URL(event.request.url),
      pathname = _ref2.pathname;

  return idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      var offlineShell = "/offline-plugin-app-shell-fallback/index.html";
      var cacheName = workbox.core.cacheNames.precache;
      return caches.match(offlineShell, {
        cacheName: cacheName
      }).then(function (cachedResponse) {
        if (!cachedResponse) {
          return fetch(offlineShell).then(function (response) {
            if (response.ok) {
              return caches.open(cacheName).then(function (cache) {
                return (// Clone is needed because put() consumes the response body.
                  cache.put(offlineShell, response.clone()).then(function () {
                    return response;
                  })
                );
              });
            } else {
              return fetch(event.request);
            }
          });
        }

        return cachedResponse;
      });
    }

    return fetch(event.request);
  });
});
workbox.routing.registerRoute(navigationRoute);
var updatingWhitelist = null;

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(function () {
      return rawWhitelistPathnames(pathnames);
    });
  }

  updatingWhitelist = idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    pathnames.forEach(function (pathname) {
      if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname);
    });
    return idbKeyval.set(WHITELIST_KEY, customWhitelist);
  }).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(function () {
      return rawResetWhitelist();
    });
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

var messageApi = {
  whitelistPathnames: function whitelistPathnames(event) {
    var pathnames = event.data.pathnames;
    pathnames = pathnames.map(function (_ref3) {
      var pathname = _ref3.pathname,
          includesPrefix = _ref3.includesPrefix;

      if (!includesPrefix) {
        return "" + pathname;
      } else {
        return pathname;
      }
    });
    event.waitUntil(rawWhitelistPathnames(pathnames));
  },
  resetWhitelist: function resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist());
  }
};
self.addEventListener("message", function (event) {
  var gatsbyApi = event.data.gatsbyApi;
  if (gatsbyApi) messageApi[gatsbyApi](event);
});