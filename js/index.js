document.addEventListener('DOMContentLoaded', function() {
    var phrases = [
        "Coder",
        "Web developer",
        "AI Model developer"
    ];

    var delayBetweenPhrases = 2000; // Delay between phrases in milliseconds
    var currentPhraseIndex = 0;
    var element = document.getElementById('typewriter-text');

    function typeWriter() {
        var phrase = phrases[currentPhraseIndex];
        var i = 0;

        function type() {
            if (i < phrase.length) {
                element.textContent += phrase.charAt(i);
                i++;
                setTimeout(type, 100); // Adjust typing speed here (milliseconds)
            } else {
                setTimeout(erase, delayBetweenPhrases);
            }
        }

        function erase() {
            if (i >= 0) {
                element.textContent = phrase.substring(0, i);
                i--;
                setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
            } else {
                currentPhraseIndex++;
                if (currentPhraseIndex >= phrases.length) {
                    currentPhraseIndex = 0; // Loop back to the first phrase
                }
                setTimeout(typeWriter, 500); // Delay before typing next phrase
            }
        }

        type();
    }

    typeWriter();
});
