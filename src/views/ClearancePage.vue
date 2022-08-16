<template>
    <div class="row">
      <div class="column">
        <h1 class="clearance-section"> Documents for clearance</h1>
        <ol>
          <li>Power of Attorney</li>
          <li>Health Documents/Certificate/Passport/Permit</li>
          <li>Invoice/Pro Forma Invoice/Receipt</li>
          <li>Air Waybill</li>
        </ol>
        <h2>Personal/Non Commercial Import Power of Attorney</h2>
        <h2>Business/Commercial Import Power of Attorney</h2>
      </div>
      <div class="column">
        <h1 class="clearance-section">Procedures</h1>
        <ol>
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
  width: 35%;
  background-color: red;
  margin: 50px 100px;
  
}

.clearance-section {
  font-weight: bold;
  margin-bottom: 30px;
}

</style>