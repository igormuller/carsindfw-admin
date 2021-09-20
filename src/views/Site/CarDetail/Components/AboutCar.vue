<template>
  <div>
    <v-card class="mt-3">
      <div style="color:#00205b" class="pl-4 pa-4">
        <div>
          <h2>
            {{ carDetail.type_front }} /
            {{ carDetail.make_name }}
            {{ carDetail.model_name }}
          </h2>
        </div>
        <strong>{{ carDetail.trim }}</strong>
      </div>
      <v-card-text>
        <v-row align="center">
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/engine.svg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.engine }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/fuel-type.svg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.fuel_type_front }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/transmission.svg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.transmission_front }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/seats.svg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.seats }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/mileage.svg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.miles }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/drivetrain.svg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.drive_type }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card
      class="mt-3 pa-3 text-center"
      color="#acc0e3"
      style="color: #00205b;"
    >
      <h1>{{ carDetail.value | currency }}</h1>
    </v-card>
    <v-card class="mt-3 pa-3 text-center">
      <v-card-title style="color:#00205b"><h3>Optionals</h3></v-card-title>
      <v-chip
        v-for="(feature, key) in carDetail.features"
        :key="key"
        class="ma-3 white--text"
        color="#00205b"
      >
        {{ feature }}
      </v-chip>
    </v-card>
    <v-card class="mt-3 pa-3">
      <v-card-title style="color:#00205b">
        <h3>Dealer's Description</h3>
      </v-card-title>
      <v-card-text>
        <h3>{{ carDetail.description }}</h3>
      </v-card-text>
    </v-card>
    <v-card class="mt-3 pa-3">
      <v-card-title style="color:#00205b">
        <h3>Details</h3>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <p class="mt-n3">
              <strong>Exterior Color:</strong>
              {{ carDetail.color_ext }}
            </p>
            <p class="mt-n3">
              <strong>Interior Color:</strong>
              {{ carDetail.color_int }}
            </p>
            <p class="mt-n3">
              <strong>Transmission:</strong>
              {{ carDetail.transmission_front }}
            </p>
            <p class="mt-n3">
              <strong>Mileage:</strong>
              {{ carDetail.miles }}
            </p>
            <p class="mt-n3">
              <strong>Engine:</strong>
              {{ carDetail.engine }}
            </p>
            <p class="mt-n3">
              <strong>Doors:</strong>
              {{ carDetail.doors }}
            </p>
          </v-col>
          <v-col>
            <p class="mt-n3">
              <strong>Trim.:</strong>
              {{ carDetail.trim }}
            </p>
            <p class="mt-n3">
              <strong>Year Model:</strong>
              {{ carDetail.year }}
            </p>
            <p class="mt-n3">
              <strong>MPG City:</strong>
              {{ carDetail.car_description.epa_mileage_city }}
            </p>
            <p class="mt-n3">
              <strong>MPG Highway:</strong>
              {{ carDetail.car_description.epa_mileage_street }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-3 pa-5 text-center">
      <v-btn
        :disabled="dialog"
        :loading="dialog"
        outlined
        rounded
        color="#00205b"
        @click="showVINHistory()"
      >
        <v-icon left>
          mdi-magnify
        </v-icon>
        VIN {{ carDetail.vin_number }}
      </v-btn>
    </v-card>
    <v-card class="mt-3 pa-5">
      <v-card-title style="color:#00205b">
        <h3>Calculator</h3>
      </v-card-title>
      <hr />
      <v-card-text>
        <v-row class="text-center">
          <v-col>
            <h1>$ {{ calculator.value_month }}</h1>
            <p>
              Estimated payment for {{ calculator.number_month }} months at
              {{ calculator.tax }}% APR
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12" md="5">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="calculator.value"
                  label="Value Car"
                  v-mask="currencyMask"
                  prefix="$"
                  dense
                  background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="calculator.down_payment"
                  label="Down Payment"
                  v-mask="currencyMask"
                  prefix="$"
                  dense
                  background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="calculator.trade_value"
                  label="Trade-in Value"
                  v-mask="currencyMask"
                  prefix="$"
                  dense
                  background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-divider inset vertical></v-divider>
          <v-col cols="12" md="5">
            <v-row>
              <v-col>
                <v-btn-toggle
                  v-model="calculator.number_month"
                  dense
                  borderless
                  background-color="blue"
                  active-class="blue"
                >
                  <v-btn :value="36"><span>36</span></v-btn>
                  <v-btn :value="48"><span>48</span></v-btn>
                  <v-btn :value="60"><span>60</span></v-btn>
                  <v-btn :value="72"><span>72</span></v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="calculator.tax"
                  label="Interest Rate (APR)"
                  v-mask="percentMask"
                  dense
                  background-color="white"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="calculator.tax_sales"
                  label="Sales Tax"
                  v-mask="percentMask"
                  dense
                  background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="myPMT()" color="#00205b" class="pa-5 white--text">
          calculator
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialog" scrollable width="700">
      <v-card :loading="loadingVIN">
        <v-simple-table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in dataVIN" :key="key">
              <td>{{ item.Variable }}</td>
              <td>{{ item.Value }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import createNumberMask from "text-mask-addons/dist/createNumberMask";

export default {
  name: "AboutCar",
  props: ["carDetail"],
  data: function() {
    return {
      currencyMask: createNumberMask({
        prefix: false,
        allowDecimal: true,
        includeThousandsSeparator: false,
        integerLimit: 8
      }),
      percentMask: createNumberMask({
        prefix: false,
        allowDecimal: true,
        includeThousandsSeparator: false,
        integerLimit: 3
      }),
      dialog: false,
      loadingVIN: false,
      dataVIN: [],
      calculator: {
        value: this.carDetail.value,
        down_payment: null,
        trade_value: null,
        number_month: 60,
        tax: 4.33,
        tax_sales: null,
        value_month: null
      }
    };
  },
  methods: {
    async showVINHistory() {
      this.dialog = true;
      this.loadingVIN = true;
      await this.$http
        .get(`check-vin/${this.carDetail.vin_number}`)
        .then(res => (this.dataVIN = res.data.Results));
      this.loadingVIN = false;
    },
    myPMT() {
      let calc = this.calculator;
      let value =
        parseFloat(calc.value) -
        parseFloat(calc.down_payment ? calc.down_payment : 0) -
        parseFloat(calc.trade_value ? calc.trade_value : 0);

      if (calc.tax_sales) {
        value += (parseFloat(calc.tax_sales) * value) / 100;
      }

      let pmt_value = 0;
      let rate = eval(parseFloat(calc.tax) / (12 * 100));

      if (rate == 0) {
        pmt_value = -value / calc.number_month;
      } else {
        let x = Math.pow(1 + rate, calc.number_month);
        pmt_value = (rate * (x * value)) / (-1 + x);
      }
      this.calculator.value_month = parseFloat(pmt_value).toFixed(0);
    }
  },
  mounted() {
    this.myPMT();
  }
};
</script>
