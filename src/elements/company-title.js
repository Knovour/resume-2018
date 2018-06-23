import { PolymerElement, html } from '@polymer/polymer/polymer-element'
import '@webcomponents/shadycss/entrypoints/apply-shim'

class CompanyTitle extends PolymerElement {
	static get properties () {
		return {
			from: {
				type: Object,
				value: () => ({ year: 2016, month: '05' })
			},
			to: {
				type: Object,
				value: () => ({ year: 2016, month: '05' })
			}
		}
	}

	static get template () {
		return html`
			<style>
				:host {
					display: flex;
						align-items: center;
					color: var(--default-black);
				}

				.date {
					display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					color: var(--default-gray);
					font-family: oswald, sans-serif;
					font-size: 0;
				}

				.date > span { line-height: 1em; }

				.date > .year {
					font-size: 20px;
					font-weight: 400;
					text-indent: 1px;
				}

				.date > .month {
					font-size: 40px;
					font-weight: 300;
				}

				.divider {
					width: 16px;
					height: 2px;
					margin: 0 12px;
					background-color: var(--default-gray);
				}

				h1 {
					@apply --h1;
					margin-left: 24px;
					padding-top: 6px;
					line-height: 1em;
				}
			</style>

			<div class="date">
				<span class="year">{{from.year}}</span>
				<span class="month">[[from.month]]</span>
			</div>
			<div class="divider"></div>
			<div class="date">
				<span class="year">[[to.year]]</span>
				<span class="month">[[to.month]]</span>
			</div>
			<h1><slot></slot></h1>
		`
	}
}

customElements.define('company-title', CompanyTitle)
