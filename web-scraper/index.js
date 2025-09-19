const axios = require("axios")
const cheerio = require("cheerio")

async function scrap(){
    const url = "https://python.langchain.com/docs/integrations/document_loaders/";
    const sendReq = await axios.get(url);
    const resData = sendReq.data;

    const $ = cheerio.load(resData);
    const data = [];

    $("p").each((index,element) => {
        const para = $(element).text();
        data.push(para)
    })

    console.log(data);
    
}

scrap()