let selectedVoice = "male"; // Default value

// Add event listener to update selectedVoice when radio input changes
document.querySelectorAll('input[name="voice"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        selectedVoice = this.value;
    });
});

let bgArray = [
    './assets/images/img1.jpg',
    './assets/images/img2.jpg',
    './assets/images/img3.jpg',
    './assets/images/img4.jpg',
    './assets/images/img5.jpg',
    './assets/images/img6.jpg',
    './assets/images/img7.jpg',
    './assets/images/img8.jpg',
    './assets/images/img9.jpg',
    './assets/images/img10.jpg',
]

function bgDisplay() {

    var num = Math.floor(Math.random() * 10); // 0...9

    document.body.style.backgroundImage = `url('${bgArray[num]}')`;

}

function speak() {
    const speech = new SpeechSynthesisUtterance();
    speech.rate = 1.0;
    speech.volume = 1.0;
    speech.pitch = 0.5;
    if (selectedVoice === "male") {
        speech.voice = speechSynthesis.getVoices()[1];
    } else {
        speech.voice = speechSynthesis.getVoices()[2];
    }

    speech.text = document.querySelector('#text').value;
    speechSynthesis.speak(speech)
}

window.speechSynthesis.onvoiceschanged = speak;