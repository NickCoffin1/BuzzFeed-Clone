const questionDispay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answers");

const questions = [
    {
        id: 0,
        text: "Pick a vacation:",
        answers: [
            {
                text: "City Trip",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/536px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
                alt: "Pic of the Empire State building during dusk",
            },
            {
                text: "Cabin Getaway",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mummonm%C3%B6kki.jpg/440px-Mummonm%C3%B6kki.jpg",
                alt: "Pic of summary cottage",
            },
            {
                text: "All Inclusive",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Town_and_Country_fh000023.jpg/440px-Town_and_Country_fh000023.jpg",
                alt: "Pic around a pool with chairs and umbrellas",
            },
            {
                text: "Ski Slopes",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Chalet_in_Ranua.JPG/440px-Chalet_in_Ranua.JPG",
                alt: "Pic of snowy cottage at dusk",
            }
    ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/440px-Pizza-3007395.jpg",
                alt: "A slice of pizza"

            },
            {
                text: "Cheese Burger",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Burger_King_Quad_Stacker_cheeseburger.jpg/387px-Burger_King_Quad_Stacker_cheeseburger.jpg",
                alt: "Pic of cheese burger"
            },
            {
                text: "Sushi",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Typical_japanese_sushi_set.jpg/440px-Typical_japanese_sushi_set.jpg",
                alt: "Pic of sushi"
            },
            {
                text: "Steak",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/London_broil.jpg/480px-London_broil.jpg",
                alt: "Pic of steak"
            }
        ]

    },
    {
        id: 2,
        text: "Pick a home:",
        answers: [
            {
                text: "Apartment",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/23rd_St_6th_Av_19_-_Chelsea_Stratus.jpg/440px-23rd_St_6th_Av_19_-_Chelsea_Stratus.jpg",
                alt: "Pic of apartment building"
            },
            {
                text: "House",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Traditional_Side_Split_Level_Home.jpg/600px-Traditional_Side_Split_Level_Home.jpg",
                alt: "Pic of sidesplit house"
            },
            {
                text: "Bungalow",
                image: "https://royalhomes.s3.amazonaws.com/uploads/2017/06/bungalow.jpg",
                alt: "Pic of bungalow house"
            },
            {
                text: "Mansion",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Harlaxton_College.jpg/440px-Harlaxton_College.jpg",
                alt: "A pic of a big mansion"
            },
        ]

    }
]

const answers = [
    {
        combination: ["City Trip", "Pizza", "Apartment"],
        text: "Blue cheese",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bleu_de_Gex.jpg/440px-Bleu_de_Gex.jpg",
        alt: "Blue cheese"
    },
    {
        combination: ["Cabin Getaway", "Cheese Burger", "House"],
        text: "Cheddar cheese",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Somerset-Cheddar.jpg/440px-Somerset-Cheddar.jpg",
        alt: "Cheddar cheese"
    },
    {
        combination: ["All Inclusive", "Sushi", "Bungalow"],
        text: "Goat cheese",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ziegenkaese_Rolle_II.jpg/440px-Ziegenkaese_Rolle_II.jpg",
        alt: "Goat cheese"
    },
    {
        combination: ["Ski Slopes", "Steak", "Mansion"],
        text: "Brie cheese",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/440px-Brie_01.jpg",
        alt: "Brie cheese"
    },
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement("div")
        titleBlock.id = question.id
        titleBlock.classList.add("title-block")
        const titleHeading = document.createElement("h2")
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDispay.append(titleBlock)

        const answersBlock = document.createElement("div")
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add("answer-options")

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement("div")
            answerBlock.classList.add("answer-block")
            answerBlock.addEventListener("click", () => handleClick(question.id, answer.text))
            const answerImg = document.createElement("img")
            answerImg.setAttribute("src", answer.image)
            answerImg.setAttribute("alt", answer.alt)

            const answerTitle = document.createElement("h3")
            answerTitle.textContent = answer.text
            
            answerBlock.append(answerImg, answerTitle)

            answersBlock.append(answerBlock)
        })
        questionDispay.append(answersBlock)
    })
}
populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1){
        unansweredQuestions.splice(itemToRemove, 1)
    }

    console.log(chosenAnswers)
    console.log(unansweredQuestions)


    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = "#" + lowestQuestionId

    if (!unansweredQuestions.length){
        //scroll to answer div
        location.href = "#answer"
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0])+
            chosenAnswers.includes(answer.combination[1])+
            chosenAnswers.includes(answer.combination[2])
         ) {
            result = answer
         } else if (!result) {
            //first answer object is default
            result = answers[0]
         }
    })
    const answerBlock = document.createElement("div")
    answerBlock.classList.add("result-block")
    const answerTitle = document.createElement("h3")
    answerTitle.textContent = result.text
    const answerImage = document.createElement("img")
    answerImage.setAttribute("src", result.image)
    
    answerBlock.append(answerTitle, answerImage)


    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll(".answer-block")
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer){
            block.style.opacity = "50%"
        }
    })
}