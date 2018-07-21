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
					width: 184px;
					height: 64px;
					border: 4px solid var(--green-2);
						border-radius: 4px;
					padding: 0 24px;
					box-sizing: border-box;
					background-color: white;
					text-decoration: none;
					color: var(--green-3);
					line-height: 10%;
					font-size: 18px;
					font-weight: 500;

					transition: all 120ms ease;
				}

				a:hover { background-color: var(--green-2); }

				.icon { padding-right: 8px; }
				.icon > svg { width: 24px; height: 24px; }

				@media (max-width: 1120px) {
					a {
						width: 160px;
						height: 56px;
						padding: 0 16px;
						font-size: 16px;
					}

					.icon > svg { width: 20px; height: 20px; }
				}

				@media (max-width: 980px) {
					a {
						width: 144px;
						height: 40px;
						border-width: 2px;
						font-size: 14px;
					}
				}

				@media (max-width: 480px) {
					a {
						width: 136px;
						height: 36px;
						padding: 0 6px;
					}
				}
			</style>

			<a href="[[link]]" title="" target="_blank">
				<slot></slot>
			</a>
		`
	}
}

customElements.define('social-btn', SocialBtn)
