// Logic
xs.periodic(1000)
	.fold(prev => prev + 1, 0)
	.map(i => `Seconds elapsed: ${i}`)
// Effects: anything that changes the extenal world
	.subscribe({
		next: str => {
			const elem = document.querySelector('#app');
			elem.textContent = str;
		}
	})
