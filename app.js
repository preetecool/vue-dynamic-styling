const app = Vue.createApp({
	data() {
		return {
			userInput: "",
			isVisible: true,
			userBackground: "",
		};
	},
	watch: {
		userInput(value) {
			this.userInput = value;
		},
	},
	computed: {
		paraClass() {
			return {
				user1: this.userInput === "user1",
				user2: this.userInput === "user2",
				visible: this.isVisible,
				hidden: !this.isVisible,
			};
		},
	},
	methods: {
		paraToggle() {
			this.isVisible = !this.isVisible;
		},
	},
});

app.mount("#assignment");
