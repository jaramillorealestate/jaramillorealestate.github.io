const WHATSAPP_NUMBER = '17044881409';
const EMAIL_ADDRESS = 'michelle0053@icloud.com';
const INSTAGRAM_URL = 'https://www.instagram.com/jaramillorealestate/';
const FACEBOOK_URL = 'https://www.facebook.com/share/1Bsh5osNgM/?mibextid=wwXIfr';
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScxL5sl4xb8qLBb5jDBMB5ksCeXrU0t5Q0DM1FVaDHxU8qqsw/viewform?usp=publish-editor';
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScxL5sl4xb8qLBb5jDBMB5ksCeXrU0t5Q0DM1FVaDHxU8qqsw/viewform?embedded=true';
// Privacy rule: never publish parcelación names in client-facing website copy.
const GUARNE_CASA_HERO = 'assets/guarne-casa-gallery/01B_Casa_Guarne_Hero_16x9.jpg';
const GUARNE_CASA_PHOTOS = [
  ['01_Casa_Guarne_Hero_4x3.jpg', 'Fachada principal de la casa campestre en Guarne', 'Fachada principal'],
  ['02_Casa_Guarne_Exterior.jpg', 'Vista exterior lateral de la casa campestre', 'Exterior'],
  ['04_Casa_Guarne_Garden_Side.jpg', 'Costado de la casa junto a la zona verde', 'Exterior y zona verde'],
  ['05_Casa_Guarne_Garden_View.jpg', 'Casa vista desde el jardín', 'Vista desde el jardín'],
  ['06_Casa_Guarne_Landscaped_Exterior.jpg', 'Fachada rodeada de árboles y jardines', 'Jardines y fachada'],
  ['07_Casa_Guarne_Lawn.jpg', 'Zona verde principal de la propiedad', 'Zona verde'],
  ['08_Casa_Guarne_Flower_Garden.jpg', 'Jardín de flores con paisaje montañoso', 'Jardín y entorno'],
  ['09_Casa_Guarne_Garden_Seating.jpg', 'Jardín con bancas y espacio exterior', 'Jardín social'],
  ['10_Casa_Guarne_Garden_Path.jpg', 'Sendero entre los jardines de la propiedad', 'Sendero de jardín'],
  ['11_Casa_Guarne_Terrace.jpg', 'Terraza amplia con vista al entorno', 'Terraza'],
  ['12_Casa_Guarne_Mountain_View.jpg', 'Vista hacia las montañas desde la casa', 'Vista a las montañas'],
  ['13_Casa_Guarne_Covered_Parking.jpg', 'Parqueadero cubierto y acceso', 'Parqueadero cubierto'],
  ['14_Casa_Guarne_Living_Dining.jpg', 'Sala y comedor conectados con el deck', 'Sala y comedor'],
  ['15_Casa_Guarne_Living_Deck.jpg', 'Sala principal con ventanales hacia el deck', 'Sala y deck'],
  ['16_Casa_Guarne_Open_Plan.jpg', 'Área social abierta con sala, comedor y cocina', 'Área social abierta'],
  ['17_Casa_Guarne_Open_Plan_Alternate.jpg', 'Vista alternativa del área social integrada', 'Área social integrada'],
  ['18_Casa_Guarne_Kitchen.jpg', 'Cocina abierta con isla', 'Cocina'],
  ['19_Casa_Guarne_Bedroom.jpg', 'Alcoba con buena iluminación natural', 'Alcoba']
].map(([file, alt, caption]) => ({ src: `assets/guarne-casa-gallery/${file}`, alt, caption }));
const ESTRELLA_HERO = 'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTc2LTMyXzI0NDIuanBlZyIsImVkaXRzIjp7Im5vcm1hbGlzZSI6dHJ1ZSwicm90YXRlIjowLCJyZXNpemUiOnsid2lkdGgiOjk3OSwiaGVpZ2h0Ijo3NDMsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==';
const ESTRELLA_PHOTOS = [
  ESTRELLA_HERO,
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDAyLTM2MzVfOTE5MS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTgwLTE4NTZfOTI1NC5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTgyLTA0MzRfMTQyNy5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTgzLTkwMzhfMzc5NS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTg1LTgxNDhfNTMyNC5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTg4LTA4MjVfMTYyNC5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTkwLTIxOTNfMjYzOS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTkyLTM0MV8zMzU2LmpwZWciLCJlZGl0cyI6eyJub3JtYWxpc2UiOnRydWUsInJvdGF0ZSI6MCwicmVzaXplIjp7IndpZHRoIjo5NzksImhlaWdodCI6NzQzLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTk0LTI5NTdfOTQxNS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgwOTk2LTI4NTFfOTg5OC5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDAwLTM5MDlfMjM1My5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDA0LTEzNDJfNjE5MS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDA2LTAxMTlfOTE5MS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDA3LTg5MTNfNzcyNy5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDA5LTg2MTlfNzc4NS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDExLTkyNDRfODQ4My5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDEzLTY4NTZfMjE2LmpwZWciLCJlZGl0cyI6eyJub3JtYWxsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
  'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl9jYXNhX2NhbXBlc3RyZV9lbl9wYXJjZWxhY2lvbl8xNzM2OTgxMDE1LTQ3MzlfODU0Ny5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19'
].map((src, index) => ({
  src,
  alt: index === 0 ? 'Fachada principal de la casa campestre en La Estrella' : `Vista ${index + 1} de la casa campestre en La Estrella`,
  caption: index === 0 ? 'Fachada principal' : 'Recorrido por la propiedad'
}));

const ESTRELLA_EDITED_PHOTOS = [
  ['02_La_Estrella_Main_Entrance.jpg', 'Entrada principal de la casa', 'Entrada principal'],
  ['05_La_Estrella_Covered_Parking.jpg', 'Zona de parqueadero cubierto', 'Parqueadero cubierto'],
  ['06_La_Estrella_Driveway.jpg', 'Acceso y camino de entrada', 'Acceso a la propiedad'],
  ['07_La_Estrella_Front_Exterior.jpg', 'Fachada exterior de la propiedad', 'Fachada exterior'],
  ['08_La_Estrella_Front_Exterior_And_Lot.jpg', 'Fachada y terreno alrededor de la casa', 'Fachada y lote'],
  ['10_La_Estrella_Entrance_Exterior.jpg', 'Exterior junto a la entrada principal', 'Entrada exterior'],
  ['13_La_Estrella_Kitchen.jpg', 'Cocina abierta con isla', 'Cocina'],
  ['15_La_Estrella_Mountain_View_From_Window.jpg', 'Vista a las montañas desde una ventana', 'Vista a las montañas'],
  ['16_La_Estrella_Bathroom_One.jpg', 'Primer baño', 'Baño'],
  ['22_La_Estrella_Bedroom_One.jpg', 'Primera alcoba', 'Alcoba'],
  ['23_La_Estrella_Entry_Door_Interior.jpg', 'Puerta de entrada vista desde el interior', 'Acceso interior'],
  ['24_La_Estrella_Interior_Hallway.jpg', 'Pasillo interior', 'Pasillo interior'],
  ['25_La_Estrella_Bathroom_Two.jpg', 'Segundo baño', 'Baño'],
  ['28_La_Estrella_Bedroom_Three.jpg', 'Alcoba con ventana hacia el exterior', 'Alcoba'],
  ['32_La_Estrella_Built_In_Closet_One.jpg', 'Clóset empotrado en madera', 'Clóset empotrado'],
  ['39_La_Estrella_Bathroom_Three.jpg', 'Tercer baño', 'Baño'],
  ['40_La_Estrella_Bedroom_With_Mountain_View.jpg', 'Alcoba con vista a las montañas', 'Alcoba con vista'],
  ['42_La_Estrella_Vaulted_Room.jpg', 'Espacio con techo alto en madera', 'Espacio con techo alto'],
  ['48_La_Estrella_Bedroom_Seven.jpg', 'Vista adicional de una alcoba', 'Alcoba']
].map(([file, alt, caption]) => ({
  src: `assets/estrella-gallery-v1/${file}`,
  alt,
  caption
}));

const ESTRELLA_NEW_PHOTOS = [
  ['54_La_Estrella_Open_Plan_Living_Dining.jpg', 'Perspectiva del comedor y la sala en el espacio abierto', 'Área social abierta'],
  ['52_La_Estrella_Open_Plan_Wide.jpg', 'Vista amplia de la cocina, el comedor y la sala integrados', 'Cocina, comedor y sala'],
  ['53_La_Estrella_Dining_Kitchen.jpg', 'Comedor principal conectado con la cocina', 'Comedor y cocina'],
  ['55_La_Estrella_Open_Plan_Alternate.jpg', 'Vista longitudinal del comedor y la sala', 'Comedor y sala'],
  ['56_La_Estrella_Living_Mountain_View.jpg', 'Sala y comedor con vista hacia las montañas', 'Sala, comedor y vista'],
  ['57_La_Estrella_Covered_Terrace.jpg', 'Terraza cubierta con vista panorámica', 'Terraza cubierta'],
  ['58_La_Estrella_Garden_Mountain_View.jpg', 'Jardín y paisaje montañoso de la propiedad', 'Jardines y entorno'],
  ['59_La_Estrella_Bedroom_Staged.jpg', 'Alcoba principal con propuesta de mobiliario', 'Alcoba principal'],
  ['60_La_Estrella_Bedroom_Second.jpg', 'Alcoba con techo de madera y luz natural', 'Alcoba'],
  ['61_La_Estrella_Primary_Bedroom.jpg', 'Alcoba principal con techo alto de madera', 'Alcoba principal'],
  ['62_La_Estrella_TV_Lounge.jpg', 'Sala de televisión con vista al jardín', 'Sala de televisión'],
  ['63_La_Estrella_Staged_Home_Office.jpg', 'Espacio flexible presentado como oficina', 'Oficina flexible'],
  ['64_La_Estrella_Staged_Open_Plan_From_Zip.jpg', 'Área social abierta con propuesta de mobiliario', 'Área social abierta']
].map(([file, alt, caption]) => ({
  src: `assets/estrella-gallery-v2/${file}`,
  alt,
  caption
}));

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const GENERAL_WHATSAPP = whatsappLink('Hola, Michelle. Me gustaría recibir información sobre sus servicios de bienes raíces en Texas o Colombia.');

