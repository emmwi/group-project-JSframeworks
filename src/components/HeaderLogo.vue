<template>
  <header>
    <div id="header">
      <img src="../assets/Logo.jpg" alt="logo" />
      <h1>Räkna Lätt</h1>
    </div>
  </header>
</template>

<script></script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  #header {
    display: flex;
  }

  h1 {
    margin: auto 0rem;
    font-family: 'Expletus Sans', sans-serif;
  }

  img {
    border-radius: 100%;
    height: auto;
    width: 7rem;
    margin: 0.5rem 1rem;
  }
  header {
    background: linear-gradient(
      180deg,
      rgba(220, 165, 114, 1) 0%,
      rgba(220, 165, 114, 0.41) 72%,
      rgba(220, 165, 114, 0) 100%
    );
    margin-bottom: 1rem;
  }

  /*style för tablett och desktop  */
  @media only screen and (min-width: 600px) {
    img {
      border-radius: 100%;
      height: auto;
      width: 11rem;
      margin: 1rem 2rem;
      justify-content: center;
    }
    h1 {
      margin: auto 0rem;
      font-family: 'Expletus Sans', sans-serif;
      font-size: 3rem;
    }
  }
</style>
