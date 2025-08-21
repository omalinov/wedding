document.addEventListener("DOMContentLoaded", () => {
    let currentTarget = "home";
    const lis = document.querySelectorAll("nav li");
    lis.forEach(li => {
        if (li.dataset.tab != currentTarget) {
            document.getElementById(li.dataset.tab).classList.add("hidden");
        } else {
            document.getElementById(li.dataset.tab).classList.remove("hidden");
        }
        li.addEventListener("click", e => {
            document.getElementById(currentTarget).classList.add("hidden");
            currentTarget = e.currentTarget.dataset.tab;
            if (e.currentTarget.dataset.hideBackground !== undefined) {
                document.body.classList.add("hide-body-background");
            } else {
                document.body.classList.remove("hide-body-background");
            }
            document.getElementById(currentTarget).classList.remove("hidden");
            document.querySelector("nav").classList.remove("shown-nav");
            window.scrollTo(0, 0);
        });
    });

    document.querySelectorAll(".sign path").forEach(path => {
        path.addEventListener("animationend", e => e.currentTarget.classList.add("sign-path-drawn"));
    });
});

function doCountdown() {
    const date = new Date(2025, 8, 12, 16, 30);

    const secsCont = document.querySelector("#seconds");
    const minsCont = document.querySelector("#minutes");
    const hoursCont = document.querySelector("#hours");
    const daysCont = document.querySelector("#days");

    let days, hours, minutes, seconds;

    function getDiff() {
        const now = new Date();
        let timeDiff = Math.floor((date - now) / 1000);

        if (timeDiff < 0) timeDiff = 0;

        days = Math.floor(timeDiff / (60 * 60 * 24));
        hours = Math.floor((timeDiff % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((timeDiff % (60 * 60)) / 60);
        seconds = timeDiff % 60;
    }

    function loop() {
        getDiff();

        if (parseInt(secsCont.textContent) != seconds) {
            secsCont.textContent = seconds;

        }

        if (parseInt(minsCont.textContent) != minutes) {
            minsCont.textContent = minutes;
        }

        if (parseInt(hoursCont.textContent) != hours) {
            hoursCont.textContent = hours;
        }

        if (parseInt(daysCont.textContent) != days) {
            daysCont.textContent = days;
        }

        requestAnimationFrame(loop);
    }

    loop();
}

doCountdown();

function doRooms() {
    const rooms = {
        "Койчо Каназирски": { house: "Estera Vini Къща 1", floor: 1, room: 1, roomType: "спалня", duration: 1, pricePerNight: 120 },
        "Мария Каназирска": { house: "Estera Vini Къща 1", floor: 1, room: 1, roomType: "спалня", duration: 1, pricePerNight: 120 },

        "Бояна Владова": { house: "Estera Vini Къща 1", floor: 2, room: 2, roomType: "спалня", duration: 1, pricePerNight: 120 },
        "Радослав Владов": { house: "Estera Vini Къща 1", floor: 2, room: 2, roomType: "спалня", duration: 1, pricePerNight: 120 },

        "Антоанета Вълканова": { house: "Estera Vini Къща 1", floor: 2, room: 3, roomType: "спалня", duration: 1, pricePerNight: 120 },
        "Даниел Иванов": { house: "Estera Vini Къща 1", floor: 2, room: 3, roomType: "спалня", duration: 1, pricePerNight: 120 },

        "Мария Стефанова": { house: "Estera Vini Къща 2", floor: 1, room: 1, roomType: "спалня", duration: 2, pricePerNight: 120 },
        "Огнян Малинов": { house: "Estera Vini Къща 2", floor: 1, room: 1, roomType: "спалня", duration: 2, pricePerNight: 120 },

        "Рая Владова": { house: "Estera Vini Къща 2", floor: 2, room: 2, roomType: "спалня", duration: 2, pricePerNight: 120 },
        "Иван Иванов": { house: "Estera Vini Къща 2", floor: 2, room: 2, roomType: "спалня", duration: 2, pricePerNight: 120 },

        "Панайот Стефанов": { house: "Estera Vini Къща 2", floor: 2, room: 3, roomType: "2 етаж две легла", duration: 1, pricePerNight: 120 },
        "Росица Стефанова": { house: "Estera Vini Къща 2", floor: 2, room: 3, roomType: "2 етаж две легла", duration: 1, pricePerNight: 120 },

        "Ивайло Ангелов": { house: "Estera Vini Къща 3", floor: 1, room: 1, roomType: "две легла + доп. легло", duration: 2, pricePerNight: 145 },
        "Тихомира Николова": { house: "Estera Vini Къща 3", floor: 1, room: 1, roomType: "спалня + доп. легло", duration: 2, pricePerNight: 145 },
        "Александър Ангелов": { house: "Estera Vini Къща 3", floor: 1, room: 1, roomType: "спалня + доп. легло", duration: 2, pricePerNight: 145 },

        "Златка Стефанова": { house: "Estera Vini Къща 3", floor: 2, room: 2, roomType: "спалня", duration: 2, pricePerNight: 120 },
        "Красимир Стефанов": { house: "Estera Vini Къща 3", floor: 2, room: 2, roomType: "спалня", duration: 2, pricePerNight: 120 },

        "Екатерина Тянкова": { house: "Estera Vini Къща 3", floor: 2, room: 3, roomType: "2 етаж две легла", duration: 1, pricePerNight: 120 },
        "Ondrej Vanek": { house: "Estera Vini Къща 3", floor: 2, room: 3, roomType: "2 етаж две легла", duration: 1, pricePerNight: 120 },

        "Соня Хършева": { house: "Estera Vini Къща 4", floor: 1, room: 1, roomType: "спалня + доп. легло", duration: 2, pricePerNight: 145 },
        "Красимир Ромов": { house: "Estera Vini Къща 4", floor: 1, room: 1, roomType: "спалня + доп. легло", duration: 2, pricePerNight: 145 },
        "Петя Ромова": { house: "Estera Vini Къща 4", floor: 1, room: 1, roomType: "спалня + доп. легло", duration: 2, pricePerNight: 145 },
        "София Ромова": { house: "Estera Vini Къща 4", floor: 1, room: 1, roomType: "спалня + доп. легло", duration: 2, pricePerNight: 145 },

        "Панко Тянков": { house: "Estera Vini Къща 4", floor: 2, room: 2, roomType: "спалня", duration: 2, pricePerNight: 120 },
        "Кирил Тянков": { house: "Estera Vini Къща 4", floor: 2, room: 2, roomType: "спалня", duration: 2, pricePerNight: 120 },

        "Марияна Жечева": { house: "Estera Vini Къща 4", floor: 2, room: 3, roomType: "2 етаж две легла", duration: 1, pricePerNight: 120 },
        "Елена Лулчева": { house: "Estera Vini Къща 4", floor: 2, room: 3, roomType: "2 етаж две легла", duration: 1, pricePerNight: 120 },

        "Златко Чотев": { house: "Къща Анита & Релакс", floor: 1, room: 1, roomType: "спалня", duration: 1, pricePerNight: 100 },
        "Виктория Романова": { house: "Къща Анита & Релакс", floor: 1, room: 1, roomType: "спалня", duration: 1, pricePerNight: 100 },

        "Eva Schäfer": { house: "Anita & Relax House", floor: 2, room: 2, roomType: "one bedroom one single bed", duration: 2, pricePerNight: 120 },
        "Christian Berndt": { house: "Anita & Relax House", floor: 2, room: 2, roomType: "one bedroom one single bed", duration: 2, pricePerNight: 120 },
        "Clara Berndt": { house: "Anita & Relax House", floor: 2, room: 2, roomType: "one bedroom one single bed", duration: 2, pricePerNight: 120 },

        "Боян Каназирски": { house: "Къща Анита & Релакс", floor: 2, room: 3, roomType: "две легла", duration: 1, pricePerNight: 100 },

        "Валентин Батуров": { house: "Къща Анита & Релакс", floor: 2, room: 4, roomType: "две легла", duration: 2, pricePerNight: 100 },

        "Атанас Анчев": { house: "Къща Анита & Релакс", floor: 3, room: 7, roomType: "две легла", duration: 1, pricePerNight: 100 },
        "Мирена Младенова": { house: "Къща Анита & Релакс", floor: 3, room: 7, roomType: "две легла", duration: 1, pricePerNight: 100 },

        "Петър Петров": { house: "Къща Анита & Релакс", floor: 3, room: 8, roomType: "спалня", duration: 1, pricePerNight: 100 },
        "Ани Петрова": { house: "Къща Анита & Релакс", floor: 3, room: 8, roomType: "спалня", duration: 1, pricePerNight: 100 },

        "Георги Чотев": { house: "Къща Анита & Релакс", floor: 3, room: 9, roomType: "спалня", duration: 1, pricePerNight: 100 },
        "Станислава Чоролеева": { house: "Къща Анита & Релакс", floor: 3, room: 9, roomType: "спалня", duration: 1, pricePerNight: 100 },

        "Теодор Велев": { house: "Къща Анита", floor: 2, room: 1, roomType: "две легла", duration: 1, pricePerNight: 80 },
        "Георги Араламов": { house: "Къща Анита", floor: 2, room: 1, roomType: "две легла", duration: 1, pricePerNight: 80 },

        "Влад Федоров": { house: "Къща Анита", floor: 2, room: 2, roomType: "две легла", duration: 1, pricePerNight: 80 },

        "Надя Баримова": { house: "Къща Анита", floor: 2, room: 3, roomType: "спалня + доп. легло", duration: 1, pricePerNight: 95 },
        "Димитър Баримов": { house: "Къща Анита", floor: 2, room: 3, roomType: "спалня + доп. легло", duration: 1, pricePerNight: 95 },
        "Велизар Баримов": { house: "Къща Анита", floor: 2, room: 3, roomType: "спалня + доп. легло", duration: 1, pricePerNight: 95 },

        "Мартин Добрев": { house: "Къща Анита", floor: 3, room: 4, roomType: "спалня", duration: 1, pricePerNight: 80 },

        "Мария Бадева": { house: "Къща Анита", floor: 3, room: 5, roomType: "спалня", duration: 1, pricePerNight: 80 },

        "Денис Ников": { house: "Къща Анита", floor: 3, room: 6, roomType: "спалня", duration: 1, pricePerNight: 80 },
    };

    const input = document.querySelector("#room-details-input");
    for (const guest in rooms) {
        if (rooms.hasOwnProperty(guest)) {
            const option = document.createElement("option");
            option.textContent = guest;
            input.appendChild(option);
        }
    }

    const table = document.querySelector(".room-details .table");
    const entries = table.querySelectorAll(".table-entry");

    new SlimSelect({
        select: "#room-details-input",
        settings: {
            placeholderText: 'Select your name for room details',
        },
        events: {
            afterChange: newVal => {
                const key = newVal[0].value;
                const newDetails = rooms[key];
                const guests = [];
                for (const guest in rooms) {
                    const guestDetails = rooms[guest];
                    if (guestDetails.house == newDetails.house && guestDetails.floor == newDetails.floor && guestDetails.room == newDetails.room) {
                        guests.push(guest);
                    }
                }
                entries[0].children[1].textContent = newDetails.house;
                entries[1].children[1].textContent = newDetails.floor;
                entries[2].children[1].textContent = newDetails.room;
                entries[4].children[1].textContent = newDetails.roomType;
                entries[5].children[1].textContent = newDetails.duration;
                entries[6].children[1].textContent = `${newDetails.pricePerNight} BGN`;
                entries[7].children[1].textContent = `${newDetails.pricePerNight * newDetails.duration} BGN`;

                entries[3].children[1].innerHTML = `<div>${guests.join('</div><div>')}</div>`;
            }
        }
    });
}
doRooms();

const l11n_bg = {
    "story_title": "Нашата История",
    "story": `Пътищата им се събраха благодарение на поредица от неочаквани моменти.
<br><br>
Мария работеше като хуманитарен работник в Тайланд, а Огнян живееше скучно в София. Когато несигурността,
породена от COVID пандемията, я върна неочаквано в Европа, тя дойде да прекара време със семейството си в
България, а впоследствие реши да остане за по-дълго. По същото време Огнян реши да остави столицата и да се
върне в Пловдив, за да може по-често да се среща с любимите си хора.
<br><br>
Срещнаха се на 3 март в бар "Куатро", където Рая и Марчето отбелязваха 8 март превантивно, а Огнян се
чудеше как да си пилее ергенлъка. След съглашение между бъдещата кума и Огнян, излязоха на двойна вечеря. И
каква вечеря беше само – оттогава Огнян знае какво е балучка! Изобщо неслучайна дума, защото лукът не
липсва в живота им.
<br><br>
Следващата сюблимна среща – Мария току-що се беше върнала по-рано от пътуване до Испания, отлагайки похода
си по Камино де Сантяго, решила, че може да пробва да прекарва повече време с все по-напористия младеж. От
този момент нататък започнаха да се виждат все по-често и съвсем скоро, като по магия, се нанесоха заедно в
компанията на две баби котки, пропътували има-няма 2500 км от Англия, и Джак – най-милото куче на
галактиката.
<br><br>
Около година по-късно Огнян предложи, точно както Мария винаги си е мечтала – на върха на планински хълм, по
залез слънце, заобиколени от природа и с изглед към светлините на Пловдив. Той беше подготвил красива вечеря
с италианска храна – от всичко по много и от най-вкусното. Тук, под секрет, ще отбележим, че доста умело
дирижира Мария, която помогна с пазаруването за собствения си годеж – кражба, нов стил.
<br><br>
Обстановката беше вълшебна – меки одеяла и възглавници, трептящи свещи, светлинки, нежна музика за фон, чаша
охладено шампанско и най-добрата компания. След като инфарктно почти загубиха пръстена с диамант из
августовските треви на Родопските поляни, заспаха за първи път като годеници.
<br><br>
На следващия ден запалиха колата и заминаха на юг, за да отпразнуват годежа си в перлата на Турската Ривиера
– Анталия, и оттогава насам планират и се подготвят за специалния си ден, за който организацията и голяма
част от декора са дело на двамата – измислени и изработени с много любов и желание.`,
    "honor_attendants": "Почетни Гости",
    "best_man": "Кум",
    "best_man_name": "Панайот Стефанов",
    "maid_of_honor": "Кума",
    "maid_of_honor_name": "Рая Владова",
    "church_details_header": "Църковен брак",
    "church_details": `
<strong>Църковен брак - 15:30 ч.</strong>
<br/>
Църковната церемония ще се проведе в храм „Свети Атанасий“, разположен в центъра на град Перущица. Всички гости са поканени да присъстват. Гостите ще започнат да се събират пред храма от 15:00 ч., а самата церемония ще започне в 15:30 ч.
<br/><br/>
<strong>Как да стигнете до църквата?</strong>
<br/>
За Ваше удобство е осигурен транспорт от Пловдив, който ще тръгне от спирката срещу хотел "Тримонциум" в 14:00 ч. и ще пристигне пред храма около 15:00 ч. Всички гости са добре дошли да се възползват от тази услуга.
<br/><br/>
<strong>Молим Ви да ни уведомите предварително, ако желаете да използвате транспорта!</strong>
<br/><br/>
Ако ще нощувате в Anita Guest House или Anita Relax Guest House, църквата се намира на около 5 минути пеша.
<br/><br/>
Esterra Vini Guest House е разположена на приблизително 4 км от храма или около 5–10 минути с автомобил.`,
    "welcome_drink_details_header": "Коктейл",
    "welcome_drink_details": `
<strong>Добре дошли в Esterra Vini - 17:00 ч.</strong>
<br/>
Esterra Vini е нашето специално място за сватбеното тържество. При пристигането ви ще бъдете посрещнати с разнообразие от напитки и леки хапки — включително различни студени алкохолни и безалкохолни напитки.
<br/><br/>
<strong>Как да стигнете до Esterra Vini?</strong>
<br/>
За ваше удобство организиран транспорт ще отведе всички гости директно от църквата до мястото на събитието. 
От Пловдив до Esterra Vini са около 25 км, което се изминава за около 30 минути с автомобил по главния път към Перущица и след това по малък път, където се намира мястото.
<br/><br/>
<strong>Паркинг</strong>
<br/>
Паркингът е разположен в затворения комплекс на Esterra Vini и е безплатен. Молим гостите да оставят свободни пространствата и пътеките към гората и мястото на тържеството, за да могат всички спокойно да се движат,и да не възпрепятстват сватбенатите снимки.
Обособен е охраняем паркинг предоставят и къщите за гости  Anita Guest House и Anita Relax Guest House.
<br/><br/>
<strong>Граждански Брак - 17:15</strong>
<br/>
Гражданският брак ще се състои сред природата — в гористата част на Esterra Vini. Церемонията ще започне точно в 17:15 ч., така че молим всички гости да бъдат на място малко по-рано.
След официалната част ще имате възможност да поздравите младоженците, да поднесете своите подаръци и пожелания, както и да направите снимки с тях
<br/><br/>
<strong>Вечеря и тържество - 19:00 ч.</strong>
<br/>
Вечерята ще започне в 19:00 ч. и ще бъде сервирана на открито, в градината на Esterra Vini. Ще се насладите на вкусна храна, подбрани напитки и много музика под звездите.
Тържеството и обслужването официално ще продължат до 04:00 ч. сутринта, така че пригответе се за дълга, весела и незабравима вечер, изпълнена с танци, наздравици и споделени моменти!
`,
    "accomodation_header": "Настаняване",
    "accomodation_details": `
<strong>Настаняване и транспорт</strong>
<br/>
Гостите ще бъдат настанени на две локации:
<ul>
<li>Esterra Vini – на самото място на сватбеното тържество</li>
<li>Къщи за гости в центъра на Перущица – Anita Guest House и Anita Relax Guest House</li>
</ul>
<strong>Часове за настаняване и напускане</strong>
<ul>
<li><strong>Настаняване</strong>: между 14:00 ч. - 18:00 ч. на 12 септември</li>
<li><strong>Освобождаване</strong> на стаите: до 11:00 ч. на 13 септември</li>
<li><strong>Плащане</strong>: на рецепция, по време на настаняване</li>
</ul>
<strong>Препоръчително време за настаняване</strong>
<br/>
Между 14:00 и 15:30 ч., за да имате време спокойно да получите ключовете и да оставите багажа преди началото на сватбената програма. В Esterra Vini рецепцията се намира в Къща №1.
<br/><br/>
<strong>Вечерен транспорт</strong>
<br/>
За гостите, отседнали в Перущица, е осигурен вечерен транспорт от Esterra Vini до къщите за гости, както следва:
<ul>
<li><strong>Първи</strong> курс: 22:00 ч.</li>
<li><strong>Последен</strong> курс: 04:00 ч.</li>
<li><strong>Честота</strong>: на всеки кръгъл час (23:00, 00:00, 01:00 и т.н.)</li>
</ul>
Ако имате нужда от транспорт извън този график, можете спокойно да се обърнете към шофьора – той с радост ще Ви съдейства.
Ако планирате да използвате такси услуга iили drink & drive до Пловдив, Ви съветваме да резервирате предварително, тъй като местните възможности в късните часове може да бъдат ограничени.
<br/><br/>
<strong>Контакти за настаняване</strong>
<br/>
Телефон: +359 884 675 777
<br>
Email: reservations@anita.bg`,
    "room_details": `Детайли настаняване`,
    "house": "Къща",
    "floor": "Етаж",
    "room_number": "Номер на стая",
    "guest_name": "Гост",
    "room_type": "Вид стая",
    "duration": "Престой нощи",
    "price_per_night": "Цена на нощувка",
    "total_price": "Общо",
    "location": "12 09 2025 | Естера Вини, Перущица",
    "event_details": "Детайли",
    "photos_and_video": "Снимки & Видео",
    "faq": "ЧЗВ",
    "days": "дни",
    "hours": "часа",
    "minutes": "минути",
    "seconds": "секунди",
    "photos": "Ще сме безкрайно благодарни ако качите снимките които сте направили",
    "photos_link": "тук",
    "gallery": "Галерия",
    "faq-title-0": "Как да стигна до църквата \"Свети Атанасий\"?",
    "faq-text-0": "За ваше удобство има организиран транспорт от Пловдив, който тръгва в 14:00 ч. от спирката срещу хотел \"Тримонциум\" и пристига пред църквата около 15:00 ч. Ако желаете да използвате този транспорт, моля, уведомете ни предварително!",

    "faq-title-1": "Как да стигна до Esterra Vini за сватбеното тържество?",
    "faq-text-1": "След църковната церемония ще има организиран транспорт, който ще отведе всички гости до Estera Vinni. От Пловдив до Esterra Vini са около 25 км (около 30 минути с автомобил).",

    "faq-title-2": "Има ли паркинг?",
    "faq-text-2": "Да, паркингът се намира в затворения комплекс на Esterra Vini и е безплатен за всички гости. Молим ви да оставяте пътеките и пространствата свободни, за да не се възпрепятстват сватбените снимки и движението. Колата Ви може да остане там до 11:00 ч. на деня след сватбата. Къщите за гости, както и църквата също разполагат с безплатен паркинг.",

    "faq-title-3": "Къде мога да нощувам?",
    "faq-text-3": "Настаняване е възможно в Anita Guest House и Anita Relax Guest House в центъра на Перущица (около 5 минути пеша от църквата) или в Esterra Vini, което е на мястото на тържеството. За всички заявили са направени резервация, която може да платите при настаняване на рецепцията с карта или в брой. Можете да проверите детайли за вашата резервация в таблицата в секцията \"Детайли\".",

    "faq-title-4": "Какви са часовете за настаняване и напускане?",
    "faq-text-4": "Настаняването е между 14:00 и 18:00 ч. на 12 септември. Освобождаването на стаите е до 11:00 ч. на 13 септември.",

    "faq-title-5": "Как мога да се върна до къщите за гости след тържеството?",
    "faq-text-5": "За гостите в Перущица е осигурен вечерен транспорт от Esterra Vini до къщите и обратно, на всеки кръгъл час от 22:00 до 04:00 ч. Ако имате нужда от транспорт извън този график, може да се обърнете към шофьора на колата.",

    "faq-title-6": "Как да стигна без да карам?",
    "faq-text-6": "Пловдивските таксита пътуват от и до Estera Vinni. Препоръчваме ви да направите предварителна резервация, тъй като възможностите за такси в късните часове може да са ограничени.",

    "faq-title-7": "Имам ли резервирана стая?",
    "faq-text-7": "Да, ние сме направили всички необходими резервации и осигурили стаи за всички гости. Моля, проверете подробностите за вашата стая в секцията с информация за настаняване.",

    "faq-title-8": "Осигурени ли са удобства за бебето ми?",
    "faq-text-8": "За гостите с малки деца сме предвидили бебешки креватчета и столчета, които ще бъдат предоставени на тези, които са споделили с нас предварително. Не се колебайте да ни пишете, ако все още не сте го направили.",

    "faq-title-9": "С кого да се свържа при въпроси за настаняването?",
    "faq-text-9": "При въпроси, свързани с настаняването, търсете домакините на:<ul><li>Телефон: +359 884 675 777</li><li>Email: reservations@anita.bg</li></ul>",

    "faq-title-10": "Какъв е дрескодът за сватбата?",
    "faq-text-10": "Дрескодът е garden chic, но всякакво формално облекло ще Ви свърши работа. За по-удобно движение из тревните площи и танци край басейна е добре да имате и подходящи обувки.",

    "faq-title-11": "Какъв подарък да взема?",
    "faq-text-11": "Присъствието Ви е повече от достатъчно, но ако искате да ни зарадвате, то паричният подарък е най-удачният избор. Въпреки, че Мария страшно обича цветя те не са подходящ избор, защото са скъпи, трудно се транспортират и биха увяхнали. Ако все пак искате да донесете нещо физическо, то бутилка вино за нашата семейна колекция ще е траен и ценен спомен от вас."

};

const l11n_en = {
    "story_title": "Our Story",
    "story": `Their paths crossed thanks to a series of unexpected moments.
<br><br>
Maria was working as a humanitarian worker in Thailand, while Ognyan was living a dull life in Sofia. When the uncertainty caused by the COVID pandemic unexpectedly brought her back to Europe, she came to spend time with her family in Bulgaria, and later decided to stay longer. At the same time, Ognyan decided to leave the capital and return to Plovdiv, so he could meet his loved ones more often.
<br><br>
They met on March 3rd at the bar "Quattro", where Raya and Marcheto were preemptively celebrating March 8th, while Ognyan was wondering how to waste away his bachelorhood. After an agreement between the future maid of honor and Ognyan, they went out on a double date. And what a dinner it was – from that day on Ognyan knew what a baluchka was! Not at all a random word, since onion has never been absent from their lives.
<br><br>
The next sublime meeting – Maria had just returned early from a trip to Spain, postponing her Camino de Santiago hike, deciding she could try spending more time with the ever more persistent young man. From that moment on, they started seeing each other more and more often, and very soon, as if by magic, they moved in together – joined by two elderly cats who had traveled some 2,500 km from England, and Jack – the sweetest dog in the galaxy.
<br><br>
About a year later Ognyan proposed, just the way Maria had always dreamed – on top of a mountain hill, at sunset, surrounded by nature and with a view of the lights of Plovdiv. He had prepared a beautiful dinner with Italian food – plenty of everything and only the most delicious. Here, in confidence, we should note that Maria conducted the affair quite skillfully, having helped with the shopping for her own engagement – theft, new style.
<br><br>
The setting was magical – soft blankets and pillows, flickering candles, fairy lights, gentle background music, a glass of chilled champagne, and the best company. After almost losing the diamond ring in the August grasses of the Rhodope meadows in a near-heart-attack moment, they fell asleep for the first time as fiancés.
<br><br>
The next day they started the car and headed south to celebrate their engagement in the pearl of the Turkish Riviera – Antalya, and since then they have been planning and preparing for their special day, for which much of the organization and a large part of the décor are their own creations – imagined and crafted with great love and care.`,
    "honor_attendants": "Honor Attendants",
    "best_man": "Best Man",
    "best_man_name": "Panayot Stefanov",
    "maid_of_honor": "Maid of Honor",
    "maid_of_honor_name": "Raya Vladova",
    "church_details_header": "The Church",
    "church_details": `<strong>Church Wedding – 15:30</strong>
<br/>
The church ceremony will take place at Храм “Свети Атанасий” located in the center of Perushtitsa. All guests are invited to attend. Guests will begin gathering in front of the church at 15:00, and the ceremony itself will start at 15:30.
<br/><br/>
<strong>How to get to the church?</strong>
<br/>
For your convenience, transportation from Plovdiv has been arranged. The bus will depart at 14:00 from the bus stop opposite the “Trimontium” hotel and will arrive in front of the church around 15:00. All guests are welcome to use this service.
<br/><br/>
<strong>Please let us know in advance if you would like to use the transportation!</strong>
<br/><br/>
If you are staying at Anita Guest House or Anita Relax Guest House, the church is about a 5-minute walk away.
<br/><br/>
Esterra Vini Guest House is located approximately 4 km from the church, or about a 5–10 minute drive.
`,
    "welcome_drink_details_header": "Welcome drink",
    "welcome_drink_details": `<strong>Welcome to Esterra Vini – 17:00</strong>
<br/>
Esterra Vini is our special place for the wedding celebration. Upon your arrival, you will be welcomed with a selection of drinks and light bites — including a variety of chilled alcoholic and non-alcoholic beverages.
<br/><br/>
<strong>How to get to Esterra Vini?</strong>
<br/>
For your convenience, organized transportation will take all guests directly from the church to the venue.  
From Plovdiv to Esterra Vini is about 25 km, which takes around 30 minutes by car via the main road to Perushtitsa and then a smaller road leading to the estate.
<br/><br/>
<strong>Parking</strong>
<br/>
Parking is available inside the Esterra Vini gated complex and is free of charge. We kindly ask guests to keep the spaces and pathways near the forest and ceremony area clear, so that everyone can move around comfortably and the wedding photos are not obstructed.  
Additional secured parking is also provided by Anita Guest House and Anita Relax Guest House.
<br/><br/>
<strong>Civil Ceremony – 17:15</strong>
<br/>
The civil ceremony will take place outdoors, in the wooded part of Esterra Vini. It will begin promptly at 17:15, so we kindly ask all guests to be seated a little earlier.  
After the official part, you will have the opportunity to greet the newlyweds, present your gifts and wishes, and take photos with them.
<br/><br/>
<strong>Dinner and Celebration – 19:00</strong>
<br/>
Dinner will begin at 19:00 and will be served outdoors, in the garden of Esterra Vini. You will enjoy delicious food, selected drinks, and plenty of music under the stars.  
The celebration and service will continue officially until 04:00 in the morning — so get ready for a long, joyful, and unforgettable night filled with dancing, toasts, and shared moments!
`,
    "accomodation_header": "Accomodation",
    "accomodation_details": `<strong>Accommodation and Transportation</strong>
<br/>
Guests will be accommodated in two locations:
<ul>
<li>Esterra Vini – at the wedding venue itself</li>
<li>Guest houses in the center of Perushtitsa – Anita Guest House and Anita Relax Guest House</li>
</ul>
<strong>Check-in and Check-out Times</strong>
<ul>
<li><strong>Check-in</strong>: between 14:00 – 18:00 on September 12</li>
<li><strong>Check-out</strong>: by 11:00 on September 13</li>
<li><strong>Payment</strong>: at reception, upon check-in</li>
</ul>
<strong>Recommended Check-in Time</strong>
<br/>
Between 14:00 and 15:30, so you have enough time to collect your keys and leave your luggage before the start of the wedding program. At Esterra Vini, the reception is located in House No. 1.
<br/><br/>
<strong>Evening Transportation</strong>
<br/>
For guests staying in Perushtitsa, evening transportation will be provided from Esterra Vini back to the guest houses as follows:
<ul>
<li><strong>First</strong> trip: 22:00</li>
<li><strong>Last</strong> trip: 04:00</li>
<li><strong>Frequency</strong>: every full hour (23:00, 00:00, 01:00, etc.)</li>
</ul>
If you need transportation outside of this schedule, please feel free to speak with the driver – he will be happy to assist you.  
If you plan to use a taxi service or a "drink & drive" service to Plovdiv, we recommend booking in advance, as local options during late hours may be limited.
<br/><br/>
<strong>Accommodation Contacts</strong>
<br/>
Phone: +359 884 675 777
<br/>
Email: reservations@anita.bg
`,
    "room_details": `Room details`,
    "house": "House",
    "floor": "Floor",
    "room_number": "Room number",
    "guest_name": "Guest",
    "room_type": "Room type",
    "duration": "Stay duration",
    "price_per_night": "Price per night",
    "total_price": "Total",
    "location": "12 09 2025 | Esterra Vini, Perushtitsa",
    "event_details": "Event Details",
    "photos_and_video": "Photos & Videos",
    "faq": "FAQ",
    "days": "days",
    "hours": "hours",
    "minutes": "minutes",
    "seconds": "seconds",
    "photos": "We would be extremely thankful if you upload your photos",
    "photos_link": "here",
    "gallery": "Gallery",
    "faq-title-0": "How do I get to \"Свети Атанасий\"?",
    "faq-text-0": "For your convenience, organized transportation is available from Plovdiv, departing at 14:00 from the bus stop opposite the “Trimontium” hotel and arriving in front of the church around 15:00. If you would like to use this transport, please let us know in advance!",

    "faq-title-1": "How do I get to Esterra Vini for the wedding celebration?",
    "faq-text-1": "After the church ceremony, organized transportation will take all guests to Estera Vinni. From Plovdiv to Esterra Vini is about 25 km (around 30 minutes by car).",

    "faq-title-2": "Is there parking?",
    "faq-text-2": "Yes, parking is located inside the Esterra Vini gated complex and is free for all guests. Please keep pathways and open areas clear so the wedding photos and movement are not obstructed. Your car may remain there until 11:00 on the day after the wedding. The guest houses, as well as the church, also offer free parking.",

    "faq-title-3": "Where can I stay overnight?",
    "faq-text-3": "Accommodation is available at Anita Guest House and Anita Relax Guest House in the center of Perushtitsa (about a 5-minute walk from the church) or at Esterra Vini, which is at the venue itself. Reservations have been made for everyone who requested them, and you can pay at reception upon check-in by card or in cash. You can check details for your reservation in the table in the \"Event Details\" section.",

    "faq-title-4": "What are the check-in and check-out times?",
    "faq-text-4": "Check-in is between 14:00 and 18:00 on September 12. Check-out is by 11:00 on September 13.",

    "faq-title-5": "How can I get back to the guest houses after the celebration?",
    "faq-text-5": "For guests staying in Perushtitsa, evening transportation is provided from Esterra Vini to the guest houses and back every full hour from 22:00 to 04:00. If you need transportation outside this schedule, you can speak with the driver.",

    "faq-title-6": "How do I get there without driving?",
    "faq-text-6": "Plovdiv taxis travel to and from Estera Vinni. We recommend booking in advance, as late-night taxi availability may be limited.",

    "faq-title-7": "Do I have a room reserved?",
    "faq-text-7": "Yes, we have made all necessary reservations and secured rooms for all guests. Please check your room details in the accommodation information section.",

    "faq-title-8": "Are amenities provided for my baby?",
    "faq-text-8": "For guests with small children, we have planned for baby cots and high chairs, which will be provided to those who have informed us in advance. Feel free to write to us if you haven't already.",

    "faq-title-9": "Who should I contact with accommodation questions?",
    "faq-text-9": "For accommodation-related questions, please contact the hosts at:<ul><li>Phone: +359 884 675 777</li><li>Email: reservations@anita.bg</li></ul>",

    "faq-title-10": "What is the dress code for the wedding?",
    "faq-text-10": "The dress code is garden chic, but any formal attire will work. For easier movement on the lawn and dancing by the pool, suitable footwear is recommended.",

    "faq-title-11": "What gift should I bring?",
    "faq-text-11": "Your presence is more than enough, but if you would like to make us happy, a monetary gift is the most suitable choice. Although Maria loves flowers very much, they are not the best option as they are expensive, difficult to transport, and would quickly wilt. If you still wish to bring something tangible, a bottle of wine for our family collection would be a lasting and cherished memory from you."
};

let l11n = l11n_bg;

const rsvp_bg = `https://docs.google.com/forms/d/e/1FAIpQLSdNRquwWZVjTRAv3svyJoYHu0vu0RuUWzTzbSfO1KETL8MJwQ/viewform?embedded=true`;
const rsvp_en = `https://docs.google.com/forms/d/e/1FAIpQLSedm3Rb5j1_toX5qE7fwZoJEVmShOt3v67GakcAGAGpCkeSlA/viewform?embedded=true`;

window.localize = function () {
    const texts = document.querySelectorAll('[data-l11n]');
    for (const text of texts) {
        text.innerHTML = l11n[text.dataset.l11n];
    }

    if (l11n == l11n_bg) {
        document.querySelector("#rsvp").querySelector("iframe").setAttribute("src", rsvp_bg);
        document.querySelector("#sign_bg").classList.remove("hidden");
        document.querySelector("#sign_en").classList.add("hidden");
        document.querySelector(".schedule").setAttribute("src", "./img/stand_canvas_bg.png");
    } else {
        document.querySelector("#rsvp").querySelector("iframe").setAttribute("src", rsvp_en);
        document.querySelector("#sign_bg").classList.add("hidden");
        document.querySelector("#sign_en").classList.remove("hidden");
        document.querySelector(".schedule").setAttribute("src", "./img/stand_canvas_en.png");
    }
};

window.localize();

const countries = [
    {
        text: 'Bulgaria',
        value: 'BG',
        html: '<img src="https://flagcdn.com/bg.svg" class="country">'
    },
    {
        text: 'United Kingdom',
        value: 'UK',
        html: '<img src="https://flagcdn.com/gb.svg" class="country">'
    }
]

var select = new SlimSelect({
    select: '#l11n',
    data: countries,
    settings: {
        showSearch: false
    },
    events: {
        afterChange: newVal => {
            console.log(newVal[0].value);
            if (newVal[0].value == "BG") {
                l11n = l11n_bg
            } else {
                l11n = l11n_en;
            }
            window.localize();
        }
    }
});

const mobileNav = document.querySelector("#mobile-nav");
mobileNav.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("shown-nav");
});

(function () {
    const img = new Image();
    img.src = "./img/countryside.png";
    img.addEventListener("load", (e) => {
        console.log(e);
        const images = document.querySelectorAll("img");
        for (const img of images) {
            if (img.hasAttribute("data-src")) {
                img.setAttribute("src", img.getAttribute("data-src"));
            }
        }

        const iframes = document.querySelectorAll("iframe");
        for (const iframe of iframes) {
            if (iframe.hasAttribute("data-src")) {
                iframe.setAttribute("src", iframe.getAttribute("data-src"));
            }
        }

        const backgroud = new Image();
        backgroud.src = "./img/flowers.png";
    });
})();