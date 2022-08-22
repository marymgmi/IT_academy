const axios = require("axios");


describe('Weather API testing, get status', () => {
    it('Status code of GET /languages should be 200', async () => {
        const options = {
            method: 'GET',
            url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
            params: {lat: '35.5', lon: '-78.5'},
            headers: {
              'X-RapidAPI-Key': '501048b7f9mshd292a4407b865b5p11fb2djsn72dfe0ac8b01',
              'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
          };
        const response = await axios.request(options)
        expect(response.status).toEqual(200);
    })
});

const encodedParams = new URLSearchParams();
encodedParams.append("q", "Thank you for our lessons!");
encodedParams.append("target", "es");
encodedParams.append("source", "en");

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '501048b7f9mshd292a4407b865b5p11fb2djsn72dfe0ac8b01',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams
};      


describe('Google Translate API tests', () => {
    it('Status code should be 200', async () => {
        const response = axios.request(options)
        expect(response.status).toEqual(200);
    })

    it('Translate from english to Italian" ', async () => {
        const response = axios.request(options)
        const textAfterTranslate = await response.data.data.translations[0].translatedText;
        expect(textAfterTranslate).toEqual('¡Gracias por nuestras lecciones!');
      });
    });

