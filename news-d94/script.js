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
//use NY times API endpoint
var apiEndpoint = 'https://api.nytimes.com/svc/topstories/v2/' +
    currentCategory + '.json?api-key=EjG1YtpjWV9tIzzfr8JGj65EH1zAIyZz';

$(document).ready(function() {
    fetchData();
});

function fetchData() {
    var request = new XMLHttpRequest();
    request.open('GET', apiEndpoint);
    request.onload = function() {
        var jsonData = JSON.parse(this.response);
        console.log(jsonData);
        headlinesList = jsonData.results; //the api returns an array
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
    jumbotronCaption.innerHTML = topHeadline.abstract;
    document.getElementById("jumboBtnLink").href = topHeadline.url;
    var topHeadlineImage = topHeadline.multimedia[0].url;
    document.getElementsByClassName("jumbotron")[0].style.backgroundImage = 'url(' + topHeadlineImage + ')';
    document.getElementsByClassName("jumbotron")[0].style.backgroundSize = 'cover';
}

function renderComponents() {
    root.empty();
    //render cards using the headlinesList
    for (var i = 1; i < headlinesList.length - 1; i += 1) {
        var headlineItem = headlinesList[i];
        cardTitle = headlineItem.title;
        cardDesc = headlineItem.abstract;
        cardImg = headlineItem.multimedia[0].url;
        cardLink = headlineItem.url;
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
        picture + '" alt="Image"/></div><div class="col-6"><div class="row"><h4 class="cardTitle"><a href="' +
        link + '">' + title + '</a>' + '</h4></div><div class="row"><p class="cardDesc">' +
        desc + '</p></div></div></div></div>';
}

function updateEndpoint() {
    return 'https://api.nytimes.com/svc/topstories/v2/' +
        currentCategory + '.json?api-key=EjG1YtpjWV9tIzzfr8JGj65EH1zAIyZz';
}

function gSearch() {
    window.location = "http://www.google.com/search?q=" +
        encodeURIComponent(document.getElementById("gSearchText").value);
}