const pages = {
  home: () => `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Jaramillo Real Estate</p>
        <h1>Bienes raíces entre Texas y Colombia</h1>
        <div class="rule"></div>
        <p class="lead">Acompaño a familias y compradores que buscan construir su próximo capítulo en Texas o volver a conectarse con Colombia a través de la propiedad raíz.</p>
        <div class="btn-row"><a class="btn" href="propiedades-colombia.html">Ver propiedades en Colombia</a><a class="btn secondary" href="bienes-raices-texas.html">Bienes raíces en Texas</a></div>
      </div>
      <div class="hero-media property-image"><img src="assets/bonilla/mountain-landscape.jpg" alt="Paisaje montañoso del Oriente Antioqueño" fetchpriority="high"></div>
    </section>
    <section class="section white"><div class="container split">
      <div><p class="eyebrow">Una historia entre dos lugares</p><h2>Raíces en Colombia. Vida y experiencia en Texas.</h2></div>
      <div class="editorial-note"><p>Soy Michelle Jaramillo, asesora inmobiliaria residencial en Texas y creadora de una nueva rama de promoción y acompañamiento inmobiliario en Colombia.</p><p>Mi trabajo nace de una conexión personal con ambos lugares: entiendo la vida que muchas familias han construido en Estados Unidos y también el deseo de conservar un vínculo real con Colombia.</p><a class="link-arrow" href="sobre-michelle.html">Conocer más sobre Michelle →</a></div>
    </div></section>
    <section class="section"><div class="container"><p class="eyebrow">Propiedades destacadas</p><h2>Propiedades para mirar con calma</h2><div class="property-grid">${propertyCards()}</div></div></section>
    <section class="section forest"><div class="container"><p class="eyebrow" style="color:#d9b594">A quién acompaño</p><h2>Decisiones importantes, con contexto y conversación.</h2><div class="audience-list">
      <div class="audience-item"><strong>Volver a conectarse</strong><span>Colombianos en Estados Unidos que desean tener un lugar propio cerca de sus raíces.</span></div>
      <div class="audience-item"><strong>Crear una nueva etapa</strong><span>Familias que contemplan retiro, temporadas en Colombia o una segunda vivienda.</span></div>
      <div class="audience-item"><strong>Comprar con claridad</strong><span>Personas que quieren explorar oportunidades sin presión y con información organizada.</span></div>
    </div><div class="btn-row"><a class="btn light" href="contacto.html">Conversemos sobre lo que busca</a></div></div></section>
  `,
  colombia: () => `
    ${pageHero('Propiedades en Colombia','Propiedades presentadas con fotografías auténticas, contexto local e información organizada para compradores que viven en Colombia o en el exterior.')}
    <section class="section"><div class="container"><p class="eyebrow">Disponibles ahora</p><h2>Oportunidades en Santuario, El Poblado, El Peñol, Guarne, La Estrella y Sabaneta</h2><div class="property-grid">${propertyCards()}</div><div class="editorial-note" style="margin-top:42px"><p>El portafolio seguirá creciendo con oportunidades en Guarne y otros sectores de Antioquia. Cada propiedad se incorpora cuando su información esencial y la autorización de promoción están confirmadas.</p></div></div></section>
    <section class="section forest"><div class="container split"><div><p class="eyebrow" style="color:#d9b594">Para propietarios</p><h2>¿Tiene una propiedad que podría encajar?</h2></div><div><p class="lead">Conozca los criterios concretos de compradores que actualmente buscan propiedad en Antioquia.</p><div class="btn-row"><a class="btn light" href="propiedades-que-buscamos.html">Ver lo que buscan nuestros compradores</a></div></div></div></section>
  `,
  buyerNeeds: () => `
    ${pageHero('Propiedades que buscamos','Búsquedas reales y activas de compradores que ya han compartido criterios concretos para su próxima propiedad en Antioquia.')}
    <section class="section white"><div class="container split buyer-intro"><div><p class="eyebrow">Una conexión directa</p><h2>Compradores con criterios claros. Propietarios sin cadenas de intermediarios.</h2></div><div><p class="lead">Si usted es propietario y su inmueble coincide con una de estas búsquedas, me gustaría conocerlo.</p><p>Antes de acordar cualquier promoción, nuestro equipo local visita la propiedad y confirma directamente con el propietario la autorización y las condiciones para presentarla.</p><p class="small muted">Para proteger la privacidad, estas búsquedas se presentan sin nombres ni datos personales. Los criterios pueden cambiar y cada posible coincidencia se confirma antes de avanzar.</p></div></div></section>
    <section class="section"><div class="container"><p class="eyebrow">Búsquedas activas</p><h2>Lo que necesitan nuestros compradores</h2><div class="buyer-grid">
      ${buyerNeedCard({number:'01', title:'Lote individual para vivienda y caballos', location:'Guarne, Rionegro y corredor hacia el aeropuerto', budget:'Hasta $630 millones COP', facts:['Área mínima aproximada de 2.600–2.700 m²','Matrícula individual; no proindiviso','Espacio y condiciones para mantener dos caballos','Sectores de interés: Guarne, Bonita, Rionegro y El Porvenir']})}
      ${buyerNeedCard({number:'02', title:'Casa campestre de un solo nivel', location:'El Retiro o veredas cercanas', budget:'Hasta $1.100 millones COP', facts:['Aproximadamente 1.500 m² de zona verde','Entre 160 y 200 m² de construcción','Dos habitaciones más estudio','Muy buena luz natural','Preferiblemente en parcelación o unidad con seguridad']})}
      ${buyerNeedCard({number:'03', title:'Finca para residencia principal', location:'Guarne, Marinilla o Rionegro', budget:'Hasta $430 millones COP', facts:['Tres o cuatro habitaciones','Dos baños y cocina integral','Todos los servicios','Escritura 100 % individual; no proindiviso','Compra con recursos propios o posibilidad de permuta por casa en El Carmen de Viboral']})}
      ${buyerNeedCard({number:'04', title:'Finca lista para habitar en clima cálido', location:'Antioquia · sector de fácil acceso', budget:'Hasta $800 millones COP', facts:['Piscina','Lista para habitar, sin remodelación importante','Acceso pavimentado o en muy buenas condiciones','Parqueadero amplio','Compra con recursos propios']})}
      ${buyerNeedCard({number:'05', title:'Finca, apartamento o lote cerca de Medellín', location:'Medellín y municipios cercanos · Guarne incluido', budget:'Entre $277 y $369 millones COP aprox.', facts:['Abierto a finca, apartamento o lote','Presupuesto máximo aproximado de $369 millones COP','Compra prevista en los próximos 0–3 meses','Cuenta con recursos propios','Puede evaluar opciones de pago o financiación']})}
    </div><p class="criteria-date">Criterios revisados con base en búsquedas activas al 19 de septiembre de 2026.</p></div></section>
    <section class="section white"><div class="container owner-submit"><div><p class="eyebrow">Para propietarios</p><h2>¿Su propiedad coincide?</h2><p class="lead">Envíeme la información esencial y revisaremos si corresponde con una búsqueda activa.</p></div><div class="owner-checklist"><span>01 · Municipio y sector general</span><span>02 · Precio de venta</span><span>03 · Área del lote y de la construcción</span><span>04 · Distribución y servicios</span><span>05 · Fotografías actuales</span></div><div class="btn-row"><a class="btn" href="${whatsappLink('Hola, Michelle. Soy propietario(a) de una propiedad en Antioquia que podría coincidir con una de las búsquedas publicadas. Está ubicada en [MUNICIPIO / SECTOR], tiene [ÁREA] y el precio es [PRECIO].')}" target="_blank" rel="noopener">Presentar mi propiedad por WhatsApp</a></div><p class="small muted" style="margin-top:18px">No publique aquí la dirección exacta, documentos de identidad ni datos sensibles. Michelle solicitará la información adicional de manera privada si existe una posible coincidencia.</p></div></section>
  `,
  texas: () => `
    ${pageHero('Bienes raíces en Texas','Acompañamiento residencial para comprar, vender o planear su próximo paso en Texas, con una comunicación cercana y un proceso claro.')}
    <section class="section white"><div class="container split"><div><p class="eyebrow">Servicio residencial</p><h2>Una guía tranquila para decisiones que sí pesan.</h2></div><div><p>Continúo atendiendo a compradores y vendedores residenciales en Texas a través de United Real Estate DFW. Mi enfoque es escuchar primero, explicar cada etapa con honestidad y mantener el proceso organizado desde la primera conversación hasta el cierre.</p><p>Si está considerando comprar, vender o simplemente prepararse para un cambio futuro, podemos comenzar con una conversación sobre sus prioridades, presupuesto y tiempos.</p><div class="btn-row"><a class="btn" href="contacto.html">Hablar con Michelle</a></div></div></div></section>
    <section class="section"><div class="container"><p class="eyebrow">Cómo puedo ayudar</p><div class="detail-grid"><article><h3>Comprar</h3><p>Definir prioridades, explorar opciones y comprender cada paso de la compra.</p></article><article><h3>Vender</h3><p>Preparar la propiedad, establecer una estrategia de presentación y acompañar las negociaciones.</p></article><article><h3>Planear</h3><p>Conversar sobre tiempos, presupuesto y preparación antes de tomar una decisión.</p></article><article><h3>Conectar Texas y Colombia</h3><p>Entender las necesidades de familias cuya vida, patrimonio y proyectos abarcan ambos países.</p></article></div></div></section>
  `,
  about: () => `
    ${pageHero('Sobre Michelle','Una asesora inmobiliaria, una colombiana en Texas y una forma muy personal de unir dos lugares que son parte de la misma historia.')}
    <section class="section white"><div class="container split"><div><p class="eyebrow">Michelle Jaramillo</p><h2>Este proyecto también es una forma de volver.</h2><div class="rule"></div><p class="lead">Mi vida está construida entre Texas y Colombia, y mi trabajo inmobiliario también.</p></div><div><p>Soy asesora inmobiliaria residencial en Texas y estoy desarrollando una rama enfocada en promocionar propiedades en Guarne y el Oriente Antioqueño.</p><p>Quiero ayudar especialmente a colombianos que viven en Estados Unidos y sueñan con comprar, retirarse o crear un segundo hogar en Colombia. Conozco la emoción detrás de ese sueño, pero también la importancia de hacer preguntas, entender el contexto y avanzar con claridad.</p><p>Mi intención es que cada propiedad se presente con calidez y hechos concretos; y que cada conversación se sienta personal, nunca como una venta apresurada.</p><div class="btn-row"><a class="btn" href="contacto.html">Conversemos</a></div></div></div></section>
  `,
  contact: () => `
    ${pageHero('Conversemos','Cuénteme qué está buscando, dónde vive y en qué etapa se encuentra. La primera conversación es para entender su idea con calma.')}
    <section class="section white"><div class="container split"><div><p class="eyebrow">Contacto</p><h2>Una conversación puede ser el primer paso.</h2><div class="rule"></div><p>Puede escribirme por WhatsApp, completar el formulario o enviarme un correo. También puede conocer las propiedades y el trabajo detrás del proyecto en Instagram y Facebook.</p><p><strong>WhatsApp:</strong> <a href="${GENERAL_WHATSAPP}" target="_blank" rel="noopener">+1 (704) 488-1409</a><br><strong>Correo:</strong> <a href="mailto:${EMAIL_ADDRESS}">${EMAIL_ADDRESS}</a><br><strong>Instagram:</strong> <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener">@jaramillorealestate</a><br><strong>Facebook:</strong> <a href="${FACEBOOK_URL}" target="_blank" rel="noopener">Jaramillo Real Estate</a></p><div class="btn-row"><a class="btn" href="${GENERAL_WHATSAPP}" target="_blank" rel="noopener">Escribir por WhatsApp</a><a class="btn secondary" href="${GOOGLE_FORM_URL}" target="_blank" rel="noopener">Completar formulario</a><a class="btn secondary" href="mailto:${EMAIL_ADDRESS}">Enviar un correo</a></div></div><div id="formulario"><p class="eyebrow">Solicitud de información</p><h2>Cuénteme qué está buscando</h2><p>Complete el formulario para que pueda darle seguimiento de manera organizada.</p><iframe class="google-form-embed" src="${GOOGLE_FORM_EMBED_URL}" title="Formulario de solicitud de información de Jaramillo Real Estate" loading="lazy">Cargar <a href="${GOOGLE_FORM_URL}">formulario de solicitud</a>.</iframe><p class="small muted">Si el formulario no aparece, <a href="${GOOGLE_FORM_URL}" target="_blank" rel="noopener">ábralo en una ventana nueva</a>.</p></div></div></section>
  `,
  hotel: () => propertyPage({
  "draft": "DISPONIBLE · ACTIVO HOTELERO",
  "name": "Hotel campestre en Guarne",
  "location": "Guarne · Antioquia, Colombia",
  "price": "$6.600.000.000 COP",
  "usd": "Precio de venta en pesos colombianos. Consulte las condiciones e inventario incluido.",
  "heroImage": "assets/hotel-campestre-guarne/aerial-edited.jpg",
  "heroAlt": "Vista aérea de la casa principal, las seis cabañas y los terrenos",
  "facts": [
    "13.026 m² · 3,22 acres",
    "400 m² · 4.306 ft²",
    "4 habitaciones",
    "6 cabañas",
    "3 con jacuzzi",
    "2 estanques"
  ],
  "labels": [
    "Lote · 140.211 ft²",
    "Casa principal",
    "En la casa principal",
    "Alojamiento independiente",
    "Cabañas con jacuzzi",
    "Terreno y cultivos"
  ],
  "story": "Una propiedad hotelera en Guarne que reúne una casa principal de dos niveles, seis cabañas independientes y espacios para recibir huéspedes y grupos en un entorno verde. El lote de 13.026 m² —3,22 acres— integra piscina climatizada, una amplia zona cubierta para eventos, bar independiente, cocina industrial, dos estanques y zonas de cultivo. Además, dos edificaciones auxiliares aportan siete habitaciones adicionales: cuatro con baño privado y tres que comparten un baño.",
  "uses": [
    "Alojamiento turístico",
    "Eventos y encuentros",
    "Estadías de grupos"
  ],
  "detailsHeading": "Distribución y características de la propiedad",
  "fullDetails": [
    [
      "Casa principal",
      "Casa de dos niveles con 400 m² (4.306 ft²), cuatro habitaciones, sala, comedor, cocina y amplias áreas sociales. El área indicada corresponde a la casa principal; no al total construido del complejo."
    ],
    [
      "Seis cabañas independientes",
      "Seis unidades de alojamiento independientes; tres cuentan con jacuzzi. Los espacios y la distribución pueden conocerse durante una visita."
    ],
    [
      "Alojamiento adicional",
      "Dos edificaciones auxiliares suman siete habitaciones adicionales a la propiedad. Una edificación cuenta con cuatro habitaciones, cada una con baño privado y cama doble. La otra dispone de tres habitaciones que comparten un baño."
    ],
    [
      "Piscina, eventos y bar",
      "Piscina climatizada, amplia zona cubierta para eventos y bar independiente para huéspedes y encuentros sociales."
    ],
    [
      "Cocina y terreno",
      "Cocina industrial para atender grupos, además de dos estanques y zonas de cultivo dentro del lote de 13.026 m² (140.211 ft²)."
    ],
    [
      "Condiciones de venta",
      "Precio solicitado: $6.600.000.000 COP. Consulte de forma privada el inventario incluido y las condiciones de entrega. La información financiera y los permisos de operación deberán revisarse dentro de la debida diligencia del comprador."
    ],
    [
      "Espacio para animales o caballos",
      "Una edificación independiente ofrece potencial para adecuar seis pesebreras o espacios para animales. La viabilidad de la adecuación y del uso previsto deberá determinarse según las necesidades del comprador."
    ]
  ],
  "access": "Ubicada en Guarne, Antioquia. La ruta de acceso, el punto de encuentro y la dirección exacta se comparten al coordinar una visita.",
  "gallery": [
    {
      "src": "assets/hotel-campestre-guarne/aerial-edited.jpg",
      "alt": "Vista aérea de la casa principal, las seis cabañas y los terrenos",
      "caption": "Vista aérea de la casa principal, las seis cabañas y los terrenos"
    },
    {
      "src": "assets/hotel-campestre-guarne/main-house.jpg",
      "alt": "Casa principal y zona de piscina",
      "caption": "Casa principal y zona de piscina"
    },
    {
      "src": "assets/hotel-campestre-guarne/living.jpg",
      "alt": "Sala y áreas sociales de la casa principal",
      "caption": "Sala y áreas sociales de la casa principal"
    },
    {
      "src": "assets/hotel-campestre-guarne/dining.jpg",
      "alt": "Comedor de la casa principal",
      "caption": "Comedor de la casa principal"
    },
    {
      "src": "assets/hotel-campestre-guarne/kitchen.jpg",
      "alt": "Cocina de la casa principal",
      "caption": "Cocina de la casa principal"
    },
    {
      "src": "assets/hotel-campestre-guarne/cabin-exterior.jpg",
      "alt": "Exterior y terraza de una cabaña independiente",
      "caption": "Exterior y terraza de una cabaña independiente"
    },
    {
      "src": "assets/hotel-campestre-guarne/jacuzzi.jpg",
      "alt": "Interior de cabaña con jacuzzi privado",
      "caption": "Interior de cabaña con jacuzzi privado"
    },
    {
      "src": "assets/hotel-campestre-guarne/night-cabin.jpg",
      "alt": "Exterior de una cabaña al anochecer",
      "caption": "Exterior de una cabaña al anochecer"
    },
    {
      "src": "assets/hotel-campestre-guarne/pool.jpg",
      "alt": "Piscina climatizada",
      "caption": "Piscina climatizada"
    },
    {
      "src": "assets/hotel-campestre-guarne/pool-aerial.jpg",
      "alt": "Vista aérea de la piscina y las áreas sociales",
      "caption": "Vista aérea de la piscina y las áreas sociales"
    },
    {
      "src": "assets/hotel-campestre-guarne/pavilion.jpg",
      "alt": "Zona cubierta junto a la piscina",
      "caption": "Zona cubierta junto a la piscina"
    },
    {
      "src": "assets/hotel-campestre-guarne/bar.jpg",
      "alt": "Bar independiente y espacio social exterior",
      "caption": "Bar independiente y espacio social exterior"
    },
    {
      "src": "assets/hotel-campestre-guarne/industrial-kitchen.jpg",
      "alt": "Cocina industrial",
      "caption": "Cocina industrial"
    },
    {
      "src": "assets/hotel-campestre-guarne/auxiliary-exterior.jpg",
      "alt": "Edificación exterior con potencial para adecuar seis espacios para animales o caballos",
      "caption": "Edificación con potencial para seis pesebreras"
    }
  ],
  "recorridoHeading": "Recorrido por el alojamiento y los espacios auxiliares",
  "videos": [],
  "hideRecorrido": true
}),
  template: () => propertyPage({
    draft: 'PLANTILLA DE PROPIEDAD — NO PUBLICAR', name: '[NOMBRE DE LA PROPIEDAD]', location: '[MUNICIPIO, DEPARTAMENTO]', price: '[PRECIO EN COP]', usd: '[CONVERSIÓN USD APROXIMADA + FECHA/TASA]', story: '[DESCRIPCIÓN BREVE: cómo se vive o se puede usar la propiedad, sin exageraciones.]', facts: ['[Área del lote]','[Área construida]','[Habitaciones]','[Baños]','[Parqueaderos]','[Tiempo a punto clave]'], uses: ['[Uso confirmado 1]','[Uso confirmado 2]','[Uso confirmado 3]'], details: true
  }),
  billares: () => propertyPage({
    draft:'DISPONIBLE · PRECIO NEGOCIABLE',
    name:'Local de billares en Guarne',
    location:'Guarne, Antioquia · a tres cuadras del parque principal',
    price:'$750.000.000 COP',
    usd:'Precio negociable · venta del inmueble',
    heroImage:'assets/billares-guarne/01-salon.webp',
    heroAlt:'Salón de billares con mesas de juego y barra en el local de Guarne',
    storyHeading:'217 m² a solo tres cuadras del parque principal',
    story:'Este local comercial en el nivel inferior reúne un salón de billares, una barra y áreas de bebidas y almacenamiento en un mismo espacio de 217 m². Actualmente se encuentra en operación y está ubicado a solo tres cuadras del parque principal de Guarne, detrás de la capilla de Santa Ana. Una oportunidad para conocer de cerca su distribución y evaluar cómo se ajusta a su proyecto.',
    facts:['217 m²','2.336 ft² aprox.','3 cuadras','Nivel inferior'],
    labels:['Área del local','Equivalencia de área','Del parque principal','Ubicación en el edificio'],
    hideRecorrido:true,
    hideUses:true,
    detailsHeading:'Conozca el local',
    fullDetails:[
      ['Salón y barra','El espacio cuenta con un salón de billares, zona de mesas y una barra de atención, como se aprecia en la galería.'],
      ['Área de bebidas y almacenamiento','Las fotografías muestran distintas vistas del área de bebidas y almacenamiento, que forma parte del mismo local.'],
      ['Ubicación central','A tres cuadras del parque principal de Guarne y detrás de la capilla de Santa Ana. El acceso al local se encuentra en el nivel inferior del edificio.'],
      ['Precio y visitas','$750.000.000 COP, negociables. Escríbame para conversar sobre las condiciones de venta del inmueble y coordinar una visita.']
    ],
    accessHeading:'Cerca del parque principal de Guarne',
    access:'Ubicado en la zona urbana de Guarne, Antioquia, a tres cuadras del parque principal y detrás de la capilla de Santa Ana. Las indicaciones de llegada se comparten al coordinar la visita.',
    gallery:[
      ['01-salon.webp','Vista amplia del salón de billares y la barra','Salón de billares'],
      ['02-entrada-billar.webp','Entrada al local con vista hacia la barra y el salón','Entrada y barra'],
      ['03-barra-bebidas.webp','Mostrador y refrigeradores del área de bebidas','Área de bebidas'],
      ['04-almacenamiento.webp','Vista general del área de almacenamiento de bebidas','Almacenamiento · vista general'],
      ['05-vista-amplia.webp','Vista amplia del área de bebidas con pasillo central','Área de bebidas · vista amplia'],
      ['06-pasillo.webp','Pasillo interior entre las áreas de almacenamiento','Pasillo interior'],
      ['07-vista-lateral.webp','Vista lateral de las áreas de almacenamiento y circulación','Almacenamiento · vista lateral'],
      ['08-bebidas.webp','Otra perspectiva del espacio destinado a bebidas','Área de bebidas · otra perspectiva']
    ].map(([file,alt,caption])=>({src:`assets/billares-guarne/${file}`,alt,caption})),
    details:false
  }),
  bonilla: () => propertyPage({
    draft:'DISPONIBLE · PRECIO NEGOCIABLE',
    name:'Finca Bonilla',
    location:'Vereda Bonilla · El Peñol, Antioquia',
    price:'$750.000.000 COP · negociables',
    usd:'La equivalencia en USD se calculará con la tasa vigente el día de la consulta.',
    heroImage:'assets/bonilla/hero-exterior.jpg',
    heroAlt:'Vista elevada de la casa principal, los jardines y las montañas en Finca Bonilla',
    ownerAuthorized:true,
    story:'Una finca de dos niveles para disfrutar la vida rural en El Peñol, rodeada de zonas verdes y paisaje montañoso. Cuenta con un deck cubierto amplio y un sendero que, según la información suministrada, permite llegar al embalse en aproximadamente cinco a siete minutos caminando. La propiedad no está ubicada frente al agua.',
    facts:['1.656 m² / 17.825 ft²','190 m² / 2.045 ft² aprox.','3','2','12–13 min','5–7 min a pie'],
    labels:['Lote','Construcción','Habitaciones','Baños','Desde la vía principal','Caminata al embalse'],
    uses:['Casa de descanso','Residencia permanente — según las necesidades del comprador'],
    detailsHeading:'Características informadas de la propiedad',
    fullDetails:[
      ['Construcción y espacios','Casa de dos niveles, con componentes en material y prefabricados, tres habitaciones, dos baños y un deck cubierto amplio. Las áreas y el estado técnico deberán verificarse durante la debida diligencia.'],
      ['Servicios y condiciones','Cuenta con servicios públicos e internet de Claro. La propiedad se encuentra desocupada y puede visitarse con aviso previo. No se reporta cuota de administración.'],
      ['Acceso','El recorrido desde la vía principal toma aproximadamente 12–13 minutos por una vía rural irregular, según la información recibida. Su estado puede variar con el clima.'],
      ['Entorno y embalse','Se reporta una caminata de aproximadamente 5–7 minutos por sendero hasta el embalse. La propiedad no es frente al agua; las condiciones de acceso o servidumbre deben verificarse como parte de la debida diligencia.']
    ],
    access:'Sector general de la vereda Bonilla, El Peñol. El trayecto final se realiza por una vía rural irregular y se reporta a unos 12–13 minutos de la vía principal. La ruta exacta y el punto de encuentro se comparten únicamente al coordinar una visita.',
    videos:[
      {src:'assets/bonilla/mountain-view.mp4', title:'Vista del entorno montañoso'},
      {src:'assets/bonilla/entrance-gate.mp4', title:'Entrada a la propiedad'}
    ],
    gallery:[
      {src:'assets/bonilla/house-exterior.jpg', alt:'Fachada de la casa de dos niveles', caption:'Casa principal'},
      {src:'assets/bonilla/front-garden.jpg', alt:'Jardín frente a la casa principal', caption:'Exterior y jardín'},
      {src:'assets/bonilla/covered-deck.jpg', alt:'Deck cubierto amplio en madera', caption:'Deck cubierto'},
      {src:'assets/bonilla/upper-landing.jpg', alt:'Espacio interior en el segundo nivel', caption:'Segundo nivel'},
      {src:'assets/bonilla/kitchen.jpg', alt:'Cocina de la Finca Bonilla', caption:'Cocina'},
      {src:'assets/bonilla/living-room.jpg', alt:'Sala interior con chimenea pequeña', caption:'Sala'},
      {src:'assets/bonilla/bedroom-one.jpg', alt:'Primera habitación de la propiedad', caption:'Habitación'},
      {src:'assets/bonilla/bedroom-two.jpg', alt:'Segunda habitación de la propiedad', caption:'Habitación'},
      {src:'assets/bonilla/mountain-landscape.jpg', alt:'Paisaje montañoso visto desde la propiedad', caption:'Vista y entorno'},
      {src:'assets/bonilla/lawn-orchard.jpg', alt:'Zona verde y árboles de la propiedad', caption:'Zona verde'},
      {src:'assets/bonilla/side-exterior.jpg', alt:'Costado de la casa con las montañas al fondo', caption:'Exterior lateral'},
      {src:'assets/bonilla/rural-path.jpg', alt:'Camino rural junto a la casa', caption:'Acceso y entorno'}
    ],
    details:false
  }),
  estrella: () => propertyPage({
    draft:'DISPONIBLE',
    name:'Casa campestre La Estrella',
    location:'La Estrella, Antioquia · sector Variante a Caldas',
    price:'$2.250.000.000 COP',
    usd:'La equivalencia en USD se calculará con la tasa vigente el día de la consulta.',
    heroImage:ESTRELLA_HERO,
    heroAlt:'Fachada amarilla y terraza de la casa campestre en La Estrella',
    ownerAuthorized:true,
    story:'Una casa campestre de un solo nivel, con amplios espacios para compartir, cocina abierta con isla y vistas hacia las montañas. Construida en 2007 y ubicada en una parcelación cerrada de La Estrella, combina el entorno verde con una distribución pensada para la vida familiar.',
    facts:['2.997 m² / 32.260 ft²','320 m² / 3.444 ft²','5','4','2 cubiertos + 6','Un solo nivel'],
    labels:['Lote · 0,74 acres aprox.','Construcción','Habitaciones','Baños','Parqueaderos','Distribución'],
    uses:['Residencia permanente','Casa familiar','Alquileres de corta duración no permitidos'],
    detailsHeading:'Características y condiciones confirmadas',
    fullDetails:[
      ['Distribución','Cinco alcobas, cuatro baños, estudio, sala de televisión y espacios sociales en un solo nivel.'],
      ['Cocina y servicio','Cocina de concepto abierto con isla; alcoba de servicio con baño y zona de ropas.'],
      ['Parqueaderos','Capacidad para dos vehículos en parqueadero cubierto y seis vehículos en espacios descubiertos.'],
      ['Año y mejoras','Construida en 2007. Se reportan mejoras posteriores en la cocina, la terraza, los muros exteriores y el parqueadero.'],
      ['Administración y cuotas','Administración actual de $850.000 COP mensuales. Actualmente existen cuotas extraordinarias temporales de aproximadamente $200.000 a $300.000 COP. Estos valores se reconfirman antes de avanzar.'],
      ['Servicios de agua y saneamiento','Agua potable propia de la parcelación, facturada por separado por aproximadamente $45.000 COP mensuales. La casa cuenta con pozo séptico y se reporta certificado de funcionamiento actualizado.'],
      ['Impuesto predial','Valor anual reportado de $3.056.000 COP. El comprador deberá confirmarlo dentro de su debida diligencia.'],
      ['Entrega y alquileres','La propiedad se entrega desocupada y en su estado actual. La parcelación no permite alquileres de corta duración.'],
      ['Opciones de pago parcial','El propietario podría recibir vehículos comerciales o propiedades hasta por el 50 % del valor, previa evaluación. También consideraría una propiedad en Estados Unidos que le sirva de apalancamiento para nuevas inversiones, preferiblemente en Florida. Toda propuesta está sujeta a aceptación expresa del propietario.'],
      ['Condiciones generales','Estrato 5. La propiedad se reporta desocupada y disponible para la venta. La información, los costos y la disponibilidad se reconfirman antes de coordinar una visita.']
    ],
    access:'La Estrella, en el sector general de la Variante a Caldas. La dirección exacta, el nombre de la parcelación y las indicaciones de ingreso se comparten únicamente al coordinar una visita.',
    // Edited galleries (assets/estrella-gallery-v1, -v2) were never uploaded; restore this line once they are.
    // gallery:[ESTRELLA_NEW_PHOTOS[0], ...ESTRELLA_EDITED_PHOTOS.slice(0, 6), ...ESTRELLA_NEW_PHOTOS.slice(1), ...ESTRELLA_EDITED_PHOTOS.slice(6)],
    recorridoHeading:'Conozca la casa en video',
    videos:[{src:'assets/la-estrella/recorrido.mp4', poster:'assets/la-estrella/video-poster.jpg', title:'Casa campestre en La Estrella · $2.250 millones COP'}],
    gallery:ESTRELLA_PHOTOS,
    virtualStagingNote:'Algunas fotografías incluyen mobiliario añadido digitalmente para ayudar a visualizar el uso del espacio. La arquitectura, distribución y acabados permanentes no fueron modificados.',
    details:false
  }),
  sabaneta500: () => propertyPage({
  "draft": "DISPONIBLE · REMODELADO",
  "name": "Apartamento remodelado en Sabaneta",
  "storyHeading": "Vista a las montañas y espacios para disfrutar",
  "location": "Sabaneta · Antioquia, Colombia",
  "price": "$500.000.000 COP",
  "usd": "Precio de venta en pesos colombianos.",
  "heroImage": "assets/apartamento-sabaneta-500m/01.webp",
  "heroAlt": "Balcón con dos sillas orientadas hacia la vista de las montañas en Sabaneta",
  "story": "Un balcón para sentarse a disfrutar la vista a las montañas y un apartamento remodelado de 58 m² (624 ft² aprox.) en piso alto. La sala y el comedor se conectan con el balcón, mientras la cocina integral, las dos habitaciones y los dos baños ofrecen una distribución práctica para el día a día. Incluye parqueadero y cuarto útil, dentro de una ciudadela con zonas comunes para descansar, hacer ejercicio y compartir.",
  "facts": [
    "58 m² / 624 ft²",
    "2",
    "2",
    "1",
    "Incluido",
    "Piso alto"
  ],
  "labels": [
    "Área del apartamento",
    "Habitaciones",
    "Baños",
    "Parqueadero",
    "Cuarto útil",
    "Ubicación en el edificio"
  ],
  "recorridoHeading": "Recorra el apartamento y sus zonas comunes",
  "videos": [
    {
      "src": "assets/apartamento-sabaneta-500m/recorrido.mp4",
      "poster": "assets/apartamento-sabaneta-500m/video-poster.jpg",
      "title": "Apartamento en Sabaneta · $500 millones COP"
    }
  ],
  "gallery": [
    {
      "src": "assets/apartamento-sabaneta-500m/01.webp",
      "alt": "Balcón con vista a las montañas · apartamento en Sabaneta",
      "caption": "Balcón con vista a las montañas"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/02.webp",
      "alt": "Sala y comedor con salida al balcón · apartamento en Sabaneta",
      "caption": "Sala y comedor con salida al balcón"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/03.webp",
      "alt": "Comedor · apartamento en Sabaneta",
      "caption": "Comedor"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/04.webp",
      "alt": "Cocina integral y zona de ropas · apartamento en Sabaneta",
      "caption": "Cocina integral y zona de ropas"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/05.webp",
      "alt": "Habitación principal · apartamento en Sabaneta",
      "caption": "Habitación principal"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/06.webp",
      "alt": "Habitación auxiliar · apartamento en Sabaneta",
      "caption": "Habitación auxiliar"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/07.webp",
      "alt": "Baño con división de vidrio · apartamento en Sabaneta",
      "caption": "Baño con división de vidrio"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/08.webp",
      "alt": "Área social · vista hacia el televisor · apartamento en Sabaneta",
      "caption": "Área social · vista hacia el televisor"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/09.webp",
      "alt": "Piscina · zona común · apartamento en Sabaneta",
      "caption": "Piscina · zona común"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/10.webp",
      "alt": "Piscinas y jardines · zonas comunes · apartamento en Sabaneta",
      "caption": "Piscinas y jardines · zonas comunes"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/11.webp",
      "alt": "Juegos infantiles · zona común · apartamento en Sabaneta",
      "caption": "Juegos infantiles · zona común"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/12.webp",
      "alt": "Salón de juegos · zona común · apartamento en Sabaneta",
      "caption": "Salón de juegos · zona común"
    },
    {
      "src": "assets/apartamento-sabaneta-500m/13.webp",
      "alt": "Vista de las zonas comunes de la ciudadela · apartamento en Sabaneta",
      "caption": "Vista de las zonas comunes de la ciudadela"
    }
  ],
  "detailsHeading": "Características del apartamento y la ciudadela",
  "fullDetails": [
    [
      "Distribución",
      "58 m² (624 ft² aprox.), dos habitaciones, dos baños, sala, comedor, cocina integral y zona de ropas."
    ],
    [
      "Balcón y vista",
      "Ubicado en piso alto, con balcón y vista hacia las montañas y el entorno urbano de Sabaneta."
    ],
    [
      "Parqueadero y cuarto útil",
      "El precio de venta incluye un parqueadero y un cuarto útil. La ciudadela cuenta con ascensores y parqueadero de visitantes."
    ],
    [
      "Piscinas, gimnasio y recreación",
      "Piscinas, gimnasio dotado, juegos infantiles, zonas verdes, salón de juegos, salones sociales y zonas de barbecue."
    ],
    [
      "Espacios para distintas actividades",
      "Coworking, sala de cine, salón de yoga, cancha múltiple y zona para mascotas."
    ],
    [
      "Seguridad y acceso",
      "Urbanización cerrada con portería y vigilancia 24/7, circuito cerrado de televisión y acceso pavimentado."
    ],
    [
      "Precio de venta",
      "$500.000.000 COP. Escríbame para conocer las condiciones de entrega, los gastos de administración y coordinar una visita."
    ]
  ],
  "accessHeading": "Un entorno residencial con servicios cercanos",
  "access": "Cerca de Mall Las Vegas, supermercado Euro, Clínica Venancio y la estación La Estrella del Metro. El sector cuenta con rutas de transporte público y cercanía a colegios, iglesias, restaurantes y comercio. La ubicación exacta y las indicaciones de ingreso se comparten al coordinar una visita.",
  "hideUses": true,
  "details": false
}),
  santuario: () => propertyPage({
    draft:'DISPONIBLE · 7 LOTES CAMPESTRES',
    name:'Lotes campestres en Santuario',
    location:'Santuario · Oriente Antioqueño, Colombia',
    price:'Desde $295.000.000 COP',
    usd:'Precios en pesos colombianos por lote, negociables. También se vende la finca completa.',
    heroImage:'assets/lotes-santuario/foto-1.webp',
    heroAlt:'Lote campestre con pasto y vista a las montañas en Santuario',
    storyHeading:'Tierra con vista a las montañas del Oriente Antioqueño.',
    story:'Siete lotes campestres en Santuario, en el Oriente Antioqueño, rodeados de montañas, vegetación nativa y aire limpio. Desde 3.928 m² hasta 15.000 m², para una casa de descanso, un proyecto familiar o una inversión en tierra en una de las regiones con mayor crecimiento de Antioquia. El lote 1 incluye casa y bodega.',
    facts:['7 lotes','Desde 3.928 m²','Desde 0,97 acres','≈ 4,3 ha','Casa y bodega','Desde $295M COP'],
    labels:['Disponibles','Área por lote','Área en acres','Área total disponible','Incluidas en el lote 1','Precio por lote'],
    recorridoHeading:'Conozca los lotes en video',
    videos:[{src:'assets/lotes-santuario/recorrido.mp4',poster:'assets/lotes-santuario/video-poster.jpg',title:'Recorrido de los lotes campestres en Santuario'}],
    gallery:[
      {src:'assets/lotes-santuario/foto-1.webp',alt:'Lote con pasto y vista a las montañas',caption:'Vista a las montañas'},
      {src:'assets/lotes-santuario/foto-2.webp',alt:'Vegetación nativa y montañas al fondo',caption:'Vegetación nativa'},
      {src:'assets/lotes-santuario/foto-3.webp',alt:'Árboles y paisaje del Oriente Antioqueño',caption:'Paisaje del Oriente Antioqueño'},
      {src:'assets/lotes-santuario/foto-4.webp',alt:'Terreno con vegetación y vista al valle',caption:'Vista al valle'},
      {src:'assets/lotes-santuario/foto-5.webp',alt:'Árboles y vegetación dentro de los lotes',caption:'Naturaleza en cada lote'},
      {src:'assets/lotes-santuario/plano-lotes.webp',alt:'Plano ilustrativo de los siete lotes disponibles',caption:'Plano ilustrativo de los lotes'}
    ],
    detailsHeading:'Lotes disponibles y precios',
    fullDetails:[
      ['Lote 1 · 15.000 m²','Incluye casa y bodega. $1.350.000.000 COP.'],
      ['Lote 2 · 3.928 m²','$295.000.000 COP.'],
      ['Lote 3 · 5.256 m²','$399.000.000 COP.'],
      ['Lote 4 · 5.929 m²','$440.000.000 COP.'],
      ['Lote 5 · 4.373 m²','$325.000.000 COP.'],
      ['Lote 6 · 4.062 m²','$305.000.000 COP.'],
      ['Lote 7 · 4.175 m²','$310.000.000 COP.'],
      ['Finca completa','Los siete lotes disponibles por $2.250.000.000 COP. Precios negociables; consulte las condiciones de forma privada.']
    ],
    access:'Ubicados en Santuario, Oriente Antioqueño, a unos 15 minutos en carro del pueblo por la autopista Medellín–Bogotá. La ruta de acceso, el punto de encuentro y la ubicación exacta se comparten al coordinar una visita.',
    hideUses:true,
    details:false
  }),
  copacabana: () => propertyPage({
    draft:'DISPONIBLE · LOTE URBANO',
    name:'Lote urbano en venta en Copacabana',
    location:'Copacabana · Antioquia, Colombia',
    price:'USD $2,600,000',
    usd:'Precio de venta en dólares estadounidenses.',
    heroImage:'assets/copacabana/photo-1.webp',
    heroAlt:'Vista horizontal del terreno abierto y los árboles del lote en Copacabana',
    story:'Lote de 9,000 m² ubicado a 2 minutos del parque principal de Copacabana y a 1 minuto de la Autopista Norte. Una oportunidad para inversionistas y desarrolladores interesados en un proyecto que integre vivienda, comercio y estacionamiento en el norte del Valle de Aburrá.',
    facts:['9,000 m²','96,875 sq ft','2.22 acres','2 min','1 min','USD $2,600,000'],
    labels:['Área del terreno','Área en pies cuadrados','Área en acres','Del parque principal','De Autopista Norte','Precio de venta'],
    recorridoHeading:'Conozca el lote en video',
    videos:[{src:'assets/copacabana/recorrido.mp4',poster:'assets/copacabana/video-poster.jpg',title:'Recorrido del lote urbano en Copacabana'}],
    gallery:[
      {src:'assets/copacabana/photo-1.webp',alt:'Terreno abierto con árboles y vegetación en Copacabana',caption:'Vista del terreno abierto'},
      {src:'assets/copacabana/photo-3.webp',alt:'Árboles y relieve del lote en Copacabana',caption:'Vegetación y relieve del terreno'},
      {src:'assets/copacabana/photo-2.webp',alt:'Vista del lote y su entorno inmediato',caption:'Entorno del lote'}
    ],
    detailsHeading:'Potencial de desarrollo residencial y comercial',
    fullDetails:[
      ['Vivienda multifamiliar','La propuesta contempla 2–3 torres de apartamentos como posibilidad de desarrollo.'],
      ['Zona comercial','Espacios propuestos para supermercado, farmacia y otros locales comerciales, integrados con el componente residencial.'],
      ['Estacionamiento','La propuesta incluye un edificio de parqueaderos para atender a residentes y visitantes del sector.'],
      ['Viabilidad del proyecto','Los usos propuestos, el número de torres y la capacidad de construcción están sujetos a la normativa aplicable y a las autorizaciones correspondientes. El comprador deberá realizar sus propios estudios de viabilidad y la debida diligencia técnica y jurídica.']
    ],
    accessHeading:'Cerca del parque principal y de Autopista Norte',
    access:'Ubicado en Copacabana, Antioquia, a 2 minutos del parque principal y a 1 minuto de la Autopista Norte. Los tiempos de desplazamiento pueden variar según la ruta y el tráfico. La ubicación exacta y las indicaciones se comparten al coordinar una visita.',
    hideUses:true,
    details:false
  }),
  lalinde: () => propertyPage({
  "draft": "DISPONIBLE · AMOBLADO",
  "name": "Apartaestudio amoblado en El Poblado",
  "location": "Sector La Linde · El Poblado, Medellín, Antioquia",
  "price": "$710.000.000 COP",
  "usd": "La equivalencia en USD se calcula con la tasa vigente al consultar.",
  "heroImage": "assets/apartaestudio-lalinde/02.webp",
  "heroAlt": "Sala, cocina abierta y balcón · apartaestudio en Lalinde, El Poblado",
  "ownerAuthorized": false,
  "hideRecorrido": true,
  "story": "Un apartaestudio amoblado en el sector La Linde de El Poblado, a pasos de Provenza. Su sala y cocina abierta se conectan con un amplio balcón con vista urbana, mientras la habitación dispone de baño privado y vestier. Una opción para quienes buscan vivir en Medellín o contar con una segunda vivienda cerca de restaurantes y servicios.",
  "facts": [
    "76 m² / 818 ft² aprox.",
    "1",
    "1 completo + 1 social",
    "2",
    "$650.000 COP/mes",
    "Amoblado"
  ],
  "labels": [
    "Área construida",
    "Habitación",
    "Baños",
    "Parqueaderos",
    "Administración",
    "Entrega"
  ],
  "hideUses": true,
  "accessHeading": "",
  "detailsHeading": "Características y condiciones informadas",
  "fullDetails": [
    [
      "Área",
      "76 m² de área construida, equivalentes a aproximadamente 818 ft²."
    ],
    [
      "Distribución y mobiliario",
      "Una habitación con baño privado y vestier, baño social, sala, comedor, cocina abierta equipada, balcón amplio y zona de lavandería. Se ofrece amoblado."
    ],
    [
      "Acabados y equipamiento",
      "Inmueble reformado con cocina integral, clósets, calentador, gas domiciliario y citófono."
    ],
    [
      "Parqueaderos y depósito",
      "Dos parqueaderos y depósito. El edificio también cuenta con parqueadero de visitantes."
    ],
    [
      "Edificio y seguridad",
      "Edificio en urbanización cerrada con portería 24 horas, vigilancia, circuito cerrado de televisión, ascensor y shut de basuras."
    ],
    [
      "Zonas comunes",
      "Gimnasio, área social y zonas húmedas."
    ],
    [
      "Administración y estrato",
      "La administración es de $650.000 COP mensuales. Estrato 6."
    ],
    [
      "Ubicación",
      "Sector La Linde, El Poblado, Medellín, cerca de Provenza, restaurantes, tiendas, parques y transporte público, con acceso pavimentado y ubicación exterior."
    ],
    [
      "Condiciones de venta",
      "Precio de venta: $710.000.000 COP. Se admiten mascotas."
    ]
  ],
  "access": "Ubicado en el sector La Linde de El Poblado, Medellín, a pasos de Provenza y cerca de restaurantes, tiendas, parques y transporte público. La dirección exacta y el punto de encuentro se comparten al coordinar la visita.",
  "gallery": [
    {
      "src": "assets/apartaestudio-lalinde/01.webp",
      "alt": "Sala con salida al balcón · apartaestudio en Lalinde, El Poblado",
      "caption": "Sala con salida al balcón"
    },
    {
      "src": "assets/apartaestudio-lalinde/02.webp",
      "alt": "Sala, cocina abierta y balcón · apartaestudio en Lalinde, El Poblado",
      "caption": "Sala, cocina abierta y balcón"
    },
    {
      "src": "assets/apartaestudio-lalinde/03.webp",
      "alt": "Vista general del área social · apartaestudio en Lalinde, El Poblado",
      "caption": "Vista general del área social"
    },
    {
      "src": "assets/apartaestudio-lalinde/04.webp",
      "alt": "Sala y cocina integrada · apartaestudio en Lalinde, El Poblado",
      "caption": "Sala y cocina integrada"
    },
    {
      "src": "assets/apartaestudio-lalinde/05.webp",
      "alt": "Cocina equipada con barra · apartaestudio en Lalinde, El Poblado",
      "caption": "Cocina equipada con barra"
    },
    {
      "src": "assets/apartaestudio-lalinde/06.webp",
      "alt": "Sala y comedor desde la cocina · apartaestudio en Lalinde, El Poblado",
      "caption": "Sala y comedor desde la cocina"
    },
    {
      "src": "assets/apartaestudio-lalinde/07.webp",
      "alt": "Área social y balcón · apartaestudio en Lalinde, El Poblado",
      "caption": "Área social y balcón"
    },
    {
      "src": "assets/apartaestudio-lalinde/08.webp",
      "alt": "Comedor · apartaestudio en Lalinde, El Poblado",
      "caption": "Comedor"
    },
    {
      "src": "assets/apartaestudio-lalinde/09.webp",
      "alt": "Balcón y vista urbana · apartaestudio en Lalinde, El Poblado",
      "caption": "Balcón y vista urbana"
    },
    {
      "src": "assets/apartaestudio-lalinde/10.webp",
      "alt": "Vista desde el balcón · apartaestudio en Lalinde, El Poblado",
      "caption": "Vista desde el balcón"
    },
    {
      "src": "assets/apartaestudio-lalinde/11.webp",
      "alt": "Baño social · apartaestudio en Lalinde, El Poblado",
      "caption": "Baño social"
    },
    {
      "src": "assets/apartaestudio-lalinde/12.webp",
      "alt": "Habitación y acceso al vestier · apartaestudio en Lalinde, El Poblado",
      "caption": "Habitación y acceso al vestier"
    },
    {
      "src": "assets/apartaestudio-lalinde/13.webp",
      "alt": "Habitación con salida al balcón · apartaestudio en Lalinde, El Poblado",
      "caption": "Habitación con salida al balcón"
    },
    {
      "src": "assets/apartaestudio-lalinde/14.webp",
      "alt": "Habitación y baño privado · apartaestudio en Lalinde, El Poblado",
      "caption": "Habitación y baño privado"
    },
    {
      "src": "assets/apartaestudio-lalinde/15.webp",
      "alt": "Baño principal · apartaestudio en Lalinde, El Poblado",
      "caption": "Baño principal"
    },
    {
      "src": "assets/apartaestudio-lalinde/16.webp",
      "alt": "Vestier · apartaestudio en Lalinde, El Poblado",
      "caption": "Vestier"
    },
    {
      "src": "assets/apartaestudio-lalinde/17.webp",
      "alt": "Zona social exterior del edificio · apartaestudio en Lalinde, El Poblado",
      "caption": "Zona social exterior del edificio"
    },
    {
      "src": "assets/apartaestudio-lalinde/18.webp",
      "alt": "Gimnasio del edificio · apartaestudio en Lalinde, El Poblado",
      "caption": "Gimnasio del edificio"
    }
  ],
  "details": false
}),
  sabaneta: () => propertyPage({
  "draft": "DISPONIBLE",
  "name": "Dúplex en Aves María, Sabaneta",
  "location": "Sabaneta, Antioquia · sector Aves María",
  "price": "$860.000.000 COP",
  "usd": "Precio de venta informado por la propietaria. La equivalencia en USD se calcula con la tasa vigente al consultar.",
  "heroImage": "assets/sabaneta/03_Cocina.jpg",
  "heroAlt": "Cocina integral reformada con isla del dúplex en Sabaneta",
  "ownerAuthorized": false,
  "story": "Tres habitaciones y dos niveles para distribuir su vida con comodidad, a pocos minutos caminando del Parque Principal de Sabaneta. La sala-comedor iluminada y la cocina integral reformada se complementan con una despensa independiente, zona de ropas y cuarto útil. Dentro de la unidad, las zonas comunes ofrecen espacios para nadar, ejercitarse y reunirse.",
  "facts": [
    "114 m² / 1.227 ft² aprox.",
    "3",
    "3 completos",
    "8 y 9",
    "Privado",
    "4"
  ],
  "labels": [
    "Área",
    "Habitaciones",
    "Baños",
    "Pisos",
    "Parqueadero",
    "Estrato"
  ],
  "uses": [
    "Vivienda principal",
    "Segunda vivienda"
  ],
  "detailsHeading": "Características informadas por la propietaria",
  "fullDetails": [
    [
      "Distribución",
      "Apartamento dúplex de 114 m² en los pisos octavo y noveno, con tres habitaciones con clóset y tres baños completos."
    ],
    [
      "Cocina y espacios sociales",
      "Cocina integral completamente reformada. Sala y comedor amplios, con buena iluminación natural."
    ],
    [
      "Almacenamiento y servicios",
      "Despensa independiente y zona de ropas. Cuarto útil amplio e iluminado, ubicado junto al parqueadero privado."
    ],
    [
      "Seguridad",
      "Unidad cerrada con portería y vigilancia 24 horas. Estrato 4."
    ],
    [
      "Zonas comunes",
      "Piscina, gimnasio al aire libre, salón social versátil, juegos infantiles, zonas verdes, sauna y turco. El salón social se muestra vacío; no se ofrece mobiliario para eventos."
    ],
    [
      "Ubicación caminable",
      "A pocos minutos caminando del Parque Principal de Sabaneta, cerca de comercios, restaurantes, supermercados, colegios, iglesias y transporte público."
    ],
    [
      "Precio y costos",
      "Precio solicitado: $860.000.000 COP. Administración de aproximadamente $600.000 COP mensuales y predial anual de aproximadamente $3.650.000 COP, según cifras previamente informadas; estos costos están pendientes de reconfirmación y pueden cambiar."
    ],
    [
      "Visitas",
      "Visitas con cita previa. Escríbame “Dúplex” para recibir información y coordinar una visita."
    ]
  ],
  "access": "Sector Aves María, Sabaneta. La propietaria informa que el Parque Principal está a pocos minutos caminando. La dirección exacta y las instrucciones de ingreso se comparten al coordinar la visita.",
  "gallery": [
    {
      "src": "assets/sabaneta/01_Sala_comedor.jpg",
      "alt": "Sala y comedor del dúplex en Sabaneta",
      "caption": "Sala y comedor"
    },
    {
      "src": "assets/sabaneta/02_Sala_escaleras.jpg",
      "alt": "Sala y acceso al segundo nivel del dúplex en Sabaneta",
      "caption": "Sala y acceso al segundo nivel"
    },
    {
      "src": "assets/sabaneta/03_Cocina.jpg",
      "alt": "Cocina integral reformada del dúplex en Sabaneta",
      "caption": "Cocina integral reformada"
    },
    {
      "src": "assets/sabaneta/13_Despensa.jpg",
      "alt": "Despensa independiente del dúplex en Sabaneta",
      "caption": "Despensa independiente"
    },
    {
      "src": "assets/sabaneta/05_Escaleras.jpg",
      "alt": "Escaleras interiores del dúplex en Sabaneta",
      "caption": "Escaleras interiores"
    },
    {
      "src": "assets/sabaneta/06_Habitacion_principal.jpg",
      "alt": "Habitación principal del dúplex en Sabaneta",
      "caption": "Habitación principal"
    },
    {
      "src": "assets/sabaneta/07_Habitacion_secundaria.jpg",
      "alt": "Habitación secundaria del dúplex en Sabaneta",
      "caption": "Habitación secundaria"
    },
    {
      "src": "assets/sabaneta/08_Estudio.jpg",
      "alt": "Espacio presentado como estudio del dúplex en Sabaneta",
      "caption": "Espacio presentado como estudio"
    },
    {
      "src": "assets/sabaneta/11_Vestier.jpg",
      "alt": "Clóset y almacenamiento del dúplex en Sabaneta",
      "caption": "Clóset y almacenamiento"
    },
    {
      "src": "assets/sabaneta/09_Bano_claro.jpg",
      "alt": "Baño claro del dúplex en Sabaneta",
      "caption": "Baño claro"
    },
    {
      "src": "assets/sabaneta/10_Bano_oscuro.jpg",
      "alt": "Baño oscuro del dúplex en Sabaneta",
      "caption": "Baño oscuro"
    },
    {
      "src": "assets/sabaneta/12_Zona_ropas.jpg",
      "alt": "Zona de ropas del dúplex en Sabaneta",
      "caption": "Zona de ropas"
    },
    {
      "src": "assets/sabaneta/14_Piscinas_edificio.jpg",
      "alt": "Piscina principal, piscina infantil y banca",
      "caption": "Piscina principal, piscina infantil y banca"
    },
    {
      "src": "assets/sabaneta/16_Sauna.jpg",
      "alt": "Sauna",
      "caption": "Sauna"
    },
    {
      "src": "assets/sabaneta/17_Turco.jpg",
      "alt": "Turco",
      "caption": "Turco"
    },
    {
      "src": "assets/sabaneta/15_Salon_social.jpg",
      "alt": "Salón social versátil",
      "caption": "Salón social versátil"
    },
    {
      "src": "assets/sabaneta/19_Gimnasio_exterior.jpg",
      "alt": "Gimnasio al aire libre",
      "caption": "Gimnasio al aire libre"
    },
    {
      "src": "assets/sabaneta/20_Juegos_infantiles.jpg",
      "alt": "Juegos infantiles",
      "caption": "Juegos infantiles"
    },
    {
      "src": "assets/sabaneta/23_Zonas_verdes.jpg",
      "alt": "Zonas verdes",
      "caption": "Zonas verdes"
    },
    {
      "src": "assets/sabaneta/24_Parqueadero.jpg",
      "alt": "Parqueadero privado",
      "caption": "Parqueadero privado"
    },
    {
      "src": "assets/sabaneta/25_Cuarto_util.jpg",
      "alt": "Cuarto útil",
      "caption": "Cuarto útil"
    }
  ],
  "virtualStagingNote": "Algunas fotografías interiores incluyen organización y decoración virtual. El mobiliario, los accesorios y los objetos mostrados no se ofrecen como parte de la venta. Las fotografías de las zonas comunes incluyen el salón social vacío.",
  "details": false,
  "recorridoHeading": "Conozca el dúplex y sus zonas comunes"
}),
  pobladoPenthouse: () => propertyPage({
    draft:'DISPONIBLE · PARA REFORMA TOTAL',
    name:'Penthouse dúplex en El Poblado',
    location:'Loma de Los González · El Poblado, Medellín',
    price:'Precio bajo consulta',
    usd:'El precio, la disponibilidad y las condiciones de venta se confirman de forma privada antes de coordinar una visita.',
    heroImage:'assets/poblado-penthouse/01_hero_staircase_city_view.jpg',
    heroAlt:'Penthouse dúplex en El Poblado con escalera interior y vista urbana',
    story:'Un penthouse dúplex de más de 270 m² en la Loma de Los González, pensado para quien busca amplitud, privacidad y la oportunidad de crear una residencia completamente a su medida. La propiedad está para reformar en su totalidad y se encuentra en un edificio de baja densidad, con solo 12 apartamentos, muy cerca del centro comercial Oviedo. Sus dos niveles reúnen áreas sociales generosas, terrazas, espacios de trabajo y ambientes flexibles que permiten proyectar una renovación integral con identidad propia.',
    facts:['Más de 270 m²','Dúplex','Reforma total','12 apartamentos','El Poblado','Cerca de Oviedo'],
    labels:['Área interior reportada','Dos niveles','Estado actual','Edificio de baja densidad','Sector','Ubicación estratégica'],
    uses:['Residencia principal','Proyecto de renovación integral','Trabajo desde casa','Taller de arte u oficina','Vida interior y exterior'],
    detailsHeading:'Características principales del penthouse',
    fullDetails:[
      ['Distribución en dos niveles','Más de 270 m² distribuidos en formato dúplex, con amplias áreas sociales, espacios privados y circulación interior mediante escalera.'],
      ['Proyecto para reforma total','La propiedad requiere una renovación integral. Esto permite replantear acabados, cocina, baños y ambientes de acuerdo con las necesidades y el estilo del próximo propietario.'],
      ['Espacios flexibles','Además de las áreas residenciales, cuenta con un espacio utilizado como taller de arte y una oficina adicional al otro lado del muro, ideales para trabajo remoto, estudio o actividades creativas.'],
      ['Terrazas y conexión exterior','Varios espacios se conectan con terrazas cubiertas y abiertas, vegetación y luz natural, creando posibilidades para zonas de descanso, comedor exterior y entretenimiento.'],
      ['Sauna y áreas complementarias','La propiedad incluye un sauna en madera, además de espacios auxiliares que pueden integrarse al nuevo diseño durante la reforma.'],
      ['Edificio y acceso','Ubicado en un edificio de solo 12 apartamentos. La propiedad cuenta con acceso por ascensor y entrada privada, según lo observado durante la visita.'],
      ['Condiciones de venta','El precio, la disponibilidad, la administración y las condiciones específicas de venta se confirman de manera privada. El comprador deberá realizar su propia debida diligencia legal, financiera y técnica.']
    ],
    access:'Ubicado en la Loma de Los González, El Poblado, Medellín, muy cerca del centro comercial Oviedo y de los servicios del sector. La dirección exacta y las indicaciones de ingreso se comparten únicamente al coordinar una visita.',
    gallery:[
      {src:'assets/poblado-penthouse/01_hero_staircase_city_view.jpg', alt:'Escalera interior y ventanal con vista urbana', caption:'Escalera y vista urbana'},
      {src:'assets/poblado-penthouse/02_open_social_area.jpg', alt:'Área social amplia con ventanales y vegetación interior', caption:'Área social abierta'},
      {src:'assets/poblado-penthouse/04_formal_dining_room.jpg', alt:'Comedor formal del penthouse', caption:'Comedor formal'},
      {src:'assets/poblado-penthouse/05_duplex_staircase.jpg', alt:'Escalera principal del dúplex junto al ventanal', caption:'Escalera del dúplex'},
      {src:'assets/poblado-penthouse/06_main_kitchen.jpg', alt:'Cocina principal con ventana amplia', caption:'Cocina principal'},
      {src:'assets/poblado-penthouse/07_kitchen_appliance_wall.jpg', alt:'Zona de hornos y almacenamiento de la cocina', caption:'Cocina y electrodomésticos'},
      {src:'assets/poblado-penthouse/08_bedroom_one.jpg', alt:'Alcoba con espacio de trabajo junto a la ventana', caption:'Alcoba'},
      {src:'assets/poblado-penthouse/09_primary_bedroom.jpg', alt:'Alcoba amplia con acceso directo al balcón', caption:'Alcoba con acceso al balcón'},
      {src:'assets/poblado-penthouse/10_primary_bedroom_balcony.jpg', alt:'Vista adicional de la alcoba principal y su acceso al exterior', caption:'Alcoba principal y balcón'},
      {src:'assets/poblado-penthouse/11_bedroom_two.jpg', alt:'Vista adicional de la alcoba principal junto al baño principal', caption:'Alcoba principal'},
      {src:'assets/poblado-penthouse/12_primary_bath_tub.jpg', alt:'Baño de la alcoba principal con jacuzzi', caption:'Baño de la alcoba principal con jacuzzi'},
      {src:'assets/poblado-penthouse/13_primary_bath_double_vanity.jpg', alt:'Baño con dos lavamanos y ducha en vidrio', caption:'Baño con doble lavamanos'},
      {src:'assets/poblado-penthouse/14_art_studio.jpg', alt:'Espacio interior utilizado como taller de arte', caption:'Taller de arte'},
      {src:'assets/poblado-penthouse/15_flex_room_from_terrace.jpg', alt:'Espacio flexible visto desde la terraza', caption:'Espacio flexible y terraza'},
      {src:'assets/poblado-penthouse/16_covered_terrace_lounge.jpg', alt:'Terraza cubierta con sala exterior', caption:'Terraza cubierta'},
      {src:'assets/poblado-penthouse/17_long_covered_terrace.jpg', alt:'Terraza longitudinal con comedor exterior y vegetación', caption:'Terraza y comedor exterior'},
      {src:'assets/poblado-penthouse/18_open_terrace.jpg', alt:'Terraza abierta con vegetación', caption:'Terraza abierta'},
      {src:'assets/poblado-penthouse/19_private_entry.jpg', alt:'Entrada privada del penthouse', caption:'Entrada privada'},
      {src:'assets/poblado-penthouse/20_private_elevator.jpg', alt:'Ascensor de acceso al penthouse', caption:'Acceso por ascensor'},
      {src:'assets/poblado-penthouse/21_wood_sauna.jpg', alt:'Sauna interior revestido en madera', caption:'Sauna en madera'},
      {src:'assets/poblado-penthouse/22_additional_office.jpg', alt:'Oficina adicional con techo alto en madera y ventanales', caption:'Oficina adicional'}
    ],
    virtualStagingNote:'Algunas fotografías fueron organizadas digitalmente para retirar objetos personales y mostrar los espacios despejados. Estas imágenes no representan una reforma ya ejecutada ni alteran la condición informada de la propiedad.',
    hideRecorrido:true,
    details:false
  }),
  guarneCasa: () => propertyPage({
    draft:'DISPONIBLE',
    name:'Casa campestre cerca del Aeropuerto JMC',
    location:'Guarne, Antioquia · vereda La Mosquita',
    price:'$2.300.000.000 COP · negociables',
    usd:'La equivalencia en USD se calculará con la tasa vigente el día de la consulta.',
    heroImage:GUARNE_CASA_HERO,
    heroAlt:'Fachada principal de la casa campestre en Guarne',
    ownerAuthorized:true,
    story:'A pocos minutos del Aeropuerto JMC, esta casa campestre combina espacios amplios, jardines consolidados y una distribución pensada para la vida familiar. Sus áreas sociales se integran con el deck y el entorno verde, mientras las alcobas conservan privacidad y vistas hacia el paisaje.',
    facts:['2.310 m² / 24.865 ft²','380 m² / 4.090 ft²','4','4','2 cubiertos','5 min aprox.'],
    labels:['Lote · 0,57 acres aprox.','Construcción','Habitaciones','Baños','Parqueaderos','Aeropuerto JMC'],
    uses:['Residencia permanente','Casa familiar','Segunda vivienda','Trabajo remoto'],
    detailsHeading:'Características informadas por la propietaria',
    fullDetails:[
      ['Distribución','Cuatro alcobas y cuatro baños completos. Tres alcobas cuentan con baño privado, vestier y balcón.'],
      ['Áreas sociales y de trabajo','Sala, comedor, cocina, estudio, sala de televisión o cine, deck, terraza y tres balcones.'],
      ['Áreas de servicio','Zona de ropas y cuarto útil. La propiedad cuenta con parqueadero cubierto para dos vehículos.'],
      ['Entorno y seguridad','Urbanización privada de baja densidad, con aproximadamente 20 lotes, portería 24 horas y monitoreo por cámaras, según la información suministrada.'],
      ['Energía y condición','Cuenta con paneles solares y se reporta en excelente estado, con pintura y detalles de mantenimiento recientes. Estrato 5.'],
      ['Disponibilidad y visitas','Actualmente ocupada por sus propietarios. Las visitas pueden coordinarse con cita previa.'],
      ['Administración','Cuota de administración informada: $680.000 COP mensuales. Se reconfirma antes de avanzar en una negociación.'],
      ['Información catastral reportada','La propietaria informa que existe un trámite catastral pendiente de confirmación. Este punto, junto con el impuesto predial y la situación urbanística, deberá ser revisado por el comprador dentro de su propia debida diligencia.'],
      ['Precio','Precio solicitado de $2.300.000.000 COP, negociables. La disponibilidad y las condiciones se reconfirman antes de coordinar una visita.'],
      ['Posibilidad de permuta','La propietaria consideraría como parte de pago un apartamento de hasta $700.000.000 COP, o dos apartamentos de características similares por un valor conjunto de hasta $1.400.000.000 COP. Sectores de interés: Ciudad del Río, Santa María de los Ángeles, Las Transversales, El Poblado, El Tesoro y Envigado. La valoración de los inmuebles, el saldo a pagar y cualquier propuesta concreta están sujetos a evaluación y aceptación expresa de la propietaria.']
    ],
    access:'Vereda La Mosquita, Guarne. La propietaria reporta un tiempo aproximado de cinco minutos hasta el Aeropuerto JMC. La dirección exacta, el nombre de la parcelación y las indicaciones de ingreso se comparten únicamente al coordinar una visita.',
    gallery:GUARNE_CASA_PHOTOS,
    details:false
  }),
  romeral: () => propertyPage({
    draft:'DISPONIBLE',
    name:'Finca en la vereda El Romeral',
    location:'Guarne, Antioquia · vereda El Romeral',
    price:'$1.300.000.000 COP',
    usd:'La equivalencia en USD se calculará con la tasa vigente el día de la consulta.',
    heroImage:'assets/romeral/01-main-house-fountain.jpg',
    heroAlt:'Casa principal, fuente y jardines de la finca en la vereda El Romeral',
    ownerAuthorized:true,
    story:'Una finca pensada para vivir y recibir familia, con casa principal, apartamento independiente y varios espacios sociales exteriores. Su ubicación permite mantenerse cerca de Guarne y del aeropuerto sin perder el ambiente rural.',
    facts:['1.762,43 m² / 18.971 ft²','433,01 m² / 4.661 ft²','5 en total','4 en total','Hasta 5','25 min aprox.'],
    labels:['Lote · 0,44 acres aprox.','Construcción','Habitaciones','Baños','Parqueaderos','Aeropuerto JMC'],
    uses:['Residencia permanente','Casa de descanso','Apartamento independiente','Alquiler temporal permitido — sin historial'],
    detailsHeading:'Características informadas de la propiedad',
    fullDetails:[
      ['Casa principal','163,65 m² / 1.762 ft² aprox. Tres alcobas, dos baños, biblioteca o sala de TV, cocina cerrada y corredores.'],
      ['Apartamento independiente','126,24 m² / 1.359 ft² aprox. Dos alcobas, dos baños y cocina propia.'],
      ['Zonas sociales','Kiosco con bar, kiosco de BBQ, turco con ducha y baño, fuente y pérgola social.'],
      ['Servicios y seguridad','Wi‑Fi y sistema de cámaras. Sin cuota de administración reportada. La mayoría del mobiliario podría negociarse por un valor adicional.'],
      ['Opciones de pago','La propietaria contempla una permuta únicamente por un apartamento ubicado en Envigado. No se consideran propiedades en otros municipios. Toda propuesta está sujeta a evaluación y aceptación expresa de la propietaria.']
    ],
    access:'Aproximadamente 10 minutos de Guarne, 25 minutos del Aeropuerto JMC y 3 minutos caminando desde la Autopista Medellín–Bogotá. El tramo final se reporta destapado, plano y transitable sin vehículo 4x4.',
    gallery:[
      {src:'assets/romeral/01-main-house-fountain.jpg', alt:'Casa principal detrás de la fuente y los jardines', caption:'Casa principal y fuente'},
      {src:'assets/romeral/02-gardens-overview.jpg', alt:'Vista amplia de los jardines, la fuente y las construcciones', caption:'Jardines y entorno'},
      {src:'assets/romeral/03-main-house-rear.jpg', alt:'Fachada posterior de la casa principal y zona verde', caption:'Casa principal'},
      {src:'assets/romeral/04-main-house-side.jpg', alt:'Fachada lateral de la casa principal rodeada de jardines', caption:'Exterior de la casa'},
      {src:'assets/romeral/05-stone-fountain-garden.jpg', alt:'Jardín con fuente de piedra y vegetación', caption:'Fuente y jardín'},
      {src:'assets/romeral/06-social-pergola.jpg', alt:'Kiosco exterior rodeado de zona verde', caption:'Kiosco y zona social'},
      {src:'assets/romeral/07-bar-exterior.jpg', alt:'Entrada exterior del kiosco con bar', caption:'Kiosco con bar'},
      {src:'assets/romeral/08-bar-interior.jpg', alt:'Interior del kiosco con barra, televisión y mesa', caption:'Bar y espacio social'},
      {src:'assets/romeral/09-social-pavilion.jpg', alt:'Interior del kiosco con amplios ventanales y mobiliario', caption:'Zona social cubierta'},
      {src:'assets/romeral/10-dining-room.jpg', alt:'Comedor interior con salida hacia los jardines', caption:'Comedor'},
      {src:'assets/romeral/11-dining-area.jpg', alt:'Comedor bajo techo de madera', caption:'Área de comedor'},
      {src:'assets/romeral/12-covered-corridor-one.jpg', alt:'Corredor cubierto con vista hacia los jardines', caption:'Corredor exterior'},
      {src:'assets/romeral/13-covered-corridor-two.jpg', alt:'Corredor cubierto con plantas y bancas', caption:'Corredores de la casa'},
      {src:'assets/romeral/14-interior-access.jpg', alt:'Acceso desde el corredor hacia el comedor', caption:'Acceso al interior'},
      {src:'assets/romeral/15-kitchen-one.jpg', alt:'Cocina en madera con electrodomésticos', caption:'Cocina'},
      {src:'assets/romeral/16-kitchen-two.jpg', alt:'Vista adicional de la cocina y la despensa', caption:'Cocina y almacenamiento'},
      {src:'assets/romeral/17-independent-kitchen.jpg', alt:'Cocina secundaria con gabinetes de madera y ladrillo', caption:'Cocina independiente'},
      {src:'assets/romeral/18-bathroom.jpg', alt:'Baño con acabados en tonos neutros', caption:'Baño'},
      {src:'assets/romeral/19-independent-interior.jpg', alt:'Espacio interior con muros en ladrillo y techo de madera', caption:'Espacio interior independiente'},
      {src:'assets/romeral/20-interior-corridor.jpg', alt:'Corredor interior con lavamanos y acabados en madera', caption:'Área interior'}
    ],
    details:false
  }),
  lotes: () => propertyPage({
    draft:'BORRADOR · RECONFIRMAR DISPONIBILIDAD Y CONDICIONES',
    name:'Dos lotes en El Romeral',
    location:'Guarne, Antioquia · vereda El Romeral',
    price:'$250.000.000 COP cada uno · $500.000.000 COP ambos',
    usd:'Conversión aproximada a USD pendiente de tasa y fecha de publicación.',
    story:'Dos lotes contiguos para quien quiere crear un proyecto propio cerca de Guarne. Pueden contemplarse juntos o por separado, sujeto a disponibilidad y a la debida diligencia del comprador.',
    facts:['1.800 m² / 19.375 ft²','1.800 m² / 19.375 ft²','3.600 m² / 38.750 ft²','10 min aprox.','45 min aprox.','Proindiviso'],
    labels:['Lote bajo · 0,44 acres','Lote alto · 0,44 acres','Área combinada · 0,89 acres','Guarne','Envigado','Forma de propiedad reportada'],
    uses:['Proyecto residencial — sujeto a permisos','Proyecto familiar — sujeto a permisos'],
    fullDetails:[
      ['Lote bajo','Se reporta con permiso y disponibilidad de acueducto. Solicitar documentos y condiciones actualizadas antes de avanzar.'],
      ['Lote alto','El permiso se reporta pendiente. No presentar como lote listo para construir hasta contar con soporte actualizado.'],
      ['Forma de propiedad','Se ha informado una condición proindiviso. Michelle comunica esta información; el comprador debe realizar su propia debida diligencia legal, financiera y técnica.'],
      ['Precio y compra','Precio reportado de $250 millones COP por lote o $500 millones COP por ambos. Reconfirmar disponibilidad y condiciones de separación antes de publicar.']
    ],
    access:'Aproximadamente 10 minutos de Guarne y 45 minutos de Envigado, según la información recibida. Confirmar ruta, estado de la vía y tiempos antes de publicar.',
    details:true
  })
};

