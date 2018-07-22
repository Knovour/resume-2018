import { PolymerElement, html } from '@polymer/polymer/polymer-element'
import '../elements/company-title'

class MyWorks extends PolymerElement {
	static get properties () {
		return {
			duration: Object,
			name: String
		}
	}

	static get template () {
		return html`
			<style>
				:host { display: block; }
			</style>

			<company-title from="[[duration.from]]" to="[[duration.to]]">[[name]]</company-title>
			<slot></slot>
		`
	}
}

customElements.define('my-works', MyWorks)
