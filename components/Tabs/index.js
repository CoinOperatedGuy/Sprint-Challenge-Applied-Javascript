// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) => {
        const topics = response.data;
        console.log(topics);
        const list = document.querySelector('.topics');
        list.appendChild(createTab(topics));

        function createTab(topicsArray) {
            const tab = document.createElement('div');
            tab.classList.add('tab');
            tab.textContent = topicsArray.forEach((item) => {
                tab.textContent = item;
            });
            // topicsArray.forEach((item) => {
            //     const tab = document.createElement('div');
            //     tab.classList.add('tab');
            //     tab.textContent = item;
            //     return tab;
            // });

            // return tab;
            // };
            // list.appendChild(createTab(topics));
            return tab;
        }
    })
    .catch((err) => {
        console.log(err);
    });

// const list = document.querySelector('.topics');
// list.appendChild(createTab(topics));

// function createTab(topicsArray) {
//     // const tab = document.createElement('div');
//     // tab.classList.add('tab');
//     topicsArray.forEach((item) => {
//         const tab = document.createElement('div');
//         tab.classList.add('tab');
//         tab.textContent = item;
//     });

//     return tab;
// };