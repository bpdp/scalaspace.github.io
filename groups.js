var groups = [
  ['Amsterdam.scala', 'amsterdam-scala', 52.3667, 4.9000, true],
  ['Athens Scala Meetup', 'Athens-Scala-Meetup', 37.9667, 23.7167, true],
  ['Atlanta Scala Meetup Group', 'atlanta-scala', 33.7550, -84.3900, true],
  ['Austin Scala Enthusiasts', 'Austin-Scala-Enthusiasts', 30.2500, -97.7500, true],
  ['Bangalore Scala/Akka Functional Programming', 'Bangalore-Scala-Akka-Functional-Programming', 12.9667, 77.5667, true],
  ['Bay Area Scala Enthusiasts (BASE)', 'Scala-Bay', 37.3894, -122.0819, true],
  ['Belgian Scala User Group', 'bescala', 50.8549,4.3753, true],
  ['Berlin Brandenburg', 'Scala-Berlin-Brandenburg', 52.5167, 13.3833, true],
  ['Bern Scala User Group', 'Bern-Scala-User-Group', 46.9500, 7.4500, true],
  ['Birmingham Functional Programmers Meetup', 'Birmingham-Functional-Programmers-Meetup', 52.4831, -1.8936, true],
  ['Boulder Area Scala Enthusiasts', 'The-Boulder-Area-Scala-Enthusiasts', 40.0274, -105.2519, true],
  ['Boston Area Scala Enthusiasts', 'boston-scala', 42.3601, -71.0589, true],
  ['Brabant Scala', 'brabant-scala', 51.6833, 5.3000, true],
  ['Brisbane Functional Programming Group', 'Brisbane-Functional-Programming-Group', -27.4667, 153.0333, true],
  ['budapest.scala', 'budapest-scala', 47.4925, 19.0514, true],
  ['Cape Town Scala Programming Meetup', 'Cape-Town-Scala-Programming-Meetup', -33.9253, 18.4239, true],
  ['Centre Area Functional Enthusiasts (CAFE) Meetup', 'CAFE-Centre-Area-Functional-Enthusiasts', 40.7914, -77.8586, false],
  ['Czech Scala Enthusiasts', 'czech-scala-enthusiasts', 50.0833, 14.4167, true],
  ['Chicago Scala Enthusiasts (CASE)', 'chicagoscala', 41.8369, -87.6847, true],
  ['Dallas Scala Enthusiasts', 'Dallas-Scala-Enthusiasts', 32.7767, -96.7970, true],
  ['Delhi NCR Scala Meetup', 'Delhi-NCR-Scala-Meetup', 28.6139, 77.2090, true],
  ['Dubai Scala', 'dubai-scala', 25.2048, 55.2708, true],
  ['Dublin Scala Users Group', 'Dublin-Scala-users-group', 53.3478, -6.2597, true],
  ['Dresden Scala Meetup', 'Dresden-Scala-Meetup', 51.0333, 13.7333, true],
  ['FP Calgary', 'Functional-Programmers-YYC', 51.0486, -114.0708, false],
  ['Functional Brighton', 'Functional-Brighton', 50.8429, -0.1313, true],
  ['Göteborgs Scalaentusiaster', 'Scala-Geats', 57.7000, 11.9667, true],
  ['Hong Kong Functional Programming', 'HK-Functional-Programming', 22.2783, 114.1747, false],
  ['HRScala', 'HRScala', 45.8167, 15.9833, true],
  ['Indy Scala', 'IndyScala', 39.7910, -86.1480, true],
  ['JUG Poznań', 'http://www.jug.poznan.pl', 52.2400, 16.9167, false],
  ['Japan Scala Users Group', 'https://github.com/scalajp', 35.6833, 139.6833, true],
  ['Kraków Scala User Group', 'Krakow-Scala-User-Group', 50.0614, 19.9383, true],
  ['Lambda-ES', '%CE%BB-Lambda-ES', 36.4629241, -6.2334788, true],
  ['Lambda Luminaries', 'lambda-luminaries', -25.8407139, 28.209476, false],
  ['Ljubljana Scala User Group', 'Ljubljana-Scala-User-Group', 46.0556, 14.5083, true],
  ['London Scala Users Group (LSUG)', 'london-scala', 51.5072, -0.1275, true],
  ['Lodz JUG', 'Java-User-Group-Lodz',51.7460991,19.4556333,false],
  ['Los Angeles Scala Users Group', 'Los-Angeles-Scala-Users-Group', 34.0500, -118.2500, true],
  ['Lyon Scala User Group (SLUG)','suglyon', 45.7579555, 4.835121, true],
  ['Málaga Scala User Group', 'Malaga-Scala', 36.7648321, -4.4241892, true],
  ['Melbourne Scala User Group', 'Melbourne-Scala-User-Group', -37.8136, 144.9631, true],
  ['Milano Scala Group', 'milano-scala-group', 45.4667, 9.1833, true],
  ['Munich Scala User Group', 'scalamuc', 48.1333, 11.5667, true],
  ['Mumbai Scala Functional Programming Meetup', 'Mumbai-Scala-Functional-Programming-Meetup', 18.9750, 72.8258, true],
  ['Nantes FP', 'https://nantes-fp.github.io/', 47.2181, -1.5528, false],
  ['New York (ny-scala)', 'ny-scala', 40.7127, -74.0059, true],
  ['New York Scala University', 'New-York-Scala-University', 40.7421, -73.9911, true],
  ['Novosibirsk Scala Enthusiasts', 'ScalaNsk', 55.0167, 82.9333, true],
  ['NoFun', 'no-fun', 29.9500, -90.0667, true],
  ['NZ Scala', 'NZ-Scala', -36.8406, 174.7400, true],
  ['Oakland Advanced Scala Study Group', 'oakland-scala', 37.8044, -122.2708, true],
  ['Orange County Scala', 'OC-Scala', 33.6694, -117.8231, true],
  ['Ottawa Scala Enthusiasts', 'Ottawa-Scala-Enthusiasts', 45.4214, -75.6919, true],
  ['Paris Scala User Group', 'Paris-Scala-User-Group-PSUG', 48.8567, 2.3508, true],
  ['PDXScala', 'PDXScala', 45.5200, -122.6819, true],
  ['Perth Functional Programmers', 'PerthFP', -31.9416, 115.8473, false],
  ['Perth Java and JVM Community', 'Perth-Java-JVM-Community', -31.9616, 115.8673, false],
  ['PHASE: Philly Area Scala Enthusiasts', 'scala-phase', 39.9500, -75.1667, true],
  ['Pune Scala Meetup', 'punescala', 18.5203, 73.8567, true],
  ['Rhein Main Scala Enthusiasts', 'Rhein-Main-Scala-Enthusiasts', 50.1167, 8.6833, true],
  ['Rio Scala Enthusiasts', 'Rio-Scala-Enthusiasts', -22.9068, -43.1729, true],
  ['Riviera Scala Clojure', 'riviera-scala-clojure', 43.7034, 7.2663, false],
  ['San Diego Scala Users', 'San-Diego-Scala-Users', 32.7150, -117.1625, true],
  ['Scala at the Sea', 'Seattle-Scala-User-Group', 47.6097, -122.3331, true],
  ['scalabin', 'scalabin', 59.9500, 10.7500, true],
  ['Группа энтузиастов языка программирования Scala в Беларуси', 'http://scala.by/', 53.9000, 27.5667, true],
  ['Scala Bootcamp', 'Scala-Bootcamp', 25.0333, 121.6333, true],
  ['Scala DC', 'dc-scala', 38.9047, -77.0164, true],
  ['Scaladores', 'scaladores', -23.5500, -46.6333, true],
  ['Scala Developers Barcelona', 'Scala-Developers-Barcelona', 41.3833, 2.1833, true],
  ['Scala Developers in Manchester', 'scala-developers', 53.4667, -2.2333, true],
  ['Scala Enthusiasts Braunschweig', 'http://scala-bs.de/', 52.2667, 10.5167, true],
  ['Scala Hamburg', 'Scala-Hamburg', 53.5653, 10.0014, true],
  ['Scala Jozi', 'Scala-Jozi', -26.2044, 28.0456, true],
  ['Scala Leipzip Meetup', 'Scala-Leipzig-Meetup', 51.3333, 12.3833, true],
  ['Scala Manila', 'scala-manila', 14.5800, 121.0000, true],
  ['ScalaMDE', 'ScalaMDE', 6.2308, -75.5906, true],
  ['Scala Meetup Montevideo','Scala-Meetup-MVD',-34.8836, -56.1819, true],
  ['Scala-Montreal', 'Scala-Montreal', 45.5017, -73.5673, true],
  ['Scala Moscow', 'scala-moscow', 55.7500, 37.6167, true],
  ['ScalaPHX', 'scalaphx', 33.4500, -112.0667, true],
  ['Scala Portugal', 'Scala-Portugal', 38.7139, -9.1394, true],
  ['ScalaUA', 'http://scala-lang.org.ua/', 50.4500, 30.5233, true],
  ['Scala User Group Köln Bonn', 'Scala-User-Group-Koln-Bonn', 50.9364, 6.9528, true],
  ['Scala Users Tribe Canberra', 'Scala-Users-Tribe-Canberra', -35.3075, 149.1244, true],
  ['ScalaMAD', 'Scala-Programming-Madrid', 40.4000, -3.7167, true],
  ['Scala Romandie', 'Scala-Romandie', 46.2000, 6.1500, true],
  ['Scala Stockholm', 'Scala-Stockholm', 59.3294, 18.0686, true],
  ['ScalaSyd', 'scalasyd', -33.8650, 151.2094, true],
  ['Scala Thailand Meetup', 'Scala-Thailand-Meetup', 13.7563, 100.5018, true],
  ['Singapore Scala Programmers', 'Singapore-Scala-Programmers', 1.3000, 103.8000, true],
  ['SF Scala', 'SF-Scala', 37.7833, -122.4167, true],
  ['Slovak Scala Users Group', 'slovak-scala', 48.1439, 17.1097, true],
  ['South Bay Scala DrinkUp', 'Bay-Burrito-Ballmer-Peak-Hackers', 37.3382, -121.8863, true],
  ['South West Scala', 'South-West-Scala', 51.4500, -2.5833, true],
  ['SUGAR - Scala User Group Argentina', 'scala_ar', -34.6033, -58.3817, true],
  ['Szczecin.scala', 'Szczecin-Java-Users-Group', 53.4325, 14.5481, false],
  ['The Copenhagen Scala Users Group', 'The-Copenhagen-Scala-Users-Group', 55.6761, 12.5683, true],
  ['Torino Scala Programming &amp; Big Data Meetup', 'Torino-Scala-Programming-Big-Data-Meetup', 45.0667, 7.7000, true],
  ['Toronto Scala &amp; Typesafe User Group', 'Toronto-Scala-Typesafe-User-Group', 43.7000, -79.4000, true],
  ['Treviso Scala Meetup', 'Treviso-Scala-Meetup', 45.6667, 12.2500, true],
  ['Tricity Scala Users Group', 'Tricity-Scala-Users-Group', 54.3500, 18.6333, true],
  ['Underscore (Israeli Scala User Group)', 'underscore', 32.0667, 34.8000, true],
  ['Utah Scala Enthusiasts', 'Utah-Scala-Enthusiasts', 40.7500, -111.8833, true],
  ['Vancouver Scala', 'vancouver-scala', 49.2827, -123.1207, true],
  ['Vienna Scala User Group', 'scala-vienna', 48.2000, 16.3667, true],
  ['Vilnius Scala', 'http://vilnius-jug.lt', 54.6833, 25.2833, true],
  ['Warsaw Scala Enthusiasts', 'WarszawScaLa', 52.239505, 21.045874, true],
  ['Warsaw Scala Hackathons', 'ScalaWAW', 52.246475, 20.988900, true],
  ['Wrocław JUG Meetup', 'WroclawJUG', 51.1000, 17.0333, false],
  ['Yokohama Scala Programming Meetup', 'Yokohama-Scala-Programming-Meetup', 35.4442, 139.6381, true],
  ['Zurich Scala Enthusiasts', 'Zurich-Scala', 47.3667, 8.550, true]
];
