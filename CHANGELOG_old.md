## [2.2.25](https://github.com/massif-press/compcon/compare/2.2.5...2.2.25) (2021-07-16)


### Bug Fixes

* **Active Mode:** add active mode check for overkill granted by a mod ([48a81e5](https://github.com/massif-press/compcon/commit/48a81e5d2e0fe92728e8306a419684b95f6b3447)), closes [#1424](https://github.com/massif-press/compcon/issues/1424)
* **Active Mode:** allow counters provided by the mech to be displayed ([d9055bd](https://github.com/massif-press/compcon/commit/d9055bdb879a511b6fef17324d17a84231d9e8f9)), closes [#1409](https://github.com/massif-press/compcon/issues/1409) [#1410](https://github.com/massif-press/compcon/issues/1410) [#1411](https://github.com/massif-press/compcon/issues/1411)
* **Active Mode:** allow dice roller window inputs of only a flat value ([3f396be](https://github.com/massif-press/compcon/commit/3f396bec8f928eacd4d52b07830f0632315c63b4)), closes [#1407](https://github.com/massif-press/compcon/issues/1407)
* **Active Mode:** clean tickbar buttons ([cfdab43](https://github.com/massif-press/compcon/commit/cfdab4357f3485e5235fa3c389a9c896f891054b)), closes [#1210](https://github.com/massif-press/compcon/issues/1210)
* **Active Mode:** core power activation now correctly decrements CP ([f7b0679](https://github.com/massif-press/compcon/commit/f7b0679d867cee0f2a889bea4083319b69bd279f)), closes [#1334](https://github.com/massif-press/compcon/issues/1334)
* **Active Mode:** correct stress repair interface ([d6083e1](https://github.com/massif-press/compcon/commit/d6083e193a3f6d4da89b1214b20e47652a36efe9)), closes [#1421](https://github.com/massif-press/compcon/issues/1421)
* **Active Mode:** correctly apply Brawler II's improvised attack bonus ([8a74338](https://github.com/massif-press/compcon/commit/8a7433856b0b738d113f94e0647df52b82f03651)), closes [#1187](https://github.com/massif-press/compcon/issues/1187)
* **Active Mode:** Correctly handle a Meltdown roll with 1 stress ([b80a117](https://github.com/massif-press/compcon/commit/b80a117db238bfca381a5a6d5716d5a8c0916c2d)), closes [#1412](https://github.com/massif-press/compcon/issues/1412)
* **Active Mode:** ensure core active state is correctly tracked ([2d5b870](https://github.com/massif-press/compcon/commit/2d5b870b5378e72eccf1185164c519f1fba463ad)), closes [#1380](https://github.com/massif-press/compcon/issues/1380)
* **Active Mode:** ensure core system counters display correctly ([647ec58](https://github.com/massif-press/compcon/commit/647ec586491756d53062f84616f169498570f84e)), closes [#1234](https://github.com/massif-press/compcon/issues/1234)
* **Active Mode:** ensure rolling window is a fixed size for screen borders issues ([16eb1ad](https://github.com/massif-press/compcon/commit/16eb1ad565f0c8c4942ade0443ffe9269767aef9)), closes [#1391](https://github.com/massif-press/compcon/issues/1391)
* **Active Mode:** ensure tags appear correctly in active mode ([2c88782](https://github.com/massif-press/compcon/commit/2c88782a4b46370ca7c94a8d11a62d00e83c1962)), closes [#1458](https://github.com/massif-press/compcon/issues/1458)
* **Active Mode:** ensure weapons aren't getting counted twice when determining available actions ([30632c8](https://github.com/massif-press/compcon/commit/30632c8dacba5f5065984e2c8d3c5f4d38e41c9d)), closes [#1442](https://github.com/massif-press/compcon/issues/1442)
* **Active Mode:** fix "mark as destroyed" not appearing ([f51f24e](https://github.com/massif-press/compcon/commit/f51f24eb941ee64d1e4b4146633f00705a4feb46)), closes [#1416](https://github.com/massif-press/compcon/issues/1416)
* **Active Mode:** fix accuracy/difficulty decrement ([5366ad6](https://github.com/massif-press/compcon/commit/5366ad6c4d018d106212b7d626755ccc681c4e21)), closes [#1213](https://github.com/massif-press/compcon/issues/1213)
* **Active Mode:** fix counter duplication ([44212b6](https://github.com/massif-press/compcon/commit/44212b63b5039a2a3a38d863ed817ee8f6ff1899)), closes [#1284](https://github.com/massif-press/compcon/issues/1284) [#1285](https://github.com/massif-press/compcon/issues/1285)
* **Active Mode:** fix critical damage roller math ([4cdc5f3](https://github.com/massif-press/compcon/commit/4cdc5f39ed2ed2e3ad0d0fe9aacf9f20d7e0ba75)), closes [#1390](https://github.com/massif-press/compcon/issues/1390)
* **Active Mode:** fix drone actions correctly resetting ([2f3038b](https://github.com/massif-press/compcon/commit/2f3038b9453b74cb04710b15d690caa86f091057)), closes [#1201](https://github.com/massif-press/compcon/issues/1201)
* **Active Mode:** fix Improvised Attack dialog ([3b22ace](https://github.com/massif-press/compcon/commit/3b22ace0011f172e0315ab041120dc2bab4cb1b7)), closes [#1226](https://github.com/massif-press/compcon/issues/1226)
* **Active Mode:** fix mod added range calculations ([99dd4a0](https://github.com/massif-press/compcon/commit/99dd4a0340282d328acadde4265b905b11cd715b)), closes [#1233](https://github.com/massif-press/compcon/issues/1233)
* **Active Mode:** fix overkill math ([224fe17](https://github.com/massif-press/compcon/commit/224fe17700918a1e9165f7c3a75ef93313f74467)), closes [#1143](https://github.com/massif-press/compcon/issues/1143)
* **Active Mode:** fix overwatch dialog failure to close ([70abe2e](https://github.com/massif-press/compcon/commit/70abe2e196131d042429af69f23729deedd23ce7)), closes [#1393](https://github.com/massif-press/compcon/issues/1393) [#1393](https://github.com/massif-press/compcon/issues/1393)
* **Active Mode:** fix overwatch synergy display ([ef83934](https://github.com/massif-press/compcon/commit/ef83934dc4b9922377761f21be3284a9a32357d6)), closes [#1428](https://github.com/massif-press/compcon/issues/1428)
* **Active Mode:** fix tech attack rolls with full tech action ([c0a5611](https://github.com/massif-press/compcon/commit/c0a5611711a415d4f8b619503816e5b5dfe79f09))
* **Active Mode:** fix trigger expand/contract all buttons in active mode rest ([12a4f0b](https://github.com/massif-press/compcon/commit/12a4f0b0f07af8e88e8e1baf96c3b457ac080a21)), closes [#1273](https://github.com/massif-press/compcon/issues/1273)
* **Active Mode:** fixed overcharge parsing error ([2e1cc70](https://github.com/massif-press/compcon/commit/2e1cc70e5a201f7f3d18477af6d5eb3ee8ad1fb6)), closes [#1365](https://github.com/massif-press/compcon/issues/1365)
* **Active Mode:** handle tech attacks correctly for full tech actions ([429fb26](https://github.com/massif-press/compcon/commit/429fb26044bb00533209fc0fb27ede0a1c23ac65))
* **Active Mode:** pilot attacks now correctly take full actions ([3ee68d5](https://github.com/massif-press/compcon/commit/3ee68d5b5a40bd8529e5cec0a169133464041881)), closes [#1147](https://github.com/massif-press/compcon/issues/1147)
* **Active Mode:** place the reactor into Meltdown upon losing last stress ([a11258b](https://github.com/massif-press/compcon/commit/a11258b03110ce70f0368b7387147d454e6e521d))
* **Active Mode:** prevent non-limited drones from being deployed multiple times ([31dcbcc](https://github.com/massif-press/compcon/commit/31dcbccb01b876a7a8253bb3096b8ede3b487896)), closes [#1200](https://github.com/massif-press/compcon/issues/1200)
* **Active Mode:** reorder turn/round structure ([2731f5b](https://github.com/massif-press/compcon/commit/2731f5bb8baefe4c9873ef0b45085863d3beb8fb)), closes [#1329](https://github.com/massif-press/compcon/issues/1329)
* **Active Mode:** split deployable and drone bonuses out ([a327b66](https://github.com/massif-press/compcon/commit/a327b66f7bf35e4618888cce43171c60555c49cf)), closes [#1343](https://github.com/massif-press/compcon/issues/1343)
* **Active Mode:** track Overkill effect for bonus damage as well ([df2df96](https://github.com/massif-press/compcon/commit/df2df96650a1c89bbeacac47fb410fc562df6707))
* **Active Mode:** update damage calculations to more accurately handle critical hits and overkill ([693921b](https://github.com/massif-press/compcon/commit/693921b470a4ef56df45bec4ad21bb3542de43fb)), closes [#1404](https://github.com/massif-press/compcon/issues/1404)
* **Compendium:** add something to gms items for the compendium search results ([58b80f6](https://github.com/massif-press/compcon/commit/58b80f6ede1ea1879d4dd7e606de6e9f76bd94e4)), closes [#1469](https://github.com/massif-press/compcon/issues/1469)
* **Compendium:** adjust frame gallery colspans ([a4b58a2](https://github.com/massif-press/compcon/commit/a4b58a21d82b20ef99468f117775f383973b6ea6)), closes [#1288](https://github.com/massif-press/compcon/issues/1288)
* **Compendium:** change LCP filter to OR from AND ([d1948cc](https://github.com/massif-press/compcon/commit/d1948cc346e4966b7fb83351be31a2c41cd14412)), closes [#1275](https://github.com/massif-press/compcon/issues/1275)
* **Compendium:** correct action economy items ([46d738e](https://github.com/massif-press/compcon/commit/46d738e3ecc4e033a7280627b0e6529b7396dc45))
* **Compendium:** fix 'MISSING' popup when hovering over mech sensor range description ([55595b7](https://github.com/massif-press/compcon/commit/55595b726e51b0480d53f51687d678148efc134a)), closes [#1303](https://github.com/massif-press/compcon/issues/1303)
* **Compendium:** fix compendium card/grid view if show exotic option is ON ([537c544](https://github.com/massif-press/compcon/commit/537c5442b087f1c5a7ae7e492c641ea0998277bd)), closes [#1333](https://github.com/massif-press/compcon/issues/1333)
* **Compendium:** fix profiled weapon display issues ([4df37c7](https://github.com/massif-press/compcon/commit/4df37c7ee76c524c20d3d1bffb73d25cb6535265)), closes [#1219](https://github.com/massif-press/compcon/issues/1219) [#1238](https://github.com/massif-press/compcon/issues/1238) [#1228](https://github.com/massif-press/compcon/issues/1228)
* **Compendium:** fix systems card view ([8931be0](https://github.com/massif-press/compcon/commit/8931be00439a4a6d8de0bbfa3e8851494ba93ee7)), closes [#1347](https://github.com/massif-press/compcon/issues/1347)
* **Compendium:** fix Tokugawa Overclock not showing up in Compendium ([d670300](https://github.com/massif-press/compcon/commit/d67030081812d9f5ddddada02b05922cae924eae))
* **Compendium:** item filter now includes weapon profile tags ([8db5f9b](https://github.com/massif-press/compcon/commit/8db5f9bd80b7dd46f6579ed881c658ef6033004b)), closes [#1331](https://github.com/massif-press/compcon/issues/1331)
* **Compendium:** new LCP backgrounds should now show up correctly ([7d781b7](https://github.com/massif-press/compcon/commit/7d781b77fcaecd7499ee55c5c9d19e38ee725fa9)), closes [#1326](https://github.com/massif-press/compcon/issues/1326)
* **Compendium:** suppress useless error message over empty compendium sections ([b598ac2](https://github.com/massif-press/compcon/commit/b598ac2798d9e4b8836d960f16cc3c08d5eca8fd)), closes [#1366](https://github.com/massif-press/compcon/issues/1366)
* **Compendium:** update lancer-data ([eb352eb](https://github.com/massif-press/compcon/commit/eb352ebeec165ab111bdc6fe37488194f8257b4c))
* **global:** re-add im/export options to settings menu ([d1c88c2](https://github.com/massif-press/compcon/commit/d1c88c2cb912cc22d2c690135c7a87572865a056)), closes [#1331](https://github.com/massif-press/compcon/issues/1331) [#1370](https://github.com/massif-press/compcon/issues/1370)
* **Global:** correct bad margin changes ([5f3b510](https://github.com/massif-press/compcon/commit/5f3b51065fd982aa13b4e0f10e009622a4aac10e)), closes [#1353](https://github.com/massif-press/compcon/issues/1353)
* **Main Menu:** update email validation rules ([b33b7c6](https://github.com/massif-press/compcon/commit/b33b7c663b0a61add92a5a696e43e1d682135f49)), closes [#1258](https://github.com/massif-press/compcon/issues/1258)
* **Mech Sheet:** correct formorian frame math ([6d6e314](https://github.com/massif-press/compcon/commit/6d6e31421b605f068e7b0a34e189fa8dd717f57d))
* **Mech Sheet:** corrects exotic weapons being able to fit in inappropriate mounts ([159b44f](https://github.com/massif-press/compcon/commit/159b44fc180c34065c42f55583890a36f1793748)), closes [#1367](https://github.com/massif-press/compcon/issues/1367)
* **Mech Sheet:** don't add an additional erroneous aux mount to a retrofitted flex ([de52b7e](https://github.com/massif-press/compcon/commit/de52b7e3cfdd739b89efd7941fe5c5a068bd6c4d)), closes [#1035](https://github.com/massif-press/compcon/issues/1035)
* **Mech Sheet:** ensure core passives show up correctly ([f655072](https://github.com/massif-press/compcon/commit/f6550729d4c74d78e054b2ff4f04996baf44da78)), closes [#1459](https://github.com/massif-press/compcon/issues/1459)
* **Mech Sheet:** ensure tags and profiletags are shown together ([8690d27](https://github.com/massif-press/compcon/commit/8690d27094e45ce0df66c9b672e5c871f0c12690)), closes [#1423](https://github.com/massif-press/compcon/issues/1423)
* **Mech Sheet:** fix lancaster print error ([ae7f64b](https://github.com/massif-press/compcon/commit/ae7f64bbe2bc1ed613a3741496d1852748d9478e)), closes [#1399](https://github.com/massif-press/compcon/issues/1399)
* **Mech Sheet:** fixed layout of frame trait blocks that contain actions or deployables ([9e6bf88](https://github.com/massif-press/compcon/commit/9e6bf88b475da11c147b840ee578b75bf9102f20)), closes [#1295](https://github.com/massif-press/compcon/issues/1295)
* **Mech Sheet:** improve consistency of item renaming ([000cdab](https://github.com/massif-press/compcon/commit/000cdabfeff4b745322760ab954ea0189c4025b6)), closes [#1473](https://github.com/massif-press/compcon/issues/1473) [#1473](https://github.com/massif-press/compcon/issues/1473)
* **Mech Sheet:** prevent mech core passive from appearing twice ([5ff0634](https://github.com/massif-press/compcon/commit/5ff0634ce563c69a48a7aaef79c30519e87d158f)), closes [#1501](https://github.com/massif-press/compcon/issues/1501)
* **Mech Sheet:** re-add equipment notes to mech equipment ([fc31acb](https://github.com/massif-press/compcon/commit/fc31acba4146d8ae9398988641b8366285f082d8)), closes [#1223](https://github.com/massif-press/compcon/issues/1223)
* **Mission Runner:** fix counterdata error message ([2181444](https://github.com/massif-press/compcon/commit/2181444463a8a1138db64e02986512b520a60b2e)), closes [#1293](https://github.com/massif-press/compcon/issues/1293) [#1292](https://github.com/massif-press/compcon/issues/1292) [#1291](https://github.com/massif-press/compcon/issues/1291)
* **Pilot Sheet:** correct special equipment filter catching higher LL items within aquired licenses ([8a9bf13](https://github.com/massif-press/compcon/commit/8a9bf13a8495c26eb320f319281f08dbf852703d)), closes [#1348](https://github.com/massif-press/compcon/issues/1348)
* **Pilot Sheet:** corrects duplicate license issue ([3f09b84](https://github.com/massif-press/compcon/commit/3f09b840b5eabeb7ea65679286e9452417dd3222)), closes [#1371](https://github.com/massif-press/compcon/issues/1371)
* **Pilot Sheet:** fix back button on new character > template page ([b4d770a](https://github.com/massif-press/compcon/commit/b4d770a33528e8bc322a9b0c5871533f996e195d)), closes [#1274](https://github.com/massif-press/compcon/issues/1274)
* **Pilot Sheet:** fix ident card layout ([a19505f](https://github.com/massif-press/compcon/commit/a19505f55f809bab4363864453fbe4faba308555)), closes [#1434](https://github.com/massif-press/compcon/issues/1434)
* **Pilot Sheet:** fix missing add equipment button on mobile list view ([1ef4132](https://github.com/massif-press/compcon/commit/1ef41326d24c094cc4ed58e973dc4098a3d63c86)), closes [#1495](https://github.com/massif-press/compcon/issues/1495)
* correct spacing and alignment issues ([549b828](https://github.com/massif-press/compcon/commit/549b8288aad0561b539d1e09377ff6f032987f2c)), closes [#1260](https://github.com/massif-press/compcon/issues/1260) [#1253](https://github.com/massif-press/compcon/issues/1253) [#1251](https://github.com/massif-press/compcon/issues/1251) [#1247](https://github.com/massif-press/compcon/issues/1247)
* update FAQ ([706707f](https://github.com/massif-press/compcon/commit/706707f13e98e3265c929dc2c842c66f5a843cdd)), closes [#1076](https://github.com/massif-press/compcon/issues/1076)
* **Pilot Sheet:** fix new talent UI scroll bugs ([23d1cf7](https://github.com/massif-press/compcon/commit/23d1cf7033c3e7825f68df74682dbc792e661e0d))
* **Pilot Sheet:** fix some new talent ui math ([0a54999](https://github.com/massif-press/compcon/commit/0a54999316ef1db756466018183d2f80a695f59b)), closes [#1397](https://github.com/massif-press/compcon/issues/1397)
* **Pilot Sheet:** fixes pilot reserves incorrectly referencing data ([4150f9f](https://github.com/massif-press/compcon/commit/4150f9f8facf75218b4e8c3f4f69080c8dba44f4)), closes [#1028](https://github.com/massif-press/compcon/issues/1028)
* **Pilot Sheet:** make extra equipment from "Extended Harness" available ([557d03a](https://github.com/massif-press/compcon/commit/557d03ae727573cb81e567cf09fc8e96c7a41038)), closes [#1426](https://github.com/massif-press/compcon/issues/1426)


### Features

* **Active Mode:** add boost movement pips ([1178355](https://github.com/massif-press/compcon/commit/117835565e37038bc5108abb5366ee608351625c)), closes [#1211](https://github.com/massif-press/compcon/issues/1211)
* **Active Mode:** add cascading nhp check ([b53312d](https://github.com/massif-press/compcon/commit/b53312dab6928f6905afb65048e433279598014d)), closes [#1002](https://github.com/massif-press/compcon/issues/1002)
* **Active Mode:** add new rolling menu ([5445da6](https://github.com/massif-press/compcon/commit/5445da606e6aab6d5b6f1e343609d3da07b3410b)), closes [#1289](https://github.com/massif-press/compcon/issues/1289) [#1194](https://github.com/massif-press/compcon/issues/1194)
* **Active Mode:** add support for rolling Tech Attacks other than Invade ([d324edd](https://github.com/massif-press/compcon/commit/d324edd82cf02364f1545e722b013ab5a57c29ce)), closes [#1317](https://github.com/massif-press/compcon/issues/1317)
* **Active Mode:** added mark equipment as used ([d1148ab](https://github.com/massif-press/compcon/commit/d1148ab0691ab39063deaf73209aa2d07c25e2de)), closes [#1186](https://github.com/massif-press/compcon/issues/1186)
* **Active Mode:** change color of mech select button ([59e9c1d](https://github.com/massif-press/compcon/commit/59e9c1d50146ba10a92dca10a37c378d6df411a7)), closes [#1484](https://github.com/massif-press/compcon/issues/1484)
* **Compendium:** add down and out to table to compendium reference ([0473138](https://github.com/massif-press/compcon/commit/0473138f075bae004176e4532555c2405ec32310)), closes [#971](https://github.com/massif-press/compcon/issues/971)
* **Compendium:** add SP filter for compendium and selectors ([d0ef1d8](https://github.com/massif-press/compcon/commit/d0ef1d8dbd76389c82b38fb6cc1b2c4e01909d4c)), closes [#811](https://github.com/massif-press/compcon/issues/811)
* **Compendium:** add structure and stress values to frame statblocks ([c000275](https://github.com/massif-press/compcon/commit/c000275ca11c4e0b86219091d5d8b21219a0ca0b)), closes [#1230](https://github.com/massif-press/compcon/issues/1230)
* **Compendium:** better mobile view support in the compendium ([1809f1b](https://github.com/massif-press/compcon/commit/1809f1b5a50b656c4dc09975b8b400afd4314878)), closes [#1118](https://github.com/massif-press/compcon/issues/1118) [#866](https://github.com/massif-press/compcon/issues/866)
* **Compendium:** better sort weapons by size ([28fad12](https://github.com/massif-press/compcon/commit/28fad1282afa52ad09d25c2ceac2e42faf772040)), closes [#477](https://github.com/massif-press/compcon/issues/477) [#1270](https://github.com/massif-press/compcon/issues/1270)
* **Compendium:** lCP filtering and new mech menu frame filtering ([83ecace](https://github.com/massif-press/compcon/commit/83ecacece199fe645432f13e3b0739dcfcedecf5)), closes [#965](https://github.com/massif-press/compcon/issues/965) [#1254](https://github.com/massif-press/compcon/issues/1254)
* **Data:** added special_equipment compendiumItem feature ([cb9d141](https://github.com/massif-press/compcon/commit/cb9d141fb3f675c807a5e76419ffe4b9a8067995)), closes [#671](https://github.com/massif-press/compcon/issues/671)
* **Deveoplment Environment:** allow non-localhost only access to development builds ([6c1cffb](https://github.com/massif-press/compcon/commit/6c1cffb05add4d289994395b0bdcf2856ed666c4))
* **global:** add direction props for tooltips, add tooltip bg color in theme ([b3548e2](https://github.com/massif-press/compcon/commit/b3548e2911cdf4d253c1e759ca260e5256bc1bf8)), closes [#875](https://github.com/massif-press/compcon/issues/875)
* **global:** add range and damage to action objects ([3cada92](https://github.com/massif-press/compcon/commit/3cada92a64aa50f227337c8f6d496c4d91c70b96)), closes [#1198](https://github.com/massif-press/compcon/issues/1198)
* **Global:** add backend account management ([15e4a06](https://github.com/massif-press/compcon/commit/15e4a0688717d4ad8ce344fc38a103596c3f04c9)), closes [#453](https://github.com/massif-press/compcon/issues/453)
* **Global:** talent UI rebuild ([0f2d75e](https://github.com/massif-press/compcon/commit/0f2d75e5bc364f52f603040291a5a6b11b19bca5)), closes [#1217](https://github.com/massif-press/compcon/issues/1217)
* **Global): feat(Global): feat(Global:** open accounts to the public ([f85bd9c](https://github.com/massif-press/compcon/commit/f85bd9c0f5a70a3b949b58c5628a6f100a5237d4)), closes [#1438](https://github.com/massif-press/compcon/issues/1438) [#1432](https://github.com/massif-press/compcon/issues/1432) [#1420](https://github.com/massif-press/compcon/issues/1420) [#1415](https://github.com/massif-press/compcon/issues/1415) [#1438](https://github.com/massif-press/compcon/issues/1438) [#1432](https://github.com/massif-press/compcon/issues/1432) [#1420](https://github.com/massif-press/compcon/issues/1420) [#1415](https://github.com/massif-press/compcon/issues/1415) [#1438](https://github.com/massif-press/compcon/issues/1438) [#1432](https://github.com/massif-press/compcon/issues/1432) [#1420](https://github.com/massif-press/compcon/issues/1420) [#1415](https://github.com/massif-press/compcon/issues/1415)
* **main menu:** make welcome message squelching more robust ([3ef6d78](https://github.com/massif-press/compcon/commit/3ef6d789994ec4913a56527d831c39c873e29bd2)), closes [#1369](https://github.com/massif-press/compcon/issues/1369)
* add additional syncing options ([b3c0c93](https://github.com/massif-press/compcon/commit/b3c0c9334368a8125d42786fcfe6a2a6bccdc75e))
* add syncing for npcs, encounters, missions, and active missions ([cfae021](https://github.com/massif-press/compcon/commit/cfae0219c2e90ef2474499abab3f8417b53112eb))
* **Mech Sheet:** add systems while over SP limit ([5036743](https://github.com/massif-press/compcon/commit/5036743b6aed84e80f8832f3a1db22f4ff16532a)), closes [#1071](https://github.com/massif-press/compcon/issues/1071)
* **Pilot Roster:** add pilot group renaming ([218bc2c](https://github.com/massif-press/compcon/commit/218bc2c817894cb4ea80941f18b93690f3b022e3)), closes [#1389](https://github.com/massif-press/compcon/issues/1389)
* **Pilot Sheet:** add mobile-format log in ([7f23b4a](https://github.com/massif-press/compcon/commit/7f23b4a3a9e8e73913f732aef068522b09a69340))
* **Pilot Sheet:** add toggleable hide for locked talents on pilot sheet ([275363b](https://github.com/massif-press/compcon/commit/275363b35bd813090df4b038efbf6ca9998d6534)), closes [#1388](https://github.com/massif-press/compcon/issues/1388)
* **Pilot Sheet:** enforce true item names in generated statblocks ([d72e379](https://github.com/massif-press/compcon/commit/d72e3793d9e7b63011ad8dda8ef2ba2d5c12f882)), closes [#1287](https://github.com/massif-press/compcon/issues/1287)
* **Pilot Sheet:** pilot HP QoL improvements ([aeda3bb](https://github.com/massif-press/compcon/commit/aeda3bb0c1845605fc625287f5b597621d6bb585)), closes [#1271](https://github.com/massif-press/compcon/issues/1271)
* credits page rebuild ([eb26697](https://github.com/massif-press/compcon/commit/eb26697c42813ebf1d6e461cfc22baddebd68312)), closes [#1240](https://github.com/massif-press/compcon/issues/1240)



## [2.2.24](https://github.com/massif-press/compcon/compare/2.2.5...2.2.24) (2021-07-16)


### Bug Fixes

* **Active Mode:** add active mode check for overkill granted by a mod ([48a81e5](https://github.com/massif-press/compcon/commit/48a81e5d2e0fe92728e8306a419684b95f6b3447)), closes [#1424](https://github.com/massif-press/compcon/issues/1424)
* **Active Mode:** allow counters provided by the mech to be displayed ([d9055bd](https://github.com/massif-press/compcon/commit/d9055bdb879a511b6fef17324d17a84231d9e8f9)), closes [#1409](https://github.com/massif-press/compcon/issues/1409) [#1410](https://github.com/massif-press/compcon/issues/1410) [#1411](https://github.com/massif-press/compcon/issues/1411)
* **Active Mode:** allow dice roller window inputs of only a flat value ([3f396be](https://github.com/massif-press/compcon/commit/3f396bec8f928eacd4d52b07830f0632315c63b4)), closes [#1407](https://github.com/massif-press/compcon/issues/1407)
* **Active Mode:** clean tickbar buttons ([cfdab43](https://github.com/massif-press/compcon/commit/cfdab4357f3485e5235fa3c389a9c896f891054b)), closes [#1210](https://github.com/massif-press/compcon/issues/1210)
* **Active Mode:** core power activation now correctly decrements CP ([f7b0679](https://github.com/massif-press/compcon/commit/f7b0679d867cee0f2a889bea4083319b69bd279f)), closes [#1334](https://github.com/massif-press/compcon/issues/1334)
* **Active Mode:** correct stress repair interface ([d6083e1](https://github.com/massif-press/compcon/commit/d6083e193a3f6d4da89b1214b20e47652a36efe9)), closes [#1421](https://github.com/massif-press/compcon/issues/1421)
* **Active Mode:** correctly apply Brawler II's improvised attack bonus ([8a74338](https://github.com/massif-press/compcon/commit/8a7433856b0b738d113f94e0647df52b82f03651)), closes [#1187](https://github.com/massif-press/compcon/issues/1187)
* **Active Mode:** Correctly handle a Meltdown roll with 1 stress ([b80a117](https://github.com/massif-press/compcon/commit/b80a117db238bfca381a5a6d5716d5a8c0916c2d)), closes [#1412](https://github.com/massif-press/compcon/issues/1412)
* **Active Mode:** ensure core active state is correctly tracked ([2d5b870](https://github.com/massif-press/compcon/commit/2d5b870b5378e72eccf1185164c519f1fba463ad)), closes [#1380](https://github.com/massif-press/compcon/issues/1380)
* **Active Mode:** ensure core system counters display correctly ([647ec58](https://github.com/massif-press/compcon/commit/647ec586491756d53062f84616f169498570f84e)), closes [#1234](https://github.com/massif-press/compcon/issues/1234)
* **Active Mode:** ensure rolling window is a fixed size for screen borders issues ([16eb1ad](https://github.com/massif-press/compcon/commit/16eb1ad565f0c8c4942ade0443ffe9269767aef9)), closes [#1391](https://github.com/massif-press/compcon/issues/1391)
* **Active Mode:** ensure tags appear correctly in active mode ([2c88782](https://github.com/massif-press/compcon/commit/2c88782a4b46370ca7c94a8d11a62d00e83c1962)), closes [#1458](https://github.com/massif-press/compcon/issues/1458)
* **Active Mode:** ensure weapons aren't getting counted twice when determining available actions ([30632c8](https://github.com/massif-press/compcon/commit/30632c8dacba5f5065984e2c8d3c5f4d38e41c9d)), closes [#1442](https://github.com/massif-press/compcon/issues/1442)
* **Active Mode:** fix "mark as destroyed" not appearing ([f51f24e](https://github.com/massif-press/compcon/commit/f51f24eb941ee64d1e4b4146633f00705a4feb46)), closes [#1416](https://github.com/massif-press/compcon/issues/1416)
* **Active Mode:** fix accuracy/difficulty decrement ([5366ad6](https://github.com/massif-press/compcon/commit/5366ad6c4d018d106212b7d626755ccc681c4e21)), closes [#1213](https://github.com/massif-press/compcon/issues/1213)
* **Active Mode:** fix counter duplication ([44212b6](https://github.com/massif-press/compcon/commit/44212b63b5039a2a3a38d863ed817ee8f6ff1899)), closes [#1284](https://github.com/massif-press/compcon/issues/1284) [#1285](https://github.com/massif-press/compcon/issues/1285)
* **Active Mode:** fix critical damage roller math ([4cdc5f3](https://github.com/massif-press/compcon/commit/4cdc5f39ed2ed2e3ad0d0fe9aacf9f20d7e0ba75)), closes [#1390](https://github.com/massif-press/compcon/issues/1390)
* **Active Mode:** fix drone actions correctly resetting ([2f3038b](https://github.com/massif-press/compcon/commit/2f3038b9453b74cb04710b15d690caa86f091057)), closes [#1201](https://github.com/massif-press/compcon/issues/1201)
* **Active Mode:** fix Improvised Attack dialog ([3b22ace](https://github.com/massif-press/compcon/commit/3b22ace0011f172e0315ab041120dc2bab4cb1b7)), closes [#1226](https://github.com/massif-press/compcon/issues/1226)
* **Active Mode:** fix mod added range calculations ([99dd4a0](https://github.com/massif-press/compcon/commit/99dd4a0340282d328acadde4265b905b11cd715b)), closes [#1233](https://github.com/massif-press/compcon/issues/1233)
* **Active Mode:** fix overkill math ([224fe17](https://github.com/massif-press/compcon/commit/224fe17700918a1e9165f7c3a75ef93313f74467)), closes [#1143](https://github.com/massif-press/compcon/issues/1143)
* **Active Mode:** fix overwatch dialog failure to close ([70abe2e](https://github.com/massif-press/compcon/commit/70abe2e196131d042429af69f23729deedd23ce7)), closes [#1393](https://github.com/massif-press/compcon/issues/1393) [#1393](https://github.com/massif-press/compcon/issues/1393)
* **Active Mode:** fix overwatch synergy display ([ef83934](https://github.com/massif-press/compcon/commit/ef83934dc4b9922377761f21be3284a9a32357d6)), closes [#1428](https://github.com/massif-press/compcon/issues/1428)
* **Active Mode:** fix tech attack rolls with full tech action ([c0a5611](https://github.com/massif-press/compcon/commit/c0a5611711a415d4f8b619503816e5b5dfe79f09))
* **Active Mode:** fix trigger expand/contract all buttons in active mode rest ([12a4f0b](https://github.com/massif-press/compcon/commit/12a4f0b0f07af8e88e8e1baf96c3b457ac080a21)), closes [#1273](https://github.com/massif-press/compcon/issues/1273)
* **Active Mode:** fixed overcharge parsing error ([2e1cc70](https://github.com/massif-press/compcon/commit/2e1cc70e5a201f7f3d18477af6d5eb3ee8ad1fb6)), closes [#1365](https://github.com/massif-press/compcon/issues/1365)
* **Active Mode:** handle tech attacks correctly for full tech actions ([429fb26](https://github.com/massif-press/compcon/commit/429fb26044bb00533209fc0fb27ede0a1c23ac65))
* **Active Mode:** pilot attacks now correctly take full actions ([3ee68d5](https://github.com/massif-press/compcon/commit/3ee68d5b5a40bd8529e5cec0a169133464041881)), closes [#1147](https://github.com/massif-press/compcon/issues/1147)
* **Active Mode:** place the reactor into Meltdown upon losing last stress ([a11258b](https://github.com/massif-press/compcon/commit/a11258b03110ce70f0368b7387147d454e6e521d))
* **Active Mode:** prevent non-limited drones from being deployed multiple times ([31dcbcc](https://github.com/massif-press/compcon/commit/31dcbccb01b876a7a8253bb3096b8ede3b487896)), closes [#1200](https://github.com/massif-press/compcon/issues/1200)
* **Active Mode:** reorder turn/round structure ([2731f5b](https://github.com/massif-press/compcon/commit/2731f5bb8baefe4c9873ef0b45085863d3beb8fb)), closes [#1329](https://github.com/massif-press/compcon/issues/1329)
* **Active Mode:** split deployable and drone bonuses out ([a327b66](https://github.com/massif-press/compcon/commit/a327b66f7bf35e4618888cce43171c60555c49cf)), closes [#1343](https://github.com/massif-press/compcon/issues/1343)
* **Active Mode:** track Overkill effect for bonus damage as well ([df2df96](https://github.com/massif-press/compcon/commit/df2df96650a1c89bbeacac47fb410fc562df6707))
* **Active Mode:** update damage calculations to more accurately handle critical hits and overkill ([693921b](https://github.com/massif-press/compcon/commit/693921b470a4ef56df45bec4ad21bb3542de43fb)), closes [#1404](https://github.com/massif-press/compcon/issues/1404)
* **Compendium:** add something to gms items for the compendium search results ([58b80f6](https://github.com/massif-press/compcon/commit/58b80f6ede1ea1879d4dd7e606de6e9f76bd94e4)), closes [#1469](https://github.com/massif-press/compcon/issues/1469)
* **Compendium:** adjust frame gallery colspans ([a4b58a2](https://github.com/massif-press/compcon/commit/a4b58a21d82b20ef99468f117775f383973b6ea6)), closes [#1288](https://github.com/massif-press/compcon/issues/1288)
* **Compendium:** change LCP filter to OR from AND ([d1948cc](https://github.com/massif-press/compcon/commit/d1948cc346e4966b7fb83351be31a2c41cd14412)), closes [#1275](https://github.com/massif-press/compcon/issues/1275)
* **Compendium:** correct action economy items ([46d738e](https://github.com/massif-press/compcon/commit/46d738e3ecc4e033a7280627b0e6529b7396dc45))
* **Compendium:** fix 'MISSING' popup when hovering over mech sensor range description ([55595b7](https://github.com/massif-press/compcon/commit/55595b726e51b0480d53f51687d678148efc134a)), closes [#1303](https://github.com/massif-press/compcon/issues/1303)
* **Compendium:** fix compendium card/grid view if show exotic option is ON ([537c544](https://github.com/massif-press/compcon/commit/537c5442b087f1c5a7ae7e492c641ea0998277bd)), closes [#1333](https://github.com/massif-press/compcon/issues/1333)
* **Compendium:** fix profiled weapon display issues ([4df37c7](https://github.com/massif-press/compcon/commit/4df37c7ee76c524c20d3d1bffb73d25cb6535265)), closes [#1219](https://github.com/massif-press/compcon/issues/1219) [#1238](https://github.com/massif-press/compcon/issues/1238) [#1228](https://github.com/massif-press/compcon/issues/1228)
* **Compendium:** fix systems card view ([8931be0](https://github.com/massif-press/compcon/commit/8931be00439a4a6d8de0bbfa3e8851494ba93ee7)), closes [#1347](https://github.com/massif-press/compcon/issues/1347)
* **Compendium:** fix Tokugawa Overclock not showing up in Compendium ([d670300](https://github.com/massif-press/compcon/commit/d67030081812d9f5ddddada02b05922cae924eae))
* **Compendium:** item filter now includes weapon profile tags ([8db5f9b](https://github.com/massif-press/compcon/commit/8db5f9bd80b7dd46f6579ed881c658ef6033004b)), closes [#1331](https://github.com/massif-press/compcon/issues/1331)
* **Compendium:** new LCP backgrounds should now show up correctly ([7d781b7](https://github.com/massif-press/compcon/commit/7d781b77fcaecd7499ee55c5c9d19e38ee725fa9)), closes [#1326](https://github.com/massif-press/compcon/issues/1326)
* **Compendium:** suppress useless error message over empty compendium sections ([b598ac2](https://github.com/massif-press/compcon/commit/b598ac2798d9e4b8836d960f16cc3c08d5eca8fd)), closes [#1366](https://github.com/massif-press/compcon/issues/1366)
* **Compendium:** update lancer-data ([eb352eb](https://github.com/massif-press/compcon/commit/eb352ebeec165ab111bdc6fe37488194f8257b4c))
* **global:** re-add im/export options to settings menu ([d1c88c2](https://github.com/massif-press/compcon/commit/d1c88c2cb912cc22d2c690135c7a87572865a056)), closes [#1331](https://github.com/massif-press/compcon/issues/1331) [#1370](https://github.com/massif-press/compcon/issues/1370)
* **Global:** correct bad margin changes ([5f3b510](https://github.com/massif-press/compcon/commit/5f3b51065fd982aa13b4e0f10e009622a4aac10e)), closes [#1353](https://github.com/massif-press/compcon/issues/1353)
* **Main Menu:** update email validation rules ([b33b7c6](https://github.com/massif-press/compcon/commit/b33b7c663b0a61add92a5a696e43e1d682135f49)), closes [#1258](https://github.com/massif-press/compcon/issues/1258)
* **Mech Sheet:** correct formorian frame math ([6d6e314](https://github.com/massif-press/compcon/commit/6d6e31421b605f068e7b0a34e189fa8dd717f57d))
* **Mech Sheet:** corrects exotic weapons being able to fit in inappropriate mounts ([159b44f](https://github.com/massif-press/compcon/commit/159b44fc180c34065c42f55583890a36f1793748)), closes [#1367](https://github.com/massif-press/compcon/issues/1367)
* **Mech Sheet:** don't add an additional erroneous aux mount to a retrofitted flex ([de52b7e](https://github.com/massif-press/compcon/commit/de52b7e3cfdd739b89efd7941fe5c5a068bd6c4d)), closes [#1035](https://github.com/massif-press/compcon/issues/1035)
* **Mech Sheet:** ensure core passives show up correctly ([f655072](https://github.com/massif-press/compcon/commit/f6550729d4c74d78e054b2ff4f04996baf44da78)), closes [#1459](https://github.com/massif-press/compcon/issues/1459)
* **Mech Sheet:** ensure tags and profiletags are shown together ([8690d27](https://github.com/massif-press/compcon/commit/8690d27094e45ce0df66c9b672e5c871f0c12690)), closes [#1423](https://github.com/massif-press/compcon/issues/1423)
* **Mech Sheet:** fix lancaster print error ([ae7f64b](https://github.com/massif-press/compcon/commit/ae7f64bbe2bc1ed613a3741496d1852748d9478e)), closes [#1399](https://github.com/massif-press/compcon/issues/1399)
* **Mech Sheet:** fixed layout of frame trait blocks that contain actions or deployables ([9e6bf88](https://github.com/massif-press/compcon/commit/9e6bf88b475da11c147b840ee578b75bf9102f20)), closes [#1295](https://github.com/massif-press/compcon/issues/1295)
* **Mech Sheet:** improve consistency of item renaming ([000cdab](https://github.com/massif-press/compcon/commit/000cdabfeff4b745322760ab954ea0189c4025b6)), closes [#1473](https://github.com/massif-press/compcon/issues/1473) [#1473](https://github.com/massif-press/compcon/issues/1473)
* **Mech Sheet:** prevent mech core passive from appearing twice ([5ff0634](https://github.com/massif-press/compcon/commit/5ff0634ce563c69a48a7aaef79c30519e87d158f)), closes [#1501](https://github.com/massif-press/compcon/issues/1501)
* **Mech Sheet:** re-add equipment notes to mech equipment ([fc31acb](https://github.com/massif-press/compcon/commit/fc31acba4146d8ae9398988641b8366285f082d8)), closes [#1223](https://github.com/massif-press/compcon/issues/1223)
* **Mission Runner:** fix counterdata error message ([2181444](https://github.com/massif-press/compcon/commit/2181444463a8a1138db64e02986512b520a60b2e)), closes [#1293](https://github.com/massif-press/compcon/issues/1293) [#1292](https://github.com/massif-press/compcon/issues/1292) [#1291](https://github.com/massif-press/compcon/issues/1291)
* **Pilot Sheet:** correct special equipment filter catching higher LL items within aquired licenses ([8a9bf13](https://github.com/massif-press/compcon/commit/8a9bf13a8495c26eb320f319281f08dbf852703d)), closes [#1348](https://github.com/massif-press/compcon/issues/1348)
* **Pilot Sheet:** corrects duplicate license issue ([3f09b84](https://github.com/massif-press/compcon/commit/3f09b840b5eabeb7ea65679286e9452417dd3222)), closes [#1371](https://github.com/massif-press/compcon/issues/1371)
* **Pilot Sheet:** fix back button on new character > template page ([b4d770a](https://github.com/massif-press/compcon/commit/b4d770a33528e8bc322a9b0c5871533f996e195d)), closes [#1274](https://github.com/massif-press/compcon/issues/1274)
* **Pilot Sheet:** fix ident card layout ([a19505f](https://github.com/massif-press/compcon/commit/a19505f55f809bab4363864453fbe4faba308555)), closes [#1434](https://github.com/massif-press/compcon/issues/1434)
* **Pilot Sheet:** fix missing add equipment button on mobile list view ([1ef4132](https://github.com/massif-press/compcon/commit/1ef41326d24c094cc4ed58e973dc4098a3d63c86)), closes [#1495](https://github.com/massif-press/compcon/issues/1495)
* correct spacing and alignment issues ([549b828](https://github.com/massif-press/compcon/commit/549b8288aad0561b539d1e09377ff6f032987f2c)), closes [#1260](https://github.com/massif-press/compcon/issues/1260) [#1253](https://github.com/massif-press/compcon/issues/1253) [#1251](https://github.com/massif-press/compcon/issues/1251) [#1247](https://github.com/massif-press/compcon/issues/1247)
* update FAQ ([706707f](https://github.com/massif-press/compcon/commit/706707f13e98e3265c929dc2c842c66f5a843cdd)), closes [#1076](https://github.com/massif-press/compcon/issues/1076)
* **Pilot Sheet:** fix new talent UI scroll bugs ([23d1cf7](https://github.com/massif-press/compcon/commit/23d1cf7033c3e7825f68df74682dbc792e661e0d))
* **Pilot Sheet:** fix some new talent ui math ([0a54999](https://github.com/massif-press/compcon/commit/0a54999316ef1db756466018183d2f80a695f59b)), closes [#1397](https://github.com/massif-press/compcon/issues/1397)
* **Pilot Sheet:** fixes pilot reserves incorrectly referencing data ([4150f9f](https://github.com/massif-press/compcon/commit/4150f9f8facf75218b4e8c3f4f69080c8dba44f4)), closes [#1028](https://github.com/massif-press/compcon/issues/1028)
* **Pilot Sheet:** make extra equipment from "Extended Harness" available ([557d03a](https://github.com/massif-press/compcon/commit/557d03ae727573cb81e567cf09fc8e96c7a41038)), closes [#1426](https://github.com/massif-press/compcon/issues/1426)


### Features

* **Active Mode:** add boost movement pips ([1178355](https://github.com/massif-press/compcon/commit/117835565e37038bc5108abb5366ee608351625c)), closes [#1211](https://github.com/massif-press/compcon/issues/1211)
* **Active Mode:** add cascading nhp check ([b53312d](https://github.com/massif-press/compcon/commit/b53312dab6928f6905afb65048e433279598014d)), closes [#1002](https://github.com/massif-press/compcon/issues/1002)
* **Active Mode:** add new rolling menu ([5445da6](https://github.com/massif-press/compcon/commit/5445da606e6aab6d5b6f1e343609d3da07b3410b)), closes [#1289](https://github.com/massif-press/compcon/issues/1289) [#1194](https://github.com/massif-press/compcon/issues/1194)
* **Active Mode:** add support for rolling Tech Attacks other than Invade ([d324edd](https://github.com/massif-press/compcon/commit/d324edd82cf02364f1545e722b013ab5a57c29ce)), closes [#1317](https://github.com/massif-press/compcon/issues/1317)
* **Active Mode:** added mark equipment as used ([d1148ab](https://github.com/massif-press/compcon/commit/d1148ab0691ab39063deaf73209aa2d07c25e2de)), closes [#1186](https://github.com/massif-press/compcon/issues/1186)
* **Active Mode:** change color of mech select button ([59e9c1d](https://github.com/massif-press/compcon/commit/59e9c1d50146ba10a92dca10a37c378d6df411a7)), closes [#1484](https://github.com/massif-press/compcon/issues/1484)
* **Compendium:** add down and out to table to compendium reference ([0473138](https://github.com/massif-press/compcon/commit/0473138f075bae004176e4532555c2405ec32310)), closes [#971](https://github.com/massif-press/compcon/issues/971)
* **Compendium:** add SP filter for compendium and selectors ([d0ef1d8](https://github.com/massif-press/compcon/commit/d0ef1d8dbd76389c82b38fb6cc1b2c4e01909d4c)), closes [#811](https://github.com/massif-press/compcon/issues/811)
* **Compendium:** add structure and stress values to frame statblocks ([c000275](https://github.com/massif-press/compcon/commit/c000275ca11c4e0b86219091d5d8b21219a0ca0b)), closes [#1230](https://github.com/massif-press/compcon/issues/1230)
* **Compendium:** better mobile view support in the compendium ([1809f1b](https://github.com/massif-press/compcon/commit/1809f1b5a50b656c4dc09975b8b400afd4314878)), closes [#1118](https://github.com/massif-press/compcon/issues/1118) [#866](https://github.com/massif-press/compcon/issues/866)
* **Compendium:** better sort weapons by size ([28fad12](https://github.com/massif-press/compcon/commit/28fad1282afa52ad09d25c2ceac2e42faf772040)), closes [#477](https://github.com/massif-press/compcon/issues/477) [#1270](https://github.com/massif-press/compcon/issues/1270)
* **Compendium:** lCP filtering and new mech menu frame filtering ([83ecace](https://github.com/massif-press/compcon/commit/83ecacece199fe645432f13e3b0739dcfcedecf5)), closes [#965](https://github.com/massif-press/compcon/issues/965) [#1254](https://github.com/massif-press/compcon/issues/1254)
* **Data:** added special_equipment compendiumItem feature ([cb9d141](https://github.com/massif-press/compcon/commit/cb9d141fb3f675c807a5e76419ffe4b9a8067995)), closes [#671](https://github.com/massif-press/compcon/issues/671)
* **Deveoplment Environment:** allow non-localhost only access to development builds ([6c1cffb](https://github.com/massif-press/compcon/commit/6c1cffb05add4d289994395b0bdcf2856ed666c4))
* **global:** add direction props for tooltips, add tooltip bg color in theme ([b3548e2](https://github.com/massif-press/compcon/commit/b3548e2911cdf4d253c1e759ca260e5256bc1bf8)), closes [#875](https://github.com/massif-press/compcon/issues/875)
* **global:** add range and damage to action objects ([3cada92](https://github.com/massif-press/compcon/commit/3cada92a64aa50f227337c8f6d496c4d91c70b96)), closes [#1198](https://github.com/massif-press/compcon/issues/1198)
* **Global:** add backend account management ([15e4a06](https://github.com/massif-press/compcon/commit/15e4a0688717d4ad8ce344fc38a103596c3f04c9)), closes [#453](https://github.com/massif-press/compcon/issues/453)
* **Global:** talent UI rebuild ([0f2d75e](https://github.com/massif-press/compcon/commit/0f2d75e5bc364f52f603040291a5a6b11b19bca5)), closes [#1217](https://github.com/massif-press/compcon/issues/1217)
* **Global): feat(Global): feat(Global:** open accounts to the public ([f85bd9c](https://github.com/massif-press/compcon/commit/f85bd9c0f5a70a3b949b58c5628a6f100a5237d4)), closes [#1438](https://github.com/massif-press/compcon/issues/1438) [#1432](https://github.com/massif-press/compcon/issues/1432) [#1420](https://github.com/massif-press/compcon/issues/1420) [#1415](https://github.com/massif-press/compcon/issues/1415) [#1438](https://github.com/massif-press/compcon/issues/1438) [#1432](https://github.com/massif-press/compcon/issues/1432) [#1420](https://github.com/massif-press/compcon/issues/1420) [#1415](https://github.com/massif-press/compcon/issues/1415) [#1438](https://github.com/massif-press/compcon/issues/1438) [#1432](https://github.com/massif-press/compcon/issues/1432) [#1420](https://github.com/massif-press/compcon/issues/1420) [#1415](https://github.com/massif-press/compcon/issues/1415)
* **main menu:** make welcome message squelching more robust ([3ef6d78](https://github.com/massif-press/compcon/commit/3ef6d789994ec4913a56527d831c39c873e29bd2)), closes [#1369](https://github.com/massif-press/compcon/issues/1369)
* add additional syncing options ([b3c0c93](https://github.com/massif-press/compcon/commit/b3c0c9334368a8125d42786fcfe6a2a6bccdc75e))
* add syncing for npcs, encounters, missions, and active missions ([cfae021](https://github.com/massif-press/compcon/commit/cfae0219c2e90ef2474499abab3f8417b53112eb))
* **Mech Sheet:** add systems while over SP limit ([5036743](https://github.com/massif-press/compcon/commit/5036743b6aed84e80f8832f3a1db22f4ff16532a)), closes [#1071](https://github.com/massif-press/compcon/issues/1071)
* **Pilot Roster:** add pilot group renaming ([218bc2c](https://github.com/massif-press/compcon/commit/218bc2c817894cb4ea80941f18b93690f3b022e3)), closes [#1389](https://github.com/massif-press/compcon/issues/1389)
* **Pilot Sheet:** add mobile-format log in ([7f23b4a](https://github.com/massif-press/compcon/commit/7f23b4a3a9e8e73913f732aef068522b09a69340))
* **Pilot Sheet:** add toggleable hide for locked talents on pilot sheet ([275363b](https://github.com/massif-press/compcon/commit/275363b35bd813090df4b038efbf6ca9998d6534)), closes [#1388](https://github.com/massif-press/compcon/issues/1388)
* **Pilot Sheet:** enforce true item names in generated statblocks ([d72e379](https://github.com/massif-press/compcon/commit/d72e3793d9e7b63011ad8dda8ef2ba2d5c12f882)), closes [#1287](https://github.com/massif-press/compcon/issues/1287)
* **Pilot Sheet:** pilot HP QoL improvements ([aeda3bb](https://github.com/massif-press/compcon/commit/aeda3bb0c1845605fc625287f5b597621d6bb585)), closes [#1271](https://github.com/massif-press/compcon/issues/1271)
* credits page rebuild ([eb26697](https://github.com/massif-press/compcon/commit/eb26697c42813ebf1d6e461cfc22baddebd68312)), closes [#1240](https://github.com/massif-press/compcon/issues/1240)



## [2.2.5](https://github.com/massif-press/compcon/compare/2.2.0...2.2.5) (2021-01-19)


### Bug Fixes

* **Active Mode:** fix burn check not advancing round ([83993e9](https://github.com/massif-press/compcon/commit/83993e97dae8dc4d2079497e5dd5d5ec1dc18818)), closes [#1151](https://github.com/massif-press/compcon/issues/1151)
* **Active Mode:** fix Invasion actions not resetting ([37c5c24](https://github.com/massif-press/compcon/commit/37c5c2469405d7b11913fe4868eb758759d688ca)), closes [#1185](https://github.com/massif-press/compcon/issues/1185)
* **Active Mode:** fix some light mode colors ([193a358](https://github.com/massif-press/compcon/commit/193a35860b6f3c7bd70a7a48ec55fc257f2f4bd6))
* **Active Mode:** fixed incorrect accuracy stacking ([90dae0b](https://github.com/massif-press/compcon/commit/90dae0b7c43d671f863c722e1c8cd1fc57189cd2))
* **Compendium:** correct action economy items ([15266f6](https://github.com/massif-press/compcon/commit/15266f6cba9e430d92157ff53dea4aa70260523e))
* **Compendium:** fix Skill Triggers compendium page ([9cd8814](https://github.com/massif-press/compcon/commit/9cd8814fc82ff7f07e8ed760f58a39e103f5c9a7)), closes [#1176](https://github.com/massif-press/compcon/issues/1176) [#1161](https://github.com/massif-press/compcon/issues/1161) [#1160](https://github.com/massif-press/compcon/issues/1160) [#1189](https://github.com/massif-press/compcon/issues/1189)
* **Compendium:** fix Tokugawa Overclock not showing up in Compendium ([4b9bbd5](https://github.com/massif-press/compcon/commit/4b9bbd523fabe04cfd62512d43e59846df91962d))
* **Compendium:** update lancer-data ([9600ef0](https://github.com/massif-press/compcon/commit/9600ef0125703814ccef6d4cfc99aeb08d7a5b86))
* **Compendium:** various bugfixes ([008c78e](https://github.com/massif-press/compcon/commit/008c78eaed7e8754ee1ae212ae171b3381193b39))
* **Mech Sheet:** fix weapon mod application criteria ([e6f21be](https://github.com/massif-press/compcon/commit/e6f21be459d1480bcbbd9623a825fbe642e5e483)), closes [#1138](https://github.com/massif-press/compcon/issues/1138)
* **Pilot Sheet:** hotfixes missing (but otherwise useable) pilots. ([cbb7a79](https://github.com/massif-press/compcon/commit/cbb7a793e1fa46ac7971454adca65c6eea9ce4ce))
* update FAQ ([4a9b866](https://github.com/massif-press/compcon/commit/4a9b866d88f1e40ca59c850cf705eabf21d3bdab)), closes [#1076](https://github.com/massif-press/compcon/issues/1076)
* **Pilot Sheet:** re-enable pilot equipment notes ([1e170bd](https://github.com/massif-press/compcon/commit/1e170bd938ad0cafb251727efb84e32b7fd19e1b)), closes [#1131](https://github.com/massif-press/compcon/issues/1131)


### Features

* expands the license structure to include non-core licenses of less than or more than three ranks ([7af5915](https://github.com/massif-press/compcon/commit/7af5915766c91396a58a95ff4a37694d8c9c0bec))
* **Active Mode:** pip bar improvements ([d8247e9](https://github.com/massif-press/compcon/commit/d8247e9c0ec933eb359bc25bcfe6d04d0ea1ce5e))
* **Mission Runner): feat(Mission Runner:** add Pilot Active Mech selector ([0a91a0d](https://github.com/massif-press/compcon/commit/0a91a0d66aa0c75fb590803d9323268f7cf9fddf))



# [2.2.0](https://github.com/massif-press/compcon/compare/2.1.8...2.2.0) (2020-12-24)


### Bug Fixes

* **Active Mode:** fix stunned mechs being stuck at 5 evasion ([793ef13](https://github.com/massif-press/compcon/commit/793ef13defd114451df07c7278f42e9314c0e343)), closes [#970](https://github.com/massif-press/compcon/issues/970)
* **Active Mode:** prevent range bonuses from modifying integrated weapons, per Tom ([bca1541](https://github.com/massif-press/compcon/commit/bca1541c7dd182d80107029c1a8d34f85b2a1262)), closes [#968](https://github.com/massif-press/compcon/issues/968)
* **Compendium:** fix Hunter I/Lunge talent text ([ea9cae8](https://github.com/massif-press/compcon/commit/ea9cae8191224bdb2589e0bdf90bb4065c99cb93)), closes [#972](https://github.com/massif-press/compcon/issues/972)
* **MechWeapon:** External batteries range fix ([911ef86](https://github.com/massif-press/compcon/commit/911ef86025e7459127aae79a015beccddd52c5ee))


### Features

* **Mech Sheet:** adds Pilot Talent synergy to loadout views where applicable ([86db010](https://github.com/massif-press/compcon/commit/86db010846dc3ac0bd5e0cdaf12b32ef6575473e)), closes [#506](https://github.com/massif-press/compcon/issues/506)
* **Pilot Sheet:** add bonuses to reserves ([bcb7dd3](https://github.com/massif-press/compcon/commit/bcb7dd3a732046b66cfa441795c8b391ae57946b)), closes [#672](https://github.com/massif-press/compcon/issues/672)
* **Pilot Sheet:** clean up some pilot sheet styling ([06d97e2](https://github.com/massif-press/compcon/commit/06d97e2af1bb25a46c16d854036ac8106b27c574))



## [2.1.8](https://github.com/massif-press/compcon/compare/2.1.7...2.1.8) (2020-11-20)


### Reverts

* Revert "Added GM Resource Exporting!" ([4a85b3c](https://github.com/massif-press/compcon/commit/4a85b3c4567e8970f24c206066198892d9dd9011))
* Revert "Added GM Resource Exporting!" ([bfec3ea](https://github.com/massif-press/compcon/commit/bfec3ea29afbf4006e8b8d8eb34eb0a420f47a01))



## [2.1.7](https://github.com/massif-press/compcon/compare/2.1.6...2.1.7) (2020-07-08)


### Bug Fixes

* **Active Mode:** fixed the reactor stress popup erroneously referencing structure instead ([83ef700](https://github.com/massif-press/compcon/commit/83ef7009ac7f25e0b98a2d20f16a388b2dd54301)), closes [#878](https://github.com/massif-press/compcon/issues/878)
* **Compendium:** correct Grease Monkey II text ([86fb1fc](https://github.com/massif-press/compcon/commit/86fb1fce8cb1a72f258ca7f302b904ed8313dd90)), closes [#932](https://github.com/massif-press/compcon/issues/932)
* **Mech Sheet:** correct mech stats header spacing ([a181d5a](https://github.com/massif-press/compcon/commit/a181d5afe2c6f2ee6424008e02d231b2c812844f)), closes [#937](https://github.com/massif-press/compcon/issues/937)
* **Mission Runner:** correct encounter PR calculation with reinforcements ([a57db58](https://github.com/massif-press/compcon/commit/a57db5854898dbf2ad90b1fe863c7ea77d5c6a52)), closes [#935](https://github.com/massif-press/compcon/issues/935)
* **Mission Runner:** fixed missing core power descriptions ([38c2db4](https://github.com/massif-press/compcon/commit/38c2db46dfd19526c2211f05bab9d5927866cee4)), closes [#888](https://github.com/massif-press/compcon/issues/888)
* **NPC Roster:** fix label sorting in the NPC roster ([289d263](https://github.com/massif-press/compcon/commit/289d263a0ad7a208962ff9ad6e8d8c9ca3ce34d9)), closes [#893](https://github.com/massif-press/compcon/issues/893)
* **NPC Roster:** impose mandatory selection on NPC tier ([e277c0c](https://github.com/massif-press/compcon/commit/e277c0c99f6fb7b7ad277939f4f651bbc1e5798c)), closes [#952](https://github.com/massif-press/compcon/issues/952)
* **Pilot Sheet:** added a Pilot Roster reorder/lock order toggle to touch devices ([c39b4c9](https://github.com/massif-press/compcon/commit/c39b4c96e8798fa39edaac14678cedf04d01ced7)), closes [#896](https://github.com/massif-press/compcon/issues/896)
* **Pilot Sheet:** overflow very long pilot callsigns ([b5be738](https://github.com/massif-press/compcon/commit/b5be7381d08aec7847bb5341a742a0044ed5975e)), closes [#921](https://github.com/massif-press/compcon/issues/921)


### Features

* add HORUS theme and intro ([4fd7283](https://github.com/massif-press/compcon/commit/4fd728386a185e948e0fe6207e56c4a1e4abf584))
* **Active Mode:** move full repair active mode button ([f65f799](https://github.com/massif-press/compcon/commit/f65f799c006379eef68ea976d046ffa5db035b40)), closes [#930](https://github.com/massif-press/compcon/issues/930)
* **Compendium:** add License Level column to Systems table ([dc824ad](https://github.com/massif-press/compcon/commit/dc824ad8029d584353448575da9f4d96bbad969e)), closes [#929](https://github.com/massif-press/compcon/issues/929)
* **Compendium:** adds factions to compendium ([7652b91](https://github.com/massif-press/compcon/commit/7652b916f04458c9a3767edbef0b2e7c2c8da01d))
* **Mission Runner:** added Overshield tracker to Mission Runner NPCs ([165872d](https://github.com/massif-press/compcon/commit/165872da30dc8e9c130ebd007bb7dc40d36be485)), closes [#872](https://github.com/massif-press/compcon/issues/872)
* **Pilot Sheet:** add bonuses to reserves ([0470b6a](https://github.com/massif-press/compcon/commit/0470b6a0fbb5ca831734a1a7acd805a2ec0bc85b)), closes [#672](https://github.com/massif-press/compcon/issues/672)
* **Pilot Sheet:** adds the detail field to custom skill triggers ([0a9b9bc](https://github.com/massif-press/compcon/commit/0a9b9bca11b6169f63bc55063bce79a497d4ace0)), closes [#903](https://github.com/massif-press/compcon/issues/903)
* **Pilot Sheet:** improved equipment and talent sorting ([0edba82](https://github.com/massif-press/compcon/commit/0edba821ca8084c6c268e633f619bede5a978995)), closes [#880](https://github.com/massif-press/compcon/issues/880)


### Reverts

* Revert "fixed a little spacing on the pilot header" ([1048810](https://github.com/massif-press/compcon/commit/10488104222dfa7a7020ef692c675fc6d66aa34f))



## [2.1.4](https://github.com/massif-press/compcon/compare/2.1.3...2.1.4) (2020-06-09)


### Bug Fixes

* **Compendium:** correct structure damage hull save/check text ([a75bba3](https://github.com/massif-press/compcon/commit/a75bba3d87a37d2f7f1778a8ad81f544260e4682)), closes [#883](https://github.com/massif-press/compcon/issues/883)
* **NPC Roster:** correct remaining 'sort by' issues ([ef395e2](https://github.com/massif-press/compcon/commit/ef395e2913d05526f2d2d8693f1a6183a6a8a2bd)), closes [#877](https://github.com/massif-press/compcon/issues/877)


### Features

* added more cc-specific icons ([4722273](https://github.com/massif-press/compcon/commit/472227307e945a7358e5bd2bd977ebba8fc308ab))
* **Compendium:** improve compendium mobile view ([ae1de6d](https://github.com/massif-press/compcon/commit/ae1de6dbdb316486fb0c46767a5ae1514040b430))
* **Pilot Sheet:** add organizational groupings for pilots ([cd219c7](https://github.com/massif-press/compcon/commit/cd219c71307ceaebc55db6faf8f31ac1aa0b6769))
* **Pilot Sheet:** add roll20 exporter ([24906ef](https://github.com/massif-press/compcon/commit/24906ef1f50ce89caea0a66ddb4a150aa0447058))
* **Pilot Sheet:** implement more new icons on the pilot sheet ([405cc2e](https://github.com/massif-press/compcon/commit/405cc2e741a8c8c5ae72db83e0c4691f2e63fbe4))



## [2.1.3](https://github.com/massif-press/compcon/compare/2.1.2...2.1.3) (2020-05-26)


### Bug Fixes

* **Mission Builder:** hotfix: correct mission builder load error ([ebdde74](https://github.com/massif-press/compcon/commit/ebdde74071c9550aed357ce7ce87b279c82f3fe6)), closes [#869](https://github.com/massif-press/compcon/issues/869)



## [2.1.2](https://github.com/massif-press/compcon/compare/2.1.0...2.1.2) (2020-05-26)


### Bug Fixes

* **Active Mode:** correct the Direct Hit rules entry ([5c91602](https://github.com/massif-press/compcon/commit/5c916022b8d954024d71b207d0db874426b74817)), closes [#862](https://github.com/massif-press/compcon/issues/862)
* **Active Mode:** hotfix for core bonuses and talents still being stuck on the new pilot mode ([0150920](https://github.com/massif-press/compcon/commit/015092053f30206b52cb120c44b4edd26b39a894)), closes [#854](https://github.com/massif-press/compcon/issues/854)
* **Encounter Builder:** fix bad encounter builder image setter ([5fd47d8](https://github.com/massif-press/compcon/commit/5fd47d8c153b55f8b5186a723c09f45e358caa33)), closes [#856](https://github.com/massif-press/compcon/issues/856)


### Features

* **Compendium:** mobile main menu and compendium ([615d1be](https://github.com/massif-press/compcon/commit/615d1be7d7a2921f8ce24643965f500578209e72))
* **Compendium:** restyled the compendium landing page ([fd31889](https://github.com/massif-press/compcon/commit/fd31889a797f15bcf0f131f832fcc9c2d17c6da6))
* **NPC Roster:** add npc feature origin sorting in npc builder and compendium ([627b789](https://github.com/massif-press/compcon/commit/627b789a5d460d8091fd54dc5965936f14a514dd)), closes [#833](https://github.com/massif-press/compcon/issues/833)



# [2.1.0](https://github.com/massif-press/compcon/compare/3.0.37...2.1.0) (2020-05-22)


### Bug Fixes

* **Encounter Builder:** fixed a bug that was preventing encounter GM notes from saving correctly ([839fc0d](https://github.com/massif-press/compcon/commit/839fc0d68f4263cfca08dfeb1af18f4f919ac762)), closes [#853](https://github.com/massif-press/compcon/issues/853)


### Features

* **Active Mode:** add gm-side tracking pips to player limited items in the encounter runner ([5f38a68](https://github.com/massif-press/compcon/commit/5f38a6862d705d9d54eb8dfc76e00650316d3b65)), closes [#851](https://github.com/massif-press/compcon/issues/851)
* **Active Mode:** added an overshield tracker and an alternate condensed view for pip bars ([6cab3c2](https://github.com/massif-press/compcon/commit/6cab3c2eeaade57d730424622885a8e4794f44de)), closes [#635](https://github.com/massif-press/compcon/issues/635)
* **Active Mode:** make + and - buttons look more explicitly like buttons ([b3cd5e4](https://github.com/massif-press/compcon/commit/b3cd5e4bfe4448e406108130810f1801f08610ea))
* **Active Mode:** prompt engineering check for burn damage ([72805f5](https://github.com/massif-press/compcon/commit/72805f5d2d2991b8f37e72669e1ba54eb82463d2)), closes [#527](https://github.com/massif-press/compcon/issues/527)
* **Active Mode:** split active mode into pilot/mech modes ([78c4edc](https://github.com/massif-press/compcon/commit/78c4edcd7f8412deab24a7b650c3fc7f0b63650a)), closes [#492](https://github.com/massif-press/compcon/issues/492)
* **Encounter Builder:** power rating tooltips; encounter power rating also considers reinforcements ([c19a758](https://github.com/massif-press/compcon/commit/c19a758ee1b3acbb8c35c32d707361d63cbbfc7c)), closes [#852](https://github.com/massif-press/compcon/issues/852)
* **Pilot Sheet:** add pilot duplication and cloning ([ec75f8d](https://github.com/massif-press/compcon/commit/ec75f8dd978660b5d5e3a47e7bbcc19231dbb98a)), closes [#504](https://github.com/massif-press/compcon/issues/504)



## [3.0.37](https://github.com/massif-press/compcon/compare/2.0.36...3.0.37) (2020-05-21)


### Bug Fixes

* **Mech Sheet:** corrected and cleaned up some image selection issues ([fea01c8](https://github.com/massif-press/compcon/commit/fea01c82756b0e1a3228b2a60695b5f2ae670ace))



## [2.0.36](https://github.com/massif-press/compcon/compare/2.0.35...2.0.36) (2020-05-20)



## [2.0.35](https://github.com/massif-press/compcon/compare/2.0.34...2.0.35) (2020-05-20)


### Bug Fixes

* **Active Mode:** prevent talent counters from being added early ([e1a26ac](https://github.com/massif-press/compcon/commit/e1a26ac0c7af29577b03c3e1c15b64c70533eedc)), closes [#849](https://github.com/massif-press/compcon/issues/849)
* **Mech Sheet:** fixed an error that would pop up when equipping external batteries on a barbarossa ([5a688e4](https://github.com/massif-press/compcon/commit/5a688e4e65be354674551cdd41c71c647dcd24c8)), closes [#844](https://github.com/massif-press/compcon/issues/844)
* **Mech Sheet:** fixed engineer integrated weapon not updating correctly ([2d3805b](https://github.com/massif-press/compcon/commit/2d3805b0e0d8197712b48ccc2807f963858a8859)), closes [#763](https://github.com/massif-press/compcon/issues/763)


### Features

* **Compendium:** add frame galleries ([c3349cc](https://github.com/massif-press/compcon/commit/c3349cc3904cd7a17acfa7ad4fe341963c7b27fc))
* **Mech Sheet:** armament ammo selection box ([28b7542](https://github.com/massif-press/compcon/commit/28b75426f4c40ea999ff85fdca14a2892da55453)), closes [#505](https://github.com/massif-press/compcon/issues/505)
* **Pilot Sheet:** arrange already-selected talents to the top of the talent selector list ([7cec578](https://github.com/massif-press/compcon/commit/7cec57854fbc5feb6738e977a62d1dc2c911d184))



## [2.0.34](https://github.com/massif-press/compcon/compare/2.0.33...2.0.34) (2020-05-15)



## [2.0.33](https://github.com/massif-press/compcon/compare/2.0.32...2.0.33) (2020-05-15)



## [2.0.32](https://github.com/massif-press/compcon/compare/2.0.31...2.0.32) (2020-05-15)


### Bug Fixes

* **Mech Sheet:** hotfix for missing artist map images ([9c31ed3](https://github.com/massif-press/compcon/commit/9c31ed3bd855a1d8762aa1194225a799274329c3))



## [2.0.31](https://github.com/massif-press/compcon/compare/2.0.30...2.0.31) (2020-05-15)


### Bug Fixes

* item effect tags now display correctly ([25a4dc7](https://github.com/massif-press/compcon/commit/25a4dc7b49c04e40ec910cb545e770cd3a3d89ea)), closes [#842](https://github.com/massif-press/compcon/issues/842)
* **Mech Sheet:** can now correctly set max uses and damage type on the Engineer's Prototype Weapon ([ccf2bbb](https://github.com/massif-press/compcon/commit/ccf2bbb07080e0fc8769a05f1fae6aa89bd18648)), closes [#798](https://github.com/massif-press/compcon/issues/798)


### Features

* **Mech Sheet:** updated the image selection UI, added in the Retrograde premade EVERESTs ([b9c0fb4](https://github.com/massif-press/compcon/commit/b9c0fb490149c3df88381397ac1879952f57c192)), closes [#498](https://github.com/massif-press/compcon/issues/498)
* **Pilot Sheet:** adds pregenerated templates as a character creation option ([ff1e91b](https://github.com/massif-press/compcon/commit/ff1e91b0a4a60f48da0e7ada43c69cccf145a617)), closes [#511](https://github.com/massif-press/compcon/issues/511)
* show original equipment name on renamed items ([c109271](https://github.com/massif-press/compcon/commit/c10927113e1ea068842ad50a56cbe692e8d64b7c)), closes [#789](https://github.com/massif-press/compcon/issues/789)



## [2.0.30](https://github.com/massif-press/compcon/compare/2.0.29...2.0.30) (2020-04-29)


### Bug Fixes

* **Active Mode:** corrected serialization of mech current core power ([683a9fa](https://github.com/massif-press/compcon/commit/683a9fa59b0c52c50d3add94372f5cbb34ccf9ec)), closes [#790](https://github.com/massif-press/compcon/issues/790)
* **Encounter Builder:** fixes a bad routing call that hides the nav bar on encounter or mission dele ([7c4da21](https://github.com/massif-press/compcon/commit/7c4da21eeb0a884218624c8afb0cd9ef12bdee9d)), closes [#821](https://github.com/massif-press/compcon/issues/821)
* **Encounter Builder:** Restore scrolling when multiple NPC selectors have been active on page ([8694a93](https://github.com/massif-press/compcon/commit/8694a93dc00ed120ade072423d38537f76e25172))
* **Mech Sheet:** unmount superheavy bracing only on superheavy switch ([2a7f87a](https://github.com/massif-press/compcon/commit/2a7f87af7b871c8eaf7b91c6f22902da91b1c25f)), closes [#819](https://github.com/massif-press/compcon/issues/819)
* **Mission Runner:** corrected active mission NPC hp serialization ([a78054f](https://github.com/massif-press/compcon/commit/a78054f16eecc83660e1cbb6fa553015b5e0688e)), closes [#801](https://github.com/massif-press/compcon/issues/801)
* **Mission Runner:** hide superheavy-locked mounted weapons in active mission player cards ([1011397](https://github.com/massif-press/compcon/commit/10113971113fc22bb281c82445625f1b5eee9fed)), closes [#786](https://github.com/massif-press/compcon/issues/786)
* **NPC Roster:** correctly set NPC info text editor content ([2f010a4](https://github.com/massif-press/compcon/commit/2f010a4c8be353761d419c9fe7e1d456f27fa493)), closes [#797](https://github.com/massif-press/compcon/issues/797)
* **Pilot Sheet:** s/Biograpgy/Biography/g ([20f1708](https://github.com/massif-press/compcon/commit/20f170885fcd457738edbe14d79fa3194959046e))


### Features

* **Mission Runner:** add counters to pilots and npcs in the mission runner ([995a8b7](https://github.com/massif-press/compcon/commit/995a8b75d50dc898d919e7ede7b61d507b12e27b)), closes [#546](https://github.com/massif-press/compcon/issues/546)
* **Mission Runner:** small mission runner upgrades ([041e26e](https://github.com/massif-press/compcon/commit/041e26e2a9e3521c23aaf3f0c3f3daec537f213b))
* **Pilot Sheet:** improve Downtime Organizations from the Pilot Sheet ([127231e](https://github.com/massif-press/compcon/commit/127231e33eba92e34d4a4d85ef2bf61bfb240eca)), closes [#784](https://github.com/massif-press/compcon/issues/784)



## [2.0.29](https://github.com/massif-press/compcon/compare/2.0.28...2.0.29) (2020-04-27)


### Bug Fixes

* **Compendium:** fix two panel view for some compendium frames ([c9acf8f](https://github.com/massif-press/compcon/commit/c9acf8fe55b85cf3b0b32c0b4975833898c42eb1)), closes [#782](https://github.com/massif-press/compcon/issues/782)
* **Item Card:** Make sure item card re-imports correct component when this.item updates ([23f9502](https://github.com/massif-press/compcon/commit/23f950220a0790200196d6d1ba080b8464168082))
* **Mech Sheet:** correct equipped weapon mod inset ui ([41f92c4](https://github.com/massif-press/compcon/commit/41f92c43646143be7c1dd2a42c678d54edd7ca54)), closes [#791](https://github.com/massif-press/compcon/issues/791)
* **Mech Sheet:** fixed superheavy lock not clearing on non-SH weapon swap ([ee87e40](https://github.com/massif-press/compcon/commit/ee87e40c6009603f1e1918a9c1f896e8be1daba9)), closes [#785](https://github.com/massif-press/compcon/issues/785)
* **Mission Runner:** Ensure remaining HP is calculated correctly after a structure roll ([f80971c](https://github.com/massif-press/compcon/commit/f80971cccb03e8f9671d02ed4c2a83f04cfb2601))
* **Mission Runner:** Restore scrolling in NPC selector for reinforcements ([20464d4](https://github.com/massif-press/compcon/commit/20464d4324b1e1f56eb9b1ea7950f828ac81c973))
* **Roll20.ts:** fixes ([fa4a3ce](https://github.com/massif-press/compcon/commit/fa4a3ce3d470aba47c483ffb63bf2876b9c05ace))
* **Roll20Dialog.vue:** fix path ([630d5a1](https://github.com/massif-press/compcon/commit/630d5a10a0d721e9637a5835cc0b6a16904b88b3))


### Features

* add update checker & notifications ([77152e3](https://github.com/massif-press/compcon/commit/77152e3ef4d1190b8ce198f6d008915bf8800ccd)), closes [#493](https://github.com/massif-press/compcon/issues/493)



## [2.0.28](https://github.com/massif-press/compcon/compare/2.0.27...2.0.28) (2020-04-10)


### Bug Fixes

* **Mission Runner:** hotfix for npc serialization issues ([474d4ed](https://github.com/massif-press/compcon/commit/474d4ed365254bc3ab6555b6b1e6ea5c412044de)), closes [#779](https://github.com/massif-press/compcon/issues/779) [#780](https://github.com/massif-press/compcon/issues/780) [#781](https://github.com/massif-press/compcon/issues/781)



## [2.0.27](https://github.com/massif-press/compcon/compare/2.0.26...2.0.27) (2020-04-10)


### Bug Fixes

* correct some additional visual bugs with the new selectors ([752576e](https://github.com/massif-press/compcon/commit/752576ef26dee253b06d082198c0e271190c55bb))
* fixes several color/visibility issues ([356a985](https://github.com/massif-press/compcon/commit/356a98561690f838a7968705d7c44e8674b720d3))
* **Mech Sheet:** correctly limit cog menu for integrated items ([4cb8c92](https://github.com/massif-press/compcon/commit/4cb8c9296e2579f581d66e6ebbbdb64540ebb79c)), closes [#766](https://github.com/massif-press/compcon/issues/766)
* **Mech Sheet:** prevent dialog from persisting after loadout deletion ([37b5542](https://github.com/massif-press/compcon/commit/37b55426df7c494def22e1fc1b92122e4cd53ece)), closes [#769](https://github.com/massif-press/compcon/issues/769)
* **Mission Runner:** corrects issue with structure and stress for NPCS not being registered ([b3c6944](https://github.com/massif-press/compcon/commit/b3c69440b3b900cf5e3ec12c632dbd8aa5f352a3)), closes [#767](https://github.com/massif-press/compcon/issues/767)
* **NPC Roster:** correct stat math on resetting npc tier change ([e8fae59](https://github.com/massif-press/compcon/commit/e8fae59b7ac47997dedb5d8c5c175984583d337d)), closes [#775](https://github.com/massif-press/compcon/issues/775)
* **NPC Roster:** correct template math ([e943d8d](https://github.com/massif-press/compcon/commit/e943d8df8699133aec35d7cf98020e827d6de9c4)), closes [#778](https://github.com/massif-press/compcon/issues/778) [#777](https://github.com/massif-press/compcon/issues/777)
* **NPC Roster:** fix label and campaign dropdowns on npc sheet ([7674ac0](https://github.com/massif-press/compcon/commit/7674ac0838b6c7342b215842ed85502b0d1b6ccc)), closes [#745](https://github.com/massif-press/compcon/issues/745)


### Features

* **Mission Runner:** add pilot talents to mission runner pilot sheet ([601c93d](https://github.com/massif-press/compcon/commit/601c93d665348dc171ede2fb1b01f56767894480))



## [2.0.26](https://github.com/massif-press/compcon/compare/2.0.25...2.0.26) (2020-04-07)


### Bug Fixes

* correct several styling issues ([0a09f15](https://github.com/massif-press/compcon/commit/0a09f15ee13930e49cd755a5dccf13654722f73a))



## [2.0.25](https://github.com/massif-press/compcon/compare/2.0.24...2.0.25) (2020-04-07)


### Bug Fixes

* **Mech Sheet:** corrects Apocalypse Rail information ([c214568](https://github.com/massif-press/compcon/commit/c2145682c684e836236997e4694cc6139de524a0)), closes [#760](https://github.com/massif-press/compcon/issues/760)


### Features

* add new selector UI ([3e0ced8](https://github.com/massif-press/compcon/commit/3e0ced8a31715f55ceb705ccdc8ec8fcda46fd61)), closes [#748](https://github.com/massif-press/compcon/issues/748)
* **Compendium:** add new equipment browser to compendium ([43ae10f](https://github.com/massif-press/compcon/commit/43ae10f3ce6452c7df488505e0bf72a8e3eb3c25))
* **Pilot Sheet:** add pilot registration view ([542a4cb](https://github.com/massif-press/compcon/commit/542a4cb39176a1b1896d1f92354800fed1e96054)), closes [#596](https://github.com/massif-press/compcon/issues/596)
* **Pilot Sheet:** hASE reset button ([7fd5bc5](https://github.com/massif-press/compcon/commit/7fd5bc5bdfb09290d5b287ad454cd7981e4f1fe8)), closes [#747](https://github.com/massif-press/compcon/issues/747)



## [2.0.24](https://github.com/massif-press/compcon/compare/2.0.23...2.0.24) (2020-04-04)



## [2.0.23](https://github.com/massif-press/compcon/compare/2.0.22...2.0.23) (2020-04-04)



## [2.0.22](https://github.com/massif-press/compcon/compare/2.0.21...2.0.22) (2020-04-04)


### Bug Fixes

* **Pilot Sheet:** fix organization type setting error ([7682161](https://github.com/massif-press/compcon/commit/7682161408b1d3ef710cce0d731739d78b1105d0)), closes [#757](https://github.com/massif-press/compcon/issues/757)


### Features

* **Active Mode:** overcharge now considers Heatfall ([9e12990](https://github.com/massif-press/compcon/commit/9e12990ffa89829faebbe2db46e14c3fb6a789e9)), closes [#755](https://github.com/massif-press/compcon/issues/755)
* **Pilot Sheet:** add custom skill trigger description ([a4a2219](https://github.com/massif-press/compcon/commit/a4a22193f20c4263e1b355810e8e183e1c957fc8)), closes [#526](https://github.com/massif-press/compcon/issues/526)
* **Pilot Sheet:** pilot roster cards ([fcdd132](https://github.com/massif-press/compcon/commit/fcdd1322f14e3e77de8a6458b1147fc53de9c172)), closes [#507](https://github.com/massif-press/compcon/issues/507)
* **Pilot Sheet:** shorten skill trigger descriptions ([28da97d](https://github.com/massif-press/compcon/commit/28da97dbde6d6f4a835d568810482caf7b2df72c))



## [2.0.21](https://github.com/massif-press/compcon/compare/2.0.20...2.0.21) (2020-03-31)


### Bug Fixes

* **Mech Sheet:** fix negative SP selection bug ([d674085](https://github.com/massif-press/compcon/commit/d6740858e8b529403744ab7d57af2cc6e9ebf775)), closes [#752](https://github.com/massif-press/compcon/issues/752)


### Features

* improved tablet views for pilot and compendium pages ([db42fde](https://github.com/massif-press/compcon/commit/db42fde3b427136e8a39ea2affef15a1cdcbcad4)), closes [#751](https://github.com/massif-press/compcon/issues/751)



## [2.0.20](https://github.com/massif-press/compcon/compare/2.0.19...2.0.20) (2020-03-30)


### Bug Fixes

* **Active Mode:** change struct/stress saves to checks ([4c1c6b9](https://github.com/massif-press/compcon/commit/4c1c6b911ce741a8612a5fc3ed2f857e8c42e5e0))
* fixed theme/navbar reset on refresh ([4921730](https://github.com/massif-press/compcon/commit/4921730555dfcf18336a269353fc67fb9c5c8f7b)), closes [#710](https://github.com/massif-press/compcon/issues/710)
* **Active Mode:** fixed hidden sidebar bug ([a6d0652](https://github.com/massif-press/compcon/commit/a6d06522aeead801174b152c268e1accccc5e100)), closes [#725](https://github.com/massif-press/compcon/issues/725)
* **Compendium:** fixed compendium "expected a function" error ([8089772](https://github.com/massif-press/compcon/commit/808977277ac68700f588e1c10804c526d5c9e976)), closes [#736](https://github.com/massif-press/compcon/issues/736)
* **Compendium:** fixed compendium routes ([e2f4763](https://github.com/massif-press/compcon/commit/e2f47630f5be0412326359ca973ac8fe326ad1ae))
* **Encounter Builder:** fixed locked NPC sidebar ([589132b](https://github.com/massif-press/compcon/commit/589132b5ceeacd427f9da97da1e1a19ac477dc6c)), closes [#738](https://github.com/massif-press/compcon/issues/738)
* **Encounter Builder:** fixed Sitrep Errors ([f5879f8](https://github.com/massif-press/compcon/commit/f5879f8da1e8154c55fddea8ad45ca82a8c950cd)), closes [#739](https://github.com/massif-press/compcon/issues/739) [#740](https://github.com/massif-press/compcon/issues/740)
* **Mission Runner:** limit which systems can be destroyed ([5916688](https://github.com/massif-press/compcon/commit/59166883981a7ce74cc14938bd05ab0ab7c04ccb)), closes [#724](https://github.com/massif-press/compcon/issues/724)
* **NPC Roster:** fixed some NPC bonuses being applied incorrectly ([eb36247](https://github.com/massif-press/compcon/commit/eb3624762da81f4e616a14e7c36e8711f51f2bb7)), closes [#742](https://github.com/massif-press/compcon/issues/742)
* **NPC Roster:** nPC Feature removal fix ([95cf98a](https://github.com/massif-press/compcon/commit/95cf98a22c84dd3822fa5825d55311fa80812d93))



## [2.0.19](https://github.com/massif-press/compcon/compare/2.0.18...2.0.19) (2020-03-26)


### Bug Fixes

* **Multiple:** fix several bugs ([fa7110f](https://github.com/massif-press/compcon/commit/fa7110f7a3224c3131f9070ca0ee4e69fdfa4bec)), closes [#727](https://github.com/massif-press/compcon/issues/727) [#728](https://github.com/massif-press/compcon/issues/728) [#723](https://github.com/massif-press/compcon/issues/723) [#717](https://github.com/massif-press/compcon/issues/717) [#720](https://github.com/massif-press/compcon/issues/720) [#721](https://github.com/massif-press/compcon/issues/721) [#726](https://github.com/massif-press/compcon/issues/726)



## [2.0.18](https://github.com/massif-press/compcon/compare/2.0.17...2.0.18) (2020-03-20)


### Bug Fixes

* fixed an issue with the item-effect-wrapper that was throwing unhelpful errors ([9701fa3](https://github.com/massif-press/compcon/commit/9701fa3db7c28bd56b28d54c1ce1c9ed8e41a0c8))



## [2.0.17](https://github.com/massif-press/compcon/compare/2.0.16...2.0.17) (2020-03-20)


### Bug Fixes

* **Dark Theme:** improved color selection on many pages ([15504a9](https://github.com/massif-press/compcon/commit/15504a993db8c43f901556804796380543e1a2ba)), closes [#706](https://github.com/massif-press/compcon/issues/706)
* **Nav Menu:** corrected Mission Runner link ([a025956](https://github.com/massif-press/compcon/commit/a0259563a250fb708472335452d5d0d9b084f263)), closes [#713](https://github.com/massif-press/compcon/issues/713)
* **Pilot Sheet:** fix typo in org panel ([9e7dadd](https://github.com/massif-press/compcon/commit/9e7dadda156cf6dbce777d47991a43cf57acf8f5)), closes [#709](https://github.com/massif-press/compcon/issues/709)
* **Pilot Sheet:** fixes print formatting issues ([428670f](https://github.com/massif-press/compcon/commit/428670fc5d6905468ac0d2eae5fc5bca55d555ba)), closes [#705](https://github.com/massif-press/compcon/issues/705)


### Features

* add automatic notifications for errors ([06aaade](https://github.com/massif-press/compcon/commit/06aaade5424164f9be551a0e4e249f803a256a68))
* error logging w/ stack trace under Options ([458da73](https://github.com/massif-press/compcon/commit/458da734d0699365d0e7a8b31444a3ffbb3c0af8)), closes [#486](https://github.com/massif-press/compcon/issues/486)



## [2.0.16](https://github.com/massif-press/compcon/compare/2.0.15...2.0.16) (2020-03-13)


### Bug Fixes

* fix Safari clip-paths ([ff45fe4](https://github.com/massif-press/compcon/commit/ff45fe4ad2d0091c5edbc08fa3bdf2276ef0fc7a)), closes [#702](https://github.com/massif-press/compcon/issues/702)
* **Mech Sheet:** fixed item effects sticking ([cd79699](https://github.com/massif-press/compcon/commit/cd79699b24536178f132f27c83b6c6c29b317281)), closes [#703](https://github.com/massif-press/compcon/issues/703)


### Features

* **App UI:** add location-based navbar ([fe8043f](https://github.com/massif-press/compcon/commit/fe8043f807a654133ad35d39054b349118ca8a99)), closes [#547](https://github.com/massif-press/compcon/issues/547) [#605](https://github.com/massif-press/compcon/issues/605)
* **Mission Runner:** add NPC Recharge prompt ([ed071a5](https://github.com/massif-press/compcon/commit/ed071a54da7221813ab6832f6d80d13186312494)), closes [#550](https://github.com/massif-press/compcon/issues/550)
* add Dark Mode ([b7bbbf2](https://github.com/massif-press/compcon/commit/b7bbbf2044754c2a42eac6fb4dc928542f4e172e)), closes [#454](https://github.com/massif-press/compcon/issues/454)



## [2.0.15](https://github.com/massif-press/compcon/compare/2.0.14...2.0.15) (2020-03-10)


### Bug Fixes

* **Compendium:** correct non-invade tech effect UI ([e55ab2b](https://github.com/massif-press/compcon/commit/e55ab2b9c5db7597b6c65b7f0568316540caad11)), closes [#696](https://github.com/massif-press/compcon/issues/696)
* **Mech Sheet:** fixed UNCLE applying to superheavies ([13dc9b7](https://github.com/massif-press/compcon/commit/13dc9b7efedded53c190fde1174ea73b79840e58)), closes [#693](https://github.com/massif-press/compcon/issues/693)
* **Mission Runner:** fixed NPC systems not saving charge state ([893351c](https://github.com/massif-press/compcon/commit/893351c598340b834759dd96163b183ee16756e2)), closes [#686](https://github.com/massif-press/compcon/issues/686)



## [2.0.14](https://github.com/massif-press/compcon/compare/2.0.13...2.0.14) (2020-03-09)


### Bug Fixes

* **Compendium:** fix NPC item panel descriptions ([c60daf7](https://github.com/massif-press/compcon/commit/c60daf731e3701399e93c72584f187b6c6dcd378)), closes [#682](https://github.com/massif-press/compcon/issues/682) [#695](https://github.com/massif-press/compcon/issues/695)
* **Mech Sheet:** fix Bonus Item Effect ([774ce8f](https://github.com/massif-press/compcon/commit/774ce8fbc3efe80e1e93d0d9b99b28078352a8c5))
* **Mech Sheet:** fix tag display on weapons with profile effects ([3c53f74](https://github.com/massif-press/compcon/commit/3c53f74bb01963c7e9e70114f9380e3521ebcef3)), closes [#691](https://github.com/massif-press/compcon/issues/691)
* **Pilot Sheet, Printed Sheets:** fix item effect populators ([4a51262](https://github.com/massif-press/compcon/commit/4a512622d233f80378e2e594450ef5b3b6a32b44)), closes [#684](https://github.com/massif-press/compcon/issues/684) [#624](https://github.com/massif-press/compcon/issues/624)



## [2.0.13](https://github.com/massif-press/compcon/compare/2.0.12...2.0.13) (2020-03-06)


### Bug Fixes

* **Mech Sheet:** fix weapon mod inset panel ([7e29881](https://github.com/massif-press/compcon/commit/7e298819f7e557a54b53ffd49b9d44c9f29bc88b))



## [2.0.12](https://github.com/massif-press/compcon/compare/2.0.11...2.0.12) (2020-03-06)


### Bug Fixes

* item action hotfix ([1d419f4](https://github.com/massif-press/compcon/commit/1d419f4b6ec95501d00546cd46c347ea2555a07f))



## [2.0.11](https://github.com/massif-press/compcon/compare/2.0.10...2.0.11) (2020-03-06)


### Bug Fixes

* **Active Mode:** fix irreversible meltdown at 1/4 reactor ([747305f](https://github.com/massif-press/compcon/commit/747305fb93c6adcd8bb6b525e4a40092744a681c)), closes [#669](https://github.com/massif-press/compcon/issues/669)
* **Main Menu:** remove broken screen transition effect ([508d324](https://github.com/massif-press/compcon/commit/508d324a89f32774dfeac20b87efe29d61ff6df1))
* **Mission Runner:** fixed missing NPC size icon ([ab8f06a](https://github.com/massif-press/compcon/commit/ab8f06ab74823a2d5287b3b72a7010f8a367cac4)), closes [#678](https://github.com/massif-press/compcon/issues/678)
* **NPC Roster:** fix NPC Name field autofill ([ac50bbd](https://github.com/massif-press/compcon/commit/ac50bbdb04440d24e38534ce28c4e908db6a3aa5)), closes [#676](https://github.com/massif-press/compcon/issues/676)
* **Pilot Sheet:** fixed pilot gear saving ([a274d5e](https://github.com/massif-press/compcon/commit/a274d5e5e6405c26dcd6c283d94bb6bf25d889bc)), closes [#675](https://github.com/massif-press/compcon/issues/675)
* **Pilot Sheet:** various graphical fixes ([58b3834](https://github.com/massif-press/compcon/commit/58b383481080e9f6dc56a242aa8f32e2e5c3c57f)), closes [#666](https://github.com/massif-press/compcon/issues/666)


### Features

* **Compendium:** expand item effect logic ([3731b29](https://github.com/massif-press/compcon/commit/3731b29335cf62d9b4971e9e7d0dafa229abaf66)), closes [#519](https://github.com/massif-press/compcon/issues/519)
* **Mech Sheet:** add selectable damage to the Ghoul Nexus ([9c4f7e3](https://github.com/massif-press/compcon/commit/9c4f7e39799b2f76f53cbffb0b714830dfa911cb)), closes [#667](https://github.com/massif-press/compcon/issues/667)



## [2.0.10](https://github.com/massif-press/compcon/compare/2.0.9...2.0.10) (2020-03-05)


### Bug Fixes

* **Active Mode:** fix custom counter delete button not deleting correct counter ([5a8e36a](https://github.com/massif-press/compcon/commit/5a8e36a7669fb1d25798355dc0300c338bb77b40))


### Features

* **Pilot Sheet:** add a compact build summary statblock option for theorycrafting ([176691c](https://github.com/massif-press/compcon/commit/176691cbbda4d72042d89b2c4bb64422126e3715))



## [2.0.9](https://github.com/massif-press/compcon/compare/2.0.8...2.0.9) (2020-02-21)


### Bug Fixes

* **Pilot Sheet:** hotfix for pre 2.0.8 pilot imports ([34bd038](https://github.com/massif-press/compcon/commit/34bd0382fae1fe21ecdfc9df0ff07b86a99f404f))



## [2.0.8](https://github.com/massif-press/compcon/compare/2.0.7...2.0.8) (2020-02-21)


### Bug Fixes

* hydrate mech equipment tags with getter instead of only once ([be82908](https://github.com/massif-press/compcon/commit/be82908f48b5794c5c89550fbe9b5dfe560faf78))
* **Encounter Builder:** add feature icons to NPC detail panels ([76f9132](https://github.com/massif-press/compcon/commit/76f91323cf31620dda11d52f327b16048e674b8b))
* **Encounter Builder:** correct color of NPC features on NPC detail panels ([45b9955](https://github.com/massif-press/compcon/commit/45b995547b3db9f39c3794b4a458935575d71139)), closes [#660](https://github.com/massif-press/compcon/issues/660)
* **NPC Roster:** hide empty "On Hit" in NPC weapon cards ([03a403e](https://github.com/massif-press/compcon/commit/03a403ece7a0b3fd22fe8785da65c2ac453151c3))
* **Pilot Sheet:** removed nonresponsive warning DENY button ([ae17db3](https://github.com/massif-press/compcon/commit/ae17db3e9e40c9d7df686c72857c32993114d98b)), closes [#662](https://github.com/massif-press/compcon/issues/662)


### Features

* **Mech Sheet:** add Indestructible equipment tag ([b5f27d2](https://github.com/massif-press/compcon/commit/b5f27d262dd9e1afc224c5bd2740a257fbeccebe)), closes [#649](https://github.com/massif-press/compcon/issues/649)
* **Pilot Sheet:** add set item damage type and set item use count options ([9e14c85](https://github.com/massif-press/compcon/commit/9e14c8597c8c6efaeb483c2793892f9e84fe8c03)), closes [#654](https://github.com/massif-press/compcon/issues/654)
* **Pilot Sheet:** check content pack content when importing pilot ([228e5da](https://github.com/massif-press/compcon/commit/228e5daa5a98dd82059a571be430cecc0ee1fc0b)), closes [#616](https://github.com/massif-press/compcon/issues/616)



## [2.0.7](https://github.com/massif-press/compcon/compare/2.0.6...2.0.7) (2020-02-19)


### Bug Fixes

* **Pilot Sheet:** fixes Add Project panel ([37a412b](https://github.com/massif-press/compcon/commit/37a412bdfec7b0a14d1aa4e19e54277b1ba794ed)), closes [#648](https://github.com/massif-press/compcon/issues/648)


### Features

* **Compendium:** add tabs to Reserves & Downtime Compendium page ([d734a5f](https://github.com/massif-press/compcon/commit/d734a5f8a67a95de589602329e14462e1b98a702)), closes [#641](https://github.com/massif-press/compcon/issues/641)
* **Compendium:** adds NPC data to the Compendium ([75b46a4](https://github.com/massif-press/compcon/commit/75b46a4ffb7bcd257869d1424a8c56bb2c2993ba)), closes [#551](https://github.com/massif-press/compcon/issues/551)
* **Pilot Roster:** add menu from pilot sheet to list items ([825a99b](https://github.com/massif-press/compcon/commit/825a99b988f604ead87c1da9934202a4b3588544))
* **Pilot Sheet:** add talent search ([1973985](https://github.com/massif-press/compcon/commit/1973985d35359e9b4384f49fff128a620ebc05a0)), closes [#638](https://github.com/massif-press/compcon/issues/638)
* **Pilot Sheet:** added item customization ([0a37b37](https://github.com/massif-press/compcon/commit/0a37b37dd92f96054a524d57ad4b1ce816eb5698)), closes [#502](https://github.com/massif-press/compcon/issues/502)
* **Pilot Sheet:** single-scroll Pilot skill/talent/bonus pages ([c99147b](https://github.com/massif-press/compcon/commit/c99147beec227c4b57951fc0dd00970d9e1e266a)), closes [#525](https://github.com/massif-press/compcon/issues/525)



## [2.0.5](https://github.com/massif-press/compcon/compare/2.0.4...2.0.5) (2020-02-17)



## [2.0.6](https://github.com/massif-press/compcon/compare/2.0.5...2.0.6) (2020-02-17)


### Bug Fixes

* **Mission Runner:** fixed active mission saving ([593a61a](https://github.com/massif-press/compcon/commit/593a61abf7c54d26009da73ac6fb4cb1ba46cef1)), closes [#640](https://github.com/massif-press/compcon/issues/640)
* **Mission Runner:** fixed runner stress/structure mechanics ([42a11d4](https://github.com/massif-press/compcon/commit/42a11d4f9fe36a07866c25b81905ad59d79f1001)), closes [#646](https://github.com/massif-press/compcon/issues/646)
* **Pilot Sheet:** remove Omninet Uplink ID edit button ([b61080c](https://github.com/massif-press/compcon/commit/b61080cea3790e5ceb00291f07b00ffa8eb64413)), closes [#610](https://github.com/massif-press/compcon/issues/610)


### Features

* **Pilot Sheet:** added WYSIWYG editors to the new pilot wizard ([7f6351f](https://github.com/massif-press/compcon/commit/7f6351fc7a5e7fe5c841116a31ba4faaa8ec2ef6))



## [2.0.5](https://github.com/massif-press/compcon/compare/2.0.4...2.0.5) (2020-02-17)


### Bug Fixes

* **Mission Runner:** fixed structure/stress being lost on switching NPCs ([d35d4a5](https://github.com/massif-press/compcon/commit/d35d4a582b323c14367cfdbb5faab752809e480a)), closes [#644](https://github.com/massif-press/compcon/issues/644)



## [2.0.4](https://github.com/massif-press/compcon/compare/2.0.3...2.0.4) (2020-02-14)


### Bug Fixes

* **getColor.ts:** fix the getColor mixin ([5504f7b](https://github.com/massif-press/compcon/commit/5504f7b893b15ec715d7008605a04addcdc5ef24))
* **Mission Runner:** fix actors not becoming destroyed on 0hp/0str ([129559d](https://github.com/massif-press/compcon/commit/129559d3beaedf7e7987656e3a6471c5c6842ad2)), closes [#614](https://github.com/massif-press/compcon/issues/614)
* **new npc:** add icon to biological header ([efca88f](https://github.com/massif-press/compcon/commit/efca88f4f1dc7dcbe1747640117db77ad9e93a83))
* **npc features:** make NPC feature cards use the proper theme colors ([37557b1](https://github.com/massif-press/compcon/commit/37557b1b58f92a16c1b01eaebdd854e3d1c01cdb))
* **npc reactions:** display tags on NPC reaction cards ([cca3888](https://github.com/massif-press/compcon/commit/cca3888e1263be58b00cc6e0e1e1ffb27e1c190b))
* **npc templates:** automatically apply/remove template stat overrides ([8d59e56](https://github.com/massif-press/compcon/commit/8d59e56a181ceb35b6915c42d8fecc89fb223ad6)), closes [#631](https://github.com/massif-press/compcon/issues/631)
* **Options:** include extra content in bulk export ([68be4aa](https://github.com/massif-press/compcon/commit/68be4aa46388d320cf471337799e743e1ab2f571))
* **Pilot Sheet:** remove warning for less than 3 talents after LL0 ([3f70c68](https://github.com/massif-press/compcon/commit/3f70c68618bbe0220a7898fea85ed5418954aee3)), closes [#394](https://github.com/massif-press/compcon/issues/394)


### Features

* Added WYSIWYG editor ([fba2269](https://github.com/massif-press/compcon/commit/fba2269fd513b7e53fdb488ffd6c7a14442178be)), closes [#606](https://github.com/massif-press/compcon/issues/606)
* **Mission Runner:** number NPCs ([8f05000](https://github.com/massif-press/compcon/commit/8f05000138e9cdbbc12e88a02c8b91375e64ca02)), closes [#615](https://github.com/massif-press/compcon/issues/615)
* **Options:** add warning to bulk data import ([32c6708](https://github.com/massif-press/compcon/commit/32c670844684c45b96738045cd4aac3f1f9775af))


### Reverts

* Revert "Revert "Refactor base CC styled building block components to use VCC & VPD"" ([831e042](https://github.com/massif-press/compcon/commit/831e0423b30ce756835b921e8d08aaa83421c96c))



## [2.0.3](https://github.com/massif-press/compcon/compare/2.0.2...2.0.3) (2020-02-06)



## [2.0.2](https://github.com/massif-press/compcon/compare/2.0.1...2.0.2) (2020-02-06)


### Bug Fixes

* **_FrameStatblock.vue:** Remove duplicated Repair Cap statblock ([ef00730](https://github.com/massif-press/compcon/commit/ef00730476c62b7ab7990449e9e743d9675d80e1)), closes [#607](https://github.com/massif-press/compcon/issues/607)
* **CCReserveItem.vue:** Corrected bad layout spacing ([4325b5a](https://github.com/massif-press/compcon/commit/4325b5a5bc631890cc6a7936a35080370600306e)), closes [#594](https://github.com/massif-press/compcon/issues/594)
* **CloudImport.vue:** Retain CloudID on import to allow cloud update ([6de7ed8](https://github.com/massif-press/compcon/commit/6de7ed80bf89fd3ce055d0c9ce8dc9ddc0b04944))
* **CloudImport.vue:** set cloudID if pilot's is empty ([57ae9aa](https://github.com/massif-press/compcon/commit/57ae9aa2d0abb3772990be804609c47da48449a1))
* **contentpack.ts:** fixes all data in pilot_gear.json being loaded as pilot gear ([e89c0e3](https://github.com/massif-press/compcon/commit/e89c0e3f171c517356e1e7df9d65091d96690ed7))
* **Frame Selection:** Fixed frame selector generating wrong frame ([e0a0b74](https://github.com/massif-press/compcon/commit/e0a0b74dba6391cc401113d24d5fc2613968cc6c)), closes [#608](https://github.com/massif-press/compcon/issues/608)
* **GM Panel Lists:** Fixed items being hidden by default pagination ([64c8943](https://github.com/massif-press/compcon/commit/64c89435f2046afdb6d94a8b40fceba41125b65b)), closes [#599](https://github.com/massif-press/compcon/issues/599)
* **lancer-data:** Add Unlimited tag ([254c8b4](https://github.com/massif-press/compcon/commit/254c8b4b1df2d47989291f6387c347bd9c30df15)), closes [#609](https://github.com/massif-press/compcon/issues/609)
* **Mission.ts:** Corrected Step validation for Rest ([c921b16](https://github.com/massif-press/compcon/commit/c921b16d2a841d110a65ecf92c12cbecd5aa63c7)), closes [#601](https://github.com/massif-press/compcon/issues/601)
* **NPC Feature Selector:** Allowed reselectable Base Features ([6190eab](https://github.com/massif-press/compcon/commit/6190eab10fd62115d94ff636e4157fb88c51f603)), closes [#569](https://github.com/massif-press/compcon/issues/569)
* **Pilot Equipment Notes:** Pilot Equipment will now correctly serialize notes ([2de7035](https://github.com/massif-press/compcon/commit/2de7035e953c338090c0185f8d1347abc03063bf)), closes [#611](https://github.com/massif-press/compcon/issues/611)
* **pilot sheet:** show linebreaks in pilot biography & appearance blocks ([0bc8ea1](https://github.com/massif-press/compcon/commit/0bc8ea12b698ac3409671110ffed5602b4405ab0))
* **Pilot.tx:** Corrected gist handling for cloud loading ([18e4fc1](https://github.com/massif-press/compcon/commit/18e4fc124592d50430fa5c2368e68d4ab8338d6c))
* **pilotequipment.ts:** add type prop to IPilotEquipmentData ([96449a6](https://github.com/massif-press/compcon/commit/96449a6c7d38852361f653b334c00288ac8c529b))
* **Template Selector:** Hide "Optional Features" title if there aren't any ([3755616](https://github.com/massif-press/compcon/commit/3755616b002b91e28e114ffdd2ac58f02e941353)), closes [#579](https://github.com/massif-press/compcon/issues/579)


### Features

* **About page Credits:** Serve credits remotely ([a2e101b](https://github.com/massif-press/compcon/commit/a2e101bdb6b9a335e5a673ef53a226fcb81fab88)), closes [#562](https://github.com/massif-press/compcon/issues/562)
* **Main menu changelog:** Changelog button now opens github changelog ([6fe02d9](https://github.com/massif-press/compcon/commit/6fe02d9b7c42fe6100bc8680545ccd908835d070))



## [2.0.1](https://github.com/massif-press/compcon/compare/2.0.0...2.0.1) (2020-02-04)


### Bug Fixes

* **Active Sheet/Counters Block:** Changed counter styling to support smaller views ([50b079d](https://github.com/massif-press/compcon/commit/50b079d39f19eaf5dffa4563648a38c6dcca4059)), closes [#590](https://github.com/massif-press/compcon/issues/590)
* **activemode:** Fix counters ([404fea2](https://github.com/massif-press/compcon/commit/404fea29f8aed7e73429726b20627fd1070d525c))
* **GlobalNotifier.vue:** readd container ([625d261](https://github.com/massif-press/compcon/commit/625d26154ffa9a4eeb91f79ef16f2c6c0fa8b4be))
* **GlobalNotifier.vue:** remove unnecessary container ([02ee39b](https://github.com/massif-press/compcon/commit/02ee39b7b155c9608f16829d47878ab2ca5ab8c5))
* **GlobalNotifier.vue:** remove unnecessary container ([a1d09b2](https://github.com/massif-press/compcon/commit/a1d09b278faccde4cf34f0f93e93689106b3307c))
* **homebrew:** fix pack installer having blue background ([77bb289](https://github.com/massif-press/compcon/commit/77bb28969f63fc6bbfd661171dcb02a56cd31042))
* **homebrew:** properly set IDs of homebrew items ([3c2ebc1](https://github.com/massif-press/compcon/commit/3c2ebc11419a26924e07987c195c29a116473e6a))
* **homebrew:** temporary fix for manufacturer.Short property ([bc93d37](https://github.com/massif-press/compcon/commit/bc93d37ae61588dc674a17cc4bfe3e01768f8602))
* **interface:** add a proper interface for tag data ([852dc38](https://github.com/massif-press/compcon/commit/852dc380f9d584c6b6b9f82550e30dd178dd1d32))
* **io/data:** switch to PromisifyFileReader ([1e51a0c](https://github.com/massif-press/compcon/commit/1e51a0c519aba28d4df4822086ab196c5f1972e7))
* **io/Dialog.ts:** fix csv mimetype in saveFile function ([c8d646f](https://github.com/massif-press/compcon/commit/c8d646fa244e4b12f838df17c208a04203b7d066))
* License requirements and active mode status tooltips ([52c99a1](https://github.com/massif-press/compcon/commit/52c99a1d2e472315a7929dd62223db30fee52dca))
* **mainmenu:** silence scrollIntoView errors ([964488e](https://github.com/massif-press/compcon/commit/964488efc0094908730b0e669a31005dd8cd9f36))
* **Mech.ts:** fix going over SP limit producing underSP warning ([664dde2](https://github.com/massif-press/compcon/commit/664dde262c2849d3f5c2281367fcce109b1aed6d))
* **NotificationSnackbar:** do not bubble click event from dismiss button ([be1d02c](https://github.com/massif-press/compcon/commit/be1d02c8538706139fbb50cbdf63b0cb544cd2e2))
* **NotificationSnackbar:** fix dismiss on timeout ([675c1fe](https://github.com/massif-press/compcon/commit/675c1fedb7d432a88c6f1038a8a4d4c619723f28))
* **NPC/Encounter/Mission Lists:** Instantiate _campaign properties as null ([4275c17](https://github.com/massif-press/compcon/commit/4275c1785977cd8b1a5b6a3bde638c7164c044e7)), closes [#568](https://github.com/massif-press/compcon/issues/568)
* **Pilot.ts:** Forced cloned mechs to start as inactive ([2dcfa9c](https://github.com/massif-press/compcon/commit/2dcfa9cbcfd65542a62a2fffabd927f873417d19)), closes [#570](https://github.com/massif-press/compcon/issues/570)
* **Pilot.ts, Level/Core Bonus:** Corrected core bonus eligibility check ([76493fc](https://github.com/massif-press/compcon/commit/76493fcf2f9ffb6be588b3f03774cbd8efeb699b)), closes [#582](https://github.com/massif-press/compcon/issues/582)
* **pilotmanagement:** CCMechSkillsSelector - scroll to bottom when done ([d74d085](https://github.com/massif-press/compcon/commit/d74d085268e53a25f66f0ea83bbf92dcf4b2d329))
* **pilotmanagement:** fix incorrect prop in new pilot confirm page ([03f1813](https://github.com/massif-press/compcon/commit/03f1813899660d697e81251a773a08d36319af1e))
* **pilotmanagement:** fix table view pilot links not working ([1f734d4](https://github.com/massif-press/compcon/commit/1f734d4d16dee36742d40b1a8f386675a2b3ea92))
* add shim for $notify ([02636ce](https://github.com/massif-press/compcon/commit/02636ce7ab403de092a58edc7b2b635c0631367c))
* **pilotmanagement:** fix talent selector ([5137e2c](https://github.com/massif-press/compcon/commit/5137e2c839af5815426505e31061d75541c60fec))
* Check weapon mods when doing AI count ([dd458d1](https://github.com/massif-press/compcon/commit/dd458d1a73851d3efc963249fe688867e8a524ff))
* Core passive display formatting in mech hangar ([668fafa](https://github.com/massif-press/compcon/commit/668fafad3d57c9f14f2be80c58f04f02a49df3c1))
* Core passive display formatting in mech hangar ([f08445a](https://github.com/massif-press/compcon/commit/f08445af217059a8f331289a604de27b2f277a13))
* Fix default value for counters ([1ec407a](https://github.com/massif-press/compcon/commit/1ec407ae4cab2fc0fc0fcd6a9c05a7036dc30037))
* Fix size 1/2 icon conditions ([dd9a0ed](https://github.com/massif-press/compcon/commit/dd9a0ed02e6d0793c8922253d1079a7d138a3252))
* make travis happy ([d3f24ab](https://github.com/massif-press/compcon/commit/d3f24ab85f4a2c2e4d84487d2a5b792c20305ec3))
* NPC difficulty display and weapon type on cards ([1c5fab7](https://github.com/massif-press/compcon/commit/1c5fab7422053107f372ff6691103e25260d4058))
* rearrange mixins to properly reference on `this` ([2961d8c](https://github.com/massif-press/compcon/commit/2961d8c2925fe04710281965a317fdc5e39d0a7c))
* remove vuetify theme typing to fix build failure ([abed7d4](https://github.com/massif-press/compcon/commit/abed7d42f9598e2f70fc42b150e34dc1aab65c86))
* **pilotsheet:** fix level up button showing during level up ([8d85ee8](https://github.com/massif-press/compcon/commit/8d85ee87bdcca12783d68c4f0d9be40972d48217))
* **SizeAttribute.vue:** Corrects size view editable status ([c862e8e](https://github.com/massif-press/compcon/commit/c862e8e0b4e9a78ec3471579332c5ba70e6f4756)), closes [#572](https://github.com/massif-press/compcon/issues/572)
* revert bad type config of vue-mousetrap ([930de6d](https://github.com/massif-press/compcon/commit/930de6de1e3b7851bfff453d9959e2f1d839a0f5))
* revert bad type config of vue-mousetrap ([84f5d47](https://github.com/massif-press/compcon/commit/84f5d477f4b541ecca783d606489c4c78b9463cb))
* revert manufacturer id fix ([03c84c6](https://github.com/massif-press/compcon/commit/03c84c6cdea8a9758444a6f5e308732277671346))
* Show tags on NPC Trait cards. ([66859b2](https://github.com/massif-press/compcon/commit/66859b28ddeae8ef4fd763fa2315168404916ce7))
* use short hash in main menu commit ref ([8af7784](https://github.com/massif-press/compcon/commit/8af778468844185a8467e3bab13683859e9a3b82))
* **vuex:** remove public modifier from store getters ([a5cea42](https://github.com/massif-press/compcon/commit/a5cea426b138a280ca021ad805162dfbf14170c3))


### Code Refactoring

* **compendium:** switch back to manufacturer.ID from .Short ([d99a1bc](https://github.com/massif-press/compcon/commit/d99a1bc366cd8ca584a1be00dc15de4129cb9faf))
* **compendium:** switch back to manufacturer.ID from .Short ([8efc801](https://github.com/massif-press/compcon/commit/8efc80177361927b7b2f6a7dbc1fa4efc7de7504))


### Features

* add global notifier ([21508b9](https://github.com/massif-press/compcon/commit/21508b91636a5acf058391f6b1d24ea502fd6d47))
* **global-notifier:** add onClick callback to notifications ([9977ca5](https://github.com/massif-press/compcon/commit/9977ca5fdfb2400322b8e24b3fafa545751494a2))
* **homebrew:** generate homebrew item ids ([fc7c151](https://github.com/massif-press/compcon/commit/fc7c151e1b4a3d93f9cd72156bf174e51379f570))
* **mainmenu:** add loading prop to mainbtn ([ea36702](https://github.com/massif-press/compcon/commit/ea36702362134ca265fc36282ead6e9466b4a31a))
* **pilotmanagement:** refactor and clean up pilot import dialogs ([3424421](https://github.com/massif-press/compcon/commit/342442174a8ab8db16d43a764702960be18cc4dd))
* add util/sleep function ([fefc5e5](https://github.com/massif-press/compcon/commit/fefc5e50e776197b7f5e0347d6ee52778b2ada59))
* Editable UserID to allow cloud import ownership ([428e648](https://github.com/massif-press/compcon/commit/428e648a57819642e57a31558c343cfe211b546c))
* Generate version string based on environment ([e45709a](https://github.com/massif-press/compcon/commit/e45709abcdd6dc0c7cce1d734b4b9d18a34be1b6))
* Show Netlify build commit hash in main menu ([d7d8606](https://github.com/massif-press/compcon/commit/d7d86062818cb06fea08d477c8e76c9b5972a291))


### BREAKING CHANGES

* **compendium:** BREAKS COMPATIBILITY with lancer-data pre Eranziel update on 2020/01/21
* **compendium:** BREAKS COMPATIBILITY with lancer-data pre Eranziel update on 2020/01/21



## [1.5.6-stable](https://github.com/massif-press/compcon/compare/1.5.6-beta...1.5.6-stable) (2019-09-30)



# [2.0.0-test](https://github.com/massif-press/compcon/compare/1.5.6-stable...2.0.0-test) (2019-12-16)



## [1.5.6-stable](https://github.com/massif-press/compcon/compare/1.5.6-beta...1.5.6-stable) (2019-09-30)



## [1.3.10-stable](https://github.com/massif-press/compcon/compare/1.4.4-beta...1.3.10-stable) (2019-07-11)



## [1.5.4-beta](https://github.com/massif-press/compcon/compare/1.5.3-beta...1.5.4-beta) (2019-08-14)



## [1.5.2-beta](https://github.com/massif-press/compcon/compare/1.5.1-beta...1.5.2-beta) (2019-07-31)



# [1.5.0-beta](https://github.com/massif-press/compcon/compare/1.3.10-stable...1.5.0-beta) (2019-07-12)



## [1.4.4-beta](https://github.com/massif-press/compcon/compare/1.4.4...1.4.4-beta) (2019-07-11)



## [1.4.3-beta](https://github.com/massif-press/compcon/compare/1.4.2-beta...1.4.3-beta) (2019-07-05)



## [1.4.1-beta](https://github.com/massif-press/compcon/compare/1.3.9-stable...1.4.1-beta) (2019-06-25)



## [1.3.10-stable](https://github.com/massif-press/compcon/compare/1.4.4-beta...1.3.10-stable) (2019-07-11)



## [1.4.4-beta](https://github.com/massif-press/compcon/compare/1.4.4...1.4.4-beta) (2019-07-11)



## [1.4.3-beta](https://github.com/massif-press/compcon/compare/1.4.2-beta...1.4.3-beta) (2019-07-05)



## [1.3.9-stable](https://github.com/massif-press/compcon/compare/1.4.0-beta...1.3.9-stable) (2019-06-25)



## [1.4.1-beta](https://github.com/massif-press/compcon/compare/1.3.9-stable...1.4.1-beta) (2019-06-25)



## [1.3.9-stable](https://github.com/massif-press/compcon/compare/1.4.0-beta...1.3.9-stable) (2019-06-25)



## 1.3.7-beta (2019-06-11)



