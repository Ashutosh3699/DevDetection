const bground_color_to_select = document.querySelector("[background_color]");
const mode_type_of_bg = document.querySelector("[mode_to_select]");
const mode_type_of_bg_icon = document.querySelector("[mode_to_selecticon]");
const bg_color = document.querySelector("#wrapper");
const header_part = document.querySelector(".header");

const input_name = document.querySelector(".input_tab");
const search_input = document.querySelector(".search_tab");
const Heading = document.querySelector("[heading]");
const biodata = document.querySelector(".bio_data");
const fames = document.querySelector(".fame");
const flex_of_para = document.querySelectorAll(".flex_para");

const contant = document.querySelector(".container");

bg_color_change();

function bg_color_change(){

    if(bground_color_to_select.classList.contains("Dark_mode")){

        mode_type_of_bg.innerText = "";
        mode_type_of_bg_icon.src = "";
        mode_type_of_bg.innerText = "Light";
        mode_type_of_bg_icon.src = "./assets/images/moon-icon.svg"
        bground_color_to_select.classList.remove("Dark_mode");
        bg_color.classList.remove("Dark_mode");
        Heading.classList.remove("Dark_mode");
        search_input.classList.remove("Dark_mode");
        input_name.classList.remove("Dark_mode");
        contant.classList.remove("Dark_mode");
        biodata.classList.remove("Dark_mode");
        fames.classList.remove("Dark_mode");
        
        flex_of_para.forEach((e)=>{

            e.classList.remove("Dark_mode");
        })

    }
    else{

        mode_type_of_bg.innerText = "";
        mode_type_of_bg_icon.src = "";
        mode_type_of_bg.innerText = "Dark";
        mode_type_of_bg_icon.src = "./assets/images/sun-icon.svg"
        bground_color_to_select.classList.add("Dark_mode");
        bg_color.classList.add("Dark_mode");
        Heading.classList.add("Dark_mode");
        search_input.classList.add("Dark_mode");
        input_name.classList.add("Dark_mode");
        contant.classList.add("Dark_mode");
        biodata.classList.add("Dark_mode");
        fames.classList.add("Dark_mode");
        
        flex_of_para.forEach((e)=>{

            e.classList.add("Dark_mode");
        })

    }
}


bground_color_to_select.addEventListener("click",bg_color_change);

get_detailOfUser("Ashutosh3699");


search_input.addEventListener("submit",(e)=>{

    e.preventDefault();
    let user_name = input_name.value;

    if(user_name === ""){
        return;
    }
    else{

        get_detailOfUser(user_name);
    }

});

async function get_detailOfUser(USERNAME){

    try {
        
        const response = await fetch(`https://api.github.com/users/${USERNAME}`);

        const data = await response.json();

        if(data.message === "Not Found"){
            throw new Error;
        }

        renderData(data);

    } catch (error) {
        
        alert("User Not Available");
    }
}

function renderData(data){

    const user_img = document.querySelector(".dev_image");
    const userName = document.querySelector("[user_name]");
    const join_date = document.querySelector(".date_join");
    const gitHub_link = document.querySelector(".git_link");
    const bio_data = document.querySelector(".bio_data");
    const repo = document.querySelector(".repo");
    const followers = document.querySelector(".follower");
    const followings = document.querySelector(".following");

    const city = document.querySelector(".city_name");
    const twitter = document.querySelector(".twitter_link"); 
    const linkedin = document.querySelector(".linkedIn_link");
    const blog = document.querySelector(".blog_link");


    user_img.src = `${data?.avatar_url}`;
    userName.innerText = data?.name;
    let date = changeDate(data?.created_at);
    join_date.innerText = `Joined   ${date}`;

    gitHub_link.href=`${data?.html_url}`;
    gitHub_link.innerText = data?.login;
    bio_data.innerText = data?.bio;

    repo.innerText = data?.public_repos;
    followers.innerText = data?.followers;
    followings.innerText = data?.following;

    city.innerText = data?.location;

    let twitter_value = data?.twitter_username;

    twitter.href = `https://twitter.com/${data?.twitter_username}`;
    if(twitter_value===null){

        twitter.innerText = `Not Available`;
    }
    else{

        twitter.innerText = `@${data?.twitter_username}`;
    }

    let company_in = data?.company;

    if(company_in===null){

        linkedin.innerText = `Not Available`;
    }
    else{

        linkedin.innerText = data?.company;
    }

    let blog_in = data?.blog;
    blog.href = `${data?.blog}`;

    if(blog_in === ""){

        blog.innerText = `Not Available`;
    }
    else{

        blog.innerText = data?.blog;
    }

}


function changeDate(date_join_at){

    const date = new Date(date_join_at);

    // Extract the month and year using locale-specific formatting
    const month = date.toLocaleString("en-US", { month: "long" });
    const dateNumber = date.getDate();
    const year = date.getFullYear();

    // Display the formatted date
    return (`${dateNumber} ${month}, ${year}`);

}










































