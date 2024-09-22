document.querySelectorAll('.translateButton').forEach(function(button) {
    button.addEventListener('click', function() {
        const languageSelector = this.previousElementSibling;
        const selectedLanguage = languageSelector.value;
        const questionAnswerDiv = this.parentElement.parentElement;

        const question = questionAnswerDiv.querySelector('strong').textContent;
        const answerTextElement = questionAnswerDiv.querySelector('p');

        // Translation logic for each place (mock data)
        const translations = {
            "Why should I visit City Palace Udaipur?": {
                "en": "The City Palace offers a stunning view of Lake Pichola and is a great example of Mewar architecture.",
                "hi": "सिटी पैलेस झील पिचोला का शानदार दृश्य प्रस्तुत करता है और मेवाड़ वास्तुकला का एक शानदार उदाहरण है।",
                "es": "El Palacio de la Ciudad ofrece una vista impresionante del Lago Pichola y es un gran ejemplo de la arquitectura Mewar."
            },
            "Why should I visit Lake Palace Udaipur?": {
                "en": "Lake Palace is known for its stunning location in the middle of Lake Pichola and its luxurious architecture.",
                "hi": "लेक पैलेस अपनी भव्यता और झील पिचोला के बीच में स्थित होने के लिए प्रसिद्ध है।",
                "es": "El Palacio del Lago es conocido por su impresionante ubicación en medio del Lago Pichola y su arquitectura lujosa."
            },
            // Add translations for other places and questions
        };

        if (translations[question] && translations[question][selectedLanguage]) {
            answerTextElement.textContent = translations[question][selectedLanguage];
        } else {
            answerTextElement.textContent = "Translation not available for the selected language.";
        }
    });
});
