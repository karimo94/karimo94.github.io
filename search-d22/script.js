var jsonData = [{
        "title": "Old Man's War",
        "author": {
            "firstName": "John",
            "lastName": "Scalzi"
        }
    },
    {
        "title": "The Lock Artist",
        "author": {
            "firstName": "Steve",
            "lastName": "Hamilton"
        }
    },
    {
        "title": "HTML5",
        "author": {
            "firstName": "Remy",
            "lastName": "Sharp"
        }
    },
    {
        "title": "Right Ho Jeeves",
        "author": {
            "firstName": "P.D",
            "lastName": "Woodhouse"
        }
    },
    {
        "title": "The Code of the Wooster",
        "author": {
            "firstName": "P.D",
            "lastName": "Woodhouse"
        }
    },
    {
        "title": "Thank You Jeeves",
        "author": {
            "firstName": "P.D",
            "lastName": "Woodhouse"
        }
    },
    {
        "title": "The DaVinci Code",
        "author": {
            "firstName": "Dan",
            "lastName": "Brown"
        }
    },
    {
        "title": "Angels & Demons",
        "author": {
            "firstName": "Dan",
            "lastName": "Brown"
        }
    },
    {
        "title": "The Silmarillion",
        "author": {
            "firstName": "J.R.R",
            "lastName": "Tolkien"
        }
    },
    {
        "title": "Syrup",
        "author": {
            "firstName": "Max",
            "lastName": "Barry"
        }
    },
    {
        "title": "The Lost Symbol",
        "author": {
            "firstName": "Dan",
            "lastName": "Brown"
        }
    },
    {
        "title": "The Book of Lies",
        "author": {
            "firstName": "Brad",
            "lastName": "Meltzer"
        }
    },
    {
        "title": "Lamb",
        "author": {
            "firstName": "Christopher",
            "lastName": "Moore"
        }
    },
    {
        "title": "Fool",
        "author": {
            "firstName": "Christopher",
            "lastName": "Moore"
        }
    },
    {
        "title": "Incompetence",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "Fat",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "Colony",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "Backwards, Red Dwarf",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "The Grand Design",
        "author": {
            "firstName": "Stephen",
            "lastName": "Hawking"
        }
    },
    {
        "title": "The Book of Samson",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    },
    {
        "title": "The Preservationist",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    },
    {
        "title": "Fallen",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    },
    {
        "title": "Monster 1959",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    }
];
var options = { keys: ["title", "author.firstName"] };
var fuse = new Fuse(jsonData, options);
var results = null;

window.addEventListener("load", function() {
    console.log(fuse);
});

function updateResults(value) {
    //use fuse.js 
    results = fuse.search(value);
    renderList();
}

function renderList() {
    //render a table list list of book results
    //with border on top and bottom
    //make each element clickable
    var root = $('.collection'); //use InnerHTML
    var li = '<li class="collection-item"><i class="material-icons">book</i>' +
        this.results.title + '<small>' + this.results.firstName + ' ' + this.results.lastName + '</small>' + '</li>';
    //this.results.title
    //this.results.firstName + ' ' + this.results.lastName
    root.append(li);

}