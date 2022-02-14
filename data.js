// nav-links ( all pages )
const linksUl = [{
        href: "index.html",
        desc: "αρχική",
        fontIcon: "fas fa-home fa-sm fa-nav",
    },
    {
        href: "about.html",
        desc: "Η εταιρεία μας",
        fontIcon: "fas fa-book-open fa-sm fa-nav",
    },
    {
        href: "calcCost.html",
        desc: "υπολογισμός κόστους",
        fontIcon: "fas fa-calculator fa-sm fa-nav",
    },
    {
        href: "contact.html",
        desc: "επικοινωνία",
        fontIcon: "fas fa-inbox fa-sm fa-nav",
    },
    {
        href: "newsletterSignUp.html",
        desc: "Εγγραφή στο newsLetter",
        fontIcon: "fas fa-user-plus fa-sm fa-nav",
    },
];

//nav social-links (all pages )
const socialIcons = [{
        href: "https://www.facebook.com",
        icon: "fab fa-facebook",
    },
    {
        href: "https://www.twitter.com",
        icon: "fab fa-twitter",
    },
    {
        href: "https://www.instagram.com",
        icon: "fab fa-instagram",
    },
    {
        href: "https://www.linkedin.com",
        icon: "fab fa-linkedin",
    },
    {
        href: "https://www.sketch.com",
        icon: "fab fa-sketch",
    },
];

