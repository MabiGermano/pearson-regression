import express from 'express';
import path from 'path';
import Tesseract from 'tesseract.js';
import PdfReader from 'pdfreader';


const app = express();
app.use(express.json());

app.get('/', (request, response) => {


    Tesseract.recognize(
        path.resolve(`${process.cwd()}/src`, '0001.jpg'),
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
          console.log('mababy')
        console.log(text);
      })


    

    return response.json({ teste: "Hello world" });
});

app.listen(3333);