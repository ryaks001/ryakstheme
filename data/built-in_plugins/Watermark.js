import utils from "../_utils.js"

let datapath = new URL("..", import.meta.url).href

function RyaksTrigger() {
    const container0  = document.createElement("div")
    const container2  = document.createElement("div")
	const container3  = document.createElement("div")
	const container4  = document.createElement("div")
	const container5  = document.createElement("div")
	const container6  = document.createElement("div")
	const container7  = document.createElement("div")
	const container8  = document.createElement("div")
	const container9  = document.createElement("div")
	const container10 = document.createElement("div")
	const container11 = document.createElement("div")
	const container12 = document.createElement("div")
	const Greeting    = document.createElement("p")
	const watermark   = document.createElement("div")
	const wtmark      = document.createElement("p")
	const Ryaks1ImageDiv = document.createElement("div")
	const Ryaks1Image    = document.createElement("img")
	const Ryaks1TextDiv  = document.createElement("div")
	const Ryaks1Text = document.createElement("p")
	const headpatdiv  = document.createElement("div")
	const headpat     = document.createElement("button")
	const boobsdiv    = document.createElement("div")
	const boobs       = document.createElement("button")
	const answer1     = document.createElement("p")
	const answer2     = document.createElement("p")
	const answer3     = document.createElement("a")
	const goOutSidediv= document.createElement("div")
	const goOutSide   = document.createElement("button")
	const answer4     = document.createElement("p")
	const answer5     = document.createElement("p")
	const mainDiv = document.createElement("div")

	mainDiv.id = "EasterEgg1Div"

	container0.classList.add ("watermark-text")
	container2.classList.add ("Ryaks1ImageCon")
	container3.classList.add ("Ryaks1TextCon")
    container4.classList.add ("Greeting-con")
	container5.classList.add ("Headpat-con")
	container6.classList.add ("Boobs-con")
	container7.classList.add ("answer1-con")
	container8.classList.add ("answer2-con")
	container9.classList.add ("answer3-con")
	container10.classList.add("goOutSide-con")
	container11.classList.add("answer4-con")
	container12.classList.add("answer5-con")

	function hide() {
		boobs.style.visibility = "hidden"
		headpat.style.visibility = "hidden"
		goOutSide.style.visibility = "hidden"
	}
	function show() {
		boobs.style.visibility = "visible"	
		headpat.style.visibility = "visible"
		goOutSide.style.visibility = "visible"
	}

	wtmark.classList.add("watermark")
	const lang = document.querySelector("html").lang;
	const langs = ["ja-JP", "ko-KR", "zh-CN", "zh-TW"];

	if (langs.includes(lang)) {
		wtmark.innerHTML = "";
	}
	else {
		wtmark.innerHTML = "By Ryaks Da Catto";
	}

	Greeting.classList.add ("Greeting")
	headpat.classList.add  ("Headpat")
	boobs.classList.add    ("Boobs")
	goOutSide.classList.add("GoOutSide")
			
	answer1.id = "answer1"
	answer2.id = "answer2"
	answer3.id = "answer3"
	answer4.id = "answer4"
	answer5.id = "answer5"

	let count = 0;
	let Headpatcount = 0;
	let answer2clicked = 0;
	let showcontainer = document.getElementsByClassName("rcp-fe-lol-home")[0]
	showcontainer.appendChild(mainDiv)
	
	if (DataStore.get("NSFW-Content")) {
		wtmark.addEventListener("click", () => {
			count += 1;
			if (count > 5) {
				wtmark.remove()
				Ryaks1Text.classList.add ("Ryaks1Text")
				Ryaks1Image.classList.add("Ryaks1Image")
				Ryaks1Image.setAttribute ("src", `${datapath}assets/Icon/Plugins-icons/RyaksCB.png`)
				Ryaks1Text.innerHTML =  "Huh ?";
	
				function generateGreeting(date) {
					const hour = date.getHours();
					Ryaks1Text.innerHTML = " "
					switch (true) {
					  	case hour >= 5 && hour < 12:
							return 'Good morning.You shouldn\'t play game at this time';
					  	case hour >= 12 && hour < 18:
							return 'Good afternoon.It\'s nice time<br>to play game rights ?';
						case hour >= 18 && hour < 24:
							return 'Good evening.You should complete ur work before play game';
						default:
							return 'it\'s late, you should<br>go to bed now.';
					}
				}			  
				function updateCurrentTime() {
				const date = new Date();
				Greeting.innerHTML = generateGreeting(date);
					container4.style.cssText = "bottom: 256px; right: 225px; position: absolute; display: flex"
				}
				(() => {
					const interval = 1000;
					setTimeout(updateCurrentTime, interval);
				})();
				  
				
				mainDiv.append(container10)
				mainDiv.append(container4)
				mainDiv.append(container5)
				mainDiv.append(container6)
	
				container10.append(goOutSidediv)
				container4.append(Greeting)
				container5.append(headpatdiv)
				container6.append(boobsdiv)
				
				goOutSidediv.append(goOutSide)
				headpatdiv.append(headpat)
				boobsdiv.append(boobs)
	
				headpat.addEventListener("click", () => {
					Greeting.innerHTML = " "
					boobs.style.visibility = "visible"
					container3.style.bottom = "260px"
					Headpatcount += 1;
					if (Headpatcount < 15) {
						Ryaks1Text.innerHTML = "Meow ~~ !!"
						container3.style.right = "280px"
					}
					if (Headpatcount >= 15) {
						Ryaks1Text.innerHTML = "Mo... My hair is burning !!"
						container3.style.right = "225px"
					}
				}, false);
	
				goOutSide.addEventListener("click", () => {
					Greeting.innerHTML = " "
					Ryaks1Text.innerHTML = "You should go outside<br>and touch grass"
					container3.style.cssText = "bottom: 250px; right: 241px"
					hide()
	
					mainDiv.append(container11)
					mainDiv.append(container12)
	
					container11.append(answer4)
					container12.append(answer5)
	
					answer4.innerHTML = "\"I still want to play game tho\""
					answer5.innerHTML = "\"I want to go outside with you\""
	
					answer4.addEventListener("click", () => {
						Greeting.innerHTML = " "
						Ryaks1Text.innerHTML = "Do what ever you want.<br>I don't care"
						container3.style.cssText = "bottom: 249px; right: 235px"
						show()

						container11.remove()
						container12.remove()
					}, false);
	
					answer5.addEventListener("click", () => {
						Greeting.innerHTML = " "
						Ryaks1Text.innerHTML = "I'm so proud of you.You <br>should turn off the client now<br> and hangout with me (≧▽≦)"
						container3.style.cssText = "bottom: 238px; right: 214px"
	
						container11.remove()
						container12.remove()
					}, false);
				}, false);
	
				boobs.addEventListener("click", () => {
					Greeting.innerHTML = " "
					Ryaks1Text.innerHTML = "Ehh...where did you<br>just touch !?"
	
					container3.style.cssText = "bottom: 250px; right: 250px"
	
					answer1.innerHTML = "\"N...Nothing !!\""
					answer2.innerHTML = "\"I...I wanna see your boobs\""
					hide()

					answer1.addEventListener("click", () => {
						Greeting.innerHTML = " "
						Ryaks1Text.innerHTML = "... You should be careful<br>next time"
						container3.style.cssText = "bottom: 248px; right: 239px"
	
						container7.remove()
						container8.remove()
	
						show()
					}, false);
	
					answer2.addEventListener("click", () => {
						answer2clicked += 1;
						Greeting.innerHTML = " "
						Ryaks1Text.innerHTML = "As you wish, my darling ~~"
						container3.style.cssText = "bottom: 260px; right: 219px"
	
						container7.remove()
						container8.remove()
		
						if (answer2clicked > 0) {
							mainDiv.append(container9)
							container9.append(answer3)
	
							Greeting.innerHTML = " "
							answer3.innerHTML = "Take off her clothes"
							answer3.setAttribute("href", "https://media.discordapp.net/attachments/887677396315172894/1081501404729974804/6f5ba14e64dea4feb1349c3b658338349e0c1244.png")
							answer3.setAttribute("target", "_blank")
							answer3.addEventListener("click", () => {
								Ryaks1Text.innerHTML = "..."
								container3.style.cssText = "bottom: 260px; right: 325px"
								show()
	
								container9.remove()
							}, false);
						}
					}, false);
	
					mainDiv.append(container7)
					mainDiv.append(container8)
	
					container7.append(answer1)
					container8.append(answer2)
					container9.append(answer3)
	
					
				}, false);
			}
		}, false);
	}

	mainDiv.append(container2)
	mainDiv.append(container0)
	mainDiv.append(container3)

	container0.append(watermark)
	container2.append(Ryaks1ImageDiv)
	container3.append(Ryaks1TextDiv)

	watermark.append(wtmark)
	Ryaks1ImageDiv.append(Ryaks1Image)
	Ryaks1TextDiv.append(Ryaks1Text)
}

function DelRyaksTrigger() {
    try {
        document.getElementById("EasterEgg1Div").remove()
    }
    catch{}
}

let addWatermark = (node) => {
	let pagename = node.getAttribute("data-screen-name")
	if (pagename == "rcp-fe-lol-home-main" && !document.getElementById("EasterEgg1Div")) {
		RyaksTrigger()
	}
	else if (pagename != "rcp-fe-lol-home-main" && pagename != "social") {
		if (document.getElementById("EasterEgg1Div")) {
			DelRyaksTrigger()
		}
	}
}

window.addEventListener('load', ()=> {
	utils.mutationObserverAddCallback(addWatermark, ["screen-root"])
})