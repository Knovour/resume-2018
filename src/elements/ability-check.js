import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class AbilityCheck extends PolymerElement {
	ready () {
		super.ready()

		const tmpl = document.createElement('i')
		tmpl.className = 'icon'
		tmpl.innerHTML = feather.icons['check-square'].toSvg({ width: 20, height: 20 })
		this.shadowRoot.insertBefore(tmpl, this.shadowRoot.childNodes[0])
	}

	static get template () {
		return html`
			<style>
				:host {
					display: inline-flex;
						align-items: center;
					font-size: 20px;
					line-height: 10%;
				}

				.icon { padding-right: 8px; }

				@media (max-width: 1120px) {
					:host { font-size: 18px; }
				}
			</style>

			<slot></slot>
		`
	}
}

customElements.define('ability-check', AbilityCheck)
