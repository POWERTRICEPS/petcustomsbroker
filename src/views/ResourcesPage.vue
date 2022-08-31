<template>
<NavBar :transparent=false />
  <div class="empty">
    <h1>       z</h1>
  </div>
    <div class="container">
      
      <img src="../assets/puppy.png" v-show="!mobile" class="puppypic">
      <img src="../assets/3kitten.png" v-show="!mobile" class="kittenpic">
      <h1 class="resource-title">INFORMATION FOR IMPORTING DOGS AND CATS</h1>

      <h1 class="pet-section">Dogs from Countries Without High Risk of Rabies</h1>
      <div class="section">
        <h2 class="section-title">Personal Import</h2>
        <p class="word-block">Dogs and puppies entering the USA for personal pets, Rabies vaccination certificate is not required. However, you must have a heath document or passport proving the dogs' readiness for travel, and the dogs lived in a country with low or no risk for at least 6 months or since birth. The dogs must be at least 8 weeks of age.</p>
      </div>
      <div class="section">
        <h2 class="section-title">Commercial Import</h2>
        <p class="word-block"> Puppies and dogs entering the United States intended for resale or adoption must be at least 6 months of age, The dogs must be in good health and vaccinated for rabies, distemper, hepatits, leptospirosis, parvovirus, and parainfluenza virus, Heath and vaccination must be issued in English by a veterinarian with a valid license to practice veterinary medicine in the country of export. Commercial import also need an import permit issued by Animal Care/USDA.</p>
      </div>
      
      <div class="section">
        <h1 class="pet-section">Dogs from High-Risk Countries for Dog Rabies</h1>
        <h2 class="section-title">For both personal and commercial import</h2>
        <p class="word-block">Starting on June 10, 2022, options for bringing dogs from a high-risk country for rabies in the past 6 months will depend on where the dogs’ rabies vaccinations were administered, and the number of dogs being imported. All dogs from high-risk countries must:</p>
        <ol class="word-block">
          <li>Be at least 6 months old</li>
          <li>Have a valid rabies vaccination certificate. Rules vary depending on whether the dog was vaccinated in the United States or in a foreign country (see below).</li>
          <li>Have an ISO-compatible microchip for identification listed on their rabies vaccination certificate.</li>
          <li>Meet the requirements of either Option A, B, or C below.</li>
          <li>For commercial import, must also meet the additional vaccination and import permit requirement by Animal Care/USDA </li>
        </ol>
        <p class="word-block"><strong class="bold">Option A</strong>: A valid US-Issued rabies vaccination certificate (RVC). There is no limit to the number of dogs with valid US-issued rabies vaccination certificates. Your dog must:</p>
         <ol class="word-block">
          <li>Be at least 6 months old</li>
          <li>Have a valid rabies vaccination certificate. Rules vary depending on whether the dog was vaccinated in the United States or in a foreign country (see below).</li>
          <li>Have an ISO-compatible microchip for identification listed on their rabies vaccination certificate.</li>
          <li>Be accompanied by a valid US-issued rabies vaccination certificate upon arrival
            <ol type="a">
              <li>The rabies vaccine must be administered by a US-licensed veterinarian in the United States on or after 12 weeks of age and at least 28 days before arrival if it is the dog’s first vaccination.</li>
              <li>Booster rabies vaccines administered in the United States after 15 months of age are valid immediately.</li>
            </ol>
          </li>
          <li>Arrive at one of the 18 airports with a CDC quarantine station
          <ol>
            <p>Anchorage (ANC), Atlanta (ATL), Boston (BOS), Chicago (ORD), Dallas (DFW), Detroit (DTW), Honolulu (HNL), Houston (IAH), Los Angeles (LAX), Miami (MIA), Minneapolis (MSP), New York (JFK), Newark (EWR), Philadelphia (PHL), San Francisco (SFO), San Juan (SJU), Seattle (SEA), and Washington DC (IAD).</p>
          </ol>
          </li>
          <p class="bold italics">Important Note: Expired US rabies vaccination certificates will NOT be accepted. If the US-issued rabies vaccination certificate has expired, you must enter using Option B or C (see below).</p>
        </ol>  
        <p class="word-block"><strong class="bold">Option B</strong>: Apply for and obtain a valid CDC Dog Import Permit before arrival. CDC will only issue permits for 2 dogs per person during the suspension.</p>
        <ol class="space word-block">
          <li><strong class="bold">You must apply online for a <a href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/apply-dog-import-permit.html">CDC Dog Import Permit</a>. It is recommended to apply at least 6 weeks before intended travel. Before beginning the process, your dog must:</strong></li>
          <ul>
            <li>Be at least 6 months old</li>
            <li>Have a microchip</li>
            <li>Have a valid foreign rabies vaccination certificate</li>
            <li>Have a valid rabies serologic titer from an approved laboratory</li>
          </ul>
          <li>Arrive at one of the 18 airports with a CDC quarantine station:</li>
          <ol>
            <p>Anchorage (ANC), Atlanta (ATL), Boston (BOS), Chicago (ORD), Dallas (DFW), Detroit (DTW), Honolulu (HNL), Houston (IAH), Los Angeles (LAX), Miami (MIA), Minneapolis (MSP), New York (JFK), Newark (EWR), Philadelphia (PHL), San Francisco (SFO), San Juan (SJU), Seattle (SEA), and Washington DC (IAD).</p>
          </ol>
        </ol> 
        <p class="bold italics space">Important Note: Permits will not be issued at ports of entry. Appeals are not permitted.</p>
        <p class="word-block"><strong class="bold">Option C</strong>: For dogs without a US-issued rabies vaccination certificate or a <strong class="italics">CDC Dog Import Permit</strong>. Please note: This is the only option for persons importing 3 or more dogs into the United States.</p>
        <ol class="word-block">
          <li>Appear healthy on arrival</li>
          <li>Be at least 6 months old</li>
          <li>Have an ISO-compatible microchip number listed on their rabies vaccination certificate</li>
          <li>Be accompanied by a valid rabies vaccination certificate upon arrival
            <ul>
              <li>The rabies vaccine must be administered by a licensed veterinarian on or after 12 weeks of age and at least 28 days before arrival if it is the dog’s first vaccination.</li>
              <li>Booster rabies vaccines administered after 15 months of age are valid immediately.</li>
            </ul>
          </li>
          <li>Make a reservation at one of the CDC-approved animal care facilities with necessary follow-up services* at importer’s (owner’s) expense.</li>
          <li>The CDC-approved animal care facility will determine if the dog has a valid foreign-issued RVC and serology titer.
            <ul>
              <li>If <strong class="bold">invalid</strong> foreign-issued RVC: dog will be denied entry.</li>
              <li>If <strong class="bold">valid</strong> foreign-issued RVC: CDC-approved facility will determine if the dog has a valid rabies serology titer**</li>
              <ul>
                <li>If <strong class="bold">valid</strong> titer: Each dog must be examined and re-vaccinated with a US-licensed rabies vaccine by a USDA-accredited veterinarian at a CDC-approved animal care facility upon arrival at the importer’s (owner’s) expense.</li>
                <li>If <strong class="bold">invalid</strong> titer or no titer: Each dog must have a reservation to quarantine at a CDC-approved animal care facility for 28 days after the exam and re-vaccination at the importer’s (owner’s) expense.</li>
              </ul>
            </ul>
          </li>

        </ol>
        <p class="bold italics">Important Note: Option C is the only option for people with 3 or more foreign-vaccinated dogs. Dogs MUST enter at the airport associated with the CDC-approved animal care facility where they have a reservation, and the reservation MUST be made before arrival in the United States.</p>
      </div>

      <div class="section">
        <h2 class="pet-section">Cats and Kittens</h2>
        <p class="word-block">A general certificate of health is not required by CDC for entry of pet cats into the United States, although some airlines or states may require them. However, pet cats are subject to inspection at ports of entry and may be denied entry into the United States if they have evidence of an infectious disease that can be transmitted to humans. If a cat appears to be ill, further examination by a licensed veterinarian at the owner’s expense might be required at the port of entry.</p>
        <p class="word-block">Cats are not required to have proof of rabies vaccination for importation into the United States. However, some states require vaccination of cats for rabies, so it is a good idea to check with state and local health authorities at your final destination.</p>
        <p class="word-block">Exotic cats, such as Bengal cats and Savannah cats must be cleared by USFWS upon import. This even applies to cats that are more than four generations removed from the pure bred specimen, which are classified as domestic cats by USDA.</p>
        <p class="word-block">1. Link for CDC dog import permit application</p>
        <a href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/apply-dog-import-permit.html"><p class="word-block">https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/apply-dog-import-permit.html</p></a>
        <p class="word-block">2. Link for USDA dog import permit application</p>
        <a href="https://www.aphis.usda.gov/aphis/ourfocus/animalwelfare/dog-import-into-us/import-live-dogs-into-us"><p class="word-block">https://www.aphis.usda.gov/aphis/ourfocus/animalwelfare/dog-import-into-us/import-live-dogs-into-us</p></a>
        <p class="word-block">3. Link for high-risk countries for dog rabies</p>
        <a href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/high-risk.html"><p class="word-block">https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/high-risk.html</p></a>
      
      </div>
    </div>
  <div class="empty"></div>
