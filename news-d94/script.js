var headlinesList = [];
var topHeadline = null;
var currentCountryCode = 'us';
var currentCategory = 'world';
var jumbotronElement = document.getElementById("jumbotron");
var jumbotronCaption = document.getElementById("jumboDescription");
var root = $('#root');
var cardImg = null;
var cardTitle = null;
var cardDesc = null;
var cardLink = null;
var defaultImage = 'newsdefault.jpg';
//should really use React for this kind of shit but fuck it
var articleCard = '';
//use NY times API or newscaf API endpoint
var apiEndpoint = 'https://newscafapi.p.rapidapi.com/apirapid/news/' + currentCategory + '/';

$(document).ready(function() {
    fetchData();
});

function fetchData() {
    var request = new XMLHttpRequest();
    request.withCredentials = true;
    request.open('GET', apiEndpoint);
    request.setRequestHeader("x-rapidapi-key", "6d5ddf4253msheeba427e625ba5cp1faeccjsn38ba6857eb85");
    request.setRequestHeader("x-rapidapi-host", "newscafapi.p.rapidapi.com");
    request.onload = function() {
        var jsonData = JSON.parse(this.response);
        console.log(jsonData);
        headlinesList = jsonData; //the api returns an array
        topHeadline = headlinesList[0];
        console.log(headlinesList.length);
        renderJumbotron();
        renderComponents();
    }
    request.send();
}

function renderJumbotron() {
    //renders the first top headline
    jumbotronElement.innerHTML = topHeadline.title;
    jumbotronCaption.innerHTML = topHeadline.content.split(".")[0];
    document.getElementById("jumboBtnLink").href = topHeadline.source_url;
    var topHeadlineImage = topHeadline.img;
    document.getElementsByClassName("jumbotron")[0].style.backgroundImage = 'url(' + topHeadlineImage + ')';
    document.getElementsByClassName("jumbotron")[0].style.backgroundSize = 'cover';
}

function renderComponents() {
    root.empty();
    //render cards using the headlinesList
    for (var i = 1; i < headlinesList.length - 1; i += 1) {
        var headlineItem = headlinesList[i];
        cardTitle = headlineItem.title;
        cardDesc = headlineItem.content.split(".")[0];
        cardImg = headlineItem.img == null ? defaultImage : headlineItem.img;
        cardLink = headlineItem.source_url;
        articleCard = returnUpdatedNewsCard(cardImg, cardTitle, cardDesc, cardLink);
        root.append(articleCard);
    }
}

function updateLocaleAndRender(newLocale) {
    //updates the selected locale of the news app
    //from the dropdown
    //and re-renders
    //this is a premium feature that is only available on paid API subscriptions
    currentCountryCode = newLocale;
    //apiEndpoint = updateEndpoint();
    //fetchData();
}

function updateCategoryAndRender(newCategory) {
    //updates the selected category to view
    //from the navbar menu
    //and re-renders
    //for the active navbar item, update it by removing active class first
    //then looking at what was passed in and add active class
    $('.active').removeClass('active');
    currentCategory = newCategory;
    //put the border under the corresponding new category
    switch (newCategory) {
        case 'sports':
            document.getElementById("sportItem").className += " active";
            break;
        case 'technology':
            document.getElementById("techItem").className += " active";
            break;
        case 'business':
            document.getElementById("bizItem").className += " active";
            break;
        case 'health':
            document.getElementById("healthItem").className += " active";
            break;
        default:
            document.getElementById("homeItem").className += " active";
    }
    apiEndpoint = updateEndpoint();
    fetchData();
}
//again should really use React for this, oh well...
function returnUpdatedNewsCard(picture, title, desc, link) {
    return '<div class="card"><div class="row"><div class="col-6"><img src="' +
        picture + '" alt="Image" width="100%"/></div><div class="col-6"><div class="row"><h5><a href="' +
        link + '">' + title + '</a>' + '</h5></div><div class="row"><p>' +
        desc + '</p></div></div></div></div>';
}

function updateEndpoint() {
    return 'https://newscafapi.p.rapidapi.com/apirapid/news/' + currentCategory + '/';
}

function gSearch() {
    window.location = "http://www.google.com/search?q=" +
        encodeURIComponent(document.getElementById("gSearchText").value);
}