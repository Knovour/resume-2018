import { PolymerElement, html } from '@polymer/polymer/polymer-element'
import '@webcomponents/shadycss/entrypoints/apply-shim'
import '../elements/ability-check'
import '../elements/social-btn'

class BasicProfile extends PolymerElement {
	static get template () {
		return html`
			<style>
				:host {
					display: grid;
						grid-template-areas:
							"avatar info"
							"links links";
						grid-template-rows: 1fr auto;
						grid-template-columns: 240px 1fr;
						grid-gap: 48px;
					height: 400px;
				}

				.avatar {
					grid-area: avatar;
					padding-top: 8px;
				}

				.avatar > img {
					width: 100%;
					height: auto;
					border-radius: 50%;
				}

				.info { grid-area: info; }

				.info > h1,
				.info > h2 { letter-spacing: 2px; }

				.info > h1 { @apply --h1; }

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

				.info > .abilities { margin: 0; }
				ability-check + ability-check { padding-left: 16px; }

				.info > .graduated {
					margin: 24px 0 8px;
					font-size: 24px;
				}

				.links {
					display: flex;
						justify-content: flex-end;
					grid-area: links;
					padding-right: 8px;
					transform: translateY(calc(50% + 4px));
				}

				social-btn { margin-right: 24px; }

				@media (max-width: 1280px) {
					:host { padding: 0 40px 0 56px; }
					.links { padding-right: 0; }
				}

				@media (max-width: 1120px) {
					:host {
						grid-template-columns: 200px 1fr;
						height: 320px;
					}

					.avatar { padding-top: 0; }

					.info > h1 > small {
						padding-left: 20px;
						font-size: 32px;
					}

					.info > h2 { font-size: 28px; }

					.info > .graduated { font-size: 20px; }
				}

				@media (max-width: 980px) {
					:host {
						grid-template-areas:
							"avatar info"
							"avatar links";
						grid-template-rows: auto auto;
						grid-template-columns: 184px 1fr;
						grid-gap: 24px 40px;
						height: auto;
						padding-bottom: 40px;
					}

					.links {
						flex-wrap: wrap;
						justify-content: flex-start;
						max-width: 100%;
						transform: translateY(0);
					}

					social-btn {
						margin-right: 16px;
						margin-bottom: 16px;
					}
				}

				@media (max-width: 800px) {
					:host {
						grid-template-areas:
							"avatar"
							"info"
							"links";
						grid-template-rows: 120px auto auto;
						grid-template-columns: 100%;
						grid-gap: 24px;
						padding: 0 32px 32px;
					}

					.avatar > img {
						width: auto;
						height: 100%;
					}
				}

				@media (max-width: 620px) {
					.info > h1,
					.info > h2 { letter-spacing: 0; }
					.info > h1 > small { display: none; }
					.info > h2 { font-size: 24px; }
				}

				@media (min-width: 481px) {
					.avatar > ._mobile-visible { display: none; }
				}

				@media (max-width: 480px) {
					:host {
						grid-template-rows: 56px auto auto;
						padding: 0 16px 48px;
					}

					.avatar {
						display: flex;
							align-items: center;
					}

					.avatar > img {
						margin-right: 16px;
					}

					.avatar .name {
						font-size: 28px;
						font-weight: 500;
					}

					.avatar title {
						font-size: 18px;
						font-weight: 400;
					}

					.info > h1,
					.info > h2 { display: none; }

					.info > .graduated { margin-top: 0; }

					.links {
						display: grid;
							grid-template-columns: repeat(2, 1fr);
							grid-gap: 8px;
					}

					social-btn {
						margin-right: 0;
						margin-bottom: 0;
					}
				}
			</style>

			<div class="avatar">
				<img src="/src/assets/avatar2.png" alt=""/>
				<div class="_mobile-visible">
					<div class="name">Knovour Zheng</div>
					<div class=title">Frontend Developer</div>
				</div>
			</div>
			<div class="info">
				<h1>Knovour Zheng<small>鄭竣鴻</small></h1>
				<h2>Frontend Developer</h2>
				<p class="graduated">輔仁大學資訊工程學系畢業</p>
				<div class="abilities">
					<ability-check>React</ability-check>
					<ability-check>Vue</ability-check>
					<ability-check>JS</ability-check>
				</div>
			</div>
			<div class="links">
				<social-btn icon="mail" link="mailto:knovour@gmail.com">Email</social-btn>
				<social-btn icon="github" link="https://github.com/knovour">GitHub</social-btn>
				<social-btn icon="list" link="https://notes.knovour.ninja">Blog</social-btn>
				<social-btn icon="book" link="https://share.readmoo.com/mooer/612883g92/bookshelf/Knovour/total">BookShelf</social-btn>
			</div>
		`
	}
}

customElements.define('basic-profile', BasicProfile)
