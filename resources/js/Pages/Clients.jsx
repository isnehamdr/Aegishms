import React, { useState, useEffect, useCallback, useRef } from 'react';
import GuestLayout from "@/Layouts/GuestLayout";
import { motion } from "framer-motion";
import SEO from '@/Components/SEO';

const Clients = () => {
  const clients = [
    // ... your existing client array (unchanged - keep all your client data)
    { id: 4, logo: 'images/clients/1905.jpg', alt: '1905 Client Logo' },
    { id: 5, logo: 'images/clients/britishcs.jpg', alt: 'British CS Client Logo' },
    { id: 6, logo: 'images/clients/chandragiri.jpg', alt: 'Chandragiri Client Logo' },
    { id: 7, logo: 'images/clients/kgh.jpg', alt: 'KGH Client Logo' },
    { id: 8, logo: 'images/clients/roadhouse.jpg', alt: 'Roadhouse Client Logo' },
    { id: 9, logo: 'images/clients/roadhousecafe.jpg', alt: 'Roadhouse Cafe Client Logo' },
    { id: 10, logo: 'images/clients/soaltee.jpg', alt: 'Soltee Client Logo' },
    { id: 10, logo: 'images/soltee1.png', alt: 'Soltee1 Client Logo' },
    { id: 10, logo: 'images/soltee2.png', alt: 'Soltee2 Client Logo' },
    { id: 10, logo: 'images/soltee3.png', alt: 'Soltee3 Client Logo' },
    { id: 10, logo: 'images/soltee4.png', alt: 'Soltee4 Client Logo' },
    { id: 10, logo: 'images/soltee5.png', alt: 'Soltee5 Client Logo' },
    { id: 10, logo: 'images/icon3.jpeg', alt: 'everyday Client Logo' },
    { id: 10, logo: 'images/icon4.jpeg', alt: 'baranda Client Logo' },
    { id: 11, logo: 'images/clients/amala.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/apex.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/banbas.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/basera.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bayberryhotel.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bhairahawa.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/Bhairawa_logo.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bhotekoshi.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bhrikuti tara.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bisaunigreeneryreosrt.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bodhi villa.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bodhiredsun.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/bodhisuites.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/brickscafe.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/buki.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/central plaza.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/chino.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/cms.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/crystal.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/cuckoo.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/decrown inn.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/dream land.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/drishya.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/durbar hotel-four seasons.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/eden sanepa.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/estop.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/everest-manla-logo.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/galaxy garden.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/gallerypark.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/gorkha hotel.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/green mansion.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/greenvalleyBorder-1.jpg.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/haku.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/himalayan horizon.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/himalayanfront.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/himalayanglacier.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotelanuttara.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotelhimalaya.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotelmalla.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotel-monalisa.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotel-roadhouse-logo-1.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotel-tree-top.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotel-view-point-nagarkot.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/hotelwoodlands.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/iims.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/jigri.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/jungle villablack.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/kailashkutee.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/kasara.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/kavya.avif', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/ker&downey.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/kgh.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/khohang.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/kingsbury.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/kuti.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/lamari.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/Landmark_Forest-Park.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/Landmark_Pokhara.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/Landmark-Kathmandu.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/lehimalaya.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/logo-dalaila-rev.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/Logo-of-Peaceful-Cottage.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/mahotsav.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/malla.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/manigrambishrambakita.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/manjari resort.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/marcopolo.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/masa_logo.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/michael grills.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/MLN_logo_main.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/momotarau.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/mona.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/nagarkot shangrila.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/nepalirika.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/nepalirika.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/put lok.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/quick 20.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/regal.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/river beach resort.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/riverbankjungle.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/riverside.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/royal resort.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/royal-tiger-luxury-resort-logo.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/salt.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/sarathi.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/satkar.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/shrestharesidency.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/sicily.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/siddhartha.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/silvermountain.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/smarak.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/soko grill.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/stream peak.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/sukute.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/sunshine__logo.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/surya heritage.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/thebarroom.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/thirdeyebakery.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/tiger.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/trattoria.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/trisara_jade-01.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/varnabas.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/walnut.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/waterfront.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/wawa.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients/White Lotus Logo Final.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/adamslounge.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/arya.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/asianbuddha.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/athilayalodge.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/athithiresort.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/blackforest.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/Burhan.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/cassiesports.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/cloud9.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/dmoksha.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/dadspride.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/diningroom.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/dolmaling.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/dreamgarden.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/elegent.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/gateaway.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/highfiverestaurant.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/hotelashwatth.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/hotellaxmi.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/hotelrobot-small.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/hotelviewbhaktapur.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/indreni.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/kantipurvillage.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/laglamour.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/logo-hotel-president.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/lords.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/lotusgems.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/mahamayacrown.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/mandalanorling.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/manomapalace.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/maulakalika.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/mazaaz.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/mendho.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/mountainvista.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/nancs.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/palifalbistro.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/parksafari.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/pawanpalace.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/premier.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/presidentlogo.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/sherpapub.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/templebell.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/templehimalaya.svg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/theplaza.webp', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/tihun.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/trinityviewcafe.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/tripplecrown.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/tukiresort.png', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/urvinsgarden.jpg', alt: 'Client Logo' },
    { id: 11, logo: 'images/clients2/yechu.png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (1).jpeg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (1).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (1).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (1).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (2).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (2).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (3).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (3).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (3).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (4).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (5).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (5).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (5).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (6).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (6).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (6).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (7).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (7).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (8).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (8).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (8).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (9).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (9).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (9).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (10).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (10).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (11).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (11).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (11).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (12).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (12).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (12).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (13).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (13).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (13).webp', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (14).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (14).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (15).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (15).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (16).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (17).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (17).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (18).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (18).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (19).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (19).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (20).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (20).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (21).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (21).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (22).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (22).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (23).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (23).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (24).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (24).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (25).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (25).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (26).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (26).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (27).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (27).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (28).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (28).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (29).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (29).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (30).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (30).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (31).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (31).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (32).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (33).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (33).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (34).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (34).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (35).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (35).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (36).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (36).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (37).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (37).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (38).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (38).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (39).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (39).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (40).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (40).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (41).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (41).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (42).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (43).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (43).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (44).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (44).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (45).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (45).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (46).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (46).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (47).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (47).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (48).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (49).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (49).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (50).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (50).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (51).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (51).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (52).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (52).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (53).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (53).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (54).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (55).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (55).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (56).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (56).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (57).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (57).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (58).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (58).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (59).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (59).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (60).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (60).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (61).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (61).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (62).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (63).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (63).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (64).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (65).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (65).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (66).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (66).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (67).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (67).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (68).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (68).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (69).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (69).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (70).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (70).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (71).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (71).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (72).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (72).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (73).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (73).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (74).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (74).png', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (75).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (76).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (77).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (78).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (79).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (80).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (81).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (82).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (83).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (84).jpg', alt: 'Client Logo' },
    { id: 12, logo: 'images/clients3/client (85).jpg', alt: 'Client Logo' },
  ];

  // Chain Properties Data
  const chainProperties = {
    chain: [
       {name: "Aloft Kathmandu", logo: "images/clients/aloft_kathmandu.jpeg"},
      { name: "Best western plus", logo: "images/clients/best.png" },
      { name: "Dustin Thani", logo: "images/clients/dustin.svg" },
      { name: "Lords hotel and resort", logo: "images/clients/lords.jpg" },

      { name: "Regenta", logo: "images/clients/re.png" },
      { name: "Shinta", logo: "images/clients/shinta.jpg" },
     
    ],
    fiveStar: [
      { name: "Chandragiri", logo: "images/clients/chandragiri2.jpg" },
      { name: "Hotel Himalaya", logo: "images/clients/himalaya.jpg" },
      { name: "Pokhara Grand", logo: "images/clients/pg.png" },
      { name: "Siddhartha Villas", logo: "images/clients/siddhartha2.jpg" },

      { name: "Soaltee", logo: "images/clients/soaltee.jpg" },
      { name: "The malla hotel", logo: "images/clients/malla.png" },
      { name: "Tiger Palace", logo: "images/clients/tiger.jpg" },
    ],
    exclusive: [
            { name: "Basera ", logo: "images/clients/basera.png" },  
      { name: "Hotel central plaza ", logo: "images/clients/hp.png" },
       { name: "Hotel Shinta", logo: "images/clients/shinta.jpg" },
      { name: "Kavya", logo: "images/clients/kavya.avif" },
      { name: "The Terrace", logo: "images/clients/terrace.jpg", },
      { id: 2, logo: "/images/clients/Varnabas.jpg", name: "Varnabas" },
      
    ],
    group: [
      { name: "Ila Hotels and Resorts", logo: "images/clients/ila.png" },

      { name: "KGH Group", logo: "images/clients/kgh.jpg" },
      { name: "Landmark Hotel annd Resorts ", logo: "images/clients/landmark.png" },

      { name: "Roadhouse", logo: "images/clients/road.png" },

      { name: "Siddhartha Hospitality", logo: "images/clients/sidd.png" },
      { name: "sherpa hospitality", logo: "images/clients/shg.jpg" },
      { name: "Soaltee", logo: "images/clients/soalte.png" },


    ]
  };

  // State for infinite scroll
  const [visibleClients, setVisibleClients] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const ITEMS_PER_PAGE = 36; // 6 rows x 6 columns = 36 items initially
  const LOAD_MORE = 24; // Load 4 more rows (4 x 6 = 24) each time

  // Generate unique keys using index since IDs are duplicated
  const allClientItems = clients.map((client, index) => ({
    ...client,
    key: `client-${index}`,
  }));

  // Load initial clients
  useEffect(() => {
    const initialClients = allClientItems.slice(0, ITEMS_PER_PAGE);
    setVisibleClients(initialClients);
    setHasMore(allClientItems.length > ITEMS_PER_PAGE);
  }, []);

  // Load more clients
  const loadMoreClients = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate async loading
    setTimeout(() => {
      const nextPage = page + 1;
      const startIndex = visibleClients.length;
      const endIndex = startIndex + LOAD_MORE;
      const newClients = allClientItems.slice(startIndex, endIndex);

      if (newClients.length > 0) {
        setVisibleClients(prev => [...prev, ...newClients]);
        setPage(nextPage);
        setHasMore(endIndex < allClientItems.length);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    }, 500);
  }, [loading, hasMore, page, visibleClients.length, allClientItems]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreClients();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMoreClients, loading, hasMore]);

  // Schema.org JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Aegis Software",
        "url": "https://aegishms.com/",
        "logo": "https://aegishms.com/images/logo.png",
        "sameAs": [
          "https://www.facebook.com/yourpage",
          "https://twitter.com/yourhandle",
          "https://www.linkedin.com/company/yourcompany"
        ]
      },
      {
        "@type": "ItemList",
        "name": "Our Valued Clients",
        "description": "A list of clients and partners of Aegis Software.",
        "itemListElement": allClientItems.slice(0, 10).map((client, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": client.alt.replace(' Client Logo', ''),
          "url": `https://aegishms.com/clients#${client.key}`
        }))
      }
    ]
  };

  // Category Component
  const CategorySection = ({ title, items, bgColor = "bg-white" }) => (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className={`${bgColor} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
          >
            <div className="flex items-center justify-center h-32 p-6">
              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <GuestLayout>
      {/* SEO Meta Tags using your SEO component */}
      <SEO
        title="Our Clients | Aegis Software"
        description="Discover the trusted clients and partners of Aegis Software – a leading software development company delivering innovative solutions across industries."
        keywords="Aegis clients, hotel software clients Nepal, restaurant management customers, property management users"
        image="https://aegishms.com/images/og-clients.jpg"
        canonical="https://aegishms.com/clients"
        schema={schema}
      />

      {/* Banner Section */}
      <div className="fixed inset-0 -z-10 lg:px-32">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)",
          }}
        />
      </div>

      <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white ">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight"
        >
          Our Clients
        </motion.h1>
        <nav aria-label="Breadcrumb" className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
          <a href="/" className="text-white hover:text-cyan-200 transition-colors">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-300" aria-current="page">Clients</span>
        </nav>
      </div>

      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We are proud to collaborate with a diverse range of businesses across hospitality, retail, and enterprise sectors. Here are some of our valued clients.
          </p>

          {/* Chain Properties Sections */}
          <div className="mb-20">
            <CategorySection
              title="Chain Properties"
              items={chainProperties.chain}
              bgColor="bg-white"
            />

            <CategorySection
              title="Five Star Hotels & Resorts"
              items={chainProperties.fiveStar}
              bgColor="bg-white"
            />

            <CategorySection
              title="Exclusive Hotels & Resorts"
              items={chainProperties.exclusive}
              bgColor="bg-white"
            />

            <CategorySection
              title="Group Hotels & Resorts"
              items={chainProperties.group}
              bgColor="bg-white"
            />
          </div>

          {/* Other Clients Section with Infinite Scroll */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Other Clients</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                We've had the privilege of serving these amazing businesses as well
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {visibleClients.map((client) => (
                <div
                  key={client.key}
                  className="group flex items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  aria-label={client.alt}
                >
                  <img
                    src={client.logo}
                    alt={client.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-24 h-32 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Loading indicator and trigger */}
            {hasMore && (
              <div ref={loaderRef} className="flex justify-center items-center py-8 mt-8">
                {loading ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-[#005c94] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 text-sm">Loading more clients...</p>
                  </div>
                ) : (
                  <div className="text-gray-400 text-sm">Scroll to load more</div>
                )}
              </div>
            )}

            {/* No more clients message */}
            {!hasMore && visibleClients.length > 0 && (
              <div className="text-center py-8 mt-4">
                <p className="text-gray-400 text-sm">✨ You've seen all our amazing clients ✨</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Clients;