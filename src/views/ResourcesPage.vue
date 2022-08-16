<template>
    <div class="container">
      <h1 class="resource-title">INFORMATION FOR IMPORTING DOGS AND CATS</h1>
      <div class="section">
        <h2 class="section-title">Personal Import</h2>
        <p class="word-block">Dogs and puppies entering the USA for personal pets, Rabies vaccination certificate is not required. However, you must have a heath document or passport proving the dogs' readiness for travel, and the dogs lived in a country with low or no risk for at least 6 months or since birth. The dogs must be at least 8 weeks of age.</p>
      </div>
      <div class="section">
        <h2 class="section-title">Commercial Import</h2>
        <p class="word-block"> Puppies and dogs entering the United States intended for resale or adoption must be at least 6 months of age, The dogs must be in good health and vaccinated for rabies, distemper, hepatits, leptospirosis, parvovirus, and parainfluenza virus, Heath and vaccination must be issued in English by a veterinarian with  a valid license to practice veterinary medicine in the country of export. Commercial import also need an import permit issued by Animal Care/USDA0</p>
        <h3>Bring in Dogs and Puppies from High Rabies Risk countries (click here for list of countries)</h3>
      </div>
      
      <div class="section">
        <h2 class="section-title">For both personal and commercial import</h2>
        <ol class="word-block">
          <li>Be at least 6 months old</li>
          <li>Have a valid rabies vaccination certificate, Rules vary depending on whether the dog was vaccinated in the United States or in a foreign country, check CDC for more detail</li>
          <li>Have an ISO-compatible microchip for identification listed on their rabies vaccination certificate</li>
          <li>Meet the requirements of either Option A, B, or C (check CDC for more detail about A. B, or C options)</li>
          <li>If for commercial import, must also meet the additional vaccination and import permit requirement by Animal Care/USDA </li>
        </ol>
      </div>

      <div class="section">
        <h2 class="section-title">Cats and Kittens</h2>
        <p class="word-block">A general certificate of health is not required by CDC for entry of pet cats into the United States, although some airlines or states may require them. However, pet cats are subject to inspection at ports of entry and may be denied entry into the United States if they have evidence of an infectious disease that can be transmitted to humans. If a cat appears to be ill, further examination by a licensed veterinarian at the owner’s expense might be required at the port of entry.</p>
        <p class="word-block">Cats are not required to have proof of rabies vaccination for importation into the United States. However, some states require vaccination of cats for rabies, so it is a good idea to check with state and local health authorities at your final destination.</p>
        <p class="word-block">Exotic cats, such as Bengal cats and Savannah cats must be cleared by USFWS upon import. This even applies to cats that are more than four generations removed from the pure bred specimen, which are classified as domestic cats by USDA.</p>
      </div>
    <!--link for usda import permit-->
    <!--link for cdc dogs import-->
    </div>
</template>


<script>

// @ is an alias to /src
export default {
  name: "ResourcesPage",
  components: {

  },
};
</script>

<style lang="scss" scoped>

.resource-title {
  font-weight: bold;
  color: #00afea;
  font-size: 40px;
  margin-top:50px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 30px;
}


.section {
    vertical-align: top;
    display: inline-block;
    width: 1000px;
    margin: 40px 0px;
}

.word-block {
  line-height: 1.5;
  margin-bottom: 25px;
}
</style>