import { PolymerElement, html } from '@polymer/polymer/polymer-element'
import '@webcomponents/shadycss/entrypoints/apply-shim'
import './company-duration'

class CompanyList extends PolymerElement {
	constructor () {
		super()

		this.tenten = {
			name: '転転創意',
			duration: {
				from: { "year": 2016, "month": "05" },
				to: { "year": 2018, "month": "05" }
			}
		}

		this.sifi = {
			name: 'SiFi 矽緋國際',
			duration: {
				from: { "year": 2015, "month": "03" },
				to: { "year": 2016, "month": "03" }
			}
		}

		this.atcc = {
			name: '安通 ATCC',
			duration: {
				from: { "year": 2013, "month": "05" },
				to: { "year": 2015, "month": "02" }
			}
		}

		this.taipei = {
			name: '臺北醫學大學',
			duration: {
				from: { "year": 2011, "month": "09" },
				to: { "year": 2012, "month": "03" }
			}
		}
	}

	static get template () {
		return html`
			<style>
				company-duration + company-duration { margin-top: 104px; }

				[role="grid"] {
					display: grid;
						grid-template-columns: repeat(2, 1fr);
						grid-gap: 80px 48px;
				}

				[role="gridcell"] > h3 {
					margin: 0 0 24px;
					font-size: 32px;
					font-weight: 500;
					line-height: 1em;
				}

				[role="gridcell"] > img {
					display: block;
					width: 100%;
					margin-bottom: 24px;
				}

				[role="gridcell"] > .content {
					margin: 0;
					font-weight: 400;
					font-size: 18px;
				}

				[role="gridcell"] > .content + .content { margin-top: 8px; }

				[role="gridcell"] > ul {
					margin: 0;
					padding-left: 24px;
				}

				@media (max-width: 1120px) {
					[role="gridcell"] > h3 {
						font-size: 28px;
					}
				}

				@media (max-width: 800px) {
					[role="grid"] {
						grid-gap: 64px 32px;
					}
				}

				@media (max-width: 640px) {
					company-duration + company-duration { margin-top: 80px; }

					[role="grid"] {
						display: flex;
						overflow-x: auto;
					}

					[role="gridcell"] {
						flex: none;
						width: 80%;
						padding-right: 32px;
					}
				}

				@media (max-width: 620px) {
					[role="gridcell"] > h3 {
						margin: 0 0 16px;
						font-size: 20px;
					}

					[role="gridcell"] > img { margin-bottom: 8px; }
					[role="gridcell"] > .content { font-size: 16px; }
				}

				@media (max-width: 480px) {
					[role="gridcell"] { padding-right: 16px; }
				}
			</style>

			<company-duration duration="[[tenten.duration]]" name="[[tenten.name]]">
				<div role="grid" aria-colcount="-1">
					<div role="gridcell">
						<h3>Topeak Buyer’s Guide</h3>
						<img src="./src/assets/topeak.webp" alt=""/>
						<p class="content">參考 Dropbox 的 User Guide 頁面，用 React 實現 Buyer’s Guide 頁面的用戶體驗。</p>
					</div>
					<div role="gridcell">
						<h3>田田蔬果</h3>
						<img src="./src/assets/tientien.webp" alt=""/>
						<p class="content">用 Vue 實現整個網頁的無縫瀏覽體驗，而 Nuxt.js 除了方便利用 SSR 以及 SEO 外，也能用來做專案架構規劃的輔助。</p>
					</div>
					<div role="gridcell">
						<h3>KVB 昆仑国际</h3>
						<img src="./src/assets/kvb.webp" alt=""/>
						<p class="content">用 Webpack + bootstrap-loader 來達成 Bootstrap 的客製化。</p>
					</div>
					<div role="gridcell">
						<h3>Thunder Power EV</h3>
						<img src="./src/assets/tpev.webp" alt=""/>
						<p class="content">負責首頁排版以及特效處理</p>
					</div>
					<div role="gridcell">
						<h3>転転徵才頁面</h3>
						<img src="./src/assets/jobs.webp" alt=""/>
						<p class="content">雖然頁面只有一頁，但是需要個別處理的部份不少，用原生的作法怕不好管理，用 React、Vue 又顯得多餘，所以才選擇用 Polymer 來將複雜的部分打包獨立，又能讓專案架構變得精簡。</p>
					</div>
				</div>
			</company-duration>
			<company-duration duration="[[sifi.duration]]" name="[[sifi.name]]">
			<div role="grid" aria-colcount="-1">
				<div role="gridcell">
					<h3>立信鐘錶</h3>
					<img src="./src/assets/li-hsin.webp" alt=""/>
					<p class="content">網頁設計、即時聊天功能（by Sails.js）</p>
				</div>
				<div role="gridcell">
					<h3>楷壘設計有限公司</h3>
					<img src="./src/assets/klai.webp" alt=""/>
				</div>
				<div role="gridcell">
					<h3>Logo、名片以及商品傳單設計</h3>
					<img src="./src/assets/sifi-2015-11.webp" alt=""/>
					<p class="content">Made by Affinity Designer</p>
				</div>
				<div role="gridcell">
					<h3>流量控管系統</h3>
					<p class="content">給學校使用的期刊下載流量管理，將系統拆分成三大部份：</p>
					<ul class="content">
						<li>封包擷取：用 Golang 編寫，負責封包擷取、篩選，並將資料打包送出。</li>
						<li>網站爬蟲：接收擷取後的資料，再做更進一步的篩選、流量分析後，存進資料庫，以 node-restify 建置。</li>
						<li>資料呈現：將資料庫的數據做統計整理後，在網頁上以圖表呈現。以 Koa.js 建置。</li>
					</ul>
					<p class="content">各個區塊用 Docker 打包拆分。另外以爬蟲爬取期刊網站資料，以便往後能分析更詳細的資料。</p>
				</div>
			</div>
			</company-duration>
			<company-duration duration="[[atcc.duration]]" name="[[atcc.name]]">
			<div role="grid" aria-colcount="-1">
				<div role="gridcell">
					<h3>交點 x 2013 年會官網</h3>
					<img src="./src/assets/cp2013.webp" alt=""/>
					<p class="content">前後台功能開發、維護</p>
				</div>
				<div role="gridcell">
					<h3>Yiamas 官網上線倒數頁面</h3>
					<img src="./src/assets/yiamas_landing.webp" alt=""/>
				</div>
				<div role="gridcell">
					<h3>TiC100 活動報名網站</h3>
					<img src="./src/assets/tic100.webp" alt=""/>
					<p class="content">前後台功能開發、維護</p>
				</div>
				<div role="gridcell">
					<h3>Google 企業相關課程合作</h3>
					<p class="content">爬取人力銀行、黃頁以及特定企業相關工會、網站等資料，分析適合的企業並發送邀請信，主要有廣告投放、流量資料分析等課程。</p>
				</div>
				<div role="gridcell">
					<h3>2014 ATCC 全國大專院校商業個案大賽</h3>
					<img src="./src/assets/2014_atcc.webp" alt=""/>
					<p class="content">報名頁面設計、後續功能開發</p>
				</div>
				<div role="gridcell">
					<h3>Google Ignite 數位火星計劃</h3>
					<img src="./src/assets/ignite.webp" alt=""/>
					<p class="content">網頁排版</p>
				</div>
				<div role="gridcell">
					<h3>Google Adwords Challenge 數位行銷精英培訓計畫</h3>
					<img src="./src/assets/gac.webp" alt=""/>
					<p class="content">網站維護、功能開發</p>
				</div>
			</div>
			</company-duration>
			<company-duration duration="[[taipei.duration]]" name="[[taipei.name]]">
			<div role="grid" aria-colcount="-1">
				<div role="gridcell">
					<h3>專案研究助手</h3>
					<p class="content">負責虛擬機器及管理軟體安裝設定、網站架設、網頁設計</p>
				</div>
			</div>
			</company-duration>
		`
	}
}

customElements.define('company-list', CompanyList)
