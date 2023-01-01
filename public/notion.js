//fetching data from index.js
getDataFromServer();

async function getDataFromServer() {
  const res = await fetch('http://localhost:8080/getdata', {
    method: 'GET',
  });

  const data = await res.json(); //data is my stuff from notion api
  console.log(data);

  data.forEach(item => {
    // console.log(item);

    //services is an array so need to divide it
    let services = '';
    item.services.forEach(service => {
      services += `<li>${service}</li>`;
    });

    //CHECK ON POINTER EVENT AND DISABLE IT FOR ON CLICK SO THAT IT NAVIGATES TO THE LINK
    document.getElementById(
      'carbon_container'
    ).innerHTML += `<div class="carbon_item">
                  <div class="carbon_text">
                    <div class="carbon_title">
                        <h1>${item.title}</h1></a>
                    </div>
                    <div class="carbon_summary">
                        <p>${item.summary}</p>
                    </div>
                    <div class="carbon_services">
                        <ul>
                            ${services}
                        </ul>
                    </div>
                </div>
                <div class="carbon_image_container">
                    <img src="">
                </div>
            </div>
            `;

    Array.from(document.getElementsByClassName('carbon_item')).forEach(item => {
      item.addEventListener('click', () => {
        window.open(`${item.url}`);
        // window.open(`${item.url[1]}`)
        // console.log(${item.url});
      });
    });
  });

  const carbonItems = document.getElementsByClassName('carbon_item');
  Array.from(carbonItems).forEach(item => {
    // console.log(item);
    item.addEventListener('mouseenter', () => {
      // console.log(item);
      //hide carbon_text
      item.children[0].classList.add('hidden');

      //add a random poster image into HTML
      let randomNumber = Math.floor(Math.random() * 85);

      //populate the img & display it
      item.children[1].children[0].classList.add('carbon_image');
      item.children[1].children[0].src = 'posters/' + randomNumber + '.jpeg';
      item.children[1].children[0].style.display = 'flex';
    });

    item.addEventListener('mouseout', () => {
      // console.log(item.children);

      //show carbon_text
      item.children[0].classList.remove('hidden');

      //hide carbon_image
      item.children[1].children[0].style.display = 'none';
    });
  });
}
