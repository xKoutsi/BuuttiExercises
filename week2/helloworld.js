let lang = process.argv[2];                                                 // Lukee komentoriviltä kielen
let langnum = 2 ;                                                           // Kielinumero on määritetty kakkoseksi, jotta kieli on defaultina englanti

if(lang === "fi"){                                                          // Vaihdetaan kielinumero vastaamaan Arraytä
    langnum = 0;
};
if(lang === "se"){
    langnum = 1;
};

const hello = ["Terve, maailma!", "Tjänare världen!"," Hi World!"];         // Arrayssä tervehdykset

console.log(hello[langnum]);                                                // Tulostaa tervehdyksen
