import {RankLogo} from "@/interfaces";

const listMenuHeader = [
	{
		id: 1,
		name: "Trang chủ",
		path: "/",
	},
	{
		id: 2,
		name: "Giới thiệu",
		path: "/about",
	},
	{
		id: 3,
		name: "Blog",
		path: "/blog",
	},
	{
		id: 4,
		name: "Hoạt động",
		path: "/blog",
	},
	{
		id: 5,
		name: "Dự án",
		path: "/blog",
	},
	{
		id: 6,
		name: "Liên hệ",
		path: "/blog",
	},
];

const rankLogo: RankLogo = {
	highlight: {
		name: "highlight",
		url: "highlight.png",
		width: "182px",
		height: "206px",
		widthImg: "84px",
		heightImg: "84px",
		top: "22%",
		bottom: "63px",
	},
	master: {
		name: "master",
		url: "master.png",
		width: "w-[80px] lg:w-[182px]",
		height: "h-[90px] lg:h-[206px]",
		widthImg: "w-9 lg:w-[84px]",
		heightImg: "h-9 lg:h-[84px] ",
		top: "22%",
		bottom: "62px",
	},
	seo: {
		name: "seo",
		url: "seo.png",
		width: "200px",
		height: "226px",
		widthImg: "86px",
		heightImg: "86px",
		top: "30%",
		bottom: "60px",
	},
	diamond: {
		name: "diamond",
		url: "diamond.png",
		width: "200px",
		height: "205px",
		widthImg: "90px",
		heightImg: "90px",
		top: "29%",
		bottom: "48px",
	},
	platinum: {
		name: "platinum",
		url: "platinum.png",
		width: "156px",
		height: "160px",
		widthImg: "86px",
		heightImg: "86px",
		top: "23%",
		bottom: "30px",
	},
	gold: {
		name: "gold",
		url: "gold.png",
		width: "115px",
		height: "118px",
		widthImg: "80px",
		heightImg: "80px",
		top: "17%",
		bottom: "16px",
	},
	bronze: {
		name: "bronze",
		url: "bronze.png",
		width: "108px",
		height: "111px",
		widthImg: "80px",
		heightImg: "80px",
		top: "15%",
		bottom: "18px",
	},
};
const listPartners = [
	{name: "okvip", url: "okvip.png", width: "200px", height: "96px"},
	{name: "789bet", url: "789bet.png", width: "200px", height: "96px"},
	{name: "mb66", url: "mb66.png", width: "200px", height: "96px"},
	{name: "new88", url: "new88.png", width: "200px", height: "96px"},
	{name: "jun88", url: "jun88.png", width: "200px", height: "96px"},
	{name: "hi88", url: "hi88.png", width: "200px", height: "96px"},
];
const ListMenuMobile = [
	{
		name: "Trang chủ",
		icon: "/images/home.png",
		area: "w-[58px] h-[30px] ",
		link: "/",
	},
	{
		name: "Blog",
		icon: "/images/blog.png",
		area: "w-[30px] h-[30px] ",
		link: "/blog",
	},
	{
		name: "Hoạt động",
		icon: "/images/activity.png",
		area: "w-9 h-9 ",
		link: "/hoat-dong",
	},
	{
		name: "Dự án",
		icon: "/images/project.png",
		area: "w-[30px] h-[30px] ",
		link: "/du-an",
	},
];
const URL_IMAGE = "http://109.123.229.78:9000/kaizen";
export {listMenuHeader, rankLogo, listPartners, ListMenuMobile, URL_IMAGE};
