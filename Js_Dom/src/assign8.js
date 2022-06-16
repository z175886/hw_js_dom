const storySection = document.getElementById('completed-story');

const submitMadLibs =(event) =>{
    event.preventDefault();
    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `<h3> Chuyang's Crazy Mad Libs Story </h3>
    <p>One day, my friend <span class = "inserted-text">${userSubmission.name}</span> 
    was visiting New York and ran into <span class = "inserted-text">${userSubmission.object}</span>.
    <span class = "inserted-text">${userSubmission.name}</span> ran <span class = "inserted-text">${userSubmission.adverb}</span> 
    to meet <span class = "inserted-text">${userSubmission.object}</span>. But <span class = "inserted-text">${userSubmission.object}</span>
    turned out to be very <span class = "inserted-text">${userSubmission.adjective}</span> and <span class = "inserted-text">${userSubmission.name}</span> 
    did not enjoy the meeting.</p>`;
    console.log(story);

    
    storySection.innerHTML = story;
  

}