// services ( index.html )
const services = [{
        id: "a1",
        title: "Ενοικίαση Ηχητικού Εξοπλισμού",
        img: "./images/service1.jpeg",
        smallDesc: "Στην my-eEvent, παραλαμβάνουμε και παραδίδουμε ηχητικούς εξοπλισμούς εντός πόλης στην Αττική την επόμενη εργάσιμη ημέρα. Ο χρόνος παράδοσης για χερσαίους και νησιωτικούς προορισμούς είναι 1 – 2 εργάσιμες ημέρες και ενδέχεται να διαφοροποιηθεί ανάλογα με τις συνθήκες που μπορεί να ισχύουν...",
        mediumDesc: "Στην my-eEvent, παραλαμβάνουμε και παραδίδουμε ηχητικούς εξοπλισμούς εντός πόλης στην Αττική την επόμενη εργάσιμη ημέρα. Ο χρόνος παράδοσης για χερσαίους και νησιωτικούς προορισμούς είναι 1 – 2 εργάσιμες ημέρες και ενδέχεται να διαφοροποιηθεί ανάλογα με τις συνθήκες που μπορεί να ισχύουν.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero, explicabo voluptatem culpa soluta enim officia tempora. Voluptatum, quos ab. Quisquam animi veniam recusandae facere!...",
        bigDesc: "Στην my-eEvent, παραλαμβάνουμε και παραδίδουμε ηχητικούς εξοπλισμούς εντός πόλης στην Αττική την επόμενη εργάσιμη ημέρα. Ο χρόνος παράδοσης για χερσαίους και νησιωτικούς προορισμούς είναι 1 – 2 εργάσιμες ημέρες και ενδέχεται να διαφοροποιηθεί ανάλογα με τις συνθήκες που μπορεί να ισχύουν.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero, explicabo voluptatem culpa soluta enim officia tempora. Voluptatum, quos ab. Quisquam animi veniam recusandae facere! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laudantium consequatur repellendus quam aspernatur, odio, fugit aliquid sed ducimus totam aliquam eaque nobis, optio dolores saepe. Tenetur maxime, quis harum consequatur nulla, neque voluptatum itaque nesciunt ut sint quas quasi voluptate beatae rem officia iste amet modi quidem illo aperiam perspiciatis culpa provident? Voluptates alias excepturi sit, aperiam vero culpa quidem ducimus explicabo a aspernatur doloribus fugit assumenda labore dolores beatae ipsa dolorum minus at dolor quae esse! Pariatur quia eligendi, impedit temporibus vel numquam qui ipsam rem quas possimus facere repellat odio consequuntur? Qui molestias quae, doloremque dolore optio officiis quam accusantium beatae a labore laborum eos praesentium nesciunt quidem deserunt distinctio sit, atque libero ad. In ab dolorum nihil non quaerat, commodi rerum illum voluptas pariatur eos praesentium consequuntur veniam, ipsam vel asperiores eius sunt consectetur assumenda placeat. Non suscipit neque, atque officia numquam tempora voluptatem reiciendis enim?",

    },
    {
        id: "a2",
        title: "Ενοικίαση φωτισμού",
        img: "./images/service2.jpg",
        smallDesc: "Αποδίδουμε την αξία των αντικαταβολών σας για αποστολές φωτισμού Αττικής την επόμενη εργάσιμη της ημέρας παράδοσης και δίνουμε την δυνατότητα για μετρητά στην έδρα σας, χωρίς συμψηφισμό τιμολογίων. Παράλληλα, ακολουθεί αναλυτική ενημέρωση σε ηλεκτρονική μορφή (email) για την αυτόματη ενημέρωση σας. Στην υπόλοιπη Ελλάδα, η απόδοση της εισπραγμένης αξίας γίνεται εντός 2-3 εργασίμων ημερών από την ημέρα παράδοσης της αποστολής...",
        mediumDesc: "Αποδίδουμε την αξία των αντικαταβολών σας για αποστολές φωτισμού Αττικής την επόμενη εργάσιμη της ημέρας παράδοσης και δίνουμε την δυνατότητα για μετρητά στην έδρα σας, χωρίς συμψηφισμό τιμολογίων. Παράλληλα, ακολουθεί αναλυτική ενημέρωση σε ηλεκτρονική μορφή (email) για την αυτόματη ενημέρωση σας. Στην υπόλοιπη Ελλάδα, η απόδοση της εισπραγμένης αξίας γίνεται εντός 2-3 εργασίμων ημερών από την ημέρα παράδοσης της αποστολής.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero, explicabo voluptatem culpa soluta enim officia tempora. Voluptatum, quos ab. Quisquam animi veniam recusandae facere!...",
        bigDesc: "Αποδίδουμε την αξία των αντικαταβολών σας για αποστολές φωτισμού Αττικής την επόμενη εργάσιμη της ημέρας παράδοσης και δίνουμε την δυνατότητα για μετρητά στην έδρα σας, χωρίς συμψηφισμό τιμολογίων. Παράλληλα, ακολουθεί αναλυτική ενημέρωση σε ηλεκτρονική μορφή (email) για την αυτόματη ενημέρωση σας. Στην υπόλοιπη Ελλάδα, η απόδοση της εισπραγμένης αξίας γίνεται εντός 2-3 εργασίμων ημερών από την ημέρα παράδοσης της αποστολής.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero, explicabo voluptatem culpa soluta enim officia tempora. Voluptatum, quos ab. Quisquam animi veniam recusandae facere!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laudantium consequatur repellendus quam aspernatur, odio, fugit aliquid sed ducimus totam aliquam eaque nobis, optio dolores saepe. Tenetur maxime, quis harum consequatur nulla, neque voluptatum itaque nesciunt ut sint quas quasi voluptate beatae rem officia iste amet modi quidem illo aperiam perspiciatis culpa provident? Voluptates alias excepturi sit, aperiam vero culpa quidem ducimus explicabo a aspernatur doloribus fugit assumenda labore dolores beatae ipsa dolorum minus at dolor quae esse! Pariatur quia eligendi, impedit temporibus vel numquam qui ipsam rem quas possimus facere repellat odio consequuntur? Qui molestias quae, doloremque dolore optio officiis quam accusantium beatae a labore laborum eos praesentium nesciunt quidem deserunt distinctio sit, atque libero ad. In ab dolorum nihil non quaerat, commodi rerum illum voluptas pariatur eos praesentium consequuntur veniam, ipsam vel asperiores eius sunt consectetur assumenda placeat. Non suscipit neque, atque officia numquam tempora voluptatem reiciendis enim?",
    },
    {
        id: "a3",
        title: "Υπηρεσίες Catering",
        img: "./images/service3.jpeg",
        smallDesc: "Στην my-eEvent δίνουμε την δυνατότητα για συνεδρίου Catering την ίδια ημέρα (αυθημερόν) εντός πόλης...",
        mediumDesc: "Στην my-eEvent δίνουμε την δυνατότητα για συνεδρίου Catering την ίδια ημέρα (αυθημερόν) εντός πόλης.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore atque nulla perspiciatis, hic, nostrum reiciendis provident quia sequi, dolores cum amet sint aliquam soluta?...",
        bigDesc: "Στην my-eEvent δίνουμε την δυνατότητα για συνεδρίου Catering την ίδια ημέρα (αυθημερόν) εντός πόλης.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore atque nulla perspiciatis, hic, nostrum reiciendis provident quia sequi, dolores cum amet sint aliquam soluta?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laudantium consequatur repellendus quam aspernatur, odio, fugit aliquid sed ducimus totam aliquam eaque nobis, optio dolores saepe. Tenetur maxime, quis harum consequatur nulla, neque voluptatum itaque nesciunt ut sint quas quasi voluptate beatae rem officia iste amet modi quidem illo aperiam perspiciatis culpa provident? Voluptates alias excepturi sit, aperiam vero culpa quidem ducimus explicabo a aspernatur doloribus fugit assumenda labore dolores beatae ipsa dolorum minus at dolor quae esse! Pariatur quia eligendi, impedit temporibus vel numquam qui ipsam rem quas possimus facere repellat odio consequuntur? Qui molestias quae, doloremque dolore optio officiis quam accusantium beatae a labore laborum eos praesentium nesciunt quidem deserunt distinctio sit, atque libero ad. In ab dolorum nihil non quaerat, commodi rerum illum voluptas pariatur eos praesentium consequuntur veniam, ipsam vel asperiores eius sunt consectetur assumenda placeat. Non suscipit neque, atque officia numquam tempora voluptatem reiciendis enim?",
    },
    {
        id: "a4",
        title: "Παροχή προσωπικού",
        img: "./images/service4.jpeg",
        smallDesc: "Στην my-eEvent ασφαλίζουμε και αποζημιώνουμε στο 100% την παροχή προσωπικού για κάθε συνέδριο που διεκπεραιώνεται εντός της Αθήνας, χωρίς επιπλέον χρέωση. Οι παροχές προσωπικού προς την υπόλοιπη Ελλάδα (χερσαία & νησιωτική) είναι ασφαλισμένες μέχρι του ποσού των 70 ευρώ αν πρόκειται για έγγραφα και των 220 ευρώ αν πρόκειται για δέματα...",
        mediumDesc: "Στην my-eEvent ασφαλίζουμε και αποζημιώνουμε στο 100% την παροχή προσωπικού για κάθε συνέδριο που διεκπεραιώνεται εντός της Αθήνας, χωρίς επιπλέον χρέωση. Οι παροχές προσωπικού προς την υπόλοιπη Ελλάδα (χερσαία & νησιωτική) είναι ασφαλισμένες μέχρι του ποσού των 70 ευρώ αν πρόκειται για έγγραφα και των 220 ευρώ αν πρόκειται για δέματα.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore atque nulla perspiciatis, hic, nostrum reiciendis provident quia sequi, dolores cum amet sint aliquam soluta?...",
        bigDesc: "Στην my-eEvent ασφαλίζουμε και αποζημιώνουμε στο 100% την παροχή προσωπικού για κάθε συνέδριο που διεκπεραιώνεται εντός της Αθήνας, χωρίς επιπλέον χρέωση. Οι παροχές προσωπικού προς την υπόλοιπη Ελλάδα (χερσαία & νησιωτική) είναι ασφαλισμένες μέχρι του ποσού των 70 ευρώ αν πρόκειται για έγγραφα και των 220 ευρώ αν πρόκειται για δέματα.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore atque nulla perspiciatis, hic, nostrum reiciendis provident quia sequi, dolores cum amet sint aliquam soluta?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laudantium consequatur repellendus quam aspernatur, odio, fugit aliquid sed ducimus totam aliquam eaque nobis, optio dolores saepe. Tenetur maxime, quis harum consequatur nulla, neque voluptatum itaque nesciunt ut sint quas quasi voluptate beatae rem officia iste amet modi quidem illo aperiam perspiciatis culpa provident? Voluptates alias excepturi sit, aperiam vero culpa quidem ducimus explicabo a aspernatur doloribus fugit assumenda labore dolores beatae ipsa dolorum minus at dolor quae esse! Pariatur quia eligendi, impedit temporibus vel numquam qui ipsam rem quas possimus facere repellat odio consequuntur? Qui molestias quae, doloremque dolore optio officiis quam accusantium beatae a labore laborum eos praesentium nesciunt quidem deserunt distinctio sit, atque libero ad. In ab dolorum nihil non quaerat, commodi rerum illum voluptas pariatur eos praesentium consequuntur veniam, ipsam vel asperiores eius sunt consectetur assumenda placeat. Non suscipit neque, atque officia numquam tempora voluptatem reiciendis enim?",
    },
];


// tables cost ( calcCost.html )
const valuesCost = [{
        crowd: "<=500",
        costPerEmployee: "10&euro;/ώρα",
        fixedCostPerDay: "500&euro;/ημέρα",
        supplyPerEmployee: "0,5&euro;",
    },
    {
        crowd: "501-1000",
        costPerEmployee: "8&euro;/ώρα",
        fixedCostPerDay: "400&euro;/ημέρα",
        supplyPerEmployee: "0,4&euro;",
    },
    {
        crowd: "1001-1500",
        costPerEmployee: "6&euro;/ώρα",
        fixedCostPerDay: "300&euro;/ημέρα",
        supplyPerEmployee: "0,3&euro;",
    },
    {
        crowd: "1501-2000",
        costPerEmployee: "5&euro;/ώρα",
        fixedCostPerDay: "200&euro;/ημέρα",
        supplyPerEmployee: "0,2&euro;",
    },
    {
        crowd: ">2000",
        costPerEmployee: "4&euro;/ώρα",
        fixedCostPerDay: "100&euro;/ημέρα",
        supplyPerEmployee: "0,15&euro;",
    },
];


export { linksUl, socialIcons, services, valuesCost };