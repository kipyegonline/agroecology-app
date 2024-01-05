<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import MyRandomList from "../components/randomList.svelte"
  import { poe } from '../components/payload';
  import { fade } from 'svelte/transition';
 
	let name="Vincent Kipyegon";
	let count=0;
	let friends=["Jules","Harriet","Joy","Elvis","Mr. Kiprono","Allan Kim"]
$:multiplier=count * 4;


let isActive=true
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



	
	<section>
		<h1>Principles of Agroecology</h1>
	<ul class="principles" >
		{#each poe as p,index  (p.name)}
		
	<li >
		<div  class="card" transition:fade>
			<h3>{p.name}</h3>
			<p>{p.description}</p>
			<div class="chips">
				{#each p.categories as cat }
				<small> {cat}</small>
				{/each }
			</div>

		</div>
		</li>
		
	{/each}
	</ul>
	</section>
	
	
	

	

	<Counter />

<style>
	.active{background:purple;}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	.principles{
		list-style: none;
		padding:5px 0;
		display:flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap:2rem;
	}
	.principles li{
		max-width:300px;
	}
	.card{		
		
		background:white;
		
		
		line-height: 1.25;
		border:1px solid #ccc;
		padding:.75rem;
		transition: all 2s ease-in-out;
		min-width: 300px;
				
		height:min-content;
		min-height: 250px;;
		
		
	}

	.card h3{ border:1px solid cyan;
	text-align: center;
	margin:0;
	padding:.5rem;
}
	.card p{
		text-align: center;
	}
	.chips{
		margin-top:2rem;
		display:flex;
		justify-content: center;
		gap:1rem;
	}
	.chips small{
		border-radius:10px;
		border:1px solid green;
		padding:5px 10px;
		width:30px;
	}
</style>
