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
					margin-bottom: 80px;
				}

				h1 {
					@apply --h1;
					line-height: 1em;
				}

				@media (min-width: 621px) {
					h1 {
						order: 1;
						margin-left: 24px;
						padding-top: 6px;
					}

					.date {
						display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						padding: 16px;
						font-family: oswald, sans-serif;
						font-size: 0;
					}

					.date-start {
						background-color: var(--green-3);
						color: var(--green-1);
					}

					.date-end {
						background-color: var(--green-1);
						color: var(--green-3);
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

					.to { display: none; }
				}

				@media (max-width: 620px) {
					:host {
						flex-wrap: wrap;
						margin-bottom: 40px;
					}

					h1 { width: 100%; }

					.date { font-size: 20px;}
					.date-start { margin-right:8px; }
					.date-end { margin-left:8px; }
				}

				@media (max-width: 480px) {
					:host { margin-bottom: 32px; }
					.date { font-size: 18px;}
				}
			</style>

			<h1><slot></slot></h1>
			<div class="date date-start">
				<span class="year">{{from.year}}</span>
				<span class="month">[[from.month]]</span>
			</div>
			<div class="to">to</div>
			<div class="date date-end">
				<span class="year">[[to.year]]</span>
				<span class="month">[[to.month]]</span>
			</div>
		`
	}
}

customElements.define('company-title', CompanyTitle)
