import { PolymerElement, html } from '@polymer/polymer/polymer-element'
import '@webcomponents/shadycss/entrypoints/apply-shim'
import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/polymer/lib/elements/dom-if'
import './my-works'
import '../elements/work-card'

class CompanyList extends PolymerElement {
	constructor () {
		super()

		this.companies = [{
			name: '転転創意',
			duration: {
				from: { year: 2016, month: '05' },
				to: { year: 2018, month: '05' }
			},
			works: [{
				name: 'Topeak Buyer’s Guide',
				img: 'topeak',
				contents: [
					'參考 Dropbox 的 User Guide 頁面，用 React 實現 Buyer’s Guide 頁面的用戶體驗。'
				]
			}, {
				name: '田田蔬果',
				img: 'tientien',
				contents: ['用 Vue 實現整個網頁的無縫瀏覽體驗，而 Nuxt.js 除了方便利用 SSR 以及 SEO 外，也能用來做專案架構規劃的輔助。']
			}, {
				name: 'KVB 昆仑国际',
				img: 'kvb',
				contents: ['用 Webpack + bootstrap-loader 來達成 Bootstrap 的客製化。']
			}, {
				name: 'Thunder Power EV',
				img: 'tpev',
				contents: [
					'負責首頁排版以及特效處理'
				]
			}, {
				name: '転転徵才頁面',
				img: 'jobs',
				contents: ['雖然頁面只有一頁，但是需要個別處理的部份不少，用原生的作法怕不好管理，用 React、Vue 又顯得多餘，所以才選擇用 Polymer 來將複雜的部分打包獨立，又能讓專案架構變得精簡。']
			}]
		}, {
			name: 'SiFi 矽緋國際',
			duration: {
				from: { year: 2015, month: '03' },
				to: { year: 2016, month: '03' }
			},
			works: [{
				name: '立信鐘錶',
				img: 'li-hsin',
				contents: ['網頁設計、即時聊天功能（by Sails.js）']
			}, {
				name: '楷壘設計有限公司',
				img: 'klai'
			}, {
				name: 'Logo、名片以及商品傳單設計',
				img: 'sifi',
				contents: ['Made by Affinity Designer']
			}, {
				name: '流量控管系統',
				contents: [
					'給學校使用的期刊下載流量管理，將系統拆分成三大部份：',
					[
						'封包擷取：用 Golang 編寫，負責封包擷取、篩選，並將資料打包送出。',
						'網站爬蟲：接收擷取後的資料，再做更進一步的篩選、流量分析後，存進資料庫，以 node-restify 建置。',
						'資料呈現：將資料庫的數據做統計整理後，在網頁上以圖表呈現。以 Koa.js 建置。'
					],
					'各個區塊用 Docker 打包拆分。另外以爬蟲爬取期刊網站資料，以便往後能分析更詳細的資料。'
				]
			}]
		}, {
			name: '安通 ATCC',
			duration: {
				from: { year: 2013, month: '05' },
				to: { year: 2015, month: '02' }
			},
			works: [{
				name: '交點 x 2013 年會官網',
				img: 'cp2013',
				contents: ['前後台功能開發、維護']
			}, {
				name: 'Yiamas 官網上線倒數頁面',
				img: 'yiamas'
			}, {
				name: 'TiC100 活動報名網站',
				img: 'tic100',
				contents: ['前後台功能開發、維護']
			}, {
				name: 'Google 企業相關課程合作',
				contents: ['爬取人力銀行、黃頁以及特定企業相關工會、網站等資料，分析適合的企業並發送邀請信，主要有廣告投放、流量資料分析等課程。']
			}, {
				name: '2014 ATCC 全國大專院校商業個案大賽',
				img: 'atcc',
				contents: ['報名頁面設計、後續功能開發']
			}, {
				name: 'Google Ignite 數位火星計劃',
				img: 'ignite',
				contents: ['網頁排版']
			}, {
				name: 'Google Adwords Challenge 數位行銷精英培訓計畫',
				img: 'gac',
				contents: ['網站維護、功能開發']
			}]
		}, {
			name: '臺北醫學大學',
			duration: {
				from: { year: 2011, month: '09' },
				to: { year: 2012, month: '03' }
			},
			works: [{
				name: '專案研究助手',
				contents: [
					'負責虛擬機器及管理軟體安裝設定、網站架設、網頁設計'
				]
			}]
		}]
	}

	static get template () {
		return html`
			<style>
				my-works + my-works { margin-top: 104px; }

				[role="grid"] {
					display: grid;
						grid-template-columns: repeat(2, 1fr);
						grid-gap: 80px 48px;
				}

				@media (max-width: 800px) {
					[role="grid"] { grid-gap: 64px 32px; }
				}

				@media (max-width: 640px) {
					my-works + my-works { margin-top: 80px; }

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

				@media (max-width: 480px) {
					my-works + my-works { margin-top: 64px; }
					[role="gridcell"] { padding-right: 16px; }
				}
			</style>

			<template is="dom-repeat" items="[[companies]]">
				<my-works duration="[[item.duration]]" name="[[item.name]]">
					<div role="grid" aria-colcount="-1">
						<template is="dom-repeat" items="[[item.works]]">
							<div role="gridcell">
								<work-card name="[[item.name]]" img="[[item.img]]" contents="[[item.contents]]">
								</work-card>
							</div>
						</template>
					</div>
				</my-works>
			</template>
		`
	}
}

customElements.define('company-list', CompanyList)
