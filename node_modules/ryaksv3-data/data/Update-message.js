let updateType
let autoUpdate = false

import update from './configs/Version.js'
import lang from "./configs/Language.js"

if (!DataStore.has(`Update-${update}`)) {
	DataStore.set(`Update-${update}`, true)
}

if (!autoUpdate) {updateType = "Manual"}
else if (autoUpdate && DataStore.get(`Update-${update}`)){
	updateType = "Auto"
	let downloadUpdate = new Promise((resolve, reject) => {
		setTimeout(() => {
		  	if (true)
				resolve()
		  	else
				reject()
		}, 3000)
	})
	  
	Toast.promise(downloadUpdate, {
		loading: 'Theme is automatically updating...',
		success: 'Auto update successfully!!',
		error: 'Can not update automatically'
	})
}

if (DataStore.get(`Force-Update`)) {
	async function createLoaderMenu(root) {
		const langCode = document.querySelector("html").lang;
		const langMap = lang.langlist
		const _t = lang[langMap[langCode] || "EN"];
		const { Component, jsx, render } = await import('//esm.run/nano-jsx')
		
		class LoaderMenu extends Component {
			render() {
				return jsx/*html*/`
					<div class="modal" style="position: absolute; inset: 0px; z-index: 8500;" id="Ryaks-Update">
						<lol-uikit-full-page-backdrop class="backdrop" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;"></lol-uikit-full-page-backdrop>
						<div class="dialog-confirm" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;">
							  <lol-uikit-dialog-frame class="dialog-frame" orientation="bottom" close-button="false">
								<div class="dialog-content">
									<lol-uikit-content-block class="app-controls-exit-dialog" type="dialog-small" style="width: 500px;">
										<h5>Ryaks_V3 - ${updateType} Update</h5>
										<hr class="heading-spacer" />
										<hr class="heading-spacer" />
										<p class="Ryaks-Update" style="text-align: center">New theme updates are available</p>
										<p class="Ryaks-Update" style="text-align: center">You have to update manually to continue using RyaksV3 without problems</p>
										<hr class="heading-spacer" />
										<p class="Ryaks-Update" style="text-align: center"> Meow ~~~</p>
	
									</lol-uikit-content-block>
								</div>
								<lol-uikit-flat-button-group type="dialog-frame">
									<lol-uikit-flat-button tabindex="1" onClick=${() => {window.open(`https://github.com/Ryaks69/Ryaks-V3/releases/tag/v${update}`,)}}>${_t['l.download']}</lol-uikit-flat-button>
								</lol-uikit-flat-button-group>
							  </lol-uikit-dialog-frame>
						</div>
					</div>
				`
			}
		}
		render(jsx`<${LoaderMenu} />`, root)
	}
	
	window.addEventListener("load", async ()=> {
		const manager = () => document.getElementById('lol-uikit-layer-manager-wrapper')
		const root    = document.createElement('div')
		while (!manager()) await new Promise(r => setTimeout(r, 200))
		await createLoaderMenu(root)
		manager().prepend(root)
		let close = window.setInterval(()=>{
			try {
				let closeButton = document.querySelector("#Ryaks-Update lol-uikit-dialog-frame").shadowRoot.querySelector("div.lol-uikit-dialog-frame-close-button > lol-uikit-close-button")
				closeButton.addEventListener("click", ()=> {document.getElementById("Ryaks-Update").hidden = true})
			}catch{}
			window.clearInterval(close)
		})
	})
}
else if (DataStore.get(`Update-${update}`) && !DataStore.get(`Force-Update`)) {
	async function createLoaderMenu(root) {
		const langCode = document.querySelector("html").lang;
		const langMap = lang.langlist
		const _t = lang[langMap[langCode] || "EN"];
		const { Component, jsx, render } = await import('//esm.run/nano-jsx')
		
		class LoaderMenu extends Component {
			render() {
				return jsx/*html*/`
					<div class="modal" style="position: absolute; inset: 0px; z-index: 8500;" id="Ryaks-Update">
						<lol-uikit-full-page-backdrop class="backdrop" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;"></lol-uikit-full-page-backdrop>
						<div class="dialog-confirm" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;">
							  <lol-uikit-dialog-frame class="dialog-frame" orientation="bottom" close-button="false">
								<div class="dialog-content">
									<lol-uikit-content-block class="app-controls-exit-dialog" type="dialog-small" style="width: 500px;">
										<h5>Ryaks_V3 - ${updateType} Update ${update}</h5>
										<hr class="heading-spacer" />

										<p class="Ryaks-Update">- Fix summonerID bug after rito update riotID name</p>
										<p class="Ryaks-Update">- Fix "invite all plugin" bug</p>
										<p class="Ryaks-Update">- Update Css</p>
										<p class="Ryaks-Update">- Update settings</p>
										<p class="Ryaks-Update">- Update translate file (MX)</p>
										<p class="Ryaks-Update">- Update Holiday message</p>
										<p class="Ryaks-Update">- Remove Auto Honor plugin</p>
										<p class="Ryaks-Update">- Update theme's console log</p>
										<p class="Ryaks-Update">- Optimizing theme</p>
										<p class="Ryaks-Update"></p>
										<p class="Ryaks-Update"></p>
										<p class="Ryaks-Update"></p>
										<p class="Ryaks-Update"></p>
										<p class="Ryaks-Update"></p>
										<p class="Ryaks-Update"></p>
										<p class="Ryaks-Update"></p>
	
									</lol-uikit-content-block>
								</div>
								<lol-uikit-flat-button-group type="dialog-frame">
									<lol-uikit-flat-button tabindex="1" class="button-decline" onClick=${() => {document.getElementById("Ryaks-Update").hidden = true}}>${_t['l.close']}</lol-uikit-flat-button>
								</lol-uikit-flat-button-group>
							  </lol-uikit-dialog-frame>
						</div>
					</div>
				`
			}
		}
		render(jsx`<${LoaderMenu} />`, root)
	}
	
	window.addEventListener("load", async ()=> {
		const manager = () => document.getElementById('lol-uikit-layer-manager-wrapper')
		const root    = document.createElement('div')
		while (!manager()) await new Promise(r => setTimeout(r, 200))
		await createLoaderMenu(root)
		manager().prepend(root)
		let close = window.setInterval(()=>{
			try {
				let closeButton = document.querySelector("#Ryaks-Update lol-uikit-dialog-frame").shadowRoot.querySelector("div.lol-uikit-dialog-frame-close-button > lol-uikit-close-button")
				closeButton.addEventListener("click", ()=> {
					document.getElementById("Ryaks-Update").hidden = true
				})
				window.clearInterval(close)
			}catch{}
		})
	})

	DataStore.set(`Update-${update}`, false)
}
//*/