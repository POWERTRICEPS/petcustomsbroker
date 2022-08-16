<template>
    <div class="row">
      <div class="column">
        <h1 class="clearance-section"> Documents for clearance</h1>
        <ol class="word-block">
          <li>Power of Attorney</li>
          <li>Health Documents/Certificate/Passport/Permit</li>
          <li>Invoice/Pro Forma Invoice/Receipt</li>
          <li>Air Waybill</li>
        </ol>
        <ul>
          <li><router-link class="poa-link" :to="{ name: 'Personal'}">Personal/Non Commercial Import Power of Attorney</router-link></li>
          <li><router-link class="poa-link" :to="{ name: 'Business'}">Business/Commercial Import Power of Attorney</router-link></li>
          <li><h2 class="poa-link">Pro forma Invoice Template (if you don't have invoice from the shipper/breeder, you can use this template to generate one to declare value)</h2></li>
        </ul>
      </div>
      <div class="column">
        <h1 class="clearance-section">Procedures</h1>
        <ol class="word-block">
          <li>Send us POA and documents prior to shipment arrival</li>
          <li>Pay us via Zelle, Paypal, or Venmo</li>
          <li>We will send you pickup document and notify you once customs released</li>
          <li>You should check the flight status and arrange pickup at the airlines' cargo facility.
Usually it takes 1 to 2 hours for the pets to be transferred to the cargo facility after landing</li>
        </ol>
      </div>
    </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: "ClearancePage",
  components: {
  },
};
</script>

<style lang="scss" scoped>

.row {
  justify-content: space-between;
}

.row:after {
  content: "";
  display: table;
  clear: both;
  
}

.column {
  float: left;
  width: 30%;
  margin: 80px 0px 100px 250px;
  
}

.clearance-section {
  font-weight: bold;
  margin-bottom: 30px;
}


.word-block {
  line-height: 1.5;
  margin-bottom: 25px;
}

.poa-link {
  line-height: 1.5;
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 16px;
}

</style>