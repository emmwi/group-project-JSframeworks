<template>
  <div class="container">
    <div class="text-container">
      <h1 class="heading">Ett digitalt matematikverktyg som gör skillnad</h1>
      <div class="text">
        Räkna Lätt-appen är ett kraftfullt verktyg för matematikundervisning i
        grundskolan. Den ger lärare snabb och exakt insikt i varje elevs
        framsteg, vilket möjliggör skräddarsydd undervisning för att möta
        individuella behov. Genom att differentiera undervisningen skapar appen
        en mer inkluderande och effektiv lärandemiljö för alla elever.
      </div>
      <router-link to="/login">
        <b-button variant="primary" class="login">Logga in</b-button>
      </router-link>
    </div>
    <div class="image-container">
      <img
        src="../assets/teacher.jpg"
        alt="backgroundsbild"
        class="background-img"
      />
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    /* flex-wrap: wrap-reverse; */
    flex-direction: column-reverse;
    align-items: center;
    width: 80vw;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 2rem;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: 1rem auto;
  }
  .login {
    padding: 1rem;
    font-size: 1rem;
  }
  .image-container {
    text-align: center;
  }

  @media only screen and (min-width: 1000px) {
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }

    .login {
      padding: 2rem;
      font-size: 2rem;
    }

    .text-container {
      flex: 1;
      padding-right: 20px;
    }

    .heading {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .image-container {
      flex: 1;
    }

    .background-img {
      max-width: 100%;
      height: auto;
    }

    .heading {
      color: #1d1d1d;
      text-align: left;
      flex-direction: column;
      margin-top: 1vw;
      margin-bottom: 0.5vw;
      font-family: Buenos Aires Bold Web, sans-serif;
      font-size: 3.5vw;
      line-height: 1.2;
      display: flex;
      position: static;
    }

    .text {
      color: #5b5b61;
      text-align: left;
      flex: 0 auto;
      justify-content: center;
      align-self: auto;
      margin-bottom: 1vw;
      font-family: Buenos Aires Light Web, sans-serif;
      font-size: 1.5vw;
      font-weight: 300;
    }
  }
</style>
