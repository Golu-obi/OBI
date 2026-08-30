// Single source of truth for site copy. Placeholders are marked TODO.

export const company = {
  name: 'OM Baba Industries',
  short: 'OBI',
  tagline: 'Architectural & door hardware · Est. 2013',
  brands: ['Dorlife', 'Theeta'],
  phone: '+91 98100 97106',
  phones: ['+91 98100 97106', '+91 98100 93106'],
  email: 'dorlife2013@gmail.com',
  address: 'H1-12L, Industrial Area, Bhiwadi (NCR), Rajasthan 301019',
  country: 'India',
};

export const topNav = [
  { label: 'Company', href: '#company' },
  { label: 'Catalogues', href: '#catalogues' },
  { label: 'Export', href: '#export' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#enquiry' },
];

export const megaMenu = [
  {
    label: 'Door hardware',
    columns: [
      { title: 'Handles & rosettes', items: ['Mortice handle sets', 'Pull handles', 'Lever handles on rose', 'Knobs & escutcheons'] },
      { title: 'Locking', items: ['Mortice lock bodies', 'Main door locks', 'Lock cylinders', 'Night latches', 'Padlocks'] },
      { title: 'Hinges', items: ['Ball-bearing butt hinges', 'Plain leaf butt hinges', 'Heavy-duty gate hinges', 'Concealed hinges'] },
      { title: 'Accessories', items: ['Tower bolts & aldrops', 'Door stoppers & guards', 'Door closers', 'Drop-down seals'] },
    ],
    promo: { title: 'Dorlife series', body: 'Finish-matched handles, locks and hinges as one specification.', img: '/img/pull-handle-grid.jpg' },
  },
  {
    label: 'Kitchen & furniture',
    columns: [
      { title: 'Hinges', items: ['Soft-close hydraulic hinges', 'Auto-close hinges', 'Special application hinges'] },
      { title: 'Drawer systems', items: ['Telescopic channels', 'Tandem boxes', 'Ball-bearing slides', 'Drawer accessories'] },
      { title: 'Storage', items: ['Pull-out baskets', 'Tall & pantry units', 'Corner units', 'Waste bins'] },
      { title: 'Mechanisms', items: ['Lift-up stays', 'Pneumatic pumps', 'Furniture locks', 'Cabinet legs & joinery'] },
    ],
    promo: { title: 'Theeta series', body: 'Volume fittings for modular kitchen and furniture lines.', img: null },
  },
  {
    label: 'Wardrobe & sliding',
    columns: [
      { title: 'Sliding systems', items: ['Top glide system', 'Bottom glide system', 'In-pocket sliding', 'Economy sliding'] },
      { title: 'Profiles', items: ['Shutter profiles', 'Gola / handleless', 'End caps & connectors'] },
      { title: 'Accessories', items: ['Wardrobe locks', 'Hanger rods & brackets', 'Pull-out trouser racks'] },
    ],
    promo: { title: 'Built for fabricators', body: 'Cut-to-length profiles and system kits, packed per shutter.', img: null },
  },
  {
    label: 'Window hardware',
    traded: true,
    columns: [
      { title: 'uPVC systems', items: ['Casement hardware', 'Sliding hardware', 'Tilt & turn hardware'] },
      { title: 'Aluminium systems', items: ['Handles & locks', 'Rollers & tracks', 'Corner cleats'] },
      { title: 'Components', items: ['Friction stays', 'Multi-point locks', 'Gaskets & seals'] },
    ],
    promo: { title: 'Traded range', body: 'Stocked fenestration hardware shipped on the same order as our manufactured lines — one invoice, one container.', img: null },
  },
];

export const heroSlides = [
  {
    kicker: 'Manufacturer & exporter · Bhiwadi, India',
    title: 'Premium door hardware, made to the millimetre.',
    body: 'Steel hinges, mortice locks, handles and complete door & kitchen fittings — manufactured under Dorlife and Theeta, and exported by the container.',
    actions: [
      { label: 'Download catalogue', href: '#catalogues', primary: true },
      { label: 'Request a price list', href: '#enquiry' },
    ],
    img: '/img/tower-bolt-door.jpg',
  },
  {
    kicker: 'Dorlife · the door line',
    title: 'One finish, every fitting on the door.',
    body: 'Handles, lock bodies, cylinders and hinges finished together in-house — so satin matches satin, lot after lot.',
    actions: [{ label: 'Explore Dorlife', href: '#catalogues', primary: true }],
    img: '/img/hinge-flat.jpg',
  },
  {
    kicker: 'Theeta · kitchen & furniture',
    title: 'Fittings that open ten thousand times.',
    body: 'Hydraulic hinges, channels and pull-outs cycle-tested per lot, packed for OEM kitchen manufacturers.',
    actions: [{ label: 'Explore Theeta', href: '#catalogues', primary: true }],
    img: null,
  },
];

export const stats = [
  { value: '2013', label: 'Established' },
  { value: '02', label: 'Registered brands' },
  { value: '400+', label: 'Catalogue SKUs' }, // TODO real count
  { value: '9', label: 'Export markets' },     // TODO real count
  { value: '24 h', label: 'Quote turnaround' },
];

// Each entry drives a card in the New arrivals rail and its own product page
// (#product/<code>). `detail` is optional — cards without it still open a page
// built from the fields above. Spec values are indicative; confirm against the
// current drawing before quoting. TODO: real figures per line.
export const newArrivals = [
  {
    code: 'DL-118-SS',
    name: 'Ball-bearing butt hinge 4"',
    spec: 'SS 304 · satin · 3 mm leaf',
    img: '/img/hinge-front.jpg',
    brand: 'Dorlife',
    detail: {
      gallery: [
        '/img/hinge-front.jpg',
        '/img/hinge-open.jpg',
        '/img/hinge-flat.jpg',
        '/img/hinge-box.jpg',
        '/img/hinge-door.jpg',
      ],
      summary:
        'A 100 × 75 mm stainless butt hinge with two sealed ball races in the knuckle, for internal and main doors that swing every day without a squeak or a sag.',
      overview:
        'The DL-118 is machined from SS 304 with a 3 mm leaf, so it carries a solid-core door without deflection at the top screw. Two shielded ball bearings sit between the knuckles; the load rides on the races rather than on bare pin-and-barrel, which keeps the swing light after tens of thousands of cycles and stops the fretting noise that plain hinges develop. The pin is fixed and riveted — non-rising — and the whole hinge is finished in-house to the same satin as the matching Dorlife handles and lock plates.',
      features: [
        'Two shielded ball bearings per hinge — tested past 200,000 cycles',
        'SS 304 body: no rust bleed in bathrooms or coastal air',
        '3 mm leaf resists sag on 35–45 kg solid-core doors',
        'Fixed, riveted pin — cannot be knocked out from the hinge side',
        'Countersunk holes for 8-gauge screws; screw pack included',
        'Finish-matched to Dorlife handles, escutcheons and bolts',
      ],
      applications: ['Flush and panel internal doors', 'Apartment main doors', 'Hotel and hospital corridors', 'Fire-door assemblies (when tested as a set)'],
      finishes: ['Satin stainless', 'Mirror-polished stainless', 'Matt black PVD', 'Antique bronze PVD'],
      specs: [
        ['Size', '100 × 75 mm (4" × 3")'],
        ['Leaf thickness', '3.0 mm'],
        ['Material', 'Stainless steel 304'],
        ['Knuckle', '5-knuckle, twin ball bearing'],
        ['Pin', 'Ø4 mm fixed stainless, riveted'],
        ['Holes', '6 × Ø5.5 mm countersunk'],
        ['Recommended door leaf', 'Up to 45 kg / 1000 mm wide, pair'],
        ['Cycle rating', '200,000 (EN 1935 grade 13 equivalent)'],
        ['Salt spray', '240 h, no red rust'],
        ['Packing', '2 pcs + screws per box · 50 boxes / carton'],
      ],
    },
  },
  {
    code: 'DL-233-SS',
    name: 'Pull handle · curved bow',
    spec: 'SS 304 · satin · 160 mm centres',
    img: '/img/pull-handle-front.jpg',
    brand: 'Dorlife',
    detail: {
      gallery: ['/img/pull-handle-front.jpg', '/img/pull-handle-angle.jpg', '/img/pull-handle-grid.jpg'],
      summary:
        'A solid stainless bow pull with a flat, brushed grip and countersunk end pads — for cabinet doors, drawers, wardrobe shutters and light glazed doors.',
      overview:
        'Turned and milled from SS 304 bar, the DL-233 has a gentle bow that clears knuckles without projecting far off the face. The grip is milled flat and grained lengthways so it reads as one piece with a satin shutter; the feet are drilled and counterbored for M4 machine screws from behind. Because it is solid stainless rather than plated zinc, the edges stay bright where a thumb runs the same track for years.',
      features: [
        'Solid SS 304 bar — no plating to wear through',
        'Lengthways satin grain matches brushed shutters and appliances',
        'Counterbored feet: screw heads sit flush inside the door',
        'Curved profile clears rings and knuckles',
        'Machine screws for 16–22 mm doors supplied',
      ],
      applications: ['Kitchen and wardrobe shutters', 'Chest and vanity drawers', 'Light framed-glass doors', 'Furniture and shopfitting'],
      finishes: ['Satin stainless', 'Mirror-polished stainless', 'Matt black PVD', 'Brushed brass PVD'],
      specs: [
        ['Centre-to-centre', '160 mm'],
        ['Overall length', '188 mm'],
        ['Projection', '32 mm'],
        ['Grip section', '18 × 8 mm flat'],
        ['Material', 'Stainless steel 304, solid'],
        ['Fixing', '2 × M4 machine screws (16 / 19 / 22 mm supplied)'],
        ['Finish', 'Hand-drawn satin, passivated'],
        ['Packing', '1 pc + screws per polybag · 100 / carton'],
      ],
    },
  },
  { code: 'DL-312-AN', name: 'Mortice handle set · Antique', spec: 'Zinc alloy · 250 mm plate', img: null, brand: 'Dorlife' },
  { code: 'DL-207-70', name: 'Mortice lock body 70 mm', spec: 'SS front · brass cylinder', img: null, brand: 'Dorlife' },
  { code: 'TH-404-FO', name: 'Soft-close hinge · full overlay', spec: 'Nickel-plated · 105°', img: null, brand: 'Theeta' },
  { code: 'TH-452-18', name: 'Telescopic channel 18"', spec: 'Zinc-plated · 45 kg rating', img: null, brand: 'Theeta' },
  {
    code: 'DL-540-12',
    name: 'Tower bolt 12" heavy',
    spec: 'SS 202 · matt black option',
    img: '/img/tower-bolt-white.jpg',
    brand: 'Dorlife',
    detail: {
      gallery: ['/img/tower-bolt-white.jpg', '/img/tower-bolt-grid.jpg', '/img/tower-bolt-door.jpg'],
      summary:
        'A 300 mm barrel bolt on a one-piece backplate, with a turned knob and a nylon-tipped shoot that drops into the keep without a rattle.',
      overview:
        'The DL-540 runs a Ø12 mm stainless shoot in a full-length pressed channel, so the bolt stays straight over its throw instead of drooping the way strap bolts do. The knob is turned from solid bar and pinned; the tip carries a moulded cap that silences the throw and takes the wear against the keep. Backplate, guides and keep are one hardware set, packed with matched screws, and the whole bolt is available powder-coated matt black over the stainless for dark joinery.',
      features: [
        'Ø12 mm solid stainless shoot — resists prying and spreading',
        'Full-length channel keeps the throw straight and quiet',
        'Moulded tip cap: no metal-on-metal clack, less keep wear',
        'One-piece backplate with pre-set guides — faster true fit',
        'Matched keep and screw pack in the box',
        'Optional matt-black powder coat over stainless',
      ],
      applications: ['Double-door leading leaf', 'Gates and utility doors', 'Terrace and store doors', 'Windows and ventilators (short sizes)'],
      finishes: ['Satin stainless', 'Matt black powder coat', 'Antique bronze', 'Mirror-polished stainless'],
      specs: [
        ['Nominal length', '300 mm (12")'],
        ['Bolt diameter', 'Ø12 mm'],
        ['Throw', '38 mm'],
        ['Backplate', '1.6 mm stainless, single piece'],
        ['Material', 'Stainless steel 202'],
        ['Knob', 'Solid turned bar, pinned'],
        ['Fixing', '10 × Ø4.5 mm countersunk, screws supplied'],
        ['Also made in', '100 / 150 / 200 / 250 / 375 mm'],
        ['Packing', '1 set + keep + screws per box · 50 / carton'],
      ],
    },
  },
  { code: 'TH-506-24', name: 'Multi-point lock 2400 mm', spec: 'Espagnolette · 3-point', img: null, brand: 'Theeta' },
];

export const capabilities = [
  { title: 'In-house tool room', body: 'Dies made and maintained on site, so a custom profile is a drawing away.' },
  { title: 'Lot-wise testing', body: 'Cycle, salt-spray and load reports travel with the export documents.' },
  { title: 'OEM & private label', body: 'Your brand on the box, your carton spec, your barcode.' },
  { title: 'Export packing', body: 'Mixed-brand containers, FOB Mundra or Nhava Sheva.' },
];

export const catalogues = [
  { title: 'Dorlife · door hardware', meta: '2026 · 84 pp · 12 MB PDF', href: '#', img: '/img/hinge-box.jpg' },
  { title: 'Theeta · kitchen fittings', meta: '2026 · 62 pp · 9 MB PDF', href: '#', img: null },
  { title: 'Wardrobe & sliding', meta: '2026 · 40 pp · 6 MB PDF', href: '#', img: null },
];

export const quality = [
  { kicker: 'ISO 9001', title: 'Quality management', body: 'Documented process control from raw coil to packed carton.' },
  { kicker: 'Salt spray', title: '96–240 h tested', body: 'Finish endurance rated per family; reports issued per lot.' },
  { kicker: 'Cycle test', title: '100,000 operations', body: 'Locks and hinges cycled before a code is listed.' },
  { kicker: 'Documents', title: 'HS codes & COO', body: 'Packing lists, HS codes and certificates of origin prepared in-house.' },
];

export const markets = ['UAE', 'Saudi Arabia', 'Kenya', 'Nigeria', 'Nepal', 'Sri Lanka']; // TODO real list

export const testimonials = [
  { quote: 'We switched our whole main-door line to Dorlife hinges. Two years, no callbacks on finish.', by: 'Purchase head, door manufacturer · Gurugram' },
  { quote: 'One container, three brands, one invoice. That is the part our accounts team likes.', by: 'Importer · Dubai' },
  { quote: 'They sent the salt-spray report before we asked. Nobody does that.', by: 'Project buyer · Nairobi' },
];

// Blog / "From the bench". The home page shows the first three; the blog index
// (#blog) shows all, and each opens at #blog/<slug>. `body` is an array of
// paragraphs. TODO: real author bylines and publish dates.
export const posts = [
  {
    slug: 'reading-a-hinge-spec',
    tag: 'Specification',
    date: '2026-02-11',
    read: '4 min read',
    title: 'How to read a hinge spec: leaf, knuckle, load',
    excerpt: 'The three numbers that decide whether a door sags in year two.',
    img: '/img/hinge-flat.jpg',
    body: [
      'Every hinge datasheet leads with a size — 100 × 75, 4 × 3 — and most buyers stop reading there. The size tells you the plate will cover the mortice. It tells you almost nothing about whether the door will still shut cleanly after two years of use. Three other numbers do that work.',
      'The first is leaf thickness. A 4-inch hinge pressed from 2 mm strip and one machined from 3 mm plate look identical on a shelf and behave very differently on a 40 kg solid-core door. Thin leaves flex along the top screw line, the door drops a millimetre or two, and the latch stops meeting the strike. For anything heavier than a hollow-core internal door, hold out for 3 mm.',
      'The second is the knuckle: how many, and what runs inside it. A five-knuckle hinge spreads the load over more bearing surface than a three-knuckle one. Inside, a plain pin-and-barrel hinge carries the whole door on bare metal sliding on bare metal — it works, but it wears, and a worn knuckle is what you hear as a creak. Two sealed ball races take that load off the sliding surfaces, so the swing stays light and quiet well past 100,000 cycles.',
      'The third is the pin. A fixed, riveted pin cannot be driven out — which matters on any door that opens outward into a corridor or a street, because a loose pin is a way past the lock. A rising or removable pin is a convenience for hanging heavy doors single-handed, but specify it knowing the trade-off.',
      'Put together, the spec you actually want for a main door reads something like: 100 × 75 mm, 3 mm leaf, five-knuckle, twin ball bearing, fixed pin, SS 304. Everything after that — finish, screw gauge, packing — is preference. Those five phrases are the ones carrying the door.',
    ],
  },
  {
    slug: 'satin-that-matches',
    tag: 'Finishes',
    date: '2026-01-20',
    read: '3 min read',
    title: 'Why satin from two lots should still match',
    excerpt: 'In-house plating, and the tolerance we hold on it.',
    img: null,
    body: [
      'A door set fails a site inspection more often for colour than for function. The handle is right, the hinge is right, but the hinge came from a different lot and reads a shade warmer than the handle under the lobby lights. Nobody can say exactly what is wrong; they just know it looks bought in pieces.',
      'The cause is almost always split processing. When plating is sent out, each batch meets a slightly different bath chemistry, temperature and dwell time, and satin — which is a mechanical grain plus a thin plated layer — shows every one of those differences.',
      'We plate on site, on one line, to a fixed cycle. Grain direction is held the same way across handles, plates and hinge leaves so the light catches them alike. Each shift pulls a sample against a retained master and a gloss reading; anything outside the band goes back before it is packed.',
      'It is not glamorous work and it does not show up on a spec sheet. But it is the reason a Dorlife hinge ordered this year still matches the handles you bought last year — and the reason we can put four families in one carton and have them look like a set.',
    ],
  },
  {
    slug: 'mixed-container-packing',
    tag: 'Export',
    date: '2025-12-08',
    read: '5 min read',
    title: 'Packing a mixed container without breakage',
    excerpt: 'Carton spec, pallet plan and the labelling importers ask for.',
    img: '/img/manufacturing-plant.jpg',
    body: [
      'A container of hardware is deceptively heavy and deceptively fragile. Dense metal parts concentrate weight in small cartons; finishes chip against each other in transit. A mixed load — hinges, locks, channels, profiles — multiplies both problems because the cartons are all different sizes.',
      'We pack to a fixed carton grid. Inner boxes are sized so a full carton lands between 12 and 18 kg — heavy enough to fill the cube, light enough for one person to stack. Plated parts are poly-bagged individually or interleaved; nothing plated touches another plated part.',
      'Cartons are palletised, not floor-loaded. Pallets stop the bottom layer crushing, keep the load off a wet floor, and let the importer break the container down with a pallet truck instead of by hand. Corner boards and two straps per pallet; stretch wrap over the top.',
      'Every carton carries the same four marks: your item code, our lot number, quantity, and gross weight. The lot number is the thread back to the cycle and salt-spray report for that batch, so a query two years later still has an answer.',
      'The pallet plan and a full packing list go out before the container is booked, so the importer can pre-clear and plan the unload. None of this is exotic — it is just decided once and done the same way every shipment.',
    ],
  },
  {
    slug: 'ss202-ss304-brass',
    tag: 'Materials',
    date: '2026-03-03',
    read: '4 min read',
    title: 'SS 202, SS 304 or brass: choosing the body material',
    excerpt: 'Where each one earns its price, and where it does not.',
    img: null,
    body: [
      'Three materials cover almost every part we make, and buyers routinely over-spec or under-spec because the choice is treated as a grade ladder rather than a set of trade-offs.',
      'SS 202 is the workhorse for tower bolts, aldrops and gate fittings. It takes a good finish and machines cleanly. In dry internal air it lasts indefinitely; in a bathroom or within a few kilometres of the sea it will eventually show light surface spotting. For a bolt on an internal double door, that is a non-issue and you are paying for strength, not chemistry.',
      'SS 304 is the choice wherever the part gets wet or handled constantly — hinges, bathroom fittings, coastal projects, anything a specification calls "marine". It resists the pitting that catches 202 out. The premium over 202 is real but modest, and on a hinge it buys you the difference between a clean knuckle and a rust bleed at the screw heads.',
      'Brass is not a step up from stainless; it is a different answer. It is the material for lock cylinders and lever mechanisms where you want a self-lubricating bearing surface, and for finishes — antique, aged bronze, brushed gold — that stainless cannot carry convincingly. It is softer, heavier and dearer, so it belongs in the working parts of a lock and the visible furniture, not the plate behind them.',
      'The practical rule: 202 for accessories on dry internal doors, 304 for anything that swings or gets wet, brass for cylinders and for the finishes that sell the door.',
    ],
  },
  {
    slug: 'private-label-checklist',
    tag: 'OEM',
    date: '2026-03-24',
    read: '3 min read',
    title: 'Private-label hardware: what we need to start your run',
    excerpt: 'Artwork, barcodes, carton marks and the one drawing that saves a week.',
    img: null,
    body: [
      'Most private-label delays are not production delays. They are artwork going back and forth in the week before a lot is due to be packed. A short brief at the start removes almost all of it.',
      'Send print-ready box artwork as vector files with fonts outlined, at actual size, with bleed. Tell us the box material and finish you want — matt or gloss lamination, kraft or white board — because the same file prints differently on each.',
      'Give us the barcode number range, not just one code, and say whether you want EAN-13 or a retailer-specific symbology. We generate and verify the bars at the correct magnification so they scan first time at the till.',
      'For carton marks, list exactly what your warehouse and your customs broker need: importer code, PO reference, country-of-origin wording, handling icons. We keep this as a template per customer so every shipment matches.',
      'And if you are labelling a product that is not already in our catalogue, one dimensioned drawing with tolerances settles in an hour what a string of emails settles in a week. Everything else — MOQs, lead time, terms — the export desk will walk you through against your specific list.',
    ],
  },
];

// ── About / Company page (#company) ─────────────────────────────────────
export const about = {
  lead:
    'OM Baba Industries makes door, kitchen and furniture hardware in Bhiwadi, on the edge of Delhi NCR, and ships it to importers and OEM manufacturers across nine markets. We have run the same factory since 2013 under two brands of our own — Dorlife for the door, Theeta for the kitchen and wardrobe — and as a private-label supplier for buyers who put their own name on the box.',
  story: [
    'The company began as a press shop: three power presses, a handful of dies, and one product line of steel butt hinges sold to door manufacturers in the north Indian belt. The pitch then is the pitch now — a hinge that is cut square, finished evenly and packed so it arrives that way.',
    'What changed is scope. Buyers who trusted the hinge asked for the handle, then the lock, then the whole door set finished to one colour. Meeting that meant bringing plating in-house and building a tool room that could turn a customer drawing into a die without going outside. Dorlife was the name we gave the finish-matched door range; Theeta followed for the kitchen and wardrobe fittings that the same buyers were importing separately.',
    'Today the catalogue runs past 400 active codes across four families. Roughly two-thirds of it is exported. The presses, the plating line, assembly and the packing hall are still on one floor in Bhiwadi, which is the whole point: a satin hinge and a satin handle leave the building matched, and a private-label run can start without adding a new supplier to anyone’s chain.',
  ],
  pillars: [
    { title: 'One roof, one finish', body: 'Pressing, polishing, plating, assembly and packing on a single floor — so parts from different families still match, lot after lot.' },
    { title: 'Made to a drawing', body: 'An in-house tool room maintains our dies and cuts new ones, so a custom profile or a private-label part is a drawing away, not a new vendor.' },
    { title: 'Tested by the lot', body: 'Cycle, salt-spray and load checks run per batch. The reports are filed against the lot number printed on the carton.' },
    { title: 'Packed for the port', body: 'A fixed carton grid, palletised loads and consistent case marks — mixed-brand containers that clear customs without a query.' },
  ],
  timeline: [
    { year: '2013', text: 'OM Baba Industries registered in Bhiwadi. First line of steel butt hinges into production.' },
    { year: '2016', text: 'Dorlife brand launched — handles, lock bodies and hinges finished to one satin standard.' },
    { year: '2019', text: 'Theeta brand added for modular kitchen and wardrobe fittings. In-house plating line commissioned.' },
    { year: '2021', text: 'Tool room expanded. First full private-label programmes for Gulf and East African importers.' },
    { year: '2024', text: 'Catalogue passes 400 active codes across four families. Export desk moves to 24-hour quoting.' },
  ],
};

// ── Export page (#export) ───────────────────────────────────────────────
export const exportInfo = {
  lead:
    'About two-thirds of what we press leaves the country. The export desk quotes in your currency and incoterm, consolidates our manufactured brands and stocked traded lines into one container, and prepares the document set so the shipment clears without a query.',
  process: [
    { step: '01', title: 'Enquiry', body: 'Send the codes and quantities, your nearest port and your target incoterm. Drawings or samples for anything not already in the catalogue.' },
    { step: '02', title: 'Quotation', body: 'A line-by-line price list in your currency, with lead time per line and carton / CBM data. Usually within one working day.' },
    { step: '03', title: 'Samples & PI', body: 'Pre-production samples on request. A proforma invoice once the list is agreed — 30% advance, balance against documents is the usual term.' },
    { step: '04', title: 'Production', body: 'Lots scheduled against the PI. Private-label artwork and barcodes proofed and approved before any carton is printed.' },
    { step: '05', title: 'Inspection', body: 'Cycle, salt-spray and load checks per lot; a pre-shipment report with photographs before the container is stuffed. Third-party inspection welcome.' },
    { step: '06', title: 'Dispatch', body: 'FOB Mundra or Nhava Sheva, or CIF your port. The full document set is couriered and emailed the day the vessel sails.' },
  ],
  incoterms: ['EXW Bhiwadi works', 'FOB Mundra / Nhava Sheva', 'CIF or CFR destination port'],
  ports: ['Mundra, Gujarat', 'Nhava Sheva, Mumbai'],
  privateLabel:
    'Your brand on the box, your carton spec, your barcode, your warranty card. Minimums are lower than most buyers expect — a single product family is enough to start a programme, and the artwork is proofed before printing.',
};

export const footerColumns = [
  { title: 'Company', links: [['About us', '#company'], ['Manufacturing', '#manufacturing'], ['Quality & certifications', '#export'], ['Notes & articles', '#blog'], ['Become a distributor', '#dealer']] },
  { title: 'Categories', links: [['Door hardware', '#catalogues'], ['Locks & security', '#catalogues'], ['Kitchen fittings', '#catalogues'], ['Wardrobe & sliding', '#catalogues'], ['Furniture fittings', '#catalogues'], ['Window hardware', '#catalogues']] },
  { title: 'Support', links: [['Catalogues', '#catalogues'], ['Request a price list', '#enquiry'], ['Export documentation', '#enquiry'], ['Warranty', '#'], ['Privacy', '#']] },
];
