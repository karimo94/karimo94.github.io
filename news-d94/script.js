var headlinesList = [];
var topHeadline = null;
var currentCountryCode = 'us';
var currentCategory = 'general';
var jumbotronElement = document.getElementById("jumbotron");
var jumbotronCaption = document.getElementById("jumboDescription");
var root = $('#root');
var cardImg = null;
var cardTitle = null;
var cardDesc = null;
var cardLink = null;
//should really use React for this kind of shit but fuck it
var articleCard = '';

var endpoint = 'https://newsapi.org/v2/top-headlines?' +
    'country=' + currentCountryCode + '&' +
    'category=' + currentCategory + '&' +
    'apiKey=30b01480a2114c6f8d92f06857cfd306';

$(document).ready(function() {
    fetchData();
});

function fetchData() {
    var request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.onload = function() {
        var jsonData = JSON.parse(this.response);
        console.log(jsonData);
        headlinesList = jsonData.articles;
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
    jumbotronCaption.innerHTML = topHeadline.description;
    document.getElementById("jumboBtnLink").href = topHeadline.url;
    document.getElementsByClassName("jumbotron")[0].style.backgroundImage = 'url(' + topHeadline.urlToImage + ')';
    document.getElementsByClassName("jumbotron")[0].style.backgroundSize = 'cover';
}

function renderComponents() {
    root.empty();
    //render cards using the headlinesList
    for (var i = 1; i < headlinesList.length; i += 1) {
        var headlineItem = headlinesList[i];
        cardTitle = headlineItem.title;
        cardDesc = headlineItem.description;
        cardImg = headlineItem.urlToImage;
        cardLink = headlineItem.url;
        articleCard = returnUpdatedNewsCard(cardImg, cardTitle, cardDesc, cardLink);
        root.append(articleCard);
    }
}

function updateLocaleAndRender(newLocale) {
    //updates the selected locale of the news app
    //from the dropdown
    //and re-renders
    currentCountryCode = newLocale;
    endpoint = updateEndpoint();
    fetchData();
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
    endpoint = updateEndpoint();
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
    return 'https://newsapi.org/v2/top-headlines?' +
        'country=' + currentCountryCode + '&' +
        'category=' + currentCategory + '&' +
        'apiKey=30b01480a2114c6f8d92f06857cfd306';
}

function gSearch() {
    window.location = "http://www.google.com/search?q=" +
        encodeURIComponent(document.getElementById("gSearchText").value);
}