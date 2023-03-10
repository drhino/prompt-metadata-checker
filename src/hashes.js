/*
    Missing:
    • anything:        4.0
    • trinart:         *
    • text-to-pokemon: *
    ---
    Uppercase = CivitAI
    Lowercase = Huggingface (also noted with a comment above)
*/
const hashes = {
    /** huggingface **/
    "poolsuite-diffusion": {
        "1.5": [
            "94e33b13c77bf8d8ed81363c05a356271cfea538514ba599de445216be78367b"
        ]
    },
    /** huggingface **/
    "funko-diffusion": {
        "1.5": [
            "c5150eaeba0ccb86627e9007841dbc45d3b5b68fd084081f34c2a6b207befd48"
        ]
    },
    /** huggingface **/
    "stable-diffusion": {
        "1.4": [
            "fe4efff1e174c627256e44ec2991ba279b3816e364b49f9be2abc0b3ff3f8556",
            "14749efc0ae8ef0329391ad4436feb781b402f4fece4883c7ad8d10556d8a36a"
        ],
        "1.5": [
            "cc6cb27103417325ff94f52b7a5d2dde45a7515b25c255d8e396c90014281516",
            "6ce0161689b3853acaa03779ec93eafe75a02f4ced659bee03f50797806fa2fa",
            "e1441589a6f3c5a53f5f54d0975a18a7feb7cdf0b0dee276dfc3331ae376a053",
            "1a189f0be69d6106a48548e7626207dddd7042a418dbf372cefd05e0cdba61b6"
        ],
        "2 Base": [
            "d635794c1fedfdfa261e065370bea59c651fc9bfa65dc6d67ad29e11869a1824",
            "ab800444cdd1e6ade2236874dd28db9608d1d740aaf6087c7273884140612993"
        ],
        "2 768": [
            "bfcaf0755797b0c30eb00a3787e8b423eb1f5decd8de76c4d824ac2dd27e139f",
            "703d49a1d847b218c5c230fce80ba1f73f848bc3afc06e48e727ee47fdf06b1f"
        ],
        "2.1 Base": [
            "88ecb782561455673c4b78d05093494b9c539fc6bfc08f3a9a4a0dd7b0b10f36",
            "df955bdf6b682338ea9b55dfc0d8f3475aadf4836e204893d28b82355e0956d2",
            "34dccb9e60d83a4ef963f51e9ff63548323a70024f8679095956d7c403b3ef4a",
            "fc4f9fe7528b2ee3de21971fb805bbf74d680bf1ab5b5f9c08379b0397b82a9d"
        ],
        "2.1 768": [
            "ad2a33c361c1f593c4a1fb32ea81afce2b5bb7d1983c6b94793a26a3b54b08a0",
            "dcd690123cfc64383981a31d955694f6acf2072a80537fdb612c8e58ec87a8ac",
            "4711ff4dd270067f71d5ea0725e83e4dc7c41f586a588531ee1c3bd549e9119d",
            "ff144a49841cf383adbc68841272ce639e1032b0a1f0f6586347feb953c244f4"
        ]
    },
    "openjourney": {
        "1.5": [
            "DDC6EDF2",
            "5D5AD06CC2",
            "5D5AD06CC24170B32F25F0180A357E315848000C5F400FFDA350E59142FABD68",
            "88781B89",
            "4DAF80A45BFF09AD275F46204F2EBEB4227C11095D145DC3FDFA969998D7E573"
        ],
        /** huggingface **/
        "2": [
            "f022143bce33d6fb645751e594665d25fcb00995b8475e4401acae2c1df471d4",
            "2fbe5ba6e2a842fa99f52500cd600ac33f510b6a76b58874fa92b39c72c5ad57"
        ]
    },
    "anything": {
        "3.0": [
            "38C1EBE3",
            "812CD9F9D9",
            "812CD9F9D9A0CB62AAAD605173FD64DEA13CC8EAD9A18CA8ECA5BC94ABA58583",
            "489F2634",
            "8A89EC6C70808BB5957504DFBAF66C80DCA17A6A63D90450F806245AC956B32A"
        ]
    },
    "analog-diffusion": {
        "1.0": [
            "1400E684",
            "51F6FFF508",
            "51F6FFF5088A9C5F5AA7CEFA0A5A859D0424FC68FDC440E0EE5608A2B82E5FF9",
            "F7CF42F8",
            "398395AECEFC91D195441F713824D813DA917FB6B7C92D8765989AB3B9A4E31F",
            "9CA13F02",
            "A9A1C90893",
            "A9A1C90893CC7892DFD7438004FA954696F94208C84773B1CABB434E5A856A0C",
            "6566F31F",
            "6115B4354818ABCB0E59B0EA5CEAF25A8912C900DD1C97B4C7F5DD94A2D2C308"
        ]
    },
    "synthwavepunk": {
        "1": [
            "C0E7C884",
            "D7C4EB223D",
            "D7C4EB223DDD4C89D76D2A9A17E32A135CC9E0ADD0D96D196C95F3E3813FBF88",
            "1F103FDD",
            "B2DD8EED7EEAA7E5E13321F64B1077B0828F83384BB4FC3180D737F75AAC0A4B"
        ],
        "2": [
            "27EA8C02",
            "DC4C67171E",
            "DC4C67171E2EB64B1A79DA7FDE1CB3FCBEF65364B12C8F5E30A0141FD8C88233",
            "A72626DB",
            "02B54CF802A83AEE4DC531E13DA29EEA6DD26FAFFB73E706A0B073FA2304A8F9"
        ],
        "3": [
            "9CE5CEA2",
            "76F3EED071",
            "76F3EED071327C9075053368D6997CD613AF949D10B2D3034CEF30A1D1D9FEBA",
            "F15BA0A8",
            "F83958C6BD911A59456186EA466C2C17B1827178324CF03CC6C427FB064FFFF9",
            "5D83B27C",
            "EE2AB6D872",
            "EE2AB6D8723611D9A2FA9B0C8CE5A3770A84189A92B53D5E6CF44B02B9F8E033",
            "97DD6FF4",
            "910E778DE880D7EA9511A075B5D4C59B9ED1EE7A9C6B98FFE4EB5C198F0E5240"
        ]
    },
    "arcane-diffusion": {
        "1": [
            "2A3E365B",
            "3FA58DCBCF",
            "3FA58DCBCF59E3C376E6F5AEA5C059A685A59B907A0D79463F4B0F8E2BECBC8A",
            "482742DD",
            "5AB2C67104554F8532559E2A3BFE5B8B55E21E2C3E49C56E45890AD1437C58CB"
        ],
        "2": [
            "A2A802B2",
            "60510C7CA1",
            "60510C7CA14EB8B17110E5BD280A2E1B9DB66B62765977BC4A377B8ADABA2123",
            "13F287F9",
            "7006AB5156B82DF6604C3706447DE19FE5789A19FC5977FDB3BD9DAAA95C748D"
        ],
        "3": [
            "318A302E",
            "7DD0E6760F",
            "7DD0E6760F5A6778BEBBBDAEDD96AA1038CA76C349194F0C1B5C28311E10A78B",
            "AA61022E",
            "E7807F427E2341566B9B85A953B5DBC3A2BB070D448DA26C163C4CCA79EF52CF"
        ]
    },
    "mo-di-diffusion": {
        "1.5": [
            "CCF3615F",
            "8067368533",
            "8067368533BD74CBFB439AB829C0EF5CCEDE1E29ED5644E193410416F24CF976",
            "48AA2BC9",
            "643D666C67D98955899EC3D0CF53F66AC84EC5BB91EA05643AF5DA9340080F99"
        ]
    },
    "redshift-diffusion": {
        "1.5": [
            "74F4C61C",
            "ED8C2EE432",
            "ED8C2EE43268932A420F5DB00B105881770A19C0AFD0D35876330E2BBDCCE426",
            "1F4DAE88",
            "1E983F7DBA7B63E9B7E542BDF37C3766008B3196CDF6F3EAD200A9008ED2CE70"
        ]
    },
    "waifu-diffusion": {
        "1.3": [
            "4470C325",
            "9DADE82620",
            "9DADE826203C7EE369881B5DC20D34298FA644C1F137568E09FBC4B9A0D3E817",
            "74B60935",
            "8096504AB1F29F8F7BC74BE7D09BB69EBEE584D4B1D40BBC1C59289C56EA02B8",
            "84692140",
            "4AFAB91260",
            "4AFAB9126057859B34D13D6207D90221D0B017B7580469EA70CEE37757A29EDD",
            "D68D7ADC",
            "189B5906A2D51411E9079EEE90DDD0E2701503D61343949BB99A498D7A264F63"
        ],
        "1.2": [
            "55537280",
            "3A3A36AAC8",
            "3A3A36AAC85502A06878EC6760C0FB95F71546AD734FBB2B6CFAB9A50DB7AA8D",
            "CF117075",
            "7E54565F04F60AB11DDF88CD6D3EF5C5C4AA4FB4A53F16580A11E29E9E6914FA"
        ],
        /** huggingface **/
        "1.4": [
            "e8f4b2225b8ac6464e9d13d25b708349b1ca340c92dfc3575e8d5ef18f689457",
            "c76e0962bc60ccdc18e0dce387635b472b5a19038d637216030acbbe6eda2713",
            "b438efac4434af4e482d20cdfcea64067f8dfec438628261d2f2aa60ffc41452",
            "efee5ef4ce99e980bd10ed9bbb042ede5f71ed4f5ae7f06c48285a47b4ed6427"
        ]
    },
    "dreamshaper": {
        "3.31 Baked vae": [
            "42E8C85D",
            "A845FF2693",
            "A845FF26936F79A98B6F4C142E936398C59C0D0A040CAEC49A1DE68987DE29E5",
            "E0C1E0BA",
            "286721B5F837FDE7149710E9CBD80FB65800BAF3DEB87F449CF2501086BEE494",
            "DECA6616",
            "1DCEEFEC07",
            "1DCEEFEC0715B23865D23C8145F2C1558BB4402570E6F2857B664D8CADA46AE1",
            "ABDCC158",
            "30BE3842DAE0A525F6BF47A1E1B47098AEA72500553B77541885F497C1D03723",
            "A56748A1",
            "6C8715D225",
            "6C8715D22517E6D2C61C847ED5F7ABDD3ED2EB76BB5DFF7D4ED3282754C2F25F",
            "42A5AB65",
            "114C4D8E6BD2157825C342548E56C93909CF33204E7F98B472A3770787673826",
            "75D978EA",
            "9E9FA0D822",
            "9E9FA0D8225A1AAA4AA661F8DA31B38A7B1D7E9379150EC12B9A6CCA651DB91A",
            "1FE5AD6C",
            "8AA766A08B31FC7BD44392755A48087C91C9A2952C8808092656ADFDB11552FD"
        ],
        "3.32 Baked vae": [
            "9CAF0186",
            "BD19602CE0",
            "BD19602CE0191C5720DAE3B9EA272B855A906D3F168A788B666E5F9ADB736E3B",
            "2AD0A2B0",
            "1CB61DAECA9132AB9E6B0B6535823186DF242FF816B2D764FC5287C0F86B520D",
            "B97F493F",
            "13DFC9921F",
            "13DFC9921F8D0CC3FBF769EDC3C3723C9DB1AEE3F85D0603FC45C7CBA86D3397",
            "C51C26D5",
            "EC3526A84A9C8EA35FF474B9F8DE773475D34BAEC58371FC3882D30780A8C697",
            "75698597",
            "637D5DCB91",
            "637D5DCB91D2B08195BA2BAA07767D8004D3C950D61BC5F2A4EAB367BAA811C1",
            "A3D1E67B",
            "2E71901D7BD7324DDDBDC331C158C89335CA85C937CEF3AF42048B17AB626A33",
            "8B2D5D72",
            "C464E27568",
            "C464E275684C36B987481638B420F3833077118F5D4CF89344E4010642CE76EA",
            "7589891C",
            "4D1BBB02F011C4C9647F0B262A49C8A2B606E52C813476FDF307BB948E1D65AD"
        ],
        "3.3": [
            "42E8C85D",
            "482FAE2F3D",
            "482FAE2F3DECA6F4A726E83924C1195131FB851296F5EF1E9B315E7354FB22C4",
            "3A567AF0",
            "F6FFEB84DF8723A660FB80052B786A85F4627798A2C7F0F80827B693FDC78B72",
            "DECA6616",
            "08ACB74861",
            "08ACB74861F281B4649CF3C553505CA679273755BA0AC13D1971F4FBDD80D28F",
            "CDB44B58",
            "FF534F00BD876AD56448B3C2A4CE305754243FAAFDBEFB54007249747AF11ED6",
            "7B9489AE",
            "0E8DF96BA4",
            "0E8DF96BA4BD1B6FD95642EA0ADC809BE8372172809DCFF4366308EFCFE5AC61",
            "06C5EBF6",
            "DC7FF59A68FD2CBB31283559E57F2EEA183CFC92FD2105AD3F47EB2CA10584CD",
            "752E2491",
            "4E367DDDCB",
            "4E367DDDCBF844034114BB078B022F929B8E685670A27698E400E8FA5E8A4B1C",
            "90ADB2BA",
            "1F04ADD74EC3594F76DBB83A5B2380C2AAB7F242DA61492F9EFCF0B62EBE91B7"
        ],
        "2.52": [
            "575D99CE",
            "8C87ABA96B",
            "8C87ABA96B45656F7D47A5F10A09F59C2785EC6C0C437F0C3B10405D21CDE667",
            "5A4CF1E8",
            "032F378CB851D25E76F52E3A5972B0DFB98DB4FBC1D72F1AE14E4AE016686127",
            "464CD4FA",
            "B24E42E3BC",
            "B24E42E3BC52C83AA4A354AAD311EE49EFF2ED148235D97A9523FA0E292775D1",
            "AE77BDC8",
            "5780ABE976D5AE50D38BA587A494245FAD758B996C302BD9C21DF90CFFA54C08",
            "49452215",
            "A1E232C37D",
            "A1E232C37D2F59C2DCE7BD49145D115ED134E8F30EFF8FDDEA3FD0AC2A2356EA",
            "A541138D",
            "372784191E6CCA460023920BCACC3A1809467EA1A1D248C46628BDFE4F610DF2",
            "1962BEF7",
            "17364B458D",
            "17364B458D5F2ECE75827FDA53FEBF2F92B5E2DB96A5543304C82CF1E9AEE63E",
            "C15937C0",
            "6993238570C56272E81FBB5641CA489728A843F1DBC1ECD94AE8CC43ED37ED94",
            "1962BEF7",
            "17364B458D",
            "17364B458D5F2ECE75827FDA53FEBF2F92B5E2DB96A5543304C82CF1E9AEE63E",
            "C15937C0",
            "6993238570C56272E81FBB5641CA489728A843F1DBC1ECD94AE8CC43ED37ED94",
            "49452215",
            "A1E232C37D",
            "A1E232C37D2F59C2DCE7BD49145D115ED134E8F30EFF8FDDEA3FD0AC2A2356EA",
            "A541138D",
            "372784191E6CCA460023920BCACC3A1809467EA1A1D248C46628BDFE4F610DF2",
            "575D99CE",
            "8C87ABA96B",
            "8C87ABA96B45656F7D47A5F10A09F59C2785EC6C0C437F0C3B10405D21CDE667",
            "5A4CF1E8",
            "032F378CB851D25E76F52E3A5972B0DFB98DB4FBC1D72F1AE14E4AE016686127"
        ]
    },
    "deliberate": {
        "1": [
            "49EE5042",
            "BCC9764D20",
            "BCC9764D2027006621C10BC45B4EB436C4DA57239A774F5E92182BCCA64B84A6",
            "B2D45A7A",
            "7E51D7B605CF5E1F2ED3C316FE33366A9D68882EA85F0737B5C7CC466843624C",
            "C5C54E28",
            "9F1BFEE7A0",
            "9F1BFEE7A01C7DE6269E1EDB4BE263472C57A4022D91EA266AC2464A61364716",
            "19C41C99",
            "929CF26AA0B4BF54047D3FC2C817E67512937E36A5D3C8B37AB4DC029559F492"
        ],
        "2": [
            "0F6DF056",
            "B4391B7978",
            "B4391B7978D973427A4A2A3ED0E67B18EBE34E213904575043D6C9FAEC75C22D",
            "A1ECE6E3",
            "A4A13D6520DA1CB8E6EC4D5FC1BFF045C020C75AF80029949B9DABA257276587",
            "10EC4B29",
            "9ABA26ABDF",
            "9ABA26ABDFCD46073E0A1D42027A3A3BCC969F562D58A03637BF0A0DED6586C9",
            "AB983967",
            "475B27F4BB7C3A5124A46586090666EDBBC441A0C96D45D3E808B8B1EE2AC8C9"
        ],
        "1.1": [
            "B48A28AB",
            "10A699C0F3",
            "10A699C0F3D560092C7E4F88C864F99C9422930CF0C535BD34B90DAA3B3738E2",
            "F76A8DEE",
            "0C6BAC3CFF67CDFE818369EFB27844BAB973BF3EC07D7DF8F5F6B17494DB5AC4",
            "D0129123",
            "D8691B4D16",
            "D8691B4D16FB59AEA959DB797350016E24008D59DE8D5A960FF7B1CEC1FBC11C",
            "5940C844",
            "52BBFB9058DE392D2CF21C4E38C3B269D4AB0C54B32F73EF6F901D85C6061565"
        ]
    },
    "kenshi": {
        "01": [
            "EF8DDC53",
            "4B0EEC4DA8",
            "4B0EEC4DA8DD044C40BCB7564B34D0B3E5C03CE42A5490E88EB6DC46EA64B00A",
            "089C327D",
            "ACB6AEBE0E6A022562D6019B1EDBAC4C6A9D7D40C05BDEE848273E09C31CE664"
        ],
        "00": [
            "2FDD0123",
            "8C19D5C981",
            "8C19D5C9813DEF9E2DE1DFF4C77A0BADF4D3126B830C462F01744F4D173E3878",
            "B0F67FEC",
            "1E5B33136989D98A81BCD0D34B58B7A738CFBBC94991D94A24B39617ADA54923"
        ]
    },
    "realistic-vision": {
        "1.3": [
            "832C6E6A",
            "77E392958A",
            "77E392958A6B2CE335FE6ED0CB8EBB9F5CFB48706BFDE9C28D4721F4CE65619E",
            "E60ED49C",
            "46728C90B2045784674FD85FE9C839B87B8FF66D061C196A6FE9F26736E19B7B",
            "DE2F2560",
            "C35782BAD8",
            "C35782BAD87A6C8D461FA88861D9EE6974D7A16CC19014BFAF89F586DD42CA63",
            "80140439",
            "94BF092C41E065BC4BADDFD0404E5B453FF8EDDE79D70DCAB2C31CE17C1D14C6",
            "2943D1DF",
            "17237B6A59",
            "17237B6A59C3EE242B9798FA2C46E84B9040CF63374B8A98978CE1E547CB7372",
            "C43F43AF",
            "81F900D64BA9811E52B1117119E656FCCFD3271274B95B6310BFC9C5C97F5647",
            "3C30B472",
            "20BAE33336",
            "20BAE333361F827DB72EDEEA3A4E6F6BF45F0CCCF3559AD77EE6FFCF7FABCF37",
            "8D4EB485",
            "D1549FA008C32924FBE181C29A5664F44B6F2EDC3709B899F57497E6BEACEC6A"
        ],
        "1.2": [
            "CCEB87E1",
            "3D12F43543",
            "3D12F435437315EDCFE71CCE3D6329C9B6E87F771DB9A0E130C1105C6D7F7B29",
            "4AC8CDD8",
            "3602787526AE0A17A89DD948E3C535DE729A4EF2038C8F8FC18885D07E0D4571",
            "DE2F2560",
            "8194F84CDC",
            "8194F84CDCE2D9D782C4B1D32DDC4C585819AA270BB4CB60E9EB3710C6A38FF3",
            "E2492185",
            "1ABD24178CA2C12B0A29145CD9DE9021616DCCB334FA85B144DDD96B87BDB91F"
        ]
    },
    "dreamlike-photoreal": {
        "1": [
            "1D625012",
            "F403E4E2A5",
            "F403E4E2A5E48AE1E22380EE8FD6D78F048F89696B89BF4931798144A933DE07",
            "3C54B2ED",
            "D34EE9AF820A200FBCD10262C273F87611C681702C7583F08E55906E5C81E82E"
        ],
        "2": [
            "7AF9CD4C",
            "FC52756A74",
            "FC52756A74D5F371422FF99A7268CB6ABB14BFC4A4DE3569382CF0BD75E55D36",
            "42E30128",
            "B4E06466745003C5C5D28EBE9DBF994FA1376B092534B18038C1671C2FAFAB38",
            "FDCF65E7",
            "92970AA785",
            "92970AA785EB76E427847109A8F4EC6ABFAB36EF941F78D295D323D79F6130C9",
            "1B3C7A91",
            "5E934F637C8F558682899DD2416BCECD03584B8E094ED2E4E8EBCFA5BFDCB3E4"
        ]
    },
    "dreamlike-diffusion": {
        "1": [
            "14E1EF5D",
            "0AECBCFA2C",
            "0AECBCFA2CBE01BB44F7C0E4F413022AB25B35057B85507D55BA15E2D5DB35DA",
            "292A882E",
            "B100F0CF084B500960B847995053E37C5BA27EB574C83DEDF761F61D8B9C36F7"
        ]
    },
    "grapefruit": {
        "3": [
            "E7CEF3A5",
            "085B52679B",
            "085B52679B7AE459052430F9EB46EAD709C04EE6975C910B72EADB955EB45A3C",
            "19195ED9",
            "64308172F76724FC1878809701DE7D8A4D1FFED58B304405BCE5F433ECBAD280"
        ],
        "4": [
            "1A8C1CC4",
            "16E5723194",
            "16E5723194978C6F1C8EC6D8EE4611B99ABED20AFE6EB70FE14D71E6E809582D",
            "37004EFC",
            "1A3333EAED70397C6BB05C2DC4F89AEF6C22796BEC36DC8D571318F112C67EAD",
            "E7542B65",
            "37A86DCA58",
            "37A86DCA587205A76F33FFB7171FBB873F6738397082BA2F36A640182913AD69",
            "C0B26BE6",
            "8177DC23CAE8F25215C8A5BB38D8D10B342B75C24B1EBB20554E4D2EF8B7352C"
        ],
        "4.1": [
            "6BBFE67E",
            "C590550EA5",
            "C590550EA5F3EA3AD9126A264ED27970CE4A14EEF134900599A73F00B64C4855",
            "BF323580",
            "C2905F353DA4BE2C9164617C8F2D17146C491BBCF72618C75D8E4ACCE0BAF131"
        ],
        "3.2": [
            "3F91F838",
            "2AD79A2618",
            "2AD79A26181DC655912CA26B5D432BC9FC3EA970684F33F4524AF0F953071A9A",
            "0D1BB606",
            "D455421DF9C1F45A5A540E29C45BAC4E3C93F94B0F282A8E78C84EDFCD00315D"
        ],
        "3.1": [
            "3A5A5284",
            "4FC8D3739F",
            "4FC8D3739FC90E018809CB495FA564C9F14FB9B24AABAD41F9F0E7445FECAE14",
            "B94DF545",
            "B4BAB8806737811D9B2C70DB579DECD56D16984CF94026F5E39D5C9FED2000E5"
        ],
        "2.4": [
            "8B002290",
            "546566D9D5",
            "546566D9D59BEA39331E8105BBB4E12323620039DFE2E1267277D0E12BEAE8F9",
            "D5D605E2",
            "C7BD8A09FD90ED3926A74C83643E0E5190993084CBE04517801A4CE7347260FF"
        ]
    },
    "illuminati-diffusion": {
        "1.1": [
            "A149572B",
            "CAE1BEE30E",
            "CAE1BEE30E67339DD931925F98C12D2B86FE9F4786795137040E4956F4BFCFFE",
            "1BB2E796",
            "B223E8F045E27A917207E226B60E4C51B46F114C9B378DE869584406762053A3"
        ]
    },
    "protogen": {
        "2.2 (Anime)": [
            "B5C0B653",
            "BB725EAF2E",
            "BB725EAF2ED90092E68B892A1D6262F538131A7EC6A736E50AE534BE6B5BD7B1",
            "395A2EF8",
            "5A01E2073534BB009DD39D4EA73468C046E56190E003F95979EEC50B92DFCE96",
            "16E33692",
            "1254103966",
            "125410396648D4B622B7D3AA38D95F7D67EA44EE5669BC31C12F344A10F73CA9",
            "71205CD8",
            "7BC87106A4941544DEF14BFE613522841A37B17E9E105A424FF234105D17EB25",
            "7BFD4934",
            "EEA02A02BF",
            "EEA02A02BFA43A929306F4DADDAD7698D7163055ED35EAD53E4302C941C87B76",
            "87C6661C",
            "D78E5B7A919766E97ECE78F527C367063AE318523405139BD756C6CB2E64A211",
            "0AED3741",
            "B4D453442A",
            "B4D453442AF7124BB12832A4450F4F120452F479C0212E0924D34CFBE580BA42",
            "7B9878A4",
            "54AA328F270CEA1BEF013B2CB91781C206E388B762043957D5C462F8CA80D0E9"
        ],
        "3.4 (Photorealism)": [
            "60FE2F34",
            "61A37ADF76",
            "61A37ADF761FBBF4CB3D88DA480216341113D0FBCF9F0F77EA71863866A9B6FC",
            "16CF0612",
            "80AFE7BF303BF2B96DD4668497AFF8DAE6B1EB5A50219810CBFF2AE9BDB5F61B",
            "C88E730A",
            "44F90A0972",
            "44F90A09727CA8B62EA304E140546A0AF96BA6EDCB229C20C677AA4460449C21",
            "C04B5D82",
            "CCA3A7A783CB24820A7AC257C0539853DB8CCAE3E3AA266333AFBBB98B5DB656",
            "73D359A0",
            "5346D7DE1F",
            "5346D7DE1F448E6953A12E9C186F3996AC07B6E1EA6076FC242BC484B48B7C95",
            "D6485E7B",
            "EFD8D522407E428B82FC7B55D815F892C3DB9B83D167BEAF19EA96F66EC17DAA",
            "5896F8D5",
            "EF8629E2C8",
            "EF8629E2C89E19A993146302418CF1FF3BA0384DD98523EAB6B88AC33EAD9D39",
            "205E0B2F",
            "C81E46A5D10BA796A70B64DD568AB140A4BB83EBD1E9C95778A9F2FB108FF1BE"
        ],
        "5.3 (Photorealism)": [
            "CFC5DE0E",
            "F762CDEF02",
            "F762CDEF0235669136C16421E7F3AFFB47AB78E20890D5258347CF5AE571AF76",
            "E5E3746D",
            "FD5FE8327DC33B70885E8B8E6C272CAEC6D38BB64D2B727625A05C087FC9CAA4",
            "D0B457AE",
            "E3CDA540BF",
            "E3CDA540BF6F8C051C76886DF9E22E114BEF161A4E36C743C2AC82955E851C32",
            "179D2F18",
            "18E757729285EBAB87E98E1BE79C370C73B954DD2E96FDD2CD10075FB5AACB2E",
            "FAB2577C",
            "B914725D74",
            "B914725D74A248B88B38E4CDFF0D40BB1F4024F8BC851E4A71B813BDDA7F78E6",
            "0335A13C",
            "7DB9372689AED2F7C9D9C97B8245FB44BBD37BC2A0E5E570E7D6F164B529B34A",
            "00EE24B4",
            "93A10D6661",
            "93A10D6661F3BEB49C8605C2865B9CD5BACA2CFAF14943EDCD34D05B6E747649",
            "C8BF37FC",
            "1A804D3E6F68F924FD0CF8168DAD4D18751B3FBA965238887BF3C898C113133B"
        ],
        /** huggingface **/
        "5.8 Rebuilt (Scifi+Anime)": [
            "e0de8aae3eca7c8b23c668f3d43f4f203f9c0d4365a31072ccb8ff864004cd42",
            "847da9eead08fa6dfc11f95e479ee4e12bc6da4747b006ccefcd1e0e498f62c1",
            "710fc74d4cf3245cf5f1664f25502da0c7750f80e8bbbb56929e710043d84efa",
            "6a21b428a3fb7286f024f958c761ea1a36a5061c3d3c1eb6a815c88af0e97cb0"
        ]
    },
    "abyssorangemix": {
        "3": [
            "9600DA17",
            "5493A0EC49",
            "5493A0EC491F5961DBDC1C861404088A6AE9BD4007F6A3A7C5DEE8789CDC1361",
            "D3735BC9",
            "2FB17575610E265EF07A5C670A0F0D41A76251D0BF42756A1B3F2F7825CE77DD",
            "9600DA17",
            "EB4099BA9C",
            "EB4099BA9CD5E69AB526FCA22A2E967F286F8512D9509B735C892FA6468767CF",
            "A6AA9B91",
            "4B292B7C3B9F947E7364D86343F6B0BD652AFA5DB55C2C9F3527AA79B65B7F12",
            "9600DA17",
            "F303D10812",
            "F303D108122DDD43A34C160BD46DBB08CB0E088E979ACDA0BF168A7A1F5820E0",
            "D2BB8BF2",
            "3DBD7CC619281D2CB2D663509E90FAC46F7F430386373B92D5047B08FC510BA7",
            "9600DA17",
            "D124FC18F0",
            "D124FC18F0232D7F0A2A70358CDB1288AF9E1EE8596200F50F0936BE59514F6D",
            "212A0AEE",
            "49B4166A102951877F2134D1D7D6E8396B7ED0D33EE264F2B9479BC2DA7A1329"
        ]
    }
}