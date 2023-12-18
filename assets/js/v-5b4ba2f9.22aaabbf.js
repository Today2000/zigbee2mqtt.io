"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[33815],{20149:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-5b4ba2f9","path":"/devices/TI0001-switch.html","title":"Livolo TI0001-switch control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Livolo TI0001-switch control via MQTT","description":"Integrate your Livolo TI0001-switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Important","slug":"important","link":"#important","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702924918000},"filePathRelative":"devices/TI0001-switch.md"}')},912430:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(166252);const o=(0,a._)("h1",{id:"livolo-ti0001-switch",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#livolo-ti0001-switch","aria-hidden":"true"},"#"),(0,a.Uk)(" Livolo TI0001-switch")],-1),s=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),i=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"TI0001-switch")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Zigbee switch 1 gang")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"switch (state), power_on_behavior, linkquality")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TI0001-switch.jpg",alt:"Livolo TI0001-switch"})])],-1),u=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),p=(0,a._)("h3",{id:"important",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#important","aria-hidden":"true"},"#"),(0,a.Uk)(" Important")],-1),h=(0,a.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>\n  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">26</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Therefore these devices may not co-existence with other Zigbee devices. Maybe, you need to add a dedicated coordinator and create a new network for Livolo. If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">6756</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),m=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power-on behavior (enum)</h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),v={},k=(0,n(983744).Z)(v,[["render",function(e,t){const n=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[s,(0,a._)("tbody",null,[i,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(n,{to:"/supported-devices/#v=Livolo"},{default:(0,a.w5)((()=>[(0,a.Uk)("Livolo")])),_:1})])]),d,c,r])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a._)("p",null,[(0,a.Uk)('After pairing device will be shown as "TI0001" device. Need to manually trigger a re-configure of the device either using web-frontend of Zigbee2MQTT or using '),(0,a.Wm)(n,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestdeviceconfigure"},{default:(0,a.w5)((()=>[(0,a.Uk)("MQTT message")])),_:1}),(0,a.Uk)(" right after pairing. In case of problems it's recommended to remove device and than retry pairing and re-configuring device.")]),p,(0,a._)("p",null,[(0,a.Uk)("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file "),(0,a.Wm)(n,{to:"/guide/configuration/"},{default:(0,a.w5)((()=>[(0,a.Uk)("data/configuration.yaml")])),_:1}),(0,a.Uk)(" must contain the following:")]),h,(0,a.kq)(" Notes END: Do not edit below this line "),m])}]])}}]);