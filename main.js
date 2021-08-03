let HNMaxItem = 0;
let HNTopStoriesArray = [];
let HNAskStories = [];
let HNUser = 0;

let topStoriesTab = document.getElementById('top-stories-tab');


// call and retrieve data
async function getStoryInfo(storyNum) {
    let storyToRetrieve = await fetch("https://hacker-news.firebaseio.com/v0/item/" + storyNum + ".json");
    let storyToRetrieveData = await storyToRetrieve.json();
    return storyToRetrieveData;
}

async function getBackgroundImg(sentURL) {
    // const URL = sentURL;
    // let response = await fetch(URL)
    // let responseData = await response.text();
    // console.log('htmltext', responseData);

    $.get(sentURL, function (data) {
        alert('daaaaaaaaaaaaataloaded', data);


    })

    // // ajax attempt
    // let request = new XMLHttpRequest();

    // // Instantiating the request object
    // request.open("GET", sentURL);
    // console.log(request)
    // // Defining event listener for readystatechange event
    // request.onreadystatechange = function () {
    //     // Check if the request is compete and was successful
    //     if (this.readyState === 4 && this.status === 200) {
    //         // Inserting the response from server into an HTML element
    //         document.getElementsByTagName("img").src = this.responseText;
    //         console.log('yodadyodyo', this.responseText)
    //     }
    // };
    // Tried fetch BLLLLLOOOOOOHM
    // fetch(sentURL, {
    //     mode: 'no-cors'
    // }).then(function (response) {
    //     // The API call was successful!
    //     console.log(response.text());
    //     return response.text();
    // }).then(function (html) {
    //     // This is the HTML from our response as a text string
    //     console.log(html);
    // }).catch(function (err) {
    //     // There was an error
    //     console.warn('Something went wrong.', err);
    // });
}

getBackgroundImg('https://www.npr.org/2021/08/02/1023801277/your-facebook-account-was-hacked-getting-help-may-take-weeks-or-299')
// get hacker news items
async function getHackerNews() {

    // get maxitem #
    let hackerNewsMaxItem = await fetch("https://hacker-news.firebaseio.com/v0/maxitem.json");
    HNMaxItem = await hackerNewsMaxItem.json();


    // fetch top-stories and push to HNTopStoriesArray
    let hackerNewsTopStories = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    let HNTopStories = await hackerNewsTopStories.json();
    HNTopStories.forEach(async function (story) {
            let data = await getStoryInfo(story);

            console.log(data);
            createStoryCard(data, 'top-stories')
            // tempArray.push(storyToRetrieveData.by,
            //     storyToRetrieveData.descendants,
            //     storyToRetrieveData.id,
            //     storyToRetrieveData.kids,
            //     storyToRetrieveData.score,
            //     storyToRetrieveData.text,
            //     storyToRetrieveData.time,
            //     storyToRetrieveData.title,
            //     storyToRetrieveData.type)
        }

    )
    let hackerNewsAskStories = await fetch("https://hacker-news.firebaseio.com/v0/askstories.json");

    HNAskStories = await hackerNewsAskStories.json();

    // // pull data off of stories to update this aspect of the code. replace user with the user number and then fetch that string.
    // let hackerNewsUser = await fetch("https://hacker-news.firebaseio.com/v0/users.json")
    // HNUser = await hackerNewsUser.json()

    // console.log(HNMaxItem)
    // console.log(HNTopStories)
    // console.log(HNAskStories)
    // console.log(HNUser)
}

getHackerNews()

topStoriesTab.addEventListener('click', console.log('hn_top_stories'));





// so if i'm working backwards I need to grab the last max item and from there suptract each item and gather it's id / type. once gatherd  seperate in to different areas of the website  according to the classification.

function createStoryCard(hackerNewsResult, className) {
    // Create div off of className parent
    let topStoriesParent = document.getElementById(className);


    let storyCardMainDiv = document.createElement("div");
    storyCardMainDiv.className = 'story-card', className;


    let storyCardLinkA = document.createElement("a")
    storyCardLinkA.className = 'story-link';
    storyCardLinkA.href = hackerNewsResult.url


    let storyCardTitleH3 = document.createElement('h3');
    storyCardTitleH3.innerText = hackerNewsResult.title


    let storyCardMetaData = document.createElement('div');
    storyCardMetaData.className = 'story-meta-data-container';


    let storyCardScore = document.createElement('div');
    storyCardScore.className = 'story-score';
    storyCardScore.innerText = hackerNewsResult.score;


    let storyCardCommentNum = document.createElement('div');
    storyCardCommentNum.className = 'comment-number';
    storyCardCommentNum.innerText = hackerNewsResult.kids.length;


    let storyCardAuthor = document.createElement('div');
    storyCardAuthor.className = 'author-username'
    storyCardAuthor = hackerNewsResult.by;



    // crate storycard

    storyCardLinkA.append(storyCardTitleH3)
    storyCardMainDiv.append(storyCardLinkA)
    storyCardMetaData.append(storyCardAuthor)
    storyCardMetaData.append(storyCardCommentNum)
    storyCardMetaData.append(storyCardScore)
    storyCardMainDiv.append(storyCardMetaData)
    topStoriesParent.append(storyCardMainDiv)



}

// // gather endpoints on index to place hackerNews content.
// let
//     // equate parent div
//     topStories = document.getElementById("top-stories"),
//     // equate child div
//     storyCard = document.getElementById("story-card"),
//     // create child div
//     storyCardDiv = document.createElement("story-card"),

//     storyLink = document.createElement("story-link")
// a href = "#"
// class = "story-link" >
//     <
//     h3 class = 'story-title' > Story Title < /h3> < /
// a > <
//     div class = "story-meta-data-container" >
//     <
//     div class = "story-score" > story - score - text < /div> <
// div class = "comment-number" > comment# < /div> <
// div class = "author-username" > author < /div> < /
// div > <
//     /div>