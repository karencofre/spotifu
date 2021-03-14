<script>
	import Header from "./components/Header.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import Inicio from "./components/Inicio.svelte";
	import BottomPlayer from "./components/BottomPlayer.svelte";
</script>
	
	<style>
	:global(:root){
		--black-1:#030303;
		--black-2:#171717;
		--grey:#7d7d7d;
		--white:#ffffff;
		--primary:#00b441;

	}
	:global(*){
		box-sizing: border-box;
		margin:0;
		padding:0;
		color:var(--grey);
		font-family: Avenir;
	}
	body{
		background: linear-gradient(180deg, #323132 0%, rgba(23,23,23,1) 50%, rgba(3,3,3,1) 100%);
		position: absolute;
		top:0;
		bottom: 0;
		right: 0;
		left:0 ;
	}
	.flexbox{
		display: flex;
		height: 100%;
	}
	.box{
		display: flex;
		flex-direction: column;
	}
	</style>
<body>
	<div class="flexbox">

	<Sidebar/>
		<div class="box">
			<Header/>
			<Inicio/>
		</div>
	</div>
	<BottomPlayer/>
</body>