function pageHero(title, text) { return `<section class="page-hero"><div class="container"><h1>${title}</h1><p class="lead">${text}</p></div></section>`; }

function propertyCards() { return [
  ['lotes-santuario.html','Lotes campestres en Santuario · desde $295 millones COP','Santuario · 7 lotes desde 3.928 m²','assets/lotes-santuario/foto-1.webp','Lote campestre con vista a las montañas en Santuario','Disponible'],
  ['local-billares-guarne.html','Local de billares · $750 millones COP','Guarne · 217 m² · a tres cuadras del parque principal','assets/billares-guarne/01-salon.webp','Salón de billares y barra del local en Guarne','Disponible · negociable'],
  ["apartamento-sabaneta.html", "Apartamento remodelado · $500 millones COP", "Sabaneta · 58 m² · 2 habitaciones · 2 baños", "assets/apartamento-sabaneta-500m/01.webp", "Balcón del apartamento con vista a las montañas en Sabaneta", "Disponible"],
  ['lote-copacabana.html','Lote urbano en Copacabana · USD $2,600,000','Copacabana · 9,000 m² · Potencial residencial y comercial','assets/copacabana/photo-1.webp','Terreno abierto del lote urbano en Copacabana','Disponible'],
  ['apartaestudio-el-poblado.html','Apartaestudio amoblado · $710 millones COP','Lalinde · El Poblado · 1 habitación · 2 parqueaderos','assets/apartaestudio-lalinde/02.webp','Sala y cocina abierta del apartaestudio amoblado en El Poblado','Disponible'],
  ['penthouse-el-poblado.html','Penthouse dúplex en El Poblado','Loma de Los González · Más de 270 m²','assets/poblado-penthouse/01_hero_staircase_city_view.jpg','Penthouse dúplex en El Poblado con escalera interior y vista urbana','Disponible · para reforma total'],
  ['hotel-campestre-guarne.html','Hotel campestre en Guarne · $6.600 millones COP','Guarne · 13.026 m² · 6 cabañas','assets/hotel-campestre-guarne/aerial-edited.jpg','Vista aérea del Hotel campestre en Guarne','Disponible'],
  ['duplex-sabaneta.html','Dúplex en Aves María · $860 millones COP','Sabaneta · 114 m² · 3 habitaciones','assets/sabaneta/kitchen-horizontal-card.jpg','Cocina reformada del dúplex en Sabaneta','Disponible'],
  ['finca-bonilla.html','Finca Bonilla','Vereda Bonilla · El Peñol','assets/bonilla/hero-exterior.jpg','Vista exterior de Finca Bonilla','Disponible'],
  ['finca-el-romeral.html','Finca en la vereda El Romeral','Guarne · Antioquia','assets/romeral/01-main-house-fountain.jpg','Casa principal, fuente y jardines de la finca en El Romeral','Disponible'],
  ['casa-campestre-la-estrella.html','Casa campestre La Estrella','La Estrella · Antioquia',ESTRELLA_HERO,'Fachada y terraza de la casa campestre en La Estrella','Disponible'],
  ['casa-campestre-guarne.html','Casa campestre cerca del Aeropuerto JMC','Guarne · Antioquia',GUARNE_CASA_HERO,'Fachada principal de la casa campestre en Guarne','Disponible']
].map(([url,name,place,image,alt,status]) => `<a class="property-card" href="${url}">${image ? `<div class="card-media property-image"><img src="${image}" alt="${alt}" loading="lazy"></div>` : `<div class="card-media photo-placeholder"><span>${name}<br>${place}</span></div>`}<div class="card-copy"><div class="meta">${status} · ${place}</div><h3>${name}</h3><span class="link-arrow">Ver página →</span></div></a>`).join(''); }

