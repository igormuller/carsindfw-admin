<!-- eslint-disable -->
<template>
  <v-card>
    <v-card-text>
      <div class="text-center mb-5">
        <div class="display-1">CONQUER LIFE IN STYLE</div>
        <h1 class="display-2 font-weight-bold">THE ALL-NEW 2022 INFINITI QX60</h1>
      </div>
      <div class="ma-5">
        <v-img
          src="https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-crossover-suv.jpg"
          contain
          max-height="400"
          class="mb-5"
        ></v-img>
        <h2>HARMONY THROUGH DESIGN</h2>
        <p>The all-new QX60’s spacious cabin is home to decadent materials and, subtle yet expressive details
        that help to create a warm, serene retreat for your travels.</p>
        
        <h2>ROOM FOR WHATEVER THE DAY BRINGS</h2>
        <p>Busy lives demand space. So, the all-new QX60 has split-folding second and third-row seats that can create an expansive cargo space behind the driver in addition to QX60’s up to 54.
        1 liters of underfloor storage – perfect for the journey ahead.</p>

        <h2>A PERSONAL VALET WHEN YOUR HANDS ARE FULL</h2>
        <p>With luggage, shopping or kids (or perhaps all three) keeping your hands full, the all-new QX60 has you covered.
        Its available motion-activated liftgate provides access to the cargo space with just a flick of your foot.</p>

        <h2>READY FOR YOUR ARRIVAL BEFORE YOU STEP INSIDE</h2>
        <p>The INFINITI InTouch Service app lets you unlock the doors, start the engine and even warm or cool your QX60 before you enter.
        With just a tap, everything’s ready to go.</p>

        <h2>SERENE COMFORT WITH LEATHER-APPOINTED SEATING FOR UP TO SEVEN</h2>
        <p>Once inside, sink into the beautifully quilted semi-aniline leather seating available on the all-new QX60.
        Third-row access is simple with one-touch second-row seats that effortlessly slide forward for easy and convenient access.</p>

        <h2>YOUR LIFE IS JUST A TAP OR GLANCE AWAY</h2>
        <p>Need quick access to meetings, messages and navigation? The all-new QX60 features wireless Apple CarPlay® and USB-based Android™ Auto,
        displaying your smartphone functions right from a new 12.3-inch touchscreen.</p>

        <v-row justify="center" class="mb-5">
          <v-col
            lg="8"
            offset-lg="0"
          >
            <v-carousel height="400" hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
              >
                <v-img :src="item.src" contain height="400"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <h2>FIND CONFIDENCE IN V6 POWER</h2>
        <p>A versatile SUV needs capable performance. The all-new QX60 has just that with a powerful 3.5-liter V6
        engine and all-new 9-speed automatic transmission.</p>
        <ul>
          <li>9-SPEED AUTO TRANSMISSION</li>
          <li>295 HORSEPOWER</li>
          <li>UP TO 6000 LBS TOWING CAPACITY</li>
        </ul>

        <h2>STREAM AND SURF WHILE ON THE MOVE</h2>
        <p>Kids need entertaining – especially on longer journeys. The all-new QX60’s Wi-Fi hotspot keeps everyone in sync and online
        with mobile internet for up to seven tablets, smartphones or other Wi-Fi devices. Plus, USB ports can be made available across all three rows to support easy charging for everyone.</p>

        <h2>CONFIDENCE INSPIRING TECHNOLOGY WITH PROPILOT ASSIST WITH NAVI-LINK</h2>
        <p>When your to-do list is growing, staying relaxed is key. ProPILOT Assist* with Navi Link can team with Traffic Sign
        Recognition to automatically slow the QX60 to posted speed limits during single-lane highway travel.</p>

        <h2>GETTING YOU THERE WITH GRACE</h2>
        <p>Intricate Kimono-fold patterns within the headlamps, origami-inspired mesh grille – the all-new QX60 compliments
        its powerful proportions with unique, yet subtle Japanese essence.</p>
        
        <p class="font-italic font-weight-bold">Font: infinityusa.com</p>
        <p>
          For buy cars, <v-btn text x-small to="/search">click here</v-btn>
          <br />
          For sell cars, <v-btn text x-small to="/register">click here</v-btn>
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      items: [
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-apple-carplay.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-cargo-space.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-engine.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-kate-hudson.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-propilot-assist-technology.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-wireless-charging.jpg" },
      ]
    };
  }
};
</script>
