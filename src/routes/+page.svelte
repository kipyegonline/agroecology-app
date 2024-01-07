<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import MyRandomList from "../components/randomList.svelte"
  import { poe } from '../components/payload';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { user } from '../store/store';
 
	let name="Vincent Kipyegon";
	let count=0;
	let friends=["Jules","Harriet","Joy","Elvis","Mr. Kiprono","Allan Kim"]
$:multiplier=count * 4;
$:console.log(" count has changed: "+ count)
$:{
	console.log("changes...___",multiplier)
}
let info:string

let isActive=true
onMount(()=>{
	user.set({ name: "Kipyegon", married: false, age: 20 })
})
</script>

<svelte:head>
	<title>Home| Agroecology app </title>
	<meta name="description" content="All things agroecology" />
</svelte:head>



	
	<section>
		<h1 style:color="blue" >Principles of Agroecology</h1>
		<p>{$user?.name ?? "No user"}</p>
		{JSON.parse($user)}
	<ul class="principles" >
		{#each poe as p,index  (p.name)}
		
	<li >
		<div  class="card" class:active={isActive}>
			<h3>{p.name}</h3>
			<p>{p.description}</p>
			<div class="chips">
				{#each p.categories as cat }
				<span> {cat}</span>
				{/each }
			</div>

		</div>
		</li>
		
	{/each}
	</ul>
	</section>
	
	<button on:click={()=>count++}>Add me {count}/{multiplier}</button>
	
	{#each poe as p,index  (p.name)}

	

	<MyRandomList index={index}> {p.name}</MyRandomList>
	{/each}

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
		min-height: 100px;
		border:1px solid magenta;
		padding:1rem;
	}
	.chips{
		margin-top:1rem;
		display:flex;
		justify-content: center;
		gap:1rem;
	}
	.chips span{
		border-radius:10px;
		border:1px solid green;
		padding:5px 10px;
		width:30px;
	}
</style>
