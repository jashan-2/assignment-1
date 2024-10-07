                    // Arrays for random words
                    let nouns = ["beaver", "moose", "polar bear", "loon", "caribou"];
                    let verbs = ["skates", "hikes", "paddles", "skis", "canoes"];
                    let adjectives = ["cold", "friendly", "vast", "beautiful", "frozen"];
                    let secondNouns = ["hockey stick", "maple leaf", "canoe", "timbit", "poutine"];
                    let places = ["in Banff", "on Parliament Hill", "in a cabin", "at Niagara Falls", "in the Rockies"];

                    // Variable to hold the story
                    let textToSpeak = "";

                    // Functions to generate random words
                    function produceNoun() {
                        let word = nouns[Math.floor(Math.random() * nouns.length)];
                        textToSpeak += word + " ";
                        document.getElementById("story").innerText = textToSpeak;
                    }

                    function produceVerb() {
                        let word = verbs[Math.floor(Math.random() * verbs.length)];
                        textToSpeak += word + " ";
                        document.getElementById("story").innerText = textToSpeak;
                    }

                    function produceAdjective() {
                        let word = adjectives[Math.floor(Math.random() * adjectives.length)];
                        textToSpeak += word + " ";
                        document.getElementById("story").innerText = textToSpeak;
                    }

                    function produceSecondNoun() {
                        let word = secondNouns[Math.floor(Math.random() * secondNouns.length)];
                        textToSpeak += word + " ";
                        document.getElementById("story").innerText = textToSpeak;
                    }

                    function producePlace() {
                        let word = places[Math.floor(Math.random() * places.length)];
                        textToSpeak += word + " ";
                        document.getElementById("story").innerText = textToSpeak;
                    }

                    // Function to trigger TextToSpeech API
                    function speakNow() {
                        let speech = new SpeechSynthesisUtterance(textToSpeak);
                        window.speechSynthesis.speak(speech);
                    }

                    // Function to reset the story
                    function resetStory() {
                        textToSpeak = "";
                        document.getElementById("story").innerText = "Your story will appear here...";
                    }
