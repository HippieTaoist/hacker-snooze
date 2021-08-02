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