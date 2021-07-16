<!-- eslint-disable -->
<template>
  <v-card>
    <v-card-text>
      <div class="text-center mb-5">
        <h1 class="display-2 font-weight-bold">THE ALL-NEW 2021 MERCEDES-BENZ GLA SUV</h1>
        <div class="display-1">Drive further. Ride higher. Live better.</div>
      </div>
      <div class="ma-5">
        <v-img
          src="https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/Mercedes-Benz+GLA-Class+02.jpg"
          contain
          max-height="400"
          class="mb-5"
        ></v-img>
        <h2>DESIGN</h2>
        <p>More than a commanding view of the road ahead, the new second-generation GLA offers a
        rewarding view of what's next. It not only puts more sport in compact SUVs, it puts more you.</p>

        <h2>Fit more in. Fit in more.</h2>
        <p>Within a more nimble length, the new GLA gives you more space to ride, more room to shop,
        stow and be spontaneous. A power liftgate and 40/20/40 rear seats welcome your gear.</p>

        <h2>Twin screens. In two sizes.</h2>
        <p>A pair of 7-inch screens help keep you informed, entertained and in command. One's for
        gauges, one's a touchscreen. Available 10.25-inch versions let you visualize, and customize,
        even more.</p>

        <h2>Dress it up now. Change it up later.</h2>
        <p>A spectrum of finishes is just the start of GLA style. The AMG Line adds sporty pedals, seats
        and steering wheel. Available 64-color ambient lighting lets you choose the hues that suit your
        mood.</p>

        <h2>Three looks, all sporty. Six wheels, all big.</h2>
        <p>Show how you roll on 18, 19 or 20-inch wheels. The AMG Line includes a chrome grille, plus
        AMG® styling and wheels. Or take it the dark side with the Night Package.
        Settle in. But never settle for less.
        Even a compact Mercedes-Benz goes big on luxury. Front seats are power with memory.
        Climate control is dual-zone and double-filtered. Opt for the power Panorama roof and even the
        sky feels bigger.</p>

        <v-img
          src="https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/2021-GLA-SUV-CH-3-1-DR.jpg"
          contain
          max-height="400"
          class="mb-5"
        ></v-img>

        <h2>VERSATILITY</h2>
        <p>From a tight corner of the city, to a tight corner of a back road, the GLA is agile and easy to
        maneuver. Turbo power and a solid stance make it quick on its feet, confident in your hands.</p>

        <h2>Fully independent. With true team spirit.</h2>
        <p>Each wheel tackles bumps on its own for composed comfort, but they're all in for crisp handling.
        Optional adaptive damping offers driver-selectable modes.</p>

        <h2>A torrent of turbo torque.</h2>
        <p>A new generation of power for the GLA delivers 221 turbo horses from a compact 2.0 liters. Its
        258 lb-ft of torque is at your command over a wide range of rpm, for quick response anytime.</p>

        <h2>Geared to please.</h2>
        <p>The dual-clutch 8-speed is a quicker, smoother automatic, or a paddle-shifted manual on
        demand. With DYNAMIC SELECT, one console control calls up a range of performance
        profiles.</p>

        <h2>Sun, snow or rain. Tarmac or terrain.</h2>
        <p>Light, nimble variable-torque 4MATIC® can send power from front wheels to rear based on
        each tire's real-time grip. A suite of engineering features heightens off-road capability.</p>

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

        <h2>INNOVATION</h2>
        <p>People are talking. The Mercedes-Benz User Experience (MBUX) drives a new generation of
        user-friendly tech. Its natural, intuitive speech interface is easy to learn because it can learn
        you.</p>

        <h2>Say what you want, your way.</h2>
        <p>Along with its own intelligent voice assistant, Apple CarPlay™ and Android Auto are standard,
        too. Wireless charging is available, too.</p>

        <h2>Keep your world, and car, close.</h2>
        <p>Mercedes me connect makes ownership easy. Remote-start, lock or check your car, or book
        service, all from your phone. And add in-car WiFi for up to eight devices for a low monthly rate.</p>

        <h2>Tell it, tap it, watch it, and go.</h2>
        <p>Say "Hey, Mercedes, it's cold in here" or "I need a coffee," and MBUX controls many features.
        Among them, available MB Navigation, which can use live footage of a turn to guide you.</p>

        <h2>Change how you change lanes.</h2>
        <p>Next-gen options help de-stress driving: Tap a turn signal to make a lane change. Adaptive
        cruise can help steer, slow for exits, or stop-and-go in traffic. Sensors can even "cover your
        ears" before a crash.</p>
        <br />
        <p class="font-italic font-weight-bold">Font: mbusa.com</p>
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
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/2021-GLA-SUV-CL-1-3-1-DR.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/2021-GLA-SUV-CL-1-3-2-DR.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/2021-GLA-SUV-CL-3-2-DR.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/2021-GLA-SUV-CR-1-4-DR.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/2021-GLA-SUV-GAL-002-L-FE-DR.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/Mercedes-Benz+GLA-Class.jpg" }
      ]
    };
  }
};
</script>