function buyerNeedCard({ number, title, location, budget, facts }) { return `
  <article class="buyer-card">
    <div class="buyer-card-head"><span class="buyer-number">${number}</span><span class="buyer-status">Búsqueda activa</span></div>
    <h3>${title}</h3>
    <p class="buyer-location">${location}</p>
    <p class="buyer-budget">${budget}</p>
    <ul>${facts.map(fact => `<li>${fact}</li>`).join('')}</ul>
  </article>`; }

function propertyPage(p) {
  const labels = p.labels || ['Lote','Construcción','Habitaciones','Baños','Parqueo / acceso','Ubicación'];
  const detailItems = p.fullDetails || [
    ['Distribución y construcción','[Materiales, antigüedad, niveles, espacios y estado de conservación.]'],
    ['Servicios y condiciones','[Agua, energía, saneamiento, internet, administración y costos conocidos.]'],
    ['Documentación','[Matrícula, tradición, gravámenes, impuestos, uso del suelo y documentos disponibles.]'],
    ['Disponibilidad','[Disponibilidad, condiciones de visita y fecha de última verificación.]']
  ];
  const propertyMessage = `Hola, Michelle. Me interesa recibir información sobre ${p.name}.`;
  const propertyWhatsApp = whatsappLink(propertyMessage);
  const heroMedia = p.heroImage
    ? `<div class="hero-photo property-image"><img src="${p.heroImage}" alt="${p.heroAlt || p.name}" fetchpriority="high"></div>`
    : `<div class="hero-photo photo-placeholder"><span>${p.name}<br>${p.location}</span></div>`;
  const videoSection = p.videos?.length
    ? `<div class="video-grid">${p.videos.map(video => `<figure class="video-card"><video controls playsinline preload="metadata"${video.poster ? ` poster="${video.poster}"` : ''}><source src="${video.src}" type="video/mp4">Su navegador no puede reproducir este video.</video><figcaption>${video.title}</figcaption></figure>`).join('')}</div>`
    : '<div class="media-placeholder" style="margin-top:32px"><div><strong>Recorrido disponible al solicitar información</strong><span>Escríbame por WhatsApp para conocer la propiedad y coordinar una visita.</span></div></div>';
  const gallerySection = p.gallery?.length
    ? `<div class="property-gallery">${p.gallery.map(image => `<figure class="gallery-item"><img src="${image.src}" alt="${image.alt}" loading="lazy"><figcaption>${image.caption}</figcaption></figure>`).join('')}</div>${p.virtualStagingNote ? `<p class="small muted" style="margin-top:18px">${p.virtualStagingNote}</p>` : ''}`
    : '<div class="gallery-grid"><div class="photo-placeholder"><span>Casa principal y jardines</span></div><div class="photo-placeholder"><span>Espacios sociales</span></div><div class="photo-placeholder"><span>Apartamento independiente</span></div></div><p class="small muted" style="margin-top:14px">Solicite por WhatsApp la galería completa y la información para coordinar una visita.</p>';
  return `
  <section class="property-hero">${heroMedia}<div class="hero-details"><span class="draft-badge">${p.draft}</span><p class="eyebrow">Propiedad en Colombia</p><h1>${p.name}</h1><p class="location">${p.location}</p><p class="price">${p.price}</p><p class="small muted">${p.usd}</p><div class="btn-row"><a class="btn" href="${propertyWhatsApp}" target="_blank" rel="noopener">Solicitar información por WhatsApp</a></div></div></section>
  ${p.ownerAuthorized ? `<section class="owner-direct"><div class="container owner-direct-grid"><div><p class="eyebrow">Nuestro compromiso</p><h2>Visitada personalmente.<br>Autorizada directamente.</h2></div><div><p class="lead">Antes de promocionar una propiedad, nuestro equipo local la visita personalmente, conoce sus espacios y confirma directamente con el propietario la autorización para presentarla. No trabajamos a través de cadenas de intermediarios.</p><p class="small">Así ofrecemos información proveniente de una fuente directa y una presentación basada en una visita real. Esta revisión comercial no reemplaza la debida diligencia legal, financiera y técnica que corresponde al comprador.</p></div></div></section>` : ''}
  <section class="section white"><div class="container"><p class="eyebrow">Datos esenciales</p><div class="facts">${p.facts.map((f,i)=>`<div class="fact"><strong>${f}</strong><span>${labels[i]}</span></div>`).join('')}</div></div></section>
  <section class="section"><div class="narrow"><p class="eyebrow">La propiedad</p><h2>${p.storyHeading || 'Un lugar para imaginar con información real.'}</h2><div class="rule"></div><p class="lead">${p.story}</p></div></section>
  ${p.hideRecorrido ? '' : `<section class="section white"><div class="container"><p class="eyebrow">Recorrido</p><h2>${p.recorridoHeading || 'El entorno y la entrada'}</h2>${videoSection}</div></section>`}
  <section class="section"><div class="container"><p class="eyebrow">Galería</p><h2>La propiedad, espacio por espacio</h2>${gallerySection}</div></section>
  <section class="section white"><div class="container"><p class="eyebrow">Información completa</p><h2>${p.detailsHeading || 'Lo que se sabe y lo que todavía debe verificarse'}</h2><div class="detail-grid">${detailItems.map(([title,body])=>`<article><h3>${title}</h3><p${body.startsWith('[') ? ' class="missing"' : ''}>${body}</p></article>`).join('')}</div></div></section>
  <section class="section"><div class="container split"><div><p class="eyebrow">Ubicación y acceso</p>${p.accessHeading === '' ? '' : `<h2>${p.accessHeading || 'Contexto útil, sin exponer la dirección.'}</h2>`}</div><div><p${p.access ? '' : ' class="missing"'}>${p.access || '[Municipio, vereda o sector general; tiempos aproximados; tipo y estado de la vía.]'}</p><p class="small muted">La dirección exacta, el número de puerta y los datos del propietario no se publican.</p></div></div></section>
  ${p.hideUses ? '' : `<section class="section white"><div class="container"><p class="eyebrow">Usos posibles</p><h2>Según la información confirmada</h2><div class="uses">${p.uses.map(u=>`<span class="use">${u}</span>`).join('')}</div></div></section>`}
  <section id="contacto-propiedad" class="section forest"><div class="container split"><div><p class="eyebrow" style="color:#d9b594">Siguiente paso</p><h2>¿Quiere conocer más?</h2><p>Escríbame para recibir la ficha confirmada o coordinar una conversación sobre esta propiedad.</p></div><div><div class="btn-row"><a class="btn light" href="${propertyWhatsApp}" target="_blank" rel="noopener">Solicitar información por WhatsApp</a><a class="btn light" href="${GOOGLE_FORM_URL}" target="_blank" rel="noopener">Agendar una llamada o visita</a></div><p class="small" style="margin-top:16px">El mensaje de WhatsApp identificará automáticamente esta propiedad. El formulario permite compartir su presupuesto, plazo y método de contacto preferido.</p></div></div></section>
  <section class="section"><div class="narrow"><div class="disclosure">La información de esta propiedad ha sido suministrada por su propietario o representante y puede estar sujeta a cambios. El comprador deberá realizar su propia debida diligencia legal, financiera y técnica antes de tomar una decisión de compra.</div>${p.details ? templateChecklist() : ''}</div></section>
  `; }

