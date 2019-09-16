$(function() {


    const BASE_URL = "https://api.github.com/users/izaycarter";
    const REP_URL = "https://api.github.com/users/izaycarter/repos";
    const CLIENT_ID = "74c6d34183f25d079d99";
    const CLIENT_SECRET = "198eb89fdf11aa526d5fd52a9da8568ea958992c";

// USER PROFILE INFO PULL--------------------------
        let requestUserData = $.ajax({
            method: "GET",
            url: `${BASE_URL}`,
            dataType: "jsonp",
            data: {
                BASE_URL,
                client_secret: CLIENT_SECRET,
                client_id: CLIENT_ID,
            }
        });

    let updateUserData = (res) => {
        // update user image
        let profileSource = $("#profile-img-section").html();
        let profileTemplate = Handlebars.compile(profileSource);
        let profileContext = res.data;
        let profileHTML = profileTemplate(profileContext);
        $('.profile-img-section').html(profileHTML);

        // update user name
        let userSource = $("#user-section").html();
        let userTemplate = Handlebars.compile(userSource);
        let userContext = res.data;
        let userHTML = userTemplate(userContext);
        $('.user-section').html(userHTML);
    };

    requestUserData.done(updateUserData);


// Organizations PULL-----------------------

    let requestOrgData = $.ajax({
        method: "GET",
        url: `${BASE_URL}/orgs`,
        dataType: "jsonp",
        data: {
            BASE_URL,
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID,
        }
    });

    let updateOrganizations = (res) =>{

        let orgSource = $("#organize-groups").html();
        let orgTemplate = Handlebars.compile(orgSource);
        let orgContext = {orgs:res.data};
        let orgHTML = orgTemplate(orgContext);
        $(".organize-groups").html(orgHTML);


    };


    requestOrgData.done(updateOrganizations);



    // NAV of reposi setting pull--------

    let navPull= $.ajax({
        method: "GET",
        url: `${BASE_URL}`,
        dataType: "jsonp",
        data: {
            BASE_URL,
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID,
        }
    });

    let updateNavNum = (res) =>{
        let numSource = $("#profile-nav").html();
        let numTemplate = Handlebars.compile(numSource);
        let numContext = res.data;
        let numHTML = numTemplate(numContext);
        $('.profile-nav').html(numHTML);

    };


    navPull.done(updateNavNum);









    // repo PULL REQUEST-------------------------

    let requestRepo = $.ajax({
        method: "GET",
        url:`${REP_URL}`,
        dataType: "jsonp",
        data: {
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID,
        }

    });

    let updateRepoList = (res) =>{

        let repoListSource = $("#reposi-list").html();
        let repoListTemplate = Handlebars.compile(repoListSource);
        let repoListContext = {repo:res.data};
        console.log(repoListContext);
        let repoListHTML = repoListTemplate(repoListContext);
        $(".reposi-list").html(repoListHTML);


    };

    requestRepo.done(updateRepoList);




});
// DO NOT GOT UNDER HERE__________________________________________________
