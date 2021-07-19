<!-- eslint-disable -->
<template>
  <v-card>
    <v-card-text>
      <div class="text-center mb-5">
        <h1 class="display-2 font-weight-bold">The 2022 Toyota Tundra</h1>
      </div>
      <div class="ma-5">
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

        <p>The new Tundra will debut in the coming months and should arrive in the U.S. by the end of the year.</p>

        <p>We're getting a clearer look at the truck's imposing new front end, which features a black grille with three
        integrated LED light bars. "Toyota" script sits up top with a stamped "Tundra" badge in the lower front bumper,
        which has the same camo-like pattern as the fender flares. A new set of TRD Pro-specific wheels are mounted with 285/65
        Falken Wildpeak all-terrain tires. This example also has a red interior.</p>

        <p>The new Tundra is expected to use a new twin-turbocharged V-6 engine, and Toyota released an image of the new truck's
        engine cover this week. The photo showed an "iForce MAX" badge with blue lettering, suggesting a new hybrid powertrain,
        which surely could be an option. Another major change should be seen in the rear suspension setup, which is expected to
        replace the old truck's leaf springs with coil springs, air springs, or possibly an independent rear suspension.</p>

        <p>The Tundra should be among the first vehicles on a new Toyota New Global Architecture (TNGA) platform for body-on-frame
        trucks, which will also underpin the Sequoia, Tacoma and 4Runner. The new platform should convert the Tundra to lighter-weight
        construction materials and improve ride quality and safety. The Tundra may also shift from leaf-spring to coil-spring suspension.</p>
        
        <p class="font-italic font-weight-bold">Font: caranddriver.com and gearpatrol.com</p>
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
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/SixthPost/2021-toyota-tundra-nightshade-003-1619206966.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/SixthPost/2021-toyota-tundra-nightshade-004-1619206603.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/SixthPost/2021-toyota-tundra-trail-edition-003-1619206477.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/SixthPost/2021-toyota-tundra-trail-edition-006-1619207126.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/SixthPost/2022-toyota-tundra-iforcemax-badge-1623765623.jpg" }
      ]
    };
  }
};
</script>
