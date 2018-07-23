import { PolymerElement, html } from '@polymer/polymer/polymer-element'
import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/polymer/lib/elements/dom-if'

class WorkCard extends PolymerElement {
	isArray (data) {
		return Array.isArray(data)
	}

	static get properties () {
		return {
			name: String,
			img: String,
			contents: {
				type: Array,
				value: () => []
			}
		}
	}

	static get template () {
		return html`
			<style>
				h3 {
					margin: 0 0 24px;
					font-size: 32px;
					font-weight: 500;
					line-height: 1em;
				}

				img {
					display: block;
					width: 100%;
					margin-bottom: 24px;
				}

				.content {
					margin: 8px 0 0;
					font-weight: 400;
					font-size: 18px;
				}

				ul { padding-left: 24px; }

				@media (max-width: 1120px) {
					h3 { font-size: 28px; }
				}

				@media (max-width: 620px) {
					h3 {
						margin: 0 0 16px;
						font-size: 20px;
					}

					img { margin-bottom: 8px; }

					.content { font-size: 16px; }
				}

				@media (max-width: 480px) {
					.content { font-size: 14px; }
				}
			</style>

			<h3>[[name]]</h3>
			<template is="dom-if" if="[[img]]">
				<picture>
					<source srcset="./src/assets/[[img]].jpg" type="image/jpeg">
					<img src="./src/assets/[[img]].webp" alt=""/>
				</picture>
			</template>
			<template is="dom-repeat" items="[[contents]]">
				<template is="dom-if" if="[[!isArray(item)]]">
					<p class="content">[[item]]</p>
				</template>
				<template is="dom-if" if="[[isArray(item)]]">
					<ul class="content">
						<template is="dom-repeat" items="[[item]]">
							<li>[[item]]</li>
						</template>
					</ul>
				</template>
			</template>
		`
	}
}

customElements.define('work-card', WorkCard)
