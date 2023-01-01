//Motion path scalling
const container = document.querySelector('.container')

const split = Splitting({
	whitespace: true
})

const update = () => {
	const { el } = split[0]
	const originalPathWidth = el.clientWidth
	const originalPathHeight = el.clientHeight
	
	const m = container.clientWidth / originalPathWidth
	const containerLeft = container.getBoundingClientRect().left
	const elLeft = el.getBoundingClientRect().left
	
	// If same width, do nothing
	if (m === 1) return
	
	// Scale
	el.style.setProperty('--x', m)
	
	// Set transform origin
	if (container.clientWidth < originalPathWidth) {
		el.style.setProperty('--o', 'left')
	} else {
		el.style.setProperty('--o', 'center')
	}
}

const observer = new ResizeObserver(update)
observer.observe(container)

//HOVER ANIMATION ON INDEX.HTML MEASURE-OFFSET-REDUCE
// const measureItem = document.getElementById("measure");
// measureItem.addEventListener('mouseover', () => {
//     measureItem.children[0].classList.add("hidden");
//     measureItem.children[0].children[0].classList.add("hidden");
//     measureItem.children[1].children[0].src="images/measure.jpeg";
//     measureItem.children[1].children[0].style.display="flex";
//     measureItem.children[1].children[0].classList.add("animated");
//     for(let i = 0; i<10; i++){
//         measureItem.children[1].children[0].style.opacity=`${Math.floor(Math.random())}!important`;
//         measureItem.children[1].children[0].style.transition="opacity 2s linear";
//     }
// });

// measureItem.addEventListener('mouseout', () => {
//     measureItem.children[0].children[0].classList.remove("hidden");
//     measureItem.children[1].children[0].style.display="none";
//     measureItem.children[1].children[0].classList.remove("animated");
// });