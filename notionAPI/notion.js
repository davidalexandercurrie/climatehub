const dotenv = require('dotenv').config();

const { Client } = require('@notionhq/client');

//Init client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseID = process.env.NOTION_DATABASE_ID;

module.exports = async function getData() {
  const payload = {
    path: `databases/${databaseID}/query`,
    method: 'POST',
  };
  const { results } = await notion.request(payload);

  console.log(results);

  const companies = results.map(page => {
    console.log(page.properties);

    let servicesArray = page.properties.Services.multi_select.map(
      select_obj => {
        return select_obj.name;
      }
    );
    console.log(servicesArray);

    return {
      title: page.properties.Name.title[0].text.content,
      services: servicesArray,
      summary: page.properties.Summary.rich_text[0].text.content,
      url: page.properties.Website.url,
    };
  });

  return companies;
};
