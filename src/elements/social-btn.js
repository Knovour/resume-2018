import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class SocialBtn extends PolymerElement {
	ready () {
		super.ready()

		const tmpl = document.createElement('i')
		tmpl.className = 'icon'
		tmpl.innerHTML = feather.icons[this.icon].toSvg({ width: 20, height: 20 })
		const $target = this.shadowRoot.querySelector('a')
		$target.insertBefore(tmpl, $target.childNodes[0])
	}

	static get properties () {
		return {
			icon: String,
			link: String
		}
	}

	static get template () {
		return html`
			<style>
				a {
					display: flex;
						align-items: center;
					width: 160px;
					height: 40px;
					box-sizing: border-box;
					border-radius: 2px;
					padding: 0 16px;
					background-color: white;
					text-decoration: none;
					color: var(--default-black);
					line-height: 10%;

					transition: all 120ms ease;
				}

				a:hover {
					background-color: var(--default-gray);
					color: white;
				}

				.icon { padding-right: 8px; }
			</style>

			<a href="[[link]]" title="" target="_blank">
				<slot></slot>
			</a>
		`
	}
}

customElements.define('social-btn', SocialBtn)