function templateChecklist() { return `<div style="margin-top:54px"><p class="eyebrow">Control antes de publicar</p><h2>Lista de verificación</h2><div class="process"><article><h3>Autorización</h3><p>Autorización de promoción confirmada por escrito.</p></article><article><h3>Hechos</h3><p>Precio, áreas, distribución, servicios, ubicación general y disponibilidad verificados.</p></article><article><h3>Documentos</h3><p>Propiedad o representación, impuestos y documentos disponibles revisados o claramente señalados como pendientes.</p></article><article><h3>Medios</h3><p>Fotografías y video autorizados, ordenados, comprimidos y sin datos privados visibles.</p></article><article><h3>Contacto</h3><p>WhatsApp con mensaje prellenado, Google Form y hoja de respuestas probados desde un teléfono.</p></article><article><h3>Revisión final</h3><p>Ortografía, enlaces, conversión de moneda fechada, visualización móvil y última confirmación del propietario.</p></article></div></div>`; }

function shell(content) { return `
  <div class="topbar"><div class="container"><span>Texas · Antioquia</span><span>Una conversación clara antes de cada decisión</span></div></div>
  <header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><img class="brand-logo" src="assets/brand/michelle-jaramillo-logo.png" alt="Michelle Jaramillo"><span class="brand-sector">Real Estate</span></a><button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button><nav class="nav-links"><a href="index.html">Inicio</a><a href="propiedades-colombia.html">Colombia</a><a href="propiedades-que-buscamos.html">Qué buscamos</a><a href="bienes-raices-texas.html">Texas</a><a href="sobre-michelle.html">Sobre Michelle</a><a href="contacto.html">Contacto</a></nav></div></header>
  <main>${content}</main>
  <aside class="trec-notices" aria-label="Avisos regulatorios de Texas"><div class="container"><strong>Avisos regulatorios de Texas</strong><div><a href="assets/legal/Michelle_Jaramillo_IABS_2026.pdf" target="_blank" rel="noopener">TREC Information About Brokerage Services</a><a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf" target="_blank" rel="noopener">Texas Real Estate Commission Consumer Protection Notice</a></div></div></aside>
  <footer class="site-footer"><div class="container"><div class="footer-grid"><div><div class="footer-logo-wrap"><img class="footer-logo" src="assets/brand/michelle-jaramillo-logo.png" alt="Michelle Jaramillo"><span class="footer-brand-sector">Real Estate</span></div><h3>Bienes raíces entre Texas y Colombia.</h3><p class="small">Acompañamiento personal para explorar el lugar donde puede comenzar su próximo capítulo.</p></div><div><strong>Explorar</strong><p class="small"><a href="propiedades-colombia.html">Propiedades en Colombia</a><br><a href="propiedades-que-buscamos.html">Propiedades que buscamos</a><br><a href="bienes-raices-texas.html">Bienes raíces en Texas</a><br><a href="sobre-michelle.html">Sobre Michelle</a></p></div><div><strong>Contacto</strong><p class="small"><a href="${GENERAL_WHATSAPP}" target="_blank" rel="noopener">WhatsApp · +1 (704) 488-1409</a><br><a href="mailto:${EMAIL_ADDRESS}">${EMAIL_ADDRESS}</a><br><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener">Instagram · @jaramillorealestate</a><br><a href="${FACEBOOK_URL}" target="_blank" rel="noopener">Facebook · Jaramillo Real Estate</a></p></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Michelle Jaramillo · Jaramillo Real Estate</span><span>Información sujeta a verificación.</span></div></div></footer>
  <a class="floating-wa" href="${GENERAL_WHATSAPP}" target="_blank" rel="noopener" aria-label="Contactar a Michelle por WhatsApp">WhatsApp · contacto</a>`; }

const page = document.body.dataset.page || 'home';
document.getElementById('app').innerHTML = shell((pages[page] || pages.home)());
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? '×' : '☰'; });

// Meta Pixel events
(function(){ if(!window.fbq) return; const p=document.body.dataset.page||'home'; const prop=document.querySelector('.property-hero h1');
 if(prop) fbq('track','ViewContent',{content_name:prop.textContent.trim(),content_category:'Propiedad',content_ids:[p]});
 document.addEventListener('click',e=>{const a=e.target.closest('a'); if(!a) return; const h=a.href||'';
  if(h.includes('wa.me')) fbq('track','Contact',{content_name:prop?prop.textContent.trim():p,method:'WhatsApp'});
  else if(h.includes('docs.google.com/forms')) fbq('track','Lead',{content_name:prop?prop.textContent.trim():p,method:'Formulario'});
 });})();
