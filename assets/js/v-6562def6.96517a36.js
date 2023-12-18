"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79069],{438987:(e,r,t)=>{t.r(r),t.d(r,{data:()=>i});const i=JSON.parse('{"key":"v-6562def6","path":"/devices/PC321.html","title":"OWON PC321 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OWON PC321 control via MQTT","description":"Integrate your OWON PC321 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-07-01T08:15:09.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Voltage l1 (numeric)","slug":"voltage-l1-numeric","link":"#voltage-l1-numeric","children":[]},{"level":3,"title":"Voltage l2 (numeric)","slug":"voltage-l2-numeric","link":"#voltage-l2-numeric","children":[]},{"level":3,"title":"Voltage l3 (numeric)","slug":"voltage-l3-numeric","link":"#voltage-l3-numeric","children":[]},{"level":3,"title":"Current l1 (numeric)","slug":"current-l1-numeric","link":"#current-l1-numeric","children":[]},{"level":3,"title":"Current l2 (numeric)","slug":"current-l2-numeric","link":"#current-l2-numeric","children":[]},{"level":3,"title":"Current l3 (numeric)","slug":"current-l3-numeric","link":"#current-l3-numeric","children":[]},{"level":3,"title":"Energy l1 (numeric)","slug":"energy-l1-numeric","link":"#energy-l1-numeric","children":[]},{"level":3,"title":"Energy l2 (numeric)","slug":"energy-l2-numeric","link":"#energy-l2-numeric","children":[]},{"level":3,"title":"Energy l3 (numeric)","slug":"energy-l3-numeric","link":"#energy-l3-numeric","children":[]},{"level":3,"title":"Reactive energy l1 (numeric)","slug":"reactive-energy-l1-numeric","link":"#reactive-energy-l1-numeric","children":[]},{"level":3,"title":"Reactive energy l2 (numeric)","slug":"reactive-energy-l2-numeric","link":"#reactive-energy-l2-numeric","children":[]},{"level":3,"title":"Reactive energy l3 (numeric)","slug":"reactive-energy-l3-numeric","link":"#reactive-energy-l3-numeric","children":[]},{"level":3,"title":"Power l1 (numeric)","slug":"power-l1-numeric","link":"#power-l1-numeric","children":[]},{"level":3,"title":"Power l2 (numeric)","slug":"power-l2-numeric","link":"#power-l2-numeric","children":[]},{"level":3,"title":"Power l3 (numeric)","slug":"power-l3-numeric","link":"#power-l3-numeric","children":[]},{"level":3,"title":"Reactive power l1 (numeric)","slug":"reactive-power-l1-numeric","link":"#reactive-power-l1-numeric","children":[]},{"level":3,"title":"Reactive power l2 (numeric)","slug":"reactive-power-l2-numeric","link":"#reactive-power-l2-numeric","children":[]},{"level":3,"title":"Reactive power l3 (numeric)","slug":"reactive-power-l3-numeric","link":"#reactive-power-l3-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702924918000},"filePathRelative":"devices/PC321.md"}')},412977:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var i=t(166252);const n=(0,i._)("h1",{id:"owon-pc321",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#owon-pc321","aria-hidden":"true"},"#"),(0,i.Uk)(" OWON PC321")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"PC321")],-1),c=(0,i._)("td",null,"Vendor",-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"3-Phase clamp power meter")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"energy, voltage_l1, voltage_l2, voltage_l3, current_l1, current_l2, current_l3, energy_l1, energy_l2, energy_l3, reactive_energy_l1, reactive_energy_l2, reactive_energy_l3, power_l1, power_l2, power_l3, reactive_power_l1, reactive_power_l2, reactive_power_l3, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PC321.jpg",alt:"OWON PC321"})])],-1),s=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="voltage-l1-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l1-numeric" aria-hidden="true">#</a> Voltage l1 (numeric)</h3><p>Phase 1 voltage. Value can be found in the published state on the <code>voltage_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-l2-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l2-numeric" aria-hidden="true">#</a> Voltage l2 (numeric)</h3><p>Phase 2 voltage. Value can be found in the published state on the <code>voltage_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-l3-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l3-numeric" aria-hidden="true">#</a> Voltage l3 (numeric)</h3><p>Phase 3 voltage. Value can be found in the published state on the <code>voltage_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-l1-numeric" tabindex="-1"><a class="header-anchor" href="#current-l1-numeric" aria-hidden="true">#</a> Current l1 (numeric)</h3><p>Phase 1 current. Value can be found in the published state on the <code>current_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-l2-numeric" tabindex="-1"><a class="header-anchor" href="#current-l2-numeric" aria-hidden="true">#</a> Current l2 (numeric)</h3><p>Phase 2 current. Value can be found in the published state on the <code>current_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-l3-numeric" tabindex="-1"><a class="header-anchor" href="#current-l3-numeric" aria-hidden="true">#</a> Current l3 (numeric)</h3><p>Phase 3 current. Value can be found in the published state on the <code>current_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-l1-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l1-numeric" aria-hidden="true">#</a> Energy l1 (numeric)</h3><p>Phase 1 energy. Value can be found in the published state on the <code>energy_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-l2-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l2-numeric" aria-hidden="true">#</a> Energy l2 (numeric)</h3><p>Phase 2 energy. Value can be found in the published state on the <code>energy_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-l3-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l3-numeric" aria-hidden="true">#</a> Energy l3 (numeric)</h3><p>Phase 3 energy. Value can be found in the published state on the <code>energy_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="reactive-energy-l1-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-energy-l1-numeric" aria-hidden="true">#</a> Reactive energy l1 (numeric)</h3><p>Phase 1 reactive energy. Value can be found in the published state on the <code>reactive_energy_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="reactive-energy-l2-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-energy-l2-numeric" aria-hidden="true">#</a> Reactive energy l2 (numeric)</h3><p>Phase 2 reactive energy. Value can be found in the published state on the <code>reactive_energy_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="reactive-energy-l3-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-energy-l3-numeric" aria-hidden="true">#</a> Reactive energy l3 (numeric)</h3><p>Phase 3 reactive energy. Value can be found in the published state on the <code>reactive_energy_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="power-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-l1-numeric" aria-hidden="true">#</a> Power l1 (numeric)</h3><p>Phase 1 power. Value can be found in the published state on the <code>power_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-l2-numeric" aria-hidden="true">#</a> Power l2 (numeric)</h3><p>Phase 2 power. Value can be found in the published state on the <code>power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l3-numeric" tabindex="-1"><a class="header-anchor" href="#power-l3-numeric" aria-hidden="true">#</a> Power l3 (numeric)</h3><p>Phase 3 power. Value can be found in the published state on the <code>power_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="reactive-power-l1-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-power-l1-numeric" aria-hidden="true">#</a> Reactive power l1 (numeric)</h3><p>Phase 1 reactive power. Value can be found in the published state on the <code>reactive_power_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAr</code>.</p><h3 id="reactive-power-l2-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-power-l2-numeric" aria-hidden="true">#</a> Reactive power l2 (numeric)</h3><p>Phase 2 reactive power. Value can be found in the published state on the <code>reactive_power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAr</code>.</p><h3 id="reactive-power-l3-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-power-l3-numeric" aria-hidden="true">#</a> Reactive power l3 (numeric)</h3><p>Phase 3 reactive power. Value can be found in the published state on the <code>reactive_power_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAr</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',42),p={},v=(0,t(983744).Z)(p,[["render",function(e,r){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[o,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=OWON"},{default:(0,i.w5)((()=>[(0,i.Uk)("OWON")])),_:1})])]),a,d,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),s,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);