<FooterBar/>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
// @ is an alias to /src
export default {
  name: "ResourcesPage",
  components: {
     NavBar,
    FooterBar   
  },
  data() {
        return {
            mobile: false,
            windowWidth: null
        }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
  },
  methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1100) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
        }
  }
};
</script>

<style lang="scss" scoped>
.empty {
  margin-bottom: 125px;
}
.longpic {
  margin-top:100px;
  margin-bottom:100px;
  height:200px;
  width:100%;
}

.puppypic {
  position:absolute;
  top: 8%;
  left: 79%;
  width: auto;
  height: 380px;
  
}

.kittenpic {
  position:absolute;
  top: 70.7%;
  left: 60%;
  width: auto;
  height: 600px;
  
}

ol {
  padding-left: 75px;
}

ul {
  padding-left: 75px;
}

.space {
  margin-bottom: 20px;
}

.resource-title {
  font-weight: bold;
  color: #00afea;
  font-size: 40px;
  margin-bottom:50px;
}

.pet-section {
  font-weight: bold;
  font-size: 35px;
  margin-bottom:30px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 30px;
}

.bold {
  font-weight: bold;
}

.italics {
  font-style: italic;
}

.section {
    vertical-align: top;
    display: inline-block;
    width: auto;
    margin: 40px 0px;
}

.word-block {
  line-height: 1.5;
  
  margin: 0px 100px 25px 0px;
  width:100%;
}

.empty {
  color: rgba(1,1,1,0);
  margin-bottom: 125px;
}
</style>