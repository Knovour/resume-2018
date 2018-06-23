import { PolymerElement, html } from '@polymer/polymer/polymer-element'
import '@webcomponents/shadycss/entrypoints/apply-shim'
import '../elements/ability-check'
import '../elements/social-btn'

class BasicProfile extends PolymerElement {
	static get template () {
		return html`
			<style>
				:host {
					position: relative;
					display: grid;
						grid-template-areas:
							"avatar info"
							"avatar links";
						grid-template-rows: 1fr auto;
						grid-template-columns: calc((100% - 1120px) / 2 + (1120px - (24px * 13)) / 14 * 3 + (32px * 2)) 1fr;
						grid-gap: 32px;
					height: 440px;
					color: white;
				}

				.avatar {
					display: flex;
						align-items: flex-end;
						justify-content: flex-end;
					grid-area: avatar;
				}

				.avatar > svg {
					width: auto;
					height: 420px;
					transform: translate(-8px, 12px);
				}

				.avatar > svg > path {
					fill: white;
					transition: all 120ms ease;
				}
				.avatar:hover > svg > path { fill: var(--default-gray); }

				.info {
					grid-area: info;
					padding-left: 24px;
				}

				.info > h1,
				.info > h2 { letter-spacing: 2px; }

				.info > h1 {
					@apply --h1;
					margin-top: 32px;
				}

				.info > h1 > small {
					padding-left: 22px;
					font-size: 40px;
					font-weight: 400;
				}

				.info > h2 {
					margin: -4px 0 0;
					font-size: 32px;
					font-weight: 400;
				}

				.abilities { margin: 4px 0 16px; }
				ability-check + ability-check { padding-left: 16px; }

				.graduated { font-size: 24px; }

				.links {
					display: flex;
						justify-content: flex-end;
					grid-area: links;
				}

				social-btn + social-btn { margin-left: 24px; }
			</style>

			<div class="avatar">
				<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4" clip-rule="evenodd" viewBox="0 0 211 390"><path fill-rule="nonzero" d="M48 89.3L.6 112.7l68.2 6.4L48 89.3zM70.3 92.2l16.9-20.3-32 24.2 1.9 2.6 13.2-6.5z"/><path fill-rule="nonzero" d="M92.8 74.6l26-.3 11.8-16.4L96 3.6l12.8 51.8.4 1-34.7 6.2-10.1 24 30.7-23-2.2 11zM38.2 373.4h7.4l6.1-85.1L41 316.9l-2.7 56.5z"/><path fill-rule="nonzero" d="M89.2 4.2L102.8 40 93 0l-3.8 4.2zM0 114.7l10.7 9.4 48.5-4L0 114.8z"/><path fill-rule="nonzero" d="M76 177.5l5.4-71.3-17.5 2.4 8.8 12.5-36.3 3-32 55.6 19.2 39 52.3-41.2zM197.1 256.7l-2.7-39.5-6.2 19.7 9 19.8zM76.5 196.3l61-15.8-60.3 6.4-.7 9.4zM89.1 82.8l2.7-13.3-17 20.5L89 82.8zM62.4 106.4l27.2-21.6-31.4 15.6 4.2 6zM117.2 99.3L97.6 81l-32 25.3 51.6-7z"/><path fill-rule="nonzero" d="M189.8 263.2v90l20.4-90.7-11.4-11 .8 11.7h-9.7zM156.4 322l5.4-46.6-4 2.7-1.4 43.8zM150.6 179.1l-74.3 19.3-4.4 58.2-2.2 5.4L88 283.8l50 5.3 12-8.1c0-.2.1-.2.2-.3v.1l28.2-19.2 15.5-49.4-43.3-33zM187.8 361.2V283l-7.5 78.2h7.5zM40.1 313.4l12-31.9L7 189.4l33.2 124z"/><path fill-rule="nonzero" d="M187.3 239.8l-6.7 21.4h16.3l-9.6-21.4zM75.7 180.2l-51.2 40.4 32.9 67.1 12.5-31.5 5.8-76zM64.8 274.3l-5 13 26.7 47.9-21.7-60.9zM147.7 345h6l2-65.5-4 2.7c-.5 4.5-2.6 39-4 62.9zM83.4 389.4h9.9l-2.8-43L79.2 326l4.2 63.3zM68.9 264.1l-3 7.4L90 339 86.5 285l-17.6-21z"/></svg>
			</div>
			<div class="info">
				<h1>Knovour Zheng<small>鄭竣鴻</small></h1>
				<h2>Frontend Developer</h2>
				<div class="abilities">
					<ability-check>React</ability-check>
					<ability-check>Vue</ability-check>
					<ability-check>JS</ability-check>
				</div>
				<span class="graduated">輔仁大學資訊工程學系畢業</span>
			</div>
			<div class="links">
				<social-btn icon="mail" link="mailto:knovour@gmail.com">Gmail</social-btn>
				<social-btn icon="github" link="https://github.com/knovour">GitHub</social-btn>
				<social-btn icon="list" link="https://notes.knovour.ninja">Blog</social-btn>
				<social-btn icon="book" link="https://share.readmoo.com/mooer/612883g92/bookshelf/Knovour/total">BookShelf</social-btn>
			</div>
		`
	}
}

customElements.define('basic-profile', BasicProfile)
